import React from "react";
import { Shield, Sparkles, Send, Mail } from "lucide-react";
import { STUDIO_INFO } from "../data/siteData";

export const Disclaimer: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0e131d] to-[#080b11] py-16 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Legal Notice &amp; Terms</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Studio Disclaimer &amp; Terms
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Contact BVG Studios for professional Modeling &amp; Acting Portfolio photography in Mumbai. We are located at Motilal Nagar Part 1, Goregaon West, Mumbai.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0e141f] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 text-sm text-slate-300 leading-relaxed shadow-xl">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white">General Information</h2>
            <p>
              The information, services, and content provided on <strong>BVG Studios</strong> are for general informational, educational, and promotional purposes only. While we strive to ensure absolute accuracy and high standard deliverables, we make no guarantees about the completeness, reliability, or suitability of external audition links or third-party casting notices.
            </p>
          </div>

          <div className="space-y-2 border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white">Photography &amp; Portfolio Services</h2>
            <p>
              All photographs, images, digital media, and written content displayed on this website are the intellectual property of <strong>BVG Studios</strong> and its photographers. Unauthorized reproduction, re-hosting, scraping, or distribution of any photograph without express written permission is strictly prohibited.
            </p>
            <p>
              Individual results may vary. We strive our utmost to capture high-quality photographs based on professional film and modeling standards. Since photography and aesthetic choices are creative, we work collaboratively with each client during the shoot to verify angles, lighting, and expressions on the monitor.
            </p>
          </div>

          <div className="space-y-2 border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white">No Job or Casting Guarantees</h2>
            <p>
              BVG Studios is a specialized portfolio photography studio. We provide photography, makeup, styling guidance, and free daily audition information as a complimentary value-add for our clients. <strong>BVG Studios does not guarantee job placement, film roles, casting selection, or acting contracts.</strong>
            </p>
            <p>
              Selection for any modeling assignment, commercial advertisement, TV show, or film is solely at the discretion of the respective producers, directors, and casting directors.
            </p>
          </div>

          <div className="space-y-2 border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white">Third-Party Links &amp; Auditions</h2>
            <p>
              Audition postings displayed on our platform are compiled from public casting notices circulated by casting directors and production coordinators across Mumbai. BVG Studios is not affiliated with or responsible for external third-party coordinators. We strongly advise artists to never pay any money for auditions.
            </p>
          </div>

          <div className="space-y-2 border-t border-slate-800/80 pt-6">
            <h2 className="text-xl font-bold text-white">Client Responsibility &amp; Appointments</h2>
            <p>
              Clients are responsible for their personal belongings, wardrobe, and jewelry brought to the studio premises. To maintain a quiet, focused shooting environment, studio visits are strictly by prior appointment only.
            </p>
          </div>

          <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              For inquiries regarding terms, licensing, or appointments:
            </div>
            <div className="flex items-center gap-3">
              <a
                href={STUDIO_INFO.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 font-semibold"
              >
                Telegram: {STUDIO_INFO.telegramHandle}
              </a>
              <span>•</span>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                {STUDIO_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
