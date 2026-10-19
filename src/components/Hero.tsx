import React from 'react';
import { 
  Code2, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Laptop, 
  FileText, 
  Printer, 
  GraduationCap, 
  Zap, 
  MessageSquare,
  FileSpreadsheet,
  MapPin
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  language: Language;
  onOpenQuote: () => void;
  onSelectDigitalDocHelp: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenQuote,
  onSelectDigitalDocHelp,
}) => {
  const t = translations[language];

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Background cyber grid & radiant glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-600/40 text-sky-300 text-xs sm:text-sm font-medium shadow-lg shadow-sky-950/50 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span className="font-semibold text-slate-100">{t.heroBadge}</span>
          </div>
        </div>

        {/* Main Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Message & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Catchy Subheader from flyer */}
            <div className="inline-block">
              <span className="text-yellow-400 font-bold tracking-wider text-sm sm:text-base uppercase bg-yellow-400/10 px-3 py-1 rounded-md border border-yellow-400/20">
                ⚡ {t.roleTitle}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight font-heading">
              {language === 'en' ? (
                <>
                  <span className="text-sky-400">Small Ideas...</span>{' '}
                  <span className="text-yellow-400">Big Websites...</span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
                    Let's Build Your Dream Together.
                  </span>
                </>
              ) : (
                <>
                  <span className="text-sky-400">ಚಿಕ್ಕ ಕಲ್ಪನೆಗಳು...</span>{' '}
                  <span className="text-yellow-400">ದೊಡ್ಡ ವೆಬ್‌ಸೈಟ್‌ಗಳು...</span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
                    ನಿಮ್ಮ ಕನಸನ್ನು ಒಟ್ಟಿಗೆ ನಿರ್ಮಿಸೋಣ...
                  </span>
                </>
              )}
            </h1>

            {/* Core Equation Box matching the banner */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border border-sky-400/40 shadow-md">
              <div className="p-1 rounded bg-yellow-400/20 text-yellow-400">
                <Zap className="w-4 h-4 fill-yellow-400" />
              </div>
              <p className="text-sm sm:text-base font-bold text-yellow-300 font-mono">
                {t.equation}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.heroDesc}
            </p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Responsive & Modern</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>E-Commerce & UPI</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>MySQL & PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>RTC / Pani & Bhoomi</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kaveri EC Assistance</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Color Xerox & Prints</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>{language === 'en' ? 'Calculate Website Cost' : 'ವೆಬ್‌ಸೈಟ್ ದರ ಲೆಕ್ಕಾಚಾರ'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#digital-services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-950 hover:bg-sky-900 text-sky-200 border border-sky-500/40 font-semibold text-sm sm:text-base transition-all"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>{language === 'en' ? 'Land Records & Digital Services' : 'ಪಹಣಿ & ಡಿಜಿಟಲ್ ಸೇವೆಗಳು'}</span>
              </a>

              <a
                href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base shadow-md shadow-emerald-900/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp (7259141830)</span>
              </a>
            </div>

            {/* Quick Interactive Service Shortcuts */}
            <div className="pt-2 text-left">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 font-semibold">
                ⚡ {language === 'en' ? 'Quick Jump to Service:' : 'ತ್ವರಿತವಾಗಿ ಸೇವೆಗೆ ಹೋಗಿ:'}
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { label: '💻 Custom Websites', href: '#web-dev' },
                  { label: '🛒 E-Commerce Stores', href: '#web-dev' },
                  { label: '📜 Bhoomi RTC / Pani', href: '#digital-services' },
                  { label: '🏡 Kaveri EC', href: '#digital-services' },
                  { label: '🖨️ WhatsApp Xerox', href: '#digital-services' },
                  { label: '🎓 Project Work', href: '#digital-services' },
                  { label: '⭐ Client Reviews', href: '#testimonials' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-sky-950 text-slate-300 hover:text-yellow-300 border border-slate-800 hover:border-sky-500/50 transition-all font-medium whitespace-nowrap active:scale-95"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Branded Digital Hub & Services Overview Card */}
          <div className="lg:col-span-5 space-y-3">
            <div className="relative rounded-3xl bg-slate-900/95 border-2 border-sky-500/40 shadow-2xl shadow-sky-950/70 overflow-hidden p-5 sm:p-6 backdrop-blur-xl">
              
              {/* Top Card Brand Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-sky-800/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-sky-600 to-indigo-900 border border-sky-400 flex items-center justify-center text-white shadow-md">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black tracking-wider text-sky-400 font-mono">ER</span>
                      <span className="text-sm font-black text-white font-heading">NITHIN</span>
                      <span className="text-sm font-black text-yellow-400 font-heading">DIGITAL SERVICES</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block font-mono">
                      Your Needs • Our Digital Solutions
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open Center</span>
                </div>
              </div>

              {/* Yellow Subheader Bar matching the banner */}
              <div className="my-3 py-1 px-3 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-center">
                <span className="text-[11px] font-bold text-yellow-300 uppercase tracking-wider font-mono">
                  WEB DEVELOPER | SOFTWARE ENGINEER | DIGITAL SERVICES
                </span>
              </div>

              {/* Two Service Blocks */}
              <div className="space-y-3">
                
                {/* 1. Website & Software Block */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-sky-400" />
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                        Website & Software Development
                      </h4>
                    </div>
                    <span className="text-[10px] text-sky-400 font-mono font-semibold">Custom Code</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Responsive & Modern Website Design</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Business & E-Commerce Online Stores</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Database Integration (MySQL, PostgreSQL)</span>
                    </li>
                  </ul>
                  <div className="pt-1 flex flex-wrap gap-1">
                    {['HTML5', 'CSS3', 'JS', 'React', 'Python', 'MySQL'].map((tech) => (
                      <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Digital Services & Bhoomi Records Block */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-yellow-400" />
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                        Digital Services & Land Records
                      </h4>
                    </div>
                    <span className="text-[10px] text-yellow-400 font-mono font-semibold">Fast Delivery</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Bhoomi RTC / Old & Present Pani • Mutation</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Kaveri 2.0 EC Applications (15-30 Years)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>High-Speed Colour & B/W Xerox • Photo Prints</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Location & Center SLA */}
              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Santhehalli Village, Malur Taluk – 563130</span>
                </span>
                <span className="text-yellow-400 font-bold font-mono">
                  Direct Engineer
                </span>
              </div>

            </div>

            {/* Quick Contact Highlight under Card */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-sky-950/90 via-slate-900 to-sky-950 border border-sky-700/40 flex items-center justify-between text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-yellow-400 animate-bounce shrink-0" />
                <span className="text-[11px] sm:text-xs">
                  Call Directly: <strong className="text-white font-mono">7259141830</strong> / <strong className="text-white font-mono">7899956302</strong>
                </span>
              </div>
              <a 
                href="tel:7259141830"
                className="px-3 py-1.5 rounded-xl bg-yellow-400 text-slate-950 font-bold text-xs hover:bg-yellow-300 transition-colors shrink-0"
              >
                Call Now
              </a>
            </div>

          </div>

        </div>

        {/* 5 Bottom Pillars Bar from the Banner */}
        <div className="mt-14 pt-8 border-t border-sky-900/40">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
              ✦ {t.fivePillarsTitle} ✦
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            
            {/* 1. Website Development */}
            <a 
              href="#web-dev"
              className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/70 border border-sky-900/40 hover:border-sky-400 hover:bg-sky-950/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-600/40 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-yellow-400 group-hover:border-yellow-400 transition-all mb-2.5">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                {t.webDevTitle}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                Custom, Showcase & E-Com
              </p>
            </a>

            {/* 2. Software Solutions */}
            <a 
              href="#web-dev"
              className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/70 border border-sky-900/40 hover:border-sky-400 hover:bg-sky-950/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-600/40 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-yellow-400 group-hover:border-yellow-400 transition-all mb-2.5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                {t.softwareSolutionsTitle}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                Desktop & Web Software
              </p>
            </a>

            {/* 3. Digital Services */}
            <a 
              href="#digital-services"
              className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/70 border border-sky-900/40 hover:border-sky-400 hover:bg-sky-950/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-600/40 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-yellow-400 group-hover:border-yellow-400 transition-all mb-2.5">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                {t.digitalServicesTitle}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                Pani, RTC, EC & Aadhaar
              </p>
            </a>

            {/* 4. Xerox & Printing */}
            <a 
              href="#digital-services"
              className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/70 border border-sky-900/40 hover:border-sky-400 hover:bg-sky-950/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-600/40 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-yellow-400 group-hover:border-yellow-400 transition-all mb-2.5">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                {t.xeroxPrintingTitle}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                Color & B/W Xerox, Photos
              </p>
            </a>

            {/* 5. Projects & Assignments */}
            <a 
              href="#digital-services"
              className="col-span-2 sm:col-span-1 flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/70 border border-sky-900/40 hover:border-sky-400 hover:bg-sky-950/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-600/40 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-yellow-400 group-hover:border-yellow-400 transition-all mb-2.5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                {t.projectsAssignmentsTitle}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                School Charts & Spiral Binding
              </p>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
