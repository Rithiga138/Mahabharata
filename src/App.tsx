import React, { useState, useEffect } from 'react';
import { AtmosphereBackground } from './components/AtmosphereBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BhismaParvaSection } from './components/BhismaParvaSection';
import { TimelineSection } from './components/TimelineSection';
import { CharactersSection } from './components/CharactersSection';
import { DecisionQuiz } from './components/DecisionQuiz';
import { StrategicProfile } from './components/StrategicProfile';
import { StrategicLessonsSection } from './components/StrategicLessonsSection';
import { ModernScenariosSection } from './components/ModernScenariosSection';
import { ResearchSection } from './components/ResearchSection';
import { SourcesSection } from './components/SourcesSection';
import { CharacterPopHerald } from './components/CharacterPopHerald';
import { CHARACTERS } from './data/charactersData';
import { Character, StrategicScore, UserDecisionRecord } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>('arjuna');
  const [poppedCharacter, setPoppedCharacter] = useState<Character | null>(null);
  const [quizScores, setQuizScores] = useState<StrategicScore | null>(null);
  const [quizRecords, setQuizRecords] = useState<UserDecisionRecord[]>([]);

  // Load persisted perspective and score
  useEffect(() => {
    try {
      const savedPerspective = localStorage.getItem('mahabharata_perspective');
      if (savedPerspective) {
        setSelectedCharacterId(savedPerspective);
      }

      const savedDecisions = localStorage.getItem('mahabharata_decisions');
      if (savedDecisions) {
        const records: UserDecisionRecord[] = JSON.parse(savedDecisions);
        setQuizRecords(records);
        // If all 3 scenarios were done, calculate score
        if (records.length >= 3) {
          // Calculate default initial scores
          setQuizScores({
            strategicThinking: 88,
            riskAwareness: 82,
            consequenceAwareness: 90,
            responsibility: 85,
            ethicalReflection: 92,
          });
        }
      }
    } catch (e) {
      console.warn('Could not read saved progress', e);
    }
  }, []);

  const handleSelectPerspective = (characterId: string, shouldPop: boolean = true) => {
    setSelectedCharacterId(characterId);
    try {
      localStorage.setItem('mahabharata_perspective', characterId);
    } catch (e) {
      console.warn('Could not save perspective to localStorage', e);
    }
    if (shouldPop) {
      const char = CHARACTERS.find((c) => c.id === characterId) || CHARACTERS[0];
      setPoppedCharacter(char);
    }
  };

  const handleTriggerCharacterPop = (char: Character) => {
    setPoppedCharacter(char);
  };

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuizComplete = (scores: StrategicScore, records: UserDecisionRecord[]) => {
    setQuizScores(scores);
    setQuizRecords(records);
    // Smooth scroll down to the generated strategic profile
    setTimeout(() => {
      const profileEl = document.getElementById('strategic-profile');
      if (profileEl) {
        profileEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleRetakeQuiz = () => {
    setQuizScores(null);
    setQuizRecords([]);
    try {
      localStorage.removeItem('mahabharata_decisions');
    } catch (e) {
      console.warn('Could not clear localStorage', e);
    }
    handleScrollToSection('decision-quiz');
  };

  const selectedChar =
    CHARACTERS.find((c) => c.id === selectedCharacterId) || CHARACTERS[0];

  return (
    <div className="relative min-h-screen bg-[#0b0c10] text-[#ede6d6] selection:bg-[#801e1e] selection:text-[#fbf7ee] font-['Plus_Jakarta_Sans']">
      {/* Ambient background particles, dynamic arrows & Kurukshetra war horizon */}
      <AtmosphereBackground />

      {/* Floating Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleScrollToSection}
        selectedCharacterName={selectedChar.name}
        onPopCurrentCharacter={() => setPoppedCharacter(selectedChar)}
      />

      {/* Dramatic Character Arms & Herald Pop-up Modal */}
      <CharacterPopHerald
        character={poppedCharacter}
        onClose={() => setPoppedCharacter(null)}
        onProceedToDilemma={() => handleScrollToSection('decision-quiz')}
      />

      <main className="relative z-10">
        {/* 1. Full-screen Cinematic Hero */}
        <Hero
          onEnterEpic={() => handleScrollToSection('bhisma-parva')}
          onExploreParva={() => handleScrollToSection('bhisma-parva')}
          onSelectCharacter={(charId) => handleSelectPerspective(charId, true)}
          selectedCharacterId={selectedCharacterId}
        />

        {/* 2. Bhīṣma Parva Main Section */}
        <BhismaParvaSection
          onProceedToTimeline={() => handleScrollToSection('timeline')}
          onProceedToCharacters={() => handleScrollToSection('characters')}
        />

        {/* 3. 10-Day Timeline Section */}
        <TimelineSection />

        {/* 4. Meet the Characters & Perspective Selection with Dramatic Pops */}
        <CharactersSection
          selectedCharacterId={selectedCharacterId}
          onSelectPerspective={handleSelectPerspective}
          onProceedToQuiz={() => handleScrollToSection('decision-quiz')}
          onTriggerCharacterPop={handleTriggerCharacterPop}
        />

        {/* 5. Centerpiece: The Decision Quiz */}
        <DecisionQuiz
          characterPerspectiveId={selectedCharacterId}
          characterPerspectiveName={selectedChar.name}
          onQuizComplete={handleQuizComplete}
        />

        {/* 6. Strategic Profile (Displayed when completed) */}
        {quizScores && (
          <StrategicProfile
            scores={quizScores}
            decisionRecords={quizRecords}
            characterPerspectiveName={selectedChar.name}
            onRetakeQuiz={handleRetakeQuiz}
            onExploreLessons={() => handleScrollToSection('strategic-lessons')}
          />
        )}

        {/* 7. Strategic Lessons */}
        <StrategicLessonsSection />

        {/* 8. Connecting Epic to Modern Life (College, Career, Leadership, Everyday Life) */}
        <ModernScenariosSection />

        {/* 9. Pedagogical Research Pillars */}
        <ResearchSection />

        {/* 10. Scholarly Sources & References */}
        <SourcesSection />
      </main>
    </div>
  );
}
