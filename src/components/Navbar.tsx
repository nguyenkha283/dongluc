import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';
import { DongLucLogo } from './DongLucLogo';
import { CenLandLogo } from './CenLandLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tổng quan', href: '#overview' },
    { name: 'Vị trí', href: '#location' },
    { name: 'Không gian sáng tạo', href: '#creative-space' },
    { name: 'Mặt bằng', href: '#apartments' },
    { name: 'Tiện ích', href: '#amenities' },
    { name: 'Chính sách', href: '#policy' },
    { name: 'Tiến độ', href: '#timeline' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-800/80 py-2.5'
          : 'bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Dual Brand Logos: Động Lực Tower & CEN LAND */}
          <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
            <a href="#" className="flex items-center group shrink-0" title="Động Lực Tower 130 Hạ Đình">
              {/* Động Lực Official Logo */}
              <DongLucLogo variant="horizontal" theme="white" />
            </a>

            <div className="h-8 w-px bg-slate-700/80 hidden sm:block shrink-0" />

            {/* Cen Land Official Logo - Synchronized Size */}
            <div className="hidden sm:flex items-center shrink-0" title="Cen Land - Đơn vị phân phối chiến lược">
              <CenLandLogo variant="horizontal" theme="white" size="md" />
            </div>
          </div>

          {/* Desktop Nav Links - Single line guaranteed with whitespace-nowrap */}
          <nav className="hidden lg:flex items-center flex-nowrap shrink-0 gap-1 xl:gap-2.5 text-xs xl:text-[13px] font-semibold text-slate-200 whitespace-nowrap font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 px-2 xl:px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/70 transition-all leading-normal"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Tools & Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-nowrap">
            {/* Direct Hotline */}
            <a
              href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700/80 hover:border-red-500 transition-all text-xs font-bold whitespace-nowrap shrink-0 shadow-sm"
            >
              <Phone className="w-3 h-3 text-red-400 animate-pulse shrink-0" />
              <span className="whitespace-nowrap font-sans font-bold tracking-wide">{PROJECT_INFO.hotline}</span>
            </a>

            {/* Red "ĐĂNG KÝ TƯ VẤN ->" Button - Compact on mobile, full on desktop */}
            <button
              onClick={onOpenConsultation}
              className="shimmer-sweep px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all flex items-center gap-1 sm:gap-1.5 hover:scale-[1.03] active:scale-98 cursor-pointer border border-red-400/40 shrink-0 whitespace-nowrap font-sans"
            >
              <span className="sm:hidden">Tư Vấn</span>
              <span className="hidden sm:inline">ĐĂNG KÝ TƯ VẤN</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800/90 flex flex-col gap-1.5 animate-in slide-in-from-top-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between px-2 text-xs text-slate-400 border-t border-slate-800/60 mt-1">
              <div className="flex items-center gap-2">
                <CenLandLogo variant="symbol" size="xs" />
                <span className="text-[11px] text-slate-300">Đơn vị phân phối Cen Land</span>
              </div>
              <span>Hotline: <strong className="text-red-400">{PROJECT_INFO.hotline}</strong></span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
