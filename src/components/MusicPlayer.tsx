import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Disc3 } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onTogglePlay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center">
      {/* Floating Pill Player */}
      <div
        className={`flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border-2 border-[#C69C45]/80 bg-[#FFF5E6]/95 backdrop-blur-md shadow-[0_8px_25px_rgba(73,51,31,0.25)] transition-all duration-300 ${
          isExpanded ? 'max-w-xs' : 'max-w-fit'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Vinyl / Spinning Icon */}
        <button
          onClick={onTogglePlay}
          className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#721D2B] to-[#480E18] text-[#FFF5E6] shadow-md hover:scale-105 transition-transform"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isPlaying ? 'Pause instrumental music' : 'Play instrumental music'}
        >
          <Disc3
            className={`w-5 h-5 sm:w-6 sm:h-6 text-[#E8D39E] ${
              isPlaying ? 'animate-spin [animation-duration:4s]' : ''
            }`}
          />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#234D36] rounded-full border-2 border-[#FFF5E6] animate-pulse" />
          )}
        </button>

        {/* Animated Soundwave Visualizer */}
        <div className="flex items-end gap-1 h-4 px-1" onClick={onTogglePlay} role="button" tabIndex={0}>
          {[40, 80, 50, 100, 60].map((h, index) => (
            <span
              key={index}
              className={`w-1 bg-gradient-to-t from-[#89621F] to-[#C69C45] rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-pulse' : 'h-1.5'
              }`}
              style={{
                height: isPlaying ? `${h}%` : '4px',
                animationDelay: `${index * 0.15}s`,
                animationDuration: '0.8s',
              }}
            />
          ))}
        </div>

        {/* Music Info (Visible on hover or mobile click) */}
        <div
          className={`overflow-hidden transition-all duration-300 flex flex-col text-left ${
            isExpanded ? 'w-40 sm:w-48 opacity-100' : 'w-0 sm:w-auto opacity-0 sm:opacity-100 max-w-[120px]'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <Music className="w-3 h-3 text-[#721D2B] shrink-0" />
            <p className="text-xs font-semibold text-[#721D2B] truncate tracking-wide">
              {weddingConfig.music.title}
            </p>
          </div>
          <p className="text-[10px] text-[#89621F] truncate font-serif">
            {weddingConfig.music.artist}
          </p>
        </div>

        {/* Mute/Unmute Toggle */}
        <button
          onClick={onTogglePlay}
          className="text-[#721D2B] hover:text-[#89621F] p-1 transition-colors"
          aria-label={isPlaying ? 'Mute' : 'Unmute'}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#721D2B]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#89621F]/70" />
          )}
        </button>
      </div>
    </div>
  );
};
