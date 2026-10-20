import { useState, useRef, useEffect } from 'react';
import { weddingConfig } from './data/weddingConfig';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { FloatingDecorations } from './components/FloatingDecorations';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { WeddingEvents } from './components/WeddingEvents';
import { VenueSection } from './components/VenueSection';
import { Countdown } from './components/Countdown';
import { ClosingSection } from './components/ClosingSection';

export function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(weddingConfig.music.src);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const handleOpenInvitation = () => {
    setHasOpened(true);

    // Attempt to start traditional instrumental music on user interaction
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio autoplay prevented or waiting for further gesture:', err);
        });
    }

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Playback error:', err);
        });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF5E6] text-[#49331F] font-lora selection:bg-[#C69C45]/30 selection:text-[#721D2B]">
      {/* Cinematic Opening Screen */}
      {!hasOpened && <IntroScreen onOpen={handleOpenInvitation} />}

      {/* Main Website Experience (Revealed after opening) */}
      {hasOpened && (
        <main className="relative z-10 w-full min-h-screen flex flex-col animate-in fade-in duration-700">
          {/* Navigation Bar */}
          <Navbar isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />

          {/* Floating Jasmine and Lotus Petals & Gold Sparkles */}
          <FloatingDecorations enabled={true} />

          {/* Floating Traditional Instrumental Music Player */}
          <MusicPlayer isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />

          {/* Section 2: Grand Hero Section */}
          <HeroSection />

          {/* Section 4: Wedding Events (Reception & Marriage Muhurtham) */}
          <WeddingEvents />

          {/* Section 5: Wedding Venue (SVK Mahal, Kavarapettai) */}
          <VenueSection />

          {/* Section 6: Wedding Countdown */}
          <Countdown />

          {/* Section 7: Final Blessings & RSVP */}
          <ClosingSection />
        </main>
      )}
    </div>
  );
}

export default App;
