import React, { useState, useEffect } from 'react';

/**
 * SeamlessBackground:
 * Renders the master Key Visual architectural ambient backdrop:
 * 1. Deep Midnight Sapphire Canvas (#010614 -> #041030 -> #020718)
 * 2. Precision Architectural Drafting Grid with subtle coordinate nodes
 * 3. Top-Left: Cobalt & Cyber Cyan angular energy plane, laser core with 4-point lens flare & cyan halftone matrix
 * 4. Top-Right: Fiery Crimson angular energy swath, speed streaks & crimson halftone matrix
 * 5. Horizon / Bottom: Modern metropolitan skyline silhouette, sunset amber glow & golden expressway light ribbons
 */
export const SeamlessBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY || 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#010614]"
    >
      {/* 1. Deep Midnight Cosmic Mesh Gradient Canvas */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(ellipse 130% 90% at 50% 0%, #061942 0%, #030f2b 40%, #010818 75%, #010614 100%)
          `,
          transform: `translateY(${Math.min(scrollY * -0.02, 20)}px)`,
        }}
      />

      {/* 2. Architectural Blueprint Coordinates Grid */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(56, 189, 248, 0.7) 1.2px, transparent 1.2px),
            radial-gradient(rgba(244, 63, 94, 0.5) 1.2px, transparent 1.2px)
          `,
          backgroundSize: '48px 48px, 96px 96px',
          backgroundPosition: '0 0, 24px 24px',
        }}
      />

      {/* 3. Master Vector Artwork Layer */}
      <svg 
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <defs>
          {/* Halftone Pattern - Cyber Cyan */}
          <pattern id="kv-master-halftone-blue" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2.2" fill="#00d4ff" fillOpacity="0.4" />
            <circle cx="0" cy="0" r="1.2" fill="#0284c7" fillOpacity="0.25" />
            <circle cx="16" cy="16" r="1.2" fill="#0284c7" fillOpacity="0.25" />
          </pattern>

          {/* Halftone Pattern - Fiery Crimson */}
          <pattern id="kv-master-halftone-red" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="9" cy="9" r="2.6" fill="#ef4444" fillOpacity="0.45" />
            <circle cx="0" cy="0" r="1.4" fill="#f43f5e" fillOpacity="0.25" />
            <circle cx="18" cy="18" r="1.4" fill="#f43f5e" fillOpacity="0.25" />
          </pattern>

          {/* Glow Filters */}
          <filter id="laser-cyan-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur1" />
            <feGaussianBlur stdDeviation="14" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="laser-red-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="16" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Sunset Horizon Glow */}
          <radialGradient id="master-city-sunset" cx="84%" cy="88%" r="45%">
            <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.75" />
            <stop offset="35%" stopColor="#e11d48" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#010614" stopOpacity="0" />
          </radialGradient>

          {/* Highway Light Trail Gradients */}
          <linearGradient id="master-trail-gold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="master-trail-red" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#991b1b" stopOpacity="0" />
            <stop offset="40%" stopColor="#dc2626" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#ef4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#fecdd3" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* ========================================================== */}
        {/* GROUP A: TOP-LEFT & LEFT EDGE DYNAMIC COBALT / CYAN SWATH */}
        {/* ========================================================== */}
        <g 
          className="kv-left-energy"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.04, 30)}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* Halftone matrix triangle at top-left */}
          <path 
            d="M -50 -50 L 520 -50 L -50 520 Z" 
            fill="url(#kv-master-halftone-blue)" 
            opacity="0.8"
          />

          {/* Deep Navy/Indigo Shadow Underlay */}
          <path
            d="M -60 -40 L 440 -40 L -40 580 Z"
            fill="#031a4a"
            opacity="0.5"
          />

          {/* Broad Cobalt Blue Polygon Slice (Primary Key Visual Shape) */}
          <path
            d="M -30 -30 L 320 -30 L 90 480 L -30 420 Z"
            fill="#0052cc"
            opacity="0.65"
          />

          {/* Electric Cyan Secondary Angular Shard */}
          <path
            d="M -40 60 L 260 60 L 30 540 L -40 500 Z"
            fill="#0099ff"
            opacity="0.45"
          />

          {/* Radiant Diagonal Cyan Laser Beam Cutting Across Corner */}
          <path
            d="M -60 120 L 480 560"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#laser-cyan-glow)"
          />
          <path
            d="M -60 120 L 480 560"
            stroke="#38bdf8"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Precision 4-Point Lens Flare Burst */}
          <g transform="translate(190, 320)">
            <circle cx="0" cy="0" r="35" fill="#00d4ff" opacity="0.3" filter="url(#laser-cyan-glow)" />
            <circle cx="0" cy="0" r="10" fill="#ffffff" opacity="0.9" />
            <line x1="-50" y1="0" x2="50" y2="0" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            <line x1="0" y1="-50" x2="0" y2="50" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            <line x1="-25" y1="-25" x2="25" y2="25" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
            <line x1="-25" y1="25" x2="25" y2="-25" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
          </g>

          {/* Dynamic Laser Speedlines */}
          <path
            d="M -40 680 Q 220 740 460 880"
            stroke="#0ea5e9"
            strokeWidth="3.5"
            fill="none"
            opacity="0.4"
            strokeDasharray="20 12"
          />
        </g>

        {/* ========================================================== */}
        {/* GROUP B: TOP-RIGHT & UPPER-RIGHT FIERY RED SWATH */}
        {/* ========================================================== */}
        <g 
          className="kv-right-energy"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.03, 25)}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* Halftone matrix triangle at top-right */}
          <path 
            d="M 1490 -50 L 980 -50 L 1490 460 Z" 
            fill="url(#kv-master-halftone-red)" 
            opacity="0.75"
          />

          {/* Deep Wine / Dark Crimson Underlay */}
          <path
            d="M 1500 -40 L 1050 -40 L 1500 520 Z"
            fill="#450a0a"
            opacity="0.5"
          />

          {/* Dynamic Crimson Angled Polygon Slice */}
          <path
            d="M 1470 -30 L 1120 -30 L 1380 440 L 1470 380 Z"
            fill="#b91c1c"
            opacity="0.65"
          />

          {/* Vermillion / Rose Accent Shard */}
          <path
            d="M 1480 80 L 1180 80 L 1420 520 L 1480 470 Z"
            fill="#e11d48"
            opacity="0.4"
          />

          {/* Neon Red/Rose Laser Beam */}
          <path
            d="M 1500 130 L 990 540"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#laser-red-glow)"
          />
          <path
            d="M 1500 130 L 990 540"
            stroke="#f43f5e"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Precision Red Lens Flare Burst */}
          <g transform="translate(1240, 335)">
            <circle cx="0" cy="0" r="30" fill="#ef4444" opacity="0.3" filter="url(#laser-red-glow)" />
            <circle cx="0" cy="0" r="9" fill="#ffffff" opacity="0.9" />
            <line x1="-45" y1="0" x2="45" y2="0" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            <line x1="0" y1="-45" x2="0" y2="45" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
          </g>
        </g>

        {/* ========================================================== */}
        {/* GROUP C: BOTTOM-RIGHT CITY SKYLINE & HIGHWAY TRAILS */}
        {/* ========================================================== */}
        <g 
          className="kv-city-horizon"
          style={{
            transform: `translateY(${Math.min(scrollY * -0.015, 10)}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* Sunset Horizon Radial Glow */}
          <rect x="650" y="480" width="800" height="420" fill="url(#master-city-sunset)" />

          {/* Red Halftone Horizon Shroud */}
          <path 
            d="M 850 900 L 1450 620 L 1450 900 Z" 
            fill="url(#kv-master-halftone-red)" 
            opacity="0.4"
          />

          {/* High-Rise Architecture Silhouette Group */}
          <g fill="#010614" opacity="0.95">
            <rect x="880" y="680" width="34" height="220" />
            <rect x="925" y="640" width="42" height="260" />
            <polygon points="946,605 940,640 952,640" />
            <rect x="980" y="610" width="55" height="290" />
            <rect x="1050" y="580" width="65" height="320" />
            <polygon points="1082,530 1076,580 1088,580" />
            <rect x="1130" y="630" width="50" height="270" />
            <rect x="1195" y="590" width="70" height="310" />
            <polygon points="1230,540 1224,590 1236,590" />
            <rect x="1280" y="650" width="55" height="250" />
            <rect x="1350" y="620" width="60" height="280" />

            {/* Glowing Golden Architectural Windows */}
            <g fill="#fef08a" opacity="0.75">
              <circle cx="1065" cy="620" r="1.8" /><circle cx="1080" cy="620" r="1.8" /><circle cx="1095" cy="620" r="1.8" />
              <circle cx="1065" cy="645" r="1.8" /><circle cx="1095" cy="645" r="1.8" />
              <circle cx="1065" cy="670" r="1.8" /><circle cx="1080" cy="670" r="1.8" />
              <circle cx="1210" cy="610" r="2" /><circle cx="1226" cy="610" r="2" /><circle cx="1242" cy="610" r="2" />
              <circle cx="1210" cy="635" r="2" /><circle cx="1242" cy="635" r="2" />
              <circle cx="1226" cy="660" r="2" /><circle cx="1242" cy="660" r="2" />
              {/* Spire beacon lights */}
              <circle cx="946" cy="605" r="2.5" fill="#ef4444" />
              <circle cx="1082" cy="530" r="3" fill="#ef4444" />
              <circle cx="1230" cy="540" r="3" fill="#ef4444" />
            </g>
          </g>

          {/* Sweeping Golden Expressway Light Ribbons */}
          <path
            d="M 620 900 Q 940 840 1180 805 T 1440 740"
            stroke="url(#master-trail-gold)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 680 900 Q 980 848 1210 812 T 1440 748"
            stroke="#ffffff"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 520 900 Q 860 855 1140 825 T 1440 770"
            stroke="url(#master-trail-red)"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 760 900 Q 1040 865 1250 832 T 1440 782"
            stroke="#ea580c"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
