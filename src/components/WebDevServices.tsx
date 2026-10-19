import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Briefcase, 
  ShoppingCart, 
  Cpu, 
  Database, 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  Layers, 
  Server, 
  Terminal, 
  FileCode,
  Palette,
  Atom
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { webDevelopmentServices, techStackData } from '../data/servicesData';
import { translations } from '../data/translations';

interface WebDevServicesProps {
  language: Language;
  onOpenQuote: (servicePreset?: string) => void;
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const WebDevServices: React.FC<WebDevServicesProps> = ({
  language,
  onOpenQuote,
  onSelectServiceForInquiry,
}) => {
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database'>('All');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-sky-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-yellow-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-sky-400" />;
      default: return <Code2 className="w-5 h-5 text-yellow-400" />;
    }
  };

  const filteredTech = selectedCategory === 'All' 
    ? techStackData 
    : techStackData.filter(tech => tech.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="web-dev" className="py-20 bg-slate-900/60 relative border-t border-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-700/50 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-yellow-400" />
            <span>{language === 'en' ? 'ENGINEERING & DEVELOPMENT' : 'ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ಡೆವಲಪ್‌ಮೆಂಟ್'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {language === 'en' ? (
              <>
                Website & <span className="text-yellow-400">Software Development</span>
              </>
            ) : (
              <>
                ವೆಬ್‌ಸೈಟ್ ಮತ್ತು <span className="text-yellow-400">ಸಾಫ್ಟ್‌ವೇರ್ ಡೆವಲಪ್‌ಮೆಂಟ್</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {language === 'en'
              ? 'Custom Websites • Business Showcase • E-Commerce • Custom Web Applications • MySQL & PostgreSQL Integration • Maintenance & 24/7 Support'
              : 'ಕಸ್ಟಮ್ ವೆಬ್‌ಸೈಟ್‌ಗಳು • ಉದ್ಯಮ ಶೋಕೇಸ್ • ಇ-ಕಾಮರ್ಸ್ ಸ್ಟೋರ್ • ಕಸ್ಟಮ್ ವೆಬ್ ಆ್ಯಪ್ • ಡೇಟಾಬೇಸ್ ಇಂಟಿಗ್ರೇಷನ್ • ಸತತ ನಿರ್ವಹಣೆ'}
          </p>

          <div className="mt-4 inline-block bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-lg text-yellow-300 font-mono text-xs sm:text-sm font-semibold">
            {t.equation}
          </div>
        </div>

        {/* 7 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {webDevelopmentServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-950/80 border border-sky-900/40 hover:border-sky-400 p-6 flex flex-col justify-between transform transition-all duration-300 ease-out hover:scale-[1.025] hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 hover:bg-slate-900/90 overflow-hidden"
            >
              {/* Subtle top radiant accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Ambient radial glow inside card on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/0 group-hover:bg-sky-500/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              {/* Badge if available */}
              {service.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-400 text-slate-950 shadow transform group-hover:scale-105 transition-transform duration-300 z-10">
                  {service.badge}
                </div>
              )}

              <div className="relative z-10">
                {/* Icon with scale and pulse effect */}
                <div className="w-12 h-12 rounded-xl bg-sky-950 border border-sky-600/50 flex items-center justify-center text-sky-400 group-hover:text-yellow-400 group-hover:border-yellow-400/80 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/30 transition-all duration-300 mb-4">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-200 font-heading">
                  {language === 'en' ? service.title : service.titleKn}
                </h3>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {language === 'en' ? service.shortDesc : service.shortDescKn}
                </p>

                {/* Checklist features */}
                <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                  {(language === 'en' ? service.features : service.featuresKn).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Turnaround, Price Hint & Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sky-400" />
                    {language === 'en' ? service.turnaroundTime : service.turnaroundTimeKn}
                  </span>
                  {service.priceHint && (
                    <span className="text-xs font-bold text-yellow-400">
                      {service.priceHint}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onOpenQuote(service.id)}
                    className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-950 hover:bg-sky-900 text-sky-300 border border-sky-600/40 transition-colors cursor-pointer"
                    title="Estimate price for this service"
                  >
                    Quote
                  </button>

                  <a
                    href={`https://wa.me/917259141830?text=${encodeURIComponent(`Hello ER Nithin, I am inquiring about: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    title="Ask on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tech Stack Showcase matching the flyer */}
        <div className="rounded-2xl bg-slate-950 border border-sky-800/40 p-6 sm:p-8 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-yellow-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {language === 'en' ? 'Core Technologies & Tools Used' : 'ಬಳಸುವ ಪ್ರಮುಖ ತಂತ್ರಜ್ಞಾನಗಳು'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {language === 'en'
                  ? 'Modern, battle-tested software tools chosen for speed, scalability, and security.'
                  : 'ಉನ್ನತ ಕಾರ್ಯಕ್ಷಮತೆ ಮತ್ತು ಭದ್ರತೆಗಾಗಿ ನವೀನ ಸಾಫ್ಟ್‌ವೇರ್ ಪರಿಕರಗಳ ಬಳಕೆ.'}
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              {(['All', 'Frontend', 'Backend', 'Database'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-950/20 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                  {getTechIcon(tech.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm font-heading">{tech.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800/50">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-snug">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Development Process */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-sky-950/40 to-slate-950 border border-sky-800/40 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono">
              ★ STEP-BY-STEP WORKFLOW ★
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
              {language === 'en' ? 'How We Bring Your Idea to Life' : 'ನಿಮ್ಮ ಆಲೋಚನೆ ವೆಬ್‌ಸೈಟ್ ಆಗುವ ಹಂತಗಳು'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Transparent, accountable milestones with zero guesswork from discovery to final deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {[
              {
                step: '01',
                title: language === 'en' ? 'Discovery & Scope' : 'ಅಗತ್ಯಗಳ ಚರ್ಚೆ',
                desc: language === 'en' ? 'Understanding your target audience, business goals, and required features.' : 'ನಿಮ್ಮ ವ್ಯಾಪಾರ ಮತ್ತು ಅಗತ್ಯ ವಿವರಗಳ ಸಂಪೂರ್ಣ ಚರ್ಚೆ.',
              },
              {
                step: '02',
                title: language === 'en' ? 'Design & Wireframe' : 'ವಿನ್ಯಾಸ ಮತ್ತು ಮಾದರಿ',
                desc: language === 'en' ? 'Crafting modern layout mockups and database schemas for review.' : 'ಆಕರ್ಷಕ ಮಾದರಿ ವಿನ್ಯಾಸ ಮತ್ತು ಡೇಟಾಬೇಸ್ ಪ್ಲಾನಿಂಗ್.',
              },
              {
                step: '03',
                title: language === 'en' ? 'Clean Engineering' : 'ಕೋಡಿಂಗ್ ಮತ್ತು ನಿರ್ಮಾಣ',
                desc: language === 'en' ? 'Writing clean, optimized code using React, Node.js, Python, or MySQL.' : 'ವೇಗದ, ಸುರಕ್ಷಿತ ಕೋಡಿಂಗ್ ಮತ್ತು ಡೇಟಾ ಜೋಡಣೆ.',
              },
              {
                step: '04',
                title: language === 'en' ? 'Review & Speed Test' : 'ಪರೀಕ್ಷೆ ಮತ್ತು ತಪಾಸಣೆ',
                desc: language === 'en' ? 'Mobile responsiveness, payment gateway tests, and SEO verification.' : 'ಮೊಬೈಲ್ ಪರೀಕ್ಷೆ ಮತ್ತು ಭದ್ರತಾ ಪರಿಶೀಲನೆ.',
              },
              {
                step: '05',
                title: language === 'en' ? 'Launch & Support' : 'ಲೈವ್ ಮತ್ತು ನಿರಂತರ ಸಪೋರ್ಟ್',
                desc: language === 'en' ? 'Domain connection, SSL activation, Google Maps listing & lifetime help.' : 'ಡೊಮೈನ್ ಲೈವ್ ಮತ್ತು ಯಾವುದೇ ತೊಂದರೆಗೆ ನೇರ ಸಹಾಯ.',
              },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="relative p-4 rounded-xl bg-slate-900/80 border border-sky-900/40 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-sky-400/40 font-mono">
                    {item.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA within Web Dev */}
          <div className="mt-8 pt-6 border-t border-sky-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-bold text-white">
                {language === 'en' ? 'Have a custom project in mind?' : 'ನಿಮ್ಮದೇ ಆದ ವಿಶೇಷ ಪ್ರಾಜೆಕ್ಟ್ ಐಡಿಯಾ ಇದೆಯೇ?'}
              </h4>
              <p className="text-xs text-slate-400">
                {language === 'en' ? 'Talk directly with ER Nithin to get a realistic scope and quote.' : 'ನೇರವಾಗಿ ಎಂಜಿನಿಯರ್ ನಿತಿನ್ ಅವರೊಂದಿಗೆ ಮಾತನಾಡಿ.'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenQuote()}
                className="px-4 py-2.5 rounded-lg bg-yellow-400 text-slate-950 font-bold text-xs hover:bg-yellow-300 transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Launch Cost Calculator' : 'ವೆಬ್‌ಸೈಟ್ ದರ ಲೆಕ್ಕಹಾಕಿ'}
              </button>
              <a
                href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20have%20a%20website%20project%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Nithin</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
