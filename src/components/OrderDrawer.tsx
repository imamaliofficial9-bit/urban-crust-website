import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MenuItem } from '../data/menuData';
import { businessInfo } from '../data/businessInfo';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [diningMode, setDiningMode] = useState<'takeaway' | 'dine-in' | 'delivery'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems
      .map(
        (ci) =>
          `• ${ci.quantity}x ${ci.item.name} ($${(ci.item.price * ci.quantity).toFixed(2)})`
      )
      .join('\n');

    let message = `*NEW ORDER - URBAN CRUST*\n`;
    message += `Type: ${diningMode.toUpperCase()}\n`;
    if (customerName) message += `Customer: ${customerName}\n`;
    message += `\n*ITEMS:*\n${itemsText}\n\n`;
    message += `Subtotal: $${subtotal.toFixed(2)}\n`;
    message += `Total: $${total.toFixed(2)}\n`;
    if (notes) message += `Notes: ${notes}\n`;
    message += `\nPlease confirm preparation time. Thank you!`;

    window.open(
      `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    setOrderSent(true);
    setTimeout(() => {
      onClearCart();
      setOrderSent(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f0f13] border-l border-[#26262e] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#202026] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#FBBF24]" />
              <h2 className="text-base font-bold text-white tracking-wide uppercase">
                Your Order Bag
              </h2>
              <span className="text-xs text-stone-400">
                ({cartItems.reduce((acc, ci) => acc + ci.quantity, 0)} items)
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-[#1a1a22] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderSent ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Order Transmitted!</h3>
                <p className="text-sm text-stone-300 max-w-xs mx-auto mb-4">
                  Your order details have been forwarded to the Urban Crust kitchen. We are preparing it fresh!
                </p>
                <span className="text-xs text-[#FBBF24]">Closing bag automatically...</span>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-[#181820] text-stone-500 flex items-center justify-center mx-auto mb-4 border border-[#262630]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Your bag is empty</h3>
                <p className="text-xs text-stone-400 max-w-xs mx-auto mb-6">
                  Explore our menu to add freshly prepared gourmet burgers, fries, artisan pizzas, and drinks.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-md bg-[#FBBF24] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#f59e0b] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2">
                    Order Type
                  </label>
                  <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-[#16161c] border border-[#262630]">
                    {(['takeaway', 'dine-in', 'delivery'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setDiningMode(type)}
                        className={`py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                          diningMode === type
                            ? 'bg-[#FBBF24] text-black shadow-sm'
                            : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        {type === 'takeaway' ? 'Pickup' : type === 'dine-in' ? 'Dine In' : 'Delivery'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {cartItems.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="p-3.5 rounded-xl bg-[#141418] border border-[#22222a] flex items-center gap-3"
                    >
                      <img
                        src={ci.item.image}
                        alt={ci.item.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-lg object-cover bg-black shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">
                          {ci.item.name}
                        </h4>
                        <span className="text-xs text-[#FBBF24] font-semibold tabular-nums">
                          ${ci.item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-[#0e0e12] border border-[#282832] rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, -1)}
                          className="p-1 rounded text-stone-400 hover:text-white hover:bg-[#202028]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-white px-1.5 tabular-nums">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, 1)}
                          className="p-1 rounded text-stone-400 hover:text-white hover:bg-[#202028]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => onRemoveItem(ci.item.id)}
                        className="p-1.5 text-stone-500 hover:text-rose-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Customer Details & Special Instructions */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1">
                      Your Name / Table Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jordan (Table 4 or Pickup)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#141419] border border-[#262630] text-white text-xs focus:outline-none focus:border-[#FBBF24]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-1">
                      Preparation Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. extra sauce, no onions, gluten free bun"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#141419] border border-[#262630] text-white text-xs focus:outline-none focus:border-[#FBBF24]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with Totals & WhatsApp Send Button */}
          {cartItems.length > 0 && !orderSent && (
            <div className="p-6 border-t border-[#202026] bg-[#0c0c0f] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-400">
                  <span>Subtotal</span>
                  <span className="text-white font-medium tabular-nums">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Estimated Tax (8%)</span>
                  <span className="text-white font-medium tabular-nums">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-[#202028]">
                  <span>Total</span>
                  <span className="text-[#FBBF24] font-extrabold tabular-nums">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleSendWhatsAppOrder}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-md shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order via WhatsApp (${total.toFixed(2)})</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  Instant confirmation directly with the Urban Crust staff.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
