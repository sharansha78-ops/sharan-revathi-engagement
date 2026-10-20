export interface WeddingEvent {
  id: string;
  title: string;
  tamilTitle: string;
  dateText: string;
  timeText: string;
  timestamp: string; // ISO string for countdown or calendar
  description: string;
  icon: 'reception' | 'engagement';
  auspiciousNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  src: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      name: string;
      tamilName: string;
      title: string;
    };
    bride: {
      name: string;
      tamilName: string;
      title: string;
    };
    monogram: string;
    tagline: string;
    tamilHeading: string;
    invocation: string;
    invitationNote: string;
    artworkImage: string;
    coverImage: string;
    cardImage: string;
  };
  events: WeddingEvent[];
  venue: {
    name: string;
    city: string;
    fullAddress: string;
    landmark?: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  countdown: {
    targetDate: string; // ISO 8601 string: 2026-10-30T23:30:00+05:30
    title: string;
    subtitle: string;
    completedMessage: string;
  };
  music: {
    src: string;
    title: string;
    artist: string;
  };
  contact: {
    whatsappNumber: string;
    rsvpMessage: string;
  };
  gallery: GalleryItem[];
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      name: 'SHARAN KUMAR',
      tamilName: '',
      title: '',
    },
    bride: {
      name: 'REVATHI P',
      tamilName: '',
      title: '',
    },
    monogram: 'SR',
    tagline: 'Two Hearts, One Beautiful Beginning',
    tamilHeading: 'Engagement',
    invocation: 'ॐ',
    invitationNote: 'Together with our families, cordially invite you to our grand Engagement Ceremony.',
    artworkImage: '/assets/couple_real.jpg',
    coverImage: '/assets/couple_real.jpg',
    cardImage: '/assets/invitation_inside_full.webp',
  },
    events: [
    {
      id: 'engagement',
      title: 'Engagement Ceremony',
      tamilTitle: 'Grand Engagement Ceremony',
      dateText: 'Friday, 30th October, 2026',
      timeText: 'From 11:30 AM onwards',
      timestamp: '2026-10-30T11:30:00+05:30',
      description: 'An auspicious morning of joyous celebration, exchange of rings, and heartfelt blessings to mark the beginning of our journey together.',
      icon: 'reception',
      auspiciousNote: 'Ring Ceremony & Feasting',
    },
  ],
  venue: {
    name: 'Shree Krishna Vihar',
    city: '',
    fullAddress: 'Shree Krishna Vihar',
    landmark: '',
    googleMapsUrl: 'https://maps.app.goo.gl/5gtbe9i6oMD7YQki6',
    embedMapUrl: 'https://maps.google.com/maps?q=Shree%20Krishna%20Vihar&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  countdown: {
    targetDate: '2026-10-30T11:30:00+05:30',
    title: 'Counting Down to Forever',
    subtitle: 'Until our Engagement Ceremony',
    completedMessage: 'The grand engagement celebration has arrived! Bless the couple on their journey.',
  },
  music: {
    src: '/music/wedding_melody.mp3',
    title: 'Traditional Flute & Nadaswaram',
    artist: 'Classical Instrumental',
  },
  contact: {
    whatsappNumber: '+918553680736',
    rsvpMessage: 'Hearty congratulations Sharan Kumar and Revathi P on your Engagement! We are delighted to attend your ceremony at Shree Krishna Vihar. Wishing you both a lifetime of happiness, prosperity, and divine blessings!',
  },
  gallery: [
    {
      id: 'couple_divine',
      title: 'Sacred Bond of S & R',
      subtitle: 'Divine Couple in Royal Traditional Attire',
      category: 'The Couple',
      src: '/assets/gallery/couple_divine.webp',
    },
    {
      id: 'mandap',
      title: 'The Royal Venue',
      subtitle: 'Fragrant Jasmine, Marigold & Glowing Brass Vilakkus',
      category: 'Decorations',
      src: '/assets/gallery/mandap.webp',
    },
    {
      id: 'rituals',
      title: 'Sacred Engagement Rituals',
      subtitle: 'Turmeric, Akshathai & Holy Fire',
      category: 'Rituals',
      src: '/assets/gallery/rituals.webp',
    },
    {
      id: 'temple',
      title: 'Temple Blessings',
      subtitle: 'Spiritual Dravidian Architecture at Golden Sunrise',
      category: 'Heritage',
      src: '/assets/gallery/temple.webp',
    },
    {
      id: 'kolam',
      title: 'Auspicious Kolam & Diya',
      subtitle: 'Sacred Rice Flour Art & Fresh Lotus Blooms',
      category: 'Tradition',
      src: '/assets/gallery/kolam.webp',
    },
    {
      id: 'nadaswaram',
      title: 'Mangala Vaathiyam',
      subtitle: 'Soul-stirring Melodies',
      category: 'Culture',
      src: '/assets/gallery/nadaswaram.webp',
    },
    {
      id: 'kanjivaram',
      title: 'Traditional Attire',
      subtitle: 'Rich Silk & Temple Jewels',
      category: 'Elegance',
      src: '/assets/gallery/kanjivaram.webp',
    },
    {
      id: 'uruli_lotus',
      title: 'Uruli of Prosperity',
      subtitle: 'Antique Brass Pedestal with Sacred Flowers',
      category: 'Auspicious',
      src: '/assets/gallery/uruli_lotus.webp',
    },
  ],
};