import React, { useState, useMemo, useEffect } from 'react';
import { UnitType, ApartmentUnit } from './types';
import { APARTMENT_UNITS, PROJECT_INFO } from './data/mockData';
import { ImageProvider, useImageContext } from './context/ImageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CreativeSpaceSection } from './components/CreativeSpaceSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ProjectOverview } from './components/ProjectOverview';
import { LocationSection } from './components/LocationSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { EightReasonsSection } from './components/EightReasonsSection';
import { FloorplanSection } from './components/FloorplanSection';
import { PaymentPolicySection } from './components/PaymentPolicySection';
import { TimelineSection } from './components/TimelineSection';
import { LegalSection } from './components/LegalSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { ApartmentFilter } from './components/ApartmentFilter';
import { ApartmentList } from './components/ApartmentList';
import { UnitDetailModal } from './components/UnitDetailModal';
import { FAQSection } from './components/FAQSection';
import { ConsultationForm } from './components/ConsultationForm';
import { VirtualAdvisorChat } from './components/VirtualAdvisorChat';
import { Footer } from './components/Footer';
import { ImageUploaderModal } from './components/ImageUploaderModal';
import { ImageManagerModal } from './components/ImageManagerModal';
import { SeamlessBackground } from './components/SeamlessBackground';
import { FloatingActions } from './components/FloatingActions';
import { SectionKVDecoration } from './components/SectionKVDecoration';
import { Sparkles, Phone, FileSpreadsheet, Flame, Bot } from 'lucide-react';

