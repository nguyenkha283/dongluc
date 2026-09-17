import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function imagePersistencePlugin(): Plugin {
  return {
    name: 'image-persistence-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        // Explicitly serve uploads folder images directly with proper MIME type
        if (req.url && req.url.startsWith('/uploads/')) {
          const cleanUrl = req.url.split('?')[0];
          const filePath = path.resolve(process.cwd(), 'public', cleanUrl.slice(1));
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes: Record<string, string> = {
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.webp': 'image/webp',
              '.svg': 'image/svg+xml',
              '.gif': 'image/gif',
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }

        if (req.url === '/api/save-custom-images' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body || '{}');
              const incomingImages = parsed.images || {};
              const incomingStyles = parsed.styles || {};

              const uploadsDir = path.resolve(process.cwd(), 'public/uploads');
              if (!fs.existsSync(uploadsDir)) {
                fs.mkdirSync(uploadsDir, { recursive: true });
              }

              const jsonPath = path.resolve(process.cwd(), 'src/data/persistedCustomImages.json');
              const publicJsonPath = path.resolve(process.cwd(), 'public/persistedCustomImages.json');

              let existing: { images: Record<string, string>; styles: Record<string, any> } = { images: {}, styles: {} };
              if (fs.existsSync(jsonPath)) {
                try {
                  existing = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
                } catch {
                  // ignore
                }
              }

              const savedImages: Record<string, string> = { ...(existing.images || {}) };
              let count = 0;

              for (const [slotId, urlOrData] of Object.entries(incomingImages)) {
                if (typeof urlOrData !== 'string' || !urlOrData) continue;

                if (urlOrData.startsWith('data:image/')) {
                  const matches = urlOrData.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
                  if (matches) {
                    let ext = matches[1].toLowerCase();
                    if (ext === 'jpeg') ext = 'jpg';
                    if (ext === 'svg+xml') ext = 'svg';
                    const base64Data = matches[2];
                    const filename = `${slotId}.${ext}`;
                    const filePath = path.join(uploadsDir, filename);
                    fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
                    savedImages[slotId] = `/uploads/${filename}`;
                    count++;
                  }
                } else {
                  savedImages[slotId] = urlOrData;
                  count++;
                }
              }

              const mergedStyles = { ...(existing.styles || {}), ...incomingStyles };
              const resultData = {
                images: savedImages,
                styles: mergedStyles,
                lastUpdated: new Date().toISOString(),
              };

              fs.writeFileSync(jsonPath, JSON.stringify(resultData, null, 2));
              fs.writeFileSync(publicJsonPath, JSON.stringify(resultData, null, 2));

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, count, data: resultData }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err?.message || 'Server error' }));
            }
          });
          return;
        }

        if (req.url === '/api/get-persisted-images' && req.method === 'GET') {
          const jsonPath = path.resolve(process.cwd(), 'src/data/persistedCustomImages.json');
          if (fs.existsSync(jsonPath)) {
            const content = fs.readFileSync(jsonPath, 'utf-8');
            res.setHeader('Content-Type', 'application/json');
            res.end(content);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ images: {}, styles: {} }));
          }
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imagePersistencePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
