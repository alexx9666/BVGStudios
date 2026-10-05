import React, { useState, useEffect } from "react";
import {
  Camera,
  Sparkles,
  Send,
  Mail,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
  Film,
  Award,
  Clock,
  MapPin,
  ExternalLink,
  ShieldCheck,
  ChevronLeft
} from "lucide-react";
import { STUDIO_INFO, PRICING_PACKAGES, GALLERY_PHOTOS, POSTS_DATA, GalleryPhoto } from "../data/siteData";

interface HomeProps {
  navigate: (path: string) => void;
  openLightbox: (photo: GalleryPhoto) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate, openLightbox }) => {
  // Hero carousel images
  const heroImages = GALLERY_PHOTOS.slice(0, 10);
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const categories = [
    {
      title: "Male Models",
      desc: "Starter, Fashion & Elite Actor Portfolios",
      price: "From ₹4,000/-",
      image: "https://studiofm.in/wp-content/uploads/2025/02/male.jpg",
      path: "/male-models",
      tag: "Top Rated"
    },
    {
      title: "Female Models",
      desc: "Commercial, Glamour & TV. Lady Photographer available.",
      price: "From ₹4,000/-",
      image: "https://studiofm.in/wp-content/uploads/2025/02/female.jpg",
      path: "/female-models",
      tag: "Lady Photographer"
    },
    {
      title: "Kid Models",
      desc: "Child Models & TV Commercial Portfolios",
      price: "From ₹4,000/-",
      image: "https://studiofm.in/wp-content/uploads/2025/02/kid.jpg",
      path: "/kid-models",
      tag: "Ad Shoots"
    },
    {
      title: "Character Artists",
      desc: "Supporting Roles, Expressions & OTT Series Looks",
      price: "From ₹4,000/-",
      image: "https://studiofm.in/wp-content/uploads/2025/02/artist.jpg",
      path: "/character-artists",
      tag: "OTT & Web Shows"
    }
  ];

  const auditionPosts = POSTS_DATA.filter((p) => p.category === "audition").slice(0, 4);

  const testimonials = [
    {
      name: "Adil Khan",
      role: "Actor & Model",
      text: "Getting my portfolio done at BVG Studios was the best decision for my acting career. The team understands casting lighting and camera angles perfectly. Got my first big web show call within 3 weeks!",
      rating: 5,
    },
    {
      name: "Ashiya Qazi",
      role: "Television & Print Model",
      text: "The lady photographer and in-house makeup team made me feel completely relaxed. The poses, expressions, and costume changes were directed with immense patience. Superb quality and genuine guidance!",
      rating: 5,
    },
    {
      name: "Hemlata S.",
      role: "Character Actress",
      text: "Finding a studio that understands character actor profiles is rare. BVG Studios clicked diverse getups and expressions that casting directors immediately took notice of. Outstanding experience!",
      rating: 5,
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] via-[#0b0f17] to-[#080b11] pt-12 pb-20 border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold shadow-inner">
                <Sparkles className="w-4 h-4" />
                <span>Premier Photography Studio in Mumbai (Since 2001)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Modeling & Acting <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Portfolio Shoot
                </span>
              </h1>

              <div className="text-lg sm:text-xl font-medium text-slate-300">
                Male • Female • Kids • Character Artists
              </div>

              <div className="inline-block p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl max-w-xl">
                <p className="text-sm sm:text-base text-slate-200 font-medium">
                  Price starting from <strong className="text-amber-400 font-bold text-lg">₹4,000/-</strong> with Makeup to <strong className="text-amber-400 font-bold text-lg">₹10,500/-</strong> in Mumbai, Goregaon West.
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  All packages include professional makeup, free costume usage, all raw high-res photos & audition guidance. No hidden charges.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => navigate("/portfolio-price")}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  <span>View Pricing Packages</span>
                </button>

                <a
                  href={STUDIO_INFO.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 border border-sky-400/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram: t.me/HrBVG</span>
                </a>

                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all border border-slate-700 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
              </div>

              {/* Highlights row */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-left">
                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800">
                  <div className="text-amber-400 font-bold text-base sm:text-lg font-cinzel">25+ Yrs</div>
                  <div className="text-[11px] text-slate-400">Industry Excellence</div>
                </div>
                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800">
                  <div className="text-amber-400 font-bold text-base sm:text-lg font-cinzel">Lady Photo</div>
                  <div className="text-[11px] text-slate-400">For Females & Kids</div>
                </div>
                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800">
                  <div className="text-amber-400 font-bold text-base sm:text-lg font-cinzel">100% Raw</div>
                  <div className="text-[11px] text-slate-400">Pictures Provided</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Carousel */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow Backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 to-sky-500/20 rounded-2xl blur-xl" />

                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-neutral-950 aspect-[3/4]">
                  {heroImages.map((img, idx) => (
                    <img
                      key={img.id}
                      src={img.url}
                      alt={img.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        idx === currentHeroIdx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                      }`}
                    />
                  ))}

                  {/* Sleek BVG Studios Watermark Overlay - Replacing old website overlay */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/75 backdrop-blur-md rounded-lg border border-amber-500/40 flex items-center gap-1.5 shadow-lg">
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
                      BVG Studios
                    </span>
                  </div>

                  {/* Bottom Info Pill */}
                  <div className="absolute inset-x-4 bottom-4 p-4 rounded-xl bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                        Professional Portfolio Shoot
                      </p>
                      <p className="text-sm font-bold text-white">
                        {heroImages[currentHeroIdx]?.title || "BVG Studios Mumbai"}
                      </p>
                    </div>
                    <button
                      onClick={() => openLightbox(heroImages[currentHeroIdx])}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-colors shadow-md"
                    >
                      View Full
                    </button>
                  </div>

                  {/* Navigation dots */}
                  <div className="absolute bottom-20 inset-x-0 flex justify-center gap-1.5">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentHeroIdx(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === currentHeroIdx ? "w-6 bg-amber-400" : "w-1.5 bg-white/40"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Category Showcase Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Portfolio Categories
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Choose your path. We specialize in tailored portfolio shoots designed to showcase your screen presence, acting expressions, and photogenic versatility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => navigate(cat.path)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e131d] via-[#0e131d]/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-400 text-[11px] font-bold border border-amber-500/30">
                  {cat.tag}
                </div>

                {/* BVG Studios Watermark Overlay */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-slate-300 border border-white/10 font-cinzel">
                  BVG Studios
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-semibold text-amber-400 block mb-0.5">
                    {cat.price}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#0d121b]">
                <p className="text-xs text-slate-400 line-clamp-2">
                  {cat.desc}
                </p>
                <div className="flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300 pt-2 border-t border-slate-800/80">
                  <span>Explore Portfolio & Packages</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About BVG Studios Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0e1420] to-slate-900 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                <Award className="w-4 h-4" />
                <span>Established 2001 in Mumbai</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                About BVG Studios <br />
                <span className="text-slate-400 text-2xl sm:text-3xl font-normal">
                  Goregaon West, Mumbai
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                BVG Studios has been creating stunning actor and model portfolios for over <strong>25 years (since 2001)</strong>. Located in Goregaon West, Mumbai, near the Metro Station, we are renowned for our expertise in indoor studio lighting and outdoor location photography.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We specialize in capturing high-quality portfolios for <strong>men, women, children, and character artists</strong>. For female clients and kids, we also provide a professional <strong>lady photographer</strong> to guarantee absolute comfort, security, and ease during the photoshoot.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Why Our Clients Succeed
                </div>
                <p className="text-xs text-slate-400">
                  Many aspiring models we have photographed over the decades have gone on to star in prime television serials, OTT series on Netflix, ZEE5, MX Player, commercial advertisements, and Bollywood films. We don't just click pictures—we shape your screen resume.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all"
                >
                  Visit Our Studio
                </button>
                <a
                  href={STUDIO_INFO.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 font-semibold text-sm border border-sky-500/30 transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Chat on Telegram: {STUDIO_INFO.telegramHandle}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[3/4] relative group">
                  <img
                    src="https://studiofm.in/wp-content/uploads/2025/02/DSC00591-e1742094081398.jpg"
                    alt="Model portfolio at BVG Studios"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-[9px] text-amber-400 font-cinzel">
                    BVG Studios
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-2xl font-black text-amber-400 font-cinzel">100%</span>
                  <p className="text-xs text-slate-400 mt-1">Raw Uncut Photos Given</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-2xl font-black text-amber-400 font-cinzel">0</span>
                  <p className="text-xs text-slate-400 mt-1">Hidden Costs</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[3/4] relative group">
                  <img
                    src="https://studiofm.in/wp-content/uploads/2025/02/3K4A3861-e1742212993722.jpg"
                    alt="Male model at BVG Studios"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/70 text-[9px] text-amber-400 font-cinzel">
                    BVG Studios
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BVG Studios Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose BVG Studios?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need for a breakthrough portfolio under one roof at the most honest, budget-friendly pricing in Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Camera className="w-6 h-6 text-amber-400" />,
              title: "High-End DSLR & Lighting",
              desc: "Shot on top-tier cameras with international studio lighting setups, calibrated specifically for film and advertising screen standards."
            },
            {
              icon: <Sparkles className="w-6 h-6 text-amber-400" />,
              title: "Makeup & Hair Stylist Included",
              desc: "Professional industry makeup artist and hair stylist in all packages. Camera-friendly makeup that enhances your natural facial features."
            },
            {
              icon: <Users className="w-6 h-6 text-amber-400" />,
              title: "Costumes Available Free",
              desc: "Complimentary selection of western, traditional, and smart casual costumes available at the studio to wear during the shoot."
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
              title: "Lady Photographer for Comfort",
              desc: "For female models and young children, we offer a dedicated lady photographer to provide a safe, comfortable, and respectful environment."
            },
            {
              icon: <Award className="w-6 h-6 text-amber-400" />,
              title: "All Raw Pictures Handed Over",
              desc: "We don't hold back your photos. You receive every single raw uncut picture taken during the session on your drive or pen drive."
            },
            {
              icon: <Film className="w-6 h-6 text-amber-400" />,
              title: "Free Audition & Casting Info",
              desc: "Receive ongoing verified audition updates for TV serials, OTT series, digital advertisements, and films through our casting network."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Pricing Packages Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Honest & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Popular Portfolio Packages
            </h2>
          </div>
          <button
            onClick={() => navigate("/portfolio-price")}
            className="text-amber-400 hover:text-amber-300 font-semibold text-sm flex items-center gap-1 group self-start md:self-auto"
          >
            <span>See All Packages & Custom Shoots</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PACKAGES.filter((p) => ["male-basic", "female-standard", "kid-standard", "character-basic"].includes(p.id)).map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-slate-900 via-[#131b29] to-slate-900 border-2 border-amber-500/60 shadow-xl shadow-amber-500/10 relative"
                  : "bg-slate-900/70 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-500 text-black text-[11px] font-extrabold uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    {pkg.category} Portfolio
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{pkg.name}</h3>
                </div>

                <div className="pt-2">
                  <span className="text-3xl font-black text-amber-400 font-cinzel">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">All-inclusive package</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  {pkg.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
                <a
                  href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent(`Hello BVG Studios, I want to book the "${pkg.name}" (${pkg.price}). Please share appointment dates.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Book via Telegram</span>
                </a>
                <button
                  onClick={() => navigate("/portfolio-price")}
                  className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                >
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Photo Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Live Studio Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Recent Studio Shoots
            </h2>
          </div>
          <button
            onClick={() => navigate("/gallery")}
            className="text-amber-400 hover:text-amber-300 font-semibold text-sm flex items-center gap-1 group self-start md:self-auto"
          >
            <span>View All 69+ Shoots in Gallery</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_PHOTOS.slice(0, 12).map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer hover:border-amber-500/60 shadow-lg transition-all"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2.5">
                {/* Clean BVG Studios watermark overlay */}
                <span className="self-end px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-amber-400 font-bold font-cinzel">
                  BVG Studios
                </span>
                <span className="text-[11px] font-semibold text-white truncate">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Auditions / Casting Calls Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0e141f] rounded-3xl border border-slate-800 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 mb-2">
                <Film className="w-3.5 h-3.5" /> Open Casting Calls
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Daily Audition Updates
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Updated regularly for web series, television shows, movies & digital campaigns.
              </p>
            </div>
            <button
              onClick={() => navigate("/audition-info")}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors self-start md:self-auto border border-slate-700"
            >
              View All 23+ Casting Notices
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {auditionPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate("/audition-info")}
                className="cursor-pointer p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                    <span className="text-amber-400 font-medium">Audition Call</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white hover:text-amber-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs font-semibold text-sky-400">
                  <span>View Details & Requirements</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Real Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Actors & Models Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 p-8 sm:p-12 text-black shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Book Your Mumbai Portfolio Shoot Today
            </h2>
            <p className="text-sm sm:text-base font-medium text-black/80">
              Studio visits by prior appointment only. Contact our team directly on Telegram or Email to confirm packages, dates, and getup suggestions.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <a
                href={STUDIO_INFO.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-black text-white hover:bg-neutral-900 font-bold text-sm shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Message on Telegram: t.me/HrBVG</span>
              </a>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="px-6 py-3 rounded-xl bg-white/90 hover:bg-white text-black font-bold text-sm shadow-md flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                <span>Email: {STUDIO_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