function AppContent() {
  // Filters State
  const [selectedType, setSelectedType] = useState<UnitType | 'all'>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [directionFilter, setDirectionFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-asc');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Modals state
  const [selectedUnitForDetail, setSelectedUnitForDetail] = useState<ApartmentUnit | null>(null);
  const [preselectedUnitForBooking, setPreselectedUnitForBooking] = useState<ApartmentUnit | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Filter and sort logic
  const filteredUnits = useMemo(() => {
    return APARTMENT_UNITS.filter((unit) => {
      // Type filter
      if (selectedType !== 'all' && unit.type !== selectedType) {
        return false;
      }

      // Price range filter
      if (priceRange === 'under5' && unit.price >= 5000000000) return false;
      if (priceRange === '5to6' && (unit.price < 5000000000 || unit.price > 6000000000)) return false;
      if (priceRange === 'above6' && unit.price <= 6000000000) return false;

      // Direction filter
      if (directionFilter !== 'all' && unit.direction !== directionFilter) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'area-desc') return b.carpetArea - a.carpetArea;
      if (sortBy === 'floor-asc') return a.floor - b.floor;
      return 0;
    });
  }, [selectedType, priceRange, directionFilter, sortBy]);

  const hasActiveFilters = selectedType !== 'all' || priceRange !== 'all' || directionFilter !== 'all';

  const resetFilters = () => {
    setSelectedType('all');
    setPriceRange('all');
    setDirectionFilter('all');
    setSortBy('price-asc');
  };

  const scrollToApartments = () => {
    const el = document.getElementById('apartments');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookViewing = (unit: ApartmentUnit) => {
    setPreselectedUnitForBooking(unit);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020716] text-white selection:bg-red-600 selection:text-white relative pb-16 md:pb-0">
      {/* Seamless Global Architectural Background */}
      <SeamlessBackground />

      {/* Top Navigation */}
      <Navbar
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Hero Section matching mockup: Nơi mình Dựng Xây Sự Nghiệp + 7x triệu/m2 card */}
      <Hero
        selectedType={selectedType}
        priceRange={priceRange}
        onTypeChange={setSelectedType}
        onPriceRangeChange={setPriceRange}
        onSearchClick={scrollToApartments}
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 03: Không gian Sáng tạo (Banner ngang chia đôi) */}
      <CreativeSpaceSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 04: 3 Nhóm khách hàng (Card ảnh nghiêng nối liền trên nền navy) */}
      <TargetAudienceSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 3: Tổng quan về Động Lực Tower (10 specs cards + Skyline photo slot) */}
      <ProjectOverview
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 4: Vị trí tâm điểm - Kết nối tương lai (Commute times + Map photo frame) */}
      <LocationSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 5: Lợi thế gia tăng giá trị (4 photo cards: Metro, Tuyến đường, Khu Tây, Đại đô thị) */}
      <InfrastructureSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 6: Tiện ích đa dạng - Nâng tầm trải nghiệm (5 photo cards) */}
      <AmenitiesSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 7: 8 Lý do chọn Động Lực Tower */}
      <EightReasonsSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 8: Mặt bằng căn hộ - Thiết kế tối ưu (Tabs 2PN, 3PN + Floorplan image + Floor layout image) */}
      <FloorplanSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 9: Chính sách bán hàng (3 cards, No 300M gift, valid until 30/09/2026) */}
      <PaymentPolicySection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 10: Tiến độ hoàn thiện - Vững tiến từng cột mốc (Timeline + Actual site photo slot) */}
      <TimelineSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Section 11: Pháp lý dự án - Vững vàng niềm tin (4 badges + Legal contract photo slot) */}
      <LegalSection />

      {/* Section 12: Đăng ký nhận thông tin dự án (Inline form + Hotline 0565 130 130) */}
      <LeadCaptureSection />

      {/* Section 13: Apartment Inventory & Interactive Floorplan Browser */}
      <section id="apartments" className="py-20 bg-transparent relative overflow-hidden">
        {/* Key Visual Sunset Highway Light Trails */}
        <SectionKVDecoration variant="highway-trails" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BẢNG HÀNG & GIÁ BÁN CHI TIẾT</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 uppercase">
              GIỎ HÀNG 156 CĂN HỘ ĐỘNG LỰC TOWER
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Giá chỉ từ <strong className="text-amber-300">7x triệu/m² ĐÃ BAO GỒM VAT</strong>. Tiêu chuẩn bàn giao linh hoạt: <strong>Bàn giao thô hoặc Hoàn thiện trọn gói</strong> theo nhu cầu, ưu đãi tài chính hỗ trợ vay 70%.
            </p>
          </div>

          {/* Interactive Filters */}
          <ApartmentFilter
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            directionFilter={directionFilter}
            onDirectionFilterChange={setDirectionFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onReset={resetFilters}
            hasActiveFilters={hasActiveFilters}
            totalCount={filteredUnits.length}
          />

          {/* Units List */}
          <ApartmentList
            units={filteredUnits}
            viewMode={viewMode}
            onSelectUnit={setSelectedUnitForDetail}
            onBookViewing={handleBookViewing}
            onResetFilters={resetFilters}
          />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Interactive Sticky Bottom Bar for Mobile (Clean 3-Action Grid - Zero Clutter) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 sm:p-2.5 flex items-center justify-between gap-1.5 sm:gap-2 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
        {/* 1. Gọi Hotline CĐT */}
        <a
          href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
          className="flex-1 py-2.5 px-1.5 rounded-xl bg-slate-900 active:bg-slate-800 text-rose-400 font-bold text-[11px] flex items-center justify-center gap-1.5 border border-rose-500/30 transition-all cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-rose-400 animate-pulse shrink-0" />
          <span className="whitespace-nowrap font-bold">Hotline CĐT</span>
        </a>

        {/* 2. Chat Trợ Lý AI */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="flex-1 py-2.5 px-1.5 rounded-xl bg-slate-900 active:bg-slate-800 text-amber-300 font-bold text-[11px] flex items-center justify-center gap-1.5 border border-amber-400/40 transition-all cursor-pointer relative"
        >
          <div className="relative shrink-0">
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span className="whitespace-nowrap font-bold">Trợ Lý AI</span>
        </button>

        {/* 3. Nhận Báo Giá 7x tr/m² */}
        <button
          onClick={() => {
            setPreselectedUnitForBooking(null);
            setIsConsultationOpen(true);
          }}
          className="flex-1 py-2.5 px-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 active:from-amber-600 text-slate-950 font-black text-[11px] flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="whitespace-nowrap font-black">Báo Giá 7x</span>
        </button>
      </div>

      {/* Virtual AI / Sales Assistant Chat Window */}
      <VirtualAdvisorChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Floating Actions on Desktop & Mobile Scroll-to-Top */}
      <FloatingActions
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
        onOpenChat={() => setIsChatOpen(true)}
        isChatOpen={isChatOpen}
      />

      {/* Footer */}
      <Footer
        onOpenConsultation={() => {
          setPreselectedUnitForBooking(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Modals & Drawers */}
      <UnitDetailModal
        unit={selectedUnitForDetail}
        onClose={() => setSelectedUnitForDetail(null)}
        onBookViewing={handleBookViewing}
      />

      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedUnit={preselectedUnitForBooking}
      />

      {/* Single Image Slot Uploader Modal */}
      <ImageUploaderModal />

      {/* All Image Slots Overview Manager Modal */}
      <ImageManagerModal />
    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <AppContent />
    </ImageProvider>
  );
}
