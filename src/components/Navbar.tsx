import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  selectedCharacterName?: string;
  onPopCurrentCharacter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  selectedCharacterName = 'Arjuna',
  onPopCurrentCharacter,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'bhisma-parva', label: 'Bhīṣma Parva' },
    { id: 'characters', label: 'Characters' },
    { id: 'decision-quiz', label: 'Decision Quiz' },
    { id: 'strategic-lessons', label: 'Strategic Lessons' },
    { id: 'sources', label: 'Sources' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0e1017]/90 backdrop-blur-md border-b border-[#c89d56]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0b0c10]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Emblem */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
          id="nav-logo-btn"
        >
          {/* Chariot wheel / Dharma wheel emblem */}
          <div className="w-10 h-10 rounded-full border border-[#c89d56]/50 bg-[#161822] flex items-center justify-center relative shadow-[0_0_15px_rgba(200,157,86,0.15)] group-hover:border-[#c89d56] transition-colors">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-[#c89d56] transform transition-transform duration-700 group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
              <line x1="12" y1="3" x2="12" y2="9" stroke="currentColor" strokeWidth="1.2" />
              <line x1="12" y1="15" x2="12" y2="21" stroke="currentColor" strokeWidth="1.2" />
              <line x1="3" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1.2" />
              <line x1="15" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.2" />
              <line x1="5.6" y1="5.6" x2="9.9" y2="9.9" stroke="currentColor" strokeWidth="1.2" />
              <line x1="14.1" y1="14.1" x2="18.4" y2="18.4" stroke="currentColor" strokeWidth="1.2" />
              <line x1="18.4" y1="5.6" x2="14.1" y2="9.9" stroke="currentColor" strokeWidth="1.2" />
              <line x1="9.9" y1="14.1" x2="5.6" y2="18.4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <div>
            <span className="font-['Cinzel'] tracking-[0.2em] text-sm sm:text-base font-bold text-[#ede6d6] block group-hover:text-[#c89d56] transition-colors">
              MAHĀBHĀRATA
            </span>
            <span className="text-[10px] sm:text-xs tracking-wider text-[#96743c] uppercase block font-['Plus_Jakarta_Sans']">
              Bhīṣma Parva · Strategic Decisions
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-link-${item.id}`}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all rounded-md relative ${
                  isActive
                    ? 'text-[#f5ebd7] font-semibold'
                    : 'text-[#b8ad96] hover:text-[#ede6d6] hover:bg-[#1a1d26]/50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#c89d56] to-transparent shadow-[0_0_8px_#c89d56]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Current Perspective Indicator & Quiz CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => {
              if (onPopCurrentCharacter) {
                onPopCurrentCharacter();
              } else {
                handleNavClick('characters');
              }
            }}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#c89d56]/40 bg-[#161822]/90 text-[11px] text-[#c89d56] hover:border-[#c89d56] hover:bg-[#202433] transition-all shadow-sm group"
            title="Pop Current Character Arms & Herald"
            id="nav-perspective-badge"
          >
            <Compass className="w-3.5 h-3.5 text-[#c89d56] group-hover:rotate-45 transition-transform" />
            <span>Lens: <strong className="text-[#ede6d6] font-semibold">{selectedCharacterName}</strong></span>
            <span className="text-[9px] px-1 py-0.2 rounded bg-[#c89d56]/20 text-[#f5ecd8] ml-1">POP</span>
          </button>

          <button
            onClick={() => handleNavClick('decision-quiz')}
            className="px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase font-['Cinzel'] bg-gradient-to-r from-[#801e1e] to-[#a32828] text-[#fbf7ee] rounded border border-[#c89d56]/40 hover:border-[#c89d56] hover:shadow-[0_0_15px_rgba(128,30,30,0.5)] transition-all flex items-center gap-1.5"
            id="nav-enter-quiz-btn"
          >
            <span>Take Decision</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded border border-[#c89d56]/30 text-[#ede6d6] hover:bg-[#1a1d26] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1017]/98 border-b border-[#c89d56]/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top duration-300">
          <div className="py-1 px-3 mb-2 rounded bg-[#161822] border border-[#c89d56]/20 flex items-center justify-between text-xs text-[#b8ad96]">
            <span>Active Perspective:</span>
            <span className="text-[#c89d56] font-semibold">{selectedCharacterName}</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-[#1e222e] text-[#fbf7ee] border-l-2 border-[#c89d56]'
                  : 'text-[#b8ad96] hover:bg-[#161822] hover:text-[#ede6d6]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('decision-quiz')}
              className="w-full py-2.5 text-center text-xs tracking-wider uppercase font-['Cinzel'] font-bold bg-[#801e1e] text-white rounded border border-[#c89d56]/50"
            >
              Launch Decision Quiz
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
