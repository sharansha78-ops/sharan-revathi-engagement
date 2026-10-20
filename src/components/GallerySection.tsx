import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { weddingConfig, type GalleryItem } from '../data/weddingConfig';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Ceremony', 'Decorations', 'Heritage', 'Tradition'];

  const filteredItems = weddingConfig.gallery.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Ceremony') return item.category === 'Rituals' || item.category === 'The Couple';
    if (activeCategory === 'Decorations') return item.category === 'Decorations' || item.category === 'Auspicious';
    if (activeCategory === 'Heritage') return item.category === 'Heritage' || item.category === 'Culture';
    if (activeCategory === 'Tradition') return item.category === 'Tradition' || item.category === 'Elegance';
    return true;
  });

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = useCallback(() => {
    const nextIdx = (selectedIndex + 1) % filteredItems.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(filteredItems[nextIdx]);
  }, [selectedIndex, filteredItems]);

  const showPrev = useCallback(() => {
    const prevIdx = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedIndex(prevIdx);
    setSelectedImage(filteredItems[prevIdx]);
  }, [selectedIndex, filteredItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, showNext, showPrev]);

  return (
    <section
      id="gallery"
      className="relative py-24 px-4 sm:px-6 w-full flex flex-col items-center justify-center paper-texture overflow-hidden"
    >
      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-16 h-px bg-[#C69C45]" />
            <span className="font-serif text-xs uppercase tracking-widest text-[#89621F] font-bold">
              Moments of Grace &amp; Culture
            </span>
            <span className="w-10 sm:w-16 h-px bg-[#C69C45]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-[#721D2B] tracking-wide mb-2">
            Visual Gallery
          </h2>
          <p className="font-serif italic text-sm text-[#49331F]/80 mt-2 max-w-lg mx-auto">
            Traditional Tamil wedding aesthetics, sacred rituals, divine temples, and royal decorations.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-cinzel font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#721D2B] text-[#FFF5E6] shadow-md border border-[#C69C45]'
                  : 'bg-[#F6EAD3] text-[#49331F] hover:bg-[#FFF5E6] border border-[#C69C45]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onClick={() => openLightbox(item, index)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#C69C45]/70 bg-[#F6EAD3] shadow-[0_10px_25px_rgba(73,51,31,0.12)] hover:border-[#721D2B] hover:shadow-[0_15px_35px_rgba(114,29,43,0.2)] transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#480E18]/90 via-[#721D2B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                <span className="text-[10px] font-cinzel uppercase tracking-widest text-[#E8D39E] font-bold">
                  {item.category}
                </span>
                <h4 className="font-cinzel text-lg font-bold text-[#FFF5E6] drop-shadow-sm">
                  {item.title}
                </h4>
                <p className="font-serif text-xs text-[#FFF5E6]/90 line-clamp-1 italic">
                  {item.subtitle}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#E8D39E]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Full Photo</span>
                </div>
              </div>
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-3 bg-[#FFF5E6] border-t border-[#C69C45]/40 flex items-center justify-between">
              <div>
                <p className="font-cinzel text-xs font-bold text-[#721D2B] truncate">
                  {item.title}
                </p>
                <p className="text-[10px] text-[#89621F] font-serif truncate">
                  {item.subtitle}
                </p>
              </div>
              <span className="text-xs text-[#C69C45]">✦</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a0a0d]/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#721D2B] text-[#FFF5E6] border border-[#C69C45] hover:bg-[#8B2336] transition-colors z-20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#721D2B]/80 text-[#FFF5E6] border border-[#C69C45] hover:bg-[#721D2B] transition-colors z-20"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#721D2B]/80 text-[#FFF5E6] border border-[#C69C45] hover:bg-[#721D2B] transition-colors z-20"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-[#FFF5E6] border-2 border-[#C69C45] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative overflow-hidden bg-black/10 flex items-center justify-center max-h-[75vh]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Lightbox Caption */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-[#FFF5E6] via-[#F6EAD3] to-[#FFF5E6] border-t border-[#C69C45]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-cinzel font-bold text-[#89621F] uppercase tracking-wider">
                    {selectedImage.category} • {selectedIndex + 1} of {filteredItems.length}
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#721D2B]">
                    {selectedImage.title}
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-[#49331F]/90">
                    {selectedImage.subtitle}
                  </p>
                </div>
                <div className="text-xs font-serif text-[#89621F] italic text-right">
                  Santhosh &amp; Akshaya Wedding
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
