import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  PhoneCall, 
  Calendar, 
  Percent, 
  TrendingDown, 
  Landmark, 
  ChevronLeft, 
  ChevronRight,
  LayoutGrid,
  Layers,
  CheckCircle2,
  Info
} from 'lucide-react';
import { SectionKVDecoration } from './SectionKVDecoration';

interface PaymentPolicySectionProps {
  onOpenConsultation: () => void;
}

export const PaymentPolicySection: React.FC<PaymentPolicySectionProps> = ({ onOpenConsultation }) => {
  // Mobile active tab index (0: Cọc sớm, 1: TT sớm, 2: Tiến độ, 3: Vay 0%)
  const [activeMobileTab, setActiveMobileTab] = useState<number>(0);
  // Mobile view mode: 'grid' (2x2 compact) or 'slide' (one card at a time)
  const [mobileViewMode, setMobileViewMode] = useState<'grid' | 'slide'>('grid');

  const policies = [
    {
      id: 'deposit',
      tabLabel: 'Cọc sớm',
      shortDiscount: '3% - 6%',
      badge: 'Giai đoạn đặt chỗ',
      title: 'Chiết Khấu Đặt Cọc',
      subTitle: 'Đến ngày 31/07/2026',
      accentColor: 'amber',
      icon: Calendar,
      items: [
        { label: 'Căn 2 Phòng Ngủ', value: '3%', note: 'Khấu trừ vào giá trị căn hộ' },
        { label: 'Căn 3 Phòng Ngủ', value: '6%', note: 'Ưu đãi đặc biệt đợt đầu' },
      ],
      footerNote: 'Áp dụng đặt chỗ trước 31/07/2026',
      cardGradient: 'from-[#0b214f]/90 via-[#07193f]/95 to-[#040f28]',
      borderColor: 'border-amber-400/40 hover:border-amber-400',
      tagBg: 'bg-amber-400/15 border-amber-400/30 text-amber-300',
    },
    {
      id: 'early',
      tabLabel: 'TT sớm',
      shortDiscount: '9% - 11%',
      badge: 'Thanh toán nhanh',
      title: 'Chiết Khấu TT Sớm',
      subTitle: 'Tối ưu vốn nhàn rỗi',
      accentColor: 'sky',
      icon: TrendingDown,
      items: [
        { label: 'TT Sớm 50%', value: '9%', note: 'Giảm trực tiếp hợp đồng' },
        { label: 'TT Sớm 70%', value: '10%', note: 'Tiết kiệm hàng trăm triệu' },
        { label: 'TT Sớm 95%', value: '11%', note: 'Mức chiết khấu tối đa' },
      ],
      footerNote: 'Chưa bao gồm VAT và KPBT',
      cardGradient: 'from-[#0b214f]/90 via-[#07193f]/95 to-[#040f28]',
      borderColor: 'border-sky-400/40 hover:border-sky-400',
      tagBg: 'bg-sky-400/15 border-sky-400/30 text-sky-300',
    },
    {
      id: 'standard',
      tabLabel: 'Tiến độ',
      shortDiscount: '5%',
      badge: 'Tiến độ chuẩn CĐT',
      title: 'Chiết Khấu Tiến Độ',
      subTitle: 'Chia nhiều đợt thanh toán',
      accentColor: 'emerald',
      icon: Percent,
      items: [
        { label: 'Chiết khấu chuẩn', value: '5%', note: 'Khấu trừ trực tiếp vào HĐMB' },
      ],
      footerNote: 'Chưa bao gồm VAT và KPBT',
      cardGradient: 'from-[#0b214f]/90 via-[#07193f]/95 to-[#040f28]',
      borderColor: 'border-emerald-400/40 hover:border-emerald-400',
      tagBg: 'bg-emerald-400/15 border-emerald-400/30 text-emerald-300',
    },
    {
      id: 'loan',
      tabLabel: 'Vay 0% LS',
      shortDiscount: '0% LS',
      badge: 'Gói vay ngân hàng',
      title: 'Hỗ Trợ Lãi Suất 0%',
      subTitle: 'Hỗ trợ 65% GTCH',
      accentColor: 'rose',
      icon: Landmark,
      items: [
        { label: 'Hỗ trợ LS 0% đến', value: '31/12/2027', note: 'Ân hạn nợ gốc theo chính sách' },
      ],
      footerNote: 'Trần lãi suất cam kết 12%',
      cardGradient: 'from-[#0b214f]/90 via-[#07193f]/95 to-[#040f28]',
      borderColor: 'border-amber-400/40 hover:border-amber-400',
      tagBg: 'bg-rose-400/15 border-rose-400/30 text-rose-300',
    },
  ];

  return (
    <section id="policy" className="py-10 sm:py-16 lg:py-20 bg-transparent text-white overflow-hidden relative">
      {/* Key Visual Right-Red Acrylic Brush & Fiery Halftone */}
      <SectionKVDecoration variant="right-red" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Compact and mobile-proportioned */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 border border-red-400/40 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md mb-2.5">
            <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
            <span>CHÍNH SÁCH BÁN HÀNG CHÍNH THỨC</span>
          </div>

          <h2 className="font-serif-luxury sm:font-sans text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight uppercase leading-snug">
            ƯU ĐÃI ĐẶC QUYỀN <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">ĐỘNG LỰC TOWER</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1.5 max-w-2xl mx-auto leading-relaxed px-2">
            Quỹ căn hộ chiến dịch <strong>Không Gian Sáng Tạo</strong> – Bàn giao thô, đơn giá từ <strong>7x triệu/m² (đã VAT)</strong>.
          </p>

          {/* MOBILE ONLY: View Mode Switcher (Grid 2x2 vs Slide Detail) */}
          <div className="sm:hidden mt-4 inline-flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
            <button
              onClick={() => setMobileViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                mobileViewMode === 'grid'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Xem 4 gói gọn</span>
            </button>
            <button
              onClick={() => setMobileViewMode('slide')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                mobileViewMode === 'slide'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Chi tiết từng gói</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (Screens < 640px): 2 Super Friendly Modes                      */}
        {/* ========================================================================= */}
        <div className="sm:hidden">
          {mobileViewMode === 'grid' ? (
            /* --- Mode A: Ultra-Compact 2x2 Grid (Fits Entirely in 1 Screen Height) --- */
            <div className="grid grid-cols-2 gap-2.5">
              {/* Card 1: Cọc sớm */}
              <div 
                onClick={() => { setActiveMobileTab(0); setMobileViewMode('slide'); }}
                className="p-3 rounded-xl bg-gradient-to-b from-[#0a1f47]/95 to-[#040e26] border border-amber-400/40 shadow-lg active:scale-95 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      Giai đoạn cọc
                    </span>
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">Chiết Khấu Cọc</h4>
                  <div className="mt-2 text-center py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-lg font-black text-amber-300">3% – 6%</span>
                  </div>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                  <span>Hạn 31/07</span>
                  <span className="text-amber-400 font-bold">Chi tiết ›</span>
                </div>
              </div>

              {/* Card 2: TT Sớm */}
              <div 
                onClick={() => { setActiveMobileTab(1); setMobileViewMode('slide'); }}
                className="p-3 rounded-xl bg-gradient-to-b from-[#0a1f47]/95 to-[#040e26] border border-sky-400/40 shadow-lg active:scale-95 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-sky-400/20 text-sky-300 border border-sky-400/30">
                      TT Sớm
                    </span>
                    <TrendingDown className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">Thanh Toán Sớm</h4>
                  <div className="mt-2 text-center py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-lg font-black text-sky-300">9% – 11%</span>
                  </div>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                  <span>50-70-95%</span>
                  <span className="text-sky-300 font-bold">Chi tiết ›</span>
                </div>
              </div>

              {/* Card 3: Tiến độ */}
              <div 
                onClick={() => { setActiveMobileTab(2); setMobileViewMode('slide'); }}
                className="p-3 rounded-xl bg-gradient-to-b from-[#0a1f47]/95 to-[#040e26] border border-emerald-400/40 shadow-lg active:scale-95 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                      Tiến độ chuẩn
                    </span>
                    <Percent className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">Thanh Toán Tiến Độ</h4>
                  <div className="mt-2 text-center py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-lg font-black text-emerald-400">5%</span>
                  </div>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                  <span>Trừ vào HĐMB</span>
                  <span className="text-emerald-400 font-bold">Chi tiết ›</span>
                </div>
              </div>

              {/* Card 4: Hỗ trợ lãi suất 0% */}
              <div 
                onClick={() => { setActiveMobileTab(3); setMobileViewMode('slide'); }}
                className="p-3 rounded-xl bg-gradient-to-b from-[#0a1f47]/95 to-[#040e26] border border-rose-400/40 shadow-lg active:scale-95 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-rose-400/20 text-rose-300 border border-rose-400/30">
                      Vay ngân hàng
                    </span>
                    <Landmark className="w-3.5 h-3.5 text-rose-400" />
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">Hỗ Trợ LS 0%</h4>
                  <div className="mt-2 text-center py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-lg font-black text-rose-300">0% Lãi Suất</span>
                  </div>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                  <span>Đến 31/12/27</span>
                  <span className="text-rose-300 font-bold">Chi tiết ›</span>
                </div>
              </div>
            </div>
          ) : (
            /* --- Mode B: Interactive Detail Slider with 4 Horizontal Pills --- */
            <div className="space-y-3">
              {/* 4 Compact Horizontal Tab Pills */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
                {policies.map((pol, idx) => (
                  <button
                    key={pol.id}
                    onClick={() => setActiveMobileTab(idx)}
                    className={`py-1.5 px-1 rounded-lg text-center transition-all ${
                      activeMobileTab === idx
                        ? 'bg-amber-400 text-slate-950 font-black shadow'
                        : 'text-slate-400 hover:text-white font-semibold'
                    }`}
                  >
                    <span className="text-[10px] block leading-tight truncate">{pol.tabLabel}</span>
                    <span className="text-[11px] block font-black leading-none mt-0.5">{pol.shortDiscount}</span>
                  </button>
                ))}
              </div>

              {/* Active Policy Focused Card */}
              {(() => {
                const current = policies[activeMobileTab];
                const Icon = current.icon;
                return (
                  <div className="p-4 rounded-2xl bg-gradient-to-b from-[#0b214f] via-[#07193f] to-[#040f28] border-2 border-amber-400/60 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-sky-400 to-amber-400" />
                    
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider block">
                            {current.badge}
                          </span>
                          <h4 className="text-sm font-black text-white">{current.title}</h4>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">
                        {activeMobileTab + 1}/4
                      </span>
                    </div>

                    {/* Policy Values List */}
                    <div className="space-y-1.5 my-3">
                      {current.items.map((item, i) => (
                        <div key={i} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold text-slate-200 block">{item.label}</span>
                            <span className="text-[10px] text-slate-400">{item.note}</span>
                          </div>
                          <span className="text-xl font-black text-amber-300 ml-2 shrink-0">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer condition & Prev/Next buttons */}
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-[10px] text-slate-400">{current.footerNote}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setActiveMobileTab((prev) => (prev > 0 ? prev - 1 : 3))}
                          className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                          title="Gói trước"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setActiveMobileTab((prev) => (prev < 3 ? prev + 1 : 0))}
                          className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                          title="Gói tiếp"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* TABLET & DESKTOP VIEW (Screens >= 640px): 4-Column Luxury Layout           */}
        {/* ========================================================================= */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Card 1: CHIẾT KHẤU ĐẶT CỌC */}
          <div className="rounded-2xl p-5 lg:p-6 bg-gradient-to-b from-[#0b214f]/90 via-[#07193f]/95 to-[#040f28] border border-amber-400/40 hover:border-amber-400 shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(245,158,11,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            
            <div className="w-full">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider mb-2.5">
                <Calendar className="w-3 h-3" />
                Giai đoạn đặt chỗ
              </span>
              <h3 className="font-sans font-black text-base text-white uppercase tracking-wide leading-snug">
                CHIẾT KHẤU<br />ĐẶT CỌC
              </h3>
              <div className="w-8 h-0.5 bg-amber-400/50 mx-auto mt-2 rounded-full" />
            </div>

            <div className="my-5 w-full py-1">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between px-3.5">
                  <span className="font-bold text-xs uppercase text-slate-300">Căn 2N</span>
                  <span className="font-black text-xl lg:text-2xl text-amber-300">3%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between px-3.5">
                  <span className="font-bold text-xs uppercase text-slate-300">Căn 3N</span>
                  <span className="font-black text-xl lg:text-2xl text-rose-400">6%</span>
                </div>
              </div>
            </div>

            <div className="w-full pt-3 border-t border-slate-800/80">
              <span className="inline-block px-2.5 py-1 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 text-[10px] font-black uppercase tracking-wider">
                ĐẾN NGÀY 31/7/2026
              </span>
            </div>
          </div>

          {/* Card 2: CHIẾT KHẤU THANH TOÁN SỚM */}
          <div className="rounded-2xl p-5 lg:p-6 bg-gradient-to-b from-[#0b214f]/90 via-[#07193f]/95 to-[#040f28] border border-sky-500/30 hover:border-amber-400 shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(56,189,248,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

            <div className="w-full">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-[10px] font-extrabold uppercase tracking-wider mb-2.5">
                <TrendingDown className="w-3 h-3" />
                Thanh toán nhanh
              </span>
              <h3 className="font-sans font-black text-base text-white uppercase tracking-wide leading-snug">
                CHIẾT KHẤU<br />THANH TOÁN SỚM
              </h3>
              <div className="w-8 h-0.5 bg-sky-400/50 mx-auto mt-2 rounded-full" />
            </div>

            <div className="my-5 w-full py-1">
              <div className="space-y-1.5">
                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between px-3">
                  <span className="font-bold text-[11px] uppercase text-slate-300">TT Sớm 50%</span>
                  <span className="font-black text-lg text-sky-300">9%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between px-3">
                  <span className="font-bold text-[11px] uppercase text-slate-300">TT Sớm 70%</span>
                  <span className="font-black text-lg text-amber-300">10%</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/80 border border-red-500/30 flex items-center justify-between px-3">
                  <span className="font-bold text-[11px] uppercase text-rose-300">TT Sớm 95%</span>
                  <span className="font-black text-lg text-rose-400">11%</span>
                </div>
              </div>
            </div>

            <div className="w-full pt-3 border-t border-slate-800/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                (Chưa gồm VAT và KPBT)
              </span>
            </div>
          </div>

          {/* Card 3: CHIẾT KHẤU THANH TOÁN TIẾN ĐỘ */}
          <div className="rounded-2xl p-5 lg:p-6 bg-gradient-to-b from-[#0b214f]/90 via-[#07193f]/95 to-[#040f28] border border-emerald-500/30 hover:border-amber-400 shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

            <div className="w-full">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider mb-2.5">
                <Percent className="w-3 h-3" />
                Tiến độ chuẩn CĐT
              </span>
              <h3 className="font-sans font-black text-base text-white uppercase tracking-wide leading-snug">
                CHIẾT KHẤU<br />THANH TOÁN TIẾN ĐỘ
              </h3>
              <div className="w-8 h-0.5 bg-emerald-400/50 mx-auto mt-2 rounded-full" />
            </div>

            <div className="my-5 w-full flex flex-col items-center justify-center py-3">
              <div className="font-black text-4xl lg:text-5xl text-emerald-400 tracking-tight drop-shadow-[0_4px_16px_rgba(16,185,129,0.3)]">
                5%
              </div>
              <span className="text-xs text-slate-300 font-semibold mt-1">Chiết khấu trực tiếp vào HĐMB</span>
            </div>

            <div className="w-full pt-3 border-t border-slate-800/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                (Chưa gồm VAT và KPBT)
              </span>
            </div>
          </div>

          {/* Card 4: HỖ TRỢ LÃI SUẤT 0% VỚI 65% GTCH */}
          <div className="rounded-2xl p-5 lg:p-6 bg-gradient-to-b from-[#0b214f]/90 via-[#07193f]/95 to-[#040f28] border border-amber-400/40 hover:border-amber-400 shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(245,158,11,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="w-full">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider mb-2.5">
                <Landmark className="w-3 h-3" />
                Gói tài trợ ngân hàng
              </span>
              <h3 className="font-sans font-black text-sm lg:text-base text-white uppercase tracking-wide leading-snug">
                HỖ TRỢ LÃI SUẤT 0%<br /><span className="text-amber-300">VỚI 65% GTCH</span>
              </h3>
              <div className="w-8 h-0.5 bg-amber-400/50 mx-auto mt-2 rounded-full" />
            </div>

            <div className="my-5 w-full py-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Hỗ trợ 0% đến
              </span>
              <div className="font-black text-2xl lg:text-3xl text-amber-300 tracking-tight">
                31/12/2027
              </div>
              <span className="text-[11px] text-slate-300 font-medium mt-1 block">
                Ân hạn nợ gốc theo chính sách
              </span>
            </div>

            <div className="w-full pt-3 border-t border-slate-800/80">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                (Trần lãi suất cam kết 12%)
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Bottom Explanatory & Action Banner (Responsive, Compact on Phone)        */}
        {/* ========================================================================= */}
        <div className="mt-5 sm:mt-10 p-4 sm:p-5 lg:p-6 rounded-2xl bg-gradient-to-r from-[#071c47] via-[#0b2766] to-[#071c47] border border-amber-400/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-start gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 hidden sm:flex">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mb-1">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Chính sách tối ưu dòng tiền
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-400 hidden sm:inline-block" />
                <span className="text-xs text-slate-300">
                  Dành riêng khách hàng đợt 1
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 max-w-3xl leading-relaxed">
                Có thể kết hợp chiết khấu đặt cọc sớm với phương án thanh toán sớm 95% để hưởng ưu đãi lũy kế cao nhất, hoặc nhận gói vay 0% lãi suất đến 31/12/2027.
              </p>
            </div>
          </div>

          {/* Action buttons: on mobile, side-by-side or compact stack */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2.5 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="shimmer-sweep px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs sm:text-sm font-black uppercase tracking-wide transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-1.5 cursor-pointer border border-red-400/40 hover:scale-102 text-center"
            >
              <span>Nhận Bảng Tính</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            </button>

            <a
              href="tel:0565130130"
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-white text-xs sm:text-sm font-black transition-all border border-amber-400/40 flex items-center justify-center gap-1.5 text-center shadow"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-bounce" />
              <span>0565 130 130</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
