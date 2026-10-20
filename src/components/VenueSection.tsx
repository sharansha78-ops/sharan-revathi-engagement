import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(weddingConfig.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    weddingConfig.venue.fullAddress
  )}`;

  return (
    <section
      id="venue"
      className="relative py-24 px-4 sm:px-6 w-full flex flex-col items-center justify-center paper-texture overflow-hidden"
    >
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
              The Celebration Destination
            </span>
            <span className="w-10 sm:w-16 h-px bg-[#C69C45]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-[#721D2B] tracking-wide mb-2">
            Engagement Venue
          </h2>
          <p className="font-serif italic text-sm text-[#49331F]/80 mt-2">
            Join us to celebrate our engagement ceremony and share your blessings.
          </p>
        </motion.div>
      </div>

      {/* Main Venue Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl parchment-card border-2 border-[#C69C45] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(73,51,31,0.16)] text-center"
      >
        <div className="corner-ornament-tl border-t-2 border-l-2 border-[#C69C45]" />
        <div className="corner-ornament-tr border-t-2 border-r-2 border-[#C69C45]" />
        <div className="corner-ornament-bl border-b-2 border-l-2 border-[#C69C45]" />
        <div className="corner-ornament-br border-b-2 border-r-2 border-[#C69C45]" />

        {/* Animated Location Pin Icon */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#721D2B] to-[#480E18] flex items-center justify-center text-[#FFF5E6] shadow-lg border-2 border-[#C69C45] gold-glow">
            <MapPin className="w-8 h-8 text-[#E8D39E] animate-bounce" />
          </div>
          <div className="absolute inset-0 rounded-full bg-[#C69C45]/20 blur-xl animate-pulse" />
        </div>

        {/* Venue Typography */}
        <div className="space-y-2 mb-8">
          <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-[#721D2B] tracking-wider drop-shadow-xs">
            {weddingConfig.venue.name}
          </h3>
          <p className="font-cinzel text-xl sm:text-2xl font-bold text-[#89621F]">
            Bengaluru
          </p>
          <div className="max-w-md mx-auto pt-2">
            <p className="font-serif text-sm sm:text-base text-[#49331F] leading-relaxed">
              {weddingConfig.venue.fullAddress}
            </p>
            {weddingConfig.venue.landmark && (
              <p className="text-xs text-[#89621F] font-serif italic mt-1">
                Landmark: {weddingConfig.venue.landmark}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons: VIEW LOCATION & GET DIRECTIONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={weddingConfig.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#721D2B] to-[#8B2336] text-[#FFF5E6] font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 transition-all border border-[#C69C45]"
          >
            <ExternalLink className="w-4 h-4 text-[#E8D39E]" />
            <span>View Location</span>
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#234D36] text-[#FFF5E6] font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 transition-all border border-[#C69C45]"
          >
            <Navigation className="w-4 h-4 text-[#FFF5E6]" />
            <span>Get Directions</span>
          </a>

          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#C69C45] bg-[#FFF5E6] text-[#49331F] hover:text-[#721D2B] font-cinzel font-semibold text-xs tracking-wider uppercase hover:bg-[#F6EAD3] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#234D36]" />
                <span className="text-[#234D36]">Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#89621F]" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Embedded Google Maps Preview */}
        <div className="w-full rounded-2xl overflow-hidden border-2 border-[#C69C45]/80 shadow-md aspect-[16/9] max-h-96 relative bg-[#F6EAD3]">
          <iframe
            title="Shree Krishna Vihar Location Map"
            src={weddingConfig.venue.embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter saturate-[0.95] contrast-[1.05]"
          />
        </div>
      </motion.div>
    </section>
  );
};