import React, { useState } from 'react';
import { 
  MapPin, 
  Tag, 
  Layers, 
  GraduationCap, 
  Building, 
  Users, 
  Crown, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  ChevronRight,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { CenLandLogo } from './CenLandLogo';
import { SectionKVDecoration } from './SectionKVDecoration';

interface EightReasonsSectionProps {
  onOpenConsultation?: () => void;
}

interface ReasonItem {
  id: number;
  number: string;
  category: 'location' | 'price' | 'amenity' | 'potential';
  categoryLabel: string;
  badge: string;
  title: string;
  summary: string;
  keyMetric: string;
  fullDesc: string;
  benefits: string[];
  icon: React.ElementType;
}

export const EightReasonsSection: React.FC<EightReasonsSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedReason, setSelectedReason] = useState<ReasonItem | null>(null);

  const reasons: ReasonItem[] = [
    {
      id: 1,
      number: '01',
      category: 'location',
      categoryLabel: 'Vị trí & Kết nối',
      badge: 'Tọa độ vàng',
      title: 'Vị trí tâm điểm Quận Thanh Xuân',
      summary: 'Mặt tiền 130 Hạ Đình, kết nối Nguyễn Trãi – Vành Đai 3, cách ga Metro Thượng Đình chỉ 800m.',
      keyMetric: 'Metro 800m',
      fullDesc: 'Tọa lạc tại số 130 Hạ Đình, kết nối trực tiếp trục Nguyễn Trãi, Vành Đai 3, Khuất Duy Tiến và ga Metro Thượng Đình (800m). Vị trí đắc địa vừa tận hưởng không gian yên tĩnh ven hồ Hạ Đình, vừa tiếp cận mọi tiện ích nội đô trong vài phút di chuyển.',
      benefits: [
        'Cách ga Metro Thượng Đình chỉ 800m di chuyển',
        'Kết nối thông suốt Nguyễn Trãi - Vành Đai 3',
        'Kề cận hồ Hạ Đình thoáng mát, phong thủy vượng khí'
      ],
      icon: MapPin,
    },
    {
      id: 2,
      number: '02',
      category: 'price',
      categoryLabel: 'Giá & Chính sách',
      badge: 'Đột phá thị trường',
      title: 'Mức giá tốt nhất khu vực (Từ 7x tr/m²)',
      summary: 'Đơn giá từ 7x triệu/m² đã bao gồm VAT, cạnh tranh hơn các dự án cùng trục đường 20 - 30%.',
      keyMetric: 'Từ 7x tr/m² có VAT',
      fullDesc: 'Đơn giá niêm yết chỉ từ 7x triệu/m² ĐÃ BAO GỒM VAT, mức giá cạnh tranh áp đảo toàn quận Thanh Xuân (trong khi các dự án cùng trục đường đang giao dịch 90 – 110 triệu/m²). Đây là cơ hội hiếm hoi sở hữu căn hộ nội đô với biên độ an toàn vốn cao và thanh khoản vượt trội.',
      benefits: [
        'Đã bao gồm 100% thuế VAT theo quy chuẩn',
        'Thấp hơn mặt bằng chung khu vực từ 20 - 30%',
        'Hỗ trợ vay 70% với lãi suất ưu đãi CĐT'
      ],
      icon: Tag,
    },
    {
      id: 3,
      number: '03',
      category: 'price',
      categoryLabel: 'Giá & Chính sách',
      badge: 'Tiêu chuẩn linh hoạt',
      title: 'Bàn giao Thô hoặc Hoàn thiện trọn gói',
      summary: 'Linh hoạt nhận bàn giao thô tự do thiết kế hoặc nhận hoàn thiện chìa khóa trao tay theo nhu cầu.',
      keyMetric: 'Thô / Hoàn thiện',
      fullDesc: 'Dự án mang đến giải pháp bàn giao linh hoạt: gia chủ có thể chọn gói Bàn Giao Thô để tự do thiết kế công năng và cá nhân hóa gu nội thất độc bản, hoặc lựa chọn gói Hoàn Thiện Trọn Gói tiêu chuẩn cao cấp để dọn về ở ngay mà không tốn công sức thi công.',
      benefits: [
        'Tùy chọn bàn giao thô sáng tạo theo phong cách riêng',
        'Tùy chọn hoàn thiện trọn gói tiêu chuẩn cao cấp',
        'Tiết kiệm tối đa chi phí cải tạo không cần thiết'
      ],
      icon: Layers,
    },
    {
      id: 4,
      number: '04',
      category: 'location',
      categoryLabel: 'Vị trí & Kết nối',
      badge: 'Môi trường trí tuệ',
      title: 'Bán kính vàng hệ sinh thái giáo dục',
      summary: 'Bán kính 1-2km hội tụ các đại học danh tiếng (ĐH Hà Nội, KHTN, KHXH&NV, Kiến Trúc) và trường điểm.',
      keyMetric: 'Trường điểm 1-2km',
      fullDesc: 'Trong bán kính 1 - 2km hội tụ các trường đại học danh tiếng: ĐH Khoa học Tự nhiên, ĐH Khoa học Xã hội & Nhân văn, ĐH Hà Nội, ĐH Kiến Trúc, Học viện An Ninh... cùng hệ thống trường liên cấp chuẩn quốc gia, ươm mầm tương lai toàn diện cho con trẻ.',
      benefits: [
        'Gần cụm 5+ trường đại học hàng đầu thủ đô',
        'Hệ thống trường tiểu học, THCS điểm quận Thanh Xuân',
        'Thuận tiện đưa đón con nhỏ, môi trường học tập lý tưởng'
      ],
      icon: GraduationCap,
    },
    {
      id: 5,
      number: '05',
      category: 'amenity',
      categoryLabel: 'Quy mô & Tiện ích',
      badge: 'Đặc quyền hiếm có',
      title: '3 Tầng hầm đỗ xe ô tô thông minh',
      summary: 'Giải quyết triệt để bài toán đỗ xe nội đô với 3 tầng hầm rộng rãi, bảo đảm chỗ đỗ ô tô cho cư dân.',
      keyMetric: '3 Tầng hầm ô tô',
      fullDesc: 'Tòa tháp 24 tầng sở hữu 3 tầng hầm đỗ xe rộng rãi, cam kết đảm bảo chỗ đỗ ô tô cho cư dân – điều vô cùng khan hiếm tại các chung cư trung tâm nội đô. Hệ thống thang máy tốc độ cao và phòng cháy chữa cháy kiểm định nghiêm ngặt.',
      benefits: [
        'Cam kết chỗ đỗ xe ô tô và xe máy tại 3 tầng hầm',
        'Hệ thống kiểm soát xe thông minh, an ninh 24/7',
        'Tiêu chuẩn PCCC nghiệm thu chuẩn quy chuẩn mới'
      ],
      icon: Building,
    },
    {
      id: 6,
      number: '06',
      category: 'amenity',
      categoryLabel: 'Quy mô & Tiện ích',
      badge: 'Đẳng cấp giới hạn',
      title: 'Chỉ 156 căn hộ – Mật độ vàng siêu thoáng',
      summary: 'Mật độ chỉ ~7-8 căn/sàn, không gian yên tĩnh tuyệt đối, không lo tắc thang máy giờ cao điểm.',
      keyMetric: '~7-8 Căn/sàn',
      fullDesc: 'Toàn dự án chỉ giới hạn 156 căn hộ cao cấp, mật độ sàn chỉ từ 7 - 8 căn/tầng. Đảm bảo cuộc sống biệt lập, riêng tư tuyệt đối, dịch vụ vận hành chăm sóc chu đáo, loại bỏ hoàn toàn cảnh chen chúc chờ thang máy vào giờ cao điểm.',
      benefits: [
        'Số lượng giới hạn 156 căn tạo độ khan hiếm cao',
        'Mật độ ~7-8 căn/sàn cực kỳ yên tĩnh, riêng tư',
        'Tỷ lệ thang máy phục vụ lý tưởng, di chuyển êm ái'
      ],
      icon: Users,
    },
    {
      id: 7,
      number: '07',
      category: 'potential',
      categoryLabel: 'Cộng đồng & Pháp lý',
      badge: 'Cộng đồng tinh hoa',
      title: 'Cộng đồng văn minh & Sổ hồng lâu dài',
      summary: 'Nơi quy tụ đội ngũ trí thức, giảng viên, chuyên gia cao cấp; pháp lý hoàn chỉnh với sổ hồng lâu dài.',
      keyMetric: 'Sổ hồng lâu dài',
      fullDesc: 'Nơi an cư lý tưởng của các giảng viên, chuyên gia cao cấp, bác sĩ và doanh nhân thành đạt. Không gian sống văn minh, thân thiện cùng hệ thống an ninh đa lớp 24/7 và pháp lý chuẩn chỉnh sổ hồng lâu dài mang lại sự an tâm tuyệt đối.',
      benefits: [
        'Pháp lý hoàn chỉnh, cấp sổ hồng lâu dài',
        'Cộng đồng cư dân dân trí cao, nếp sống văn minh',
        'An ninh đa lớp, camera giám sát toàn khu 24/7'
      ],
      icon: Crown,
    },
    {
      id: 8,
      number: '08',
      category: 'potential',
      categoryLabel: 'Cộng đồng & Pháp lý',
      badge: 'Đòn bẩy tương lai',
      title: 'Tiềm năng tăng giá & Dòng tiền bền vững',
      summary: 'Đón trọn sóng quy hoạch mở rộng đường Hạ Đình và tuyến nối Vành Đai 2.5, giá trị gia tăng vượt trội.',
      keyMetric: 'Hưởng lợi VĐ 2.5',
      fullDesc: 'Hưởng trọn lực đẩy từ quy hoạch mở rộng trục Hạ Đình thông sang Nguyễn Trãi và tuyến kết nối Vành Đai 2.5. Cộng hưởng cùng sự khan hiếm quỹ đất ở trung tâm quận Thanh Xuân, bảo đảm biên độ sinh lời và hiệu suất cho thuê căn hộ luôn đạt mức cao.',
      benefits: [
        'Quy hoạch mở rộng đường Hạ Đình kết nối trực diện',
        'Cộng hưởng giá trị hạ tầng từ đường nối Vành Đai 2.5',
        'Thanh khoản cao, dễ dàng cho thuê với tỷ suất sinh lời tốt'
      ],
      icon: TrendingUp,
    },
  ];

  const categories = [
    { id: 'all', label: 'Tất cả 8 lý do', count: 8 },
    { id: 'location', label: 'Vị trí & Kết nối', count: 2 },
    { id: 'price', label: 'Giá & Bàn giao', count: 2 },
    { id: 'amenity', label: 'Quy mô & Tiện ích', count: 2 },
    { id: 'potential', label: 'Cộng đồng & Pháp lý', count: 2 },
  ];

  const filteredReasons = activeCategory === 'all' 
    ? reasons 
    : reasons.filter(r => r.category === activeCategory);

  return (
    <section className="py-10 sm:py-14 bg-transparent text-white relative overflow-hidden">
      {/* Key Visual Left-Blue Decoration */}
      <SectionKVDecoration variant="left-blue" />

      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-sky-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[200px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Open, Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold tracking-widest uppercase mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GIÁ TRỊ CỐT LÕI • AN CƯ & ĐẦU TƯ</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
              8 LÝ DO CHỌN <span className="text-amber-400">ĐỘNG LỰC TOWER</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300/90 mt-1 max-w-2xl font-normal">
              Những lợi thế then chốt tại 130 Hạ Đình – Cô đọng, minh bạch và tối ưu giá trị an cư lâu dài.
            </p>
          </div>

          {/* Minimalist, Clean Text Filter Tabs (No heavy boxed buttons) */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-1 scrollbar-none shrink-0 text-xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`pb-1.5 whitespace-nowrap transition-all cursor-pointer font-semibold ${
                    isActive
                      ? 'text-amber-400 border-b-2 border-amber-400'
                      : 'text-slate-400 hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Completely Unboxed Editorial Grid: Pure typography, icons, and text on background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 sm:gap-y-10">
          {filteredReasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedReason(item)}
                className="group border-t border-slate-800/80 pt-4 flex flex-col justify-between cursor-pointer transition-all duration-300"
              >
                <div>
                  {/* Big Stylized Number + Key Metric in pure open typography */}
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-amber-400/40 group-hover:text-amber-400 transition-colors tracking-tighter">
                      {item.number}
                    </span>
                    <span className="text-[11px] font-bold text-sky-400/90 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-sky-400 inline-block" />
                      {item.keyMetric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Summary text */}
                  <p className="text-xs text-slate-300/85 leading-relaxed mt-2 font-normal line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                {/* Open, subtle interactive link */}
                <div className="mt-3.5 flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-amber-400 font-medium transition-colors">
                  <span>Khám phá chi tiết</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean, Open Advisory Banner (Unboxed, single divider line) */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <CenLandLogo variant="symbol" size="xs" className="hidden sm:inline-flex shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Cần bản phân tích giỏ hàng độc quyền & lộ trình quy hoạch Hạ Đình?
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Chuyên viên Cen Land đồng hành tư vấn pháp lý, căn tầng đẹp và tham quan căn hộ mẫu 24/7.
              </p>
            </div>
          </div>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-black tracking-wide uppercase inline-flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-105 shrink-0 cursor-pointer"
            >
              <span>NHẬN BÁO GIÁ & TƯ VẤN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* ============================================================ */}
      {/* QUICK DETAIL MODAL: Clean, friendly popup when clicking a reason */}
      {/* ============================================================ */}
      {selectedReason && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedReason(null)}
        >
          <div 
            className="w-full max-w-lg rounded-3xl bg-[#061436] border-2 border-amber-400/40 shadow-2xl p-5 sm:p-6 text-white relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedReason(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Đóng (Esc)"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4 pr-10">
              <span className="w-10 h-10 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono text-base font-black flex items-center justify-center shrink-0">
                {selectedReason.number}
              </span>
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  {selectedReason.badge} • {selectedReason.categoryLabel}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 leading-snug">
                  {selectedReason.title}
                </h3>
              </div>
            </div>

            {/* Key Metric Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Chỉ số cốt lõi: {selectedReason.keyMetric}</span>
            </div>

            {/* Full Description */}
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 bg-[#030c22]/80 p-3.5 rounded-2xl border border-slate-800">
              {selectedReason.fullDesc}
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-2 mb-5">
              <span className="text-[11px] font-bold text-slate-400 uppercase block tracking-wider">
                Điểm nổi bật cần lưu ý:
              </span>
              {selectedReason.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setSelectedReason(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-colors cursor-pointer"
              >
                Đóng
              </button>

              {onOpenConsultation && (
                <button
                  onClick={() => {
                    setSelectedReason(null);
                    onOpenConsultation();
                  }}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-black inline-flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <span>TƯ VẤN VỀ ĐIỂM NÀY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
