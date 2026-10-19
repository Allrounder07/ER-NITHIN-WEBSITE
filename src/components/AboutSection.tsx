import React from 'react';
import { 
  UserCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  HeartHandshake, 
  GraduationCap,
  Zap,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-slate-950 relative border-t border-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-700/50 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-yellow-400" />
            <span>{language === 'en' ? 'ENGINEER BEHIND THE BRAND' : 'ಎಂಜಿನಿಯರ್ ಪರಿಚಯ'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Meet <span className="text-yellow-400">ER NITHIN</span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {language === 'en'
              ? 'Software Engineer • Web Developer • Digital Entrepreneur serving Santhehalli, Malur, Kolar & Global Clients.'
              : 'ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರ್, ವೆಬ್ ಡೆವಲಪರ್ ಹಾಗೂ ಡಿಜಿಟಲ್ ಸೇವೆಗಳ ನಂಬಿಕಾರ್ಹ ಮಾರ್ಗದರ್ಶಿ.'}
          </p>
        </div>

        {/* Profile Card & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Stylized Engineer Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-sky-950/80 via-slate-900 to-slate-950 border-2 border-sky-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden group">
              
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Profile Avatar / Badge */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-sky-600 via-blue-700 to-indigo-900 border-4 border-yellow-400/80 shadow-xl flex items-center justify-center text-white">
                    <Code2 className="w-14 h-14 text-yellow-300 stroke-[2.2]" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-yellow-400 text-slate-950 font-black text-xs font-mono shadow">
                    ER NITHIN
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white font-heading">
                  ER NITHIN
                </h3>
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase mt-1">
                  Software Engineer & Web Developer
                </span>
                
                <div className="mt-2 text-xs text-yellow-300 italic font-mono bg-yellow-400/10 px-3 py-1 rounded-md border border-yellow-400/20">
                  "Your Needs • Our Digital Solutions"
                </div>

                {/* Location Pill */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Santhehalli Village, Malur Taluk, Kolar Dist – 563130</span>
                </div>
              </div>

              {/* Key Credentials Badges */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct developer communication — Zero agency runaround</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-Stack Mastery: React, Python, PostgreSQL, MySQL</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Local Community Champion for Land & Digital Records</span>
                </div>
              </div>

              {/* Stylized ER Nithin Signature */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">Verified Founder</span>
                <span className="text-xl font-bold italic text-yellow-400 font-serif tracking-wide">
                  ~ ER Nithin
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Mission, Values & Technical Focus */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono">
                THE STORY & VISION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                {language === 'en'
                  ? 'High-Tech Engineering Rooted in Local Community Trust'
                  : 'ಉನ್ನತ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸ್ಥಳೀಯ ಜನರ ವಿಶ್ವಾಸ'}
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'en' ? (
                <>
                  Founded by <strong>ER Nithin</strong>, our mission is straightforward: empower businesses, retail shops, schools, farmers, and students with modern digital infrastructure. Whether you need a high-converting e-commerce web platform or immediate assistance retrieving an urgent Bhoomi Pahani or Kaveri Encumbrance Certificate, we treat every requirement with rigorous engineering precision and genuine personal care.
                </>
              ) : (
                <>
                  <strong>ಇಆರ್ ನಿತಿನ್</strong> ಅವರಿಂದ ಸ್ಥಾಪಿತವಾದ ಈ ಸಂಸ್ಥೆಯು ಸಂತೆಹಳ್ಳಿ, ಮಾಲೂರು, ಕೋಲಾರ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಗ್ರಾಹಕರಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಡಿಜಿಟಲ್ ಪರಿಹಾರಗಳನ್ನು ನೀಡಲು ಬದ್ಧವಾಗಿದೆ. ಉದ್ಯಮಿಗಳಿಗೆ ಅತ್ಯಾಧುನಿಕ ವೆಬ್‌ಸೈಟ್‌ಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರಾಜೆಕ್ಟ್ ನೆರವು ಹಾಗೂ ರೈತರಿಗೆ ಜಮೀನು ದಾಖಲೆಗಳ ವೇಗದ ನೆರವನ್ನು ಒಂದೇ ಸೂರಿನಡಿ ಒದಗಿಸಲಾಗುತ್ತಿದೆ.
                </>
              )}
            </p>

            {/* Core Values 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-sky-400 font-bold text-sm">
                  <Terminal className="w-4 h-4 text-yellow-400" />
                  <span>Clean Engineering</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No messy page-builders that break. We craft optimized, responsive code with React, Node.js, and relational databases.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-sky-400 font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-yellow-400" />
                  <span>Direct Accessibility</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pick up the phone and speak directly with Nithin. We explain technical concepts simply in English and Kannada.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-sky-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-yellow-400" />
                  <span>Fair, Honest Pricing</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clear, upfront estimates tailored for startups, family businesses, and students with no hidden recurring shocks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-sky-400 font-bold text-sm">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Rapid Delivery</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Same-day delivery for digital certificates and prints; clear milestone commitments for custom software apps.
                </p>
              </div>
            </div>

            {/* Direct Connect Callout */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Connect on WhatsApp (7259141830)</span>
              </a>

              <a
                href="tel:7259141830"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Call: 7259141830 / 7899956302</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
