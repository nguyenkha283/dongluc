import React, { useState, useEffect } from 'react';
import { 
  X, 
  Bed, 
  Bath, 
  Maximize2, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  CreditCard,
  Clock,
  Hammer,
  DoorClosed,
  Zap,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ApartmentUnit } from '../types';
import { formatVND, formatFullVND, PROJECT_INFO } from '../data/mockData';
import { CenLandLogo } from './CenLandLogo';

interface UnitDetailModalProps {
  unit: ApartmentUnit | null;
  onClose: () => void;
  onBookViewing: (unit: ApartmentUnit) => void;
}

export const UnitDetailModal: React.FC<UnitDetailModalProps> = ({
  unit,
  onClose,
  onBookViewing,
}) => {
  const [activeTab, setActiveTab] = useState<'3d' | 'floorplan'>('3d');

  useEffect(() => {
    if (!unit) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [unit, onClose]);

  if (!unit) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4 md:p-6 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative bg-slate-900 rounded-2xl sm:rounded-3xl max-w-4xl w-full shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-amber-400/30 overflow-hidden flex flex-col max-h-[94vh] sm:max-h-[90vh] my-auto text-white"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#040d22] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-slate-800 shrink-0 sticky top-0 z-30">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                {unit.tower}
              </span>
              <span className="text-xs text-slate-400">Tầng {unit.floor} • 130 Hạ Đình</span>
            </div>
            <h3 className="font-serif-luxury text-base sm:text-xl font-black tracking-tight text-white flex items-center gap-2 sm:gap-3">
              <span>Căn Hộ: {unit.code}</span>
              <span className="text-xs sm:text-sm font-bold text-amber-300 bg-slate-800 px-2 sm:px-2.5 py-0.5 rounded-full border border-amber-400/30">
                Loại {unit.type}
              </span>
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            title="Đóng cửa sổ (Esc)"
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white border border-slate-700 transition-all shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-5 flex-1">
          {/* Visual Display with 3D Render vs Floorplan Toggle */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('3d')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === '3d'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Phối cảnh 3D
                </button>
                <button
                  onClick={() => setActiveTab('floorplan')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'floorplan'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Mặt Bằng Kỹ Thuật
                </button>
              </div>

              {unit.driveUrl && (
                <a
                  href={unit.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-sky-950/80 hover:bg-sky-900 text-sky-200 border border-sky-400/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Mở xem file ảnh độ phân giải cao trên Google Drive"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ảnh gốc Drive</span>
                </a>
              )}
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-[16/9] sm:aspect-[16/10] bg-slate-950 group">
              <img
                src={activeTab === '3d' ? unit.image : unit.floorPlanUrl}
                alt={`Bản vẽ căn hộ ${unit.code}`}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-medium border border-slate-700 flex items-center gap-2">
                <span>{activeTab === '3d' ? 'Phối cảnh cắt lớp 3D thực tế' : 'Mặt bằng thông thủy phân bố phòng ốc'}</span>
                {unit.floorRange && (
                  <span className="text-amber-300 font-bold">• {unit.floorRange}</span>
                )}
              </div>
            </div>
          </div>

          {/* Key Specifications - Clean Row without heavy boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center shrink-0">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Thông thủy / Tim tường</span>
                <strong className="text-xs sm:text-sm text-white font-bold">{unit.carpetArea} m² / {unit.builtUpArea} m²</strong>
                {unit.floorRange && (
                  <span className="text-[10px] text-amber-300 block">{unit.floorRange}</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                <Bed className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Phòng ngủ / Logia</span>
                <strong className="text-xs sm:text-sm text-white font-bold">
                  {unit.bedrooms} PN {unit.logia ? `• ${unit.logia}` : ''}
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
                <Bath className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Phòng vệ sinh</span>
                <strong className="text-xs sm:text-sm text-white font-bold">{unit.bathrooms} Phòng tắm</strong>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Hướng ban công</span>
                <strong className="text-xs sm:text-sm text-white font-bold">{unit.direction}</strong>
              </div>
            </div>
          </div>

          {/* Description & Advantages */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Đặc điểm nổi bật & Thiết kế tối ưu
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
              {unit.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
              {unit.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Handover Standards - Flexible: Raw or Finished */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Hammer className="w-3.5 h-3.5 text-amber-400" />
              Tiêu chuẩn bàn giao: Thô hoặc Hoàn thiện trọn gói
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              Khách hàng linh hoạt lựa chọn nhận bàn giao thô tự do décor phong cách riêng hoặc đăng ký gói hoàn thiện nội thất trọn gói từ CĐT theo ngân sách gia đình.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <DoorClosed className="w-3.5 h-3.5 text-amber-400" />
                <span>Cửa chống cháy & ban công kính cường lực</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Hệ thống điện ngầm và ống cấp thoát nước chờ</span>
              </div>
            </div>
          </div>

          {/* Pricing & Loan Guidance */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
              <div>
                <span className="text-[11px] text-slate-400 font-semibold block">
                  Đơn giá thông thủy: <strong className="text-amber-400">{unit.pricePerSqm} triệu/m²</strong> (ĐÃ BAO GỒM VAT)
                </span>
                <div className="font-serif-luxury text-xl sm:text-2xl font-black text-white mt-0.5">
                  {formatFullVND(unit.price)}
                </div>
              </div>
              <div className="sm:text-right">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950">
                  Ưu đãi đợt 1 mở bán
                </span>
                <div className="text-[11px] text-slate-400 line-through mt-0.5">
                  Giá gốc: {formatFullVND(unit.originalPrice)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vốn tự có (30%): <strong>{formatVND(unit.price * 0.3)}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hỗ trợ vay 70%: <strong className="text-emerald-300">Lãi suất ưu đãi CĐT</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-950 px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-amber-400 group"
          >
            <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Hotline CĐT & Cen Land: <strong className="text-amber-400">{PROJECT_INFO.hotline}</strong></span>
            <CenLandLogo variant="symbol" size="xs" />
          </a>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookViewing(unit);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs sm:text-sm font-black shadow-md transition-all active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>NHẬN BÁO GIÁ & ĐẶT CĂN NÀY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
