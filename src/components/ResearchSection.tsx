import React from 'react';
import { RESEARCH_PILLARS } from '../data/parvaData';
import { Lightbulb, BookMarked, Sparkles, LineChart } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'contemporary-problem':
        return <Lightbulb className="w-5 h-5 text-[#df6e6e]" />;
      case 'traditional-insight':
        return <BookMarked className="w-5 h-5 text-[#c89d56]" />;
      case 'innovation':
        return <Sparkles className="w-5 h-5 text-[#60a5fa]" />;
      case 'evaluation':
        return <LineChart className="w-5 h-5 text-[#4ade80]" />;
      default:
        return <Lightbulb className="w-5 h-5" />;
    }
  };

  return (
    <section id="research-pedagogy" className="py-24 bg-[#0a0b0f] border-t border-[#2c2925] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header required by prompt */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#c89d56]/30 bg-[#161822] text-[11px] font-bold text-[#c89d56] tracking-[0.2em] uppercase mb-4">
            <span>Pedagogical Framework</span>
          </div>

          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-[0.16em] text-[#ede6d6] uppercase mb-3">
            THE IDEA BEHIND THE PROJECT
          </h2>

          <p className="font-['Cinzel'] text-base sm:text-xl font-medium tracking-wide text-[#c89d56] mb-3">
            Recontextualizing Ancient Epic Humanities for 21st-Century Decision Analysis
          </p>

          <p className="text-xs sm:text-sm text-[#b8ad96] font-['Plus_Jakarta_Sans'] font-light">
            How an interactive pedagogical architecture bridges classical Sanskrit epic literature, moral philosophy, and modern decision sciences.
          </p>
        </div>

        {/* 4 Connected Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESEARCH_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-6 rounded-xl bg-[#141620] border border-[#2c2925] hover:border-[#c89d56]/60 transition-all flex flex-col justify-between"
              id={`research-pillar-${pillar.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1f2433] border border-[#c89d56]/30 flex items-center justify-center">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-['Cinzel'] font-bold text-[#96743c]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-['Cinzel'] text-base font-bold text-[#ede6d6] mb-2 tracking-wide">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#ded0b4] leading-relaxed mb-4 font-['Plus_Jakarta_Sans'] font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2c2925] text-xs text-[#c89d56] font-medium font-['Cormorant_Garamond'] italic">
                "{pillar.detail}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
