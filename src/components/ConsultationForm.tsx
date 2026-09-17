import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Phone, 
  User, 
  Mail, 
  CheckCircle2, 
  FileText, 
  Car, 
  ShieldCheck, 
  Flame,
  Clock,
  ChevronDown
} from 'lucide-react';
import { ApartmentUnit } from '../types';
import { PROJECT_INFO } from '../data/mockData';
import { CenLandLogo } from './CenLandLogo';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedUnit?: ApartmentUnit | null;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen,
  onClose,
  preselectedUnit,
}) => {
  const [activeType, setActiveType] = useState<'quotation' | 'viewing'>('quotation');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [unitType, setUnitType] = useState<'2PN' | '3PN'>(
    preselectedUnit ? (preselectedUnit.type as '2PN' | '3PN') : '2PN'
  );
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setNote('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
      onClick={(e) => {
        // Click outside backdrop to close
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Card - strictly capped at 92vh / 88vh with flex-col so header & close button NEVER disappear */}
      <div 
        className="relative bg-gradient-to-b from-[#0a1b42] via-[#071536] to-[#040e24] rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-2 border-amber-400/40 overflow-hidden text-white flex flex-col max-h-[92vh] sm:max-h-[88vh] my-auto animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* ============================================================ */}
        {/* FIXED HEADER: Always visible, never cut off, clear Red Close button */}
        {/* ============================================================ */}
        <div className="bg-[#040d22] px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0 sticky top-0 z-30">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] sm:text-xs font-black text-amber-300 uppercase tracking-wider bg-amber-400/15 px-2 py-0.5 rounded border border-amber-400/30 flex items-center gap-1">
                <Flame className="w-3 h-3 text-red-400 animate-pulse" />
                <span>Chiến Dịch Tháng 9/2026</span>
              </span>
              <span className="text-[10px] text-slate-400 hidden sm:inline-flex items-center gap-1">
                <Clock className="w-3 h-3 text-sky-400" />
                Phản hồi trong 3 phút
              </span>
            </div>
            
            <h3 className="font-serif-luxury font-black text-sm sm:text-base text-white tracking-tight leading-tight truncate">
              {activeType === 'quotation' ? 'Đăng Ký Nhận Báo Giá 7x tr/m² (VAT)' : 'Đặt Lịch Xe Đón Xem Thực Tế'}
            </h3>
          </div>

          {/* ULTRA-PROMINENT CLOSE BUTTON: Big, red-accented, impossible to miss */}
          <button
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            title="Đóng cửa sổ (Esc)"
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 hover:bg-red-500 active:scale-90 text-white shadow-lg shadow-red-600/40 border border-red-400 transition-all shrink-0 cursor-pointer group"
          >
            <X className="w-5 h-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* ============================================================ */}
        {/* SCROLLABLE FORM BODY: Compact padding, neatly scaled for phones & laptops */}
        {/* ============================================================ */}
        <div className="overflow-y-auto flex-1 p-3.5 sm:p-5 space-y-3 sm:space-y-3.5 overscroll-contain">
          
          {isSubmitted ? (
            <div className="text-center py-4 sm:py-6 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-12 h-12 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="p-1.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <CenLandLogo variant="horizontal" theme="white" size="xs" />
                </div>
              </div>

              <h4 className="font-serif-luxury text-xl font-black text-white mb-1.5">
                Đăng Ký Thành Công!
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-4 leading-relaxed">
                Cảm ơn Quý khách <strong className="text-amber-300">{name}</strong>. Chuyên viên Cen Land phụ trách Động Lực Tower sẽ gọi qua số <strong className="text-amber-300 font-bold">{phone}</strong> trong 3 phút để gửi bảng giá và mặt bằng chi tiết.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-left mb-4 text-xs text-slate-300 space-y-1.5">
                <div className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Đặc quyền Quý khách nhận được:
                </div>
                <div>• Báo giá gốc trực tiếp từ CĐT từ 7x triệu/m² (ĐÃ CÓ VAT)</div>
                <div>• File kỹ thuật mặt bằng chi tiết căn hộ 2PN - 3PN</div>
                <div>• Xe riêng đưa đón tận nơi xem dự án tại 130 Hạ Đình</div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 sm:py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-red-600/30"
              >
                Hoàn Tất & Xem Bảng Căn
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              
              {/* Type Switcher: Compact 2 pills */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-950/90 rounded-xl border border-slate-800/90">
                <button
                  type="button"
                  onClick={() => setActiveType('quotation')}
                  className={`py-1.5 sm:py-2 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeType === 'quotation'
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Báo Giá & Mặt Bằng</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveType('viewing')}
                  className={`py-1.5 sm:py-2 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeType === 'viewing'
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Đặt Xe Xem Thực Tế</span>
                </button>
              </div>

              {/* Preselected Unit Alert Banner (if user came from a specific unit card) */}
              {preselectedUnit && (
                <div className="p-2.5 bg-red-950/40 border border-red-500/30 rounded-xl text-xs text-slate-200 flex items-center justify-between">
                  <span>Căn đang chọn: <strong className="text-white">{preselectedUnit.code}</strong> ({preselectedUnit.carpetArea}m²)</span>
                  <span className="font-bold text-amber-300">{preselectedUnit.pricePerSqm} tr/m² (VAT)</span>
                </div>
              )}

              {/* Full Name & Phone in 1 Row on desktop, 2 Rows on narrow screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Họ và tên <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ví dụ: Nguyễn Văn An"
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    />
                    <User className="w-4 h-4 text-amber-400/80 absolute left-3 top-2.5" />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Số điện thoại / Zalo <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ví dụ: 0912 345 678"
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    />
                    <Phone className="w-4 h-4 text-emerald-400 absolute left-3 top-2.5" />
                  </div>
                </div>
              </div>

              {/* Unit Type Quick Selection Chips */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Loại căn hộ quan tâm
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUnitType('2PN')}
                    className={`p-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center text-center ${
                      unitType === '2PN'
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300 shadow-sm'
                        : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <span className="font-black text-sm">Căn 2PN</span>
                    <span className="text-[10px] text-slate-400">65m² – 73m²</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUnitType('3PN')}
                    className={`p-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center text-center ${
                      unitType === '3PN'
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300 shadow-sm'
                        : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <span className="font-black text-sm">Căn 3PN</span>
                    <span className="text-[10px] text-slate-400">86m² – 105m²</span>
                  </button>
                </div>
              </div>

              {/* Optional Fields Toggle (keeps modal slim by default on mobile) */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowOptionalFields(!showOptionalFields)}
                  className="text-[11px] text-slate-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors py-0.5"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showOptionalFields ? 'rotate-180 text-amber-300' : ''}`} />
                  <span>{showOptionalFields ? 'Thu gọn thông tin bổ sung' : '+ Thêm Email & Ghi chú (Không bắt buộc)'}</span>
                </button>

                {showOptionalFields && (
                  <div className="mt-2 space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-400 mb-0.5">
                        Email nhận file PDF nét cao
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="example@gmail.com"
                          className="w-full bg-slate-900 border border-slate-700/70 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                        />
                        <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2" />
                      </div>
                    </div>

                    {/* Note */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-400 mb-0.5">
                        Ghi chú riêng (Hướng nhà, thời gian xem...)
                      </label>
                      <textarea
                        rows={2}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Ví dụ: Cần căn ban công Đông Nam, tư vấn qua Zalo..."
                        className="w-full bg-slate-900 border border-slate-700/70 rounded-xl p-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Security guarantee */}
              <div className="flex items-center justify-between gap-2 text-[10px] sm:text-[11px] text-slate-400 pt-0.5">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Bảo mật tuyệt đối • Trực tiếp Cen Land & CĐT</span>
                </div>
                <div className="shrink-0 opacity-90">
                  <CenLandLogo variant="symbol" size="xs" />
                </div>
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 cursor-pointer border border-red-400/40"
              >
                {isSubmitting ? (
                  <span>Đang kết nối hệ thống...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>{activeType === 'quotation' ? 'Gửi Yêu Cầu Nhận Báo Giá 7x tr/m²' : 'Xác Nhận Đặt Lịch Xe Đón'}</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>

        {/* ============================================================ */}
        {/* FIXED FOOTER: Hotline & Secondary Close Button               */}
        {/* ============================================================ */}
        <div className="bg-[#030a1c] px-4 py-2 sm:py-2.5 border-t border-slate-800 text-center text-xs text-slate-400 flex items-center justify-between sm:justify-center gap-3 shrink-0">
          <div>
            Hotline CĐT: <a href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`} className="font-bold text-amber-400 hover:underline">{PROJECT_INFO.hotline}</a>
          </div>

          <button
            onClick={onClose}
            className="sm:hidden text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
