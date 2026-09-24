import React from 'react';
import { signatureItem } from '../data/menuData';
import { Sparkles, Check, ShoppingBag, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

interface SignatureSectionProps {
  onAddToCart: (item: any) => void;
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({ onAddToCart }) => {
  return (
    <section id="signature" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background golden glows */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FBBF24]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#D97706]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#121216] via-[#101013] to-[#0c0c0e] border border-[#26262c] shadow-2xl relative overflow-hidden">
          {/* Subtle gold accent corner lines */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FBBF24]/10 to-transparent pointer-events-none" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#FBBF24]/30 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#FBBF24]/30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Food Photography with Golden Glow & Shadow */}
            <div className="lg:col-span-6 relative">
              <div className="relative group rounded-2xl overflow-hidden border border-[#FBBF24]/30 shadow-2xl bg-black">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={signatureItem.image}
                    alt={signatureItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Floating Chef's Award Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#FBBF24]/40 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
                    {signatureItem.badge}
                  </span>
                </div>

                {/* Bottom Bar: Fresh Daily Guarantee */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-300">
                    Smashed fresh upon every single order
                  </span>
                  <span className="text-sm font-extrabold text-[#FBBF24] tabular-nums">
                    ${signatureItem.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Signature Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Category label */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#FBBF24]" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FBBF24]">
                  {signatureItem.subtitle}
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
                {signatureItem.tagline}
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                {signatureItem.description}
              </p>

              {/* Ingredients / Highlights list */}
              <div className="space-y-3 mb-8">
                {signatureItem.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-[#FBBF24]/10 text-[#FBBF24]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-300 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price & Order Action Buttons */}
              <div className="pt-6 border-t border-[#26262a] flex flex-wrap items-center gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 block">
                    Special Combo Price
                  </span>
                  <span className="text-3xl font-display font-bold text-[#FBBF24] tabular-nums">
                    ${signatureItem.price.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: signatureItem.id,
                        name: signatureItem.title,
                        category: 'Burgers',
                        price: signatureItem.price,
                        description: signatureItem.description,
                        image: signatureItem.image,
                      })
                    }
                    className="px-6 py-3.5 bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-bold text-xs tracking-wider uppercase rounded-md shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_28px_rgba(251,191,36,0.55)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Order Bag</span>
                  </button>

                  <a
                    href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Urban Crust! I would like to order your signature item: ${signatureItem.title} ($${signatureItem.price.toFixed(
                        2
                      )}).`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-md bg-[#18181c] hover:bg-emerald-600/30 text-stone-200 hover:text-emerald-400 border border-[#333] transition-colors flex items-center gap-2 text-xs font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
