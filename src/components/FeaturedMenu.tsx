import React, { useState } from 'react';
import { menuCategories, menuItems, MenuItem, MenuCategoryType } from '../data/menuData';
import { Plus, Check, Flame, MessageCircle, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

interface FeaturedMenuProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenOrderModal: (item: MenuItem) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({
  onAddToCart,
  onOpenOrderModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType>('All');
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-24 bg-[#080808] relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#FBBF24]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#FBBF24]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FBBF24]">
              OUR FAVORITES
            </span>
            <span className="w-5 h-[1.5px] bg-[#FBBF24]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            MADE TO CRAVE
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base">
            Handcrafted with locally sourced ingredients, fire-grilled meats, artisan sourdough crusts, and house specialty brews.
          </p>
        </div>

        {/* Category Navigation Selector */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto py-2 no-scrollbar">
          <div className="inline-flex items-center p-1.5 rounded-xl bg-[#121215] border border-[#26262a] shadow-inner gap-1">
            {menuCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#FBBF24] text-black shadow-[0_0_12px_rgba(251,191,36,0.35)]'
                      : 'text-stone-300 hover:text-white hover:bg-[#1a1a1e]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid - Inspired by the 4-column reference image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isAdded = !!addedItemIds[item.id];
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-xl bg-[#111114] border border-[#222226] hover:border-[#FBBF24]/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Card Top: Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/20" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    {item.popular && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#FBBF24] text-black rounded shadow-sm flex items-center gap-1">
                        <Flame className="w-2.5 h-2.5" /> Popular
                      </span>
                    )}
                    {item.chefSpecial && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white rounded shadow-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> Chef Pick
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-[#FBBF24]/30">
                    <span className="text-sm font-extrabold text-[#FBBF24] tabular-nums">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Card Body: Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FBBF24] transition-colors leading-snug mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Controls */}
                  <div className="pt-3 border-t border-[#1e1e22] flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleAdd(item)}
                      className={`flex-1 py-2 px-3 rounded-md text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 ${
                        isAdded
                          ? 'bg-emerald-500 text-black'
                          : 'bg-[#18181c] hover:bg-[#FBBF24] text-stone-200 hover:text-black border border-[#2d2d33] hover:border-[#FBBF24]'
                      }`}
                      aria-label={`Add ${item.name} to order bag`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>

                    {/* Direct WhatsApp Order Button */}
                    <a
                      href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Urban Crust! I would like to order: ${item.name} ($${item.price.toFixed(2)}).`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-md bg-[#18181c] hover:bg-emerald-600/30 text-stone-300 hover:text-emerald-400 border border-[#2d2d33] transition-colors"
                      title="Order instantly on WhatsApp"
                      aria-label={`Order ${item.name} via WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu Banner */}
        <div className="mt-14 text-center">
          <p className="text-xs tracking-wider uppercase text-stone-400 mb-3">
            Looking for customized catering or group orders?
          </p>
          <a
            href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
              'Hi Urban Crust, I would like to inquire about group orders and full menu options.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#FBBF24] hover:text-[#f59e0b] border-b border-[#FBBF24]/40 hover:border-[#FBBF24] pb-1 transition-colors"
          >
            <span>Ask for Today's Kitchen Specials on WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
