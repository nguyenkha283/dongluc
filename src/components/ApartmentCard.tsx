import React from 'react';
import { BedDouble, Bath, Maximize2, Compass, ArrowRight, Sparkles, FileText } from 'lucide-react';
import { ApartmentUnit } from '../types';
import { formatVND } from '../data/mockData';

interface ApartmentCardProps {
  unit: ApartmentUnit;
  onSelectUnit: (unit: ApartmentUnit) => void;
  onBookViewing: (unit: ApartmentUnit) => void;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({
  unit,
  onSelectUnit,
  onBookViewing,
}) => {
  return (
    <div className="group bg-slate-900/80 hover:bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800/90 hover:border-amber-400/50 shadow-md hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Media Container */}
      <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-950">
        <img
          src={unit.image}
          alt={unit.code}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 flex flex-wrap gap-1.5 items-center">
          <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-950/85 border border-white/20 text-white text-[11px] font-black uppercase tracking-wider backdrop-blur-md">
            {unit.code} • {unit.tower}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
            Thô hoặc Hoàn thiện
          </span>
        </div>

        {/* Floor & Orientation overlay on image bottom */}
        <div className="absolute bottom-2 sm:bottom-2.5 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between text-xs text-white">
          <span className="text-[11px] font-medium bg-slate-950/70 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
            Tầng {unit.floor}
          </span>
          <span className="text-[11px] font-medium bg-slate-950/70 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1">
            <Compass className="w-3 h-3 text-amber-400" />
            {unit.direction}
          </span>
        </div>
      </div>

      {/* Card Content - Clean, Unboxed Typography */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Header Specs: Type & Area */}
          <div className="flex items-baseline justify-between gap-2">
            <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-white tracking-tight">
              {unit.type === '2PN' ? 'Căn hộ 2 Phòng Ngủ' : 'Căn hộ 3 Phòng Ngủ'}
            </h4>
            <span className="text-xs sm:text-sm font-black text-amber-400 whitespace-nowrap">
              {unit.carpetArea} m² <span className="text-[10px] font-normal text-slate-400">thông thủy</span>
            </span>
          </div>

          {/* Clean Specs Line - Direct typography with icons, NO nested box */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300 mt-2 py-1.5 border-y border-slate-800/80">
            <span className="flex items-center gap-1 font-medium">
              <BedDouble className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{unit.bedrooms} PN</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 font-medium">
              <Bath className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{unit.bathrooms} WC</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 font-medium">
              <Maximize2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{unit.builtUpArea}m² tim tường</span>
            </span>
          </div>

          {/* Unit short description or key view highlight */}
          <p className="text-[11px] sm:text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {unit.view ? `View: ${unit.view}. ` : ''}{unit.description}
          </p>
        </div>

        {/* Pricing & CTA Buttons */}
        <div className="pt-2 sm:pt-3 border-t border-slate-800/80 space-y-2.5">
          {/* Pricing Row */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-slate-400 block">Tổng giá (Đã gồm VAT)</span>
              <span className="font-serif-luxury text-lg sm:text-xl font-black text-white">
                {formatVND(unit.price)}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">Đơn giá</span>
              <span className="text-xs font-bold text-amber-400">
                {unit.pricePerSqm} tr/m²
              </span>
            </div>
          </div>

          {/* Loan estimate footnote */}
          <div className="text-[10px] text-emerald-400 font-medium flex items-center justify-between">
            <span>Hỗ trợ vay 70% từ ngân hàng</span>
            <span>~{formatVND(unit.monthlyEstimate)}/tháng</span>
          </div>

          {/* Action Buttons: Touch-friendly on mobile */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onSelectUnit(unit)}
              className="py-2 sm:py-2.5 px-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Mặt bằng</span>
            </button>
            <button
              onClick={() => onBookViewing(unit)}
              className="py-2 sm:py-2.5 px-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-black transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Báo giá căn</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
