import React from 'react';
import { Sparkles, Utensils, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0d0d0f] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FBBF24]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Reference-Inspired Arch Frame Image */}
          <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px]">
              {/* Decorative golden orbit circle behind arch */}
              <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full border border-[#FBBF24]/30 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border border-[#FBBF24]/20 pointer-events-none" />

              {/* Arch Portal Mask - Exact signature element from reference image */}
              <div className="relative p-2 rounded-t-[180px] rounded-b-2xl border border-[#FBBF24]/35 bg-[#141416] shadow-2xl overflow-hidden group">
                <div className="relative w-full h-[480px] rounded-t-[172px] rounded-b-xl overflow-hidden">
                  <img
                    src="/src/assets/images/about_dish_arch_1790227766001.jpg"
                    alt="Urban Crust specialty dish in gourmet bowl"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Floating mini badge on arch */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-[#FBBF24]/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-[#FBBF24]/10 text-[#FBBF24]">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FBBF24] block">
                            Daily Fresh Kitchen
                          </span>
                          <span className="text-xs text-stone-300 font-medium">
                            Zero frozen compromises
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-stone-400">EST. 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary circular food peek badge */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-28 h-28 rounded-full border-2 border-[#FBBF24] shadow-xl overflow-hidden bg-black p-1">
                <img
                  src="/src/assets/images/signature_smash_burger_1790227779191.jpg"
                  alt="Mini burger highlight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#FBBF24]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FBBF24]">
                ABOUT URBAN CRUST
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
              GOOD FOOD.<br />
              <span className="text-gold-gradient">GREAT MOOD.</span>
            </h2>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-6">
              Urban Crust was born from a simple belief: fast food doesn’t have to compromise on gourmet standards, and a great café should feel vibrant, warm, and unapologetically delicious.
            </p>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-8">
              From our smash burgers seared with crispy laced edges and slow-fermented artisan pizzas to specialty nitro coffees and loaded sides, every item on our menu is crafted in-house to satisfy real cravings. Whether you’re meeting friends, grabbing quick takeaway, or relaxing after work, Urban Crust is your everyday culinary destination.
            </p>

            {/* 3 Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-3.5 rounded-lg bg-[#141417] border border-[#26262a]">
                <div className="flex items-center gap-2 text-[#FBBF24] mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Freshly Prepared
                  </span>
                </div>
                <p className="text-[12px] text-stone-400 leading-snug">
                  Cooked to order upon receipt. Always piping hot & crisp.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#141417] border border-[#26262a]">
                <div className="flex items-center gap-2 text-[#FBBF24] mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Quality Ingredients
                  </span>
                </div>
                <p className="text-[12px] text-stone-400 leading-snug">
                  100% prime cuts, real Wisconsin cheese, fresh local bakery buns.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#141417] border border-[#26262a]">
                <div className="flex items-center gap-2 text-[#FBBF24] mb-1.5">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                    Made With Passion
                  </span>
                </div>
                <p className="text-[12px] text-stone-400 leading-snug">
                  Sauces prepared from scratch daily with artisanal recipes.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-bold text-xs tracking-wider uppercase rounded-md shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Discover Urban Crust Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#experience"
                className="text-xs font-semibold tracking-wider uppercase text-stone-300 hover:text-[#FBBF24] transition-colors"
              >
                Our Café Atmosphere →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
