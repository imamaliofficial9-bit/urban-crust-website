import React, { useState } from 'react';
import { ArrowRight, Flame, Clock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenOrderModal: (item: any) => void;
}

const heroSlides = [
  {
    title: "CRAVE IT. TASTE IT. LOVE IT.",
    highlight: "Gourmet Angus Cheeseburger",
    desc: "Freshly prepared fast food, delicious café favorites, and bold flavors made to bring people together.",
    image: "/src/assets/images/hero_gourmet_burger_1790227742661.jpg",
    price: "$13.95",
    tag: "Chef's Prime Cut",
    category: "Signature Burger",
  },
  {
    title: "CRUNCH THAT SPEAKS VOLUMES.",
    highlight: "Golden Buttermilk Crispy Chicken",
    desc: "Brined for 18 hours with 11 secret herbs & spices, fried to shatteringly crisp perfection.",
    image: "/src/assets/images/crispy_chicken_tenders_1790227794675.jpg",
    price: "$11.50",
    tag: "Crispy & Tender",
    category: "Crispy Chicken",
  },
  {
    title: "SLOW FERMENTED. CRISPY CRUST.",
    highlight: "Wood-Fired Truffle Pizza",
    desc: "Natural sourdough fermented for 48 hours, loaded with wild mushrooms, fior di latte & hot honey.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    price: "$16.50",
    tag: "Stone Oven Baked",
    category: "Artisan Pizza",
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenOrderModal }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = heroSlides[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#080808]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FBBF24]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#D97706]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#FBBF24]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FBBF24]">
                WELCOME TO URBAN CRUST
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-tight text-white leading-[1.08] mb-6">
              {slide.title.split('. ').map((part, idx) => (
                <span key={idx} className="block">
                  {idx === 1 ? (
                    <span className="text-gold-gradient italic">{part}. </span>
                  ) : (
                    <span>{part}{idx === 0 ? '. ' : ''}</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Supporting Text */}
            <p className="text-stone-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8">
              {slide.desc}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-bold text-sm tracking-wider uppercase rounded-md shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.55)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 border border-[#FBBF24]/40 hover:border-[#FBBF24] text-stone-200 hover:text-white bg-[#141414]/70 hover:bg-[#1a1a1a] font-medium text-sm tracking-wider uppercase rounded-md transition-all flex items-center gap-2"
              >
                <span>Contact Us</span>
              </a>

              <button
                onClick={() =>
                  onOpenOrderModal({
                    id: 'hero-current',
                    name: slide.highlight,
                    price: parseFloat(slide.price.replace('$', '')),
                    category: slide.category,
                    image: slide.image,
                    description: slide.desc,
                  })
                }
                className="px-4 py-3.5 text-xs font-semibold text-[#FBBF24] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Flame className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>Quick Order {slide.price}</span>
              </button>
            </div>

            {/* Supporting information row */}
            <div className="pt-6 border-t border-[#222] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs tracking-wider text-stone-400 uppercase font-medium">
              <span className="flex items-center gap-1.5 text-stone-300">
                <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
                Freshly Prepared
              </span>
              <span className="text-stone-600">·</span>
              <span className="flex items-center gap-1.5 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
                Quality Ingredients
              </span>
              <span className="text-stone-600">·</span>
              <span className="flex items-center gap-1.5 text-stone-300">
                <Clock className="w-3.5 h-3.5 text-[#FBBF24]" />
                Great Taste
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual inspired by Reference Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient golden halo */}
            <div className="absolute inset-0 max-w-[420px] max-h-[420px] m-auto bg-gradient-to-tr from-[#FBBF24]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[500px] mx-auto group">
              {/* Outer decorative golden border frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#FBBF24]/25 bg-[#121214] shadow-2xl p-2.5 transition-transform duration-500 group-hover:scale-[1.01]">
                <div className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-black">
                  <img
                    src={slide.image}
                    alt={slide.highlight}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Contrast gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Food Card Floating Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-black/75 backdrop-blur-md border border-[#FBBF24]/30">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[#FBBF24] font-bold block">
                        {slide.tag}
                      </span>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {slide.highlight}
                      </h3>
                    </div>
                    <span className="text-base font-extrabold text-[#FBBF24] tabular-nums">
                      {slide.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Controls matching reference bottom pill */}
              <div className="mt-4 flex items-center justify-between px-3 py-2 bg-[#121214]/90 backdrop-blur-sm border border-[#262626] rounded-xl text-xs text-stone-300">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full hover:bg-[#FBBF24] hover:text-black transition-colors"
                  aria-label="Previous featured dish"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <span className="font-semibold text-stone-200">
                    0{currentSlideIndex + 1}
                  </span>
                  <span className="text-stone-600">/</span>
                  <span className="text-stone-500">
                    0{heroSlides.length}
                  </span>
                  <span className="text-stone-600">·</span>
                  <span className="text-[11px] text-stone-400 truncate max-w-[150px]">
                    {slide.highlight}
                  </span>
                </div>

                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full hover:bg-[#FBBF24] hover:text-black transition-colors"
                  aria-label="Next featured dish"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Strip: Live Café Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="py-3 px-5 rounded-lg bg-[#111113] border border-[#222] flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-stone-200 font-medium">Urban Crust is Open Today</span>
            <span className="hidden sm:inline text-stone-500">|</span>
            <span className="hidden sm:inline text-stone-400">{businessInfo.hours.weekdays.split(':')[1]}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-stone-300">Fast Dine-In & Takeaway Available</span>
            <a
              href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hi Urban Crust! I would like to order fast food for pickup.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#FBBF24] hover:underline font-semibold"
            >
              Order on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
