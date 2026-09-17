import React from 'react';
import { Building2, Phone, MapPin, Mail, ShieldCheck, Clock, Award, Hammer, Flame, ExternalLink } from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';
import { DongLucLogo } from './DongLucLogo';
import { CenLandLogo } from './CenLandLogo';
import { SectionKVDecoration } from './SectionKVDecoration';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-transparent text-slate-400 pt-16 pb-12 border-t border-slate-800/80 backdrop-blur-sm relative overflow-hidden">
      {/* Key Visual Sunset Skyline & Highway Light Trails Backdrop */}
      <SectionKVDecoration variant="city-sunset" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-start gap-4">
              <DongLucLogo variant="stacked" theme="white" className="w-20 sm:w-24 shrink-0 -mt-1" />
              <div>
                <span className="font-serif font-black text-xl text-white tracking-wider block">
                  ĐỘNG LỰC TOWER
                </span>
                <p className="text-xs text-amber-400 font-semibold tracking-wide mt-0.5">
                  {PROJECT_INFO.slogan}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Chủ đầu tư: <strong>Tập đoàn Động Lực</strong>
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Tổ hợp căn hộ cao cấp tại 130 Hạ Đình, Thanh Xuân. Chiến dịch <strong>"Không Gian Sáng Tạo"</strong> (bàn giao thô) với mức giá đột phá chỉ từ <strong>7x triệu/m² ĐÃ BAO GỒM VAT</strong> áp dụng đến hết 30/09/2026.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Sổ hồng lâu dài
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                <span className="text-slate-400 font-medium text-[11px]">Đơn vị phân phối:</span>
                <CenLandLogo variant="horizontal" theme="white" size="xs" />
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Phòng Bán Hàng & Nhà Mẫu
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Hotline tư vấn trực tiếp:</span>
                  <a
                    href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
                    className="text-white font-extrabold hover:text-red-400 text-sm"
                  >
                    {PROJECT_INFO.hotline}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Địa chỉ thực tế:</span>
                  <a
                    href={PROJECT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-200 hover:text-amber-300 underline decoration-slate-600 hover:decoration-amber-400 underline-offset-2 transition-colors inline-flex items-center gap-1.5 group"
                    title="Mở trên Google Maps"
                  >
                    <span>{PROJECT_INFO.location}</span>
                    <ExternalLink className="w-3 h-3 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Giờ đón khách xem dự án:</span>
                  <span className="text-slate-200">08:00 - 19:30 (Thứ 2 - Chủ Nhật)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Khám Phá Dự Án
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-red-400 transition-colors">
                  Tổng quan về Động Lực Tower
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-red-400 transition-colors">
                  Vị trí tâm điểm 130 Hạ Đình
                </a>
              </li>
              <li>
                <a href="#creative-space" className="hover:text-red-400 transition-colors text-amber-300 font-semibold">
                  Chiến dịch Không Gian Sáng Tạo
                </a>
              </li>
              <li>
                <a href="#apartments" className="hover:text-red-400 transition-colors">
                  Mặt bằng căn hộ 2PN & 3PN
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-red-400 transition-colors">
                  Hệ thống tiện ích đa dạng
                </a>
              </li>
              <li>
                <a href="#policy" className="hover:text-red-400 transition-colors">
                  Chính sách giá từ 7x tr/m² có VAT
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-red-400 transition-colors">
                  Tiến độ thi công thực tế
                </a>
              </li>
            </ul>
          </div>

          {/* CTA & Download */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Tài Liệu Mặt Bằng
            </h4>
            <p className="text-xs text-slate-300">
              Nhận file PDF mặt bằng kỹ thuật bàn giao thô và bảng tính giá 7x tr/m² qua Zalo ngay trong 3 phút.
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md shadow-red-600/30 cursor-pointer"
            >
              Đăng Ký Nhận Báo Giá
            </button>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <CenLandLogo variant="symbol" size="xs" />
            <p>
              © {new Date().getFullYear()} Bản quyền thuộc CTCP Động Lực & Đơn vị phân phối chiến lược Cen Land.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300">Quy hoạch 1/500</span>
            <span className="hover:text-slate-300">Hợp đồng mua bán</span>
            <span className="hover:text-slate-300">Hotline: {PROJECT_INFO.hotline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
