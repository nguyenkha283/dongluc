import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, PhoneCall, Sparkles, Flame } from 'lucide-react';
import { FAQS, PROJECT_INFO } from '../data/mockData';
import { CenLandLogo } from './CenLandLogo';
import { SectionKVDecoration } from './SectionKVDecoration';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-transparent text-white relative overflow-hidden">
      {/* Key Visual Energy Accents & Halftones */}
      <SectionKVDecoration variant="dual-corners" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider text-red-400 bg-red-950/80 border border-red-500/40 mb-3 uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Giải Đáp Thắc Mắc Khách Hàng
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Những Câu Hỏi Thường Gặp Về Động Lực Tower
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Tổng hợp thông tin về mức giá 7x triệu/m² (đã có VAT), tiêu chuẩn bàn giao thô sáng tạo và thời hạn áp dụng chiến dịch đến hết tháng 9/2026.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                  isOpen
                    ? 'bg-[#081b47]/90 border-amber-400/80 shadow-[0_4px_25px_rgba(245,158,11,0.2)]'
                    : 'bg-[#061842]/70 border-sky-500/30 hover:border-amber-400/50 hover:bg-[#071f54]/80'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-red-600/20 text-red-400 text-xs flex items-center justify-center shrink-0 font-bold border border-red-500/30">
                      Q{idx + 1}
                    </span>
                    <span className={isOpen ? 'text-amber-300' : 'text-white'}>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-sky-500/20">
                    <p className="whitespace-pre-line">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support direct box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#08183d]/80 backdrop-blur-md border border-sky-500/30 hover:border-amber-400/50 transition-all flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start gap-3">
            <CenLandLogo variant="symbol" size="sm" className="shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-white mb-1">
                Quý khách còn băn khoăn về hồ sơ pháp lý & phương án hoàn thiện?
              </h4>
              <p className="text-xs text-slate-300">
                Đội ngũ chuyên viên <strong>Cen Land</strong> & Ban QLDA Động Lực Tower luôn sẵn sàng hỗ trợ trực tiếp.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-red-400 text-xs font-bold border border-red-500/40 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-red-400 animate-pulse" />
              {PROJECT_INFO.hotline}
            </a>
            <button
              onClick={onOpenConsultation}
              className="shimmer-sweep px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold shadow-md shadow-red-600/30 transition-all hover:scale-105 cursor-pointer border border-red-400/30"
            >
              Gửi Câu Hỏi Riêng
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
