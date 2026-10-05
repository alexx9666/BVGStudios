import React, { useState } from "react";
import { Film, Search, Calendar, ChevronRight, Send, ShieldCheck, Mail } from "lucide-react";
import { POSTS_DATA, PostItem, STUDIO_INFO } from "../data/siteData";

interface AuditionsProps {
  openAudition: (post: PostItem) => void;
}

export const Auditions: React.FC<AuditionsProps> = ({ openAudition }) => {
  const [search, setSearch] = useState("");
  const auditionPosts = POSTS_DATA.filter((p) => p.category === "audition");

  const filtered = auditionPosts.filter((p) => {
    const q = search.toLowerCase();
    return p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] to-[#080b11] py-16 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold">
            <Film className="w-4 h-4" />
            <span>Regular Audition Updates</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Daily Auditions &amp; Casting Calls
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Get free daily audition updates for Acting and Modeling in Mumbai. For big notable roles, keep your portfolio updated with BVG Studios.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent("Hello BVG Studios, I want to receive daily audition updates and discuss my portfolio.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Get Casting Alerts on Telegram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Search & Notices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search auditions by show, role, platform..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <div
              key={post.id}
              onClick={() => openAudition(post)}
              className="group cursor-pointer rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-4 shadow-md hover:shadow-xl"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                    Casting Call
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:text-amber-400 transition-colors">
                <span>View Full Requirement</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No audition notices matched your search query "{search}".
          </div>
        )}

        {/* Advisory */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 text-xs text-slate-400 space-y-2 mt-8">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
            <ShieldCheck className="w-4 h-4" /> Casting Notice Disclaimer
          </div>
          <p>
            Make sure to check the audition posting date and apply accordingly. Auditions are posted as received from open industry sources. BVG Studios provides photography portfolios and does not charge any commission or fees for auditions. Never pay money to any coordinator for auditions.
          </p>
        </div>
      </section>
    </div>
  );
};
