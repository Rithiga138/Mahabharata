import React, { useState, useEffect } from 'react';
import { QUIZ_SCENARIOS } from '../data/quizData';
import { QuizScenario, QuizChoice, StrategicScore, UserDecisionRecord } from '../types';
import { EPIC_IMAGES } from '../assets/images';
import {
  Compass,
  ArrowRight,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Brain,
  Shield,
  Scale,
  Clock,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface DecisionQuizProps {
  characterPerspectiveId: string;
  characterPerspectiveName: string;
  onQuizComplete: (scores: StrategicScore, records: UserDecisionRecord[]) => void;
}

export const DecisionQuiz: React.FC<DecisionQuizProps> = ({
  characterPerspectiveId,
  characterPerspectiveName,
  onQuizComplete,
}) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<QuizChoice | null>(null);
  const [decisionStage, setDecisionStage] = useState<'Dilemma' | 'Consequence'>('Dilemma');
  const [userDecisions, setUserDecisions] = useState<UserDecisionRecord[]>([]);

  // AI Feature state
  const [aiInsight, setAiInsight] = useState<{
    prioritization: string;
    strategicTradeOffs: string;
    ethicalDimensions: string;
    longTermConsequences: string;
    epicParallels: string;
    isAiGenerated: boolean;
    note?: string;
  } | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedDecisions = localStorage.getItem('mahabharata_decisions');
      if (savedDecisions) {
        setUserDecisions(JSON.parse(savedDecisions));
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }, []);

  const scenario = QUIZ_SCENARIOS[currentScenarioIndex] || QUIZ_SCENARIOS[0];

  const handleSelectChoice = (choice: QuizChoice) => {
    setSelectedChoice(choice);
    setDecisionStage('Consequence');
    setAiInsight(null);
    setAiError(null);

    const newRecord: UserDecisionRecord = {
      scenarioId: scenario.id,
      choiceId: choice.id,
      scenarioTitle: scenario.title,
      choiceLabel: choice.label,
      timestamp: Date.now(),
    };

    const updated = [
      ...userDecisions.filter((d) => d.scenarioId !== scenario.id),
      newRecord,
    ];
    setUserDecisions(updated);
    try {
      localStorage.setItem('mahabharata_decisions', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < QUIZ_SCENARIOS.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedChoice(null);
      setDecisionStage('Dilemma');
      setAiInsight(null);
      setAiError(null);
    } else {
      // Complete quiz and calculate score
      calculateAndFinish();
    }
  };

  const handleResetQuiz = () => {
    setCurrentScenarioIndex(0);
    setSelectedChoice(null);
    setDecisionStage('Dilemma');
    setUserDecisions([]);
    setAiInsight(null);
    setAiError(null);
    try {
      localStorage.removeItem('mahabharata_decisions');
    } catch (e) {
      console.warn('Could not reset localStorage', e);
    }
  };

  const calculateAndFinish = () => {
    // Calculate aggregate scores based on all choices
    let strategicThinkingSum = 0;
    let riskAwarenessSum = 0;
    let consequenceAwarenessSum = 0;
    let responsibilitySum = 0;
    let ethicalReflectionSum = 0;

    userDecisions.forEach((record) => {
      const scen = QUIZ_SCENARIOS.find((s) => s.id === record.scenarioId);
      const ch = scen?.choices.find((c) => c.id === record.choiceId);
      if (ch) {
        strategicThinkingSum += ch.scores.strategicThinking;
        riskAwarenessSum += ch.scores.riskAwareness;
        consequenceAwarenessSum += ch.scores.consequenceAwareness;
        responsibilitySum += ch.scores.responsibility;
        ethicalReflectionSum += ch.scores.ethicalReflection;
      }
    });

    const count = userDecisions.length || 1;
    const finalScores: StrategicScore = {
      strategicThinking: Math.round(strategicThinkingSum / count),
      riskAwareness: Math.round(riskAwarenessSum / count),
      consequenceAwareness: Math.round(consequenceAwarenessSum / count),
      responsibility: Math.round(responsibilitySum / count),
      ethicalReflection: Math.round(ethicalReflectionSum / count),
    };

    onQuizComplete(finalScores, userDecisions);
  };

  // Section 14: AI-Assisted Explanation
  const handleRequestAiInsight = async () => {
    if (!selectedChoice) return;
    setIsAiLoading(true);
    setAiError(null);

    const payload = {
      scenarioTitle: scenario.title,
      dilemma: scenario.dilemma,
      choiceLabel: selectedChoice.label,
      choiceSummary: selectedChoice.summary,
      characterPerspective: characterPerspectiveName,
      fallbackInsight: {
        prioritization: selectedChoice.aiCuratedInsight.prioritization,
        strategicTradeOffs: selectedChoice.aiCuratedInsight.strategicTradeOffs,
        ethicalDimensions: selectedChoice.aiCuratedInsight.ethicalDimensions,
        longTermConsequences: selectedChoice.longTermConsequence,
        epicParallels: selectedChoice.aiCuratedInsight.epicParallels,
        isAiGenerated: false,
      },
    };

    try {
      const response = await fetch('/api/explain-decision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('API server returned error status');
      }

      const data = await response.json();
      setAiInsight(data);
    } catch (err) {
      console.warn('Live API request failed, utilizing curated scholarly insight fallback:', err);
      // Fallback
      setAiInsight({
        prioritization: selectedChoice.aiCuratedInsight.prioritization,
        strategicTradeOffs: selectedChoice.aiCuratedInsight.strategicTradeOffs,
        ethicalDimensions: selectedChoice.aiCuratedInsight.ethicalDimensions,
        longTermConsequences: selectedChoice.longTermConsequence,
        epicParallels: selectedChoice.aiCuratedInsight.epicParallels,
        isAiGenerated: false,
        note: 'Curated scholarly insight based on BORI Critical Edition apparatus.',
      });
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <section id="decision-quiz" className="relative py-24 bg-[#0a0b0f] overflow-hidden">
      {/* Background Kurukshetra scene */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={EPIC_IMAGES.decisionScene}
          alt="Arjuna and Krishna on the battle chariot"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_25%] filter brightness-[0.62] contrast-[1.22] saturate-[1.10]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1017]/95 via-[#0a0b0f]/75 to-[#0e1017]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0f]/80 via-transparent to-[#0a0b0f]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header required by prompt */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c89d56]/40 bg-[#161822]/80 text-[11px] font-bold text-[#c89d56] tracking-[0.2em] uppercase mb-4 shadow-lg">
            <span>Primary Strategic Simulation</span>
          </div>

          <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.16em] text-[#ede6d6] uppercase mb-2">
            THE DECISION
          </h2>

          <p className="font-['Cinzel'] text-xl sm:text-2xl font-medium tracking-wide text-[#c89d56] mb-6">
            What would you do?
          </p>

          {/* Opening Narrative Quote verbatim from user prompt */}
          <div className="p-6 rounded-xl bg-[#141620]/90 border border-[#c89d56]/30 shadow-2xl backdrop-blur-md text-left">
            <blockquote className="space-y-1 font-['Cormorant_Garamond'] text-lg sm:text-xl text-[#f5ebd7] italic leading-relaxed">
              <p>Kurukshetra.</p>
              <p>The armies stand ready.</p>
              <p>You look across the battlefield and recognise people you know.</p>
              <p className="text-[#d4af37] font-semibold pt-1">
                The decision before you is no longer simply about winning or losing.
              </p>
            </blockquote>

            <div className="mt-4 pt-3 border-t border-[#2c2925] flex flex-wrap items-center justify-between text-xs text-[#b8ad96]">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#c89d56]" />
                <span>
                  Experiencing through: <strong className="text-[#ede6d6]">{characterPerspectiveName}</strong>
                </span>
              </div>
              <span className="text-[11px] text-[#96743c] italic">
                Interactive interpretation inspired by the Mahābhārata
              </span>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between text-xs text-[#b8ad96]">
          <span className="font-['Cinzel'] font-bold text-[#c89d56] tracking-wider uppercase">
            Scenario {currentScenarioIndex + 1} of {QUIZ_SCENARIOS.length}
          </span>
          <div className="flex items-center gap-2">
            {QUIZ_SCENARIOS.map((s, idx) => (
              <div
                key={s.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentScenarioIndex
                    ? 'w-8 bg-[#c89d56]'
                    : idx < currentScenarioIndex
                    ? 'w-5 bg-[#801e1e]'
                    : 'w-3 bg-[#2c2925]'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleResetQuiz}
            className="flex items-center gap-1 text-[11px] text-[#96743c] hover:text-[#ede6d6] transition-colors"
            title="Start over"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* Main Scenario Container: Left Scene / Right Dilemma & Choices */}
        <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-br from-[#161822] via-[#12141c] to-[#0a0b0f] border border-[#c89d56]/40 shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* LEFT SIDE: Situation & Scene Illustration/Atmosphere */}
            <div className="lg:col-span-5 bg-[#10121a] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#2c2925] flex flex-col justify-between relative overflow-hidden">
              {/* Subtle battlefield background tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#10121a] via-[#10121a]/80 to-transparent z-10" />
              <img
                src={EPIC_IMAGES.hero}
                alt="Battlefield setting"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-20"
              />

              <div className="relative z-20 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#c89d56]">
                  <span className="font-['Cinzel'] uppercase tracking-widest font-semibold">
                    Scene #{scenario.number}
                  </span>
                  <span className="font-['Cormorant_Garamond'] italic text-sm">
                    {scenario.sanskritSubtitle}
                  </span>
                </div>

                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#ede6d6] leading-tight">
                  {scenario.title}
                </h3>

                <div className="p-3 rounded bg-[#161924]/80 border border-[#c89d56]/20 text-xs text-[#c89d56] font-['Cinzel'] font-medium">
                  {scenario.setting}
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#ded0b4] leading-relaxed font-['Plus_Jakarta_Sans'] font-light">
                  <p>{scenario.openingNarrative}</p>
                </div>
              </div>

              {/* Sanskrit Context Badge */}
              <div className="relative z-20 pt-6 mt-6 border-t border-[#2c2925] text-[11px] text-[#96743c] flex items-center justify-between">
                <span>Critical Edition: Bhīṣma Parva</span>
                <span className="italic">Dharmayuddha Framework</span>
              </div>
            </div>

            {/* RIGHT SIDE: The Dilemma, Choices & Consequence Screen */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              {decisionStage === 'Dilemma' ? (
                /* Dilemma & Choices Stage */
                <div className="space-y-6">
                  {/* The Dilemma Box */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#141720] border-l-4 border-[#c89d56] border-y border-r border-[#2c2925]">
                    <span className="text-[10px] font-bold font-['Cinzel'] uppercase tracking-wider text-[#c89d56] block mb-1">
                      THE DILEMMA
                    </span>
                    <p className="text-sm sm:text-base text-[#ede6d6] leading-relaxed font-medium">
                      {scenario.dilemma}
                    </p>
                  </div>

                  {/* Prompt Question */}
                  <div>
                    <h4 className="font-['Cinzel'] text-lg font-bold text-[#f5ebd7] mb-4">
                      {scenario.question}
                    </h4>

                    {/* Choices Cards with Hover Glow & Subtle Movement */}
                    <div className="space-y-3.5">
                      {scenario.choices.map((choice, idx) => {
                        const letter = String.fromCharCode(65 + idx); // Choice A, B, C
                        return (
                          <div
                            key={choice.id}
                            onClick={() => handleSelectChoice(choice)}
                            id={`choice-card-${choice.id}`}
                            className="group cursor-pointer p-4 sm:p-5 rounded-xl bg-[#13151f] hover:bg-[#1a1d29] border border-[#2c2925] hover:border-[#c89d56] transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,157,86,0.18)] hover:-translate-y-0.5"
                          >
                            <div className="flex items-start gap-3 sm:gap-4">
                              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1e222e] border border-[#c89d56]/40 group-hover:border-[#c89d56] group-hover:bg-[#801e1e] flex items-center justify-center font-['Cinzel'] text-xs font-bold text-[#ede6d6] shrink-0 transition-colors">
                                {letter}
                              </span>
                              <div className="space-y-1">
                                <h5 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#ede6d6] group-hover:text-[#f7f4ed]">
                                  {choice.label}
                                </h5>
                                <p className="text-xs sm:text-sm text-[#b8ad96] leading-relaxed">
                                  {choice.summary}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                /* Consequence Screen (Stage 2) */
                selectedChoice && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    {/* Header: YOUR CHOICE → WHAT DOES THIS CHOICE MEAN? */}
                    <div className="pb-4 border-b border-[#2c2925]">
                      <span className="text-[10px] font-['Cinzel'] font-bold text-[#c89d56] uppercase tracking-widest block mb-1">
                        YOUR CHOICE:
                      </span>
                      <h4 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#ede6d6] mb-1">
                        "{selectedChoice.label}"
                      </h4>
                      <h5 className="font-['Cinzel'] text-sm font-semibold text-[#c89d56] uppercase tracking-wider">
                        WHAT DOES THIS CHOICE MEAN?
                      </h5>
                    </div>

                    {/* Consequence Dimensions Grid required by prompt */}
                    <div className="space-y-3.5 text-xs sm:text-sm">
                      {/* 1. IMMEDIATE EFFECT */}
                      <div className="p-3.5 rounded-lg bg-[#141720] border-l-2 border-[#c89d56] border-y border-r border-[#2c2925]">
                        <span className="text-[10px] font-bold font-['Cinzel'] text-[#c89d56] uppercase tracking-wider block mb-1">
                          IMMEDIATE EFFECT
                        </span>
                        <p className="text-[#ede6d6] font-medium leading-relaxed">
                          This choice prioritises: {selectedChoice.prioritizes}
                        </p>
                        <p className="text-[#b8ad96] mt-1">{selectedChoice.immediateEffect}</p>
                      </div>

                      {/* 2. STRATEGIC CONSIDERATION */}
                      <div className="p-3.5 rounded-lg bg-[#141720] border-l-2 border-[#60a5fa] border-y border-r border-[#2c2925]">
                        <span className="text-[10px] font-bold font-['Cinzel'] text-[#60a5fa] uppercase tracking-wider block mb-1">
                          STRATEGIC CONSIDERATION
                        </span>
                        <p className="text-[#b8ad96] leading-relaxed">
                          {selectedChoice.strategicConsideration}
                        </p>
                      </div>

                      {/* 3. ETHICAL CONSIDERATION */}
                      <div className="p-3.5 rounded-lg bg-[#141720] border-l-2 border-[#d97736] border-y border-r border-[#2c2925]">
                        <span className="text-[10px] font-bold font-['Cinzel'] text-[#d97736] uppercase tracking-wider block mb-1">
                          ETHICAL CONSIDERATION
                        </span>
                        <p className="text-[#b8ad96] leading-relaxed">
                          {selectedChoice.ethicalConsideration}
                        </p>
                      </div>

                      {/* 4. LONG-TERM CONSEQUENCE */}
                      <div className="p-3.5 rounded-lg bg-[#141720] border-l-2 border-[#801e1e] border-y border-r border-[#2c2925]">
                        <span className="text-[10px] font-bold font-['Cinzel'] text-[#ef4444] uppercase tracking-wider block mb-1">
                          LONG-TERM CONSEQUENCE
                        </span>
                        <p className="text-[#b8ad96] leading-relaxed">
                          {selectedChoice.longTermConsequence}
                        </p>
                      </div>
                    </div>

                    {/* Epic Precedent */}
                    <div className="p-3 rounded bg-[#10121a] border border-[#2c2925] text-xs text-[#96743c]">
                      <strong className="text-[#c89d56] font-['Cinzel'] uppercase tracking-wider text-[10px] block mb-0.5">
                        Epic Precedent:
                      </strong>
                      <span>{selectedChoice.epicPrecedent}</span>
                    </div>

                    {/* Section 14: AI Explanation Feature */}
                    <div className="pt-2">
                      {!aiInsight ? (
                        <div className="p-4 rounded-xl bg-[#161924] border border-[#c89d56]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                          <div>
                            <span className="text-xs font-bold font-['Cinzel'] text-[#ede6d6] block">
                              Academic Decision Analysis
                            </span>
                            <span className="text-[11px] text-[#b8ad96]">
                              Request an AI-assisted analytical breakdown of trade-offs and classical Indian governance principles.
                            </span>
                          </div>
                          <button
                            onClick={handleRequestAiInsight}
                            disabled={isAiLoading}
                            id="explain-my-decision-btn"
                            className="px-4 py-2 rounded-md bg-[#1f2433] hover:bg-[#282f42] border border-[#c89d56]/50 text-xs font-bold font-['Cinzel'] text-[#d4af37] tracking-wider uppercase transition-all flex items-center gap-1.5 shrink-0"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                            <span>{isAiLoading ? 'Analyzing...' : 'Explain My Decision'}</span>
                          </button>
                        </div>
                      ) : (
                        <div className="p-4 sm:p-5 rounded-xl bg-[#141722] border border-[#c89d56]/40 shadow-xl space-y-3 animate-in fade-in">
                          <div className="flex items-center justify-between pb-2 border-b border-[#2c2925]">
                            <div className="flex items-center gap-2">
                              <Brain className="w-4 h-4 text-[#c89d56]" />
                              <span className="font-['Cinzel'] text-xs font-bold text-[#ede6d6] tracking-wider uppercase">
                                AI-Assisted Explanation
                              </span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e222e] text-[#c89d56] border border-[#c89d56]/20">
                              {aiInsight.isAiGenerated ? 'Live Gemini Model' : 'Curated Scholarly Analysis'}
                            </span>
                          </div>

                          <div className="space-y-2 text-xs text-[#ded0b4] font-['Plus_Jakarta_Sans'] leading-relaxed">
                            <p>
                              <strong className="text-[#c89d56]">Prioritization: </strong>
                              {aiInsight.prioritization}
                            </p>
                            <p>
                              <strong className="text-[#60a5fa]">Strategic Trade-Offs: </strong>
                              {aiInsight.strategicTradeOffs}
                            </p>
                            <p>
                              <strong className="text-[#d97736]">Ethical Dimensions: </strong>
                              {aiInsight.ethicalDimensions}
                            </p>
                            <p>
                              <strong className="text-[#c89d56]">Epic Parallels: </strong>
                              {aiInsight.epicParallels}
                            </p>
                          </div>

                          <span className="text-[10px] text-[#96743c] block italic pt-1 border-t border-[#2c2925]">
                            Rooted in Critical Edition text. Does not invent verses or historical events.
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Navigation to Next Scenario / View Profile */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#2c2925]">
                      <button
                        onClick={() => setDecisionStage('Dilemma')}
                        className="text-xs text-[#96743c] hover:text-[#ede6d6] transition-colors underline"
                      >
                        ← Reconsider Choice
                      </button>

                      <button
                        onClick={handleNextScenario}
                        id="next-scenario-btn"
                        className="px-6 py-3 rounded-md bg-[#801e1e] hover:bg-[#962525] border border-[#c89d56]/50 text-white font-['Cinzel'] text-xs font-bold tracking-widest uppercase transition-all shadow-lg flex items-center gap-2"
                      >
                        <span>
                          {currentScenarioIndex < QUIZ_SCENARIOS.length - 1
                            ? 'Next Scenario'
                            : 'View Strategic Profile'}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
