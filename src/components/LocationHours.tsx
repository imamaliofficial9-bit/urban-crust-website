import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, Copy, Check } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(businessInfo.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FBBF24]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FBBF24]">
              FIND US
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            LOCATION & OPENING HOURS
          </h2>
          <p className="mt-2 text-stone-400 text-sm max-w-xl">
            Drop by for dining in, quick counter takeaway, or reach out directly for immediate delivery assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Business Location Info & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-[#0f0f13] border border-[#222228] shadow-xl">
            <div className="space-y-8">
              {/* Address Block */}
              <div>
                <div className="flex items-center gap-2 text-[#FBBF24] mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Address & Landmarks
                  </span>
                </div>
                <p className="text-base text-white font-semibold leading-snug">
                  {businessInfo.address.street}
                </p>
                <p className="text-sm text-stone-400">
                  {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  {businessInfo.address.landmark}
                </p>

                <button
                  onClick={handleCopyAddress}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#FBBF24] hover:text-[#f59e0b] font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Address copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Hours Block */}
              <div>
                <div className="flex items-center gap-2 text-[#FBBF24] mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Opening Hours
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1 border-b border-[#1f1f26]">
                    <span className="text-stone-300">Mon – Thu</span>
                    <span className="font-semibold text-white">11:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1f1f26]">
                    <span className="text-stone-300">Fri – Sun</span>
                    <span className="font-semibold text-[#FBBF24]">11:00 AM – 12:00 Midnight</span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 mt-2">
                  * Kitchen closes 30 minutes prior to closing time
                </p>
              </div>

              {/* Contact Direct */}
              <div>
                <div className="flex items-center gap-2 text-[#FBBF24] mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Direct Orders & Inquiries
                  </span>
                </div>
                <p className="text-base font-bold text-white tabular-nums">
                  {businessInfo.displayPhone}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  {businessInfo.email}
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 border-t border-[#1f1f26] flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                  businessInfo.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={`tel:${businessInfo.phone}`}
                className="flex-1 py-3 px-4 rounded-md bg-[#16161b] hover:bg-[#FBBF24] text-stone-200 hover:text-black border border-[#2d2d35] hover:border-[#FBBF24] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Style Interactive Graphic */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#222228] bg-[#0c0c0f] relative min-h-[420px] flex flex-col justify-between p-6 shadow-2xl">
            {/* Map Background Canvas Styling */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#080808] via-[#101015]/80 to-[#181822]/60 pointer-events-none" />

            {/* Simulated Road Lines & Metro Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-25">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="20%" x2="100%" y2="40%" stroke="#444" strokeWidth="6" />
                <line x1="15%" y1="0" x2="35%" y2="100%" stroke="#333" strokeWidth="5" />
                <line x1="60%" y1="0" x2="85%" y2="100%" stroke="#333" strokeWidth="4" />
                <line x1="0" y1="75%" x2="100%" y2="60%" stroke="#444" strokeWidth="5" />
                {/* Metro Ring */}
                <circle cx="50%" cy="50%" r="90" stroke="#FBBF24" strokeWidth="1" strokeDasharray="6 6" fill="none" opacity="0.3" />
              </svg>
            </div>

            {/* Top Bar on Map */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#FBBF24]/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold text-stone-200">
                  Live Location · Downtown Metro
                </span>
              </div>

              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#18181f]/90 hover:bg-[#FBBF24] hover:text-black border border-[#2d2d38] text-xs font-medium text-stone-300 transition-colors flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Center Map Pin */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center py-12">
              <div className="relative group cursor-pointer">
                {/* Pulsing ring */}
                <div className="absolute -inset-4 bg-[#FBBF24]/20 rounded-full blur-md animate-pulse" />
                {/* Pin Circle */}
                <div className="relative w-14 h-14 rounded-full bg-[#FBBF24] text-black shadow-2xl flex items-center justify-center font-extrabold text-sm border-2 border-white">
                  <MapPin className="w-7 h-7" />
                </div>
              </div>

              <div className="mt-4 px-4 py-2 rounded-xl bg-black/90 backdrop-blur-md border border-[#FBBF24]/40 text-center shadow-xl">
                <h4 className="text-sm font-bold text-white tracking-wide">
                  URBAN CRUST CAFÉ
                </h4>
                <p className="text-[11px] text-stone-400">
                  {businessInfo.address.full}
                </p>
              </div>
            </div>

            {/* Bottom Actions on Map */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 bg-black/40 backdrop-blur-sm -mx-6 -mb-6 p-6 rounded-b-2xl">
              <div className="text-xs text-stone-300">
                <span className="font-semibold text-white">Parking Available</span> · Free customer parking in rear plaza
              </div>

              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#FBBF24] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#f59e0b] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
