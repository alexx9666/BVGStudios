import React from "react";
import { Camera, CheckCircle2, Send, Mail, Sparkles, Heart, ShieldCheck, ChevronRight } from "lucide-react";
import { STUDIO_INFO, PRICING_PACKAGES, GALLERY_PHOTOS, GalleryPhoto } from "../data/siteData";

interface CategoryPageProps {
  navigate: (path: string) => void;
  openLightbox: (photo: GalleryPhoto) => void;
}

export const FemaleModels: React.FC<CategoryPageProps> = ({ navigate, openLightbox }) => {
  const femalePackages = PRICING_PACKAGES.filter((p) => p.category === "female");
  const femalePhotos = GALLERY_PHOTOS.filter((p) => p.category === "female");

  return (
    <div className="space-y-16 pb-16">
      {/* Category Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] to-[#080b11] py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs sm:text-sm font-semibold">
            <Heart className="w-4 h-4 fill-pink-500" />
            <span>Dedicated Lady Photographer Available for Female Shoots</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Female Modeling Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Girls Modeling Portfolio from <span className="text-amber-400 font-bold">₹4,000/-</span> to <span className="text-amber-400 font-bold">₹11,500/-</span> in Mumbai.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Get the best budget portfolio clicked by experienced photographers with professional makeup, hair styling, costume changes, and direct audition guidance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent("Hello BVG Studios, I want to book a Female Modeling Portfolio shoot. Please share available dates.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Book via Telegram: t.me/HrBVG</span>
            </a>
            <a
              href={`mailto:${STUDIO_INFO.email}?subject=Female%20Model%20Portfolio%20Inquiry`}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Email: {STUDIO_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Comfort & Safety Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-pink-950/20 via-slate-900 to-amber-950/20 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Safe, Professional &amp; Welcoming Studio Environment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We understand that stepping in front of the camera can feel daunting. At BVG Studios, we provide female models with an experienced lady photographer upon request, private changing rooms, and a respectful team.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
              Lady Photographer on Request
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Pricing</span>
          <h2 className="text-3xl font-extrabold text-white">Female Portfolio Packages</h2>
          <p className="text-sm text-slate-400">All packages include raw photos and makeup assistance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {femalePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 flex flex-col justify-between bg-slate-900/80 border ${
                pkg.popular ? "border-amber-500 shadow-xl shadow-amber-500/10" : "border-slate-800"
              }`}
            >
              <div className="space-y-4">
                {pkg.popular && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-extrabold uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                <div className="text-3xl font-black text-amber-400 font-cinzel">{pkg.price}</div>
                <div className="text-xs text-slate-400 border-b border-slate-800 pb-3 space-y-1">
                  <div><strong>{pkg.photos}</strong></div>
                  <div>{pkg.dressChanges}</div>
                  <div>{pkg.makeup}</div>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <a
                  href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent(`Hello BVG Studios, I want to book Female Package: ${pkg.name} (${pkg.price})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Book via Telegram</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Female Photos Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Female Portfolio Gallery ({femalePhotos.length} Shoots)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">Click any image to view in high definition.</p>
          </div>
          <button
            onClick={() => navigate("/gallery")}
            className="text-xs sm:text-sm text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>All Categories</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {femalePhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2.5">
                <span className="self-end px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-amber-400 font-cinzel">
                  BVG Studios
                </span>
                <span className="text-[11px] font-medium text-white truncate">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
