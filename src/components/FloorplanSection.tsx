import React, { useState, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight, 
  Sparkles, 
  SlidersHorizontal,
  Phone,
  Layers,
  Compass,
  Eye,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Maximize2,
  X,
  CheckCircle2
} from 'lucide-react';
import { ImageFrameSlot } from './ImageFrameSlot';
import { PROJECT_INFO } from '../data/mockData';
import { SectionKVDecoration } from './SectionKVDecoration';

interface FloorplanSectionProps {
  onOpenConsultation: () => void;
}

interface UnitFloorplan {
  id: string;
  code: string;
  unitNumber: number;
  slotId: string;
  floorLevelSlotId: string;
  floorLevelImageUrl: string;
  name: string;
  shortLabel: string;
  areaFloor7_15: string;
  areaFloor16_21: string;
  floorRange1Label?: string;
  floorRange2Label?: string;
  carpetArea: string;
  builtUpArea: string;
  direction: string;
  view: string;
  desc: string;
  pinPosition: { x: string; y: string };
  rooms: string;
  bathrooms: string;
  logia: string;
  driveUrl: string;
  imageUrl: string;
}

const UNITS_2PN: UnitFloorplan[] = [
  {
    id: '2pn-1',
    code: 'CĂN 01',
    unitNumber: 1,
    slotId: 'floorplan_unit_01',
    floorLevelSlotId: 'floorplan_level_unit_01',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_01.png',
    name: 'CĂN 01 - 2 NGỦ',
    shortLabel: 'Căn 01 • 70,50 m²',
    areaFloor7_15: '70,50 m²',
    areaFloor16_21: '70,67 m²',
    carpetArea: '70,50 - 70,67 m²',
    builtUpArea: '76,50 m²',
    direction: 'Nam',
    view: 'Hồ Hạ Đình & công viên xanh mát',
    desc: 'Căn 01 sở hữu ban công chính Nam đón gió tự nhiên mát lành quanh năm, tầm nhìn trực diện Hồ Hạ Đình. Bố trí 2 phòng ngủ riêng biệt vuông vắn, 2 phòng vệ sinh khép kín tiện nghi.',
    pinPosition: { x: '72%', y: '78%' },
    rooms: '2 Phòng ngủ',
    bathrooms: '2 WC',
    logia: '1 Logia',
    driveUrl: 'https://drive.google.com/file/d/1BYIY_sd638bBmcqigZLaqdjc6lMpbnNv/view?usp=sharing',
    imageUrl: '/assets/units/can_01_2ngu.webp'
  },
  {
    id: '2pn-2',
    code: 'CĂN 02',
    unitNumber: 2,
    slotId: 'floorplan_unit_02',
    floorLevelSlotId: 'floorplan_level_unit_02',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_02.png',
    name: 'CĂN 02 - 2 NGỦ',
    shortLabel: 'Căn 02 • 66,48 m²',
    areaFloor7_15: '66,48 m²',
    areaFloor16_21: '66,92 m²',
    carpetArea: '66,48 - 66,92 m²',
    builtUpArea: '72,30 m²',
    direction: 'Nam',
    view: 'Hồ Hạ Đình & quảng trường nội khu',
    desc: 'Căn 02 có hướng ban công Nam nhìn thẳng ra Hồ Hạ Đình thoáng đãng. Bố cục vuông vắn, tối ưu hóa công năng sử dụng, là phương án an cư trung tâm Thanh Xuân tiết kiệm chi phí nhất.',
    pinPosition: { x: '35%', y: '78%' },
    rooms: '2 Phòng ngủ',
    bathrooms: '2 WC',
    logia: '1 Logia',
    driveUrl: 'https://drive.google.com/file/d/1Oe2wiHHOGeFvLN9DQqp9qeZK_ZE4fUvZ/view?usp=sharing',
    imageUrl: '/assets/units/can_02_2ngu.webp'
  },
  {
    id: '2pn-4',
    code: 'CĂN 04',
    unitNumber: 4,
    slotId: 'floorplan_unit_04',
    floorLevelSlotId: 'floorplan_level_unit_04',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_04.png',
    name: 'CĂN 04 - 2 NGỦ',
    shortLabel: 'Căn 04 • 72,96 m²',
    areaFloor7_15: '72,96 m²',
    areaFloor16_21: '73,05 m²',
    carpetArea: '72,96 - 73,05 m²',
    builtUpArea: '79,20 m²',
    direction: 'Tây Bắc',
    view: 'Metro Nguyễn Trãi & đô thị sôi động',
    desc: 'Căn 04 sở hữu 2 ban công/logia riêng biệt, view tuyến đường sắt đô thị Metro Nguyễn Trãi hiện đại. Phòng khách và bếp liên thông thoáng rộng, 2 phòng ngủ đều tràn ngập ánh sáng.',
    pinPosition: { x: '32%', y: '25%' },
    rooms: '2 Phòng ngủ',
    bathrooms: '2 WC',
    logia: '2 Logia',
    driveUrl: 'https://drive.google.com/file/d/1y8uducI4r2QMzWKBkuAmeNnP4A8NFpXt/view?usp=sharing',
    imageUrl: '/assets/units/can_04_2ngu.webp'
  },
  {
    id: '2pn-5',
    code: 'CĂN 05',
    unitNumber: 5,
    slotId: 'floorplan_unit_05',
    floorLevelSlotId: 'floorplan_level_unit_05',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_05.png',
    name: 'CĂN 05 - 2 NGỦ',
    shortLabel: 'Căn 05 • 72,96 m²',
    areaFloor7_15: '72,96 m²',
    areaFloor16_21: '73,05 m²',
    carpetArea: '72,96 - 73,05 m²',
    builtUpArea: '79,20 m²',
    direction: 'Tây Bắc',
    view: 'Metro Nguyễn Trãi & Royal City',
    desc: 'Căn 05 thiết kế đối xứng hài hòa với Căn 04, sở hữu 2 logia đón gió đối lưu. Không gian phòng khách rộng mở liên thông bàn ăn, tầm nhìn khoáng đạt về trục đường Nguyễn Trãi sầm uất.',
    pinPosition: { x: '65%', y: '25%' },
    rooms: '2 Phòng ngủ',
    bathrooms: '2 WC',
    logia: '2 Logia',
    driveUrl: 'https://drive.google.com/file/d/1GVO_2jxVbLlPVEq64oHVpfuS0Lgl79tA/view?usp=sharing',
    imageUrl: '/assets/units/can_05_2ngu.webp'
  },
  {
    id: '2pn-7',
    code: 'CĂN 07',
    unitNumber: 7,
    slotId: 'floorplan_unit_07',
    floorLevelSlotId: 'floorplan_level_unit_07',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_07.png',
    name: 'CĂN 07 - 2 NGỦ',
    shortLabel: 'Căn 07 • 49,67 m²',
    areaFloor7_15: '49,67 m²',
    areaFloor16_21: '50,20 m²',
    carpetArea: '49,67 - 50,20 m²',
    builtUpArea: '54,20 m²',
    direction: 'Đông',
    view: 'Khương Đình & đón bình minh rạng rỡ',
    desc: 'Căn 07 là căn hộ 2 phòng ngủ tối ưu diện tích và có tổng giá tốt nhất toàn dự án (chỉ 3.6x tỷ đã có VAT). Ban công hướng Đông đón ánh bình minh rạng rỡ, hoàn toàn không bị nắng gắt ban chiều.',
    pinPosition: { x: '85%', y: '40%' },
    rooms: '2 Phòng ngủ',
    bathrooms: '1 WC',
    logia: '1 Logia',
    driveUrl: 'https://drive.google.com/file/d/11gcFm9UZg-vWCqlqic_-aAU5ADdZd0ih/view?usp=sharing',
    imageUrl: '/assets/units/can_07_2ngu.webp'
  },
  {
    id: '2pn-8',
    code: 'CĂN 08',
    unitNumber: 8,
    slotId: 'floorplan_unit_08',
    floorLevelSlotId: 'floorplan_level_unit_08',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_08.png',
    name: 'CĂN 08 - 2 NGỦ',
    shortLabel: 'Căn 08 • 72,76 m²',
    areaFloor7_15: '72,76 m²',
    areaFloor16_21: '72,76 m²',
    carpetArea: '72,76 m²',
    builtUpArea: '79,00 m²',
    direction: 'Đông',
    view: 'Khương Đình & công viên thoáng đãng',
    desc: 'Căn 08 sở hữu hình khối kiến trúc kim cương độc đáo, 2 logia hướng Đông ngắm nhìn toàn cảnh Khương Đình thanh bình. Không gian vuông vắn, 2 phòng ngủ riêng tư tuyệt đối.',
    pinPosition: { x: '85%', y: '65%' },
    rooms: '2 Phòng ngủ',
    bathrooms: '2 WC',
    logia: '2 Logia',
    driveUrl: 'https://drive.google.com/file/d/1VQcJKVZbW8t_Ah8bQV_FSBZNhcWfxMJ-/view?usp=sharing',
    imageUrl: '/assets/units/can_08_2ngu.webp'
  },
];

