import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';
import { SectionKVDecoration } from './SectionKVDecoration';

interface TargetAudienceSectionProps {
  onOpenConsultation: () => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({
  onOpenConsultation,
}) => {
  const { images } = useImageContext();

  const cards = [
    {
      index: 1,
      slotId: 'audience_young',
      imageUrl: images['audience_young'] || '/images/target_audience_1.png',
      fallbackUrls: [
        'https://lh3.googleusercontent.com/d/1AP7vWHkkJSJwnwBO09LtkvmFkzv-E1TP',
        '/assets/audience_1_young.png',
        'https://drive.google.com/uc?export=view&id=1AP7vWHkkJSJwnwBO09LtkvmFkzv-E1TP',
      ],
      audience: 'DÀNH CHO',
      title: 'NGƯỜI TRẺ',
      desc: 'Sống theo cách mình muốn',
    },
    {
      index: 2,
      slotId: 'audience_family',
      imageUrl: images['audience_family'] || '/images/target_audience_3.png',
      fallbackUrls: [
        'https://lh3.googleusercontent.com/d/1msW5vMexCsVPFAMDu8O3iWQHCIodaNK_',
        '/assets/audience_3_investor.png',
        'https://drive.google.com/uc?export=view&id=1msW5vMexCsVPFAMDu8O3iWQHCIodaNK_',
      ],
      audience: 'DÀNH CHO',
      title: 'GIA ĐÌNH',
      desc: 'Cho con nền tảng tốt đẹp',
    },
    {
      index: 3,
      slotId: 'audience_investor',
      imageUrl: images['audience_investor'] || '/images/target_audience_2.png',
      fallbackUrls: [
        'https://lh3.googleusercontent.com/d/1h_bZeiTvJx3iIdzt2y05WwNm3LW7gJN1',
        '/assets/audience_2_family.png',
        'https://drive.google.com/uc?export=view&id=1h_bZeiTvJx3iIdzt2y05WwNm3LW7gJN1',
      ],
      audience: 'DÀNH CHO',
      title: 'NHÀ ĐẦU TƯ',
      desc: 'Mua thông minh – đầu tư giá trị',
    },
  ];

  return (
    <section className="bg-transparent py-8 lg:py-10 text-white overflow-hidden relative">
      {/* Key Visual Energy Swaths & Dual Halftones */}
      <SectionKVDecoration variant="dual-corners" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4 px-1">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase font-mono">
            KHÁCH HÀNG MỤC TIÊU
          </span>
        </div>

        {/* Row of 4 Angled Parallelogram Cards (3 Audience Cards + 1 Editorial Column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 lg:gap-4 items-stretch px-1 sm:px-0">
          
          {/* 3 Target Audience Cards */}
          {cards.map((card) => (
            <div
              key={card.slotId}
              onClick={onOpenConsultation}
              className="lg:col-span-3 parallelogram-box rounded-xl overflow-hidden border-2 border-sky-500/40 hover:border-amber-400 bg-[#061536]/90 hover:-translate-y-1.5 relative group flex flex-col justify-end h-[195px] sm:h-[215px] shadow-xl hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 cursor-pointer"
            >
              {/* Background Photo Frame - unskewed & scaled to fill skewed bounds seamlessly */}
              <div className="absolute -inset-4 z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-full parallelogram-inner scale-125">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    data-fallback-index="0"
                    className="h-full w-full object-cover group-hover:scale-110 group-hover:brightness-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const img = e.currentTarget;
                      const idx = parseInt(img.getAttribute('data-fallback-index') || '0', 10);
                      if (card.fallbackUrls && idx < card.fallbackUrls.length) {
                        img.setAttribute('data-fallback-index', String(idx + 1));
                        img.src = card.fallbackUrls[idx];
                      } else {
                        img.src = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Gradient overlay matching Key Visual */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030d24] via-[#030d24]/75 to-transparent pointer-events-none z-10" />

              {/* Circular Arrow Button at Top Right (Unskewed circle) */}
              <div className="absolute top-3.5 right-3.5 sm:right-4 z-20 parallelogram-inner">
                <div className="w-8 h-8 rounded-full bg-[#030d24]/90 border border-sky-400/50 flex items-center justify-center text-amber-300 text-xs group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-rose-600 group-hover:border-red-400 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Card Content (Unskewed text) */}
              <div className="relative z-20 p-4 sm:p-5 parallelogram-inner">
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-[9px] font-black tracking-widest text-amber-300 uppercase font-mono">
                    0{card.index}
                  </span>
                  <span className="text-[9px] font-black tracking-widest text-amber-400 uppercase block">
                    {card.audience}
                  </span>
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white tracking-wide leading-tight my-0.5">
                  {card.title}
                </h3>
                <p className="text-[11px] text-slate-200 leading-snug">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}

          {/* 4th Column: Editorial Slogan "NHIỀU / lựa chọn / MỘT ĐIỂM ĐẾN" in Parallelogram Frame */}
          <div className="lg:col-span-3 parallelogram-box rounded-xl border-2 border-sky-500/30 bg-[#061842]/90 backdrop-blur-sm relative overflow-hidden flex flex-col justify-center h-[195px] sm:h-[215px] shadow-xl">
            {/* Red streak decor */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/30 rounded-full blur-2xl pointer-events-none" />
            
            <div className="parallelogram-inner px-5 sm:px-6 py-4 relative z-10">
              <div className="font-serif-luxury text-2xl lg:text-3xl text-white font-medium uppercase leading-[0.95] tracking-tight">
                NHIỀU <br />
                <span className="font-serif-luxury italic text-amber-300 text-3xl lg:text-4xl normal-case block my-1 drop-shadow-md">
                  lựa chọn
                </span>
                MỘT ĐIỂM ĐẾN
              </div>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                Đáp ứng trọn vẹn nhu cầu an cư và đầu tư tại tâm điểm Thanh Xuân.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
