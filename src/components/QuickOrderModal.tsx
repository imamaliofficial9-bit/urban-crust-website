import React, { useState } from 'react';
import { X, Plus, Minus, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { MenuItem } from '../data/menuData';
import { businessInfo } from '../data/businessInfo';

interface QuickOrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const totalPrice = item.price * quantity;

  const handleWhatsApp = () => {
    const text = `Hi Urban Crust! I would like to order: ${quantity}x ${item.name} ($${totalPrice.toFixed(2)}).`;
    window.open(`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  const handleAdd = () => {
    onAddToCart(item, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative max-w-lg w-full rounded-2xl bg-[#111116] border border-[#FBBF24]/30 shadow-2xl overflow-hidden p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-stone-300 hover:text-white hover:bg-[#FBBF24] hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex gap-4 items-start mb-6">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-24 h-24 rounded-xl object-cover bg-black border border-[#2b2b35] shrink-0"
          />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FBBF24]">
              {item.category}
            </span>
            <h3 className="text-lg font-bold text-white leading-snug">
              {item.name}
            </h3>
            <p className="text-xs text-stone-400 mt-1 line-clamp-2">
              {item.description}
            </p>
            <span className="text-base font-extrabold text-[#FBBF24] tabular-nums block mt-2">
              ${item.price.toFixed(2)} each
            </span>
          </div>
        </div>

        {/* Quantity selector */}
        <div className="py-4 border-y border-[#202028] flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-300">
            Quantity
          </span>

          <div className="flex items-center gap-3 bg-[#0d0d10] border border-[#282834] rounded-lg p-1.5">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-[#1a1a24]"
              aria-label="Decrease"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-bold text-white px-2 tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-[#1a1a24]"
              aria-label="Increase"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Total & Action buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex justify-between items-center text-sm mb-1">
            <span className="text-stone-400">Total Price</span>
            <span className="text-xl font-bold text-[#FBBF24] tabular-nums">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleAdd}
              className="py-3 px-4 rounded-md bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="py-3 px-4 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
