import React from 'react';
import { Navigation, MapPin, ExternalLink, Compass, Clock } from 'lucide-react';
import { ImageFrameSlot } from './ImageFrameSlot';
import { PROJECT_INFO } from '../data/mockData';
import { SectionKVDecoration } from './SectionKVDecoration';

interface LocationSectionProps {
  onOpenConsultation?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenConsultation }) => {
  // 6 Quick Commute Destinations
  const quickCommutes = [
    { destination: 'Nguyễn Trãi', time: '2 phút' },
    { destination: 'Hồ Hạ Đình', time: '3 phút' },
    { destination: 'Ngã Tư Sở', time: '5 phút' },
    { destination: 'Vành đai 3', time: '5 phút' },
    { destination: 'Royal City', time: '7 phút' },
    { destination: 'Đại học lớn', time: '5–10 phút' },
  ];

  // 3 Radius Zones (< 500m, < 2 KM, < 5 KM)
  const radiusZones = [
    {
      distance: '< 500M',
      time: '2 phút',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40',
      places: [
        'ĐH Khoa học Tự nhiên',
        'ĐH Khoa học Xã hội & Nhân văn',
        'Trường Tiểu học & THCS',
        'Chợ Kim Giang',
        'Hồ Hạ Đình',
      ],
    },
    {
      distance: '< 2 KM',
      time: '5 phút',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/40',
      places: [
        'Đại học Y Hà Nội',
        'Ngã Tư Sở',
        'Trung tâm Hội nghị Quốc gia',
        'Big C Thăng Long',
        'Royal City',
      ],
    },
    {
      distance: '< 5 KM',
      time: '5–10 phút',
      badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-950/40',
      places: [
        'BV Hồng Ngọc',
        'BV Bạch Mai',
        'THPT Chuyên Hà Nội – Amsterdam',
        'SVĐ Mỹ Đình',
      ],
    },
  ];

  return (
    <section id="location" className="py-12 lg:py-16 bg-transparent text-white overflow-hidden relative">
      {/* Background Highway Glow Trails */}
      <SectionKVDecoration variant="highway-trails" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header: Title + Headline + Subhead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-amber-400 uppercase">
                VỊ TRÍ TÂM ĐIỂM
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="px-2.5 py-0.5 rounded-full bg-red-600/90 text-[10px] sm:text-xs font-black text-white uppercase tracking-wider shadow-sm shadow-red-600/50">
                130 HẠ ĐÌNH
              </span>
            </div>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Kết nối <span className="italic text-amber-300 font-serif">Tương lai</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal leading-relaxed">
              <span className="text-amber-300 font-bold">Bán kính 5–10 phút</span> – tất cả trong tầm tay: học tập, làm việc, chăm sóc sức khỏe và giải trí đỉnh cao.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={PROJECT_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-red-600/30 border border-red-400/40 transition-all hover:scale-105"
            >
              <span>Mở Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
            </a>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 hover:text-white border border-amber-400/40 text-[11px] font-bold transition-all cursor-pointer shadow-md"
              >
                Nhận sơ đồ quy hoạch
              </button>
            )}
          </div>
        </div>

        {/* Quick Commute Times: Pure Text Stats (No Box / No Cards) */}
        <div className="mb-8 py-3.5 border-y border-slate-800/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-3">
            {quickCommutes.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">{item.destination}</span>
                <span className="font-mono text-base sm:text-lg font-black text-amber-300 tracking-tight mt-0.5">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid: 3 Radius Tiers (Left) + Clean Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Col Left: 3 Radius Zones - Pure Editorial Text, No Cards (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Bán kính di chuyển từ Động Lực Tower (130 Hạ Đình):
            </div>

            {radiusZones.map((zone, idx) => (
              <div
                key={idx}
                className="pb-5 border-b border-slate-800/60 last:border-0 last:pb-0"
              >
                {/* Distance & Time Label */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-mono text-sm sm:text-base font-black text-amber-300 tracking-wide">
                    {zone.distance}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-rose-400">
                    {zone.time}
                  </span>
                </div>

                {/* Places as fluid text with elegant separator dots */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {zone.places.map((place, pIdx) => (
                    <span key={pIdx}>
                      <span className="hover:text-amber-200 transition-colors">{place}</span>
                      {pIdx < zone.places.length - 1 && (
                        <span className="text-amber-400/60 mx-2 select-none font-bold">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Col Right: Map Art Image Block (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#040d22] transition-all duration-300 relative group flex flex-col">
              <div className="relative h-[280px] sm:h-[340px] w-full">
                <ImageFrameSlot
                  slotId="location_map"
                  label="Bản Đồ Kết Nối Vị Trí"
                  aspectRatio="h-full w-full"
                  className="h-full w-full object-cover"
                  imgClassName="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Bản đồ vị trí Động Lực Tower 130 Hạ Đình"
                />

                {/* Top Left GPS Chip */}
                <div className="absolute top-3 left-3 z-20">
                  <a
                    href={PROJECT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-black/80 hover:bg-red-600 text-white text-[10px] font-bold flex items-center gap-1.5 backdrop-blur-sm border border-white/20 hover:border-red-400 transition-all shadow-md cursor-pointer"
                  >
                    <MapPin className="w-3 h-3 text-amber-300" />
                    <span>Google Maps GPS</span>
                  </a>
                </div>
              </div>

              {/* Bottom Info Row */}
              <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                <span className="truncate">Nguyễn Trãi • Vành Đai 3 • Metro Cát Linh</span>
                <span className="text-amber-400 font-bold shrink-0 ml-2">Thanh Xuân</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
