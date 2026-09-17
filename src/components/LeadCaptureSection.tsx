import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Building2, Calendar, Clock } from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';
import { SectionKVDecoration } from './SectionKVDecoration';

export const LeadCaptureSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [unitInterest, setUnitInterest] = useState('2PN');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-[#2a050d]/80 to-[#120206]/95 text-white relative overflow-hidden">
      {/* Key Visual Sunset Skyline & Highway Trails */}
      <SectionKVDecoration variant="city-sunset" />
      {/* Dynamic Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-red-600/25 via-amber-500/20 to-rose-600/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Urgent Campaign Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-amber-400/60 text-amber-300 text-xs font-black uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(245,158,11,0.3)] backdrop-blur-md font-sans">
          <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
          <span className="font-sans font-bold whitespace-nowrap">ƯU ĐÃI CHỈ ÁP DỤNG ĐẾN 30/09/2026</span>
        </div>

        <h2 className="font-sans text-2xl sm:text-4xl font-black text-white tracking-tight mb-2 uppercase">
          ĐĂNG KÝ NHẬN THÔNG TIN & BẢNG GIÁ
        </h2>
        
        <p className="font-sans text-base sm:text-xl text-amber-200/90 font-medium mb-6 drop-shadow">
          “Nơi giá trị được dựng xây — Cơ hội sở hữu căn hộ với giá chỉ từ <span className="font-black text-amber-300">7x triệu/m²</span> (ĐÃ BAO GỒM VAT)”
        </p>

        {/* Lead Capture Box */}
        <div className="bg-[#08132d]/90 rounded-3xl p-6 sm:p-8 border-2 border-amber-400/70 shadow-[0_0_45px_rgba(245,158,11,0.25)] backdrop-blur-xl max-w-3xl mx-auto">
          {submitted ? (
            <div className="py-8 space-y-3 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Đăng Ký Thành Công!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Chuyên viên tư vấn độc quyền CEN LAND sẽ liên hệ trực tiếp gửi bảng giá chi tiết và sơ đồ căn hộ cho Quý khách trong vòng 5 phút.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 cursor-pointer"
              >
                Đăng ký thêm thông tin khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Họ và tên Quý khách *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full bg-[#060D1E]/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ví dụ: 0912 345 678"
                    className="w-full bg-[#060D1E]/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Email nhận bảng giá
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="w-full bg-[#060D1E]/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Loại căn hộ quan tâm
                  </label>
                  <select
                    value={unitInterest}
                    onChange={(e) => setUnitInterest(e.target.value)}
                    className="w-full bg-[#060D1E]/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="2PN">Căn hộ 2 Phòng ngủ (64,68 - 73,68 m²)</option>
                    <option value="3PN">Căn hộ 3 Phòng ngủ (86,5 - 111,2 m²)</option>
                  </select>
                </div>
              </div>

              {/* Gold/Yellow Action Button matching mockup */}
              <button
                type="submit"
                className="shimmer-sweep w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-98 cursor-pointer uppercase tracking-wider"
              >
                <span>ĐĂNG KÝ NGAY NHẬN BẢNG GIÁ TRỰC TIẾP CĐT</span>
                <ArrowRight className="w-4 h-4 text-slate-950 font-black" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                <span>🔒 Cam kết bảo mật thông tin</span>
                <span>•</span>
                <span>Tư vấn trực tiếp 24/7: <strong className="text-amber-400">{PROJECT_INFO.hotline}</strong></span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
