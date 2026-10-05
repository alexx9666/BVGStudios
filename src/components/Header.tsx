import React, { useState, useEffect } from "react";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Sparkles,
  Camera
} from "lucide-react";
import { STUDIO_INFO } from "../data/siteData";

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioLinks = [
    { label: "Male Models", path: "/male-models", desc: "Starter to Elite Portfolios" },
    { label: "Female Models", path: "/female-models", desc: "Lady Photographer Available" },
    { label: "Kid Models", path: "/kid-models", desc: "Child Actors & Ad Shoots" },
    { label: "Character Artists", path: "/character-artists", desc: "Supporting Actors & OTT Looks" },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setPortfolioDropdownOpen(false);
  };

  const isPortfolioActive = [
    "/male-models",
    "/female-models",
    "/kid-models",
    "/character-artists",
  ].includes(currentPath);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0c1017]/95 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      {/* Top Notification / Contact Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-[#0b0e14] via-[#121824] to-[#0b0e14] border-b border-slate-800/60 text-xs text-slate-300 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={STUDIO_INFO.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram: <strong className="text-white">{STUDIO_INFO.telegramHandle}</strong> (Quick Bookings)</span>
            </a>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{STUDIO_INFO.email}</span>
            </a>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open 10 AM - 6 PM (Everyday)</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400" /> Goregaon West, Mumbai
            </span>
            <div className="h-3 w-px bg-slate-700" />
            <div className="flex items-center space-x-3 text-slate-400">
              <a href={STUDIO_INFO.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" title="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href={STUDIO_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors" title="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href={STUDIO_INFO.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors" title="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href={STUDIO_INFO.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors" title="Twitter / X">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 via-slate-800 to-amber-950/30 border border-amber-500/30 shadow-lg shadow-amber-500/10 group-hover:border-amber-400/60 transition-all duration-300">
              <Camera className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors font-cinzel">
                  BVG
                </span>
                <span className="text-xl font-light tracking-widest text-amber-500 uppercase">
                  Studios
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                Portfolio Studio • Mumbai
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => handleNavClick("/")}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPath === "/"
                  ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Home
            </button>

            {/* Portfolios Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPortfolioDropdownOpen(true)}
              onMouseLeave={() => setPortfolioDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isPortfolioActive
                    ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
                onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
              >
                <span>Portfolios</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${portfolioDropdownOpen ? "rotate-180 text-amber-400" : ""}`} />
              </button>

              {portfolioDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-[#121722] rounded-xl border border-slate-700/80 shadow-2xl p-2 backdrop-blur-xl">
                    {portfolioLinks.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full text-left p-2.5 rounded-lg transition-all flex flex-col ${
                          currentPath === item.path
                            ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                            : "hover:bg-slate-800/80 text-slate-200"
                        }`}
                      >
                        <span className="font-semibold text-sm">{item.label}</span>
                        <span className="text-xs text-slate-400 mt-0.5">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick("/portfolio-price")}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPath === "/portfolio-price"
                  ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick("/gallery")}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPath === "/gallery"
                  ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => handleNavClick("/audition-info")}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPath === "/audition-info"
                  ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Audition Info
            </button>

            <button
              onClick={() => handleNavClick("/articles")}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPath === "/articles"
                  ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Articles
            </button>

            <button
              onClick={() => handleNavClick("/contact")}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPath === "/contact"
                  ? "text-amber-400 bg-amber-500/10 border border-amber-500/20 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Action Button: Telegram Bookings */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={STUDIO_INFO.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white text-sm font-semibold shadow-lg shadow-sky-500/20 hover:from-sky-500 hover:to-sky-400 hover:scale-105 active:scale-95 transition-all duration-200 border border-sky-400/30"
            >
              <Send className="w-4 h-4" />
              <span>t.me/HrBVG</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={STUDIO_INFO.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 hover:bg-sky-500/30 transition-colors"
              title="Chat on Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1017] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick("/")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === "/"
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                : "text-slate-200 hover:bg-slate-800"
            }`}
          >
            Home
          </button>

          {/* Mobile Portfolios Submenu */}
          <div className="bg-slate-900/60 rounded-xl p-2 border border-slate-800">
            <div className="px-3 py-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Portfolios
            </div>
            {portfolioLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm flex justify-between items-center ${
                  currentPath === item.path
                    ? "bg-amber-500/20 text-amber-300 font-semibold"
                    : "text-slate-300 hover:bg-slate-800/80"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[11px] text-slate-500">₹4000+</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("/portfolio-price")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === "/portfolio-price"
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                : "text-slate-200 hover:bg-slate-800"
            }`}
          >
            Portfolio Pricing
          </button>

          <button
            onClick={() => handleNavClick("/gallery")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === "/gallery"
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                : "text-slate-200 hover:bg-slate-800"
            }`}
          >
            Gallery
          </button>

          <button
            onClick={() => handleNavClick("/audition-info")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === "/audition-info"
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                : "text-slate-200 hover:bg-slate-800"
            }`}
          >
            Audition Info & Updates
          </button>

          <button
            onClick={() => handleNavClick("/articles")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === "/articles"
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                : "text-slate-200 hover:bg-slate-800"
            }`}
          >
            Articles & Guides
          </button>

          <button
            onClick={() => handleNavClick("/contact")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === "/contact"
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                : "text-slate-200 hover:bg-slate-800"
            }`}
          >
            Contact Us
          </button>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={STUDIO_INFO.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Connect on Telegram: t.me/HrBVG</span>
            </a>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium text-sm hover:text-white border border-slate-700"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{STUDIO_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
