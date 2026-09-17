import React from 'react';
import { UnitType } from '../types';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  FileText,
  ShieldCheck,
  ExternalLink,
  Layers
} from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';
import { ImageFrameSlot } from './ImageFrameSlot';
import { KeyVisualHeroBackdrop } from './KeyVisualElements';

interface HeroProps {
  selectedType: UnitType | 'all';
  priceRange: string;
  onTypeChange: (type: UnitType | 'all') => void;
  onPriceRangeChange: (range: string) => void;
  onSearchClick: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedType,
  priceRange,
  onTypeChange,
  onPriceRangeChange,
  onSearchClick,
  onOpenConsultation,
}) => {

  return (
    <section className="relative min-h-[85vh] pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col justify-between overflow-hidden bg-transparent text-white">
      {/* Background artwork & ambient lighting */}
      <KeyVisualHeroBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center py-4 sm:py-6 lg:py-10">
          
          {/* Left Column: Headline, Executive Value Card & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Project Location Tag: Concise & elegant */}
            <a
              href={PROJECT_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 hover:bg-slate-900 border border-amber-400/40 hover:border-amber-400 backdrop-blur-md shadow-md transition-all hover:scale-105 group cursor-pointer"
              title="Xem vị trí 130 Hạ Đình trên Google Maps"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-amber-300 tracking-wide group-hover:text-white transition-colors">
                <span className="sm:hidden">130 Hạ Đình, Thanh Xuân, Hà Nội</span>
                <span className="hidden sm:inline">ĐỘNG LỰC TOWER • 130 HẠ ĐÌNH, THANH XUÂN, HÀ NỘI</span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-amber-400 group-hover:text-red-400 transition-colors shrink-0" />
            </a>

            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                {PROJECT_INFO.slogan}
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-slate-300 font-medium leading-relaxed">
                {PROJECT_INFO.subTitle}
              </p>
            </div>

            {/* ============================================================ */}
            {/* UNIFIED EXECUTIVE VALUE CARD: Clean, Compact, High-End       */}
            {/* Combines price + key metrics in ONE scannable showcase       */}
            {/* ============================================================ */}
            <div className="rounded-2xl bg-gradient-to-b from-[#0b2152]/90 via-[#07193f]/95 to-[#040f28] border border-amber-400/35 p-3.5 sm:p-5 shadow-2xl backdrop-blur-md">
              
              {/* Top Row: Price Headline & VAT badge */}
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800/90">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Mức giá hấp dẫn nhất Thanh Xuân
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-luxury font-black text-2xl sm:text-4xl text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.35)]">
                      {PROJECT_INFO.pricePerSqmHeadline}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-red-600 text-[10px] sm:text-xs font-black uppercase text-white tracking-wide shadow-sm border border-red-400/40">
                      {PROJECT_INFO.priceNote}
                    </span>
                  </div>
                </div>

                <div className="text-[10px] sm:text-xs text-emerald-400 font-semibold flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-1 rounded-xl border border-emerald-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Hỗ trợ vay 70%</span>
                </div>
              </div>

              {/* Bottom Row: 3 Key High-Level Specs in a Clean, Balanced Row */}
              <div className="grid grid-cols-3 gap-2 pt-3 text-center">
                <div className="bg-slate-950/60 rounded-xl p-2 border border-slate-800/80">
                  <span className="block text-[10px] text-slate-400">Quy mô</span>
                  <strong className="block text-xs sm:text-sm font-bold text-white">24 Tầng • 3 Hầm</strong>
                </div>
                <div className="bg-slate-950/60 rounded-xl p-2 border border-slate-800/80 flex flex-col justify-center">
                  <span className="block text-[10px] text-slate-400 mb-0.5">Tiêu chuẩn</span>
                  <strong className="block text-[11px] sm:text-xs font-bold text-amber-300 leading-tight">
                    Bàn giao thô hoặc Hoàn thiện trọn gói
                  </strong>
                </div>
                <div className="bg-slate-950/60 rounded-xl p-2 border border-slate-800/80">
                  <span className="block text-[10px] text-slate-400">Bàn giao</span>
                  <strong className="block text-xs sm:text-sm font-bold text-emerald-300">Quý II / 2027</strong>
                </div>
              </div>
            </div>

            {/* Action Buttons: Clean 2-column on mobile, inline on desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <button
                onClick={onOpenConsultation}
                className="shimmer-sweep py-3 sm:py-3.5 px-3 sm:px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-red-600/40 border border-red-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-1.5 text-center"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
                <span>Nhận Bảng Giá</span>
              </button>

              <button
                onClick={onSearchClick}
                className="py-3 sm:py-3.5 px-3 sm:px-5 rounded-xl bg-slate-850 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700/90 hover:border-amber-400/50 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:-translate-y-0.5 text-center"
              >
                <span>Xem Căn Hộ</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              </button>

              <a
                href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
                className="hidden sm:flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#041233]/80 hover:bg-[#061845] border border-amber-400/30 hover:border-amber-400/60 text-amber-300 hover:text-amber-200 text-sm font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-mono tracking-wider">{PROJECT_INFO.hotlineDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Building Image Frame with Floating Badges */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-sky-400/30 hover:border-sky-400/70 shadow-2xl hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] bg-[#05143a]/90 group w-full max-w-md lg:max-w-none aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/9] lg:aspect-[3/4] sm:max-h-[480px] md:max-h-[520px] lg:max-h-[540px] transition-all duration-500">
              
              <ImageFrameSlot
                slotId="hero_building"
                label="Tòa Tháp Động Lực Tower (Hero)"
                aspectRatio="h-full w-full"
                className="h-full w-full"
                imgClassName="h-full w-full transition-transform duration-700"
                alt="Tòa tháp Động Lực Tower 130 Hạ Đình"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030d24] via-transparent to-black/30 pointer-events-none" />

              {/* Floating Badge: Top-Left Address Tag */}
              <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 z-10">
                <a
                  href={PROJECT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-black/65 hover:bg-black/85 backdrop-blur-md border border-white/20 hover:border-amber-400 text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5 shadow-lg transition-all hover:scale-105 group"
                  title="Mở tọa độ dự án trên Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-amber-300 transition-colors">130 Hạ Đình, Thanh Xuân</span>
                  <ExternalLink className="w-3 h-3 text-amber-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Search / Filter Bar on Hero */}
        <div className="mt-2 sm:mt-4 p-3.5 sm:p-5 rounded-2xl bg-[#07173e]/90 border border-sky-400/30 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-4 items-center">
            
            {/* Label */}
            <div className="sm:col-span-3 flex items-center gap-2 text-white">
              <Search className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider block">
                  Tìm kiếm nhanh
                </span>
                <span className="text-[11px] text-slate-400">
                  156 căn hộ đang mở bán
                </span>
              </div>
            </div>

            {/* Type selector */}
            <div className="sm:col-span-3">
              <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value as UnitType | 'all')}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option value="all">Tất cả loại căn (2PN & 3PN)</option>
                <option value="2PN">Căn hộ 2 Phòng Ngủ (64 - 72m²)</option>
                <option value="3PN">Căn hộ 3 Phòng Ngủ (86 - 102m²)</option>
              </select>
            </div>

            {/* Price selector */}
            <div className="sm:col-span-3">
              <select
                value={priceRange}
                onChange={(e) => onPriceRangeChange(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option value="all">Tất cả mức giá</option>
                <option value="under5">Dưới 5 tỷ (Căn 2PN tiêu chuẩn)</option>
                <option value="5to6">Từ 5 tỷ - 6 tỷ (Căn 2PN góc)</option>
                <option value="above6">Trên 6 tỷ (Căn 3PN VIP)</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="sm:col-span-3">
              <button
                onClick={onSearchClick}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-amber-400/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Xem danh sách căn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
