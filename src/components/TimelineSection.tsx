import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/parvaData';
import { TimelineEvent } from '../types';
import { ChevronRight, Clock, Shield, Sparkles, Scale, AlertOctagon } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string>(TIMELINE_EVENTS[1].id);

  const activeEvent =
    TIMELINE_EVENTS.find((e) => e.id === activeEventId) || TIMELINE_EVENTS[0];

  return (
    <section id="timeline" className="py-20 bg-[#0b0c10] border-t border-b border-[#2c2925] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c89d56] block mb-2 font-['Cinzel']">
            Chronicle of Critical Turning Points
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#ede6d6] tracking-wide mb-3">
            Bhīṣma Parva Timeline
          </h2>
          <p className="text-sm text-[#b8ad96] font-['Plus_Jakarta_Sans']">
            Trace the escalation from diplomatic collapse to the ethical dialogue of the Gītā and the fall of the patriarch.
          </p>
        </div>

        {/* Timeline Navigation Selector */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center min-w-max justify-between gap-2 sm:gap-4 relative px-2">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-[#2c2925] -translate-y-1/2 z-0" />

            {TIMELINE_EVENTS.map((event, idx) => {
              const isSelected = activeEventId === event.id;
              return (
                <button
                  key={event.id}
                  onClick={() => setActiveEventId(event.id)}
                  className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all ${
                    isSelected ? 'scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                  id={`timeline-node-${event.id}`}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-['Cinzel'] text-xs sm:text-sm font-bold border-2 transition-all ${
                      isSelected
                        ? 'bg-[#801e1e] border-[#c89d56] text-[#fbf7ee] shadow-[0_0_20px_rgba(200,157,86,0.4)]'
                        : 'bg-[#141720] border-[#38332c] text-[#b8ad96] group-hover:border-[#c89d56]'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-['Cinzel'] font-semibold mt-2 text-[#ede6d6] max-w-[90px] sm:max-w-[120px] text-center truncate">
                    {event.title}
                  </span>
                  <span className="text-[9px] text-[#96743c] uppercase tracking-wider">
                    {event.day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Timeline Event Detail Panel */}
        <div className="max-w-4xl mx-auto rounded-xl bg-gradient-to-b from-[#161822] to-[#101218] border border-[#c89d56]/30 p-6 sm:p-8 shadow-2xl transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#2c2925] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider bg-[#801e1e]/60 text-[#ede6d6] border border-[#c89d56]/30">
                  {activeEvent.day}
                </span>
                {activeEvent.sanskritTitle && (
                  <span className="text-xs font-['Cormorant_Garamond'] text-[#c89d56] italic">
                    {activeEvent.sanskritTitle}
                  </span>
                )}
              </div>
              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#ede6d6]">
                {activeEvent.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#c89d56] bg-[#1d202b] px-3 py-1.5 rounded-full border border-[#c89d56]/20 self-start md:self-auto">
              <Clock className="w-3.5 h-3.5" />
              <span>Historical Critical Record</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-4 mb-8 text-sm sm:text-base text-[#ded0b4] leading-relaxed font-['Plus_Jakarta_Sans'] font-light">
            <p className="font-normal text-[#f5ebd7] p-3 rounded bg-[#1a1d26] border-l-2 border-[#c89d56]">
              {activeEvent.shortDesc}
            </p>
            <p>{activeEvent.detailedContext}</p>
          </div>

          {/* Strategic Significance & Ethical Tension Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#12141c] border border-[#c89d56]/20">
              <div className="flex items-center gap-2 text-[#c89d56] text-xs font-bold font-['Cinzel'] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#c89d56]" />
                <span>Strategic Dimension</span>
              </div>
              <p className="text-xs sm:text-sm text-[#b8ad96] leading-relaxed">
                {activeEvent.strategicSignificance}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#12141c] border border-[#801e1e]/40">
              <div className="flex items-center gap-2 text-[#df6e6e] text-xs font-bold font-['Cinzel'] uppercase tracking-wider mb-2">
                <AlertOctagon className="w-4 h-4 text-[#df6e6e]" />
                <span>Ethical Dilemma</span>
              </div>
              <p className="text-xs sm:text-sm text-[#b8ad96] leading-relaxed">
                {activeEvent.ethicalTension}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
