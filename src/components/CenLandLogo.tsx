import React from 'react';
import cenlandSymbol from '../assets/cenland_symbol.png';

export interface CenLandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'symbol' | 'badge';
  theme?: 'white' | 'color';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
  className?: string;
  badgeLabel?: string;
}

export const CenLandLogo: React.FC<CenLandLogoProps> = ({
  variant = 'horizontal',
  theme = 'white',
  size = 'md',
  showSlogan = true,
  className = '',
  badgeLabel = 'Đơn vị phân phối',
}) => {
  // Size mapping calibrated to synchronize with DongLucLogo
  const sizeConfig = {
    xs: {
      emblem: 'h-6 w-6',
      title: 'text-[11px]',
      slogan: 'text-[7px] tracking-[0.14em]',
      gap: 'gap-1.5',
    },
    sm: {
      emblem: 'h-8 w-8',
      title: 'text-xs sm:text-sm',
      slogan: 'text-[8px] tracking-[0.15em]',
      gap: 'gap-2',
    },
    md: {
      // Synchronized 1:1 with DongLucLogo (h-10 w-10 sm:h-11 sm:w-11)
      emblem: 'h-10 w-10 sm:h-11 sm:w-11',
      title: 'text-sm sm:text-base',
      slogan: 'text-[8.5px] sm:text-[9.5px] tracking-[0.16em]',
      gap: 'gap-2.5 sm:gap-3',
    },
    lg: {
      emblem: 'h-12 w-12 sm:h-14 sm:w-14',
      title: 'text-lg sm:text-xl',
      slogan: 'text-[10px] sm:text-[11px] tracking-[0.18em]',
      gap: 'gap-3.5',
    },
  }[size];

  // 1. Symbol Only
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src={cenlandSymbol}
          alt="Cen Land Symbol"
          className={`${sizeConfig.emblem} object-contain select-none filter drop-shadow-sm`}
          loading="eager"
        />
      </div>
    );
  }

  // 2. Stacked / Vertical
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center justify-center text-center ${className}`}>
        <img
          src={cenlandSymbol}
          alt="Cen Land Symbol"
          className={`${sizeConfig.emblem} object-contain select-none mb-1.5 filter drop-shadow-sm`}
          loading="eager"
        />
        <div className="flex items-center tracking-tight leading-none">
          <span className={`font-black uppercase tracking-[0.08em] ${theme === 'color' ? 'text-[#0D554F]' : 'text-white'} ${sizeConfig.title}`}>
            CEN
          </span>
          <span className={`font-black text-[#D29B60] uppercase tracking-[0.08em] ml-1 ${sizeConfig.title}`}>
            LAND
          </span>
        </div>
        {showSlogan && (
          <span className={`font-bold uppercase leading-none mt-1 whitespace-nowrap ${theme === 'color' ? 'text-[#0D554F]' : 'text-slate-300'} ${sizeConfig.slogan}`}>
            Realizing your dreams
          </span>
        )}
      </div>
    );
  }

  // 3. Corporate Badge
  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/95 hover:bg-slate-900 border border-slate-700/80 shadow-md backdrop-blur-sm transition-all group ${className}`}
        title="Cen Land - Đơn vị phân phối chiến lược"
      >
        <img
          src={cenlandSymbol}
          alt="Cen Land"
          className="h-7 w-7 object-contain shrink-0 filter drop-shadow-sm"
          loading="eager"
        />
        <div className="flex flex-col items-start leading-none">
          {badgeLabel && (
            <span className="text-[8.5px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              {badgeLabel}
            </span>
          )}
          <div className="flex items-center tracking-tight">
            <span className="font-black text-xs sm:text-sm text-white uppercase tracking-[0.06em]">
              CEN
            </span>
            <span className="font-black text-xs sm:text-sm text-[#D29B60] uppercase tracking-[0.06em] ml-1">
              LAND
            </span>
          </div>
          {showSlogan && (
            <span className="text-[7.5px] font-semibold tracking-wider text-slate-300 mt-0.5 whitespace-nowrap">
              Realizing your dreams
            </span>
          )}
        </div>
      </div>
    );
  }

  // 4. Horizontal (Default: Synchronized with DongLucLogo)
  const cenTextColor = theme === 'color' ? 'text-[#0D554F]' : 'text-white';
  const sloganTextColor = theme === 'color' ? 'text-[#0D554F]' : 'text-slate-300';

  return (
    <div className={`inline-flex items-center ${sizeConfig.gap} ${className}`}>
      {/* 4-Diamonds Emblem */}
      <div className={`relative ${sizeConfig.emblem} flex items-center justify-center shrink-0`}>
        <img
          src={cenlandSymbol}
          alt="Cen Land 4 Diamonds"
          className="w-full h-full object-contain select-none filter drop-shadow-sm"
          loading="eager"
        />
      </div>

      {/* Synchronized Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center leading-none">
          <span className={`font-black uppercase tracking-[0.08em] drop-shadow-sm ${cenTextColor} ${sizeConfig.title}`}>
            CEN
          </span>
          <span className={`font-black uppercase tracking-[0.08em] text-[#D29B60] ml-1.5 drop-shadow-sm ${sizeConfig.title}`}>
            LAND
          </span>
        </div>
        {showSlogan && (
          <span className={`font-bold uppercase leading-none mt-1 whitespace-nowrap drop-shadow-sm ${sloganTextColor} ${sizeConfig.slogan}`}>
            Realizing your dreams
          </span>
        )}
      </div>
    </div>
  );
};
