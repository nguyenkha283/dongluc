import React from 'react';
import { ShieldCheck, FileCheck, Award, FileText, Download, Camera } from 'lucide-react';
import { ImageFrameSlot } from './ImageFrameSlot';
import { useImageContext } from '../context/ImageContext';
import { SectionKVDecoration } from './SectionKVDecoration';

interface LegalSectionProps {
  onOpenConsultation: () => void;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ onOpenConsultation }) => {
  const { openImageUploader } = useImageContext();

  const documents = [
    {
      title: 'GIẤY PHÉP XÂY DỰNG',
      code: 'Số 42/GPXD Sở Xây dựng TP Hà Nội',
      desc: 'Được cấp phép xây dựng 24 tầng nổi và 3 tầng hầm.',
      icon: FileCheck,
    },
    {
      title: 'QUY HOẠCH CHI TIẾT 1/500',
      code: 'QĐ UBND TP Hà Nội phê duyệt',
      desc: 'Mặt bằng tổng thể, chỉ giới đường đỏ và hệ số xây dựng rõ ràng.',
      icon: Award,
    },
    {
      title: 'ĐỦ ĐIỀU KIỆN MỞ BÁN',
      code: 'Văn bản Sở Xây Dựng xác nhận',
      desc: 'Đủ điều kiện bán nhà ở hình thành trong tương lai.',
      icon: ShieldCheck,
    },
    {
      title: 'SỔ HỒNG SỞ HỮU LÂU DÀI',
      code: 'Pháp lý chuẩn chỉnh tuyệt đối',
      desc: 'Cấp giấy chứng nhận quyền sở hữu nhà ở lâu dài.',
      icon: FileText,
    },
  ];

  return (
    <section id="legal" className="py-12 bg-transparent text-white overflow-hidden relative">
      {/* Key Visual Energy Swaths & Dual Halftones */}
      <SectionKVDecoration variant="dual-corners" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Heading + 4 Document Boxes + Download CTA (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black tracking-[0.25em] text-amber-400 uppercase block">
                  PHÁP LÝ DỰ ÁN
                </span>
                <span className="px-2 py-0.5 rounded bg-red-600/80 text-[10px] font-black text-white uppercase tracking-wider">
                  MINH BẠCH 100%
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                MINH BẠCH — <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">VỮNG TÂM</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-xl font-normal">
                Dự án Động Lực Tower đã hoàn thiện đầy đủ thủ tục pháp lý theo quy định hiện hành, mang đến sự an tâm tuyệt đối và bảo chứng an toàn cho dòng tiền của quý khách.
              </p>
            </div>

            {/* 4 Document Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map((doc, idx) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#061842]/80 hover:bg-[#092257] border border-sky-500/30 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(245,158,11,0.2)] transition-all duration-300 shadow-md group backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif-luxury text-xs font-bold text-white group-hover:text-amber-300 transition-colors leading-tight">
                        {doc.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-amber-300 block">
                      {doc.code}
                    </span>
                    <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                      {doc.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Download Button */}
            <div>
              <button
                onClick={onOpenConsultation}
                className="shimmer-sweep px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-xs font-black transition-all shadow-lg shadow-red-600/30 inline-flex items-center gap-2 cursor-pointer border border-red-400/30 hover:scale-105"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>TẢI BỘ HỒ SƠ PHÁP LÝ ĐẦY ĐỦ</span>
              </button>
            </div>
          </div>

          {/* Right: Document & License Photo Frame Slot (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border-2 border-sky-500/40 hover:border-sky-400/80 shadow-2xl hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] bg-[#061536]/90 transition-all duration-500 relative group">
              <ImageFrameSlot
                slotId="legal_documents"
                label="Hồ Sơ Pháp Lý Động Lực Tower"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                alt="Hồ sơ pháp lý dự án Động Lực Tower"
              />

              {/* Quick edit button */}
              <div className="absolute top-2.5 right-2.5 z-20">
                <button
                  onClick={() => openImageUploader('legal_documents')}
                  className="px-2.5 py-1 rounded-lg bg-black/75 hover:bg-black/95 text-amber-300 text-[11px] font-bold flex items-center gap-1 backdrop-blur-sm border border-white/20 cursor-pointer"
                >
                  <Camera className="w-3 h-3" />
                  <span>Đổi ảnh pháp lý</span>
                </button>
              </div>

              {/* Badge */}
              <div className="p-3 bg-[#061842] border-t border-sky-500/20 text-center">
                <span className="text-xs font-bold text-amber-300">
                  ✓ Hồ sơ pháp lý đầy đủ & phê duyệt chính thức
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
