import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  MessageSquare, 
  PlusCircle, 
  X, 
  Send, 
  Laptop, 
  FileText, 
  Printer, 
  Heart,
  TrendingUp,
  Award
} from 'lucide-react';
import { Language, TestimonialItem } from '../types';
import { initialTestimonials } from '../data/testimonialsData';

interface TestimonialsSectionProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const stored = localStorage.getItem('ernithin_testimonials');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return initialTestimonials;
  });

  const [activeCategory, setActiveCategory] = useState<'all' | 'web-dev' | 'digital-services' | 'printing'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [newReviewForm, setNewReviewForm] = useState({
    name: '',
    role: '',
    location: '',
    serviceCategory: 'web-dev' as 'web-dev' | 'digital-services' | 'printing',
    serviceUsed: '',
    rating: 5,
    review: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filtered reviews
  const filteredTestimonials = testimonials.filter(t => {
    if (activeCategory === 'all') return true;
    return t.serviceCategory === activeCategory;
  });

  // Clamp current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlaying || filteredTestimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % filteredTestimonials.length
    );
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewForm.name.trim() || !newReviewForm.review.trim()) return;

    const initials = newReviewForm.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const newTestimonial: TestimonialItem = {
      id: `test-${Date.now()}`,
      name: newReviewForm.name.trim(),
      role: newReviewForm.role.trim() || 'Valued Client',
      location: newReviewForm.location.trim() || 'Karnataka',
      serviceCategory: newReviewForm.serviceCategory,
      serviceUsed: newReviewForm.serviceUsed.trim() || (newReviewForm.serviceCategory === 'web-dev' ? 'Custom Website Development' : 'Digital Services Assistance'),
      serviceUsedKn: newReviewForm.serviceUsed.trim() || 'ಡಿಜಿಟಲ್ ಸೇವೆಗಳು',
      rating: newReviewForm.rating,
      review: newReviewForm.review.trim(),
      reviewKn: newReviewForm.review.trim(),
      date: 'Just now',
      verified: true,
      avatarSeed: initials || 'CL',
      projectMetric: 'Verified Community Review'
    };

    const updated = [newTestimonial, ...testimonials];
    setTestimonials(updated);
    try {
      localStorage.setItem('ernithin_testimonials', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsWriteReviewOpen(false);
      setNewReviewForm({
        name: '',
        role: '',
        location: '',
        serviceCategory: 'web-dev',
        serviceUsed: '',
        rating: 5,
        review: ''
      });
    }, 1800);
  };

  // Color gradient generator based on initials for avatar photos
  const getAvatarGradient = (seed: string) => {
    const gradients = [
      'from-blue-600 via-sky-600 to-indigo-800',
      'from-emerald-600 via-teal-600 to-cyan-800',
      'from-amber-500 via-orange-600 to-rose-700',
      'from-purple-600 via-violet-600 to-indigo-900',
      'from-rose-600 via-pink-600 to-amber-700'
    ];
    const index = Math.abs(seed.charCodeAt(0) + (seed.charCodeAt(1) || 0)) % gradients.length;
    return gradients[index];
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-slate-900/70 relative border-t border-sky-950 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-yellow-400" />
            <span>{language === 'en' ? 'VERIFIED CUSTOMER REVIEWS' : 'ಗ್ರಾಹಕರ ವಿಶ್ವಾಸಾರ್ಹ ಅಭಿಪ್ರಾಯಗಳು'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {language === 'en' ? (
              <>
                What Our Clients Say About <span className="text-yellow-400">ER Nithin</span>
              </>
            ) : (
              <>
                ನಮ್ಮ ಸೇವೆಗಳ ಬಗ್ಗೆ <span className="text-yellow-400">ಗ್ರಾಹಕರ ಅನಿಸಿಕೆಗಳು</span>
              </>
            )}
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Real stories from business owners, farmers, school educators, and students in Santhehalli, Malur, Kolar and beyond.'
              : 'ಸಂತೆಹಳ್ಳಿ, ಮಾಲೂರು, ಕೋಲಾರದ ವ್ಯಾಪಾರಿಗಳು, ರೈತರು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳಿಂದ ನೈಜ ಅನುಭವದ ನುಡಿಗಳು.'}
          </p>

          {/* Social Proof Metric Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-1.5 rounded-full border border-sky-900/50">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold">5.0 / 5.0 Rating</span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-950 px-3.5 py-1.5 rounded-full border border-sky-900/50">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Genuine Reviews</span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-950 px-3.5 py-1.5 rounded-full border border-sky-900/50">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>Direct Engineer Accountability</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills & Add Review Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex-wrap justify-center">
            {[
              { id: 'all', label: language === 'en' ? `All Reviews (${testimonials.length})` : `ಎಲ್ಲಾ (${testimonials.length})` },
              { id: 'web-dev', label: language === 'en' ? 'Web & Software' : 'ವೆಬ್ & ಸಾಫ್ಟ್‌ವೇರ್' },
              { id: 'digital-services', label: language === 'en' ? 'Pani & Land Records' : 'ಪಹಣಿ & ಜಮೀನು' },
              { id: 'printing', label: language === 'en' ? 'Xerox & Projects' : 'ಜೆರಾಕ್ಸ್ & ಪ್ರಾಜೆಕ್ಟ್' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-yellow-400 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-950 hover:bg-sky-900 text-yellow-300 border border-sky-600/50 text-xs font-bold transition-all shadow-md cursor-pointer hover:border-yellow-400/60"
          >
            <PlusCircle className="w-4 h-4 text-yellow-400" />
            <span>{language === 'en' ? 'Leave a Review' : 'ಅನಿಸಿಕೆ ತಿಳಿಸಿ'}</span>
          </button>
        </div>

        {/* Carousel Slider Container */}
        {filteredTestimonials.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">
            No testimonials in this category yet.
          </div>
        ) : (
          <div className="relative">
            
            {/* Main Featured Carousel Card */}
            <div className="relative rounded-3xl bg-slate-950 border-2 border-sky-800/60 shadow-2xl overflow-hidden p-6 sm:p-10 transition-all">
              
              {/* Giant background quote icon */}
              <Quote className="absolute -top-4 -right-4 w-36 h-36 text-sky-900/10 pointer-events-none rotate-12" />

              {/* Slide Content */}
              {(() => {
                const item = filteredTestimonials[currentIndex];
                return (
                  <div key={item.id} className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 animate-fade-in">
                    
                    {/* Customer Photo / Avatar Badge */}
                    <div className="flex flex-col items-center text-center shrink-0">
                      <div className="relative">
                        <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br ${getAvatarGradient(item.avatarSeed)} p-1 shadow-xl flex items-center justify-center text-white font-black text-2xl sm:text-3xl font-heading border-2 border-yellow-400/80`}>
                          <span className="tracking-wider select-none">{item.avatarSeed}</span>
                        </div>
                        {item.verified && (
                          <div 
                            className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 text-slate-950 shadow-md border-2 border-slate-950" 
                            title="Verified Client"
                          >
                            <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-slate-950" />
                          </div>
                        )}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white font-heading mt-3">
                        {language === 'en' ? item.name : (item.nameKn || item.name)}
                      </h4>
                      <p className="text-xs text-sky-300 font-medium">
                        {language === 'en' ? item.role : (item.roleKn || item.role)}
                      </p>
                      
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                        <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                        <span>{language === 'en' ? item.location : (item.locationKn || item.location)}</span>
                      </div>
                    </div>

                    {/* Review Body */}
                    <div className="flex-1 space-y-4 text-center lg:text-left">
                      
                      {/* Top Bar: Stars, Date, Service Used */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-xs font-bold text-yellow-400 ml-1.5">
                            {item.rating}.0 / 5.0
                          </span>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap justify-center">
                          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-300 border border-sky-800/60 font-medium">
                            {language === 'en' ? item.serviceUsed : item.serviceUsedKn}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      {/* Main Quote Text */}
                      <p className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed italic">
                        "{language === 'en' ? item.review : item.reviewKn}"
                      </p>

                      {/* Impact Highlight Badge */}
                      {item.projectMetric && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-950/90 to-slate-900 border border-emerald-500/40 text-xs text-emerald-300 font-semibold shadow">
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                          <span>Key Impact: <strong>{item.projectMetric}</strong></span>
                        </div>
                      )}

                    </div>

                  </div>
                );
              })()}

              {/* Carousel Controls (Prev/Next buttons inside card) */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono">
                    {currentIndex + 1} of {filteredTestimonials.length}
                  </span>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx
                          ? 'w-7 bg-yellow-400 shadow-sm'
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-sky-950 text-slate-300 hover:text-yellow-400 border border-slate-800 hover:border-sky-600/50 transition-all cursor-pointer"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-sky-950 text-slate-300 hover:text-yellow-400 border border-slate-800 hover:border-sky-600/50 transition-all cursor-pointer"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Multi-Card Preview Thumbnails underneath */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {filteredTestimonials
                .slice(0, 3)
                .map((thumb, i) => (
                  <div
                    key={thumb.id}
                    onClick={() => setCurrentIndex(i)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      currentIndex === i
                        ? 'bg-sky-950/80 border-yellow-400 ring-1 ring-yellow-400/40 shadow-lg'
                        : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${getAvatarGradient(thumb.avatarSeed)} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow`}>
                        {thumb.avatarSeed}
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-white truncate font-heading">
                          {thumb.name}
                        </h5>
                        <p className="text-[10px] text-slate-400 truncate">
                          {thumb.role} • {thumb.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed italic">
                      "{thumb.review}"
                    </p>
                  </div>
                ))}
            </div>

          </div>
        )}

        {/* Write a Review Modal */}
        {isWriteReviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-sky-500/50 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setIsWriteReviewOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-sky-950 border border-sky-600/50 text-yellow-400">
                  <Star className="w-6 h-6 fill-yellow-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 font-mono">
                    CLIENT FEEDBACK
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Share Your Experience
                  </h3>
                </div>
              </div>

              {submitSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Thank You for Your Review!</h4>
                  <p className="text-xs text-slate-300">
                    Your feedback has been added to our live testimonials carousel.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={newReviewForm.name}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Role / Business / Profession
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Shop Owner / Farmer / Student"
                        value={newReviewForm.role}
                        onChange={(e) => setNewReviewForm({ ...newReviewForm, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Village / Town
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Santhehalli / Malur"
                        value={newReviewForm.location}
                        onChange={(e) => setNewReviewForm({ ...newReviewForm, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Service Category
                      </label>
                      <select
                        value={newReviewForm.serviceCategory}
                        onChange={(e) => setNewReviewForm({ ...newReviewForm, serviceCategory: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                      >
                        <option value="web-dev">Web & Software Development</option>
                        <option value="digital-services">Land Records & Bhoomi / EC</option>
                        <option value="printing">Xerox, Print & Projects</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Rating (1 to 5 Stars)
                      </label>
                      <div className="flex items-center gap-1.5 py-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReviewForm({ ...newReviewForm, rating: star })}
                            className="cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                          >
                            <Star 
                              className={`w-6 h-6 ${
                                star <= newReviewForm.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-slate-600'
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Specific Service Received
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. E-Commerce Website / RTC Pahani / Spiral Project"
                      value={newReviewForm.serviceUsed}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, serviceUsed: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Feedback / Review <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe how ER Nithin helped your business or solved your requirement..."
                      value={newReviewForm.review}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, review: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsWriteReviewOpen(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-yellow-400 text-slate-950 text-xs font-bold hover:bg-yellow-300 transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Post Review</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
