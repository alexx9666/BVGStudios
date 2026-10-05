import React from "react";
import { Camera, CheckCircle2, Send, Mail, Sparkles, Award, ShieldCheck, ChevronRight } from "lucide-react";
import { STUDIO_INFO, PRICING_PACKAGES, GALLERY_PHOTOS, GalleryPhoto } from "../data/siteData";

interface CategoryPageProps {
  navigate: (path: string) => void;
  openLightbox: (photo: GalleryPhoto) => void;
}

export const MaleModels: React.FC<CategoryPageProps> = ({ navigate, openLightbox }) => {
  const malePackages = PRICING_PACKAGES.filter((p) => p.category === "male");
  const malePhotos = GALLERY_PHOTOS.filter((p) => p.category === "male");

  return (
    <div className="space-y-16 pb-16">
      {/* Category Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] to-[#080b11] py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Mumbai’s #1 Male Portfolio Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Male Models Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Professional Portfolio starting from <span className="text-amber-400 font-bold">₹4,000/-</span> in Mumbai, Goregaon &amp; Jogeshwari West.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Get the best budget portfolio with in-house makeup, costume styling guidance, raw pictures, and genuine casting audition connections for Films, TV &amp; Web Shows.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent("Hello BVG Studios, I want to book a Male Model Portfolio shoot. Please share available dates.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Book Shoot via Telegram: t.me/HrBVG</span>
            </a>
            <a
              href={`mailto:${STUDIO_INFO.email}?subject=Male%20Model%20Portfolio%20Inquiry`}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Email: {STUDIO_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Packages</span>
          <h2 className="text-3xl font-extrabold text-white">Male Portfolio Packages</h2>
          <p className="text-sm text-slate-400">No hidden costs. Studio timings 10:00 AM – 6:00 PM everyday.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {malePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 flex flex-col justify-between bg-slate-900/80 border ${
                pkg.popular ? "border-amber-500 shadow-xl shadow-amber-500/10" : "border-slate-800"
              }`}
            >
              <div className="space-y-4">
                {pkg.popular && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-extrabold uppercase">
                    Recommended
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
                  href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent(`Hello BVG Studios, I want to book: ${pkg.name} (${pkg.price})`)}`}
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

      {/* Guide: Career in Modeling for Males */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f141e] border border-slate-800 rounded-2xl p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Male Modeling Portfolio &amp; Career Guidance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-400">How We Plan Your Male Shoot</h3>
              <p>
                A portfolio is your visual CV. At BVG Studios, we focus on capturing the versatility casting directors look for: clean commercial smiles, intense dramatic expressions, corporate smart-casuals, high-fashion attitude, and Indian traditional looks.
              </p>
              <p>
                Our photographers guide you through posture, jawline angles, body positioning, and eye focus so that even first-time models look effortlessly confident in front of the lens.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-400">Wardrobe, Grooming &amp; Makeup</h3>
              <p>
                We provide a professional makeup artist who styles your hair and applies camera-ready HD makeup designed specifically for men to control shine and highlight features without looking overdone.
              </p>
              <p>
                We also have a wardrobe collection at our Goregaon West studio that clients can use during the shoot free of charge. You receive all original uncompressed raw photos immediately after the session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Male Photos Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Male Portfolio Gallery ({malePhotos.length} Shoots)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">Click any image to enlarge in high resolution.</p>
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
          {malePhotos.map((photo) => (
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
