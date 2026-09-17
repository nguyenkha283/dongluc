import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageFrameSlot } from './ImageFrameSlot';
import { SectionKVDecoration } from './SectionKVDecoration';

interface InfrastructureSectionProps {
  onOpenConsultation: () => void;
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ onOpenConsultation }) => {

  const benefits = [
    {
      slotId: 'infra_metro',
      index: '01',
      title: 'TUYẾN METRO SẮP VẬN HÀNH',
      desc: 'Kết nối nhanh với trung tâm thành phố bằng mạng lưới giao thông công cộng hiện đại.',
    },
    {
      slotId: 'infra_road',
      index: '02',
      title: 'CÁC TUYẾN ĐƯỜNG HUYẾT MẠCH MỚI',
      desc: 'Đón đầu phát triển hạ tầng khu vực Thanh Xuân – Hà Đông và các khu vực trọng điểm.',
    },
    {
      slotId: 'infra_west',
      index: '03',
      title: 'KHU TÂY HÀ NỘI ĐANG PHÁT TRIỂN MẠNH',
      desc: 'Hưởng lợi từ hệ sinh thái đô thị, giáo dục và thương mại đang mở rộng nhanh chóng.',
    },
    {
      slotId: 'infra_mega',
      index: '04',
      title: 'HỆ SINH THÁI CÁC ĐẠI ĐÔ THỊ',
      desc: 'Vùng quanh tập trung nhiều dịch vụ, tiện ích cao cấp và tiềm năng gia tăng giá trị vượt trội.',
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-transparent text-white overflow-hidden relative">
      {/* Key Visual Right-Red Energy Swath & Halftone */}
      <SectionKVDecoration variant="right-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase block mb-1">
              LỢI THẾ GIA TĂNG GIÁ TRỊ
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Đón đầu hạ tầng – bứt phá tương lai
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="text-xs font-bold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Quy hoạch tương lai</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Full-Bleed Photo Cards in a Single Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item) => (
            <div
              key={item.slotId}
              onClick={onOpenConsultation}
              className="rounded-2xl overflow-hidden border border-sky-500/30 hover:border-amber-400/90 bg-slate-950 relative group flex flex-col justify-between h-[290px] sm:h-[310px] lg:h-[330px] shadow-xl hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(245,158,11,0.25)] transition-all duration-300 cursor-pointer"
            >
              {/* Background Photo Frame - Sharp & Clear on top */}
              <div className="absolute inset-0 z-0">
                <ImageFrameSlot
                  slotId={item.slotId}
                  label={item.title}
                  aspectRatio="h-full w-full"
                  className="h-full w-full object-cover"
                  imgClassName="h-full w-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  alt={item.title}
                />
                
                {/* Subtle top vignette for badge contrast only */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
                
                {/* Smooth deep gradient transitioning into the bottom text area */}
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
              </div>

              {/* Top Row: Index number badge */}
              <div className="relative z-10 flex items-center justify-between p-4">
                <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-amber-400/40 text-xs font-black tracking-widest text-amber-300 font-mono shadow-sm">
                  {item.index}
                </span>
              </div>

              {/* Bottom Text Area: Frosted backdrop-blur to make text crystal clear */}
              <div className="relative z-10 p-4 sm:p-5 pt-8 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent backdrop-blur-[2px]">
                <h3 className="font-sans font-bold text-sm sm:text-[15px] text-white uppercase tracking-wide leading-snug mb-1.5 group-hover:text-amber-300 transition-colors drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200/90 leading-relaxed drop-shadow-sm line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
