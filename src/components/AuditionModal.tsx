import React from "react";
import { X, Send, Calendar, Film, ShieldCheck, Mail } from "lucide-react";
import { PostItem, STUDIO_INFO } from "../data/siteData";

interface AuditionModalProps {
  post: PostItem | null;
  onClose: () => void;
}

export const AuditionModal: React.FC<AuditionModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0f141e] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Film className="w-3.5 h-3.5" />
              Audition & Casting Notice
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
              {post.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Posted: {post.date}
              </span>
              <span>•</span>
              <span className="text-amber-400">BVG Studios Verified Feed</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Content */}
        <div className="py-6 text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 max-h-[55vh] overflow-y-auto pr-2">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-invert max-w-none text-slate-300 space-y-3"
          />

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-2 mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Casting Application Advisory
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              Audition notices are curated from industry casting coordinators. Never pay money for any audition or role. Always carry a professional, retouched portfolio and comp card from a verified studio.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Need a fresh portfolio for this role? Connect with BVG Studios.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent(`Hello BVG Studios, I am inquiring about the audition: "${post.title}". Please guide me with portfolio and casting.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 hover:from-sky-500 hover:to-sky-400 transition-all border border-sky-400/30"
            >
              <Send className="w-4 h-4" />
              <span>Inquire via Telegram</span>
            </a>
            <a
              href={`mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent(`Audition Inquiry: ${post.title}`)}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
