import React from 'react';
import { UrbanCrustLogo } from './UrbanCrustLogo';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050506] border-t border-[#1c1c22] pt-16 pb-12 text-stone-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#18181f]">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <UrbanCrustLogo size="md" showText={true} showGlow={false} horizontal={true} />
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6 max-w-sm">
              {businessInfo.shortDesc}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#121217] hover:bg-[#FBBF24] text-stone-300 hover:text-black border border-[#26262e] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#121217] hover:bg-[#FBBF24] text-stone-300 hover:text-black border border-[#26262e] transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                  businessInfo.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#121217] hover:bg-emerald-500 text-stone-300 hover:text-black border border-[#26262e] transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#FBBF24] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FBBF24] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FBBF24] transition-colors">
                  Menu & Pricing
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#FBBF24] transition-colors">
                  Signature Burger
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FBBF24] transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FBBF24] transition-colors">
                  Café Atmosphere
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FBBF24] transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Dining (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-200 mb-4 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FBBF24]" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <div className="pb-2 border-b border-[#181820]">
                <span className="text-stone-300 font-medium block">Monday – Thursday</span>
                <span className="text-stone-400">11:00 AM – 11:00 PM</span>
              </div>
              <div className="pb-2 border-b border-[#181820]">
                <span className="text-stone-300 font-medium block">Friday – Sunday</span>
                <span className="text-[#FBBF24] font-semibold">11:00 AM – Midnight</span>
              </div>
              <p className="text-[11px] text-stone-500 pt-1">
                Dine-in, pickup takeaway, and WhatsApp delivery available daily.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Inquiries (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-200 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
                <span className="text-stone-300">{businessInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                  {businessInfo.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                    businessInfo.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500 hover:text-black transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 {businessInfo.name}. All Rights Reserved. Artisanal Fast Food & Café.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Crafted with passion & quality</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-[#FBBF24] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
