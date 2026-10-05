import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Download, Camera } from "lucide-react";
import { GalleryPhoto } from "../data/siteData";

interface LightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photo,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 bg-black/60 px-4 py-2 rounded-full border border-white/10 pointer-events-auto">
          <Camera className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-cinzel">
            BVG Studios
          </span>
          {currentIndex !== undefined && total !== undefined && (
            <span className="text-xs text-slate-400 border-l border-white/20 pl-3">
              {currentIndex + 1} / {total}
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-black/60 text-white hover:bg-white/20 border border-white/10 transition-all pointer-events-auto"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-neutral-950">
          <img
            src={photo.url}
            alt={photo.title || "BVG Studios Portfolio Shoot"}
            className="max-h-[75vh] w-auto object-contain select-none transition-transform duration-300"
            loading="lazy"
          />

          {/* Clean Watermark Overlay - Replacing old website overlay with BVG Studios */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/75 backdrop-blur-md rounded-lg border border-amber-500/30 flex items-center gap-2 pointer-events-none shadow-lg">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold tracking-wider text-white uppercase font-cinzel">
              BVG Studios
            </span>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-3 text-center">
          <p className="text-sm font-medium text-slate-200">{photo.title}</p>
          <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
            Category: {photo.category.toUpperCase()} • Mumbai Shoot
          </p>
        </div>
      </div>

      {/* Previous / Next Arrows */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black border border-white/10 transition-all shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black border border-white/10 transition-all shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
