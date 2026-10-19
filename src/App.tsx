/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WebDevServices } from './components/WebDevServices';
import { DigitalServices } from './components/DigitalServices';
import { QuotationCalculator } from './components/QuotationCalculator';
import { Portfolio } from './components/Portfolio';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DocumentRequirementModal } from './components/DocumentRequirementModal';
import { InquiryManagerModal } from './components/InquiryManagerModal';
import { LegalModal } from './components/LegalModals';
import { Language, Theme, ServiceItem, Inquiry } from './types';
import { MessageSquare, Phone, ChevronUp } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('ernithin_theme') as Theme;
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {
      console.error(e);
    }
    return 'dark';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceForDoc, setSelectedServiceForDoc] = useState<ServiceItem | null>(null);
  const [inquiryManagerOpen, setInquiryManagerOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [preselectedServiceForContact, setPreselectedServiceForContact] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync theme with html root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    try {
      localStorage.setItem('ernithin_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Monitor scroll position for active section & back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'web-dev', 'digital-services', 'portfolio', 'pricing-calculator', 'about', 'testimonials', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToQuote = (servicePreset?: string) => {
    const el = document.getElementById('pricing-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreselectedServiceForContact(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquiryCreated = (inquiry: Inquiry) => {
    // Already saved to localStorage in ContactSection
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} flex flex-col font-sans selection:bg-yellow-400 selection:text-slate-950 transition-colors duration-300`}>
      
      {/* Primary Sticky Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenQuote={() => handleScrollToQuote()}
        onOpenInquiryManager={() => setInquiryManagerOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          language={language}
          onOpenQuote={() => handleScrollToQuote()}
          onSelectDigitalDocHelp={() => {
            const el = document.getElementById('digital-services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Web & Software Development Module */}
        <WebDevServices
          language={language}
          onOpenQuote={handleScrollToQuote}
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 3. Digital Services Module (Pani, EC, Aadhaar, Xerox, Printing) */}
        <DigitalServices
          language={language}
          onOpenRequirementModal={(service) => setSelectedServiceForDoc(service)}
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 4. Instant Quotation Estimator Module */}
        <QuotationCalculator
          language={language}
          onSendInquiryWithQuote={(quoteText) => {
            setPreselectedServiceForContact(quoteText);
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Real-World Portfolio & Case Studies */}
        <Portfolio
          language={language}
        />

        {/* 6. About ER Nithin Profile & Credentials */}
        <AboutSection
          language={language}
        />

        {/* 7. Verified Client Testimonials & Social Proof Carousel */}
        <TestimonialsSection
          language={language}
        />

        {/* 8. Common FAQs & Answers (Bilingual) */}
        <FaqSection
          language={language}
        />

        {/* 8. Contact & Quick Inquiry Form with Direct Calls */}
        <ContactSection
          language={language}
          onInquiryCreated={handleInquiryCreated}
          preselectedService={preselectedServiceForContact}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenInquiryManager={() => setInquiryManagerOpen(true)}
      />

      {/* Modals */}
      <DocumentRequirementModal
        service={selectedServiceForDoc}
        language={language}
        onClose={() => setSelectedServiceForDoc(null)}
      />

      {inquiryManagerOpen && (
        <InquiryManagerModal
          onClose={() => setInquiryManagerOpen(false)}
        />
      )}

      <LegalModal
        type={legalModalType}
        language={language}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Action Buttons (Sticky at bottom right) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-auto">
        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 sm:p-3 rounded-full bg-slate-900/90 text-yellow-400 border border-sky-800/80 shadow-lg hover:bg-slate-800 transition-all cursor-pointer hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        )}

        {/* Quick Phone Call Button */}
        <a
          href="tel:7259141830"
          className="p-2.5 sm:p-3.5 rounded-full bg-sky-950 text-yellow-400 border-2 border-sky-500 shadow-xl hover:bg-sky-900 transition-all cursor-pointer hover:scale-105 group relative"
          aria-label="Call ER Nithin"
          title="Call: 7259141830"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-slate-900 text-white text-xs font-mono font-semibold whitespace-nowrap shadow opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 pointer-events-none">
            Call 7259141830
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20am%20visiting%20your%20website%20and%20need%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-950/80 transition-all cursor-pointer hover:scale-105 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
          <span className="hidden sm:inline-block font-sans">Chat on WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
