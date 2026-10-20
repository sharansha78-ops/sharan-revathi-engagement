import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
interface NavbarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isPlaying, onTogglePlay }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Invitation' },
    { href: '#events', label: 'Events' },
    { href: '#venue', label: 'Venue' },
    { href: '#countdown', label: 'Countdown' },
    { href: '#blessings', label: 'Blessings' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF5E6]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(73,51,31,0.12)] border-b border-[#C69C45]/40 py-2.5'
          : 'bg-gradient-to-b from-[#FFF5E6]/90 via-[#FFF5E6]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer text-decoration-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#C69C45] bg-[#721D2B] flex items-center justify-center text-[#FFF5E6] font-cinzel font-bold text-sm sm:text-base shadow-sm group-hover:scale-105 transition-transform">
            SR
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinzel font-bold text-[#721D2B] text-xs sm:text-sm tracking-wider">
              ENGAGEMENT INVITATION
            </span>
            <span className="font-cinzel text-[10px] tracking-widest text-[#89621F] font-semibold">
              SHARAN KUMAR & REVATHI P
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="group relative flex flex-col items-center py-1 text-xs lg:text-sm font-medium tracking-wide text-[#49331F] hover:text-[#721D2B] transition-colors"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C69C45] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Sound Toggle */}
          <button
            onClick={onTogglePlay}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C69C45]/80 bg-[#F6EAD3]/80 hover:bg-[#F6EAD3] text-[#721D2B] text-xs font-serif transition-colors"
            title={isPlaying ? 'Pause Instrumental' : 'Play Instrumental'}
          >
            {isPlaying ? (
              <Volume2 className="w-3.5 h-3.5 text-[#721D2B] animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#89621F]" />
            )}
            <span className="hidden sm:inline text-[11px] font-medium">
              {isPlaying ? 'Music On' : 'Music Off'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#721D2B] hover:bg-[#F6EAD3] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF5E6] border-b-2 border-[#C69C45] shadow-xl px-6 py-5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center py-2 border-b border-[#C69C45]/20 text-[#49331F] hover:text-[#721D2B]"
              >
                <span className="font-cinzel text-sm font-semibold">{link.label}</span>
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs text-[#89621F]">
              <span className="font-serif">Instrumental Music</span>
              <button
                onClick={onTogglePlay}
                className="px-3 py-1 bg-[#721D2B] text-[#FFF5E6] rounded-full text-xs font-medium"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
