import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, PlusCircle } from 'lucide-react';
import { weddingConfig, type WeddingEvent } from '../data/weddingConfig';

export const WeddingEvents: React.FC = () => {
  const generateGoogleCalendarUrl = (event: WeddingEvent) => {
    // 2026-10-30 11:30 IST to 15:00 IST (UTC: 20261030T060000Z to 20261030T093000Z)
    const dates = '20261030T060000Z/20261030T093000Z';

    const title = encodeURIComponent(`Sharan Kumar & Revathi P - ${event.title}`);
    const details = encodeURIComponent(
      `${event.description}\n\nVenue: ${weddingConfig.venue.name}, ${weddingConfig.venue.fullAddress}\n\nWe cordially invite you to join us!`
    );
    const location = encodeURIComponent(`${weddingConfig.venue.name}, ${weddingConfig.venue.fullAddress}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const downloadIcs = (event: WeddingEvent) => {
    const start = '20261030T060000Z';
    const end = '20261030T093000Z';

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sharan Revathi Engagement//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Sharan Kumar & Revathi P - ${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${weddingConfig.venue.name}, ${weddingConfig.venue.fullAddress}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.id}-sharan-revathi.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="events"
      className="relative py-24 px-4 sm:px-6 w-full flex flex-col items-center justify-center paper-texture overflow-hidden"
    >
      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 sm:w-16 h-px bg-[#C69C45]" />
            <span className="font-serif text-xs uppercase tracking-widest text-[#89621F] font-bold">
              Subha Muhurtham &amp; Celebrations
            </span>
            <span className="w-8 sm:w-16 h-px bg-[#C69C45]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-[#721D2B] tracking-wide mb-2">
            Engagement Event
          </h2>
          <p className="font-serif italic text-sm text-[#49331F]/80 mt-2 max-w-lg mx-auto">
            We seek your gracious presence and heartfelt blessings on this auspicious occasion.
          </p>
        </motion.div>
      </div>

      {/* Events Panels Grid */}
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {weddingConfig.events.map((event, index) => {
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative parchment-card rounded-3xl p-6 sm:p-10 border-2 border-[#C69C45] gold-glow shadow-[0_15px_40px_rgba(73,51,31,0.14)] flex flex-col justify-between group hover:border-[#721D2B] transition-all duration-300"
            >
              {/* Corner Motifs */}
              <div className="corner-ornament-tl border-t-2 border-l-2 border-[#C69C45]" />
              <div className="corner-ornament-tr border-t-2 border-r-2 border-[#C69C45]" />
              <div className="corner-ornament-bl border-b-2 border-l-2 border-[#C69C45]" />
              <div className="corner-ornament-br border-b-2 border-r-2 border-[#C69C45]" />

              {/* Top Auspicious Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-serif font-bold uppercase tracking-wider bg-[#721D2B] text-[#FFF5E6] shadow-xs">
                  {event.auspiciousNote || 'Sacred Event'}
                </span>
                <span className="text-xl text-[#C69C45]">ॐ</span>
              </div>

              {/* Event Title */}
              <div className="mb-6 text-left">
                <div className="flex items-center gap-3">
                  <h3 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#721D2B] tracking-wide">
                    {event.title}
                  </h3>
                  <Sparkles className="w-5 h-5 text-[#C69C45] animate-pulse" />
                </div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-[#C69C45] to-transparent mt-2" />
              </div>

              {/* Event Schedule Details */}
              <div className="space-y-4 mb-8 text-left">
                {/* Date */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#FFF5E6]/90 border border-[#C69C45]/40 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#721D2B] to-[#480E18] flex items-center justify-center text-[#FFF5E6] shrink-0 shadow-xs">
                    <Calendar className="w-5 h-5 text-[#E8D39E]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-cinzel font-semibold uppercase tracking-wider text-[#89621F]">
                      Day &amp; Date
                    </span>
                    <p className="font-playfair text-base sm:text-lg font-bold text-[#49331F]">
                      {event.dateText}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#FFF5E6]/90 border border-[#C69C45]/40 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#89621F] to-[#C69C45] flex items-center justify-center text-[#FFF5E6] shrink-0 shadow-xs">
                    <Clock className="w-5 h-5 text-[#FFF5E6]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-cinzel font-semibold uppercase tracking-wider text-[#89621F]">
                      Auspicious Timings
                    </span>
                    <p className="font-playfair text-base sm:text-lg font-bold text-[#721D2B]">
                      {event.timeText}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-serif text-xs sm:text-sm text-[#49331F]/90 leading-relaxed pt-2 italic">
                  {event.description}
                </p>
              </div>

              {/* Functional Calendar Actions */}
              <div className="pt-4 border-t border-[#C69C45]/30 flex flex-wrap items-center gap-3">
                <a
                  href={generateGoogleCalendarUrl(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#721D2B] text-[#FFF5E6] text-xs font-cinzel font-semibold hover:bg-[#8B2336] transition-colors shadow-xs"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-[#E8D39E]" />
                  <span>Google Calendar</span>
                </a>

                <button
                  onClick={() => downloadIcs(event)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C69C45] bg-[#FFF5E6] text-[#721D2B] text-xs font-cinzel font-semibold hover:bg-[#F6EAD3] transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#89621F]" />
                  <span>Apple / iCal</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};