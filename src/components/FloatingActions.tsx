import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Sparkles, Bot } from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
  onOpenChat: () => void;
  isChatOpen: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ 
  onOpenConsultation, 
  onOpenChat,
  isChatOpen 
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);
      setIsScrolledPastHero(scrollY > 200);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 
        MOBILE ONLY: Standalone Scroll-to-Top Button 
        Positioned at bottom-20 (safely above the mobile sticky action bar at bottom-0).
        Never overlaps the bottom bar or any buttons!
      */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
          className="md:hidden fixed bottom-20 right-3.5 z-40 w-10 h-10 rounded-full bg-slate-900/90 active:scale-95 text-amber-400 border border-slate-700 shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

      {/* 
        DESKTOP ONLY (md:flex): Unified Floating Column
        All desktop floating actions live in a single flex-col container.
        Eliminates duplicate overlapping widgets completely!
      */}
      <div 
        className={`hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto select-none transition-all duration-300 ${
          isScrolledPastHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        {/* Scroll to top (Desktop) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Lên đầu trang"
            title="Lên đầu trang"
            className="w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-amber-400 shadow-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer backdrop-blur-md"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* AI Virtual Advisor Trigger (Desktop) */}
        {!isChatOpen && (
          <button
            onClick={onOpenChat}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-white text-xs font-bold border border-amber-400/50 shadow-xl hover:shadow-amber-400/20 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            title="Tư vấn trực tuyến 24/7 cùng Trợ lý AI"
          >
            <div className="relative">
              <Bot className="w-4 h-4 text-amber-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full" />
            </div>
            <span>Trợ Lý Động Lực 24/7</span>
          </button>
        )}

        {/* Quick Consultation Request Button (Desktop) */}
        <button
          onClick={onOpenConsultation}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#081b47]/95 hover:bg-[#0c2766] text-amber-300 hover:text-amber-200 text-xs font-bold border border-amber-400/40 shadow-xl hover:shadow-[0_6px_25px_rgba(251,191,36,0.3)] backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          title="Nhận bảng giá và chính sách bán hàng"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Bảng Giá & CSBH 7x</span>
        </button>

        {/* Hotline Floating Button with Pulse Aura (Desktop) */}
        <a
          href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
          className="group relative flex items-center gap-2.5 px-4.5 py-3 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white font-black text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(220,38,38,0.55)] hover:shadow-[0_12px_35px_rgba(220,38,38,0.8)] border border-red-400/50 hover:scale-105 active:scale-95 transition-all duration-200"
          title="Gọi hotline tư vấn trực tiếp"
        >
          <span className="absolute -inset-1 rounded-full bg-red-500/30 animate-ping pointer-events-none" />
          <Phone className="w-4 h-4 text-amber-300 animate-bounce shrink-0" />
          <span className="font-sans font-bold tracking-wide whitespace-nowrap">{PROJECT_INFO.hotlineDisplay}</span>
        </a>
      </div>
    </>
  );
};
