import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../data/weddingConfig';
import { useCountdown } from '../hooks/useCountdown';

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown(
    weddingConfig.countdown.targetDate
  );

  const handleShowerBlessings = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E8A5AD', '#C69C45', '#721D2B', '#FFF5E6', '#F3B749'],
      });
    } catch {
      // ignore
    }
  };

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative py-24 px-4 sm:px-6 w-full flex flex-col items-center justify-center paper-texture overflow-hidden"
    >
      {/* Decorative Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[80vw] max-w-3xl h-[60vh] rounded-full bg-gradient-to-r from-[#C69C45]/10 via-[#E8A5AD]/15 to-[#C69C45]/10 blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 sm:w-16 h-px bg-[#C69C45]" />
            <span className="font-serif text-xs uppercase tracking-widest text-[#89621F] font-bold">
              Subha Muhurtham Clock
            </span>
            <span className="w-10 sm:w-16 h-px bg-[#C69C45]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-[#721D2B] tracking-wide mb-2">
            {weddingConfig.countdown.title}
          </h2>

          <p className="font-serif italic text-sm text-[#49331F]/80 mt-2 max-w-md mx-auto">
            {weddingConfig.countdown.subtitle} (30th October 2026, 6:00 AM)
          </p>
        </motion.div>
      </div>

      {/* Countdown Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl parchment-card border-2 border-[#C69C45] rounded-3xl p-6 sm:p-12 text-center shadow-[0_20px_55px_rgba(73,51,31,0.18)]"
      >
        <div className="corner-ornament-tl border-t-2 border-l-2 border-[#C69C45]" />
        <div className="corner-ornament-tr border-t-2 border-r-2 border-[#C69C45]" />
        <div className="corner-ornament-bl border-b-2 border-l-2 border-[#C69C45]" />
        <div className="corner-ornament-br border-b-2 border-r-2 border-[#C69C45]" />

        {isCompleted ? (
          <div className="py-12 space-y-4">
            <Sparkles className="w-12 h-12 text-[#C69C45] mx-auto animate-bounce" />
            <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#721D2B]">
              The Auspicious Kalyanam Has Begun!
            </h3>
            <p className="font-serif text-base text-[#49331F]">
              {weddingConfig.countdown.completedMessage}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-4">
            {units.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-[#FFF5E6]/95 border-2 border-[#C69C45]/60 shadow-md group hover:border-[#721D2B] transition-colors"
              >
                {/* Large Antique Gold Number */}
                <span className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-[#721D2B] tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {String(unit.value).padStart(2, '0')}
                </span>

                {/* English Label */}
                <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider text-[#89621F] mt-2">
                  {unit.label}
                </span>

                {/* Subtle Gold Underline */}
                <div className="w-8 h-0.5 bg-[#C69C45]/40 mt-2" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Interactive Shower Blessings Button */}
        <div className="mt-8 pt-6 border-t border-[#C69C45]/30 flex flex-col items-center">
          <button
            onClick={handleShowerBlessings}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#721D2B] via-[#891e30] to-[#721D2B] text-[#FFF5E6] font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:scale-105 active:scale-95 transition-all border border-[#C69C45] cursor-pointer gold-glow"
          >
            <Heart className="w-4 h-4 text-[#E8A5AD] fill-[#E8A5AD]" />
            <span>Shower Flower Blessings</span>
            <Sparkles className="w-4 h-4 text-[#E8D39E]" />
          </button>
          <p className="text-[11px] font-serif text-[#89621F] mt-2">
            Click to shower auspicious flowers upon Sharan &amp; Revathi
          </p>
        </div>
      </motion.div>
    </section>
  );
};
