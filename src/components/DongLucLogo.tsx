import React from 'react';
import dongLucWhiteHd from '../assets/dongluc_logo_white_hd.png';
import dongLucGoldHd from '../assets/dongluc_logo_gold_hd.png';
import dongLucSymbolWhite from '../assets/dongluc_symbol_white.png';
import dongLucSymbolGold from '../assets/dongluc_symbol_gold.png';

export interface DongLucLogoProps {
  variant?: 'stacked' | 'horizontal' | 'symbol';
  theme?: 'white' | 'gold';
  className?: string;
  imgClassName?: string;
  showSubText?: boolean;
}

export const DongLucLogo: React.FC<DongLucLogoProps> = ({
  variant = 'horizontal',
  theme = 'white',
  className = '',
  imgClassName = '',
  showSubText = true,
}) => {
  const fullLogoSrc = theme === 'gold' ? dongLucGoldHd : dongLucWhiteHd;
  const symbolSrc = theme === 'gold' ? dongLucSymbolGold : dongLucSymbolWhite;

  // 1. Stacked variant: Exactly like user's uploaded "Asset 4@3x (1).png"
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center justify-center ${className}`}>
        <img
          src={fullLogoSrc}
          alt="Động Lực Tower Logo Chính Thức"
          className={`h-auto max-w-full object-contain filter drop-shadow-md select-none ${imgClassName}`}
          loading="eager"
        />
      </div>
    );
  }

  // 2. Symbol only
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={symbolSrc}
          alt="Biểu trưng Động Lực"
          className={`h-auto max-w-full object-contain select-none ${imgClassName}`}
          loading="eager"
        />
      </div>
    );
  }

  // 3. Horizontal variant: Optimized for Navigation Header & toolbars
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Iconic Stylized D Monogram in subtle luxury badge frame */}
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-400/30 flex items-center justify-center p-1 shadow-md shadow-amber-500/10 group-hover:border-amber-400 transition-all shrink-0">
        <img
          src={dongLucGoldHd}
          alt="Động Lực Monogram"
          className="w-full h-full object-contain select-none"
        />
      </div>

      {/* Typography with exact brand font styling */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1">
          <span className="font-serif font-black text-sm sm:text-base tracking-[0.12em] text-white uppercase leading-none drop-shadow-sm">
            ĐỘNG LỰC
          </span>
          <span className="text-[9px] font-bold text-slate-400 leading-none">®</span>
        </div>
        {showSubText && (
          <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-400 tracking-[0.32em] uppercase leading-none mt-1">
            TOWER
          </span>
        )}
      </div>
    </div>
  );
};
