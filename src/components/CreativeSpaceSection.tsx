import React from 'react';
import { SlidersHorizontal, Cpu, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { ImageFrameSlot } from './ImageFrameSlot';
import { SectionKVDecoration } from './SectionKVDecoration';

interface CreativeSpaceSectionProps {
  onOpenConsultation: () => void;
}

export const CreativeSpaceSection: React.FC<CreativeSpaceSectionProps> = ({
  onOpenConsultation,
}) => {

  return (
    <section id="creative-space" className="bg-transparent py-6 sm:py-8 overflow-hidden relative text-white">
      {/* Key Visual Dynamic Background Decoration */}
      <SectionKVDecoration variant="dual-corners" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Split Banner matching visual reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[260px] lg:h-[280px] rounded-3xl overflow-hidden border border-sky-500/30 hover:border-sky-400/60 shadow-2xl hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 backdrop-blur-md">
          
          {/* Left Column: Photo of person sitting in relaxed apartment */}
          <div className="lg:col-span-5 relative h-64 lg:h-full bg-[#051435]/90 overflow-hidden border-r border-sky-500/20">
            <ImageFrameSlot
              slotId="creative_person"
              label="Căn Hộ Sáng Tạo"
              aspectRatio="h-full w-full"
              className="h-full w-full object-cover"
              imgClassName="h-full w-full object-cover transition-transform duration-700"
              alt="Không gian sáng tạo Động Lực Tower"
            />
            {/* Gradient edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030e25] via-transparent to-transparent opacity-60 lg:hidden pointer-events-none" />
          </div>

          {/* Right Column: Deep Midnight Navy background with glowing accents and golden serif typography */}
          <div className="lg:col-span-7 bg-[#041233]/90 p-6 lg:py-5 lg:px-8 flex flex-col justify-between relative">

            {/* Header text */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black tracking-[0.25em] text-amber-400 uppercase block">
                  ĐỘNG LỰC TOWER • PHONG CÁCH SỐNG
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <h2 className="font-serif-luxury text-2xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Không gian <span className="italic font-serif-luxury text-amber-300">Sáng tạo</span>
                </h2>
              </div>

              {/* Bold Red Highlight Badge matching poster */}
              <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[10px] sm:text-[11px] uppercase tracking-wider shadow-md shadow-red-600/30">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>TỰ DO KIẾN TẠO TỔ ẤM THEO CÁCH CỦA BẠN</span>
              </div>
            </div>

            {/* 3 Accent feature items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#061842]/80 border border-sky-500/20 hover:border-amber-400/50 hover:bg-[#082057] transition-all cursor-default">
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-200 leading-snug">
                  Giữ trọn bản chất theo sở thích cá nhân
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#061842]/80 border border-sky-500/20 hover:border-amber-400/50 hover:bg-[#082057] transition-all cursor-default">
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-200 leading-snug">
                  Hệ thống tiện ích nội khu đồng bộ
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#061842]/80 border border-sky-500/20 hover:border-amber-400/50 hover:bg-[#082057] transition-all cursor-default">
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-200 leading-snug">
                  Dễ dàng kết nối hệ thống giao thông
                </span>
              </div>
            </div>

            {/* CTA button with crimson gradient and neon border */}
            <div className="pt-1 flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="shimmer-sweep px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/30 inline-flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-red-400/30"
              >
                <span>KHÁM PHÁ KHÔNG GIAN SÁNG TẠO</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
