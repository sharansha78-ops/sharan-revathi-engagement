import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../data/weddingConfig';

interface GuestWish {
  id: string;
  name: string;
  relation: string;
  message: string;
  time: string;
}

export const ClosingSection: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>([
    {
      id: '1',
      name: 'Karthik & Family',
      relation: 'Friend, Bengaluru',
      message: 'Heartiest congratulations on your engagement! Wishing you both a lifetime of love, laughter, and beautiful adventures together. Cheers to your new beginning! ✨❤️',
      time: 'Earlier today',
    },
    {
      id: '2',
      name: 'Priya & Rahul',
      relation: 'Family',
      message: 'So overjoyed to witness this milestone! May your bond grow stronger and sweeter with every passing day. Can’t wait to celebrate with you both! 💍✨',
      time: 'Earlier today',
    }
  ]);

  const [guestName, setGuestName] = useState('');
  const [guestRelation, setGuestRelation] = useState('');
  const [guestMsg, setGuestMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestMsg.trim()) return;

    const newWish: GuestWish = {
      id: Date.now().toString(),
      name: guestName.trim(),
      relation: guestRelation.trim() || 'Well-wisher',
      message: guestMsg.trim(),
      time: 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setGuestName('');
    setGuestRelation('');
    setGuestMsg('');
    setSubmitted(true);

    // Trigger celebratory flower confetti
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#C69C45', '#721D2B', '#E8A5AD', '#F6EAD3'],
      });
    } catch {
      // ignore
    }

    setTimeout(() => setSubmitted(false), 4000);
  };

  const whatsappUrl = `https://wa.me/${weddingConfig.contact.whatsappNumber.replace(
    /[^0-9]/g,
    ''
  )}?text=${encodeURIComponent(weddingConfig.contact.rsvpMessage)}`;

  return (
    <section
      id="blessings"
      className="relative pt-24 pb-16 px-4 sm:px-6 w-full flex flex-col items-center justify-center paper-texture overflow-hidden"
    >
      {/* Decorative Aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[85vw] max-w-4xl h-[70vh] rounded-full bg-gradient-to-r from-[#C69C45]/15 via-[#721D2B]/10 to-[#C69C45]/15 blur-3xl" />
      </div>

      {/* Main Closing Blessing Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-3xl parchment-card border-2 border-[#C69C45] rounded-3xl p-6 sm:p-12 md:p-16 text-center shadow-[0_25px_65px_rgba(73,51,31,0.2)] mb-16"
      >
        <div className="corner-ornament-tl border-t-2 border-l-2 border-[#C69C45]" />
        <div className="corner-ornament-tr border-t-2 border-r-2 border-[#C69C45]" />
        <div className="corner-ornament-bl border-b-2 border-l-2 border-[#C69C45]" />
        <div className="corner-ornament-br border-b-2 border-r-2 border-[#C69C45]" />

        {/* Sacred Diya Flame Centerpiece */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#721D2B] flex items-center justify-center text-[#E8D39E] border-2 border-[#C69C45] gold-glow shadow-md">
            <Heart className="w-8 h-8 text-[#E8A5AD] fill-[#E8A5AD]" />
          </div>
        </div>

        {/* Closing Words */}
        <h2 className="font-playfair italic text-2xl sm:text-3xl md:text-4xl font-bold text-[#721D2B] mb-4 leading-snug">
          "Your presence will make our celebration even more special."
        </h2>

        <p className="font-serif text-sm sm:text-base text-[#49331F] leading-relaxed max-w-lg mx-auto mb-6">
          With love and blessings,
          <br />
          We look forward to celebrating with you.
        </p>

        {/* Couple Names Signature */}
        <div className="my-6">
          <p className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#721D2B] tracking-widest">
            {weddingConfig.couple.groom.name} &amp; {weddingConfig.couple.bride.name}
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="w-12 h-px bg-[#C69C45]" />
            <span className="text-[#C69C45] text-sm">❦</span>
            <span className="w-12 h-px bg-[#C69C45]" />
          </div>
        </div>

        {/* CELEBRATE WITH US / WHATSAPP RSVP BUTTON */}
        <div className="mt-8">
          <a
            id="whatsapp-rsvp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#234D36] via-[#2F6547] to-[#234D36] text-[#FFF5E6] font-cinzel font-bold text-sm sm:text-base tracking-widest uppercase shadow-[0_10px_30px_rgba(35,77,54,0.35)] hover:shadow-xl hover:scale-105 active:scale-95 transition-all border-2 border-[#C69C45] cursor-pointer gold-glow"
          >
            <MessageCircle className="w-5 h-5 text-[#E8D39E]" />
            <span>Celebrate With Us • RSVP on WhatsApp</span>
            <Sparkles className="w-4 h-4 text-[#FFF5E6]" />
          </a>
          <p className="text-xs font-serif text-[#89621F] mt-3">
            Send your warm wishes directly to {weddingConfig.couple.groom.name} &amp; {weddingConfig.couple.bride.name} via WhatsApp
          </p>
        </div>
      </motion.div>

      {/* Interactive Guestbook & Blessings Wall */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#721D2B]">
            Engagement Guestbook &amp; Blessings
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Send Blessing Form */}
          <form
            onSubmit={handleSendWish}
            className="parchment-card rounded-2xl p-6 border border-[#C69C45]/80 shadow-md space-y-4"
          >
            <h4 className="font-cinzel text-base font-bold text-[#721D2B]">
              Leave a Blessing Note
            </h4>

            <div>
              <label className="block text-xs font-cinzel font-semibold text-[#89621F] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Anand & Family"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C69C45]/60 bg-[#FFF5E6] text-sm text-[#49331F] focus:outline-none focus:border-[#721D2B]"
              />
            </div>

            <div>
              <label className="block text-xs font-cinzel font-semibold text-[#89621F] mb-1">
                Relationship / Location
              </label>
              <input
                type="text"
                value={guestRelation}
                onChange={(e) => setGuestRelation(e.target.value)}
                placeholder="e.g. Friend, Bengaluru"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C69C45]/60 bg-[#FFF5E6] text-sm text-[#49331F] focus:outline-none focus:border-[#721D2B]"
              />
            </div>

            <div>
              <label className="block text-xs font-cinzel font-semibold text-[#89621F] mb-1">
                Your Heartfelt Blessing *
              </label>
              <textarea
                required
                rows={3}
                value={guestMsg}
                onChange={(e) => setGuestMsg(e.target.value)}
                placeholder="Write your wishes and blessings for Sharan & Revathi..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#C69C45]/60 bg-[#FFF5E6] text-sm text-[#49331F] focus:outline-none focus:border-[#721D2B] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#721D2B] text-[#FFF5E6] font-cinzel font-bold text-xs uppercase tracking-wider hover:bg-[#8B2336] transition-colors flex items-center justify-center gap-2 shadow-sm border border-[#C69C45]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Engagement Blessing</span>
            </button>

            {submitted && (
              <div className="flex items-center gap-2 text-xs font-serif text-[#234D36] bg-[#234D36]/10 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! Your auspicious blessing has been added to the guestbook.</span>
              </div>
            )}
          </form>

          {/* Recent Wishes Feed */}
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="p-4 rounded-2xl bg-[#FFF5E6]/95 border border-[#C69C45]/40 shadow-xs text-left space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-sm font-bold text-[#721D2B]">
                    {wish.name}
                  </span>
                  <span className="text-[10px] text-[#89621F] font-serif">
                    {wish.time}
                  </span>
                </div>
                <span className="text-[11px] font-serif text-[#89621F] font-medium block">
                  {wish.relation}
                </span>
                <p className="font-serif text-xs text-[#49331F] leading-relaxed italic">
                  "{wish.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 pt-8 border-t border-[#C69C45]/40 w-full max-w-4xl mx-auto text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-[#721D2B] font-cinzel font-bold text-sm sm:text-base">
          <span>Wishing you a lifetime of love, happiness &amp; blessings</span>
        </div>
        <p className="font-cinzel text-xs text-[#89621F] tracking-widest uppercase">
          {weddingConfig.couple.groom.name} &amp; {weddingConfig.couple.bride.name} • 30 October 2026 • {weddingConfig.venue.name}
        </p>
        <p className="text-[10px] font-serif text-[#49331F]/60 pt-1">
          Inviting Your Gracious Presence & Blessings
        </p>
      </footer>
    </section>
  );
};