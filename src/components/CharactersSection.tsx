import React, { useState } from 'react';
import { CHARACTERS } from '../data/charactersData';
import { Character } from '../types';
import { Compass, Quote, Shield, Swords, Sparkles, Crown, ChevronRight, Zap, Flame, Award, Volume2 } from 'lucide-react';
import { battleAudio } from '../utils/battleAudio';

interface CharactersSectionProps {
  selectedCharacterId: string;
  onSelectPerspective: (characterId: string, shouldPop?: boolean) => void;
  onProceedToQuiz: () => void;
  onTriggerCharacterPop: (character: Character) => void;
}

export const CharactersSection: React.FC<CharactersSectionProps> = ({
  selectedCharacterId,
  onSelectPerspective,
  onProceedToQuiz,
  onTriggerCharacterPop,
}) => {
  const [activeTabCharacterId, setActiveTabCharacterId] = useState<string>(selectedCharacterId || 'arjuna');

  const activeChar =
    CHARACTERS.find((c) => c.id === activeTabCharacterId) || CHARACTERS[0];

  const handleCharacterTabClick = (char: Character) => {
    setActiveTabCharacterId(char.id);
    onSelectPerspective(char.id, false);
    onTriggerCharacterPop(char);
    battleAudio.playCharacterCue(char.id);
  };

  const handleSelectLensClick = (char: Character) => {
    onSelectPerspective(char.id, true);
    onTriggerCharacterPop(char);
    battleAudio.playCharacterCue(char.id);
  };

  const getCharacterBadgeIcon = (id: string) => {
    switch (id) {
      case 'arjuna':
        return <Swords className="w-4 h-4 text-[#f59e0b]" />;
      case 'krishna':
        return <Sparkles className="w-4 h-4 text-[#38bdf8]" />;
      case 'bhisma':
        return <Shield className="w-4 h-4 text-[#cbd5e1]" />;
      case 'duryodhana':
        return <Crown className="w-4 h-4 text-[#ef4444]" />;
      case 'yudhishthira':
        return <Compass className="w-4 h-4 text-[#34d399]" />;
      default:
        return <Compass className="w-4 h-4" />;
    }
  };

  // Dedicated character weapon and aura visual indicators
  const getCharacterWeaponVisual = (id: string) => {
    switch (id) {
      case 'arjuna':
        return {
          weaponName: 'Gāṇḍīva & Akshaya Tūnīra',
          weaponType: 'Celestial Bow & Endless Quiver of Arrows',
          badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-500/40',
          accent: '#f59e0b',
          tagline: 'Precision archery under moral introspection',
        };
      case 'krishna':
        return {
          weaponName: 'Sudarśana Chakra & Pāñcajanya',
          weaponType: 'Cosmic Discus of Time & Sacred War Conch',
          badgeColor: 'text-cyan-300 bg-blue-950/60 border-cyan-500/40',
          accent: '#38bdf8',
          tagline: 'Transcendent strategy detached from personal ego',
        };
      case 'bhisma':
        return {
          weaponName: 'Tāladhvaja & The Iron Shield of Oaths',
          weaponType: 'Silver Palm Standard & Invincible Death-at-Will',
          badgeColor: 'text-slate-200 bg-stone-900/80 border-slate-400/40',
          accent: '#cbd5e1',
          tagline: 'Unshakable fidelity to state duty despite moral sorrow',
        };
      case 'duryodhana':
        return {
          weaponName: 'The Royal Mace (Gadā) & Serpent Standard',
          weaponType: 'Crushing Heavy Club & Unyielding Royal Ambition',
          badgeColor: 'text-red-300 bg-red-950/60 border-red-500/40',
          accent: '#ef4444',
          tagline: 'Relentless assertion of sovereign supremacy',
        };
      case 'yudhishthira':
        return {
          weaponName: 'The Scales of Dharma & Barefoot Humility',
          weaponType: 'Standard of Absolute Truth & Righteous Legitimacy',
          badgeColor: 'text-emerald-300 bg-emerald-950/60 border-emerald-500/40',
          accent: '#34d399',
          tagline: 'Upholding moral integrity under the brutality of war',
        };
      default:
        return {
          weaponName: 'Kurukshetra Astra',
          weaponType: 'Heroic Armament',
          badgeColor: 'text-amber-400 bg-amber-950/60 border-amber-500/40',
          accent: '#c89d56',
          tagline: 'Strategic master of Kurukshetra',
        };
    }
  };

  const getCharacterSoundLabel = (id: string) => {
    switch (id) {
      case 'arjuna':
        return { title: "Warrior's Strike", desc: 'Gāṇḍīva bow snap & razor arrow whoosh' };
      case 'krishna':
        return { title: 'Divine Resonance', desc: '528Hz Sa-Pa celestial glow & sacred conch' };
      case 'bhisma':
        return { title: 'Monumental Greatness', desc: 'Patriarchal brass fifths & titan shield' };
      case 'duryodhana':
        return { title: 'Sinister Villainy', desc: 'Dark tritone growl & crushing royal mace' };
      case 'yudhishthira':
        return { title: 'Great King Fanfare', desc: 'Coronation trumpet fanfare & sovereign bell' };
      default:
        return { title: 'Epic Audio Cue', desc: 'Kurukshetra soundscape' };
    }
  };

  const weaponInfo = getCharacterWeaponVisual(activeChar.id);
  const soundInfo = getCharacterSoundLabel(activeChar.id);

  return (
    <section id="characters" className="py-24 bg-[#0e1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header required by prompt */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#c89d56]/30 bg-[#161822] text-[11px] font-semibold text-[#c89d56] tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Dramatis Personae & Battlefield Lenses</span>
          </div>

          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.16em] text-[#ede6d6] uppercase mb-3">
            MEET THE CHARACTERS
          </h2>

          <p className="font-['Cinzel'] text-base sm:text-xl font-medium tracking-wide text-[#c89d56] mb-3">
            Every decision is shaped by the people who make it.
          </p>

          <p className="text-xs sm:text-sm text-[#b8ad96] font-['Plus_Jakarta_Sans']">
            Select any character below to trigger their dramatic herald, iconic weapons, and strategic worldview.
          </p>
        </div>

        {/* Character Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CHARACTERS.map((char) => {
            const isTabActive = activeTabCharacterId === char.id;
            const isChosenPerspective = selectedCharacterId === char.id;

            return (
              <button
                key={char.id}
                onClick={() => handleCharacterTabClick(char)}
                id={`char-tab-${char.id}`}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border font-['Cinzel'] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 ${
                  isTabActive
                    ? 'bg-[#1e222e] border-[#c89d56] text-[#ede6d6] shadow-[0_0_20px_rgba(200,157,86,0.3)] ring-1 ring-[#c89d56]'
                    : 'bg-[#12141c] border-[#2c2925] text-[#b8ad96] hover:border-[#c89d56]/50 hover:text-[#ede6d6]'
                }`}
              >
                {getCharacterBadgeIcon(char.id)}
                <span>{char.name}</span>
                {isChosenPerspective && (
                  <span className="w-2 h-2 rounded-full bg-[#c89d56] shadow-[0_0_8px_#c89d56]" title="Active Lens" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Character Profile Detail Card */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-[#161822] via-[#12141c] to-[#0c0e14] border border-[#c89d56]/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
          {/* Subtle background motif */}
          <div
            className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: weaponInfo.accent }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Identity & Artistic Presentation */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Animated Avatar Circle with Aura */}
              <div
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 p-1 bg-[#101218] flex items-center justify-center relative shadow-2xl mb-4 transition-all duration-500"
                style={{ borderColor: weaponInfo.accent }}
              >
                {/* Rotating decorative halo */}
                <div
                  className="absolute -inset-1 rounded-full opacity-30 blur-sm animate-pulse"
                  style={{ backgroundColor: weaponInfo.accent }}
                />

                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1b1f2b] to-[#282d3d] flex flex-col items-center justify-center p-3 border border-[#c89d56]/30 relative z-10">
                  <span className="text-3xl sm:text-4xl font-['Cormorant_Garamond'] text-[#f5ecd8] font-bold mb-1 drop-shadow-md">
                    {activeChar.sanskritName}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-['Cinzel'] font-bold" style={{ color: weaponInfo.accent }}>
                    {activeChar.focus}
                  </span>
                </div>

                {/* Floating Weapon Icon */}
                <div
                  className="absolute -bottom-1 -right-1 p-2.5 rounded-full bg-[#141620] border shadow-xl z-20"
                  style={{ borderColor: weaponInfo.accent }}
                >
                  {getCharacterBadgeIcon(activeChar.id)}
                </div>
              </div>

              <div className="w-full">
                <span className="text-xs font-semibold text-[#c89d56] tracking-widest uppercase block mb-1">
                  {activeChar.role}
                </span>
                <h3 className="font-['Cinzel'] text-3xl font-extrabold text-[#ede6d6] tracking-wide mb-2">
                  {activeChar.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded bg-[#202431] border border-[#c89d56]/30 text-xs font-semibold text-[#d4af37] mb-3">
                  Focus: {activeChar.focus}
                </div>

                {/* Dramatic Pop Trigger Button */}
                <button
                  onClick={() => onTriggerCharacterPop(activeChar)}
                  id={`pop-char-aura-btn-${activeChar.id}`}
                  className="w-full mb-2 py-2 px-3 rounded-lg border text-xs font-['Cinzel'] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{
                    backgroundColor: 'rgba(24, 28, 40, 0.9)',
                    borderColor: weaponInfo.accent,
                    color: weaponInfo.accent,
                  }}
                >
                  <Zap className="w-3.5 h-3.5 animate-bounce" />
                  <span>Pop {activeChar.name}'s Arms & Herald</span>
                </button>

                {/* Soundscape Audition Button */}
                <button
                  onClick={() => battleAudio.playCharacterCue(activeChar.id)}
                  id={`audition-sound-btn-${activeChar.id}`}
                  className="w-full mb-3 py-1.5 px-2.5 rounded-lg border border-[#c89d56]/30 bg-[#12151e] hover:bg-[#1b1f2c] text-[11px] text-[#ded0b4] hover:text-[#ede6d6] flex items-center justify-between gap-2 transition-all group"
                  title={`Play ${soundInfo.title}`}
                >
                  <div className="flex items-center gap-1.5 overflow-hidden text-left">
                    <Volume2 className="w-3.5 h-3.5 text-[#c89d56] group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="truncate font-['Cinzel'] font-semibold text-[10px] text-[#c89d56]">{soundInfo.title}</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#c89d56]/20 text-[#f5ecd8] flex-shrink-0 font-bold">Hear</span>
                </button>
              </div>

              {/* Lens Selection Button inside Card */}
              <div className="w-full pt-3 border-t border-[#2c2925]">
                {selectedCharacterId === activeChar.id ? (
                  <div className="w-full py-2.5 px-3 rounded bg-[#c89d56]/20 border border-[#c89d56] text-center text-xs font-bold font-['Cinzel'] text-[#d4af37] tracking-wider uppercase flex items-center justify-center gap-2">
                    <span>✓ Active Lens for Simulation</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleSelectLensClick(activeChar)}
                    id={`select-lens-btn-${activeChar.id}`}
                    className="w-full py-2.5 px-3 rounded bg-[#801e1e] hover:bg-[#992525] border border-[#c89d56]/50 text-center text-xs font-bold font-['Cinzel'] text-white tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Experience War Through {activeChar.name}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
                <span className="text-[10px] text-[#96743c] text-center block mt-2">
                  Interactive interpretation inspired by the Mahābhārata
                </span>
              </div>
            </div>

            {/* Right Column: Character Analysis, Weapons, Quotes, Dilemma */}
            <div className="lg:col-span-8 space-y-5">
              {/* Dynamic Weapon & Emblem Showcase Banner */}
              <div
                className={`p-4 rounded-xl border ${weaponInfo.badgeColor} flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner relative overflow-hidden`}
              >
                <div>
                  <span className="text-[10px] font-['Cinzel'] uppercase tracking-widest font-bold block mb-0.5 opacity-80">
                    Iconic Arms & Motifs
                  </span>
                  <h4 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#f5ecd8]">
                    {weaponInfo.weaponName}
                  </h4>
                  <p className="text-xs text-[#ded0b4] opacity-90">
                    {weaponInfo.weaponType}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="text-[10px] uppercase tracking-wider font-semibold opacity-75 block">
                    Strategic Principle
                  </span>
                  <span className="text-xs font-medium italic text-[#f5ecd8]">
                    {weaponInfo.tagline}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#96743c] mb-2 font-['Cinzel']">
                  Character & Strategic Architecture
                </h4>
                <p className="text-sm sm:text-base text-[#ded0b4] leading-relaxed font-['Plus_Jakarta_Sans'] font-light">
                  {activeChar.description}
                </p>
              </div>

              {/* Classical Quote */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#101218] border border-[#c89d56]/25 relative">
                <Quote className="w-6 h-6 text-[#c89d56]/30 absolute top-3 right-3" />
                {activeChar.quote.sanskrit && (
                  <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-[#d4af37] italic mb-1 font-medium">
                    "{activeChar.quote.sanskrit}"
                  </p>
                )}
                <p className="text-xs sm:text-sm text-[#ede6d6] italic mb-2">
                  "{activeChar.quote.english}"
                </p>
                <span className="text-[11px] text-[#96743c] font-medium block">
                  — {activeChar.quote.source}
                </span>
              </div>

              {/* Strategic Insights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#141720] border border-[#c89d56]/20">
                  <span className="text-[10px] font-bold font-['Cinzel'] uppercase tracking-wider text-[#c89d56] block mb-1">
                    Central Dilemma
                  </span>
                  <p className="text-xs text-[#b8ad96] leading-relaxed">
                    {activeChar.keyDilemma}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#141720] border border-[#c89d56]/20">
                  <span className="text-[10px] font-bold font-['Cinzel'] uppercase tracking-wider text-[#c89d56] block mb-1">
                    Strategic Strength
                  </span>
                  <p className="text-xs text-[#b8ad96] leading-relaxed">
                    {activeChar.strategicStrength}
                  </p>
                </div>
              </div>

              {/* Symbolism */}
              <div className="text-xs text-[#b8ad96]">
                <strong className="text-[#c89d56] font-['Cinzel'] uppercase tracking-wider text-[11px]">Motif & Symbolism: </strong>
                <span>{activeChar.symbolism}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 "WHO ARE YOU?" FEATURE directly integrated as highlighted module */}
        <div id="perspective" className="rounded-2xl bg-[#141620] border border-[#c89d56]/40 p-6 sm:p-10 text-center max-w-4xl mx-auto shadow-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c89d56] block mb-2 font-['Cinzel']">
            Perspective Simulator
          </span>
          <h3 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#ede6d6] mb-3">
            WHO WILL YOU SEE THE WAR THROUGH?
          </h3>
          <p className="text-xs sm:text-sm text-[#ded0b4] max-w-2xl mx-auto mb-8 font-['Plus_Jakarta_Sans'] font-light">
            Every strategist’s view of the Kurukshetra conflict is constrained by their vows, duties, and worldview. Select a lens below to trigger their sacred herald before testing your judgment.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {CHARACTERS.map((char) => {
              const isSelected = selectedCharacterId === char.id;
              return (
                <button
                  key={char.id}
                  onClick={() => handleSelectLensClick(char)}
                  id={`lens-select-${char.id}`}
                  className={`p-3 rounded-lg border text-center transition-all transform hover:-translate-y-0.5 ${
                    isSelected
                      ? 'bg-[#1f2433] border-[#c89d56] text-[#ede6d6] shadow-[0_0_20px_rgba(200,157,86,0.35)] ring-1 ring-[#c89d56]'
                      : 'bg-[#11131a] border-[#2c2925] text-[#b8ad96] hover:border-[#c89d56]/50'
                  }`}
                >
                  <span className="text-lg font-['Cormorant_Garamond'] text-[#c89d56] block font-bold mb-1">
                    {char.sanskritName}
                  </span>
                  <span className="font-['Cinzel'] text-xs font-bold block truncate">
                    {char.name}
                  </span>
                  <span className="text-[9px] text-[#96743c] block truncate mt-0.5">
                    {char.focus}
                  </span>
                  {isSelected && (
                    <span className="inline-block mt-1 text-[9px] font-bold text-[#4ade80] uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Perspective Active Statement */}
          <div className="p-4 rounded-lg bg-[#0e1017] border border-[#c89d56]/30 mb-6 text-left max-w-2xl mx-auto">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#c89d56] uppercase tracking-wider font-['Cinzel']">
                <Compass className="w-4 h-4 text-[#c89d56]" />
                <span>Active Lens</span>
              </div>
              <button
                onClick={() => onTriggerCharacterPop(activeChar)}
                className="text-[10px] text-[#d4af37] hover:underline font-['Cinzel'] uppercase tracking-wider flex items-center gap-1"
              >
                <Zap className="w-3 h-3 text-[#f59e0b]" />
                <span>View Herald</span>
              </button>
            </div>
            <p className="text-sm text-[#ede6d6] font-medium mb-1 font-['Plus_Jakarta_Sans']">
              You are experiencing the situation through <strong className="text-[#d4af37]">{activeChar.name}’s</strong> perspective.
            </p>
            <p className="text-xs text-[#b8ad96] italic">
              {activeChar.perspectiveIntro}
            </p>
            <span className="text-[10px] text-[#96743c] block mt-2 border-t border-[#2c2925] pt-1">
              Interactive interpretation inspired by the Mahābhārata.
            </span>
          </div>

          <button
            onClick={onProceedToQuiz}
            id="proceed-to-quiz-btn"
            className="px-8 py-3.5 rounded-md bg-[#801e1e] hover:bg-[#9c2525] border border-[#c89d56] text-white font-['Cinzel'] text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(128,30,30,0.6)] transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <span>Proceed to The Decision</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
