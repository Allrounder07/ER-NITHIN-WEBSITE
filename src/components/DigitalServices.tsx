import React, { useState } from 'react';
import { 
  FileText, 
  Fingerprint, 
  History, 
  Home, 
  Copy, 
  Printer, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MessageSquare, 
  Info, 
  FileSpreadsheet, 
  FileCheck,
  Send,
  HelpCircle
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { digitalServices } from '../data/servicesData';
import { translations } from '../data/translations';

import { QuickPriceEstimatorWidget } from './QuickPriceEstimatorWidget';

interface DigitalServicesProps {
  language: Language;
  onOpenRequirementModal: (service: ServiceItem) => void;
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const DigitalServices: React.FC<DigitalServicesProps> = ({
  language,
  onOpenRequirementModal,
  onSelectServiceForInquiry,
}) => {
  const t = translations[language];
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'land' | 'identity' | 'print'>('all');

  const getDigitalIcon = (iconName: string) => {
    switch (iconName) {
      case 'Fingerprint': return <Fingerprint className="w-6 h-6 text-sky-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-400" />;
      case 'History': return <History className="w-6 h-6 text-amber-400" />;
      case 'Home': return <Home className="w-6 h-6 text-indigo-400" />;
      case 'Copy': return <Copy className="w-6 h-6 text-pink-400" />;
      case 'Printer': return <Printer className="w-6 h-6 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-yellow-400" />;
      default: return <FileText className="w-6 h-6 text-sky-400" />;
    }
  };

  const filteredServices = digitalServices.filter(service => {
    if (activeCategoryFilter === 'all') return true;
    if (activeCategoryFilter === 'land') return service.id.includes('pani') || service.id.includes('ec');
    if (activeCategoryFilter === 'identity') return service.id.includes('aadhaar');
    if (activeCategoryFilter === 'print') return service.id.includes('xerox') || service.id.includes('printing') || service.id.includes('project');
    return true;
  });

  return (
    <section id="digital-services" className="py-20 bg-slate-950 relative border-t border-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5 text-yellow-400" />
            <span>{language === 'en' ? 'LOCAL DIGITAL SERVICES & ASSISTANCE' : 'ಸ್ಥಳೀಯ ಡಿಜಿಟಲ್ ಸೇವೆಗಳು ಮತ್ತು ಸಹಾಯ'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {language === 'en' ? (
              <>
                Government Records & <span className="text-yellow-400">Digital Document Services</span>
              </>
            ) : (
              <>
                ಸರ್ಕಾರಿ ದಾಖಲೆಗಳು & <span className="text-yellow-400">ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳ ಸೇವೆ</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {language === 'en'
              ? 'Serving Santhehalli Village, Malur Taluk & Kolar District. Fast, reliable, and guided assistance for Land Records (RTC/Pani), Mutation, EC, Aadhaar, Xerox, and Student Projects.'
              : 'ಸಂತೆಹಳ್ಳಿ ಗ್ರಾಮ, ಮಾಲೂರು ತಾಲೂಕು ಮತ್ತು ಕೋಲಾರ ಜಿಲ್ಲೆಯ ಸಾರ್ವಜನಿಕರಿಗೆ ಪಹಣಿ/RTC, ಮ್ಯುಟೇಶನ್, ಇಸಿ, ಆಧಾರ್ ಕಾರ್ಡ್, ಜೆರಾಕ್ಸ್ ಮತ್ತು ಪ್ರಿಂಟಿಂಗ್ ಸೇವೆಗಳು.'}
          </p>

          {/* Legal Transparency Notice */}
          <div className="mt-4 p-3 rounded-xl bg-sky-950/40 border border-sky-800/40 text-xs text-slate-300 max-w-2xl mx-auto flex items-start gap-2.5 text-left">
            <Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t.officialDisclaimer}
            </p>
          </div>
        </div>

        {/* WhatsApp Print-Ahead Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-sky-950 border border-emerald-600/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
              <Printer className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                ⚡ EXPRESS PICKUP SERVICE
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                {language === 'en' ? 'WhatsApp Your PDF & Collect Prints Without Waiting!' : 'ವಾಟ್ಸಾಪ್‌ಗೆ ಪಿಡಿಎಫ್ ಕಳುಹಿಸಿ, ಕಾಯದೆ ಪ್ರಿಂಟ್ ಪಡೆಯಿರಿ!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {language === 'en'
                  ? 'Send your resume, hall ticket, land documents, or photos to 7259141830. We print, pack, and keep them ready!'
                  : 'ನಿಮ್ಮ ಪಿಡಿಎಫ್, ಹಾಲ್ ಟಿಕೆಟ್, ಫೋಟೋಗಳನ್ನು 7259141830 ಗೆ ವಾಟ್ಸಾಪ್ ಮಾಡಿ. ನೀವು ಬರುವಷ್ಟರಲ್ಲಿ ಸಿದ್ಧವಾಗಿಡುತ್ತೇವೆ.'}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20have%20a%20document%20to%20print."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{language === 'en' ? 'Send Document on WhatsApp' : 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಫೈಲ್ ಕಳುಹಿಸಿ'}</span>
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {[
            { id: 'all', label: language === 'en' ? 'All Digital Services' : 'ಎಲ್ಲಾ ಸೇವೆಗಳು' },
            { id: 'land', label: language === 'en' ? 'Land Records (Pani & EC)' : 'ಜಮೀನು ದಾಖಲೆಗಳು (ಪಹಣಿ/ಇಸಿ)' },
            { id: 'identity', label: language === 'en' ? 'Aadhaar Services' : 'ಆಧಾರ್ ಸೇವೆಗಳು' },
            { id: 'print', label: language === 'en' ? 'Xerox, Print & Projects' : 'ಜೆರಾಕ್ಸ್ & ಪ್ರಿಂಟಿಂಗ್' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategoryFilter === cat.id
                  ? 'bg-yellow-400 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Digital Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-900/70 border border-sky-900/40 hover:border-sky-400 p-6 flex flex-col justify-between transform transition-all duration-300 ease-out hover:scale-[1.025] hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 hover:bg-slate-900/95 overflow-hidden"
            >
              {/* Subtle top radiant accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Ambient radial glow inside card on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/0 group-hover:bg-sky-500/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-900/80 text-yellow-300 border border-sky-600/40 shadow transform group-hover:scale-105 transition-transform duration-300 z-10">
                  {service.badge}
                </div>
              )}

              <div className="relative z-10">
                {/* Icon with scale and pulse effect */}
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400/80 group-hover:shadow-lg group-hover:shadow-sky-500/25 transition-all duration-300 mb-4">
                  {getDigitalIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-200 font-heading">
                  {language === 'en' ? service.title : service.titleKn}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {language === 'en' ? service.shortDesc : service.shortDescKn}
                </p>

                {/* Features Bullet List */}
                <ul className="mt-4 space-y-2 border-t border-slate-800 pt-4">
                  {(language === 'en' ? service.features.slice(0, 4) : service.featuresKn.slice(0, 4)).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Requirements teaser if applicable */}
                {service.requirements && (
                  <div className="mt-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div className="flex items-center justify-between text-slate-400 mb-1">
                      <span className="font-semibold text-yellow-400/90 text-[11px]">
                        {language === 'en' ? 'Required Details:' : 'ಬೇಕಾಗುವ ವಿವರಗಳು:'}
                      </span>
                      <button
                        onClick={() => onOpenRequirementModal(service)}
                        className="text-[10px] text-sky-400 hover:underline cursor-pointer flex items-center gap-0.5"
                      >
                        <HelpCircle className="w-2.5 h-2.5" />
                        <span>{language === 'en' ? 'Full Guide' : 'ವಿವರ ನೋಡಿ'}</span>
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-300 line-clamp-2">
                      {language === 'en' ? service.requirements[0] : service.requirementsKn?.[0]}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Footer: Turnaround, Full Guide Modal & WhatsApp CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {language === 'en' ? service.turnaroundTime : service.turnaroundTimeKn}
                  </span>
                  {service.priceHint && (
                    <span className="text-xs font-semibold text-slate-300">
                      {service.priceHint}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenRequirementModal(service)}
                    className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-sky-950 hover:bg-sky-900 text-sky-300 border border-sky-700/40 transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Checklist' : 'ದಾಖಲೆ ಪಟ್ಟಿ'}
                  </button>

                  <a
                    href={`https://wa.me/917259141830?text=${encodeURIComponent(`Hello ER Nithin, I need assistance with: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    title="Book via WhatsApp"
                  >
                    <MessageSquare className="w-3 h-3 fill-white" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quick Document & Print Order Estimator Widget */}
        <QuickPriceEstimatorWidget language={language} />

        {/* Center Visiting Address & Hours Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 border border-sky-900/40 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono">
                📍 PHYSICAL SERVICE CENTER
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-heading">
                Visit ER Nithin Digital Services in Santhehalli
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Conveniently accessible for residents of Santhehalli, Malur, Kolar, and nearby villages. Fast walk-in counter with instant high-speed Xerox, photo printing, and government portal assistance.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800">
                  🕒 <strong>Mon - Sat:</strong> 8:00 AM – 8:30 PM
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800">
                  🕒 <strong>Sunday:</strong> 9:00 AM – 2:00 PM
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800">
                  📞 <strong>Helpline:</strong> 7259141830 / 7899956302
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center items-stretch">
              <a
                href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20am%20coming%20to%20your%20Santhehalli%20center%20for%20digital%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-center font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Confirm Visit on WhatsApp</span>
              </a>
              <a
                href="tel:7259141830"
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-center font-semibold text-xs border border-slate-700 transition-all"
              >
                Call: 7259141830
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
