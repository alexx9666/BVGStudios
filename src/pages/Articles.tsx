import React from "react";
import { BookOpen, Calendar, ChevronRight, Sparkles, Send, Camera } from "lucide-react";
import { POSTS_DATA, PostItem, STUDIO_INFO } from "../data/siteData";

interface ArticlesProps {
  openArticle: (post: PostItem) => void;
}

export const Articles: React.FC<ArticlesProps> = ({ openArticle }) => {
  const articles = POSTS_DATA.filter((p) => p.category === "article");

  return (
    <div className="space-y-12 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] to-[#080b11] py-16 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>Actor Guides, Podcasts &amp; Advice</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Industry Articles &amp; Insights
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Practical advice, interviews with casting directors, photoshoot preparation checklists, and career strategies by BVG Studios Mumbai.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post) => (
            <div
              key={post.id}
              onClick={() => openArticle(post)}
              className="group cursor-pointer rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-4 shadow-md hover:shadow-xl"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20">
                    Guide / Interview
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

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
