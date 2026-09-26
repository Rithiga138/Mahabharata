export interface Character {
  id: string;
  name: string;
  sanskritName: string;
  role: string;
  focus: string;
  description: string;
  perspectiveIntro: string;
  quote: {
    sanskrit?: string;
    english: string;
    source: string;
  };
  symbolism: string;
  keyDilemma: string;
  strategicStrength: string;
  portraitPrompt: string;
  bgGradient: string;
}

export interface ParvaCard {
  id: string;
  title: string;
  sanskritTitle: string;
  subtitle: string;
  summary: string;
  extendedContext: string;
  sourceCiting: string;
  keyTakeaway: string;
}

export interface TimelineEvent {
  id: string;
  day: string;
  title: string;
  sanskritTitle?: string;
  shortDesc: string;
  detailedContext: string;
  strategicSignificance: string;
  ethicalTension: string;
}

export interface QuizChoice {
  id: string;
  label: string;
  summary: string;
  prioritizes: string;
  immediateEffect: string;
  strategicConsideration: string;
  ethicalConsideration: string;
  longTermConsequence: string;
  epicPrecedent: string;
  scores: {
    strategicThinking: number;
    riskAwareness: number;
    consequenceAwareness: number;
    responsibility: number;
    ethicalReflection: number;
  };
  aiCuratedInsight: {
    prioritization: string;
    strategicTradeOffs: string;
    ethicalDimensions: string;
    epicParallels: string;
  };
}

export interface QuizScenario {
  id: string;
  number: number;
  title: string;
  sanskritSubtitle: string;
  setting: string;
  openingNarrative: string;
  dilemma: string;
  question: string;
  choices: QuizChoice[];
}

export interface UserDecisionRecord {
  scenarioId: string;
  choiceId: string;
  scenarioTitle: string;
  choiceLabel: string;
  timestamp: number;
}

export interface StrategicScore {
  strategicThinking: number;
  riskAwareness: number;
  consequenceAwareness: number;
  responsibility: number;
  ethicalReflection: number;
}

export interface StrategicLesson {
  id: string;
  title: string;
  sanskritConcept: string;
  coreRule: string;
  mahabharataContext: string;
  strategicInterpretation: string;
  modernApplication: string;
}

export interface ModernScenario {
  id: string;
  category: 'COLLEGE' | 'CAREER' | 'LEADERSHIP' | 'EVERYDAY LIFE';
  title: string;
  situation: string;
  dilemma: string;
  epicParallel: string;
  options: {
    label: string;
    consequence: string;
    lesson: string;
  }[];
}

export interface SourceItem {
  title: string;
  authorOrEditor: string;
  publication?: string;
  year?: string;
  description: string;
  accessNote?: string;
}
