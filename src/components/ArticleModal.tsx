import React from "react";
import { X, Calendar, BookOpen, Send, Mail } from "lucide-react";
import { PostItem, STUDIO_INFO } from "../data/siteData";

interface ArticleModalProps {
  post: PostItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0f141e] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              Industry Guide & Article
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
              {post.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Published: {post.date}
              </span>
              <span>•</span>
              <span className="text-slate-300">By BVG Studios Mumbai Editorial Team</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-invert max-w-none text-slate-300 space-y-3"
          />
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Have questions about preparing for your acting or modeling shoot?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={STUDIO_INFO.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Connect: t.me/HrBVG</span>
            </a>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all border border-slate-700"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Email Studio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
