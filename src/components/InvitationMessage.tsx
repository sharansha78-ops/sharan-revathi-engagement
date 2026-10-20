import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';

export const InvitationMessage: React.FC = () => {
  return (
    <section
      id="invitation"
      className="relative py-20 px-4 sm:px-6 w-full flex flex-col items-center justify-center paper-texture overflow-hidden"
    >
      {/* Decorative Traditional Toranam & Jasmine Garlands Top */}
      <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none opacity-80">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-0.5 h-8 sm:h-14 bg-[#89621F]/30" />
            <div className="w-3 h-3 rounded-full bg-[#FFFDF7] border border-[#C69C45] shadow-xs" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8A5AD] -mt-0.5" />
            <div className="w-3.5 h-5 rounded-b-full bg-gradient-to-b from-[#E8A5AD] to-[#721D2B] -mt-0.5" />
          </div>
        ))}
      </div>

      {/* Main Royal Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl parchment-card border-2 border-[#C69C45]/80 rounded-3xl p-6 sm:p-12 md:p-16 text-center shadow-[0_25px_70px_rgba(73,51,31,0.18)]"
      >
        {/* Ornate Golden Inner Frame */}
        <div className="absolute inset-3 sm:inset-5 border border-[#89621F]/25 rounded-2xl pointer-events-none" />
        <div className="corner-ornament-tl border-t-2 border-l-2 border-[#C69C45]" />
        <div className="corner-ornament-tr border-t-2 border-r-2 border-[#C69C45]" />
        <div className="corner-ornament-bl border-b-2 border-l-2 border-[#C69C45]" />
        <div className="corner-ornament-br border-b-2 border-r-2 border-[#C69C45]" />

        {/* Sacred ॐ Symbol */}
        <div className="flex flex-col items-center justify-center mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-serif text-[#C69C45] drop-shadow-sm font-bold"
          >
            {weddingConfig.couple.invocation}
          </motion.div>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-[#C69C45]" />
            <span className="text-[#C69C45] text-sm">❦</span>
            <span className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-[#C69C45]" />
          </div>
        </div>

        {/* Invitation Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="space-y-3 mb-8"
        >
          <p className="font-playfair italic text-lg sm:text-2xl text-[#49331F] leading-relaxed max-w-xl mx-auto">
            "Together with our Families, We invite you to our Sacred Marriage"
          </p>
        </motion.div>

        {/* Floral Golden Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#C69C45]" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#C69C45]">
            <path
              d="M12 2C13.5 6 17 8 21 8C17 9.5 13.5 12 12 16C10.5 12 7 9.5 3 8C7 8 10.5 6 12 2Z"
              fill="#C69C45"
            />
            <circle cx="12" cy="18" r="2" fill="#721D2B" />
          </svg>
          <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#C69C45]" />
        </div>

        {/* Bride & Groom Names - Centered Visual Centerpiece */}
        <div className="space-y-4 my-6">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-[#721D2B] tracking-wider drop-shadow-sm">
              {weddingConfig.couple.groom.name}
            </h2>
          </motion.div>

          {/* WEDS Callout */}
          <div className="flex items-center justify-center gap-4 py-1">
            <span className="w-12 sm:w-16 h-px bg-[#C69C45]" />
            <span className="font-cormorant italic font-bold text-xl sm:text-2xl text-[#89621F] tracking-widest uppercase">
              ❦ Weds ❦
            </span>
            <span className="w-12 sm:w-16 h-px bg-[#C69C45]" />
          </div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-[#721D2B] tracking-wider drop-shadow-sm">
              {weddingConfig.couple.bride.name}
            </h2>
          </motion.div>
        </div>

        {/* Auspicious Divider */}
        <div className="flex items-center justify-center gap-3 my-8">
          <span className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-[#C69C45]" />
          <span className="text-[#721D2B] text-lg">❀ ॐ ❀</span>
          <span className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-[#C69C45]" />
        </div>

        {/* Bottom Lotus Uruli & Elephant Illustration (from PDF page 2) */}
        <div className="relative mt-8 pt-4">
          <div className="max-w-md mx-auto overflow-hidden rounded-2xl border border-[#C69C45]/50 bg-[#F6EAD3]/80 p-2 shadow-sm">
            <img
              src="/assets/uruli_lotus.png"
              alt="Auspicious Brass Uruli with Lotuses and Royal Elephant Pedestal"
              className="w-full h-auto object-contain max-h-48 mx-auto"
            />
          </div>
          <p className="mt-3 text-xs font-serif text-[#89621F] italic">
            "May the divine grace of Lord Murugan and Lord Ganesha bless this union with eternal bliss."
          </p>
        </div>
      </motion.div>
    </section>
  );
};
