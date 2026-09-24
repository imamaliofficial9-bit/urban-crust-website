import React from 'react';
import { Sparkles, ArrowRight, Tag } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const SpecialOffer: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#17171d] via-[#121216] to-[#1a1712] border border-[#FBBF24]/30 shadow-2xl overflow-hidden">
          {/* Subtle golden ambient flare */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FBBF24]/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/25">
                <Tag className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FBBF24]">
                  Weekly Chef's Feature
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-3">
                CRAVING SOMETHING GOOD?
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Enjoy our signature Double Smash Burger paired with Truffle Shoestring Fries and an Artisan Nitro Cold Brew for a curated feast.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="px-6 py-3.5 bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-bold text-xs tracking-wider uppercase rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Urban Crust! I would like to order the Weekly Chef Combo Offer.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 border border-[#FBBF24]/40 hover:border-[#FBBF24] text-stone-200 hover:text-white bg-[#141416] text-xs font-semibold tracking-wider uppercase rounded-md transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>Claim on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
