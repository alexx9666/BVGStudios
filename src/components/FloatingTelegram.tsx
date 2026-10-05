import React, { useState, useEffect } from "react";
import { Send, ArrowUp } from "lucide-react";
import { STUDIO_INFO } from "../data/siteData";

export const FloatingTelegram: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Pulsing Telegram Action Button */}
      <a
        href={STUDIO_INFO.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white shadow-2xl shadow-sky-500/40 hover:shadow-sky-500/60 border border-sky-300/40 transition-all duration-300 hover:scale-105 active:scale-95"
        title="Chat with BVG Studios on Telegram"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
        </span>
        <Send className="w-5 h-5 text-white" />
        <span className="font-semibold text-sm tracking-wide hidden sm:inline">
          Telegram: {STUDIO_INFO.telegramHandle}
        </span>
      </a>
    </div>
  );
};
