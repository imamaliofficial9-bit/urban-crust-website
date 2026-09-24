/**
 * Urban Crust - Official Website
 * Dark Luxury Café & Fast Food Experience
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedMenu } from './components/FeaturedMenu';
import { SignatureSection } from './components/SignatureSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FoodGallery } from './components/FoodGallery';
import { CafeExperience } from './components/CafeExperience';
import { SpecialOffer } from './components/SpecialOffer';
import { LocationHours } from './components/LocationHours';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { QuickOrderModal } from './components/QuickOrderModal';
import { MenuItem, menuItems } from './data/menuData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickOrderItem, setQuickOrderItem] = useState<MenuItem | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section for top navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'signature', 'gallery', 'experience', 'location', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (item: MenuItem, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + quantity } : ci
        );
      }
      return [...prev, { item, quantity }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null)
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-stone-200 selection:bg-[#FBBF24]/30 selection:text-[#FBBF24]">
      {/* Top Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
          onOpenOrderModal={(item) => setQuickOrderItem(item)}
        />

        {/* 2. Introduction / About Section */}
        <AboutSection />

        {/* 3. Featured Menu Section */}
        <FeaturedMenu
          onAddToCart={handleAddToCart}
          onOpenOrderModal={(item) => setQuickOrderItem(item)}
        />

        {/* 4. Signature Item Feature */}
        <SignatureSection onAddToCart={handleAddToCart} />

        {/* 5. Why Choose Urban Crust */}
        <WhyChooseUs />

        {/* 6. Food Gallery */}
        <FoodGallery />

        {/* 7. Café Experience Section */}
        <CafeExperience />

        {/* 8. Special Offer / Promotion */}
        <SpecialOffer />

        {/* 9. Location & Opening Hours */}
        <LocationHours />

        {/* 10. Contact / CTA Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quick Order Modal */}
      <QuickOrderModal
        item={quickOrderItem}
        onClose={() => setQuickOrderItem(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
