import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Send, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Database, 
  CreditCard, 
  Globe, 
  HelpCircle,
  FileCheck2,
  X
} from 'lucide-react';
import { Language, QuoteCalculation } from '../types';
import { translations } from '../data/translations';

interface QuotationCalculatorProps {
  language: Language;
  onSendInquiryWithQuote?: (quoteText: string) => void;
  onClose?: () => void;
}

export const QuotationCalculator: React.FC<QuotationCalculatorProps> = ({
  language,
  onSendInquiryWithQuote,
  onClose,
}) => {
  const t = translations[language];

  const projectTypes = [
    {
      id: 'showcase',
      name: language === 'en' ? 'Showcase / Portfolio Website' : 'ಶೋಕೇಸ್ / ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಸೈಟ್',
      basePrice: 4999,
      basePages: 3,
      desc: language === 'en' ? 'Ideal for professionals, small shops, consultants, and individuals.' : 'ವೈಯಕ್ತಿಕ ಗುರುತು ಮತ್ತು ಸಣ್ಣ ಅಂಗಡಿಗಳಿಗೆ ಸೂಕ್ತ.',
    },
    {
      id: 'business',
      name: language === 'en' ? 'Full Business / Company Website' : 'ಸಂಪೂರ್ಣ ಕಂಪನಿ / ಬಿಜಿನೆಸ್ ವೆಬ್‌ಸೈಟ್',
      basePrice: 8499,
      basePages: 6,
      desc: language === 'en' ? 'For factories, schools, builders, and service firms with multiple offerings.' : 'ಕಾರ್ಖಾನೆ, ಶಾಲೆಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳಿಗೆ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ಸೈಟ್.',
    },
    {
      id: 'ecommerce',
      name: language === 'en' ? 'E-Commerce Online Store' : 'ಇ-ಕಾಮರ್ಸ್ ಆನ್‌ಲೈನ್ ಸ್ಟೋರ್',
      basePrice: 14999,
      basePages: 10,
      desc: language === 'en' ? 'Full online catalog, shopping cart, UPI checkout & WhatsApp alerts.' : 'ಉತ್ಪನ್ನಗಳ ಮಾರಾಟ, ಕಾರ್ಟ್ ಮತ್ತು ಯುಪಿಐ ಪಾವತಿ ವ್ಯವಸ್ಥೆ.',
    },
    {
      id: 'webapp',
      name: language === 'en' ? 'Custom Web Application / Software' : 'ಕಸ್ಟಮ್ ಸಾಫ್ಟ್‌ವೇರ್ / ವೆಬ್ ಆ್ಯಪ್',
      basePrice: 21999,
      basePages: 8,
      desc: language === 'en' ? 'Bespoke billing, inventory, student portals, and database systems.' : 'ಬಿಲ್ಲಿಂಗ್, ಇನ್ವೆಂಟರಿ ಮತ್ತು ವಿಶೇಷ ಸಾಫ್ಟ್‌ವೇರ್ ಅಪ್ಲಿಕೇಶನ್.',
    },
  ];

  const availableFeatures = [
    {
      id: 'database',
      name: language === 'en' ? 'Relational Database (MySQL / PostgreSQL)' : 'ಡೇಟಾಬೇಸ್ (MySQL / PostgreSQL)',
      price: 3500,
      icon: 'Database',
      recommended: true,
    },
    {
      id: 'payments',
      name: language === 'en' ? 'Online Payment Gateway (UPI / QR / Cards)' : 'ಆನ್‌ಲೈನ್ ಪಾವತಿ (UPI, QR, ಕಾರ್ಡ್ಸ್)',
      price: 2500,
      icon: 'CreditCard',
      recommended: false,
    },
    {
      id: 'admin_panel',
      name: language === 'en' ? 'Custom Admin Dashboard (Manage Products & Leads)' : 'ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ (ನಿರ್ವಹಣೆ)',
      price: 4000,
      icon: 'Layers',
      recommended: false,
    },
    {
      id: 'whatsapp_leads',
      name: language === 'en' ? 'WhatsApp Instant Order & Lead Bot' : 'ವಾಟ್ಸಾಪ್ ಇನ್‌ಕ್ವೈರಿ & ಆರ್ಡರ್ ಬಟನ್',
      price: 1200,
      icon: 'MessageSquare',
      recommended: true,
    },
    {
      id: 'bilingual',
      name: language === 'en' ? 'Bilingual Support (Kannada & English)' : 'ದ್ವಿಭಾಷಾ ಬೆಂಬಲ (ಕನ್ನಡ & ಇಂಗ್ಲಿಷ್)',
      price: 2000,
      icon: 'Globe',
      recommended: true,
    },
    {
      id: 'seo_maps',
      name: language === 'en' ? 'Google Maps & Local Business SEO Ranking' : 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ & ಲೋಕಲ್ ಎಸ್‌ಇಒ',
      price: 1800,
      icon: 'Sparkles',
      recommended: true,
    },
    {
      id: 'domain_hosting',
      name: language === 'en' ? '.COM / .IN Domain + 1-Year Fast Cloud Hosting + SSL' : 'ಡೊಮೈನ್ + ೧ ವರ್ಷದ ಹೋಸ್ಟಿಂಗ್ + SSL',
      price: 3200,
      icon: 'ShieldCheck',
      recommended: true,
    },
  ];

  const [selectedType, setSelectedType] = useState('business');
  const [pagesCount, setPagesCount] = useState(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'whatsapp_leads',
    'bilingual',
    'seo_maps',
    'domain_hosting'
  ]);
  const [isExpress, setIsExpress] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const currentType = projectTypes.find(t => t.id === selectedType) || projectTypes[1];

  const calculatedEstimate = useMemo(() => {
    let total = currentType.basePrice;

    // Additional pages cost (₹500 per extra page)
    if (pagesCount > currentType.basePages) {
      total += (pagesCount - currentType.basePages) * 500;
    }

    // Add features
    selectedFeatures.forEach(featId => {
      const feat = availableFeatures.find(f => f.id === featId);
      if (feat) total += feat.price;
    });

    // Express delivery multiplier (+25%)
    if (isExpress) {
      total = Math.round(total * 1.25);
    }

    const minEstimate = Math.round(total * 0.95);
    const maxEstimate = Math.round(total * 1.10);

    return {
      total,
      minEstimate,
      maxEstimate
    };
  }, [currentType, pagesCount, selectedFeatures, isExpress]);

  const generateWhatsAppMessage = () => {
    const featureNames = selectedFeatures
      .map(id => availableFeatures.find(f => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const msg = `Hello ER Nithin! I generated a custom website estimate on your website:
• Project: ${currentType.name}
• Pages: ${pagesCount} pages
• Features: ${featureNames || 'Basic only'}
• Delivery: ${isExpress ? 'Express (48-72 hrs)' : 'Standard (7-10 days)'}
• Estimated Cost: ₹${calculatedEstimate.minEstimate.toLocaleString('en-IN')} - ₹${calculatedEstimate.maxEstimate.toLocaleString('en-IN')}

Let's discuss and finalize this!`;

    return encodeURIComponent(msg);
  };

  return (
    <section id="pricing-calculator" className="py-20 bg-slate-900/90 relative border-t border-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {onClose && (
            <div className="flex justify-end mb-2">
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-yellow-400" />
            <span>{language === 'en' ? 'TRANSPARENT ESTIMATOR' : 'ಸ್ಪಷ್ಟ ದರ ಅಂದಾಜು'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {language === 'en' ? (
              <>
                Instant Website & Software <span className="text-yellow-400">Cost Calculator</span>
              </>
            ) : (
              <>
                ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಸಾಫ್ಟ್‌ವೇರ್ <span className="text-yellow-400">ದರ ಲೆಕ್ಕಾಚಾರ</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {language === 'en'
              ? 'Select your requirements below to see an immediate, itemized estimate. No hidden fees, no surprises.'
              : 'ನಿಮಗೆ ಬೇಕಾದ ಸೌಲಭ್ಯಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ತಕ್ಷಣದ ಅಂದಾಜು ವೆಚ್ಚವನ್ನು ಪಡೆಯಿರಿ.'}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-sky-900/50 shadow-xl">
            
            {/* Step 1: Project Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 font-mono mb-3">
                1. {language === 'en' ? 'Select Project Type' : 'ಯೋಜನೆಯ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-sky-950 border-yellow-400 ring-1 ring-yellow-400/50 shadow-lg'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white font-heading">
                          {type.name}
                        </span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                            <Check className="w-3 h-3 text-slate-950 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {type.desc}
                      </p>
                      <div className="mt-2 text-xs font-semibold text-sky-400">
                        Base: ₹{type.basePrice.toLocaleString('en-IN')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Page Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
                  2. {language === 'en' ? 'Number of Pages / Views' : 'ಪುಟಗಳ ಸಂಖ್ಯೆ'}
                </label>
                <span className="text-sm font-bold text-yellow-400 bg-yellow-400/10 px-3 py-0.5 rounded-full border border-yellow-400/30">
                  {pagesCount} {pagesCount === 1 ? 'Page' : 'Pages'}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="20"
                value={pagesCount}
                onChange={(e) => setPagesCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1 Page (Landing)</span>
                <span>5 Pages (Standard)</span>
                <span>10 Pages</span>
                <span>20+ Pages</span>
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-400 font-mono mb-3">
                3. {language === 'en' ? 'Choose Features & Add-ons' : 'ಸೌಲಭ್ಯಗಳನ್ನು ಆರಿಸಿ'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-sky-950/70 border-sky-400/80 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked
                          ? 'bg-yellow-400 border-yellow-400 text-slate-950'
                          : 'border-slate-700 bg-slate-800'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{feat.name}</span>
                          {feat.recommended && (
                            <span className="text-[9px] bg-yellow-400/20 text-yellow-300 px-1.5 py-0.2 rounded font-semibold">
                              Recommended
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-sky-400 font-semibold block mt-0.5">
                          +₹{feat.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Urgency Mode */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">
                  {language === 'en' ? 'Need it super fast? (Express 48-72 Hours)' : 'ಅತ್ಯಂತ ತುರ್ತಾಗಿ ಬೇಕೆ? (೪೮-೭೨ ಗಂಟೆ)'}
                </span>
                <span className="text-xs text-slate-400">
                  {language === 'en' ? 'Dedicated engineering sprints for tight business launch deadlines.' : 'ತ್ವರಿತ ಡೆಲಿವರಿಗಾಗಿ ನಿರಂತರ ಕೋಡಿಂಗ್ ಸ್ಪ್ರಿಂಟ್.'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsExpress(!isExpress)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isExpress ? 'bg-yellow-400' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-950 shadow ring-0 transition duration-200 ease-in-out ${
                    isExpress ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Result / Quotation Card (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <div className="rounded-2xl bg-gradient-to-b from-sky-950 via-slate-950 to-slate-950 border-2 border-yellow-400/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-sky-800/40 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 font-mono">
                    ESTIMATED INVESTMENT
                  </span>
                  <h3 className="text-lg font-black text-white font-heading">
                    {currentType.name}
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Price Range Display */}
              <div className="py-4 text-center bg-slate-900/80 rounded-xl border border-sky-900/50 mb-6">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  Estimated Project Range
                </span>
                <div className="text-3xl sm:text-4xl font-black text-yellow-400 font-heading">
                  ₹{calculatedEstimate.minEstimate.toLocaleString('en-IN')} – ₹{calculatedEstimate.maxEstimate.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                  ✓ Includes direct engineer consultation & warranty
                </span>
              </div>

              {/* Summary List */}
              <div className="space-y-2.5 text-xs text-slate-300 mb-6 border-b border-slate-800 pb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Project Type:</span>
                  <span className="font-semibold text-white">{currentType.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Pages:</span>
                  <span className="font-semibold text-white">{pagesCount} Pages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Add-ons Selected:</span>
                  <span className="font-semibold text-sky-400">{selectedFeatures.length} Features</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delivery SLA:</span>
                  <span className="font-semibold text-white">
                    {isExpress ? 'Express (48-72 Hours)' : 'Standard (7-10 Days)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Code Author:</span>
                  <span className="font-semibold text-yellow-400">ER Nithin (Direct)</span>
                </div>
              </div>

              {/* WhatsApp Send Button */}
              <a
                href={`https://wa.me/917259141830?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{language === 'en' ? 'Send This Quote on WhatsApp' : 'ಈ ಅಂದಾಜನ್ನು ವಾಟ್ಸಾಪ್‌ಗೆ ಕಳುಹಿಸಿ'}</span>
              </a>

              {/* Or Quick Call */}
              <div className="mt-3 text-center">
                <a
                  href="tel:7259141830"
                  className="text-xs text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Or discuss on phone: <strong>7259141830</strong>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
