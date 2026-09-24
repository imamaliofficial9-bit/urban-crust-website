import React from 'react';
import { Wifi, Music, Coffee, Clock, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const CafeExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#26262c] shadow-2xl bg-[#0f0f12]">
          {/* Background image with dramatic dark scrim */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/images/cafe_interior_ambiance_1790227810813.jpg"
              alt="Urban Crust Café Ambiance"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark luxury gradient scrim for extreme readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-2xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#FBBF24]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FBBF24]">
                THE ATMOSPHERE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-6">
              MORE THAN<br />
              <span className="text-gold-gradient">JUST FOOD.</span>
            </h2>

            {/* Description */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              Urban Crust was designed as a sanctuary from the urban rush. We combined the speed and excitement of premium fast casual dining with the soul and warmth of an artisanal espresso café.
            </p>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-10">
              Whether you’re catching up over iced lattes, enjoying a late-night feast with friends, or grabbing freshly packaged burgers on your commute home, every detail—from the acoustic warmth to the custom leather booths—is set up for your comfort.
            </p>

            {/* Ambiance Perks */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FBBF24]/10 text-[#FBBF24]">
                  <Coffee className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-stone-200">
                  Artisan Barista Station
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FBBF24]/10 text-[#FBBF24]">
                  <Wifi className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-stone-200">
                  Gigabit Guest Wi-Fi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FBBF24]/10 text-[#FBBF24]">
                  <Music className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-stone-200">
                  Curated Lo-Fi & Jazz
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FBBF24]/10 text-[#FBBF24]">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-stone-200">
                  Late-Night Hours
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#location"
                className="px-6 py-3.5 bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-bold text-xs tracking-wider uppercase rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Visit Urban Crust</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Urban Crust! I would like to reserve a table for this week.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-md border border-[#FBBF24]/40 hover:border-[#FBBF24] text-stone-200 hover:text-white bg-black/60 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Table Inquiry on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