const UNITS_3PN: UnitFloorplan[] = [
  {
    id: '3pn-3',
    code: 'CĂN 03',
    unitNumber: 3,
    slotId: 'floorplan_unit_03',
    floorLevelSlotId: 'floorplan_level_unit_03',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_03.png',
    name: 'CĂN 03 - 3 NGỦ',
    shortLabel: 'Căn 03 • 91,69 m²',
    areaFloor7_15: '91,69 m²',
    areaFloor16_21: '91,97 m²',
    floorRange1Label: 'Tầng 7 - 15',
    floorRange2Label: 'Tầng 16 - 21',
    carpetArea: '91,69 - 91,97 m²',
    builtUpArea: '99,50 m²',
    direction: 'Tây Nam & Tây Bắc',
    view: 'Ngã tư Khuất Duy Tiến & Tuyến Metro',
    desc: 'Căn 03 là căn góc 3 phòng ngủ sở hữu 2 mặt thoáng hướng Tây Nam & Tây Bắc, view trọn vẹn ngã tư Khuất Duy Tiến và tuyến đường sắt đô thị Metro. Thiết kế vuông vắn gồm 3 phòng ngủ, 2 WC và 3 logia đón gió thông thoáng.',
    pinPosition: { x: '22%', y: '48%' },
    rooms: '3 Phòng ngủ (Căn góc)',
    bathrooms: '2 WC',
    logia: '3 Logia',
    driveUrl: 'https://drive.google.com/file/d/1GynkwrasagYMLeIeB07njeOqjN2tI0_x/view?usp=sharing',
    imageUrl: '/assets/units/can_03_3ngu.webp'
  },
  {
    id: '3pn-6',
    code: 'CĂN 06',
    unitNumber: 6,
    slotId: 'floorplan_unit_06',
    floorLevelSlotId: 'floorplan_level_unit_06',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_06.png',
    name: 'CĂN 06 - 3 NGỦ',
    shortLabel: 'Căn 06 • 93,96 m²',
    areaFloor7_15: '93,96 m²',
    areaFloor16_21: '93,87 m²',
    floorRange1Label: 'Tầng 7 - 15',
    floorRange2Label: 'Tầng 16 - 23',
    carpetArea: '93,87 - 93,96 m²',
    builtUpArea: '101,80 m²',
    direction: 'Tây Bắc & Đông Bắc',
    view: 'Metro Nguyễn Trãi, Ngã Tư Sở',
    desc: 'Căn 06 sở hữu vị trí góc 2 mặt thoáng Tây Bắc & Đông Bắc, tầm nhìn panorama hướng tuyến Metro Nguyễn Trãi và Ngã Tư Sở sôi động. Cơ cấu không gian 3 phòng ngủ thông minh, 2 WC khép kín cùng 3 logia đối lưu không khí trong lành.',
    pinPosition: { x: '48%', y: '18%' },
    rooms: '3 Phòng ngủ (Căn góc)',
    bathrooms: '2 WC',
    logia: '3 Logia',
    driveUrl: 'https://drive.google.com/file/d/1P3FqT460XabwPZg7xeIxujC4DOitSk6Q/view?usp=sharing',
    imageUrl: '/assets/units/can_06_3ngu.webp'
  },
  {
    id: '3pn-9',
    code: 'CĂN 09',
    unitNumber: 9,
    slotId: 'floorplan_unit_09',
    floorLevelSlotId: 'floorplan_level_unit_09',
    floorLevelImageUrl: '/assets/floorplates/floor_unit_09.png',
    name: 'CĂN 09 - 3 NGỦ',
    shortLabel: 'Căn 09 • 96,98 m²',
    areaFloor7_15: '96,98 m²',
    areaFloor16_21: '97,38 m²',
    floorRange1Label: 'Tầng 7 - 15',
    floorRange2Label: 'Tầng 16 - 21',
    carpetArea: '96,98 - 97,38 m²',
    builtUpArea: '105,20 m²',
    direction: 'Đông Nam',
    view: 'Khương Đình, Hồ Hạ Đình',
    desc: 'Căn 09 là căn 3 phòng ngủ hoa hậu với ban công chính Đông Nam đón trọn vẹn luồng gió mát và vượng khí quanh năm. Tầm nhìn thoáng đãng về Khương Đình và mặt nước Hồ Hạ Đình, bố trí 3 phòng ngủ lớn, 2 WC và 2 logia rộng rãi.',
    pinPosition: { x: '78%', y: '68%' },
    rooms: '3 Phòng ngủ (Hoa hậu)',
    bathrooms: '2 WC',
    logia: '2 Logia',
    driveUrl: 'https://drive.google.com/file/d/1xEjMF-LWdNsiu_KeKsqkyN3v_lmagCoS/view?usp=sharing',
    imageUrl: '/assets/units/can_09_3ngu.webp'
  },
];

