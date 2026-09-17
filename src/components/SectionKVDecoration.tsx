import React from 'react';

interface SectionKVDecorationProps {
  variant?: 'left-blue' | 'right-red' | 'city-sunset' | 'dual-corners' | 'highway-trails' | 'minimal-glow';
  className?: string;
}

/**
 * SectionKVDecoration:
 * High-end architectural real estate Key Visual ambient layers:
 * - Geometric angular cyan/cobalt light planes & neon laser beams with lens flares
 * - Precision architectural micro-dot halftone arrays (cyan & crimson)
 * - Deep midnight sapphire depth with soft luxury blooms
 * - Metropolitan skyline silhouette with golden sunset highway light ribbons
 */
export const SectionKVDecoration: React.FC<SectionKVDecorationProps> = ({
  variant = 'dual-corners',
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`} aria-hidden="true">
      {/* 1. Left-Blue Angular Energy: Luminous Cobalt/Cyan Light Plane + Precision Halftone + Laser Beam */}
      {(variant === 'left-blue' || variant === 'dual-corners') && (
        <div className="absolute top-0 -left-16 sm:-left-8 w-80 sm:w-[420px] h-96 pointer-events-none">
          {/* Subtle Ambient Sapphire Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-sky-600/15 rounded-full blur-[90px]" />
          <div className="absolute top-16 left-12 w-48 h-48 bg-blue-600/20 rounded-full blur-[60px]" />

          {/* Architectural Halftone Grid Array */}
          <div 
            className="absolute top-4 left-6 w-56 h-56 opacity-35"
            style={{
              backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.8) 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
              maskImage: 'radial-gradient(circle at 20% 20%, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle at 20% 20%, black 30%, transparent 75%)',
            }}
          />

          <svg viewBox="0 0 420 380" className="w-full h-full drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            <defs>
              <linearGradient id="kvBluePolyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0052cc" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="kvLaserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
                <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="85%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Dynamic Angled Polygon Energy Slice */}
            <polygon 
              points="-30,-30 220,-30 90,260 -30,310" 
              fill="url(#kvBluePolyGrad)" 
            />

            {/* Secondary Crisp Translucent Polygon Shard */}
            <polygon 
              points="-10,40 160,-10 60,200 -20,220" 
              fill="#0284c7" 
              fillOpacity="0.25" 
            />

            {/* Radiant Laser Axis Line */}
            <line 
              x1="-30" y1="50" x2="310" y2="310" 
              stroke="#0284c7" 
              strokeWidth="10" 
              strokeLinecap="round" 
              opacity="0.2" 
            />
            <line 
              x1="-30" y1="50" x2="310" y2="310" 
              stroke="url(#kvLaserGrad)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />

            {/* Precision 4-Point Star Lens Flare */}
            <g transform="translate(180, 205)">
              <circle cx="0" cy="0" r="18" fill="#38bdf8" opacity="0.35" />
              <circle cx="0" cy="0" r="4.5" fill="#ffffff" />
              <line x1="-30" y1="0" x2="30" y2="0" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
              <line x1="0" y1="-30" x2="0" y2="30" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
              <line x1="-15" y1="-15" x2="15" y2="15" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
              <line x1="-15" y1="15" x2="15" y2="-15" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
            </g>

            {/* Clean Speedlines */}
            <line x1="10" y1="130" x2="180" y2="280" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="16 8" opacity="0.6" />
            <line x1="-10" y1="190" x2="110" y2="290" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="10 6" opacity="0.4" />
          </svg>
        </div>
      )}

      {/* 2. Right-Red Angular Energy: Fiery Crimson/Vermillion Angular Plane + Crimson Halftone */}
      {(variant === 'right-red' || variant === 'dual-corners') && (
        <div className="absolute top-0 -right-16 sm:-right-8 w-80 sm:w-[420px] h-96 pointer-events-none">
          {/* Subtle Ambient Crimson Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-600/15 rounded-full blur-[90px]" />
          <div className="absolute top-16 right-12 w-48 h-48 bg-red-600/20 rounded-full blur-[60px]" />

          {/* Architectural Halftone Grid Array - Crimson */}
          <div 
            className="absolute top-4 right-6 w-56 h-56 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(rgba(239, 68, 68, 0.8) 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
              maskImage: 'radial-gradient(circle at 80% 20%, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle at 80% 20%, black 30%, transparent 75%)',
            }}
          />

          <svg viewBox="0 0 420 380" className="w-full h-full drop-shadow-[0_0_30px_rgba(225,29,72,0.35)]">
            <defs>
              <linearGradient id="kvRedPolyGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#e11d48" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="kvRedLaserGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#991b1b" stopOpacity="0" />
                <stop offset="50%" stopColor="#f43f5e" stopOpacity="0.9" />
                <stop offset="85%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Dynamic Angled Red Polygon Slice */}
            <polygon 
              points="450,-30 200,-30 330,260 450,310" 
              fill="url(#kvRedPolyGrad)" 
            />

            {/* Secondary Translucent Magenta Accent */}
            <polygon 
              points="430,40 260,-10 360,200 440,220" 
              fill="#be123c" 
              fillOpacity="0.25" 
            />

            {/* Luminous Red/Rose Laser Line */}
            <line 
              x1="450" y1="50" x2="110" y2="310" 
              stroke="#e11d48" 
              strokeWidth="10" 
              strokeLinecap="round" 
              opacity="0.2" 
            />
            <line 
              x1="450" y1="50" x2="110" y2="310" 
              stroke="url(#kvRedLaserGrad)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />

            {/* Magenta Speedline Streaks */}
            <line x1="410" y1="130" x2="240" y2="280" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="16 8" opacity="0.6" />
            <line x1="430" y1="190" x2="310" y2="290" stroke="#fb7185" strokeWidth="1" strokeDasharray="10 6" opacity="0.4" />
          </svg>
        </div>
      )}

      {/* 3. City-Sunset & Highway-Trails: Metropolitan Skyline + Warm Golden Horizon Glow + Highway Trails */}
      {(variant === 'city-sunset' || variant === 'highway-trails') && (
        <div className="absolute bottom-0 right-0 w-full max-w-3xl h-72 pointer-events-none">
          {/* Sunset Atmospheric Horizon Glow */}
          <div 
            className="absolute bottom-0 right-0 w-full h-full opacity-60"
            style={{
              background: 'radial-gradient(ellipse at 80% 95%, rgba(255, 122, 0, 0.4) 0%, rgba(225, 29, 72, 0.25) 45%, transparent 75%)',
            }}
          />

          <svg viewBox="0 0 700 280" className="w-full h-full absolute bottom-0 right-0" preserveAspectRatio="none">
            <defs>
              <linearGradient id="highwayTrailGold" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0" />
                <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#fde047" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="highwayTrailRed" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#991b1b" stopOpacity="0" />
                <stop offset="45%" stopColor="#dc2626" stopOpacity="0.8" />
                <stop offset="85%" stopColor="#ef4444" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fca5a5" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Skyscraper Silhouettes */}
            <g fill="#020817" opacity="0.95">
              <rect x="420" y="130" width="32" height="150" />
              <rect x="460" y="105" width="38" height="175" />
              <polygon points="479,80 475,105 483,105" fill="#020817" />
              <rect x="510" y="90" width="46" height="190" />
              <rect x="568" y="80" width="55" height="200" />
              <polygon points="595,50 591,80 600,80" fill="#020817" />
              <rect x="635" y="110" width="40" height="170" />

              {/* Architectural Window Light Points */}
              <g fill="#fef08a" opacity="0.75">
                <circle cx="522" cy="110" r="1.5" /><circle cx="534" cy="110" r="1.5" /><circle cx="546" cy="110" r="1.5" />
                <circle cx="522" cy="128" r="1.5" /><circle cx="546" cy="128" r="1.5" />
                <circle cx="534" cy="146" r="1.5" /><circle cx="546" cy="146" r="1.5" />
                <circle cx="580" cy="100" r="1.8" /><circle cx="594" cy="100" r="1.8" /><circle cx="608" cy="100" r="1.8" />
                <circle cx="580" cy="120" r="1.8" /><circle cx="608" cy="120" r="1.8" />
                <circle cx="594" cy="140" r="1.8" /><circle cx="608" cy="140" r="1.8" />
                {/* Rooftop beacon light */}
                <circle cx="479" cy="80" r="2.5" fill="#ef4444" />
                <circle cx="595" cy="50" r="3" fill="#ef4444" />
              </g>
            </g>

            {/* Glowing Highway Light Trails */}
            <path
              d="M 160 280 Q 380 245 540 225 T 700 185"
              stroke="url(#highwayTrailGold)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 200 280 Q 400 250 560 230 T 700 190"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 90 280 Q 330 255 520 240 T 700 205"
              stroke="url(#highwayTrailRed)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 270 280 Q 450 260 590 242 T 700 215"
              stroke="#ea580c"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
