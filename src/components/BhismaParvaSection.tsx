import React, { useState } from 'react';
import { PARVA_OVERVIEW_CARDS } from '../data/parvaData';
import { ParvaCard } from '../types';
import { EPIC_IMAGES } from '../assets/images';
import { Swords, ShieldAlert, Sparkles, Target, X, BookOpen, ArrowRight } from 'lucide-react';

interface BhismaParvaSectionProps {
  onProceedToTimeline: () => void;
  onProceedToCharacters: () => void;
}

export const BhismaParvaSection: React.FC<BhismaParvaSectionProps> = ({
  onProceedToTimeline,
  onProceedToCharacters,
}) => {
  const [selectedCard, setSelectedCard] = useState<ParvaCard | null>(null);

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'battle':
        return <Swords className="w-5 h-5 text-[#c89d56]" />;
      case 'dilemma':
        return <ShieldAlert className="w-5 h-5 text-[#d97736]" />;
      case 'counsel':
        return <Sparkles className="w-5 h-5 text-[#dfc06b]" />;
      case 'strategy':
        return <Target className="w-5 h-5 text-[#801e1e]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#c89d56]" />;
    }
  };

  return (
    <section id="bhisma-parva" className="relative py-24 bg-[#0e1017] overflow-hidden">
      {/* Background illustration with Bhīṣma as focal point */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={EPIC_IMAGES.bhismaParva}
          alt="Bhishma in his chariot on the battlefield of Kurukshetra"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_20%] filter brightness-[0.65] contrast-[1.20] saturate-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/95 via-[#0e1017]/75 to-[#0b0c10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1017]/80 via-transparent to-[#0e1017]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#c89d56]/30 bg-[#161822]/80 text-[11px] font-semibold text-[#c89d56] tracking-widest uppercase mb-4">
            <span>Critical Edition · Book VI</span>
          </div>

          <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.16em] text-[#ede6d6] uppercase mb-2">
            BHĪṢMA PARVA
          </h2>

          <h3 className="font-['Cinzel'] text-lg sm:text-xl font-medium tracking-wider text-[#c89d56] mb-6">
            The Book of Bhīṣma
          </h3>

          {/* Short, easy-to-read explanation required by user prompt */}
          <div className="p-4 sm:p-5 rounded-lg bg-[#141720]/80 border border-[#c89d56]/20 shadow-xl backdrop-blur-sm">
            <p className="text-sm sm:text-base text-[#ede6d6] leading-relaxed font-['Plus_Jakarta_Sans']">
              Bhīṣma Parva describes the opening phase of the Kurukshetra war and contains the Bhagavad Gītā,
              where Arjuna faces a profound dilemma before the battle.
            </p>
          </div>
        </div>

        {/* 4 Interactive Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PARVA_OVERVIEW_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="group relative cursor-pointer rounded-xl bg-gradient-to-b from-[#181b24] to-[#11131a] p-6 border border-[#c89d56]/20 hover:border-[#c89d56]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(200,157,86,0.15)] flex flex-col justify-between"
              id={`parva-card-${card.id}`}
            >
              {/* Corner accent */}
              <div className="absolute top-2 right-2 text-[10px] font-['Cinzel'] text-[#c89d56]/40 group-hover:text-[#c89d56] transition-colors">
                TAP TO EXPLORE
              </div>

              <div>
                <div className="w-10 h-10 rounded-lg bg-[#202431] border border-[#c89d56]/30 flex items-center justify-center mb-4 group-hover:border-[#c89d56] transition-colors">
                  {getCardIcon(card.id)}
                </div>

                <span className="text-[11px] font-['Cormorant_Garamond'] text-[#c89d56] italic block tracking-wider mb-1">
                  {card.sanskritTitle}
                </span>

                <h4 className="font-['Cinzel'] text-lg font-bold text-[#ede6d6] tracking-wide mb-1 group-hover:text-[#f7f4ed]">
                  {card.title}
                </h4>

                <p className="text-xs font-semibold text-[#96743c] uppercase tracking-wider mb-3">
                  {card.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#b8ad96] leading-relaxed line-clamp-3">
                  {card.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#2c2925] flex items-center justify-between text-xs text-[#c89d56]">
                <span className="font-medium">Read context & lessons</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={onProceedToTimeline}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#161822] text-[#ede6d6] border border-[#c89d56]/40 hover:border-[#c89d56] font-['Cinzel'] text-xs tracking-widest font-semibold uppercase transition-all"
            id="explore-timeline-btn"
          >
            Explore 10-Day Timeline
          </button>
          <button
            onClick={onProceedToCharacters}
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#801e1e] text-white border border-[#c89d56]/50 hover:bg-[#962525] font-['Cinzel'] text-xs tracking-widest font-semibold uppercase transition-all shadow-lg"
            id="explore-characters-btn"
          >
            Meet the Characters & Perspectives
          </button>
        </div>
      </div>

      {/* Detail Modal for Selected Card */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-xl bg-[#141720] border border-[#c89d56]/50 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#1e222e] text-[#b8ad96] hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 rounded bg-[#1e222e] border border-[#c89d56]/30">
                {getCardIcon(selectedCard.id)}
              </span>
              <div>
                <span className="text-xs font-['Cormorant_Garamond'] text-[#c89d56] italic">
                  {selectedCard.sanskritTitle}
                </span>
                <h3 className="font-['Cinzel'] text-2xl font-bold text-[#ede6d6]">
                  {selectedCard.title}
                </h3>
              </div>
            </div>

            <p className="text-xs font-semibold text-[#96743c] uppercase tracking-wider mb-4">
              {selectedCard.subtitle}
            </p>

            <div className="space-y-4 text-sm text-[#ded0b4] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              <p className="font-medium text-[#f5ebd7] bg-[#1a1d26] p-3 rounded border-l-2 border-[#c89d56]">
                {selectedCard.summary}
              </p>
              <p>{selectedCard.extendedContext}</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#2c2925] text-xs">
              <div className="p-3 rounded bg-[#181b24] border border-[#c89d56]/20">
                <span className="text-[10px] text-[#c89d56] font-bold uppercase tracking-wider block mb-1">
                  Strategic Decision Principle:
                </span>
                <p className="text-[#ede6d6] italic font-['Cormorant_Garamond'] text-sm">
                  "{selectedCard.keyTakeaway}"
                </p>
              </div>

              <div className="text-[11px] text-[#96743c] flex items-center justify-between">
                <span>Textual Basis: {selectedCard.sourceCiting}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
