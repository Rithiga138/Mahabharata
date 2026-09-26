import { ModernScenario } from '../types';

export const MODERN_SCENARIOS: ModernScenario[] = [
  {
    id: 'modern-college',
    category: 'COLLEGE',
    title: 'The Absent Teammate on Deadline Eve',
    situation: 'Your university capstone project is due tomorrow at 9:00 AM. One teammate has gone completely unresponsive for 48 hours and failed to deliver their critical data analysis section. If submitted as-is, the whole group receives a failing grade.',
    dilemma: 'Do you complete their portion overnight and remove their name from the submission (severe academic penalty for them), cover for them by doing their work and keeping their name to preserve friendship, or confront the course professor now to request an emergency individual assessment?',
    epicParallel: 'Bhīṣma’s dilemma of loyalty vs. justice: protecting a companion out of sentimental loyalty vs. upholding institutional fairness and collective duty.',
    options: [
      {
        label: 'Work overnight, finish it, and remove their name from the credit list.',
        consequence: 'Prioritizes fairness and systemic accountability. Protects group grade, but permanently fractures the interpersonal relationship without hearing their circumstances.',
        lesson: 'Direct accountability prevents free-riding, but requires transparent communication rather than unilateral retributive action.'
      },
      {
        label: 'Do their work silently and leave their name on the paper to keep peace.',
        consequence: 'Prioritizes short-term harmony, but enables systemic irresponsibility and builds deep internal resentment within the team.',
        lesson: 'Covering for negligence out of aversion to conflict is false kindness that encourages repeat failures.'
      },
      {
        label: 'Complete an emergency bridge version, submit with an honest time-log, and request faculty mediation.',
        consequence: 'Separates operational delivery from ethical adjudication. Protects the project grade while ensuring an impartial third-party evaluates contribution fairly.',
        lesson: 'Like Yudhiṣṭhira consulting elders: address operational crises first, and handle moral accountability with objective evidence and institutional mediation.'
      }
    ]
  },
  {
    id: 'modern-career',
    category: 'CAREER',
    title: 'Quick Patch vs. Structural Refactoring',
    situation: 'You are the lead engineer on a flagship software release. A major security edge-case is discovered 48 hours before investor demo day. A hacky 10-line patch will mask the symptom for the demo, but introduces architectural debt that could cause data corruption in six months.',
    dilemma: 'Apply the temporary band-aid to impress stakeholders and preserve quarterly bonuses, or delay the release by two weeks to re-architect the foundation properly, facing angry executives?',
    epicParallel: 'Arjuna’s choice of short-term emotional comfort vs. long-term systemic stability. Krishna’s insistence on addressing the root structural cause rather than superficial appeasement.',
    options: [
      {
        label: 'Deploy the quick patch now; promise to fix it in the next sprint cycle.',
        consequence: 'Guarantees immediate investor acclaim, but history shows tech debt is rarely repaid once deadlines pass. The risk of catastrophic data loss accumulates silently.',
        lesson: 'Prioritizing immediate perception over fundamental integrity is the corporate analogue to Duryodhana’s short-sighted gambits.'
      },
      {
        label: 'Halt the release, document the vulnerability clearly, and present a two-week mitigation plan.',
        consequence: 'Causes immediate friction and disappointment with management, but establishes unassailable long-term trust, system resilience, and professional ethics.',
        lesson: 'True strategy (Nīti) endures short-term friction to safeguard systemic longevity.'
      },
      {
        label: 'Ship the demo version with restricted feature flags that isolate the vulnerable module safely.',
        consequence: 'A balanced strategic compromise: demonstrates progress to investors while strictly cordoning off unverified code from live production data.',
        lesson: 'Adaptive tactical flexibility: achieving core business validation without compromising non-negotiable safety standards.'
      }
    ]
  },
  {
    id: 'modern-leadership',
    category: 'LEADERSHIP',
    title: 'Irreconcilable Division Between Key Co-Founders',
    situation: 'Your two senior co-founders are locked in bitter conflict over product direction: Founder A wants enterprise monetization immediately; Founder B wants to remain open-source to build community trust. The company is running low on runway and the debate is paralyzing the entire company.',
    dilemma: 'As CEO, forcing a compromise satisfies neither and slows execution; siding with one alienates the other and threatens their departure; continuing endless debate burns through the remaining capital.',
    epicParallel: 'The assembly in Hastinapura where leaders vacillated between Duryodhana and Yudhiṣṭhira, failing to establish clear, unified sovereign direction.',
    options: [
      {
        label: 'Unilaterally choose one direction based on core runway data; accept the departure of the opposing founder.',
        consequence: 'Restores rapid execution and operational clarity, though at the significant cost of institutional knowledge and founding camaraderie.',
        lesson: 'Executive courage requires making definitive calls when paralysis threatens collective survival.'
      },
      {
        label: 'Compromise by doing both simultaneously with divided engineering teams.',
        consequence: 'Appeases both founders superficially, but dilutes limited resources across two fronts, ensuring neither succeeds before funds expire.',
        lesson: 'A half-hearted compromise born of fear of confrontation is often more lethal than a flawed, fully committed strategy.'
      },
      {
        label: 'Stage a time-boxed sprint with pre-agreed empirical metrics: test enterprise interest for 30 days while keeping open-source core intact.',
        consequence: 'Replaces ideological debate with objective empirical evidence, aligning both founders around customer truth rather than ego.',
        lesson: 'Like Krishna reframing the debate from subjective emotion to objective universal principles.'
      }
    ]
  },
  {
    id: 'modern-everyday',
    category: 'EVERYDAY LIFE',
    title: 'Avoiding the Uncomfortable Truth',
    situation: 'A close lifelong friend is investing their life savings and asking others to join a high-risk financial venture that you recognize as an unsustainable pyramid scheme. Calling it out publicly or privately will cause severe offense and likely end the friendship.',
    dilemma: 'Stay silent and respect their autonomy while watching them risk financial ruin, or speak the uncomfortable truth directly, knowing they may interpret your concern as jealousy or hostility?',
    epicParallel: 'Vidura warning King Dhṛtarāṣṭra before the fateful game of dice: speaking unpalatable truth (Priya-satya) to save someone from catastrophic folly.',
    options: [
      {
        label: 'Remain silent; let them learn from their own experience without risking your friendship.',
        consequence: 'Preserves the relationship today, but when the collapse arrives, you will bear silent guilt knowing you could have intervened.',
        lesson: 'Silence in the presence of preventable catastrophe is not neutrality; it is moral abdication.'
      },
      {
        label: 'Arrange a private, compassionate intervention with documented financial analysis.',
        consequence: 'Triggers defensive emotional reaction initially, but acts from genuine care. Truth delivered with empathy stands the test of time.',
        lesson: 'As the classical saying teaches: "Speak the truth that is beneficial, even if bitter; that is true friendship."'
      },
      {
        label: 'Subtly introduce third-party objective educational articles without accusing them directly.',
        consequence: 'A gentle, indirect educational approach that allows the friend to save face and discover the danger independently.',
        lesson: 'Strategic empathy: enabling the other person to arrive at wisdom through guided reflection rather than humiliation.'
      }
    ]
  }
];
