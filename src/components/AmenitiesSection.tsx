import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShoppingBag, 
  Users2, 
  Dumbbell, 
  Gamepad2, 
  GraduationCap,
  Trees,
  Sparkles,
  PhoneCall,
  LayoutGrid,
  SlidersHorizontal
} from 'lucide-react';
import { ImageFrameSlot } from './ImageFrameSlot';
import { useImageContext, DEFAULT_IMAGE_SLOTS } from '../context/ImageContext';
import { SectionKVDecoration } from './SectionKVDecoration';

interface AmenitiesSectionProps {
  onOpenConsultation: () => void;
}

interface AmenityItem {
  slotId: string;
  number: string;
  title: string;
  shortName: string;
  tag: string;
  desc: string;
  icon: React.ElementType;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenConsultation }) => {
  const { getImageUrl, images } = useImageContext();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);
  const [desktopView, setDesktopView] = useState<'grid' | 'carousel'>('grid');
  const scrollRef = useRef<HTMLDivElement>(null);

  const resolveUrl = (slotId: string) => {
    if (typeof getImageUrl === 'function') {
      return getImageUrl(slotId);
    }
    return images?.[slotId] || DEFAULT_IMAGE_SLOTS[slotId]?.defaultUrl || '';
  };

  // 6 official amenities
  const amenities: AmenityItem[] = [
    {
      slotId: 'amenity_mall',
      number: '01',
      title: 'Trung tâm thương mại',
      shortName: 'TTTM Khối đế',
      tag: 'Khối đế 3 tầng',
      desc: 'Tổ hợp shophouse, siêu thị mini, cafe và ẩm thực cao cấp ngay dưới thềm nhà, đáp ứng trọn vẹn nhu cầu sinh hoạt thường nhật.',
      icon: ShoppingBag,
    },
    {
      slotId: 'amenity_community',
      number: '02',
      title: 'Khu sinh hoạt cộng đồng',
      shortName: 'Nhà cộng đồng',
      tag: 'Gắn kết cư dân',
      desc: 'Không gian văn hóa và kết nối sang trọng, nơi tổ chức các sự kiện gắn kết cộng đồng cư dân tinh hoa, văn minh tại 130 Hạ Đình.',
      icon: Users2,
    },
    {
      slotId: 'amenity_gym',
      number: '03',
      title: 'Phòng Gym & Yoga',
      shortName: 'Gym & Yoga',
      tag: 'Thiết bị cao cấp',
      desc: 'Hệ thống máy tập nhập khẩu hiện đại với tầm nhìn thoáng rộng, giúp cư dân rèn luyện thể lực và tái tạo năng lượng mỗi ngày.',
      icon: Dumbbell,
    },
    {
      slotId: 'amenity_kids',
      number: '04',
      title: 'Khu vui chơi trẻ em',
      shortName: 'Khu vui chơi',
      tag: 'Sân chơi an toàn',
      desc: 'Sân chơi vận động sáng tạo được lót thảm cao su chống va đập, nhiều trò chơi liên hoàn giúp con trẻ thỏa sức nô đùa.',
      icon: Gamepad2,
    },
    {
      slotId: 'amenity_kindergarten',
      number: '05',
      title: 'Nhà trẻ thông minh',
      shortName: 'Nhà trẻ nội khu',
      tag: 'Chuẩn quốc tế',
      desc: 'Trường mầm non chất lượng cao nội khu, giúp các bậc phụ huynh an tâm tuyệt đối trong việc đưa đón và nuôi dạy con trẻ.',
      icon: GraduationCap,
    },
    {
      slotId: 'amenity_garden',
      number: '06',
      title: 'Vườn trên cao & Sky Garden',
      shortName: 'Sky Garden',
      tag: 'Thư giãn an lành',
      desc: 'Khu vườn dạo bộ trên cao với mảng xanh mát lành, điểm dừng chân thư thái ngắm nhìn trọn vẹn toàn cảnh hồ Hạ Đình.',
      icon: Trees,
    },
  ];

  // Scroll to a specific card
  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      const targetLeft = card.offsetLeft - container.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
      setActiveMobileIdx(index);
    }
  };

  // Sync active dot on mobile scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIdx = 0;
    let minDistance = Infinity;

    for (let i = 0; i < container.children.length; i++) {
      const child = container.children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = i;
      }
    }
    setActiveMobileIdx(closestIdx);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % amenities.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + amenities.length) % amenities.length : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, amenities.length]);

  const activeAmenity = selectedIdx !== null ? amenities[selectedIdx] : null;

  return (
    <section id="amenities" className="py-12 sm:py-16 lg:py-20 bg-transparent text-white overflow-hidden relative">
      {/* Key Visual Dual Corner Brushes & Halftone Matrices */}
      <SectionKVDecoration variant="dual-corners" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 border border-red-400/40 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md shadow-red-600/20 mb-2.5">
            <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
            <span>HỆ THỐNG 6 TIỆN ÍCH NỘI KHU</span>
          </div>

          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            NÂNG TẦM <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">TRẢI NGHIỆM SỐNG</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed px-2">
            Hệ sinh thái tiện ích khép kín, thiết thực phục vụ trọn vẹn cuộc sống thường nhật của cư dân Động Lực Tower – 130 Hạ Đình.
          </p>

          {/* Desktop View Switcher (Only visible on lg screens) */}
          <div className="hidden lg:flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => setDesktopView('grid')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                desktopView === 'grid'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Xem dạng lưới (3x2)</span>
            </button>
            <button
              onClick={() => setDesktopView('carousel')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                desktopView === 'carousel'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Xem dạng trượt</span>
            </button>
          </div>
        </div>

        {/* Quick Nav Chips for Mobile / Tablet */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 mb-4 -mx-4 px-4 lg:hidden">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            const isCurrent = idx === activeMobileIdx;
            return (
              <button
                key={item.slotId}
                onClick={() => scrollToCard(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 transition-all border cursor-pointer ${
                  isCurrent
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-400/20 scale-105'
                    : 'bg-[#081b44] text-slate-300 border-sky-500/20 hover:border-amber-400/40'
                }`}
              >
                <Icon className={`w-3 h-3 ${isCurrent ? 'text-slate-950' : 'text-amber-400'}`} />
                <span>{item.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* --- PRESENTATION CONTAINER --- */}
        {/* On Mobile & Tablet (< lg): Always uses Native Touch Carousel with peek effect */}
        {/* On Desktop (lg): Switches between 3x2 Grid or Carousel based on user preference */}
        
        <div className="relative">
          
          {/* CAROUSEL CONTAINER (Default on Mobile, or on Desktop if carousel active) */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className={`scrollbar-none ${
              desktopView === 'grid'
                ? 'flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none gap-3.5 sm:gap-4 lg:gap-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-3 lg:pb-0'
                : 'flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-3'
            }`}
            style={{ scrollBehavior: 'smooth' }}
          >
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.slotId}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group relative rounded-2xl overflow-hidden bg-[#051438] border border-sky-500/25 hover:border-amber-400 shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.25)] transition-all duration-300 hover:-translate-y-1 cursor-pointer backdrop-blur-sm flex flex-col justify-between shrink-0 snap-center ${
                    desktopView === 'grid'
                      ? 'w-[84vw] max-w-[330px] sm:w-[320px] lg:w-auto h-[320px] sm:h-[330px] lg:h-[290px]'
                      : 'w-[84vw] max-w-[340px] sm:w-[340px] lg:w-[360px] h-[340px] sm:h-[350px] lg:h-[340px]'
                  }`}
                >
                  {/* Full-bleed Photo Background */}
                  <div className="absolute inset-0">
                    <ImageFrameSlot
                      slotId={item.slotId}
                      label={item.title}
                      aspectRatio="h-full w-full"
                      className="h-full w-full object-cover"
                      imgClassName="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      alt={item.title}
                    />
                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020917] via-[#020917]/55 to-black/20 group-hover:via-[#020917]/40 transition-colors pointer-events-none" />
                  </div>

                  {/* Top Bar: Pill Tag & Camera Button */}
                  <div className="relative z-10 p-3 sm:p-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-amber-400/40 text-amber-300 text-[10px] sm:text-[11px] font-black uppercase tracking-wider backdrop-blur-md shadow-md">
                      <span className="text-white/70 font-mono font-bold">{item.number}</span>
                      <span>•</span>
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* Center "Xem Phóng To" Pill */}
                  <div className="relative z-10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-amber-400 text-amber-300 text-xs font-black tracking-wide flex items-center gap-1.5 shadow-2xl">
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Xem ảnh chi tiết</span>
                    </span>
                  </div>

                  {/* Bottom Info Block */}
                  <div className="relative z-10 p-3.5 sm:p-4 bg-gradient-to-t from-[#020917]/98 via-[#020917]/85 to-transparent pointer-events-none">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 mb-1">
                      <Icon className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.tag}</span>
                    </div>
                    <h3 className="font-sans font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Indicators & Navigation Arrows (visible on mobile / tablet / desktop carousel) */}
          <div className={`mt-3 flex items-center justify-between px-1 ${desktopView === 'grid' ? 'lg:hidden' : 'flex'}`}>
            {/* Progress counter text */}
            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
              <span className="text-amber-400 font-bold font-mono text-sm">
                0{activeMobileIdx + 1}
              </span>
              <span className="text-slate-500">/ 06</span>
              <span className="text-slate-400 hidden sm:inline truncate max-w-[150px]">
                • {amenities[activeMobileIdx]?.title}
              </span>
            </div>

            {/* 6 Dots Indicator */}
            <div className="flex items-center gap-1.5">
              {amenities.map((item, idx) => (
                <button
                  key={item.slotId}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeMobileIdx 
                      ? 'w-6 bg-amber-400 shadow-sm shadow-amber-400/40' 
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  title={item.title}
                />
              ))}
            </div>

            {/* Next / Prev Touch Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollToCard(Math.max(0, activeMobileIdx - 1))}
                disabled={activeMobileIdx === 0}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  activeMobileIdx > 0
                    ? 'bg-[#091b42] border-sky-500/30 text-amber-300 hover:bg-slate-800'
                    : 'bg-slate-900/50 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                }`}
                title="Tiện ích trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToCard(Math.min(amenities.length - 1, activeMobileIdx + 1))}
                disabled={activeMobileIdx === amenities.length - 1}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  activeMobileIdx < amenities.length - 1
                    ? 'bg-[#091b42] border-sky-500/30 text-amber-300 hover:bg-slate-800'
                    : 'bg-slate-900/50 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                }`}
                title="Tiện ích tiếp"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom CTA Banner - Mobile Responsive */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 lg:p-6 rounded-2xl bg-gradient-to-r from-[#071c47] via-[#0b2766] to-[#071c47] border border-amber-400/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 hidden sm:flex">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm lg:text-base font-extrabold text-white">
                Tham Quan & Khám Phá Tiện Ích Động Lực Tower
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                Nhận sơ đồ bố trí mặt bằng chi tiết 6 tiện ích và đăng ký xem căn hộ thực tế tại 130 Hạ Đình.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenConsultation}
              className="shimmer-sweep flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 inline-flex items-center justify-center gap-1.5 cursor-pointer border border-red-400/40"
            >
              <span>NHẬN SƠ ĐỒ TIỆN ÍCH</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </button>

            <a
              href="tel:0565130130"
              className="px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white text-[11px] sm:text-xs font-bold transition-all border border-slate-700/80 inline-flex items-center justify-center gap-1.5 shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>0565 130 130</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal: Full Screen Interactive Gallery */}
      {selectedIdx !== null && activeAmenity && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#07173e] border border-amber-400/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 bg-[#040e29] border-b border-sky-500/20">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  {activeAmenity.tag}
                </span>
                <h3 className="text-xs sm:text-base font-bold text-white truncate max-w-[180px] sm:max-w-none">
                  {activeAmenity.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Đóng cửa sổ"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Main Image Area */}
            <div className="relative flex-1 bg-black/80 flex items-center justify-center min-h-[260px] sm:min-h-[320px] max-h-[58vh] overflow-hidden group">
              <img
                src={resolveUrl(activeAmenity.slotId)}
                alt={activeAmenity.title}
                className="max-h-[58vh] w-full object-contain"
              />

              {/* Prev Navigation Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx((prev) => (prev !== null ? (prev - 1 + amenities.length) % amenities.length : 0));
                }}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center border border-white/30 shadow-xl transition-all cursor-pointer hover:scale-110 active:scale-95 z-10"
                title="Tiện ích trước"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
              </button>

              {/* Next Navigation Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx((prev) => (prev !== null ? (prev + 1) % amenities.length : 0));
                }}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center border border-white/30 shadow-xl transition-all cursor-pointer hover:scale-110 active:scale-95 z-10"
                title="Tiện ích tiếp theo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
              </button>
            </div>

            {/* Modal Bottom Information & Thumbnails Bar */}
            <div className="p-3 sm:p-5 bg-[#051336] border-t border-sky-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="space-y-1 max-w-xl">
                <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {activeAmenity.desc}
                </p>
                <span className="text-[10px] sm:text-[11px] text-amber-300 font-medium block">
                  📍 Tổ hợp căn hộ cao cấp Động Lực Tower - 130 Hạ Đình, Thanh Xuân, Hà Nội
                </span>
              </div>

              {/* Mini Thumbnail Navigation */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 shrink-0 max-w-full">
                {amenities.map((item, idx) => (
                  <button
                    key={item.slotId}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-11 h-9 sm:w-12 sm:h-10 rounded-lg overflow-hidden border transition-all cursor-pointer relative shrink-0 ${
                      idx === selectedIdx 
                        ? 'border-amber-400 ring-2 ring-amber-400/40 scale-105' 
                        : 'border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-400'
                    }`}
                    title={item.title}
                  >
                    <img 
                      src={resolveUrl(item.slotId)} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
