import React, { useState, useEffect, useRef } from 'react';
import { useImageContext, DEFAULT_IMAGE_SLOTS } from '../context/ImageContext';
import { 
  X, 
  Camera, 
  RotateCcw, 
  Image as ImageIcon, 
  Search, 
  Check, 
  Layers,
  Save,
  Download,
  UploadCloud,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const ImageManagerModal: React.FC = () => {
  const { 
    isManagerOpen, 
    setIsManagerOpen, 
    images, 
    openImageUploader, 
    resetAllImages, 
    resetImage,
    lockAndPersistImages,
    isPersisting,
    lastPersistStatus,
    exportConfigJson,
    importConfigJson
  } = useImageContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isManagerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsManagerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isManagerOpen, setIsManagerOpen]);

  if (!isManagerOpen) return null;

  const allSlots = Object.values(DEFAULT_IMAGE_SLOTS);
  const sections = ['all', ...Array.from(new Set(allSlots.map((s) => s.section)))];

  const customizedCount = allSlots.filter((s) => images[s.id] && images[s.id] !== s.defaultUrl).length;

  const handleManualPersist = async () => {
    const res = await lockAndPersistImages();
    setNotification(res.message);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const content = ev.target?.result as string;
      if (content) {
        const res = await importConfigJson(content);
        setNotification(res.message);
        setTimeout(() => setNotification(null), 4000);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const filteredSlots = allSlots.filter((slot) => {
    const matchesSearch = slot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          slot.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          slot.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSection = selectedSection === 'all' || slot.section === selectedSection;
    return matchesSearch && matchesSection;
  });

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4 md:p-6 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsManagerOpen(false);
      }}
    >
      <div 
        className="relative bg-slate-900 rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[92vh] sm:max-h-[88vh] shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-amber-400/40 overflow-hidden text-white flex flex-col my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#040d22] px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-800 flex items-center justify-between shrink-0 sticky top-0 z-30">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Layers className="w-3.5 h-3.5" />
                Hệ Thống Khung Ảnh
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400">
                Tổng cộng {allSlots.length} vị trí khung ảnh trên website
              </span>
            </div>
            <h3 className="font-sans text-base sm:text-xl font-black text-white">
              Quản Lý Toàn Bộ Khung Ảnh Website Động Lực Tower
            </h3>
          </div>
          <button
            onClick={() => setIsManagerOpen(false)}
            aria-label="Đóng cửa sổ"
            title="Đóng cửa sổ (Esc)"
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 hover:bg-red-500 active:scale-90 text-white shadow-lg shadow-red-600/40 border border-red-400 transition-all shrink-0 cursor-pointer group"
          >
            <X className="w-5 h-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Permanent Save Action Strip */}
        <div className="bg-gradient-to-r from-amber-950/70 via-slate-900 to-emerald-950/70 border-b border-amber-500/30 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-200 text-[11px] sm:text-xs">
              Đang có <strong className="text-amber-300">{customizedCount}</strong> ảnh tùy chỉnh.
              {notification || lastPersistStatus ? (
                <span className="ml-2 font-semibold text-emerald-300">{notification || lastPersistStatus}</span>
              ) : (
                <span className="ml-2 text-slate-400">Ảnh bạn tải lên sẽ được tự động cố định vào mã nguồn dự án.</span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleManualPersist}
              disabled={isPersisting}
              title="Lưu tất cả ảnh bạn đã thêm vào thư mục mã nguồn vĩnh viễn"
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-900/40 transition-all cursor-pointer"
            >
              {isPersisting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Đang Cố Định Ảnh...</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>Cố Định Tất Cả Ảnh Vào Dự Án</span>
                </>
              )}
            </button>

            <button
              onClick={exportConfigJson}
              title="Tải về file sao lưu JSON toàn bộ ảnh đã cấu hình"
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Xuất JSON</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              title="Nhập file JSON ảnh đã sao lưu trước đó"
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nhập JSON</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImportFile}
              className="hidden"
            />
          </div>
        </div>

        {/* Toolbar */}
        <div className="p-4 sm:px-6 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm khung ảnh theo tên..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          {/* Section Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors ${
                  selectedSection === sec
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {sec === 'all' ? 'Tất cả' : sec}
              </button>
            ))}
          </div>

          {/* Reset all button */}
          <button
            onClick={() => {
              if (window.confirm('Bạn có chắc muốn khôi phục toàn bộ khung ảnh về ảnh mẫu mặc định?')) {
                resetAllImages();
              }
            }}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Khôi Phục Gốc Tất Cả
          </button>
        </div>

        {/* Grid of Slots */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSlots.map((slot) => {
            const currentImg = images[slot.id] || slot.defaultUrl;
            const isCustomized = images[slot.id] && images[slot.id] !== slot.defaultUrl;
            const isDiskLocked = currentImg.startsWith('/uploads/');

            return (
              <div
                key={slot.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between p-3.5 transition-all group"
              >
                {/* Image preview frame */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 mb-3">
                  <img
                    src={currentImg}
                    alt={slot.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/90 text-amber-300 border border-amber-500/30">
                      {slot.section}
                    </span>
                  </div>
                  {isDiskLocked ? (
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        Cố định vĩnh viễn
                      </span>
                    </div>
                  ) : isCustomized ? (
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950/90 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Đã tải ảnh riêng
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Info */}
                <div className="flex-1 mb-3">
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                    {slot.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                    {slot.description}
                  </p>
                  <span className="inline-block mt-1 text-[10px] text-slate-500">
                    Gợi ý: {slot.suggestedSize}
                  </span>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setIsManagerOpen(false);
                      openImageUploader(slot.id);
                    }}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm shadow-red-600/30 cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    Thay Ảnh Này
                  </button>

                  {isCustomized && (
                    <button
                      onClick={() => resetImage(slot.id)}
                      title="Khôi phục ảnh mẫu gốc"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>
            💡 Mẹo: Bạn có thể rê chuột vào bất kỳ hình ảnh nào trên trang web để nhấp nút <strong>"Đưa Ảnh Của Bạn Vào Đây"</strong> nhanh chóng!
          </span>
          <button
            onClick={() => setIsManagerOpen(false)}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
