import React, { useState } from 'react';
import { MODERN_SCENARIOS } from '../data/modernScenariosData';
import { ModernScenario } from '../types';
import { GraduationCap, Briefcase, Users, HeartHandshake, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const ModernScenariosSection: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(MODERN_SCENARIOS[0].id);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const activeScenario =
    MODERN_SCENARIOS.find((s) => s.id === selectedScenarioId) || MODERN_SCENARIOS[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'COLLEGE':
        return <GraduationCap className="w-4 h-4 text-[#c89d56]" />;
      case 'CAREER':
        return <Briefcase className="w-4 h-4 text-[#60a5fa]" />;
      case 'LEADERSHIP':
        return <Users className="w-4 h-4 text-[#4ade80]" />;
      case 'EVERYDAY LIFE':
        return <HeartHandshake className="w-4 h-4 text-[#f472b6]" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    setSelectedOptionIndex(null);
  };

  return (
    <section id="modern-application" className="py-24 bg-[#0e1017] border-t border-[#2c2925] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#c89d56]/30 bg-[#161822] text-[11px] font-bold text-[#c89d56] tracking-[0.2em] uppercase mb-4">
            <span>Contemporary Applications</span>
          </div>

          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-[0.16em] text-[#ede6d6] uppercase mb-3">
            FROM KURUKSHETRA TO TODAY
          </h2>

          <p className="font-['Cinzel'] text-base sm:text-xl font-medium tracking-wide text-[#c89d56] mb-3">
            Connecting Ancient Epic Dilemmas to Modern Everyday Choices
          </p>

          <p className="text-xs sm:text-sm text-[#b8ad96] font-['Plus_Jakarta_Sans'] font-light">
            Test how the strategic principles of duty, long-term consequence, and ethical courage illuminate everyday dilemmas across academic life, career, and leadership.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {MODERN_SCENARIOS.map((scen) => {
            const isSelected = selectedScenarioId === scen.id;
            return (
              <button
                key={scen.id}
                onClick={() => handleSelectScenario(scen.id)}
                id={`modern-tab-${scen.id}`}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#1e222e] border-[#c89d56] text-[#ede6d6] shadow-[0_0_20px_rgba(200,157,86,0.2)]'
                    : 'bg-[#12141c] border-[#2c2925] text-[#b8ad96] hover:border-[#c89d56]/40'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {getCategoryIcon(scen.category)}
                  <span className="text-[10px] font-['Cinzel'] font-bold tracking-widest text-[#c89d56]">
                    {scen.category}
                  </span>
                </div>
                <h4 className="font-['Cinzel'] text-xs font-semibold text-[#ede6d6] truncate">
                  {scen.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#141620] border border-[#c89d56]/30 p-6 sm:p-8 shadow-2xl">
          {/* Situation Header */}
          <div className="pb-6 border-b border-[#2c2925] mb-6">
            <div className="flex items-center gap-2 text-xs font-bold font-['Cinzel'] text-[#c89d56] uppercase tracking-wider mb-2">
              {getCategoryIcon(activeScenario.category)}
              <span>{activeScenario.category} Scenario</span>
            </div>
            <h3 className="font-['Cinzel'] text-2xl font-bold text-[#ede6d6] mb-3">
              {activeScenario.title}
            </h3>
            <p className="text-sm text-[#ded0b4] leading-relaxed mb-4 font-['Plus_Jakarta_Sans'] font-light">
              {activeScenario.situation}
            </p>

            {/* Dilemma Callout */}
            <div className="p-4 rounded-lg bg-[#0e1017] border-l-2 border-[#c89d56] text-xs sm:text-sm text-[#ede6d6]">
              <strong className="text-[#c89d56] block mb-1 uppercase tracking-wider text-[11px] font-['Cinzel']">
                The Core Dilemma:
              </strong>
              {activeScenario.dilemma}
            </div>
          </div>

          {/* Epic Parallel */}
          <div className="p-3.5 rounded-lg bg-[#1a1d28] border border-[#c89d56]/20 mb-6 text-xs text-[#b8ad96]">
            <strong className="text-[#d4af37] font-['Cinzel'] block uppercase tracking-wider text-[10px] mb-0.5">
              Mahābhārata Strategic Connection:
            </strong>
            <span>{activeScenario.epicParallel}</span>
          </div>

          {/* Interactive Options */}
          <div className="space-y-3 mb-6">
            <span className="text-xs font-bold font-['Cinzel'] uppercase tracking-wider text-[#ede6d6] block">
              Choose an Approach to Test:
            </span>

            {activeScenario.options.map((option, idx) => {
              const isOptionSelected = selectedOptionIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedOptionIndex(idx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isOptionSelected
                      ? 'bg-[#1f2433] border-[#c89d56] shadow-[0_0_15px_rgba(200,157,86,0.2)]'
                      : 'bg-[#10121a] border-[#2c2925] hover:border-[#c89d56]/50'
                  }`}
                  id={`modern-option-${activeScenario.id}-${idx}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 border ${
                      isOptionSelected
                        ? 'bg-[#801e1e] border-[#c89d56] text-white'
                        : 'border-[#2c2925] text-[#b8ad96]'
                    }`}>
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#ede6d6] leading-relaxed">
                      {option.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Consequence & Strategic Lesson Output */}
          {selectedOptionIndex !== null && (
            <div className="p-5 rounded-xl bg-[#0e1017] border border-[#c89d56]/40 shadow-xl space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-bold font-['Cinzel'] text-[#c89d56] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                <span>Outcome Analysis</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#ded0b4]">
                <p>
                  <strong className="text-[#60a5fa]">Consequence & Trade-Off: </strong>
                  {activeScenario.options[selectedOptionIndex].consequence}
                </p>
                <p>
                  <strong className="text-[#c89d56]">Strategic Lesson: </strong>
                  {activeScenario.options[selectedOptionIndex].lesson}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
