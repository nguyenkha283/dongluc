import React from 'react';

/**
 * Key Visual Artwork components directly matching the user's official Dong Luc Tower poster:
 * - Midnight deep cobalt navy background (#030d22 - #061536)
 * - Fiery Crimson acrylic brush strokes & paint splatters
 * - Electric Cyan & Neon Blue speedlines & lens flares
 * - Halftone dot matrices (red & cyan)
 * - City skyline traffic light trails at sunset
 * - Hand-drawn doodle icons (sparkle rays, pushpins, stars, energy arcs)
 */

export const KeyVisualHeroBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Deep Midnight Cobalt Base - Smooth gradient blending into seamless background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030d24]/60 via-transparent to-transparent pointer-events-none" />
      
      {/* Radial glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-red-600/25 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 right-10 w-[600px] h-[400px] bg-amber-500/20 rounded-full blur-[120px]" />

      {/* 2. Top-Right: Fiery Crimson Brush Splash with Halftone Pattern */}
      <div className="absolute -top-10 -right-10 w-[380px] sm:w-[480px] h-[340px] sm:h-[440px]">
        {/* Halftone Dot Grid behind the brush */}
        <div className="absolute top-12 right-12 w-48 h-48 halftone-red opacity-50 rounded-full [mask-image:radial-gradient(circle,black_50%,transparent_80%)]" />
        
        {/* Dynamic Jagged Red Brush Stroke SVG */}
        <svg viewBox="0 0 400 350" className="w-full h-full drop-shadow-[0_10px_25px_rgba(220,38,38,0.5)]">
          <defs>
            <linearGradient id="redBrushGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2a3b" />
              <stop offset="60%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="orangeBrushGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          {/* Main jagged acrylic sweep */}
          <path
            d="M 120 0 Q 180 40 260 20 Q 340 5 400 50 L 400 240 Q 330 200 280 230 Q 210 180 170 120 Q 130 60 120 0 Z"
            fill="url(#redBrushGrad)"
          />
          {/* Rough dry brush bristles */}
          <path
            d="M 80 10 C 130 50 200 60 260 45 C 320 30 380 70 400 110 L 400 30 Z"
            fill="url(#orangeBrushGrad)"
            opacity="0.8"
          />
          <path
            d="M 160 50 Q 230 110 320 90 Q 370 130 400 160 L 400 70 Z"
            fill="#ff4d4d"
            opacity="0.9"
          />
          {/* Small paint splashes */}
          <circle cx="100" cy="45" r="4" fill="#ff3b3b" />
          <circle cx="75" cy="25" r="3" fill="#f97316" />
          <circle cx="140" cy="140" r="5" fill="#dc2626" />
          <circle cx="170" cy="170" r="3" fill="#ff2a3b" />
        </svg>

        {/* Top-Right Yellow Doodle Sparkle (matching poster) */}
        <div className="absolute top-10 right-14 text-amber-300 font-bold select-none text-2xl flex items-center gap-1">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#facc15" strokeWidth="3" strokeLinecap="round">
            <line x1="18" y1="4" x2="18" y2="12" />
            <line x1="8" y1="10" x2="14" y2="16" />
            <line x1="28" y1="10" x2="22" y2="16" />
          </svg>
        </div>
      </div>

      {/* 3. Left Side: Electric Blue & Cyan Speedlines + Halftone */}
      <div className="absolute -bottom-20 -left-10 w-[350px] sm:w-[460px] h-[450px]">
        {/* Blue Halftone Dot Matrix */}
        <div className="absolute bottom-16 left-12 w-52 h-52 halftone-blue opacity-40 rounded-full [mask-image:radial-gradient(circle,black_50%,transparent_80%)]" />

        {/* Diagonal Neon Cyan Speedlines */}
        <svg viewBox="0 0 400 450" className="w-full h-full">
          <defs>
            <linearGradient id="cyanBeam" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
              <stop offset="40%" stopColor="#00d2ff" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="deepBlueBrush" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Wide blue stroke */}
          <path
            d="M 0 450 L 220 220 L 260 250 L 0 500 Z"
            fill="url(#deepBlueBrush)"
          />
          {/* Intense glowing laser beam */}
          <line x1="-20" y1="420" x2="280" y2="120" stroke="url(#cyanBeam)" strokeWidth="4" strokeLinecap="round" />
          <line x1="0" y1="440" x2="240" y2="200" stroke="url(#cyanBeam)" strokeWidth="2" strokeDasharray="180 20" />
          <line x1="-40" y1="460" x2="310" y2="110" stroke="#00f0ff" strokeWidth="1.5" opacity="0.75" />
          
          {/* Neon Lens Flare Dot */}
          <circle cx="210" cy="190" r="5" fill="#ffffff" filter="drop-shadow(0 0 8px #00f0ff)" />
        </svg>

        {/* Doodle Star & Doodle Pushpin on mid-left */}
        <div className="absolute top-28 left-16 select-none opacity-80">
          {/* Yellow Doodle Pushpin */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2v8M8 6h8M6 10h12M12 10v10" />
          </svg>
          {/* Cyan Doodle Star */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" className="mt-3 ml-2">
            <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
          </svg>
        </div>
      </div>

      {/* 4. Top-Left: Red Doodle Loops (matching poster's top-left red accents) */}
      <div className="absolute top-16 left-12 select-none opacity-85">
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
          <path d="M 12 10 Q 18 18 12 26" />
          <path d="M 22 14 Q 28 22 22 30" />
          <path d="M 32 18 Q 38 26 32 34" />
        </svg>
      </div>

      {/* 5. Bottom-Right: Sunset City Horizon + Highway Light Trails (matching poster) */}
      <div className="absolute bottom-0 right-0 w-[420px] sm:w-[540px] h-[260px] pointer-events-none">
        {/* Red/Amber Halftone Cluster */}
        <div className="absolute bottom-10 right-28 w-44 h-44 halftone-red opacity-40 rounded-full [mask-image:radial-gradient(circle,black_50%,transparent_80%)]" />

        {/* Glowing Sunset Highway Light Trails (Orange & Red) */}
        <svg viewBox="0 0 500 250" className="w-full h-full">
          <defs>
            <linearGradient id="trailGold" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fef08a" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="trailRed" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#991b1b" stopOpacity="0" />
              <stop offset="60%" stopColor="#dc2626" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Sweeping traffic light ribbons */}
          <path
            d="M 150 250 Q 320 220 460 140 Q 500 120 520 100"
            fill="none"
            stroke="url(#trailGold)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 200 250 Q 350 230 480 160"
            fill="none"
            stroke="#ffedd5"
            strokeWidth="2.5"
          />
          <path
            d="M 80 250 Q 280 240 430 180 Q 480 160 520 130"
            fill="none"
            stroke="url(#trailRed)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 260 250 Q 390 235 500 175"
            fill="none"
            stroke="#f97316"
            strokeWidth="3.5"
          />
        </svg>

        {/* Bottom Right Paint Brush Swipe in Crimson Red */}
        <div className="absolute -bottom-6 -right-6 w-72 h-32 bg-gradient-to-l from-red-600 to-transparent -rotate-6 opacity-75 blur-md" />
      </div>
    </div>
  );
};

export const SectionKVDivider: React.FC<{ flip?: boolean }> = ({ flip }) => {
  return (
    <div className={`relative w-full h-8 overflow-hidden pointer-events-none ${flip ? 'rotate-180' : ''}`}>
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff]/60 to-transparent" />
      <div className="absolute right-10 -top-4 w-40 h-8 halftone-red opacity-30" />
      <div className="absolute left-10 -top-4 w-40 h-8 halftone-blue opacity-30" />
    </div>
  );
};
