import React, { useState } from "react";
import { CheckCircle2, Send, Mail, Clock, MapPin, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";
import { STUDIO_INFO, PRICING_PACKAGES, PackageItem } from "../data/siteData";

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "male" | "female" | "kid" | "character">("all");

  const filteredPackages = activeTab === "all"
    ? PRICING_PACKAGES
    : PRICING_PACKAGES.filter((p) => p.category === activeTab);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] to-[#080b11] py-16 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Honest, Transparent &amp; Pocket-Friendly</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Modeling Portfolio Price Packages
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            There is <strong className="text-amber-400">no hidden cost</strong> in our packages. Studio timings: 10:00 AM to 6:00 PM everyday (including Saturday &amp; Sunday).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Makeup Included
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Costumes Available Free
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> All Raw Pictures Given
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Audition Information
            </span>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Packages" },
            { id: "male", label: "Male Models" },
            { id: "female", label: "Female Models" },
            { id: "kid", label: "Kid Models" },
            { id: "character", label: "Character Artists" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-slate-900/80 border ${
                pkg.popular
                  ? "border-amber-500/80 shadow-2xl shadow-amber-500/10 relative"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-extrabold uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                    {pkg.category.toUpperCase()} PORTFOLIO
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{pkg.name}</h3>
                </div>

                <div className="py-2 border-b border-slate-800">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400 font-cinzel">
                    {pkg.price}
                  </span>
                  <span className="block text-xs text-slate-400 mt-1">
                    {pkg.shoots}
                  </span>
                </div>

                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Photos:</span>
                    <strong className="text-white">{pkg.photos}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Dress Changes:</span>
                    <strong className="text-white">{pkg.dressChanges}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Makeup &amp; Hair:</span>
                    <strong className="text-white">{pkg.makeup}</strong>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 space-y-2.5">
                <a
                  href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent(`Hello BVG Studios, I want to book: "${pkg.name}" (${pkg.price}). Please share appointment dates.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-xs shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Book on Telegram: t.me/HrBVG</span>
                </a>
                <a
                  href={`mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent(`Portfolio Booking Inquiry: ${pkg.name}`)}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inquire via Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Terms & Notes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Important Studio Notes &amp; Appointment Guidelines
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong>Please Note:</strong> The prices mentioned above are our standard rates for portfolio shoots and related styling services. Studio visits are <strong>strictly by prior appointment only</strong> to give each aspiring model personalized attention.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Kindly message us in advance on Telegram at <a href={STUDIO_INFO.telegramLink} target="_blank" rel="noreferrer" className="text-sky-400 underline font-semibold">t.me/HrBVG</a> or email at <a href={`mailto:${STUDIO_INFO.email}`} className="text-amber-400 underline font-semibold">{STUDIO_INFO.email}</a> to schedule your session date and time.
          </p>
        </div>
      </section>
    </div>
  );
};
