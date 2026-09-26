import React from 'react';
import { Compass, BookOpen, Sparkles, Swords, Shield, Crown } from 'lucide-react';
import { EPIC_IMAGES } from '../assets/images';
import { CHARACTERS } from '../data/charactersData';

interface HeroProps {
  onEnterEpic: () => void;
  onExploreParva: () => void;
  onSelectCharacter?: (characterId: string) => void;
  selectedCharacterId?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onEnterEpic,
  onExploreParva,
  onSelectCharacter,
  selectedCharacterId = 'arjuna',
}) => {
  const getCharIcon = (id: string) => {
    switch (id) {
      case 'arjuna':
        return <Swords className="w-3.5 h-3.5 text-[#f59e0b]" />;
      case 'krishna':
        return <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />;
      case 'bhisma':
        return <Shield className="w-3.5 h-3.5 text-[#cbd5e1]" />;
      case 'duryodhana':
        return <Crown className="w-3.5 h-3.5 text-[#ef4444]" />;
      case 'yudhishthira':
        return <Compass className="w-3.5 h-3.5 text-[#34d399]" />;
      default:
        return <Compass className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Cinematic Background Image with Rich War Visuals & Legibility Protection */}
      <div className="absolute inset-0 z-0">
        <img
          src={EPIC_IMAGES.hero}
          alt="Kurukshetra battlefield with war chariots and golden banners"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.78] contrast-[1.25] saturate-[1.18] scale-100 transition-all duration-1000"
        />
        {/* Balanced vignettes that keep the magnificent war chariots, armies, and dusk skies vivid while guaranteeing crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/35 to-[#0b0c10]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10]/60 via-transparent to-[#0b0c10]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#08090d]/70" />
        {/* Subtle fiery battlefield atmospheric color grading */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#801e1e]/10 via-transparent to-[#0b0c10]/80 mix-blend-color-dodge pointer-events-none" />

        {/* Subtle Sanskrit manuscript decorative border overlay */}
        <div className="absolute inset-x-8 top-24 bottom-12 border border-[#c89d56]/25 pointer-events-none hidden md:block">
          <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#c89d56]" />
          <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#c89d56]" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#c89d56]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#c89d56]" />
        </div>
      </div>

      {/* Foreground Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Academic context badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c89d56]/30 bg-[#161822]/80 backdrop-blur-sm text-xs font-medium text-[#c89d56] mb-6 shadow-lg tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c89d56] animate-ping" />
          <span>Interactive Epic Humanities & Strategy Lab</span>
        </div>

        {/* Sanskrit Epigraph */}
        <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl text-[#d4af37]/85 tracking-widest italic mb-2 select-none">
          धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।
        </p>
        <span className="text-[11px] sm:text-xs text-[#b8ad96]/75 uppercase tracking-widest block mb-4">
          Bhagavad Gītā 1.1 · On the sacred field of Kurukshetra, gathered and eager for battle
        </span>

        {/* Major Title */}
        <h1 className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.18em] text-[#ede6d6] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] uppercase mb-4">
          MAHĀBHĀRATA
        </h1>

        {/* Secondary Title */}
        <h2 className="font-['Cinzel'] text-xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-[#c89d56] mb-6">
          Strategic Lessons from an Ancient Epic
        </h2>

        {/* Subtitle required by prompt */}
        <p className="max-w-2xl text-base sm:text-xl text-[#ded0b4] font-normal leading-relaxed mb-8 font-['Plus_Jakarta_Sans'] font-light">
          Explore the characters. Understand their choices. Test your decisions.
        </p>

        {/* Quick Character Selection Strip right on Hero */}
        {onSelectCharacter && (
          <div className="mb-10 w-full max-w-3xl">
            <span className="text-[10px] font-['Cinzel'] tracking-[0.25em] text-[#c89d56] uppercase block mb-3 font-semibold">
              Select Character to Trigger Their Herald & Arms
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {CHARACTERS.map((char) => {
                const isSelected = selectedCharacterId === char.id;
                return (
                  <button
                    key={char.id}
                    onClick={() => onSelectCharacter(char.id)}
                    id={`hero-char-btn-${char.id}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-['Cinzel'] font-semibold tracking-wider backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 ${
                      isSelected
                        ? 'bg-[#1e2230]/90 border-[#c89d56] text-[#ede6d6] shadow-[0_0_15px_rgba(200,157,86,0.35)] ring-1 ring-[#c89d56]'
                        : 'bg-[#12141c]/80 border-[#2c2925] text-[#b8ad96] hover:border-[#c89d56]/60 hover:text-white'
                    }`}
                  >
                    {getCharIcon(char.id)}
                    <span>{char.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-14">
          {/* Primary CTA */}
          <button
            onClick={onEnterEpic}
            id="hero-primary-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-[#801e1e] via-[#942424] to-[#801e1e] text-[#fbf7ee] font-['Cinzel'] text-sm tracking-[0.2em] font-bold uppercase border border-[#c89d56]/50 shadow-[0_0_25px_rgba(128,30,30,0.6)] hover:shadow-[0_0_35px_rgba(200,157,86,0.4)] hover:border-[#c89d56] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
          >
            <Compass className="w-4 h-4 text-[#d4af37] group-hover:rotate-90 transition-transform duration-500" />
            <span>ENTER THE EPIC</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreParva}
            id="hero-secondary-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#13151b]/80 backdrop-blur-sm text-[#ede6d6] font-['Cinzel'] text-sm tracking-[0.18em] font-semibold uppercase border border-[#c89d56]/30 hover:border-[#c89d56] hover:bg-[#1a1d26] transition-all flex items-center justify-center gap-3 group"
          >
            <BookOpen className="w-4 h-4 text-[#c89d56]" />
            <span>EXPLORE BHĪṢMA PARVA</span>
          </button>
        </div>

        {/* Museum Exhibition Highlights Quick Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full text-left pt-6 border-t border-[#c89d56]/20">
          <div className="p-2.5 rounded bg-[#13151b]/60 border border-[#c89d56]/10">
            <span className="text-[10px] text-[#96743c] uppercase tracking-wider block font-semibold">Core Focus</span>
            <span className="text-xs text-[#ede6d6] font-medium font-['Cinzel']">Book 6: Bhīṣma Parva</span>
          </div>
          <div className="p-2.5 rounded bg-[#13151b]/60 border border-[#c89d56]/10">
            <span className="text-[10px] text-[#96743c] uppercase tracking-wider block font-semibold">Dilemma Center</span>
            <span className="text-xs text-[#ede6d6] font-medium font-['Cinzel']">Arjuna’s Viṣāda & Duty</span>
          </div>
          <div className="p-2.5 rounded bg-[#13151b]/60 border border-[#c89d56]/10">
            <span className="text-[10px] text-[#96743c] uppercase tracking-wider block font-semibold">Interactive Engine</span>
            <span className="text-xs text-[#ede6d6] font-medium font-['Cinzel']">Scenario Decision Quiz</span>
          </div>
          <div className="p-2.5 rounded bg-[#13151b]/60 border border-[#c89d56]/10">
            <span className="text-[10px] text-[#96743c] uppercase tracking-wider block font-semibold">Learning Outcome</span>
            <span className="text-xs text-[#ede6d6] font-medium font-['Cinzel']">Strategic Radar Profile</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={onExploreParva}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#b8ad96]/80 hover:text-[#c89d56] transition-colors group cursor-pointer"
        aria-label="Scroll to Bhīṣma Parva section"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-['Cinzel']">Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border border-[#c89d56]/40 flex items-start justify-center p-1 group-hover:border-[#c89d56]">
          <div className="w-1 h-2 rounded-full bg-[#c89d56] animate-bounce" />
        </div>
      </button>
    </section>
  );
};
