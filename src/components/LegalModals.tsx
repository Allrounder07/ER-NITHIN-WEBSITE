import React from 'react';
import { X, ShieldCheck, FileCheck, Lock } from 'lucide-react';
import { Language } from '../types';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  language: Language;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, language, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-sky-500/40 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-sky-950 text-sky-400 border border-sky-700/50">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-sky-400">DATA PROTECTION COMMITMENT</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Privacy Policy
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                At <strong>ER NITHIN DIGITAL SERVICES</strong> (Santhehalli Village, Malur Taluk, Kolar District – 563130), we hold citizen trust, digital integrity, and data confidentiality as our highest values.
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-yellow-400">
                  1. Zero Retention of Sensitive Identity Data
                </h4>
                <p className="text-xs">
                  We never permanently store, share, sell, or monetize sensitive personal documents (such as Aadhaar biometric details or full identity credentials). Any document or OTP processed for citizen facilitation is used exclusively during the active session with the citizen's explicit permission.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-yellow-400">
                  2. Inquiry Information
                </h4>
                <p className="text-xs">
                  Contact details submitted through our website forms (Name, Telephone, Email, Project Requirements) are used solely to communicate directly with you regarding your service or web development inquiry.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-yellow-400">
                  3. Direct Engineer Communication
                </h4>
                <p className="text-xs">
                  Your project ideas, proprietary concepts, and source requirements are treated with strict confidentiality. All conversations are handled directly by ER Nithin.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-yellow-400">
                  4. Contact & Inquiries
                </h4>
                <p className="text-xs">
                  For any privacy inquiries or to request deletion of your contact data from our inquiry log, please write to <strong>ramadevinithin5656@gmail.com</strong> or call <strong>+91 7259141830</strong>.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-sky-950 text-yellow-400 border border-sky-700/50">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-sky-400">SERVICE AGREEMENT</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Terms of Service
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                Welcome to <strong>ER NITHIN DIGITAL SERVICES</strong>. By accessing our website, commissioning web development services, or visiting our digital center, you agree to these transparent terms.
              </p>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-yellow-400">
                  1. Nature of Digital Document Assistance
                </h4>
                <p className="text-xs">
                  Assistance with Bhoomi RTC/Pani, Kaveri Encumbrance Certificates, and Aadhaar downloads is offered as technical facilitation through publicly accessible government portals. ER Nithin Digital Services is an independent technology enterprise and does not represent an official government department.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-yellow-400">
                  2. Web & Software Development Deliverables
                </h4>
                <p className="text-xs">
                  Website projects, e-commerce stores, and custom software are delivered according to agreed milestones and quotations. Clients receive full code ownership or deployment access upon milestone completion.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-yellow-400">
                  3. Turnaround & Support
                </h4>
                <p className="text-xs">
                  We commit to agreed SLA timelines. Emergency express deliverables are available by prior agreement. Maintenance plans include security updates, cloud monitoring, and priority technical assistance.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider text-yellow-400">
                  4. Jurisdiction
                </h4>
                <p className="text-xs">
                  All transactions and service provisions are subject to the jurisdiction of the courts of Malur and Kolar District, Karnataka.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-yellow-400 text-slate-950 font-bold text-xs hover:bg-yellow-300 transition-colors cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
};
