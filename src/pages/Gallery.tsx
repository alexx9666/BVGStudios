import React, { useState } from "react";
import { Camera, Sparkles, Filter, ChevronRight, Eye } from "lucide-react";
import { GALLERY_PHOTOS, GalleryPhoto, STUDIO_INFO } from "../data/siteData";

interface GalleryProps {
  openLightbox: (photo: GalleryPhoto, index: number, list: GalleryPhoto[]) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ openLightbox }) => {
  const [filter, setFilter] = useState<"all" | "male" | "female" | "kid" | "character">("all");

  const filteredPhotos = filter === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === filter);

  return (
    <div className="space-y-12 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] to-[#080b11] py-16 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <Camera className="w-4 h-4" />
            <span>High-Definition Photography</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Portfolio Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Browse our showcase of {GALLERY_PHOTOS.length}+ authentic model and actor portfolios shot at BVG Studios in Goregaon West, Mumbai.
          </p>

          <div className="pt-2">
            <span className="text-xs text-slate-400">
              Featuring Male Models, Female Models, Kid Models, and Character Artists.
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: `All Photos (${GALLERY_PHOTOS.length})` },
            { id: "male", label: "Male Models" },
            { id: "female", label: "Female Models" },
            { id: "kid", label: "Kid Models" },
            { id: "character", label: "Character Artists" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.id
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo, index, filteredPhotos)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/60 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* BVG Studios Watermark Overlay - Clean branded overlay */}
              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[10px] font-semibold text-amber-400 border border-white/10 font-cinzel">
                BVG Studios
              </div>

              {/* Hover overlay with zoom icon & title */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="self-end p-1.5 rounded-full bg-black/60 text-white">
                  <Eye className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">
                    {photo.category}
                  </span>
                  <p className="text-xs font-semibold text-white truncate">
                    {photo.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
