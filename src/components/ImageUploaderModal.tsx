import React, { useState, useEffect } from 'react';
import { useImageContext, DEFAULT_IMAGE_SLOTS, ImageStyleConfig } from '../context/ImageContext';
import { compressImage } from '../utils/imageCompressor';
import { 
  X, 
  Upload, 
  Link as LinkIcon, 
  RotateCcw, 
  Check, 
  Sparkles, 
  Image as ImageIcon,
  Move,
  Maximize2,
  ZoomIn,
  Building2,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Sliders
} from 'lucide-react';

export const ImageUploaderModal: React.FC = () => {
  const { 
    currentEditingSlot, 
    closeImageUploader, 
    images, 
    setImage, 
    resetImage,
    imageStyles,
    setImageStyle,
    resetImageStyle,
    activeUploaderTab,
    setActiveUploaderTab,
    lockAndPersistImages
  } = useImageContext();

  const [inputUrl, setInputUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Position & Zoom state
  const [tempStyle, setTempStyle] = useState<ImageStyleConfig>({
    positionX: 50,
    positionY: 50,
    zoom: 100,
    fit: 'cover',
  });

  // Sync tempStyle when slot changes or modal opens
  useEffect(() => {
    if (currentEditingSlot) {
      const existing = imageStyles[currentEditingSlot] || {
        positionX: currentEditingSlot === 'hero_building' ? 20 : 50,
        positionY: 50,
        zoom: currentEditingSlot === 'hero_building' ? 105 : 100,
        fit: 'cover',
      };
      setTempStyle(existing);
      setPreviewUrl(null);
      setInputUrl('');
    }
  }, [currentEditingSlot, imageStyles]);

  if (!currentEditingSlot) return null;

  const slotInfo = DEFAULT_IMAGE_SLOTS[currentEditingSlot];
  const activeImageSrc = previewUrl || (inputUrl.trim() ? inputUrl.trim() : (images[currentEditingSlot] || slotInfo?.defaultUrl || ''));

  const sampleLibrary = [
    { title: 'Tòa nhà hoàng hôn', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Tòa tháp hiện đại', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Phòng khách cao cấp', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Phòng ngủ ấm cúng', url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Bàn ăn & Bếp sang trọng', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Ban công ngắm phố', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Căn hộ bàn giao thô', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80' },
    { title: 'Công trường thi công', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80' },
  ];

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await compressImage(file, 1440, 1080, 0.82);
        if (compressed) {
          setPreviewUrl(compressed);
          setActiveUploaderTab('adjust'); // Switch immediately to adjust view so user can center it!
        }
      } catch (err) {
        console.warn('Upload error:', err);
      }
    }
  };

  const handleSave = () => {
    // 1. Save new image source if provided
    const newUrl = previewUrl || (inputUrl.trim() ? inputUrl.trim() : null);
    if (newUrl) {
      setImage(currentEditingSlot, newUrl);
    }

    // 2. Save styling / position config
    setImageStyle(currentEditingSlot, tempStyle);

    // 3. Immediately lock and persist to project source
    setTimeout(() => {
      lockAndPersistImages().catch(() => {});
    }, 100);

    closeImageUploader();
  };

  const handleReset = () => {
    resetImage(currentEditingSlot);
    resetImageStyle(currentEditingSlot);
    closeImageUploader();
  };

  // Quick preset handlers
  const applyCenterBuildingPreset = () => {
    setTempStyle((prev) => ({
      ...prev,
      positionX: 20, // Perfectly centers building on landscape architectural photos
      positionY: 50,
      zoom: 105,
      fit: 'cover',
    }));
  };

  const applyAbsoluteCenterPreset = () => {
    setTempStyle((prev) => ({
      ...prev,
      positionX: 50,
      positionY: 50,
      fit: 'cover',
    }));
  };

  const applyLeftPreset = () => {
    setTempStyle((prev) => ({
      ...prev,
      positionX: 5,
      fit: 'cover',
    }));
  };

  const applyRightPreset = () => {
    setTempStyle((prev) => ({
      ...prev,
      positionX: 95,
      fit: 'cover',
    }));
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4 md:p-6 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeImageUploader();
      }}
    >
      <div 
        className="relative bg-slate-900 rounded-2xl sm:rounded-3xl max-w-3xl w-full shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-amber-400/40 overflow-hidden text-white my-auto flex flex-col max-h-[92vh] sm:max-h-[88vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#040d22] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-slate-800 shrink-0 sticky top-0 z-30">
          <div>
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Tùy Chỉnh & Căn Chỉnh Khung Ảnh
            </span>
            <h3 className="font-serif-luxury text-base sm:text-lg font-black text-white">
              {slotInfo?.name || 'Khung Ảnh'}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400">
              Khu vực: <span className="text-slate-200">{slotInfo?.section}</span> • Kích thước gợi ý: {slotInfo?.suggestedSize}
            </p>
          </div>
          <button
            onClick={closeImageUploader}
            aria-label="Đóng cửa sổ"
            title="Đóng cửa sổ (Esc)"
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 hover:bg-red-500 active:scale-90 text-white shadow-lg shadow-red-600/40 border border-red-400 transition-all shrink-0 cursor-pointer group"
          >
            <X className="w-5 h-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-4 sm:space-y-5">
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap border-b border-slate-800 pb-2.5 gap-2">
            <button
              onClick={() => setActiveUploaderTab('adjust')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeUploaderTab === 'adjust'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'text-amber-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Move className="w-3.5 h-3.5" />
              <span>Căn Chỉnh Vị Trí (Ra Giữa)</span>
            </button>

            <button
              onClick={() => setActiveUploaderTab('upload')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeUploaderTab === 'upload'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Tải Ảnh Từ Thiết Bị</span>
            </button>

            <button
              onClick={() => setActiveUploaderTab('url')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeUploaderTab === 'url'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <LinkIcon className="w-3.5 h-3.5" />
              <span>Dán Link URL</span>
            </button>

            <button
              onClick={() => setActiveUploaderTab('samples')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeUploaderTab === 'samples'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kho Ảnh Mẫu</span>
            </button>
          </div>

          {/* TAB 1: CĂN CHỈNH VỊ TRÍ & TÂM ĐIỂM (ADJUST) */}
          {activeUploaderTab === 'adjust' && (
            <div className="space-y-4">
              
              {/* Interactive Live Preview Box */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Visual Viewport Preview (md:col-span-7) */}
                <div className="md:col-span-7">
                  <div className="flex items-center justify-between mb-1.5 text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-amber-400" />
                      <span>Xem trước vị trí hiển thị thực tế trong khung:</span>
                    </span>
                    <span className="text-[11px] text-amber-400 font-mono">
                      X: {tempStyle.positionX}% • Y: {tempStyle.positionY}% • Zoom: {tempStyle.zoom}%
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 border-2 border-amber-400/50 shadow-xl aspect-[4/3] sm:aspect-[3/4] max-h-[320px] w-full flex items-center justify-center">
                    <img
                      src={activeImageSrc}
                      alt="Adjust Preview"
                      className="w-full h-full transition-all duration-150"
                      style={{
                        objectPosition: `${tempStyle.positionX}% ${tempStyle.positionY}%`,
                        objectFit: tempStyle.fit,
                        transform: `scale(${tempStyle.zoom / 100})`,
                        transformOrigin: `${tempStyle.positionX}% ${tempStyle.positionY}%`,
                      }}
                    />

                    {/* Subtle Crosshair Guide Overlay */}
                    <div className="absolute inset-0 pointer-events-none border border-white/10">
                      {/* Vertical center guide */}
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-amber-400/30 border-r border-dashed border-amber-400/50" />
                      {/* Horizontal center guide */}
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-amber-400/30 border-b border-dashed border-amber-400/50" />
                    </div>

                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-black/80 backdrop-blur-sm text-[10px] text-slate-200 border border-white/20">
                      Vạch vàng đứt nét: Vị trí chính giữa khung
                    </div>
                  </div>
                </div>

                {/* Adjustment Controls (md:col-span-5) */}
                <div className="md:col-span-5 space-y-4 bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                  
                  {/* Quick Preset Buttons */}
                  <div>
                    <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                      Phím Tắt Căn Nhanh:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={applyCenterBuildingPreset}
                        className="px-2.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-bold border border-amber-400/40 flex items-center gap-1.5 justify-center transition-all cursor-pointer shadow-sm hover:scale-102"
                        title="Dịch ảnh sang trái để tòa tháp nằm chính giữa khung"
                      >
                        <Building2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>Căn Giữa Tòa Tháp</span>
                      </button>

                      <button
                        type="button"
                        onClick={applyAbsoluteCenterPreset}
                        className="px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 flex items-center gap-1.5 justify-center transition-all cursor-pointer"
                        title="Căn tâm giữa tuyệt đối 50% / 50%"
                      >
                        <AlignCenter className="w-3.5 h-3.5 text-sky-400" />
                        <span>Căn Giữa Chuẩn</span>
                      </button>

                      <button
                        type="button"
                        onClick={applyLeftPreset}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 flex items-center gap-1.5 justify-center transition-all cursor-pointer"
                      >
                        <AlignLeft className="w-3.5 h-3.5 text-slate-400" />
                        <span>Lệch Trái (0%)</span>
                      </button>

                      <button
                        type="button"
                        onClick={applyRightPreset}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 flex items-center gap-1.5 justify-center transition-all cursor-pointer"
                      >
                        <AlignRight className="w-3.5 h-3.5 text-slate-400" />
                        <span>Lệch Phải (100%)</span>
                      </button>
                    </div>
                  </div>

                  {/* Horizontal Position Slider (Trục X: Trái <-> Phải) */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-300">
                        Vị trí Ngang (Trục X):
                      </span>
                      <span className="text-amber-400 font-bold">{tempStyle.positionX}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-400">Trái</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={tempStyle.positionX}
                        onChange={(e) =>
                          setTempStyle((prev) => ({ ...prev, positionX: Number(e.target.value) }))
                        }
                        className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                      />
                      <span className="text-[10px] text-slate-400">Phải</span>
                    </div>
                  </div>

                  {/* Vertical Position Slider (Trục Y: Trên <-> Dưới) */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-300">
                        Vị trí Dọc (Trục Y):
                      </span>
                      <span className="text-amber-400 font-bold">{tempStyle.positionY}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-400">Trên</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={tempStyle.positionY}
                        onChange={(e) =>
                          setTempStyle((prev) => ({ ...prev, positionY: Number(e.target.value) }))
                        }
                        className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                      />
                      <span className="text-[10px] text-slate-400">Dưới</span>
                    </div>
                  </div>

                  {/* Zoom Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-slate-300 flex items-center gap-1">
                        <ZoomIn className="w-3 h-3 text-amber-400" />
                        <span>Phóng to (Zoom):</span>
                      </span>
                      <span className="text-amber-400 font-bold">{tempStyle.zoom}%</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="200"
                      value={tempStyle.zoom}
                      onChange={(e) =>
                        setTempStyle((prev) => ({ ...prev, zoom: Number(e.target.value) }))
                      }
                      className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                  </div>

                  {/* Fit Mode Toggle */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-xs">
                    <span className="text-slate-300 font-semibold">Chế độ hiển thị:</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setTempStyle((prev) => ({ ...prev, fit: 'cover' }))}
                        className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                          tempStyle.fit === 'cover'
                            ? 'bg-red-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        Lấp đầy (Cover)
                      </button>
                      <button
                        type="button"
                        onClick={() => setTempStyle((prev) => ({ ...prev, fit: 'contain' }))}
                        className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                          tempStyle.fit === 'contain'
                            ? 'bg-red-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        Toàn cảnh (Contain)
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* TAB 2: TẢI ẢNH TỪ THIẾT BỊ (UPLOAD) */}
          {activeUploaderTab === 'upload' && (
            <div className="space-y-3">
              <label className="border-2 border-dashed border-red-500/40 hover:border-red-500 bg-slate-950/60 hover:bg-slate-950 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all group">
                <Upload className="w-10 h-10 text-red-400 group-hover:scale-110 transition-transform mb-2" />
                <span className="text-xs sm:text-sm font-bold text-white mb-1">
                  Nhấp để tải ảnh lên từ máy tính hoặc điện thoại
                </span>
                <span className="text-[11px] text-slate-400">
                  Hỗ trợ định dạng JPG, PNG, WEBP. Sau khi chọn ảnh, hệ thống sẽ tự chuyển sang chế độ căn giữa để bạn chỉnh góc nhìn đẹp nhất.
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* TAB 3: DÁN LINK URL (URL) */}
          {activeUploaderTab === 'url' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Nhập hoặc Dán đường dẫn URL ảnh (https://...)
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={inputUrl}
                    onChange={(e) => {
                      setInputUrl(e.target.value);
                      setPreviewUrl(null);
                    }}
                    placeholder="Ví dụ: https://mywebsite.com/images/dongluc-photo.jpg"
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {inputUrl.trim() && (
                    <button
                      type="button"
                      onClick={() => setActiveUploaderTab('adjust')}
                      className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      <Move className="w-3.5 h-3.5" />
                      <span>Căn Chỉnh Góc Nhìn</span>
                    </button>
                  )}
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Mẹo: Bạn có thể sao chép địa chỉ hình ảnh từ website cũ, Google Drive (chế độ công khai) hoặc bất kỳ trang web nào.
              </p>
            </div>
          )}

          {/* TAB 4: KHO ẢNH MẪU (SAMPLES) */}
          {activeUploaderTab === 'samples' && (
            <div className="space-y-2">
              <span className="text-xs text-slate-400 block mb-1">
                Nhấp vào ảnh mẫu để chọn, sau đó chuyển sang tab Căn Chỉnh nếu muốn dịch chuyển ảnh:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-h-56 overflow-y-auto pr-1">
                {sampleLibrary.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setPreviewUrl(item.url);
                      setInputUrl('');
                      setActiveUploaderTab('adjust');
                    }}
                    className="text-left group border border-slate-800 hover:border-amber-400 rounded-xl overflow-hidden transition-all bg-slate-950 cursor-pointer"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-1.5 text-[10px] font-semibold text-slate-300 truncate">
                      {item.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Khôi Phục Mặc Định (Căn Chuẩn)
          </button>

          <div className="w-full sm:w-auto flex items-center justify-end gap-2">
            <button
              onClick={closeImageUploader}
              className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold shadow-md shadow-red-600/30 flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              Lưu & Áp Dụng (Vị Trí Mới)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
