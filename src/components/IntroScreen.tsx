import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../data/weddingConfig';

interface IntroScreenProps {
  onOpen: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);

    // Fire ceremonial gold and rose petal confetti
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#C69C45', '#721D2B', '#E8A5AD', '#F6EAD3', '#FFF5E6'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: ['#C69C45', '#E8A5AD'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: ['#C69C45', '#E8A5AD'],
        });
      }, 250);
    } catch {
      // ignore
    }

    // Smooth transition
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#FFF5E6] select-none"
      >
        {/* Handmade paper texture overlay */}
        <div className="absolute inset-0 paper-texture opacity-90 pointer-events-none" />

        {/* Hanging Jasmine Garlands on Top */}
        <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none px-4 sm:px-12">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 0.85 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <div className="w-0.5 h-6 sm:h-12 bg-[#89621F]/40" />
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FFFDF7] border border-[#C69C45]/60 shadow-sm" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#E8A5AD] border border-[#721D2B]/40 shadow-sm -mt-0.5" />
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FFFDF7] border border-[#C69C45]/60 shadow-sm -mt-0.5" />
              <div className="w-3.5 h-5 sm:w-4 sm:h-6 rounded-b-full bg-gradient-to-b from-[#E8A5AD] to-[#721D2B] shadow-sm -mt-0.5" />
            </motion.div>
          ))}
        </div>

        {/* Intricate Outer Border Drawing */}
        <div className="absolute inset-4 sm:inset-8 md:inset-12 border-2 border-[#C69C45]/40 rounded-2xl pointer-events-none">
          <div className="absolute inset-2 border border-[#89621F]/20 rounded-xl" />
          {/* Corner traditional motifs */}
          <div className="corner-ornament-tl border-t-2 border-l-2 border-[#C69C45]" />
          <div className="corner-ornament-tr border-t-2 border-r-2 border-[#C69C45]" />
          <div className="corner-ornament-bl border-b-2 border-l-2 border-[#C69C45]" />
          <div className="corner-ornament-br border-b-2 border-r-2 border-[#C69C45]" />
        </div>

        {/* Main Royal Card Presentation */}
        <motion.div
          animate={isOpening ? { scale: 0.92, opacity: 0, y: -40 } : { scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="relative z-10 w-full max-w-lg mx-4 p-6 sm:p-10 text-center parchment-card border border-[#C69C45]/60 rounded-3xl shadow-[0_20px_60px_rgba(73,51,31,0.22)]"
        >
          {/* Sacred Om & Kolam flourish */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <span className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#C69C45]" />
            <span className="text-2xl sm:text-3xl font-serif text-[#C69C45] drop-shadow-sm font-bold">
              {weddingConfig.couple.invocation}
            </span>
            <span className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#C69C45]" />
          </motion.div>

          {/* Invitation Heading */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mb-4"
          >
            <h1 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#721D2B] tracking-wider drop-shadow-sm uppercase">
              Engagement Invitation
            </h1>
            <p className="font-great-vibes text-xl sm:text-2xl text-[#89621F] mt-1">
              A Sacred Royal Celebration
            </p>
          </motion.div>

          {/* Royal Couple Portrait Medallion */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
            className="relative mx-auto my-5 w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center"
          >
            {/* Glowing Golden Circle Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C69C45] animate-spin [animation-duration:35s]" />
            <div className="absolute inset-1.5 rounded-full border border-[#89621F]/40" />

            {/* Couple Real Photo in Round Royal Frame */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#C69C45] shadow-xl p-0.5 bg-gradient-to-b from-[#C69C45] via-[#FFF5E6] to-[#721D2B] gold-glow">
              <img
                src={weddingConfig.couple.artworkImage}
                alt={`${weddingConfig.couple.groom.name} and ${weddingConfig.couple.bride.name}`}
                className="w-full h-full rounded-full object-cover object-[center_18%]"
              />
            </div>

            {/* Royal Monogram Badge overlaid at bottom */}
            <div className="absolute -bottom-1.5 px-3 py-0.5 rounded-full bg-[#721D2B] border border-[#C69C45] shadow-md flex items-center gap-1.5 z-10">
              <span className="font-cinzel text-[11px] sm:text-xs font-bold text-[#F6EAD3] tracking-widest">
                {weddingConfig.couple.monogram}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#E8D39E] font-serif">2026</span>
            </div>

            {/* Left and Right Brass Diya Flame Accents */}
            <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-2 h-3.5 bg-gradient-to-t from-[#E8A5AD] to-[#F3B749] rounded-full flame-glow" />
              <div className="w-5 h-2 bg-[#89621F] rounded-b-md" />
            </div>
            <div className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-2 h-3.5 bg-gradient-to-t from-[#E8A5AD] to-[#F3B749] rounded-full flame-glow" />
              <div className="w-5 h-2 bg-[#89621F] rounded-b-md" />
            </div>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="space-y-1 mb-6"
          >
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#721D2B] tracking-widest">
              {weddingConfig.couple.groom.name}
            </h2>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#89621F] uppercase tracking-widest">
              <span className="w-6 h-px bg-[#C69C45]" />
              <span className="font-serif italic font-bold">Weds</span>
              <span className="w-6 h-px bg-[#C69C45]" />
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#721D2B] tracking-widest">
              {weddingConfig.couple.bride.name}
            </h2>
            <p className="font-serif italic text-xs text-[#49331F]/80 pt-1">
              "{weddingConfig.couple.tagline}"
            </p>

            {/* Sacred Invitation Note */}
            <p className="font-playfair italic text-sm sm:text-base text-[#721D2B]/90 mt-4 px-2 leading-relaxed">
              Together with our families, we invite you to our sacred Engagement Ceremony
            </p>
          </motion.div>

          {/* Interactive OPEN INVITATION Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <button
              id="open-invitation-btn"
              onClick={handleOpenInvitation}
              disabled={isOpening}
              className="relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-[#721D2B] via-[#8B2336] to-[#721D2B] text-[#FFF5E6] font-cinzel font-bold text-sm sm:text-base tracking-widest uppercase shadow-[0_8px_30px_rgba(114,29,43,0.35)] border-2 border-[#C69C45] hover:border-[#FFF1D0] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer gold-glow"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D39E] animate-pulse" />
              <span>{isOpening ? 'Opening Royal Card...' : 'Open Invitation'}</span>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8A5AD] fill-[#E8A5AD]/40" />
            </button>

            <p className="mt-4 text-xs font-serif text-[#89621F]/80 tracking-wide">
              Tap to unveil the sacred engagement celebration
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};