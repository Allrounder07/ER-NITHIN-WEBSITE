import React, { useState } from 'react';
import { 
  Printer, 
  FileText, 
  Check, 
  Plus, 
  Minus, 
  MessageSquare, 
  Sparkles, 
  Zap, 
  FileCheck, 
  BookOpen, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface QuickPriceEstimatorWidgetProps {
  language: Language;
}

export const QuickPriceEstimatorWidget: React.FC<QuickPriceEstimatorWidgetProps> = ({ language }) => {
  const [bwPages, setBwPages] = useState<number>(10);
  const [colorPages, setColorPages] = useState<number>(2);
  const [rtcCount, setRtcCount] = useState<number>(1);
  const [includeEc, setIncludeEc] = useState<boolean>(false);
  const [includeSpiral, setIncludeSpiral] = useState<boolean>(false);

  // Pricing formula
  // B&W Xerox: ₹2 / page
  // Color Prints: ₹10 / page
  // RTC / Pani: ₹25 / copy
  // Kaveri EC search: ₹75
  // Spiral binding: ₹30
  const totalPrice = 
    bwPages * 2 + 
    colorPages * 10 + 
    rtcCount * 25 + 
    (includeEc ? 75 : 0) + 
    (includeSpiral ? 30 : 0);

  const generateWhatsAppOrder = () => {
    const items: string[] = [];
    if (bwPages > 0) items.push(`• B&W Xerox: ${bwPages} pages (₹${bwPages * 2})`);
    if (colorPages > 0) items.push(`• Color Prints: ${colorPages} pages (₹${colorPages * 10})`);
    if (rtcCount > 0) items.push(`• Bhoomi RTC/Pani: ${rtcCount} copies (₹${rtcCount * 25})`);
    if (includeEc) items.push(`• Kaveri EC Assistance (₹75)`);
    if (includeSpiral) items.push(`• Spiral Binding (₹30)`);

    const msg = `Hello ER Nithin! I estimated my digital order on your website:
${items.join('\n')}
---------------------
Estimated Total: ₹${totalPrice}

I will visit your Santhehalli center / send documents on WhatsApp for processing.`;

    return encodeURIComponent(msg);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950/60 to-slate-950 border-2 border-sky-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden mt-12">
      
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        
        {/* Title Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-sky-800/40">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>{language === 'en' ? 'INSTANT ESTIMATOR & ORDER BUILDER' : 'ತಕ್ಷಣದ ದರ ಅಂದಾಜು & ಆರ್ಡರ್'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              {language === 'en' ? 'Quick Xerox, Print & Land Records Cost Calculator' : 'ಜೆರಾಕ್ಸ್, ಪ್ರಿಂಟ್ & ಪಹಣಿ ತಕ್ಷಣದ ದರ ಲೆಕ್ಕ'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {language === 'en'
                ? 'Calculate your document and printing costs before visiting the Santhehalli center, then send your order on WhatsApp for express pickup!'
                : 'ಸಂತೆಹಳ್ಳಿ ಕೇಂದ್ರಕ್ಕೆ ಬರುವ ಮುನ್ನ ನಿಮ್ಮ ದಾಖಲೆಗಳ ದರ ಲೆಕ್ಕಹಾಕಿ ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್ ಕಳುಹಿಸಿ!'}
            </p>
          </div>

          <div className="text-left md:text-right shrink-0 bg-slate-950/80 px-5 py-3 rounded-2xl border border-sky-800/60">
            <span className="text-[11px] text-slate-400 block font-mono">Estimated Total</span>
            <span className="text-3xl font-black text-yellow-400 font-heading">
              ₹{totalPrice}
            </span>
          </div>
        </div>

        {/* Interactive Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          
          {/* 1. B&W Xerox */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white font-heading flex items-center gap-1.5">
                <Printer className="w-4 h-4 text-slate-300" />
                <span>B&W Laser Xerox</span>
              </span>
              <span className="text-xs text-sky-400 font-semibold font-mono">₹2 / page</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Total Pages:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setBwPages(Math.max(0, bwPages - 5))}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs cursor-pointer active:scale-95"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <input
                  type="number"
                  min="0"
                  value={bwPages}
                  onChange={(e) => setBwPages(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-14 text-center py-1 bg-slate-900 border border-slate-700 rounded-lg text-white font-bold text-xs font-mono"
                />
                <button
                  type="button"
                  onClick={() => setBwPages(bwPages + 5)}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs cursor-pointer active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <span className="text-[11px] text-yellow-300/80 font-mono mt-2 block text-right">
              = ₹{bwPages * 2}
            </span>
          </div>

          {/* 2. Color Prints */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white font-heading flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Color Print / Photos</span>
              </span>
              <span className="text-xs text-sky-400 font-semibold font-mono">₹10 / page</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Total Pages:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setColorPages(Math.max(0, colorPages - 1))}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs cursor-pointer active:scale-95"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <input
                  type="number"
                  min="0"
                  value={colorPages}
                  onChange={(e) => setColorPages(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-14 text-center py-1 bg-slate-900 border border-slate-700 rounded-lg text-white font-bold text-xs font-mono"
                />
                <button
                  type="button"
                  onClick={() => setColorPages(colorPages + 1)}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs cursor-pointer active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <span className="text-[11px] text-yellow-300/80 font-mono mt-2 block text-right">
              = ₹{colorPages * 10}
            </span>
          </div>

          {/* 3. Bhoomi Land RTC / Pani */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white font-heading flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Bhoomi RTC / Pani</span>
              </span>
              <span className="text-xs text-emerald-400 font-semibold font-mono">₹25 / copy</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Copies Count:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRtcCount(Math.max(0, rtcCount - 1))}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs cursor-pointer active:scale-95"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <input
                  type="number"
                  min="0"
                  value={rtcCount}
                  onChange={(e) => setRtcCount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-14 text-center py-1 bg-slate-900 border border-slate-700 rounded-lg text-white font-bold text-xs font-mono"
                />
                <button
                  type="button"
                  onClick={() => setRtcCount(rtcCount + 1)}
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center font-bold text-xs cursor-pointer active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <span className="text-[11px] text-yellow-300/80 font-mono mt-2 block text-right">
              = ₹{rtcCount * 25}
            </span>
          </div>

          {/* 4. Kaveri EC Checkbox */}
          <div 
            onClick={() => setIncludeEc(!includeEc)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
              includeEc 
                ? 'bg-sky-950/80 border-sky-400 shadow-md' 
                : 'bg-slate-950/80 border-slate-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                includeEc ? 'bg-yellow-400 border-yellow-400 text-slate-950' : 'border-slate-700 bg-slate-900'
              }`}>
                {includeEc && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Kaveri EC (Encumbrance)</span>
                <span className="text-[11px] text-slate-400">15-30 Year Search Assistance</span>
              </div>
            </div>
            <span className="text-xs font-bold text-sky-400 font-mono">+₹75</span>
          </div>

          {/* 5. Spiral Binding Checkbox */}
          <div 
            onClick={() => setIncludeSpiral(!includeSpiral)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
              includeSpiral 
                ? 'bg-sky-950/80 border-sky-400 shadow-md' 
                : 'bg-slate-950/80 border-slate-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                includeSpiral ? 'bg-yellow-400 border-yellow-400 text-slate-950' : 'border-slate-700 bg-slate-900'
              }`}>
                {includeSpiral && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Spiral Book Binding</span>
                <span className="text-[11px] text-slate-400">With Transparent Plastic Covers</span>
              </div>
            </div>
            <span className="text-xs font-bold text-sky-400 font-mono">+₹30</span>
          </div>

          {/* 6. Express Center Pickup SLA Card */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Turnaround SLA</span>
                <span className="text-[11px] text-emerald-400 font-medium">Ready within 10-15 Mins</span>
              </div>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Fast Track
            </span>
          </div>

        </div>

        {/* Action WhatsApp Order Button */}
        <div className="pt-4 border-t border-sky-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 text-center sm:text-left">
            <span>Center Address: <strong>Santhehalli Village, Malur Taluk (Near Bus Stop)</strong></span>
          </div>

          <a
            href={`https://wa.me/917259141830?text=${generateWhatsAppOrder()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Send Order to ER Nithin on WhatsApp (₹{totalPrice})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
