import React, { useState, useEffect } from 'react';
import { UrbanCrustLogo } from './UrbanCrustLogo';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signature', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#262626] shadow-xl py-3'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-decoration-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]"
            aria-label="Urban Crust Home"
          >
            <UrbanCrustLogo size="sm" showText={false} showGlow={false} />
            <div className="flex flex-col">
              <span className="font-sans font-extrabold tracking-[0.18em] text-base sm:text-lg text-[#FBBF24] leading-tight">
                URBAN CRUST
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">
                Café & Fast Food
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wider uppercase transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#FBBF24] font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FBBF24] rounded-full shadow-[0_0_8px_#FBBF24]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Quick Phone Call (Desktop) */}
            <a
              href={`tel:${businessInfo.phone}`}
              className="hidden lg:flex items-center gap-2 text-xs text-stone-300 hover:text-[#FBBF24] transition-colors py-1.5 px-3 rounded-md border border-[#2d2d2d] bg-[#141414]/60"
            >
              <Phone className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span className="tracking-wide font-medium">{businessInfo.displayPhone}</span>
            </a>

            {/* Cart / Order Bag Toggle */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg bg-[#18181b] border border-[#2d2d2d] hover:border-[#FBBF24]/50 text-stone-200 hover:text-[#FBBF24] transition-all"
              aria-label={`View order bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#FBBF24] text-black text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <a
              href="#menu"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase text-black bg-[#FBBF24] hover:bg-[#f59e0b] rounded-md transition-all duration-200 shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_22px_rgba(251,191,36,0.5)] transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              View Menu
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-300 hover:text-white bg-[#18181b] border border-[#2d2d2d] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0c0c0d] border-b border-[#262626] p-6 shadow-2xl transition-all animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium tracking-wide text-stone-200 hover:text-[#FBBF24] py-2 border-b border-[#1c1c1e] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-stone-500">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-sm font-bold tracking-wider uppercase text-black bg-[#FBBF24] hover:bg-[#f59e0b] rounded-md shadow-md transition-colors"
            >
              Explore Menu
            </a>
            <div className="flex gap-2 pt-2">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex-1 py-2.5 text-center text-xs font-medium text-stone-300 border border-[#333] rounded-md hover:border-[#FBBF24] transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#FBBF24]" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
                  businessInfo.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 text-center text-xs font-semibold text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center justify-center gap-1.5"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
