import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  Layers,
  Sparkles,
  Calendar,
  Building2
} from 'lucide-react';
import { ImageFrameSlot } from './ImageFrameSlot';
import { useImageContext } from '../context/ImageContext';
import { SectionKVDecoration } from './SectionKVDecoration';

interface TimelineSectionProps {
  onOpenConsultation: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onOpenConsultation }) => {
  const { openImageUploader } = useImageContext();

  // Mobile active milestone index - default to 2 (Q2/2025: Cất nóc 24 tầng - Đang triển khai)
  const [activeMobileStep, setActiveMobileStep] = useState<number>(2);
  // Mobile view mode: 'spotlight' (single focused milestone card) or 'grid' (compact 2x2 overview)
  const [mobileViewMode, setMobileViewMode] = useState<'spotlight' | 'grid'>('spotlight');

  const steps = [
    {
      slotId: 'timeline_photo_1',
      quarter: 'Q3/2024',
      phase: 'Giai đoạn 1',
      title: 'Hoàn thành móng & hầm',
      desc: 'Nghiệm thu phần ngầm 3 tầng hầm tiêu chuẩn cao.',
      status: 'completed' as const,
      statusLabel: 'Đã hoàn thành',
    },
    {
      slotId: 'timeline_photo_2',
      quarter: 'Q4/2024',
      phase: 'Giai đoạn 2',
      title: 'Thi công thân tầng nổi',
      desc: 'Tập trung nguồn lực thi công kết cấu phần thân.',
      status: 'completed' as const,
      statusLabel: 'Đã hoàn thành',
    },
    {
      slotId: 'timeline_photo_3',
      quarter: 'Q2/2025',
      phase: 'Giai đoạn 3',
      title: 'Cất nóc 24 tầng',
      desc: 'Hoàn thành kết cấu bê tông cốt thép toàn tòa.',
      status: 'current' as const,
      statusLabel: 'Đang triển khai',
    },
    {
      slotId: 'timeline_photo_4',
      quarter: 'Q2/2027',
      phase: 'Giai đoạn 4',
      title: 'Bàn giao căn hộ',
      desc: 'Bàn giao không gian sáng tạo đúng cam kết CĐT.',
      status: 'upcoming' as const,
      statusLabel: 'Kế hoạch',
    },
  ];

  const currentStep = steps[activeMobileStep];

  return (
    <section id="timeline" className="py-8 sm:py-12 lg:py-16 bg-transparent text-white relative overflow-hidden">
      {/* Key Visual Left-Blue Sweep & Cyan Speedline Decoration */}
      <SectionKVDecoration variant="left-blue" />
      
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* HEADER: Clean, compact & proportionate on both mobile & PC   */}
        {/* ============================================================ */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-amber-400 uppercase bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Tiến Độ Thi Công</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                • Cập nhật T9/2026
              </span>
            </div>

            <h2 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              CẬP NHẬT THỰC TẾ
            </h2>
          </div>

          {/* CTA Button: Sleek, compact pill on mobile, neatly aligned */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto text-xs font-bold text-amber-300 hover:text-white bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 hover:from-amber-500/30 hover:to-rose-500/30 border border-amber-400/40 rounded-xl px-3.5 py-2 transition-all flex items-center justify-between sm:justify-start gap-2 group cursor-pointer shadow-sm active:scale-98"
          >
            <span>Nhận trọn bộ ảnh tiến độ mới nhất</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW (< 640px): Compact, Interactive, Zero Overcrowd */}
        {/* ============================================================ */}
        <div className="block sm:hidden">
          
          {/* Mobile View Toggle & Quarter Stepper Tabs */}
          <div className="bg-[#05112c]/90 rounded-2xl p-2 border border-slate-800/90 mb-3 shadow-lg backdrop-blur-sm">
            
            {/* Top row: View Switcher (Spotlight vs 2x2 Grid) */}
            <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>4 Cột Mốc Triển Khai</span>
              </span>

              <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800">
                <button
                  onClick={() => setMobileViewMode('spotlight')}
                  className={`px-2 py-1 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 ${
                    mobileViewMode === 'spotlight'
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Xem từng mốc tiến độ"
                >
                  <Layers className="w-3 h-3" />
                  <span>Trượt Chi Tiết</span>
                </button>
                <button
                  onClick={() => setMobileViewMode('grid')}
                  className={`px-2 py-1 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 ${
                    mobileViewMode === 'grid'
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Xem dạng lưới 2x2"
                >
                  <LayoutGrid className="w-3 h-3" />
                  <span>Lưới 2x2</span>
                </button>
              </div>
            </div>

            {/* Step tabs (1, 2, 3, 4) with status indicators */}
            <div className="grid grid-cols-4 gap-1.5">
              {steps.map((step, idx) => {
                const isActive = activeMobileStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveMobileStep(idx);
                      if (mobileViewMode === 'grid') setMobileViewMode('spotlight');
                    }}
                    className={`py-1.5 px-1 rounded-xl text-center transition-all flex flex-col items-center justify-center border relative ${
                      isActive
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                        step.status === 'completed'
                          ? 'bg-emerald-600 text-white'
                          : step.status === 'current'
                          ? 'bg-amber-400 text-slate-950 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-black tracking-tight">{step.quarter}</span>
                    </div>

                    <span className={`text-[8px] truncate max-w-[62px] block ${isActive ? 'text-amber-200 font-bold' : 'text-slate-500'}`}>
                      {step.status === 'completed' ? 'Đã xong' : step.status === 'current' ? 'Đang làm' : 'Kế hoạch'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mode 1: Spotlight (Single Interactive Card) */}
          {mobileViewMode === 'spotlight' && (
            <div className="bg-[#091530]/95 rounded-2xl border border-amber-400/40 p-3 shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
              {/* Card Header inside spotlight */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                    currentStep.status === 'completed'
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                      : currentStep.status === 'current'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    {currentStep.statusLabel}
                  </span>
                  <span className="text-xs font-black text-amber-400">
                    {currentStep.quarter}
                  </span>
                </div>

                {/* Left/Right navigation buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveMobileStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                    className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center active:scale-95"
                    aria-label="Cột mốc trước"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-bold text-slate-400 px-1">
                    {activeMobileStep + 1}/{steps.length}
                  </span>
                  <button
                    onClick={() => setActiveMobileStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                    className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center active:scale-95"
                    aria-label="Cột mốc kế tiếp"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Construction Photo Slot with smooth ratio */}
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-700/80 relative shadow-inner mb-2.5 group">
                <ImageFrameSlot
                  slotId={currentStep.slotId}
                  label={`Tiến độ ${currentStep.quarter}`}
                  aspectRatio="aspect-[16/10]"
                  alt={`Tiến độ thi công Động Lực Tower ${currentStep.quarter}`}
                />

                {/* Quick photo change button */}
                <button
                  onClick={() => openImageUploader(currentStep.slotId)}
                  className="absolute top-2 right-2 z-20 px-2 py-1 rounded-lg bg-black/75 hover:bg-black text-amber-300 text-[10px] font-semibold backdrop-blur-sm border border-white/20 flex items-center gap-1 shadow-md cursor-pointer"
                  title="Thay ảnh thực tế"
                >
                  <Camera className="w-3 h-3" />
                  <span>Đổi ảnh</span>
                </button>
              </div>

              {/* Info text & action */}
              <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 mb-2.5">
                <h4 className="font-sans font-bold text-sm text-white mb-0.5">
                  {currentStep.title}
                </h4>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {currentStep.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onOpenConsultation}
                  className="py-2 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-[11px] shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>Nhận Báo Giá</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <a
                  href="tel:0565130130"
                  className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-400/40 text-amber-300 font-bold text-[11px] flex items-center justify-center gap-1.5 active:scale-95 text-center"
                >
                  <span>Gọi 0565 130 130</span>
                </a>
              </div>
            </div>
          )}

          {/* Mode 2: Compact 2x2 Grid (All in One View) */}
          {mobileViewMode === 'grid' && (
            <div className="grid grid-cols-2 gap-2 animate-in fade-in zoom-in-95 duration-150">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveMobileStep(idx);
                    setMobileViewMode('spotlight');
                  }}
                  className={`bg-[#091530]/95 rounded-xl border p-2 cursor-pointer transition-all active:scale-98 ${
                    activeMobileStep === idx
                      ? 'border-amber-400 shadow-md shadow-amber-400/20 ring-1 ring-amber-400/50'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="rounded-lg overflow-hidden bg-slate-950 border border-slate-800 relative mb-1.5">
                    <ImageFrameSlot
                      slotId={step.slotId}
                      label={`Tiến độ ${step.quarter}`}
                      aspectRatio="aspect-[16/11]"
                      alt={`Tiến độ ${step.quarter}`}
                    />
                    <span className={`absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-black ${
                      step.status === 'completed'
                        ? 'bg-emerald-600/90 text-white'
                        : step.status === 'current'
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-800/90 text-slate-300'
                    }`}>
                      {step.quarter}
                    </span>
                  </div>

                  <h5 className="font-bold text-[11px] text-white truncate mb-0.5">
                    {step.title}
                  </h5>
                  <p className="text-[9px] text-slate-400 line-clamp-1 leading-tight">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW (sm: & lg:): 4 Connected Milestone Columns       */}
        {/* ============================================================ */}
        <div className="hidden sm:block relative">
          {/* Horizontal connecting line on desktop with luminous gradient glow */}
          <div className="hidden lg:block absolute top-[18px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.4)] z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Milestone Node */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 border-2 z-10 shadow-lg ${
                    step.status === 'completed'
                      ? 'bg-emerald-600 border-emerald-400 text-white shadow-emerald-500/30'
                      : step.status === 'current'
                      ? 'bg-amber-500 border-amber-300 text-slate-950 animate-pulse shadow-amber-500/50 font-black'
                      : 'bg-slate-800 border-slate-600 text-slate-400'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-black text-amber-400 tracking-wider block">
                      {step.quarter}
                    </span>
                    <span className="text-xs font-bold text-white block">
                      {step.title}
                    </span>
                  </div>
                </div>

                {/* Construction Photo Card */}
                <div className="rounded-2xl overflow-hidden bg-[#091530]/90 border border-slate-700/80 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(245,158,11,0.2)] transition-all duration-300 shadow-md group relative backdrop-blur-sm flex-1 flex flex-col">
                  <div className="relative">
                    <ImageFrameSlot
                      slotId={step.slotId}
                      label={`Tiến độ ${step.quarter}`}
                      aspectRatio="aspect-[16/11]"
                      alt={`Tiến độ thi công Động Lực Tower ${step.quarter}`}
                    />

                    {/* Quick photo change button */}
                    <button
                      onClick={() => openImageUploader(step.slotId)}
                      className="absolute top-2 right-2 z-20 p-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-amber-300 text-xs backdrop-blur-sm border border-white/20 cursor-pointer shadow-md opacity-80 group-hover:opacity-100 transition-opacity"
                      title="Thay ảnh thực tế"
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </button>

                    <span className={`absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold backdrop-blur-sm shadow-sm ${
                      step.status === 'completed'
                        ? 'bg-emerald-900/90 text-emerald-200 border border-emerald-500/30'
                        : step.status === 'current'
                        ? 'bg-amber-500/90 text-slate-950 font-black border border-amber-300'
                        : 'bg-slate-900/90 text-slate-300 border border-slate-700'
                    }`}>
                      {step.statusLabel}
                    </span>
                  </div>

                  <div className="p-3 bg-slate-950/80 flex-1 flex items-center">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
