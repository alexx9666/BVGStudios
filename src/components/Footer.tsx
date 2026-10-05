import React from "react";
import {
  Camera,
  MapPin,
  Mail,
  Send,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ChevronRight,
  Shield,
  Sparkles
} from "lucide-react";
import { STUDIO_INFO } from "../data/siteData";

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[#080b11] border-t border-slate-800 text-slate-400">
      {/* Upper Pre-footer Banner */}
      <div className="bg-gradient-to-r from-amber-950/20 via-slate-900 to-amber-950/20 border-b border-slate-800/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Ready to Launch Your Acting & Modeling Career?</span>
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Get your professional modeling portfolio clicked at Mumbai's top budget photography studio with makeup, costumes, and audition guidance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <a
                href={STUDIO_INFO.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 transition-all hover:scale-105 active:scale-95 border border-sky-400/40"
              >
                <Send className="w-4 h-4" />
                <span>Chat on Telegram: t.me/HrBVG</span>
              </a>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{STUDIO_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <Camera className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-cinzel">BVG</span>
                <span className="text-lg font-light text-amber-500 uppercase ml-1">Studios</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Mumbai Portfolio Studio</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              BVG Studios is Mumbai’s trusted professional photography studio specializing in high-impact portfolios for Male Models, Female Models, Kid Models, and Character Artists since 2001.
            </p>
            <div className="text-xs text-amber-400/90 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
              {STUDIO_INFO.ladyPhotographerNote}
            </div>
            <div className="flex items-center space-x-3 pt-2 text-slate-400">
              <a href={STUDIO_INFO.socials.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={STUDIO_INFO.socials.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={STUDIO_INFO.socials.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={STUDIO_INFO.socials.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors" title="Twitter / X">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigate("/")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/portfolio-price")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" /> Portfolio Pricing Packages
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/gallery")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" /> Photo Gallery (69+ Shoots)
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/audition-info")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" /> Daily Auditions & Casting Calls
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/articles")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" /> Acting Articles & Guides
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/contact")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" /> Contact & Studio Location
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/disclaimer")} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" /> Disclaimer & Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portfolio Categories */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide border-b border-slate-800 pb-2">
              Portfolio Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigate("/male-models")} className="hover:text-amber-400 transition-colors flex items-center justify-between w-full group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400" /> Male Models Portfolio
                  </span>
                  <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">from ₹4,000</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/female-models")} className="hover:text-amber-400 transition-colors flex items-center justify-between w-full group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400" /> Female Models Portfolio
                  </span>
                  <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">from ₹4,000</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/kid-models")} className="hover:text-amber-400 transition-colors flex items-center justify-between w-full group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400" /> Kid Models Portfolio
                  </span>
                  <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">from ₹4,000</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/character-artists")} className="hover:text-amber-400 transition-colors flex items-center justify-between w-full group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400" /> Character Artists & Roles
                  </span>
                  <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">from ₹4,000</span>
                </button>
              </li>
              <li className="pt-2 text-xs text-slate-400 leading-relaxed">
                Includes In-House Makeup, Costume Styling Assistance, All Uncompressed Raw Files, and Free Casting Submission Advice.
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base tracking-wide border-b border-slate-800 pb-2">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <span className="text-slate-300">
                  {STUDIO_INFO.name}, {STUDIO_INFO.address}
                  <span className="block text-xs text-slate-400 mt-0.5">({STUDIO_INFO.landmark})</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Send className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={STUDIO_INFO.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
                >
                  Telegram: {STUDIO_INFO.telegramHandle} (t.me/HrBVG)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {STUDIO_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">{STUDIO_INFO.hours}</span>
              </div>

              <div className="pt-2 text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                ⚠️ <strong className="text-slate-200">Note:</strong> {STUDIO_INFO.appointmentNote}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#05070c] border-t border-slate-800/80 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            Copyright &copy; 2026 <strong className="text-slate-200">BVG Studios</strong> : Professional Modeling & Acting Portfolio Photography Studio Mumbai. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <button onClick={() => navigate("/disclaimer")} className="hover:text-slate-300 transition-colors">
              Disclaimer
            </button>
            <span>•</span>
            <button onClick={() => navigate("/portfolio-price")} className="hover:text-slate-300 transition-colors">
              Pricing Packages
            </button>
            <span>•</span>
            <button onClick={() => navigate("/contact")} className="hover:text-slate-300 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
