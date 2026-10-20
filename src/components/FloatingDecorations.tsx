import React, { useMemo } from 'react';

interface FloatingDecorationsProps {
  enabled?: boolean;
}

export const FloatingDecorations: React.FC<FloatingDecorationsProps> = ({ enabled = true }) => {
  if (!enabled) return null;

  // Generate deterministic petals to avoid hydration mismatch
  const petals = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8 + 2) % 96}%`,
      animationDuration: `${12 + (i % 8) * 2.5}s`,
      animationDelay: `${(i * 1.3) % 9}s`,
      size: 14 + (i % 4) * 5,
      type: i % 3 === 0 ? 'jasmine' : i % 3 === 1 ? 'gold-sparkle' : 'lotus-petal',
      rotation: (i * 45) % 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => {
        return (
          <div
            key={petal.id}
            className="absolute top-[-40px]"
            style={{
              left: petal.left,
              animation: `petalDrift ${petal.animationDuration} linear infinite`,
              animationDelay: petal.animationDelay,
            }}
          >
            {petal.type === 'jasmine' && (
              // White Fragrant Jasmine Flower with subtle yellow center
              <svg
                width={petal.size}
                height={petal.size}
                viewBox="0 0 24 24"
                fill="none"
                style={{ transform: `rotate(${petal.rotation}deg)` }}
                className="opacity-75 drop-shadow-[0_2px_4px_rgba(114,29,43,0.15)]"
              >
                <path
                  d="M12 2C13 6 15 8 19 8C15 9 13 11 12 15C11 11 9 9 5 8C9 8 11 6 12 2Z"
                  fill="#FFFDF7"
                  stroke="#E8D39E"
                  strokeWidth="0.5"
                />
                <circle cx="12" cy="8.5" r="1.5" fill="#F3B749" />
              </svg>
            )}

            {petal.type === 'lotus-petal' && (
              // Pink Sacred Lotus Petal
              <svg
                width={petal.size}
                height={petal.size * 1.3}
                viewBox="0 0 20 28"
                fill="none"
                style={{ transform: `rotate(${petal.rotation}deg)` }}
                className="opacity-65 drop-shadow-[0_2px_4px_rgba(114,29,43,0.15)]"
              >
                <path
                  d="M10 0 C16 8 20 18 10 28 C0 18 4 8 10 0 Z"
                  fill="url(#lotusGrad)"
                />
                <defs>
                  <linearGradient id="lotusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#E8A5AD" />
                    <stop offset="60%" stopColor="#D97A8B" />
                    <stop offset="100%" stopColor="#FFF5E6" />
                  </linearGradient>
                </defs>
              </svg>
            )}

            {petal.type === 'gold-sparkle' && (
              // Subtle Golden Particle
              <div
                className="rounded-full bg-[#C69C45] opacity-60 blur-[0.5px] shadow-[0_0_8px_#C69C45]"
                style={{
                  width: `${Math.max(4, petal.size / 3)}px`,
                  height: `${Math.max(4, petal.size / 3)}px`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
