import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Code2, 
  Menu, 
  X, 
  Calculator, 
  Crown, 
  Languages, 
  Sparkles, 
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  activeSection: string;
  onOpenQuote: () => void;
  onOpenInquiryManager: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  theme,
  toggleTheme,
  activeSection,
  onOpenQuote,
  onOpenInquiryManager,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navLinks = [
    { id: 'home', label: t.navHome, href: '#home' },
    { id: 'web-dev', label: t.navWebDev, href: '#web-dev' },
    { id: 'digital-services', label: t.navDigital, href: '#digital-services' },
    { id: 'portfolio', label: t.navPortfolio, href: '#portfolio' },
    { id: 'pricing-calculator', label: t.navQuote, href: '#pricing-calculator' },
    { id: 'about', label: t.navAbout, href: '#about' },
    { id: 'testimonials', label: t.navReviews, href: '#testimonials' },
    { id: 'faq', label: t.navFaq, href: '#faq' },
    { id: 'contact', label: t.navContact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-md border-b border-sky-900/40 shadow-xl transition-all">
      {/* Top micro-bar: Location & Quick Contacts */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border-b border-sky-900/30 text-xs py-1.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-sky-300">
              <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>Santhehalli Village, Malur Taluk, Kolar Dist – 563130</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Mon - Sat: 8:00 AM - 8:30 PM • Sun: 9:00 AM - 2:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a 
              href="tel:7259141830" 
              className="flex items-center gap-1 text-slate-200 hover:text-yellow-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-yellow-400" />
              <span>7259141830</span>
            </a>
            <span className="text-slate-600">/</span>
            <a 
              href="tel:7899956302" 
              className="hidden sm:inline-block text-slate-200 hover:text-yellow-400 font-medium transition-colors"
            >
              7899956302
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-sky-900/60 hover:bg-sky-800 text-yellow-300 border border-sky-700/50 text-[11px] font-semibold transition-all cursor-pointer"
              title="Toggle English / ಕನ್ನಡ"
            >
              <Languages className="w-3 h-3 text-yellow-400" />
              <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-sky-900/60 hover:bg-sky-800 text-yellow-300 border border-sky-700/50 text-[11px] font-semibold transition-all cursor-pointer"
              title={theme === 'dark' ? 'Switch to High-Contrast Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3 h-3 text-yellow-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3 h-3 text-sky-400" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
          >
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-700 via-sky-600 to-indigo-900 border-2 border-sky-400 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Code2 className="w-5 h-5 sm:w-7 sm:h-7 text-white stroke-[2.2]" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-yellow-400 rounded-full flex items-center justify-center shadow">
                <Crown className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-slate-950 fill-slate-950" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                <span className="text-[10px] sm:text-xs font-black tracking-widest text-sky-400 uppercase font-mono">ER</span>
                <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-white font-heading">
                  NITHIN
                </span>
                <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-yellow-400 font-heading">
                  DIGITAL
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-sky-200">
                  SERVICES
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline-block">•</span>
                <span className="text-[10px] sm:text-[11px] text-slate-300 italic hidden sm:inline-block">
                  Your Needs • Our Digital Solutions
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'text-yellow-400 bg-sky-900/40 border border-sky-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg bg-sky-950 hover:bg-sky-900 text-yellow-300 border border-sky-500/40 shadow-sm transition-all cursor-pointer hover:border-yellow-400"
              title={theme === 'dark' ? 'Switch to High-Contrast Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="hidden xl:inline-block">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden xl:inline-block">Dark Mode</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenQuote}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-sky-950 hover:bg-sky-900 text-sky-300 border border-sky-500/40 shadow-sm transition-all cursor-pointer hover:border-sky-400"
            >
              <Calculator className="w-3.5 h-3.5 text-yellow-400" />
              <span>{language === 'en' ? 'Get Quote' : 'ದರ ಅಂದಾಜು'}</span>
            </button>

            <a
              href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-700/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Yellow Brand Bar under Header */}
      <div className="w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-[11px] sm:text-xs py-1 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-2 shadow-inner">
        <span>WEB DEVELOPER</span>
        <span className="text-slate-800">|</span>
        <span>SOFTWARE ENGINEER</span>
        <span className="text-slate-800">|</span>
        <span>DIGITAL SERVICES</span>
        <span className="hidden md:inline-block text-slate-800">•</span>
        <span className="hidden md:inline-block font-normal text-slate-900 lowercase italic">
          "Small Ideas... Big Websites... Let's Build Your Dream Together..."
        </span>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-sky-800/40 px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-200 hover:bg-sky-950 hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold rounded-lg bg-sky-900 text-yellow-300 border border-sky-500/50"
            >
              <Calculator className="w-4 h-4" />
              <span>{language === 'en' ? 'Instant Cost Estimator' : 'ವೆಬ್‌ಸೈಟ್ ದರ ಲೆಕ್ಕಾಚಾರ'}</span>
            </button>

            <a
              href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold rounded-lg bg-emerald-600 text-white"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t.whatsappUs} (7259141830)</span>
            </a>

            <a
              href="tel:7259141830"
              className="flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
            >
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>Direct Call: 7259141830</span>
            </a>

            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 w-full py-2 text-sm font-bold rounded-lg bg-slate-900 text-yellow-400 border border-sky-800/60 cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span>Switch to Day / Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-sky-400" />
                  <span>Switch to Dark Mode</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiryManager();
                }}
                className="text-sky-400 underline hover:text-sky-300"
              >
                Inquiry Log / Admin
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
                className="px-2 py-1 rounded bg-slate-800 text-yellow-400 font-bold"
              >
                {language === 'en' ? 'ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
