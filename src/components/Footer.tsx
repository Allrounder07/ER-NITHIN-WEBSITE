import React from 'react';
import { 
  Code2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Crown, 
  Heart, 
  ShieldCheck, 
  ArrowUp,
  FileText,
  Lock,
  Globe
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenInquiryManager: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenPrivacy,
  onOpenTerms,
  onOpenInquiryManager,
}) => {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-sky-900/40 relative overflow-hidden">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-sky-600 to-indigo-900 border border-sky-400 shadow-md">
                <Code2 className="w-5 h-5 text-white" />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Crown className="w-2 h-2 text-slate-950 fill-slate-950" />
                </div>
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white font-heading">
                  ER NITHIN <span className="text-yellow-400">DIGITAL SERVICES</span>
                </span>
                <span className="text-xs text-sky-300 block font-medium">
                  {t.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering regional enterprises, shops, schools, farmers, and students with modern custom websites, web applications, and essential digital document services.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-yellow-300 font-mono">
              ⚡ {t.equation}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">Engineering Lead:</span>
              <span className="text-lg font-bold italic text-yellow-400 font-serif">
                ~ ER Nithin
              </span>
            </div>
          </div>

          {/* Quick Links: Web Development (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
              Web & Software Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#web-dev" className="hover:text-yellow-400 transition-colors">
                  • Responsive & Modern Website Design
                </a>
              </li>
              <li>
                <a href="#web-dev" className="hover:text-yellow-400 transition-colors">
                  • Business & Company Websites
                </a>
              </li>
              <li>
                <a href="#web-dev" className="hover:text-yellow-400 transition-colors">
                  • E-Commerce Online Stores & UPI
                </a>
              </li>
              <li>
                <a href="#web-dev" className="hover:text-yellow-400 transition-colors">
                  • Custom Web Applications & Software
                </a>
              </li>
              <li>
                <a href="#web-dev" className="hover:text-yellow-400 transition-colors">
                  • Database Integration (MySQL / PostgreSQL)
                </a>
              </li>
              <li>
                <a href="#pricing-calculator" className="hover:text-yellow-400 transition-colors">
                  • Website Cost Estimator
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-yellow-400 transition-colors">
                  • Verified Client Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Digital Services (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
              Digital Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#digital-services" className="hover:text-yellow-400 transition-colors">
                  • RTC / Bhoomi Pani
                </a>
              </li>
              <li>
                <a href="#digital-services" className="hover:text-yellow-400 transition-colors">
                  • Old & Present Pani
                </a>
              </li>
              <li>
                <a href="#digital-services" className="hover:text-yellow-400 transition-colors">
                  • Kaveri EC Application
                </a>
              </li>
              <li>
                <a href="#digital-services" className="hover:text-yellow-400 transition-colors">
                  • Aadhaar PVC / Updates
                </a>
              </li>
              <li>
                <a href="#digital-services" className="hover:text-yellow-400 transition-colors">
                  • Colour & B/W Xerox
                </a>
              </li>
              <li>
                <a href="#digital-services" className="hover:text-yellow-400 transition-colors">
                  • School Project Works
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Physical Center (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
              Center Location & Contact
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  Santhehalli Village, Malur Taluk,<br />
                  Kolar District – 563130, Karnataka
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href="tel:7259141830" className="hover:text-yellow-400 font-mono">
                  7259141830 / 7899956302
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:ramadevinithin5656@gmail.com" className="hover:text-yellow-400 break-all">
                  ramadevinithin5656@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20am%20contacting%20you%20from%20your%20website%20footer."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-[11px] text-slate-500 leading-relaxed text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="max-w-2xl">
            {t.officialDisclaimer}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>

        {/* Sub-Footer Copyright & Modals */}
        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>ER NITHIN DIGITAL SERVICES</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 underline cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={onOpenInquiryManager}
              className="text-sky-400 hover:underline cursor-pointer flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Inquiry Log</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
