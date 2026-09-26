import React from 'react';
import { SOURCES_DATA } from '../data/parvaData';
import { BookOpen, Languages, GraduationCap, Globe, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const SourcesSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'PRIMARY TEXT':
        return <BookOpen className="w-4 h-4 text-[#c89d56]" />;
      case 'TRANSLATIONS & COMMENTARIES':
        return <Languages className="w-4 h-4 text-[#60a5fa]" />;
      case 'RESEARCH & PERSPECTIVES':
        return <GraduationCap className="w-4 h-4 text-[#d97736]" />;
      case 'DIGITAL & EDUCATIONAL RESOURCES':
        return <Globe className="w-4 h-4 text-[#4ade80]" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section id="sources" className="py-24 bg-[#08090d] border-t border-[#2c2925] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#c89d56]/30 bg-[#161822] text-[11px] font-bold text-[#c89d56] tracking-[0.2em] uppercase mb-4">
            <span>Academic Rigor & Bibliography</span>
          </div>

          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-[0.16em] text-[#ede6d6] uppercase mb-3">
            SOURCES & REFERENCES
          </h2>

          <p className="text-xs sm:text-sm text-[#b8ad96] font-['Plus_Jakarta_Sans'] font-light max-w-2xl mx-auto">
            Grounded in the Critical Edition of the Mahābhārata and established Indological and ethical research.
          </p>
        </div>

        {/* Academic Integrity Taxonomy / Epistemic Distinctions Callout */}
        <div className="p-6 rounded-2xl bg-[#141620] border border-[#c89d56]/30 shadow-xl mb-14">
          <h3 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#ede6d6] tracking-wider uppercase mb-3 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#c89d56]" />
            <span>Academic Integrity & Epistemic Boundaries</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded bg-[#0e1017] border-l-2 border-[#c89d56]">
              <span className="font-['Cinzel'] font-bold text-[#c89d56] uppercase tracking-wider block mb-1">
                Source-Based Facts
              </span>
              <p className="text-[#ded0b4] font-light">
                Direct narrative events, army formations, and Sanskrit verses cited from the BORI Critical Edition.
              </p>
            </div>

            <div className="p-3 rounded bg-[#0e1017] border-l-2 border-[#60a5fa]">
              <span className="font-['Cinzel'] font-bold text-[#60a5fa] uppercase tracking-wider block mb-1">
                Project Interpretation
              </span>
              <p className="text-[#ded0b4] font-light">
                Interactive decision simulations framing dilemmas through classical ethical trade-off theories.
              </p>
            </div>

            <div className="p-3 rounded bg-[#0e1017] border-l-2 border-[#4ade80]">
              <span className="font-['Cinzel'] font-bold text-[#4ade80] uppercase tracking-wider block mb-1">
                Modern Analogy
              </span>
              <p className="text-[#ded0b4] font-light">
                Contemporary case studies in academic, corporate, and leadership domains testing parallel dynamics.
              </p>
            </div>

            <div className="p-3 rounded bg-[#0e1017] border-l-2 border-[#d97736]">
              <span className="font-['Cinzel'] font-bold text-[#d97736] uppercase tracking-wider block mb-1">
                AI-Assisted Analysis
              </span>
              <p className="text-[#ded0b4] font-light">
                Heuristic analytical reflections bounded by strict prompt instructions to prevent hallunication.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Categorized Reference Blocks */}
        <div className="space-y-8">
          {SOURCES_DATA.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#10121a] border border-[#2c2925] hover:border-[#c89d56]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                {getCategoryIcon(group.category)}
                <h3 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#ede6d6] tracking-wider uppercase">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-4">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-3.5 rounded-lg bg-[#141722]/60 border border-[#232736] flex flex-col sm:flex-row sm:items-start justify-between gap-2"
                  >
                    <div>
                      <h4 className="font-['Cinzel'] text-xs sm:text-sm font-semibold text-[#f5ebd7]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#b8ad96] font-['Plus_Jakarta_Sans'] font-light mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="text-[11px] text-[#96743c] sm:text-right shrink-0">
                      <span className="italic block">{item.citation}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e222e] text-[#c89d56] border border-[#c89d56]/20 inline-block mt-1">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Credits */}
        <div className="pt-16 mt-16 border-t border-[#2c2925] text-center text-xs text-[#96743c] space-y-2">
          <p className="font-['Cinzel'] text-[#ede6d6] font-semibold tracking-wider">
            MAHĀBHĀRATA: STRATEGIC LESSONS FROM BHĪṢMA PARVA
          </p>
          <p>
            An Academic Interactive Project in Digital Epic Humanities, Decision Sciences, and Indian Philosophy.
          </p>
          <p className="text-[11px] text-[#b8ad96]/60">
            Critical Edition text © Bhandarkar Oriental Research Institute. All translations cited for educational, non-commercial research purposes.
          </p>
        </div>
      </div>
    </section>
  );
};