export const FloorplanSection: React.FC<FloorplanSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'2PN' | '3PN'>('2PN');
  const [currentIndex2PN, setCurrentIndex2PN] = useState<number>(0);
  const [currentIndex3PN, setCurrentIndex3PN] = useState<number>(0);
  const [mobileVisualMode, setMobileVisualMode] = useState<'blueprint' | 'level'>('blueprint');
  const [showMobileDesc, setShowMobileDesc] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxMode, setLightboxMode] = useState<'blueprint' | 'level'>('blueprint');

  // Touch swipe support
  const touchStartXRef = useRef<number | null>(null);

  const unitsList = activeTab === '2PN' ? UNITS_2PN : UNITS_3PN;
  const currentIndex = activeTab === '2PN' ? currentIndex2PN : currentIndex3PN;
  const setCurrentIndex = activeTab === '2PN' ? setCurrentIndex2PN : setCurrentIndex3PN;

  const currentUnit = unitsList[currentIndex] || unitsList[0];
  const totalUnits = unitsList.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalUnits - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalUnits - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section id="apartments" className="py-8 sm:py-12 bg-transparent text-white overflow-hidden relative">
      {/* Key Visual Energy Swath & Dual Halftones */}
      <SectionKVDecoration variant="dual-corners" />

      {/* Lightbox Modal for HD Cutaway Floorplan or Level Floorplate */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#061536] border-2 border-sky-500/50 rounded-2xl p-4 shadow-2xl flex flex-col max-h-[95vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-sky-500/30">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-red-600 text-white font-black text-xs">
                  {currentUnit.code}
                </span>
                <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white">
                  {lightboxMode === 'level'
                    ? `Sơ Đồ Mặt Bằng Tầng Định Vị ${currentUnit.code}`
                    : `${currentUnit.name} - Phối Cảnh Cắt Lớp 3D`}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-lg bg-slate-800/90 p-0.5 border border-sky-400/30 text-xs">
                  <button
                    onClick={() => setLightboxMode('blueprint')}
                    className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
                      lightboxMode === 'blueprint' 
                        ? 'bg-sky-600 text-white shadow' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Phối cảnh 3D
                  </button>
                  <button
                    onClick={() => setLightboxMode('level')}
                    className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer ${
                      lightboxMode === 'level' 
                        ? 'bg-amber-600 text-white shadow' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Mặt bằng tầng
                  </button>
                </div>
                {lightboxMode === 'blueprint' && (
                  <a
                    href={currentUnit.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex px-3 py-1.5 rounded-lg bg-sky-600/30 hover:bg-sky-600/50 text-sky-200 border border-sky-400/40 text-xs font-bold items-center gap-1.5 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Ảnh gốc Drive</span>
                  </a>
                )}
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-red-600 text-slate-300 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-0 flex items-center justify-center overflow-auto p-2 bg-[#020b1e] rounded-xl relative">
              <img
                src={lightboxMode === 'level' ? currentUnit.floorLevelImageUrl : currentUnit.imageUrl}
                alt={lightboxMode === 'level' ? `Mặt bằng tầng định vị ${currentUnit.code}` : `${currentUnit.name} Phối cảnh 3D`}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>

            <div className="pt-3 mt-2 border-t border-sky-500/20 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <span>Tầng 7-15: <strong className="text-amber-300">{currentUnit.areaFloor7_15}</strong></span>
                <span>Tầng 16-21: <strong className="text-amber-300">{currentUnit.areaFloor16_21}</strong></span>
                <span>Hướng: <strong className="text-amber-300">{currentUnit.direction}</strong></span>
                <span>View: <strong className="text-slate-100">{currentUnit.view}</strong></span>
              </div>
              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  onOpenConsultation();
                }}
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold hover:shadow-lg transition-all cursor-pointer"
              >
                Nhận tư vấn căn {currentUnit.code}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black tracking-[0.25em] text-amber-400 uppercase block">
                MẶT BẰNG CĂN HỘ
              </span>
              <span className="px-2 py-0.5 rounded bg-red-600/80 text-[10px] font-black text-white uppercase tracking-wider">
                BÀN GIAO THÔ
              </span>
            </div>
            <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              THIẾT KẾ <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">TỐI ƯU</span>
            </h2>
          </div>

          {/* Unit selection tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#061536]/90 border border-sky-500/30 backdrop-blur-sm self-stretch sm:self-auto justify-between sm:justify-start">
            <button
              onClick={() => {
                setActiveTab('2PN');
              }}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === '2PN'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30 border border-red-400/40 scale-102 sm:scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>6 CĂN ĐIỂN HÌNH (2PN)</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/30 font-extrabold">6 căn</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('3PN');
              }}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === '3PN'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30 border border-red-400/40 scale-102 sm:scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>GỢI Ý 3PN / GHÉP THÔNG</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/30 font-extrabold">3 mẫu</span>
            </button>
          </div>
        </div>

        {/* Interactive Unit Carousel Pill Bar ("Thanh Lướt Chọn Nhanh Các Căn") */}
        <div className="mb-4 sm:mb-6 flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#061438]/90 border border-sky-500/25 backdrop-blur-md overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1 px-1.5 sm:px-2 text-[10px] font-black uppercase text-amber-400 shrink-0">
            <SlidersHorizontal className="w-3 h-3" />
            <span className="hidden xs:inline sm:inline">Lướt chọn căn:</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-1 overflow-x-auto py-0.5 scrollbar-none">
            {unitsList.map((unit, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={unit.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-102 border border-amber-300'
                      : 'bg-[#091b45] text-slate-300 hover:text-white hover:bg-[#0d2763] border border-sky-500/20'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-red-600 animate-pulse' : 'bg-slate-500'}`} />
                  <span>{unit.shortLabel}</span>
                  <span className={`text-[10px] px-1 rounded ${isSelected ? 'bg-black/20 text-slate-950' : 'text-slate-400'}`}>
                    {unit.code}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Prev / Next Arrows for Scroller */}
          <div className="flex items-center gap-1 shrink-0 px-0.5 sm:px-1">
            <button
              onClick={handlePrev}
              title="Căn trước"
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center border border-slate-700 hover:border-amber-400 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono font-bold text-amber-300 px-1">
              {currentIndex + 1}/{totalUnits}
            </span>
            <button
              onClick={handleNext}
              title="Căn tiếp theo"
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center border border-slate-700 hover:border-amber-400 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET UNIFIED VIEW (< 1024px) - ZERO-SCROLL ERGONOMIC DESIGN     */}
        {/* Everything fits within one viewport. Specs, blueprints & actions together */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          <div className="rounded-2xl bg-[#061536]/95 border-2 border-sky-500/35 shadow-2xl p-3 sm:p-4 backdrop-blur-md relative overflow-hidden">
            
            {/* Card Top Title & Visual Mode Switcher */}
            <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-sky-500/20">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] sm:text-[11px] font-black tracking-wider shrink-0 shadow-sm">
                  {currentUnit.code}
                </span>
                <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-white truncate">
                  {currentUnit.name}
                </h3>
              </div>

              {/* View Mode Toggle: Blueprint vs Floorplate */}
              <div className="flex items-center p-0.5 rounded-lg bg-black/60 border border-sky-500/30 shrink-0">
                <button
                  onClick={() => setMobileVisualMode('blueprint')}
                  className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    mobileVisualMode === 'blueprint'
                      ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>Bản vẽ</span>
                </button>
                <button
                  onClick={() => setMobileVisualMode('level')}
                  className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    mobileVisualMode === 'level'
                      ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Compass className="w-3 h-3" />
                  <span>Vị trí tầng</span>
                </button>
              </div>
            </div>

            {/* Instant Key Specs 4-Cell Grid (Synchronized & Always Visible without scrolling) */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 text-center">
              <div className="p-1 sm:p-2 rounded-xl bg-gradient-to-b from-amber-500/20 to-amber-500/5 border border-amber-400/40">
                <span className="text-[9px] uppercase font-bold text-amber-200/80 block">Thông thủy</span>
                <span className="text-xs sm:text-sm font-black text-amber-300 block leading-tight">{currentUnit.carpetArea}</span>
              </div>
              <div className="p-1 sm:p-2 rounded-xl bg-slate-900/80 border border-sky-500/25">
                <span className="text-[9px] uppercase font-bold text-slate-400 block">Tim tường</span>
                <span className="text-xs sm:text-sm font-bold text-slate-200 block leading-tight">{currentUnit.builtUpArea}</span>
              </div>
              <div className="p-1 sm:p-2 rounded-xl bg-slate-900/80 border border-sky-500/25">
                <span className="text-[9px] uppercase font-bold text-slate-400 block">Hướng</span>
                <span className="text-xs sm:text-sm font-bold text-amber-200 block leading-tight truncate">{currentUnit.direction}</span>
              </div>
              <div className="p-1 sm:p-2 rounded-xl bg-slate-900/80 border border-sky-500/25">
                <span className="text-[9px] uppercase font-bold text-slate-400 block">Bố trí</span>
                <span className="text-xs sm:text-sm font-bold text-sky-200 block leading-tight truncate">{currentUnit.rooms}</span>
              </div>
            </div>

            {/* Interactive Visual Frame with Height Constraint for Mobile */}
            <div 
              className="relative rounded-xl overflow-hidden bg-slate-950 border border-sky-500/30 shadow-inner group select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {mobileVisualMode === 'blueprint' ? (
                <div 
                  className="relative w-full aspect-[16/10] max-h-[260px] sm:max-h-[340px] md:max-h-[400px] flex items-center justify-center bg-black/40 cursor-pointer"
                  onClick={() => {
                    setLightboxMode('blueprint');
                    setIsLightboxOpen(true);
                  }}
                >
                  <ImageFrameSlot
                    slotId={currentUnit.slotId}
                    defaultUrl={currentUnit.imageUrl}
                    label={currentUnit.name}
                    aspectRatio="aspect-[16/10]"
                    alt={currentUnit.name}
                    className="w-full h-full"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/70 border border-white/20 text-[10px] text-amber-300 flex items-center gap-1 z-20">
                    <Maximize2 className="w-3 h-3" />
                    <span>Phóng to</span>
                  </div>
                </div>
              ) : (
                <div 
                  className="relative w-full aspect-square max-h-[320px] sm:max-h-[360px] flex items-center justify-center bg-[#020b1e] cursor-pointer"
                  onClick={() => {
                    setLightboxMode('level');
                    setIsLightboxOpen(true);
                  }}
                >
                  <ImageFrameSlot
                    slotId={currentUnit.floorLevelSlotId}
                    defaultUrl={currentUnit.floorLevelImageUrl}
                    fit="contain"
                    label={`Mặt Bằng Tầng - ${currentUnit.code}`}
                    aspectRatio="aspect-square"
                    alt={`Mặt bằng tầng định vị ${currentUnit.code}`}
                    className="w-full h-full p-2"
                  />
                  {/* Animated Locator Pin */}
                  <div 
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500"
                    style={{ left: currentUnit.pinPosition.x, top: currentUnit.pinPosition.y }}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-6 h-6 rounded-full bg-red-500/60 animate-ping" />
                      <span className="absolute w-4 h-4 rounded-full bg-amber-400/90 animate-pulse" />
                      <div className="px-1.5 py-0.5 rounded bg-red-600 text-white font-black text-[9px] shadow-lg border border-white/80">
                        {currentUnit.code}
                      </div>
                    </div>
                  </div>
                  {/* Floor location banner */}
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-amber-400/40 flex items-center justify-between text-[10px] z-20">
                    <span className="text-slate-300 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      Vị trí trên tầng:
                    </span>
                    <span className="text-amber-300 font-bold">{currentUnit.code} ({currentUnit.carpetArea})</span>
                  </div>
                  {/* Zoom badge */}
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/70 border border-white/20 text-[10px] text-amber-300 flex items-center gap-1 z-20">
                    <Maximize2 className="w-3 h-3" />
                    <span>Xem lớn</span>
                  </div>
                </div>
              )}

              {/* Prev / Next Swipe Arrows overlay on image */}
              <button
                onClick={handlePrev}
                aria-label="Căn trước"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-lg cursor-pointer transition-transform active:scale-90"
              >
                <ChevronLeft className="w-4 h-4 text-amber-300" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Căn tiếp theo"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-lg cursor-pointer transition-transform active:scale-90"
              >
                <ChevronRight className="w-4 h-4 text-amber-300" />
              </button>

              {/* Bottom Dot Pagination */}
              <div className="absolute bottom-2 inset-x-0 z-20 flex justify-center pointer-events-none">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 pointer-events-auto">
                  {unitsList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex
                          ? 'w-5 bg-amber-400'
                          : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      title={`Xem căn ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floor Breakdown Details */}
            <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-xs bg-slate-900/60 p-2 rounded-xl border border-sky-500/20">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-[11px]">{currentUnit.floorRange1Label || 'Tầng 7 - 15'}:</span>
                <span className="font-bold text-amber-300">{currentUnit.areaFloor7_15}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-[11px]">{currentUnit.floorRange2Label || 'Tầng 16 - 21'}:</span>
                <span className="font-bold text-amber-300">{currentUnit.areaFloor16_21}</span>
              </div>
            </div>

            {/* View info & Expandable Detail Row */}
            <div className="mt-2.5 pt-2 border-t border-sky-500/20">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-300 truncate">
                  <Eye className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-slate-400 shrink-0 text-[11px]">View:</span>
                  <span className="text-slate-100 font-medium truncate text-[11px]">{currentUnit.view}</span>
                </div>
                <button
                  onClick={() => setShowMobileDesc(!showMobileDesc)}
                  className="text-[11px] font-bold text-amber-300 hover:text-amber-200 flex items-center gap-0.5 shrink-0 ml-2 cursor-pointer"
                >
                  <span>{showMobileDesc ? 'Thu gọn' : 'Mô tả'}</span>
                  {showMobileDesc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              </div>

              {showMobileDesc && (
                <p className="mt-2 text-xs text-slate-300 leading-relaxed bg-black/40 p-2.5 rounded-xl border border-sky-500/15">
                  {currentUnit.desc}
                </p>
              )}
            </div>

            {/* Direct Instant Action Buttons for Mobile */}
            <div className="mt-2.5 flex items-center gap-2">
              <a
                href={currentUnit.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-sky-900/60 hover:bg-sky-800/80 text-sky-200 text-xs font-bold flex items-center justify-center gap-1 border border-sky-500/40"
                title="Mở ảnh gốc trên Drive"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Drive</span>
              </a>

              <a
                href={`tel:${PROJECT_INFO.hotline}`}
                className="flex-1 py-2.5 px-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-red-600/30 border border-red-400/40 active:scale-95 transition-transform"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>{PROJECT_INFO.hotlineDisplay}</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="shimmer-sweep flex-1 py-2.5 px-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/30 border border-amber-300 active:scale-95 transition-transform cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                <span>Bảng Giá</span>
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP 3-COLUMN ARCHITECTURAL VIEW (>= 1024px) - SPACIOUS MULTI-PANEL    */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: Architectural Floorplan Blueprint with Swipe & Navigation (lg:col-span-6) */}
          <div 
            className="lg:col-span-6 rounded-2xl overflow-hidden border-2 border-sky-500/40 hover:border-sky-400/80 bg-[#061536]/90 shadow-2xl hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-all duration-500 relative group select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Blueprint Slot with Zoom cursor */}
            <div 
              className="transition-opacity duration-300 cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
              title="Nhấp để phóng to toàn màn hình"
            >
              <ImageFrameSlot
                slotId={currentUnit.slotId}
                defaultUrl={currentUnit.imageUrl}
                label={currentUnit.name}
                aspectRatio="aspect-[16/11]"
                alt={currentUnit.name}
              />
            </div>

            {/* Left Prev Arrow Button */}
            <button
              onClick={handlePrev}
              title="Xem căn trước"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/30 hover:border-red-400 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-90 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 text-amber-300 hover:text-white" />
            </button>

            {/* Right Next Arrow Button */}
            <button
              onClick={handleNext}
              title="Xem căn tiếp theo"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md border border-white/30 hover:border-red-400 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-90 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 text-amber-300 hover:text-white" />
            </button>

            {/* Top Left Tag: Unit Number & Code */}
            <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-lg bg-black/80 text-amber-300 text-[11px] font-black tracking-wider flex items-center gap-1 backdrop-blur-md border border-amber-400/40 shadow-lg">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{currentUnit.code} • {currentUnit.carpetArea}</span>
              </span>
            </div>

            {/* Top Right Zoom Button */}
            <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="px-2.5 py-1 rounded-lg bg-black/80 text-white hover:text-amber-300 text-[11px] font-bold tracking-wider flex items-center gap-1 backdrop-blur-md border border-white/20 hover:border-amber-400/50 shadow-lg transition-colors cursor-pointer"
                title="Phóng to ảnh phối cảnh"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Phóng to</span>
              </button>
            </div>

            {/* Bottom Controls: Dots */}
            <div className="absolute bottom-2.5 inset-x-0 z-20 flex flex-col items-center gap-1 pointer-events-none">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 pointer-events-auto shadow-lg">
                {unitsList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex
                        ? 'w-6 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]'
                        : 'w-2 bg-white/40 hover:bg-white/80'
                    }`}
                    title={`Chuyển đến căn số ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Info & CTA (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-4 rounded-xl bg-[#061842] border border-sky-500/20 backdrop-blur-sm relative">
              {/* Card Mini Header with Quick Next/Prev */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-sky-500/20">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  Chi tiết căn hộ
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    title="Căn trước"
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono font-bold text-amber-300 px-1">
                    0{currentIndex + 1} / 0{totalUnits}
                  </span>
                  <button
                    onClick={handleNext}
                    title="Căn sau"
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white">
                  {currentUnit.name}
                </h3>
                <a
                  href={currentUnit.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-sky-300 hover:text-amber-300 flex items-center gap-1 font-semibold"
                  title="Xem file gốc độ nét cao trên Google Drive"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Ảnh Drive</span>
                </a>
              </div>

              {/* Exact Floor Breakdown Table */}
              <div className="mt-2.5 p-2 rounded-lg bg-black/40 border border-sky-500/20 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{currentUnit.floorRange1Label || 'Tầng 7 - 15'} (Thông thủy):</span>
                  <strong className="text-amber-300 font-bold">{currentUnit.areaFloor7_15}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{currentUnit.floorRange2Label || 'Tầng 16 - 21'} (Thông thủy):</span>
                  <strong className="text-amber-300 font-bold">{currentUnit.areaFloor16_21}</strong>
                </div>
              </div>

              <div className="mt-2.5 space-y-1 text-xs">
                <p className="text-slate-400 text-[11px]">
                  Diện tích tim tường: <span className="text-slate-200 font-semibold">{currentUnit.builtUpArea}</span>
                </p>
                <p className="text-slate-400 text-[11px]">
                  Bố trí công năng: <span className="text-sky-200 font-semibold">{currentUnit.rooms} • {currentUnit.bathrooms} • {currentUnit.logia}</span>
                </p>
                <p className="text-slate-400 text-[11px]">
                  Hướng ban công: <span className="text-amber-200 font-semibold">{currentUnit.direction}</span>
                </p>
                <p className="text-slate-400 text-[11px]">
                  Tầm nhìn (View): <span className="text-slate-200 font-semibold">{currentUnit.view}</span>
                </p>
                <p className="text-slate-400 text-[11px]">
                  Tiêu chuẩn bàn giao: <span className="text-emerald-300 font-semibold">Bàn giao thô (Không gian sáng tạo)</span>
                </p>
              </div>

              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed pt-2 border-t border-sky-500/15">
                {currentUnit.desc}
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="shimmer-sweep w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-xs font-black transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer border border-red-400/30 hover:scale-[1.02]"
            >
              <span>NHẬN BẢNG GIÁ & MẶT BẰNG CHI TIẾT</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>

          {/* Far Right: Building Layout Thumbnail with Arrow (lg:col-span-3) */}
          <div className="lg:col-span-3 rounded-2xl border border-sky-500/30 p-3 bg-[#061842] relative group flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-wider">
                  Mặt bằng tầng
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {currentUnit.code}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setLightboxMode('level');
                  setIsLightboxOpen(true);
                }}
                className="text-[10px] text-sky-300 hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Xem lớn</span>
              </button>
            </div>

            <div 
              className="rounded-xl overflow-hidden border border-slate-700 bg-[#020b1e] relative cursor-pointer group/plate flex-1 flex items-center justify-center min-h-[220px]"
              onClick={() => {
                setLightboxMode('level');
                setIsLightboxOpen(true);
              }}
            >
              <ImageFrameSlot
                slotId={currentUnit.floorLevelSlotId}
                defaultUrl={currentUnit.floorLevelImageUrl}
                fit="contain"
                label={`Mặt Bằng Tầng - ${currentUnit.code}`}
                aspectRatio="aspect-square"
                alt={`Sơ đồ mặt bằng tầng định vị ${currentUnit.code}`}
                className="w-full h-full p-1"
              />

              {/* Dynamic Interactive Unit Locator Pin on the Floorplate */}
              <div 
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500"
                style={{ left: currentUnit.pinPosition.x, top: currentUnit.pinPosition.y }}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-6 h-6 rounded-full bg-red-500/50 animate-ping" />
                  <span className="absolute w-4 h-4 rounded-full bg-amber-400/80 animate-pulse" />
                  <div className="px-1.5 py-0.5 rounded bg-red-600 text-white font-black text-[9px] shadow-lg border border-white/60 tracking-tighter whitespace-nowrap">
                    {currentUnit.code}
                  </div>
                </div>
              </div>

              {/* Active Unit Location Indicator Tag */}
              <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-amber-400/40 flex items-center justify-between text-[10px] shadow-lg z-20">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-slate-300">Vị trí trên tầng:</span>
                </div>
                <span className="text-amber-300 font-black">{currentUnit.code} ({currentUnit.carpetArea})</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
