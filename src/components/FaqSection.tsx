import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Code2, FileText, Printer, MapPin } from 'lucide-react';
import { Language } from '../types';
import { faqsData } from '../data/faqsData';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'land-records' | 'xerox-print' | 'general'>('all');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-web-1', 'faq-land-1']);

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === 'all'
    ? faqsData
    : faqsData.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-slate-950 relative border-t border-sky-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-700/50 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-yellow-400" />
            <span>{language === 'en' ? 'COMMON QUESTIONS & CLARIFICATIONS' : 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು & ಉತ್ತರಗಳು'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {language === 'en'
              ? 'Clear answers regarding website development timelines, Bhoomi land records, Kaveri EC requirements, and printing assistance.'
              : 'ವೆಬ್‌ಸೈಟ್ ನಿರ್ಮಾಣ, ಜಮೀನು ಪಹಣಿ, ಇಸಿ ದಾಖಲೆಗಳು ಮತ್ತು ಪ್ರಿಂಟಿಂಗ್ ಸೇವೆಗಳ ಬಗ್ಗೆ ಸ್ಪಷ್ಟ ಮಾಹಿತಿ.'}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: 'all', label: language === 'en' ? 'All Questions' : 'ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳು' },
            { id: 'web', label: language === 'en' ? 'Web Development' : 'ವೆಬ್‌ಸೈಟ್ ಡೆವಲಪ್‌ಮೆಂಟ್' },
            { id: 'land-records', label: language === 'en' ? 'Pani & Land Records' : 'ಪಹಣಿ & ಜಮೀನು ದಾಖಲೆ' },
            { id: 'xerox-print', label: language === 'en' ? 'Xerox & Printing' : 'ಜೆರಾಕ್ಸ್ & ಪ್ರಿಂಟಿಂಗ್' },
            { id: 'general', label: language === 'en' ? 'Center Timings & Location' : 'ಸಮಯ ಮತ್ತು ವಿಳಾಸ' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-yellow-400 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-slate-900/70 border border-sky-900/40 overflow-hidden transition-all duration-200 hover:border-sky-500/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white font-heading">
                    {language === 'en' ? faq.question : faq.questionKn}
                  </span>
                  <div className="p-1 rounded-md bg-slate-950 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-yellow-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 bg-slate-950/40">
                    {language === 'en' ? faq.answer : faq.answerKn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt if unanswered */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-sky-950/30 border border-sky-800/30">
          <p className="text-xs sm:text-sm text-slate-300">
            {language === 'en'
              ? 'Have a specific question not covered here?'
              : 'ಇಲ್ಲಿ ಉತ್ತರಿಸದ ಬೇರೆ ಯಾವುದೇ ಸಂದೇಹವಿದೆಯೇ?'}
          </p>
          <a
            href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20have%20a%20question%20regarding%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-yellow-400 hover:underline"
          >
            <span>Ask ER Nithin Directly on WhatsApp (7259141830) →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
