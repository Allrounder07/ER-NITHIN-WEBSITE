import React from 'react';
import { 
  X, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  MessageSquare, 
  FileText, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { ServiceItem, Language } from '../types';

interface DocumentRequirementModalProps {
  service: ServiceItem | null;
  language: Language;
  onClose: () => void;
}

export const DocumentRequirementModal: React.FC<DocumentRequirementModalProps> = ({
  service,
  language,
  onClose,
}) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello ER Nithin, I am preparing documents for ${service.title}. Please guide me on the next step.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-sky-500/40 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3.5 mb-6">
          <div className="p-3 rounded-xl bg-sky-950 border border-sky-600/50 text-yellow-400 shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 font-mono">
              DOCUMENT CHECKLIST & PROCESS GUIDE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5">
              {language === 'en' ? service.title : service.titleKn}
            </h3>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {language === 'en' ? service.turnaroundTime : service.turnaroundTimeKn}
              </span>
              {service.priceHint && (
                <span>• {service.priceHint}</span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
          {language === 'en' ? service.fullDesc : service.fullDescKn}
        </p>

        {/* Requirements Checklist */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono mb-3">
            {language === 'en' ? '📋 What You Need to Bring / Provide:' : '📋 ನೀವು ತರಬೇಕಾದ / ಒದಗಿಸಬೇಕಾದ ವಿವರಗಳು:'}
          </h4>

          <div className="space-y-2">
            {(language === 'en' ? (service.requirements || service.features) : (service.requirementsKn || service.featuresKn)).map((req, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Official Portal / Disclaimer Notice */}
        {service.officialPortalNote && (
          <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/40 text-xs text-slate-300 mb-6 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
            <span className="leading-snug">
              {language === 'en' ? service.officialPortalNote : service.officialPortalNoteKn}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Location: <strong>Santhehalli Village Center</strong></span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Close
            </button>

            <a
              href={`https://wa.me/917259141830?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
