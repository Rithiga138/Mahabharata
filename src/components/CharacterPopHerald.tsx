import React, { useEffect, useState } from 'react';
import { Character } from '../types';
import { X, Sparkles, Swords, Shield, Crown, Compass, ArrowRight, Zap, Volume2 } from 'lucide-react';
import { battleAudio } from '../utils/battleAudio';

interface CharacterPopHeraldProps {
  character: Character | null;
  onClose: () => void;
  onProceedToDilemma?: () => void;
}

export const CharacterPopHerald: React.FC<CharacterPopHeraldProps> = ({
  character,
  onClose,
  onProceedToDilemma,
}) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  useEffect(() => {
    if (character) {
      // Trigger character-specific sound cue
      battleAudio.playCharacterCue(character.id);
      setIsPlayingSound(true);
      const soundTimer = setTimeout(() => setIsPlayingSound(false), 2000);
      return () => clearTimeout(soundTimer);
    }
  }, [character]);

  if (!character) return null;

  // Custom visual & acoustic metadata for each character pop
  const getPopTheme = (id: string) => {
    switch (id) {
      case 'arjuna':
        return {
          auraColor: 'from-amber-500/30 via-orange-600/20 to-transparent',
          borderColor: 'border-amber-400',
          glowShadow: 'shadow-[0_0_50px_rgba(245,158,11,0.4)]',
          badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-500/50',
          accentColor: '#f59e0b',
          weaponTitle: 'Gāṇḍīva (गाण्डीव)',
          weaponSubtitle: 'The Celestial Bow of Varuna & Inexhaustible Quivers',
          bannerEmblem: 'Kapidhvaja (Hanuman Banner)',
          soundTitle: "Warrior's Strike & Gāṇḍīva Bow Snap",
          soundDetail: 'High-tension bowstring twang, supersonic aerodynamic arrow slicing through the air, and razor-sharp metallic warrior blade ring.',
          coreAttribute: 'The Moral Dilemma & Precision Archery',
          oathText: '“I shall hold the bow, but my heart demands truth before slaughter.”',
          particleEffect: 'golden-arrows',
        };
      case 'krishna':
        return {
          auraColor: 'from-blue-600/30 via-cyan-500/20 to-transparent',
          borderColor: 'border-cyan-400',
          glowShadow: 'shadow-[0_0_50px_rgba(56,189,248,0.4)]',
          badgeBg: 'bg-blue-950/80 text-cyan-300 border-cyan-500/50',
          accentColor: '#38bdf8',
          weaponTitle: 'Sudarśana Chakra & Pāñcajanya',
          weaponSubtitle: 'The Cosmic Discus of Time & The Sacred War Conch',
          bannerEmblem: 'Garuda Crest & Cosmic Reins',
          soundTitle: 'Divine Celestial Harmonics & Sacred Shankha',
          soundDetail: 'Transcendent 528Hz Solfeggio Sa-Pa celestial glow with crystalline bells, swelling into a sacred Pāñcajanya conch blast.',
          coreAttribute: 'Master Strategist & Loka-saṅgraha (Universal Order)',
          oathText: '“Yield your ego, act without thirst for fruits, and let Dharma prevail.”',
          particleEffect: 'cosmic-chakra',
        };
      case 'bhisma':
        return {
          auraColor: 'from-slate-400/30 via-stone-500/20 to-transparent',
          borderColor: 'border-slate-300',
          glowShadow: 'shadow-[0_0_50px_rgba(203,213,225,0.4)]',
          badgeBg: 'bg-stone-900/90 text-slate-200 border-slate-400/50',
          accentColor: '#e2e8f0',
          weaponTitle: 'Tāladhvaja & The Iron Shield',
          weaponSubtitle: 'The Silver Palm Banner & Icchā-mṛtyu (Death by Will)',
          bannerEmblem: 'Golden Chariot with Silver Palm Standard',
          soundTitle: "Monumental Greatness & Titan's Shield",
          soundDetail: 'Colossal patriarchal brass fanfare with imperial fifths, heavy anvil shield strike, and unyielding sub-bass resonance.',
          coreAttribute: 'Unbroken Vows & Sovereign Allegiance',
          oathText: '“Bound by royal debt, the patriarch fights though his heart bleeds.”',
          particleEffect: 'silver-shields',
        };
      case 'duryodhana':
        return {
          auraColor: 'from-red-600/35 via-rose-700/25 to-transparent',
          borderColor: 'border-red-500',
          glowShadow: 'shadow-[0_0_50px_rgba(239,68,68,0.45)]',
          badgeBg: 'bg-red-950/85 text-red-300 border-red-500/50',
          accentColor: '#ef4444',
          weaponTitle: 'The Royal Mace (Gadā)',
          weaponSubtitle: 'The Crushing Club of Hastinapura & Sovereign Will',
          bannerEmblem: 'The Serpent Crest of Sovereign Kingship',
          soundTitle: 'Sinister Villainy & Crushing Royal Mace',
          soundDetail: "Dark menacing tritone dissonance (Devil's Interval), low ominous brass descent, and crushing ground impact of the royal Gadā.",
          coreAttribute: 'Imperial Realpolitik & Total Power',
          oathText: '“Not even a needlepoint of earth shall be granted without conflict.”',
          particleEffect: 'war-flames',
        };
      case 'yudhishthira':
        return {
          auraColor: 'from-emerald-600/30 via-teal-700/20 to-transparent',
          borderColor: 'border-emerald-400',
          glowShadow: 'shadow-[0_0_50px_rgba(52,211,153,0.4)]',
          badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50',
          accentColor: '#34d399',
          weaponTitle: 'Dharmadhvaja & The Scales',
          weaponSubtitle: 'The Standard of Truth & Sovereign Conscience',
          bannerEmblem: 'White Chariot of Righteous Legitimacy',
          soundTitle: 'Imperial Great King Coronation Fanfare',
          soundDetail: 'Regal coronation fanfare with soaring royal herald trumpets (rising fifth to octave) and the golden palace sovereign bell.',
          coreAttribute: 'Dharmarāja & Compassionate Statecraft',
          oathText: '“Where righteousness walks barefoot, ultimate victory abides.”',
          particleEffect: 'sacred-lotus',
        };
      default:
        return {
          auraColor: 'from-amber-500/30 to-transparent',
          borderColor: 'border-amber-400',
          glowShadow: 'shadow-[0_0_40px_rgba(212,175,55,0.3)]',
          badgeBg: 'bg-neutral-900 text-amber-300 border-amber-500',
          accentColor: '#d4af37',
          weaponTitle: 'Kurukshetra Astra',
          weaponSubtitle: 'Legendary Strategic Weapon',
          bannerEmblem: 'Hastinapura Standard',
          soundTitle: 'Warrior Battle Cry',
          soundDetail: 'War horn and bowstring resonance.',
          coreAttribute: 'Strategic Insight',
          oathText: '“Duty calls across the fields of Kurukshetra.”',
          particleEffect: 'golden-arrows',
        };
    }
  };

  const theme = getPopTheme(character.id);

  const handleReplaySound = () => {
    battleAudio.playCharacterCue(character.id);
    setIsPlayingSound(true);
    setTimeout(() => setIsPlayingSound(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-500 animate-fadeIn">
      {/* Background radial flash */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${theme.auraColor} pointer-events-none opacity-80`}
      />

      {/* Main Pop Card */}
      <div
        id="character-pop-modal"
        className={`relative w-full max-w-2xl bg-gradient-to-b from-[#161824] via-[#10121a] to-[#0a0c12] rounded-2xl border-2 ${theme.borderColor} ${theme.glowShadow} p-6 sm:p-8 overflow-hidden transform transition-all duration-500 scale-100 animate-slideUp max-h-[90vh] overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-char-pop-btn"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1e2230]/80 hover:bg-[#282d40] text-[#ded0b4] hover:text-white border border-[#c89d56]/40 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ambient Top Glow Line */}
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-80"
          style={{ color: theme.accentColor }}
        />

        {/* Dynamic Character Weapon / Insignia Visual */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-5">
          {/* Circular Insignia with Animated Aura */}
          <div className="relative flex-shrink-0">
            {/* Pulsing ring */}
            <div
              className="absolute -inset-2 rounded-full opacity-60 blur-md animate-pulse"
              style={{ backgroundColor: theme.accentColor }}
            />

            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0e1017] border-2 border-[#c89d56] flex flex-col items-center justify-center p-2 relative z-10 shadow-xl">
              <span className="text-2xl sm:text-3xl font-['Cormorant_Garamond'] font-bold text-[#f5ecd8] mb-0.5">
                {character.sanskritName}
              </span>
              <span
                className="text-[10px] font-['Cinzel'] font-bold tracking-widest uppercase text-center px-1"
                style={{ color: theme.accentColor }}
              >
                {character.role.split(' ')[0]}
              </span>
            </div>

            {/* Emblem Icon badge */}
            <div
              className="absolute -bottom-1 -right-1 p-2 rounded-full border shadow-lg z-20 flex items-center justify-center"
              style={{ backgroundColor: '#10121a', borderColor: theme.accentColor }}
            >
              {character.id === 'arjuna' && <Swords className="w-4 h-4 text-amber-400" />}
              {character.id === 'krishna' && <Sparkles className="w-4 h-4 text-cyan-400" />}
              {character.id === 'bhisma' && <Shield className="w-4 h-4 text-slate-300" />}
              {character.id === 'duryodhana' && <Crown className="w-4 h-4 text-red-400" />}
              {character.id === 'yudhishthira' && <Compass className="w-4 h-4 text-emerald-400" />}
            </div>
          </div>

          {/* Name & Heraldic Title */}
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-['Cinzel'] font-bold uppercase tracking-widest bg-[#c89d56]/20 border border-[#c89d56]/40 text-[#d4af37]">
                LENS ACTIVATED
              </span>
              <span
                className={`px-2.5 py-0.5 rounded text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider border ${theme.badgeBg}`}
              >
                {character.focus}
              </span>
            </div>

            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-extrabold text-[#f5ecd8] tracking-wide mb-1">
              {character.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#b8ad96] font-['Plus_Jakarta_Sans'] font-medium">
              {character.role}
            </p>
          </div>
        </div>

        {/* Character Artifact & Weapon Showcase Banner */}
        <div className="rounded-xl bg-[#0c0e14]/90 border border-[#c89d56]/30 p-4 mb-4 relative overflow-hidden">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[10px] font-['Cinzel'] uppercase tracking-widest text-[#96743c] block font-bold">
                Sacred Arms & Standard
              </span>
              <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#ede6d6]">
                {theme.weaponTitle}
              </h3>
              <p className="text-xs text-[#b8ad96]">
                {theme.weaponSubtitle}
              </p>
            </div>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded bg-[#181a24] border border-[#c89d56]/30 text-right whitespace-nowrap hidden sm:inline-block"
              style={{ color: theme.accentColor }}
            >
              {theme.bannerEmblem}
            </span>
          </div>

          {/* Sanskrit Battle Quote */}
          {character.quote.sanskrit && (
            <div className="mt-2.5 pt-2.5 border-t border-[#2c2925]/80">
              <p className="font-['Cormorant_Garamond'] text-sm sm:text-base text-[#d4af37] italic font-medium leading-snug">
                "{character.quote.sanskrit}"
              </p>
              <p className="text-[11px] sm:text-xs text-[#ede6d6] italic mt-0.5">
                "{character.quote.english}"
              </p>
              <span className="text-[10px] text-[#96743c] block mt-0.5">
                — {character.quote.source}
              </span>
            </div>
          )}
        </div>

        {/* Custom Audio Cue Spotlight Box */}
        <div className="p-3 rounded-lg bg-[#11131c] border border-[#c89d56]/30 mb-4 flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div
              className={`p-2 rounded-lg border transition-all ${
                isPlayingSound
                  ? 'bg-[#c89d56]/30 border-[#c89d56] scale-110'
                  : 'bg-[#1a1d28] border-[#2c2925]'
              }`}
            >
              <Volume2
                className={`w-4 h-4 ${isPlayingSound ? 'text-[#f5ecd8] animate-pulse' : 'text-[#c89d56]'}`}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider text-[#d4af37]">
                  Acoustic Identity
                </span>
                <span className="text-xs font-['Cinzel'] font-semibold text-[#f5ecd8]">
                  • {theme.soundTitle}
                </span>
              </div>
              <p className="text-[11px] text-[#b8ad96] mt-0.5 leading-snug">
                {theme.soundDetail}
              </p>
            </div>
          </div>

          <button
            onClick={handleReplaySound}
            id={`replay-sound-btn-${character.id}`}
            className="flex-shrink-0 px-3 py-1.5 rounded bg-[#1e2230] hover:bg-[#2b3145] border border-[#c89d56]/40 text-[11px] font-['Cinzel'] font-semibold text-[#ede6d6] hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Play</span>
            <Volume2 className="w-3 h-3 text-[#c89d56]" />
          </button>
        </div>

        {/* Cognitive & Moral Lens Summary */}
        <div className="p-3.5 rounded-lg bg-[#141722] border border-[#c89d56]/25 mb-5">
          <span className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider text-[#c89d56] flex items-center gap-1.5 mb-1">
            <Zap className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
            <span>How You Will Experience Kurukshetra</span>
          </span>
          <p className="text-xs sm:text-sm text-[#ded0b4] leading-relaxed">
            {character.perspectiveIntro}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2.5 border-t border-[#222533]">
          <span className="text-[11px] text-[#96743c] italic hidden sm:inline">
            Interactive perspective active in the Decision Engine
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              id="confirm-lens-btn"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded bg-[#1e2230] hover:bg-[#2a2f44] border border-[#c89d56]/40 text-xs font-['Cinzel'] font-bold text-[#ede6d6] tracking-wider uppercase transition-all"
            >
              Continue Exploring
            </button>

            {onProceedToDilemma && (
              <button
                onClick={() => {
                  onClose();
                  onProceedToDilemma();
                }}
                id="enter-quiz-with-char-btn"
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded bg-[#801e1e] hover:bg-[#9c2525] border border-[#c89d56] text-xs font-['Cinzel'] font-bold text-white tracking-widest uppercase transition-all shadow-lg flex items-center justify-center gap-1.5 group"
              >
                <span>Face Dilemma</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
