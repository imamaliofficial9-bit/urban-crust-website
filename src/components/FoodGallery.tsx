import React, { useState } from 'react';
import { galleryItems } from '../data/menuData';
import { Eye, X, ZoomIn } from 'lucide-react';

export const FoodGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#FBBF24]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FBBF24]">
                THE VISUAL EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              KITCHEN & CAFÉ GALLERY
            </h2>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm max-w-md">
            A glimpse into our kitchen's craft, hand-selected ingredients, and the warm, modern café atmosphere waiting for you.
          </p>
        </div>

        {/* Asymmetric / Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#222228] hover:border-[#FBBF24]/50 shadow-xl transition-all duration-300 bg-[#121215]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark luxury overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Center Zoom View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                <div className="w-12 h-12 rounded-full bg-[#FBBF24] text-black flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Caption & Category */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FBBF24] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#FBBF24] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111114] border border-[#FBBF24]/30 rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-stone-200 hover:text-white hover:bg-[#FBBF24] hover:text-black transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
                  {activePhoto.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {activePhoto.title}
                </h3>
                <p className="text-sm text-stone-400 mt-1">
                  {activePhoto.caption}
                </p>
              </div>

              <a
                href="#menu"
                onClick={() => setActivePhoto(null)}
                className="px-5 py-2.5 rounded-md bg-[#FBBF24] hover:bg-[#f59e0b] text-black font-bold text-xs uppercase tracking-wider transition-colors text-center whitespace-nowrap"
              >
                View on Menu
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
