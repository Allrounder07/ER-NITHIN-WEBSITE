import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Copy,
  ExternalLink
} from 'lucide-react';
import { Language, Inquiry } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  language: Language;
  onInquiryCreated?: (inquiry: Inquiry) => void;
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  onInquiryCreated,
  preselectedService = '',
}) => {
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: preselectedService || 'Website Development',
    message: '',
    urgency: 'normal' as 'normal' | 'urgent' | 'immediate',
    preferredContact: 'whatsapp' as 'whatsapp' | 'phone' | 'email',
  });

  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg(language === 'en' ? 'Please enter your name' : 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg(language === 'en' ? 'Please enter a valid 10-digit mobile number' : 'ದಯವಿಟ್ಟು ಸರಿಯಾದ ೧೦-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg(language === 'en' ? 'Please enter a brief description of your requirement' : 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಅಗತ್ಯದ ಬಗ್ಗೆ ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಬರೆಯಿರಿ');
      return;
    }

    const newInquiry: Inquiry = {
      id: `ER-${Date.now().toString().slice(-6)}`,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || undefined,
      serviceCategory: formData.serviceCategory,
      message: formData.message.trim(),
      urgency: formData.urgency,
      preferredContact: formData.preferredContact,
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    // Store to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('ernithin_inquiries') || '[]');
      existing.unshift(newInquiry);
      localStorage.setItem('ernithin_inquiries', JSON.stringify(existing));
    } catch (err) {
      console.error('LocalStorage write error', err);
    }

    if (onInquiryCreated) {
      onInquiryCreated(newInquiry);
    }

    setSubmittedInquiry(newInquiry);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceCategory: 'Website Development',
      message: '',
      urgency: 'normal',
      preferredContact: 'whatsapp',
    });
  };

  const copyPhoneNumber = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const createWhatsAppInquiryLink = (inquiry: Inquiry) => {
    const text = `Hello ER Nithin! I just submitted an inquiry on your website:
• Ref ID: ${inquiry.id}
• Name: ${inquiry.name}
• Phone: ${inquiry.phone}
• Service: ${inquiry.serviceCategory}
• Urgency: ${inquiry.urgency.toUpperCase()}
• Details: ${inquiry.message}`;
    return `https://wa.me/917259141830?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/90 relative border-t border-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span>{language === 'en' ? 'DIRECT CONTACT & INQUIRIES' : 'ನೇರ ಸಂಪರ್ಕ ಮತ್ತು ವಿಚಾರಣೆ'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Let's Discuss <span className="text-yellow-400">Your Next Digital Move</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {language === 'en'
              ? 'Connect directly with ER Nithin via WhatsApp, telephone, email or the fast inquiry form below.'
              : 'ವಾಟ್ಸಾಪ್, ದೂರವಾಣಿ ಅಥವಾ ಕೆಳಗಿನ ಫಾರ್ಮ್ ಮೂಲಕ ನೇರವಾಗಿ ಎಂಜಿನಿಯರ್ ನಿತಿನ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Phone & Center Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-950 border border-emerald-500/40 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                    <MessageSquare className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">
                      WhatsApp Quick Chat
                    </h3>
                    <span className="text-xs text-emerald-400 font-mono">
                      Fastest Response Time
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-4">
                Chat directly with software engineer ER Nithin. Send PDFs, request website estimates, or ask about RTC/Pani land records.
              </p>

              <a
                href="https://wa.me/917259141830?text=Hello%20ER%20Nithin,%20I%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Open WhatsApp (+91 7259141830)</span>
              </a>
            </div>

            {/* Direct Telephone Numbers */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-sky-900/50 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono">
                📞 Direct Telephones
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <div>
                      <span className="text-xs text-slate-400 block">Primary Number</span>
                      <a href="tel:7259141830" className="text-sm font-bold text-white hover:text-yellow-400 font-mono">
                        +91 7259141830
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyPhoneNumber('7259141830')}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                    title="Copy Number"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <div>
                      <span className="text-xs text-slate-400 block">Secondary Helpline</span>
                      <a href="tel:7899956302" className="text-sm font-bold text-white hover:text-yellow-400 font-mono">
                        +91 7899956302
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyPhoneNumber('7899956302')}
                    className="p-2 text-slate-400 hover:text-white transition-colors"
                    title="Copy Number"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {copiedPhone && (
                <div className="text-[11px] text-emerald-400 font-medium text-center">
                  ✓ Phone number copied to clipboard!
                </div>
              )}
            </div>

            {/* Email & Location Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-sky-900/50 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-sky-950 text-sky-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Official Email</span>
                  <a href="mailto:ramadevinithin5656@gmail.com" className="text-sm font-semibold text-white hover:text-yellow-400 break-all">
                    ramadevinithin5656@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <div className="p-2.5 rounded-lg bg-sky-950 text-yellow-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Physical Center Address</span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    Santhehalli Village, Malur Taluk,<br />
                    Kolar District – 563130, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <div className="p-2.5 rounded-lg bg-sky-950 text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-300">
                  <span className="text-slate-400 block font-mono">Working Hours</span>
                  <p><strong>Mon – Sat:</strong> 8:00 AM – 8:30 PM</p>
                  <p><strong>Sunday:</strong> 9:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-sky-800/50 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 font-mono">
                  FAST INQUIRY FORM
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                  Send Your Project or Service Request
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details. We usually respond within 30 minutes during working hours.
                </p>
              </div>

              {submittedInquiry ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 bg-emerald-600/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-400/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      Inquiry Received Successfully!
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      Thank You, {submittedInquiry.name}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                      Your inquiry (Ref: <strong>{submittedInquiry.id}</strong>) for <strong>{submittedInquiry.serviceCategory}</strong> has been logged. ER Nithin will contact you promptly at {submittedInquiry.phone}.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={createWhatsAppInquiryLink(submittedInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Instant Connect on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmittedInquiry(null)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar / Anitha"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Mobile Number (WhatsApp Preferred) <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit number (e.g. 9876543210)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Service Category
                      </label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                      >
                        <option value="Website Development">Website Development (Custom / Showcase)</option>
                        <option value="E-Commerce Store">E-Commerce Website & Online Store</option>
                        <option value="Web Applications & Software">Web Application / Desktop Software</option>
                        <option value="Database Integration">Database Integration (MySQL / PostgreSQL)</option>
                        <option value="RTC / Pani Land Records">RTC / Bhoomi Pani Land Records</option>
                        <option value="Old Pani Historical Records">Old Pani / Historical Archives</option>
                        <option value="Kaveri EC Encumbrance">Kaveri EC (Encumbrance Certificate)</option>
                        <option value="Aadhaar Assistance">Aadhaar Download / PVC Card Assistance</option>
                        <option value="Color & BW Xerox">Colour & Black & White Xerox</option>
                        <option value="Document & Photo Printing">Document & Photo Printing</option>
                        <option value="Student Project & Binding">Children Project Work & Assignments</option>
                        <option value="Other Inquiries">Other Inquiries</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgency & Preferred Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Timeline / Urgency
                      </label>
                      <div className="flex gap-2">
                        {[
                          { id: 'normal', label: 'Standard' },
                          { id: 'urgent', label: 'Urgent (2-3 Days)' },
                          { id: 'immediate', label: 'Today / Immediate' },
                        ].map((urg) => (
                          <button
                            key={urg.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, urgency: urg.id as any })}
                            className={`flex-1 py-1.5 px-2 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                              formData.urgency === urg.id
                                ? 'bg-sky-900 text-yellow-300 border-sky-400'
                                : 'bg-slate-900 text-slate-400 border-slate-800'
                            }`}
                          >
                            {urg.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Contact Mode
                      </label>
                      <div className="flex gap-2">
                        {[
                          { id: 'whatsapp', label: 'WhatsApp' },
                          { id: 'phone', label: 'Direct Call' },
                          { id: 'email', label: 'Email' },
                        ].map((mode) => (
                          <button
                            key={mode.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: mode.id as any })}
                            className={`flex-1 py-1.5 px-2 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                              formData.preferredContact === mode.id
                                ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                                : 'bg-slate-900 text-slate-400 border-slate-800'
                            }`}
                          >
                            {mode.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Describe Your Project / Service Requirement <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details such as your business type, required features, survey number (if land records), or pages..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-yellow-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to ER Nithin</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 Your contact details are stored securely and never shared with 3rd parties.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
