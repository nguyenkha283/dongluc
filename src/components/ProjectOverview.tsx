import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  Users, 
  Calendar, 
  FileCheck, 
  ShieldCheck, 
  Award, 
  Hammer, 
  ArrowRight,
  ExternalLink,
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  Eye,
  Sliders,
  Phone
} from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';
import { ImageFrameSlot } from './ImageFrameSlot';
import { CenLandLogo } from './CenLandLogo';
import { SectionKVDecoration } from './SectionKVDecoration';
import { useImageContext, DEFAULT_IMAGE_SLOTS } from '../context/ImageContext';

interface ProjectOverviewProps {
  onOpenConsultation: () => void;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ onOpenConsultation }) => {
  const { images, openImageUploader } = useImageContext();
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [fitMode, setFitMode] = useState<'cover' | 'contain'>('cover');

  const buildingImageUrl = 
    images['project_overview_skyline'] || 
    DEFAULT_IMAGE_SLOTS['project_overview_skyline']?.defaultUrl || 
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85';

  return (
    <section id="overview" className="py-12 sm:py-16 bg-transparent text-white relative overflow-hidden">
      {/* Key Visual Background Decoration */}
      <SectionKVDecoration variant="left-blue" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-3 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-bold tracking-widest uppercase mb-2 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>THÔNG TIN DỰ ÁN • TÂM ĐIỂM THANH XUÂN</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              TỔNG QUAN VỀ ĐỘNG LỰC TOWER
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Tổ hợp căn hộ sáng tạo 24 tầng nổi với 3 tầng hầm thông minh tại 130 Hạ Đình, sở hữu vị trí vàng kết nối đa chiều.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-red-500/20 hover:from-amber-500/30 hover:to-red-500/30 border border-amber-400/40 text-xs font-bold text-amber-300 hover:text-amber-200 transition-all hover:scale-105 shadow-md cursor-pointer"
            >
              <span>KIẾN TẠO GIÁ TRỊ BỀN VỮNG</span>
              <ArrowRight className="w-4 h-4 text-red-400" />
            </button>
          </div>
        </div>

        {/* Master 2-Column Responsive Layout: Visual Building on Left, Unified Single Box on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: Prominent Architectural Building Showcase (5 Cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border-2 border-sky-400/30 hover:border-sky-400/60 bg-[#05143a]/90 shadow-2xl hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] flex-1 flex flex-col transition-all duration-500 min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] group">
              
              {/* Top Bar on Building Image */}
              <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between gap-2 pointer-events-auto">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-sky-400/40 shadow-lg text-[11px] font-bold text-sky-200">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                  <span>PHỐI CẢNH 24 TẦNG NỔI</span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1 rounded-xl border border-white/20 shadow-lg">
                  {/* Toggle Fit Mode (Cover vs Contain) */}
                  <button
                    onClick={() => setFitMode(fitMode === 'cover' ? 'contain' : 'cover')}
                    title={fitMode === 'cover' ? 'Chuyển sang xem nguyên khung (Contain)' : 'Chuyển sang tràn khung (Cover)'}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-xs flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-300" />
                    <span className="text-[10px] hidden sm:inline">{fitMode === 'cover' ? 'Toàn cảnh' : 'Nguyên bản'}</span>
                  </button>

                  {/* Fullscreen Lightbox Trigger */}
                  <button
                    onClick={() => setIsFullscreenOpen(true)}
                    title="Phóng to ảnh tòa nhà xem chi tiết"
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-sky-300" />
                  </button>

                  {/* Change/Adjust Image Button */}
                  <button
                    onClick={() => openImageUploader('project_overview_skyline')}
                    title="Đổi hoặc căn chỉnh ảnh này"
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Sliders className="w-3.5 h-3.5 text-slate-300" />
                  </button>
                </div>
              </div>

              {/* Main Building Image Slot with dynamic display mode - Full height clean view */}
              <div 
                className="relative w-full h-full flex-1 overflow-hidden cursor-pointer"
                onClick={() => setIsFullscreenOpen(true)}
                title="Bấm để xem ảnh phóng to chi tiết"
              >
                <ImageFrameSlot
                  slotId="project_overview_skyline"
                  label="Tòa Tháp Động Lực Tower"
                  aspectRatio="w-full h-full"
                  className="w-full h-full"
                  imgClassName={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                    fitMode === 'contain' ? 'object-contain bg-[#030a1c]' : 'object-cover'
                  }`}
                  alt="Phối cảnh kiến trúc tổng thể Động Lực Tower"
                />

                {/* Subtle Cinematic Vignette Gradients */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: UNBOXED EDITORIAL ARCHITECTURAL OVERVIEW       */}
          {/* Natural typography and data flowing directly on background   */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 flex flex-col justify-between py-1 lg:pl-3">
            
            <div>
              {/* 1. Header: Project Title & Legal Status */}
              <div className="pb-4 border-b border-slate-800/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>HỒ SƠ DỰ ÁN CHÍNH THỨC</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      Pháp lý minh bạch
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-amber-300 font-bold">
                      Sổ hồng lâu dài
                    </span>
                  </div>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-black text-white tracking-tight">
                  TỔ HỢP CĂN HỘ CAO CẤP ĐỘNG LỰC TOWER
                </h3>

                {/* Inline Partners & Location (Pure typography, no heavy card boxes) */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-5 text-xs text-slate-300 mt-3 pt-3 border-t border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-white">
                    <span className="text-slate-400">Chủ đầu tư:</span>
                    <strong className="font-bold">CTCP Động Lực</strong>
                  </div>
                  <span className="text-slate-700 hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5 text-white">
                    <span className="text-slate-400">Đơn vị phát triển:</span>
                    <CenLandLogo variant="horizontal" theme="white" size="xs" />
                  </div>
                  <span className="text-slate-700 hidden sm:inline">•</span>
                  <div className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>130 Hạ Đình, Thanh Xuân</span>
                    <a 
                      href={PROJECT_INFO.googleMapsUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-amber-400 hover:text-amber-300 underline font-semibold ml-1 inline-flex items-center gap-0.5"
                    >
                      <span>(Bản đồ)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. Key Architecture Stats (Pure typography numbers on background, NO boxed cards) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-b border-slate-800/80">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-black text-white block">24</span>
                  <span className="text-xs text-slate-400 font-medium mt-0.5 block">Tầng nổi hiện đại</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-black text-sky-400 block">3 Hầm</span>
                  <span className="text-xs text-slate-400 font-medium mt-0.5 block">Đỗ xe ô tô rộng rãi</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-black text-amber-300 block">156</span>
                  <span className="text-xs text-slate-400 font-medium mt-0.5 block">Căn hộ (~7-8 căn/sàn)</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-black text-emerald-400 block">Lâu Dài</span>
                  <span className="text-xs text-slate-400 font-medium mt-0.5 block">Sổ hồng sở hữu</span>
                </div>
              </div>

              {/* 3. Detailed Specifications (Clean 2-column key-value list with hairline rules, NO boxed table) */}
              <div className="py-4 border-b border-slate-800/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium">Quy mô xây dựng:</span>
                    <strong className="text-white font-bold text-right">24 tầng nổi + 3 tầng hầm</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium">Mật độ căn hộ:</span>
                    <strong className="text-amber-300 font-bold text-right">156 căn (~7-8 căn/sàn)</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium">Cơ cấu loại hình:</span>
                    <strong className="text-white font-bold text-right">Căn 2PN & 3PN (65 - 105m²)</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium">Tiêu chuẩn bàn giao:</span>
                    <strong className="text-amber-300 font-bold text-right">Thô hoặc Hoàn thiện trọn gói</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium">Dự kiến bàn giao:</span>
                    <strong className="text-emerald-300 font-bold text-right">Quý II / 2027</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                    <span className="text-slate-400 font-medium">Hình thức sở hữu:</span>
                    <strong className="text-white font-bold text-right">Sổ hồng sở hữu lâu dài</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Guarantees & Action CTA (Clean, unboxed) */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cam kết tiến độ bàn giao Q2/2027 & chỗ đỗ ô tô tại 3 tầng hầm</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hỗ trợ vay ngân hàng 70% với lãi suất ưu đãi CĐT đến nhận nhà</span>
                </div>
              </div>

              {onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>TƯ VẤN & BÁO GIÁ DỰ ÁN</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* FULLSCREEN LIGHTBOX MODAL: Inspect building rendering in 100% full scale */}
      {/* ============================================================ */}
      {isFullscreenOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsFullscreenOpen(false)}
        >
          {/* Modal Header */}
          <div 
            className="w-full max-w-5xl flex items-center justify-between text-white mb-3 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-base font-bold text-amber-300">Phối Cảnh Kiến Trúc Động Lực Tower</h4>
              <p className="text-xs text-slate-400">Tòa tháp 24 tầng nổi + 3 tầng hầm tại 130 Hạ Đình, Thanh Xuân</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setFitMode(fitMode === 'cover' ? 'contain' : 'cover')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
              >
                Chế độ: {fitMode === 'cover' ? 'Toàn màn hình' : 'Vừa khung'}
              </button>

              <button
                onClick={() => setIsFullscreenOpen(false)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-red-600/80 text-white transition-colors"
                title="Đóng (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Image Box */}
          <div 
            className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={buildingImageUrl}
              alt="Toàn cảnh Động Lực Tower phóng to"
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-xl"
            />
          </div>

          <p className="text-xs text-slate-400 mt-2">Nhấn phím Esc hoặc bấm ra ngoài để đóng</p>
        </div>
      )}

    </section>
  );
};
