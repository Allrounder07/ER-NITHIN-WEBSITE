import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Download, 
  Trash2, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  Phone, 
  Mail, 
  Filter,
  Shield,
  FileSpreadsheet
} from 'lucide-react';
import { Inquiry } from '../types';

interface InquiryManagerModalProps {
  onClose: () => void;
}

export const InquiryManagerModal: React.FC<InquiryManagerModalProps> = ({ onClose }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'completed'>('all');

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('ernithin_inquiries') || '[]');
      if (stored.length === 0) {
        // Seed initial sample inquiries for preview/demonstration
        const seed: Inquiry[] = [
          {
            id: 'ER-839102',
            name: 'Kiran Gowda',
            phone: '9845123456',
            email: 'kiran.malur@gmail.com',
            serviceCategory: 'E-Commerce Store',
            message: 'Need an online saree store website for my wholesale shop in Malur with WhatsApp ordering.',
            urgency: 'urgent',
            preferredContact: 'whatsapp',
            createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
            status: 'new'
          },
          {
            id: 'ER-729411',
            name: 'Manjunatha Swamy',
            phone: '9448765432',
            serviceCategory: 'RTC / Pani Land Records',
            message: 'Need 10 years old Bhoomi Pahani and current year RTC for Malur Kasaba survey 42/1.',
            urgency: 'immediate',
            preferredContact: 'phone',
            createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
            status: 'contacted'
          }
        ];
        localStorage.setItem('ernithin_inquiries', JSON.stringify(seed));
        setInquiries(seed);
      } else {
        setInquiries(stored);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateStatus = (id: string, newStatus: 'new' | 'contacted' | 'completed') => {
    const updated = inquiries.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq);
    setInquiries(updated);
    localStorage.setItem('ernithin_inquiries', JSON.stringify(updated));
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter(inq => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem('ernithin_inquiries', JSON.stringify(updated));
  };

  const exportToCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ['ID', 'Name', 'Phone', 'Email', 'Service', 'Urgency', 'Preferred Contact', 'Date', 'Status', 'Message'];
    const rows = inquiries.map(inq => [
      inq.id,
      `"${inq.name}"`,
      `"${inq.phone}"`,
      `"${inq.email || ''}"`,
      `"${inq.serviceCategory}"`,
      inq.urgency,
      inq.preferredContact,
      inq.createdAt,
      inq.status,
      `"${inq.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ERNithin_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
    const matchesSearch = inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          inq.phone.includes(searchQuery) ||
                          inq.serviceCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          inq.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-sky-500/50 p-6 sm:p-8 shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-950 border border-sky-700/50 text-yellow-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 font-mono">
                OWNER CONTROL PANEL
              </span>
              <h3 className="text-xl font-bold text-white font-heading">
                Customer Inquiries & Leads Manager
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportToCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950 hover:bg-sky-900 text-sky-300 border border-sky-700/40 text-xs font-semibold transition-colors cursor-pointer"
              title="Download CSV"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-800/80">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, phone, service, or Ref ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            {(['all', 'new', 'contacted', 'completed'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1 rounded-lg font-semibold uppercase text-[10px] tracking-wider transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-yellow-400 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Inquiries List View */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              No inquiries found matching your filters.
            </div>
          ) : (
            filteredInquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-800/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-bold text-yellow-400">
                      {inq.id}
                    </span>
                    <span className="font-bold text-sm text-white">
                      {inq.name}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      inq.status === 'new'
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        : inq.status === 'contacted'
                        ? 'bg-sky-400/20 text-sky-300 border border-sky-400/30'
                        : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                    }`}>
                      {inq.status}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {new Date(inq.createdAt).toLocaleDateString()} {new Date(inq.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap">
                    <span className="text-sky-300 font-medium">
                      Service: <strong>{inq.serviceCategory}</strong>
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="font-mono text-slate-300">
                      📞 {inq.phone}
                    </span>
                    {inq.email && (
                      <>
                        <span className="text-slate-500">•</span>
                        <span>✉️ {inq.email}</span>
                      </>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 mt-1">
                    "{inq.message}"
                  </p>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`https://wa.me/91${inq.phone}?text=${encodeURIComponent(`Hello ${inq.name}, this is ER Nithin following up on your inquiry (${inq.id}) for ${inq.serviceCategory}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                      title="Reply on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    </a>

                    <a
                      href={`tel:${inq.phone}`}
                      className="p-1.5 rounded-lg bg-sky-900 hover:bg-sky-800 text-sky-300 transition-colors"
                      title="Call Client"
                    >
                      <Phone className="w-3.5 h-3.5 text-yellow-400" />
                    </a>

                    <button
                      onClick={() => deleteInquiry(inq.id)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Status Dropdown */}
                  <select
                    value={inq.status}
                    onChange={(e) => updateStatus(inq.id, e.target.value as any)}
                    className="text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 focus:outline-none"
                  >
                    <option value="new">Mark New</option>
                    <option value="contacted">Mark Contacted</option>
                    <option value="completed">Mark Completed</option>
                  </select>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Total Inquiries Logged: {inquiries.length}</span>
          <span>Data saved locally in browser storage</span>
        </div>

      </div>
    </div>
  );
};
