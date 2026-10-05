import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Send,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageSquare
} from "lucide-react";
import { STUDIO_INFO } from "../data/siteData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegramOrPhone: "",
    category: "Male Model Portfolio",
    packagePreference: "Standard (₹6,000/-)",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg("Please fill in your Name and Email address.");
      return;
    }
    setErrorMsg("");
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] to-[#080b11] py-16 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Prior Appointment Only</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact BVG Studios
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Contact BVG Studios – Portfolio Studio in Mumbai. For Modeling / Acting Portfolio at the most reasonable price with makeup for Male / Female / Kid Models and Character Actors for Film, TV, OTT Web series, and Advertising.
          </p>
        </div>
      </section>

      {/* 3 Contact Info Cards matching original site layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Telegram replacing mobile number */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-[#101724] to-slate-900 border border-slate-800 hover:border-sky-500/50 shadow-xl flex flex-col items-center text-center space-y-4 transition-all">
            <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Send className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Direct Messaging &amp; Bookings
              </span>
              <h3 className="text-xl font-bold text-white">
                Telegram Connect
              </h3>
              <p className="text-sm font-semibold text-sky-400">
                {STUDIO_INFO.telegramHandle} (t.me/HrBVG)
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fastest response for scheduling shoot dates, package inquiries, and look consultations.
            </p>
            <a
              href={STUDIO_INFO.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-md"
            >
              Open Telegram (t.me/HrBVG)
            </a>
          </div>

          {/* Card 2: Address */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-[#101724] to-slate-900 border border-slate-800 hover:border-amber-500/50 shadow-xl flex flex-col items-center text-center space-y-4 transition-all">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <MapPin className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Studio Location
              </span>
              <h3 className="text-xl font-bold text-white">
                Mumbai Studio
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                BVG Studios<br />
                222 / 1774, Upper floor, Road No 6,<br />
                Motilal Nagar Part 1, Goregaon West,<br />
                Mumbai, Maharashtra - 400104
              </p>
            </div>
            <div className="bg-slate-950/70 px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] text-amber-400 font-medium">
              We are near to the Goregaon West Metro Station.
            </div>
            <span className="text-[11px] text-slate-500">
              {STUDIO_INFO.hours}
            </span>
          </div>

          {/* Card 3: Email */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-[#101724] to-slate-900 border border-slate-800 hover:border-emerald-500/50 shadow-xl flex flex-col items-center text-center space-y-4 transition-all">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Mail className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Client Inquiries Email
              </span>
              <h3 className="text-xl font-bold text-white">
                Official Inquiries
              </h3>
              <p className="text-sm font-semibold text-emerald-400 break-all">
                {STUDIO_INFO.email}
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Send us your portfolio queries, production collaborations, or casting profile submissions.
            </p>
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="mt-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-all shadow-md"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Form & Studio Schedule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#0e141f] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <span>Send a Client Inquiry</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Inquiries are sent directly to <strong className="text-amber-400">{STUDIO_INFO.email}</strong> and our Telegram coordinator.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                  Your portfolio inquiry has been successfully received by <strong>BVG Studios</strong>. We will review your requirements and reach out via Telegram or Email ({formData.email}) shortly.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`${STUDIO_INFO.telegramLink}?text=${encodeURIComponent(`Hello BVG Studios, I just submitted an inquiry for "${formData.category}" (${formData.name}). Following up here!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Follow up on Telegram</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        telegramOrPhone: "",
                        category: "Male Model Portfolio",
                        packagePreference: "Standard (₹6,000/-)",
                        message: ""
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Telegram Username / Contact
                    </label>
                    <input
                      type="text"
                      value={formData.telegramOrPhone}
                      onChange={(e) => setFormData({ ...formData, telegramOrPhone: e.target.value })}
                      placeholder="@yourusername"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Portfolio Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="Male Model Portfolio">Male Model Portfolio</option>
                      <option value="Female Model Portfolio">Female Model Portfolio</option>
                      <option value="Kid Model Portfolio">Kid Model Portfolio</option>
                      <option value="Character Artist Portfolio">Character Artist Portfolio</option>
                      <option value="Indoor & Outdoor Campaign">Indoor &amp; Outdoor Campaign</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Budget / Package Preference
                  </label>
                  <select
                    value={formData.packagePreference}
                    onChange={(e) => setFormData({ ...formData, packagePreference: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Starter (₹4,000/-)">Starter Pack – ₹4,000/- (15 Photos)</option>
                    <option value="Standard (₹6,000/-)">Standard Professional – ₹6,000/- (25 Photos)</option>
                    <option value="Elite Pro (₹10,500 - ₹11,500/-)">Industry Elite Pro – ₹10,500 to ₹11,500/- (36 Photos)</option>
                    <option value="Studio + Outdoor (₹19,500 - ₹30,000/-)">Indoor + Outdoor Campaign – ₹19,500 to ₹30,000/-</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Your Message / Questions / Preferred Date
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your experience level, goals, or any specific getups you want to try..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Submit Client Inquiry to BVG Studios
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    Inquiries are sent directly to bvgstudios@proton.me. Prior appointment is mandatory for studio visits.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right side: Studio Guide & FAQs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e141f] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Studio Timing &amp; Visit Policy</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <p>
                  <strong>Working Hours:</strong> 10:00 AM – 6:00 PM Everyday (Monday through Sunday).
                </p>
                <p>
                  <strong>Appointments:</strong> In order to provide each artist individual attention with lighting, styling, and makeup, studio entry is strictly by prior booking.
                </p>
                <p>
                  <strong>Lady Photographer:</strong> Female models and children can request our lady photographer during appointment booking at no extra fee.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  Direct Inquiries
                </span>
                <div className="flex flex-col gap-2 text-xs">
                  <a
                    href={STUDIO_INFO.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram: {STUDIO_INFO.telegramHandle} (t.me/HrBVG)</span>
                  </a>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email: {STUDIO_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                What to Bring to Your Shoot
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span>2–4 of your favorite personal outfits if you have specific preferences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span>A pen drive or laptop if you want to take your raw photos immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span>Hair washed and skin cleansed with no heavy base makeup before arrival.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Maps for Goregaon West */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
          <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4 text-rose-500" />
              BVG Studios – Motilal Nagar Part 1, Road No 6, Goregaon West, Mumbai
            </span>
            <span className="text-slate-400 hidden sm:inline">Near Goregaon West Metro Station</span>
          </div>
          <div className="w-full h-80 sm:h-96">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=BVG%20Studios%20Motilal%20Nagar%20Part%201%20Road%20No%206%20Goregaon%20West%20Mumbai&t=m&z=15&output=embed&iwloc=near"
              title="BVG Studios Goregaon West, Mumbai"
              aria-label="BVG Studios Goregaon West, Mumbai location map"
              className="w-full h-full border-0 grayscale-[20%] contrast-[110%]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
