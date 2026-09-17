import React, { useState } from 'react';
import { useImageContext, DEFAULT_IMAGE_SLOTS } from '../context/ImageContext';
import { Image as ImageIcon } from 'lucide-react';

interface ImageFrameSlotProps {
  slotId: string;
  defaultUrl?: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string; // e.g. 'aspect-[16/10]', 'aspect-[4/3]'
  alt?: string;
  showBadge?: boolean;
  fit?: 'cover' | 'contain';
}

export const ImageFrameSlot: React.FC<ImageFrameSlotProps> = ({
  slotId,
  defaultUrl,
  label,
  className = '',
  imgClassName = '',
  aspectRatio = '',
  alt = '',
  fit,
}) => {
  const { images, getImageStyle } = useImageContext();

  const slotInfo = DEFAULT_IMAGE_SLOTS[slotId];
  const displayLabel = label || slotInfo?.name || slotId;
  const fallbackDefault = defaultUrl || slotInfo?.defaultUrl || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80';
  const rawUrl = images[slotId]?.startsWith('data:') 
    ? images[slotId] 
    : (defaultUrl || images[slotId] || slotInfo?.defaultUrl || fallbackDefault);
  const [imgSrc, setImgSrc] = useState<string>(rawUrl);

  // Sync state if rawUrl changes
  React.useEffect(() => {
    setImgSrc(rawUrl);
  }, [rawUrl]);
  
  const styleConfig = getImageStyle ? getImageStyle(slotId) : {
    positionX: 50,
    positionY: 50,
    zoom: 100,
    fit: 'cover' as const
  };

  const activeFit = fit || styleConfig.fit || 'cover';

  const handleImageError = () => {
    if (defaultUrl && imgSrc !== defaultUrl) {
      setImgSrc(defaultUrl);
    } else if (slotInfo?.defaultUrl && imgSrc !== slotInfo.defaultUrl) {
      setImgSrc(slotInfo.defaultUrl);
    } else if (imgSrc !== fallbackDefault) {
      setImgSrc(fallbackDefault);
    }
  };

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {/* Current Image with dynamic position and zoom */}
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={alt || displayLabel}
          onError={handleImageError}
          referrerPolicy="no-referrer"
          className={`w-full h-full transition-transform duration-500 ${imgClassName}`}
          style={{
            objectPosition: `${styleConfig.positionX}% ${styleConfig.positionY}%`,
            objectFit: activeFit,
            transform: `scale(${styleConfig.zoom / 100})`,
            transformOrigin: `${styleConfig.positionX}% ${styleConfig.positionY}%`,
          }}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
          <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
          <span className="text-xs font-semibold">{displayLabel}</span>
        </div>
      )}
    </div>
  );
};
