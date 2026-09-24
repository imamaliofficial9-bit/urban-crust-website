import React from 'react';
import { Leaf, Award, Flame, Coffee } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'Quality ingredients prepared with care. Farm-fresh produce, artisanal buns, and prime-grade meats selected every single morning.',
    },
    {
      icon: Award,
      title: 'Great Taste',
      description: 'Bold flavors made to keep you coming back. House-formulated signature sauces and dry rubs developed through obsessive recipe testing.',
    },
    {
      icon: Flame,
      title: 'Freshly Prepared',
      description: 'Food prepared with attention and consistency. Never pre-cooked or held under heat lamps—seared and fried the instant your ticket prints.',
    },
    {
      icon: Coffee,
      title: 'Café Experience',
      description: 'A comfortable place to enjoy food and drinks. Modern dark luxury interior, warm acoustic ambiance, and barista-crafted specialty beverages.',
    },
  ];

  return (
    <section className="py-24 bg-[#080808] border-y border-[#18181c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FBBF24]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FBBF24]">
              THE URBAN CRUST DIFFERENCE
            </span>
            <span className="w-5 h-[1.5px] bg-[#FBBF24]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            WHY FOOD LOVERS CHOOSE US
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base">
            Every bite is proof of our commitment to authentic flavors, culinary precision, and relaxed hospitality.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-[#0f0f12] border border-[#202026] hover:border-[#FBBF24]/40 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 shadow-lg"
              >
                {/* Subtle top golden light line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Line Icon matching Golden Accent */}
                <div className="w-12 h-12 rounded-xl bg-[#16161c] border border-[#2a2a32] flex items-center justify-center text-[#FBBF24] mb-6 group-hover:bg-[#FBBF24] group-hover:text-black transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#FBBF24] transition-colors mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
