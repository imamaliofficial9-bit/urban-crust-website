import React, { useState } from 'react';
import { MessageCircle, Phone, Send, CheckCircle2, Calendar, Users, Clock } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const ContactSection: React.FC = () => {
  const [formType, setFormType] = useState<'message' | 'table'>('table');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2 Guests',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '19:00',
        guests: '2 Guests',
        message: '',
      });
    }, 4000);
  };

  const handleWhatsAppDirect = () => {
    let msg = `Hi Urban Crust! I'm ${formData.name || 'a customer'}. `;
    if (formType === 'table') {
      msg += `I would like to reserve a table for ${formData.guests} on ${formData.date || 'today'} at ${formData.time}.`;
    } else {
      msg += `My inquiry: ${formData.message || 'I would like to know more about menu & catering.'}`;
    }
    window.open(`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FBBF24]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Call / WhatsApp Pitch */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#FBBF24]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FBBF24]">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4 leading-tight">
              READY FOR YOUR<br />
              <span className="text-gold-gradient">NEXT CRAVING?</span>
            </h2>

            <p className="text-stone-300 text-base leading-relaxed mb-8 max-w-lg">
              Visit Urban Crust or get in touch with us today. Whether it's an impromptu dinner, birthday celebration, or quick takeaway order, we're ready for you.
            </p>

            {/* Main Conversion CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                  businessInfo.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-extrabold text-xs tracking-wider uppercase rounded-md shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_28px_rgba(251,191,36,0.55)] transition-all flex items-center gap-2.5 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${businessInfo.phone}`}
                className="px-6 py-4 border border-[#FBBF24]/40 hover:border-[#FBBF24] text-stone-200 hover:text-white bg-[#141417] text-xs font-bold tracking-wider uppercase rounded-md transition-colors flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#FBBF24]" />
                <span>Call Now: {businessInfo.displayPhone}</span>
              </a>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-xl bg-[#121216] border border-[#222228] flex items-center gap-3 text-xs text-stone-400">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
              <span>We usually reply to WhatsApp inquiries and phone orders within 2 minutes during business hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Table / Order Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#111115] border border-[#26262e] shadow-2xl relative">
              {/* Form Toggle: Table Reservation vs Quick Inquiry */}
              <div className="flex p-1 rounded-xl bg-[#0b0b0e] border border-[#202026] mb-6">
                <button
                  type="button"
                  onClick={() => setFormType('table')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                    formType === 'table'
                      ? 'bg-[#FBBF24] text-black shadow-sm'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Table Reservation
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('message')}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                    formType === 'message'
                      ? 'bg-[#FBBF24] text-black shadow-sm'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  General Inquiry
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-stone-300 text-sm max-w-sm mx-auto mb-6">
                    Thank you, {formData.name || 'Friend'}! Our café manager is reviewing your request and will confirm shortly.
                  </p>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FBBF24] hover:underline"
                  >
                    <span>Instant Confirmation on WhatsApp →</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181e] border border-[#2b2b35] text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#FBBF24]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181e] border border-[#2b2b35] text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#FBBF24]"
                      />
                    </div>
                  </div>

                  {formType === 'table' ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                            Date
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              required
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181e] border border-[#2b2b35] text-white text-xs focus:outline-none focus:border-[#FBBF24]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                            Time
                          </label>
                          <select
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-lg bg-[#18181e] border border-[#2b2b35] text-white text-xs focus:outline-none focus:border-[#FBBF24]"
                          >
                            <option value="12:00">12:00 PM (Lunch)</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="19:00">7:00 PM (Dinner)</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="22:00">10:00 PM (Late)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                            Party Size
                          </label>
                          <select
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-lg bg-[#18181e] border border-[#2b2b35] text-white text-xs focus:outline-none focus:border-[#FBBF24]"
                          >
                            <option value="1 Guest">1 Guest</option>
                            <option value="2 Guests">2 Guests (Couple)</option>
                            <option value="3-4 Guests">3–4 Guests</option>
                            <option value="5-8 Guests">5–8 Guests (Group)</option>
                            <option value="Party 8+">8+ Guests (Celebration)</option>
                          </select>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                        Your Message / Question
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what you have in mind (catering, special dietary needs, group bookings)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181e] border border-[#2b2b35] text-white placeholder-stone-500 text-sm focus:outline-none focus:border-[#FBBF24]"
                      />
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{formType === 'table' ? 'Book Reservation' : 'Submit Inquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="py-3 px-4 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 bg-emerald-950/20 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Send to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
