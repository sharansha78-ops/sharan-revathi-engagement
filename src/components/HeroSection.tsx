import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('invitation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-20 pb-10 px-4 sm:px-6 overflow-hidden paper-texture"
    >
      {/* Decorative Golden Arch / Background Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[90vw] max-w-4xl h-[90vh] rounded-[100px_100px_40px_40px] border-2 border-[#C69C45]/30 bg-gradient-to-b from-[#F6EAD3]/40 via-transparent to-[#F6EAD3]/60 shadow-[inset_0_0_80px_rgba(198,156,69,0.12)]" />
      </div>

      {/* Hanging Brass Lanterns - Left & Right with Gentle Swing */}
      <div className="absolute top-12 left-4 sm:left-12 md:left-20 pointer-events-none z-20 flex flex-col items-center animate-lantern-left">
        <div className="w-0.5 h-16 sm:h-24 bg-gradient-to-b from-[#89621F] to-[#C69C45]" />
        {/* Brass Lantern SVG */}
        <div className="relative">
          <svg width="42" height="60" viewBox="0 0 42 60" fill="none" className="drop-shadow-[0_8px_16px_rgba(198,156,69,0.4)]">
            <path d="M21 0 L24 8 L18 8 Z" fill="#89621F" />
            <rect x="15" y="8" width="12" height="4" rx="1" fill="#C69C45" />
            <path d="M12 12 L30 12 L34 22 L8 22 Z" fill="#89621F" />
            <rect x="10" y="22" width="22" height="26" rx="3" fill="#FFF1D0" stroke="#C69C45" strokeWidth="2" />
            <circle cx="21" cy="35" r="5" fill="#F3B749" className="flame-glow" />
            <path d="M8 48 L34 48 L28 56 L14 56 Z" fill="#89621F" />
            <circle cx="21" cy="58" r="2" fill="#C69C45" />
          </svg>
          <div className="absolute inset-0 bg-[#F3B749]/20 blur-xl rounded-full" />
        </div>
      </div>

      <div className="absolute top-12 right-4 sm:right-12 md:right-20 pointer-events-none z-20 flex flex-col items-center animate-lantern-right">
        <div className="w-0.5 h-16 sm:h-24 bg-gradient-to-b from-[#89621F] to-[#C69C45]" />
        <div className="relative">
          <svg width="42" height="60" viewBox="0 0 42 60" fill="none" className="drop-shadow-[0_8px_16px_rgba(198,156,69,0.4)]">
            <path d="M21 0 L24 8 L18 8 Z" fill="#89621F" />
            <rect x="15" y="8" width="12" height="4" rx="1" fill="#C69C45" />
            <path d="M12 12 L30 12 L34 22 L8 22 Z" fill="#89621F" />
            <rect x="10" y="22" width="22" height="26" rx="3" fill="#FFF1D0" stroke="#C69C45" strokeWidth="2" />
            <circle cx="21" cy="35" r="5" fill="#F3B749" className="flame-glow" />
            <path d="M8 48 L34 48 L28 56 L14 56 Z" fill="#89621F" />
            <circle cx="21" cy="58" r="2" fill="#C69C45" />
          </svg>
          <div className="absolute inset-0 bg-[#F3B749]/20 blur-xl rounded-full" />
        </div>
      </div>

      {/* Top Ornamental Toranam & Garlands */}
      <div className="w-full max-w-3xl mx-auto flex items-center justify-center gap-2 mb-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C69C45] to-[#89621F]" />
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F6EAD3] border border-[#C69C45]/60 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#721D2B]" />
          <span className="font-serif text-[11px] font-semibold text-[#89621F] tracking-widest uppercase">
            Divine Subha Muhurtham
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#721D2B]" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C69C45] to-[#89621F]" />
      </div>

      {/* Main Content Composition */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Engagement Heading */}
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative inline-block mb-3"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#C69C45] text-lg">❀</span>
            <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#721D2B] tracking-wider drop-shadow-md uppercase">
              {weddingConfig.couple.tamilHeading || 'Engagement'}
            </h1>
            <span className="text-[#C69C45] text-lg">❀</span>
          </div>
          <div className="w-32 sm:w-48 h-1 mx-auto mt-1 bg-gradient-to-r from-transparent via-[#C69C45] to-transparent" />
        </motion.div>

        {/* Monogram Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative my-3"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#C69C45] bg-[#FFF5E6] flex items-center justify-center shadow-lg p-2 gold-glow">
            <span className="font-cinzel text-xl sm:text-2xl font-extrabold text-[#721D2B] tracking-wider">
              {weddingConfig.couple.monogram}
            </span>
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-2 mb-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="text-center">
              <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#721D2B] tracking-wider drop-shadow-sm">
                {weddingConfig.couple.groom.name}
              </span>
            </div>

            <div className="flex items-center gap-2 my-1 sm:my-0">
              <span className="w-6 h-px bg-[#C69C45]" />
              <span className="font-great-vibes text-3xl sm:text-4xl text-[#C69C45] drop-shadow-sm font-semibold">
                &amp;
              </span>
              <span className="w-6 h-px bg-[#C69C45]" />
            </div>

            <div className="text-center">
              <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#721D2B] tracking-wider drop-shadow-sm">
                {weddingConfig.couple.bride.name}
              </span>
            </div>
          </div>

          <p className="font-serif italic text-sm sm:text-base text-[#49331F]/90 font-medium tracking-wide">
            "{weddingConfig.couple.tagline}"
          </p>
        </motion.div>

        {/* Date & Venue Pill */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2.5 bg-[#F6EAD3]/90 border border-[#C69C45] rounded-full shadow-sm text-xs sm:text-sm font-serif text-[#49331F] mb-6"
        >
          <div className="flex items-center gap-1.5 text-[#721D2B] font-semibold">
            <Calendar className="w-4 h-4 text-[#89621F]" />
            <span>30th October, 2026</span>
          </div>
          <span className="hidden sm:inline text-[#C69C45]">•</span>
          <div className="flex items-center gap-1.5 text-[#49331F]">
            <MapPin className="w-4 h-4 text-[#721D2B]" />
            <span className="font-semibold text-[#721D2B]">{weddingConfig.venue.name}</span>
          </div>
        </motion.div>

        {/* Couple Portrait */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.9, ease: 'easeOut' }}
          className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_20px_55px_rgba(73,51,31,0.25)] border-2 border-[#C69C45] bg-[#F6EAD3] group"
        >
          {/* Ornate corner traditional flourishes */}
          <div className="corner-ornament-tl border-t-2 border-l-2 border-[#C69C45] z-10" />
          <div className="corner-ornament-tr border-t-2 border-r-2 border-[#C69C45] z-10" />
          <div className="corner-ornament-bl border-b-2 border-l-2 border-[#C69C45] z-10" />
          <div className="corner-ornament-br border-b-2 border-r-2 border-[#C69C45] z-10" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[#3A1019]">
            <img
              src={weddingConfig.couple.artworkImage}
              alt={`${weddingConfig.couple.groom.name} and ${weddingConfig.couple.bride.name}`}
              className="w-full h-full object-cover object-[center_18%] transform group-hover:scale-[1.03] transition-transform duration-700"
            />
            {/* Subtle Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#49331F]/35 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="p-3 sm:p-4 bg-gradient-to-r from-[#FFF5E6] via-[#F6EAD3] to-[#FFF5E6] border-t border-[#C69C45]/50 flex items-center justify-between px-4 sm:px-6">
            <span className="font-cinzel text-xs sm:text-sm text-[#721D2B] font-bold">
              {weddingConfig.couple.bride.name}
            </span>
            <span className="text-[#C69C45] text-xs">❦</span>
            <span className="font-cinzel text-xs sm:text-sm text-[#721D2B] font-bold">
              {weddingConfig.couple.groom.name}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Prompt */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 mt-8 flex flex-col items-center gap-1 text-[#89621F] hover:text-[#721D2B] transition-colors cursor-pointer group"
        aria-label="Scroll to Invitation Message"
      >
        <span className="text-[11px] font-cinzel font-semibold tracking-widest uppercase">
          Engagement Invitation
        </span>
        <ChevronDown className="w-5 h-5 text-[#C69C45] group-hover:text-[#721D2B]" />
      </motion.button>
    </section>
  );
};