import React, { useState } from 'react';
import { STRATEGIC_LESSONS } from '../data/parvaData';
import { StrategicLesson } from '../types';
import { Sparkles, Compass, Eye, Shield, Scale, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export const StrategicLessonsSection: React.FC = () => {
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(STRATEGIC_LESSONS[0].id);

  const getLessonIcon = (id: string) => {
    switch (id) {
      case 'think-beyond':
        return <Eye className="w-5 h-5 text-[#c89d56]" />;
      case 'balance-priorities':
        return <Scale className="w-5 h-5 text-[#60a5fa]" />;
      case 'decide-uncertainty':
        return <Compass className="w-5 h-5 text-[#d97736]" />;
      case 'reflect-before-acting':
        return <Shield className="w-5 h-5 text-[#801e1e]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c89d56]" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedLessonId(expandedLessonId === id ? null : id);
  };

  return (
    <section id="strategic-lessons" className="py-24 bg-[#0a0b0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header required by prompt */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#c89d56]/30 bg-[#161822] text-[11px] font-bold text-[#c89d56] tracking-[0.2em] uppercase mb-4">
            <span>Timeless Decision Frameworks</span>
          </div>

          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.16em] text-[#ede6d6] uppercase mb-3">
            STRATEGIC LESSONS
          </h2>

          <p className="font-['Cinzel'] text-lg sm:text-2xl font-medium tracking-wide text-[#c89d56] mb-4">
            What did the epic teach us?
          </p>

          <p className="text-xs sm:text-sm text-[#b8ad96] font-['Plus_Jakarta_Sans'] font-light">
            Synthesizing ancient epic warfare and moral philosophy into enduring principles for contemporary governance, strategic decision-making, and ethical leadership.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {STRATEGIC_LESSONS.map((lesson) => {
            const isExpanded = expandedLessonId === lesson.id;
            return (
              <div
                key={lesson.id}
                className={`rounded-xl bg-[#141620] border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#c89d56] shadow-[0_0_30px_rgba(200,157,86,0.18)]'
                    : 'border-[#2c2925] hover:border-[#c89d56]/50'
                }`}
                id={`lesson-card-${lesson.id}`}
              >
                <div className="p-6">
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#1f2433] border border-[#c89d56]/30 flex items-center justify-center shrink-0">
                        {getLessonIcon(lesson.id)}
                      </div>
                      <div>
                        <span className="text-[11px] font-['Cormorant_Garamond'] text-[#c89d56] italic">
                          {lesson.sanskritConcept}
                        </span>
                        <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#ede6d6]">
                          {lesson.title}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(lesson.id)}
                      className="p-1 rounded text-[#b8ad96] hover:text-[#ede6d6] transition-colors"
                      aria-label={isExpanded ? 'Collapse lesson' : 'Expand lesson'}
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-[#c89d56]" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  <p className="text-xs font-semibold text-[#c89d56] uppercase tracking-wider mb-3">
                    {lesson.coreRule}
                  </p>

                  <p className="text-xs sm:text-sm text-[#b8ad96] leading-relaxed mb-4">
                    {lesson.mahabharataContext.slice(0, 160)}...
                  </p>

                  {/* Expandable Deep Dive Sections */}
                  {isExpanded && (
                    <div className="space-y-4 pt-4 border-t border-[#2c2925] animate-in fade-in duration-200">
                      {/* 1. Mahābhārata Context */}
                      <div className="p-3.5 rounded-lg bg-[#0e1017] border-l-2 border-[#c89d56]">
                        <span className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider text-[#c89d56] block mb-1">
                          Mahābhārata Context
                        </span>
                        <p className="text-xs sm:text-sm text-[#ded0b4] leading-relaxed font-['Plus_Jakarta_Sans'] font-light">
                          {lesson.mahabharataContext}
                        </p>
                      </div>

                      {/* 2. Strategic Interpretation */}
                      <div className="p-3.5 rounded-lg bg-[#0e1017] border-l-2 border-[#60a5fa]">
                        <span className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider text-[#60a5fa] block mb-1">
                          Strategic Interpretation
                        </span>
                        <p className="text-xs sm:text-sm text-[#ded0b4] leading-relaxed font-['Plus_Jakarta_Sans'] font-light">
                          {lesson.strategicInterpretation}
                        </p>
                      </div>

                      {/* 3. Modern Application */}
                      <div className="p-3.5 rounded-lg bg-[#0e1017] border-l-2 border-[#4ade80]">
                        <span className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-wider text-[#4ade80] block mb-1">
                          Modern Application (Leadership, Business, Everyday Decisions)
                        </span>
                        <p className="text-xs sm:text-sm text-[#ded0b4] leading-relaxed font-['Plus_Jakarta_Sans'] font-light">
                          {lesson.modernApplication}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Toggle Button */}
                <div
                  onClick={() => toggleExpand(lesson.id)}
                  className="px-6 py-3 bg-[#11131c] border-t border-[#2c2925] flex items-center justify-between text-xs text-[#c89d56] cursor-pointer hover:bg-[#181b26] transition-colors"
                >
                  <span className="font-medium">
                    {isExpanded ? 'Collapse Analysis' : 'Expand Context & Modern Applications'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
