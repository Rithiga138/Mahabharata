import { QuizScenario } from '../types';

export const QUIZ_SCENARIOS: QuizScenario[] = [
  {
    id: 'scenario-1',
    number: 1,
    title: 'The Paralyzing Divide',
    sanskritSubtitle: 'सेनयोरुभयोर्मध्ये (Between the Two Armies)',
    setting: 'Kurukshetra, Day 1, Dawn. The war conches have sounded. The chariot of white horses stands stationary in the neutral zone between two million armed warriors.',
    openingNarrative: 'The dust rises into the morning sun. You stand in the chariot between the vast arrays of Hastinapura and the Pandavas. You look across the field and recognize the faces of your childhood: Bhīṣma who raised you, Droṇa who taught you the bow, your cousins, and beloved nephews. Your hands tremble, your bow slips, and your heart recoils. Winning the war will leave you king of a graveyard.',
    dilemma: 'Walking away preserves your moral purity and spares the lives of those you love, but abandons millions of allies who pledged their lives to your banner and surrenders society to unchecked adharma. Fighting upholds your sovereign responsibility, but stains your soul with the blood of kin.',
    question: 'In this moment of profound moral fracture, what would you prioritise?',
    choices: [
      {
        id: 's1-c1',
        label: 'Step away from the conflict',
        summary: 'Withdraw from armed battle to preserve sacred familial bonds and avert immediate fratricidal slaughter.',
        prioritizes: 'Personal moral sanctity, non-violence (ahiṁsā), and immediate preservation of kinship over institutional warrior duty.',
        immediateEffect: 'Halts your personal contribution to the impending bloodshed and maintains emotional integrity, avoiding the guilt of kin-slaying.',
        strategicConsideration: 'Severely demoralizes your allied coalition, leaves vulnerable allies exposed to destruction, and emboldens the aggressor with unearned victory.',
        ethicalConsideration: 'Prioritizes deontology (the inherent evil of killing family) over consequentialist justice (preventing the systemic triumph of tyranny).',
        longTermConsequence: 'Absolves you of direct violence, but institutionalizes the precedent that lawlessness triumphs whenever righteous actors shrink from conflict.',
        epicPrecedent: 'Arjuna’s initial stance in Gītā Chapter 1: "Better to live on alms in this world than to eat food stained with the blood of revered teachers."',
        scores: {
          strategicThinking: 45,
          riskAwareness: 60,
          consequenceAwareness: 55,
          responsibility: 40,
          ethicalReflection: 95
        },
        aiCuratedInsight: {
          prioritization: 'This decision places individual ethical conscience and kinship preservation above societal governance oaths.',
          strategicTradeOffs: 'By withdrawing, you avoid personal complicity in violence, but you transfer the catastrophic risk entirely onto your allies.',
          ethicalDimensions: 'A classic tension between duty of care to family versus universal civic responsibility (Kula-dharma vs. Kṣātra-dharma).',
          epicParallels: 'Mirrors Arjuna’s Viṣāda (grief-paralysis), which Krishna systematically deconstructs by showing that non-action is itself an action with severe moral fallout.'
        }
      },
      {
        id: 's1-c2',
        label: 'Fulfil your responsibility despite the personal cost',
        summary: 'Engage in battle with psychological detachment (Nishkāma Karma), viewing action as a painful duty for collective justice.',
        prioritizes: 'Systemic duty (Svadharma), societal justice (Loka-saṅgraha), and fidelity to the alliance above personal emotional anguish.',
        immediateEffect: 'Restores command decisiveness, fortifies allied morale, and commences the defense of legitimate sovereignty.',
        strategicConsideration: 'Accepts enormous immediate casualties and personal emotional trauma to prevent permanent systemic tyranny.',
        ethicalConsideration: 'Prioritizes systemic consequence and warrior oath over personal emotional attachment, accepting moral tragedy as part of leadership.',
        longTermConsequence: 'Restores the political balance and checks injustice, but requires living with the lifelong grief of catastrophic familial loss.',
        epicPrecedent: 'Krishna’s core admonition: "Fix your mind on duty alone; do not let your attachment be to inaction. Arise, Arjuna, resolved to battle."',
        scores: {
          strategicThinking: 95,
          riskAwareness: 85,
          consequenceAwareness: 90,
          responsibility: 95,
          ethicalReflection: 85
        },
        aiCuratedInsight: {
          prioritization: 'This decision aligns directly with Krishna’s philosophy in the Bhagavad Gītā: action rooted in moral responsibility rather than personal ego or gain.',
          strategicTradeOffs: 'Sacrifices personal emotional comfort and accepts acute short-term grief to ensure long-term societal resilience.',
          ethicalDimensions: 'Illustrates Nishkāma Karma—fulfilling essential governance roles while relinquishing the fantasy of a clean, painless outcome.',
          epicParallels: 'Matches Arjuna’s ultimate resolution at the close of the Gītā (18.73): "Destroyed is my delusion; I stand firm with doubts dispelled; I shall act according to your word."'
        }
      },
      {
        id: 's1-c3',
        label: 'Seek another course before acting',
        summary: 'Call an emergency unilateral halt between the lines to propose one final conditional partition or supreme arbitration.',
        prioritizes: 'Diplomatic exhaustion, risk mitigation, and exploring every conceivable alternative before authorizing irreversible violence.',
        immediateEffect: 'Creates a temporary operational ceasefire and signals supreme moral restraint to both armies and history.',
        strategicConsideration: 'Risks tactical vulnerability if the opponent interprets the pause as hesitation and launches a preemptive strike; prior peace missions already failed.',
        ethicalConsideration: 'Ensures that when violent action is ultimately taken, no observer or conscience can claim peaceful alternatives were left unexplored.',
        longTermConsequence: 'Provides total moral legitimacy to future military action, even if the final diplomatic gambit is inevitably rejected by Duryodhana.',
        epicPrecedent: 'Parallels Krishna’s own final peace mission to Hastinapura (Udyoga Parva) and Yudhiṣṭhira’s barefoot approach on Day 1.',
        scores: {
          strategicThinking: 80,
          riskAwareness: 90,
          consequenceAwareness: 85,
          responsibility: 80,
          ethicalReflection: 90
        },
        aiCuratedInsight: {
          prioritization: 'This decision prioritizes procedural exhaustiveness and moral legitimacy over immediate military momentum.',
          strategicTradeOffs: 'You gain unassailable ethical high ground, but you risk tactical momentum and surrender operational initiative to a ruthless rival.',
          ethicalDimensions: 'Emphasizes that legitimate violence (Dharmayuddha) must be strictly a measure of last resort after all alternatives are visibly demonstrated to fail.',
          epicParallels: 'Reflects Yudhiṣṭhira’s persistent willingness to seek reconciliation, even when facing an opponent who swore never to yield a needlepoint of earth.'
        }
      }
    ]
  },
  {
    id: 'scenario-2',
    number: 2,
    title: 'The Invincible Patriarch',
    sanskritSubtitle: 'भीष्मसमर एवं शिखण्डी (The Dilemma of Day 10)',
    setting: 'Kurukshetra, Day 9 Night into Day 10. The grand patriarch Bhīṣma is decimating the Pandava forces. Conventional tactics cannot breach his archery.',
    openingNarrative: 'Nine days of relentless warfare have passed. Bhīṣma moves across the battlefield like a forest fire, consuming whole divisions. The allied soldiers refuse to face him. Your strategists assemble in the night tent: Bhīṣma possesses the boon of choosing his own moment of death. He will never yield in straight combat. However, he has made a lifelong vow: he will never loose an arrow against Śikhaṇḍī (who was born female). Using Śikhaṇḍī as a human shield can neutralize Bhīṣma’s bow, allowing you to strike him down.',
    dilemma: 'Exploiting Bhīṣma’s sacred personal vow through Śikhaṇḍī feels asymmetric, unchivalrous, and agonizing against a revered elder. Yet refusing the stratagem guarantees the total annihilation of your army within days.',
    question: 'How would you handle the operational stalemate against Commander Bhīṣma?',
    choices: [
      {
        id: 's2-c1',
        label: 'Deploy the asymmetric stratagem (Śikhaṇḍī shield)',
        summary: 'Place Śikhaṇḍī at the vanguard of the chariot to neutralize Bhīṣma’s offensive and bring down the Kaurava commander.',
        prioritizes: 'Operational survival, asymmetric tactical efficacy, and the overarching objective of victory over conventional duel chivalry.',
        immediateEffect: 'Neutralizes Bhīṣma’s defensive volley immediately; Bhīṣma lowers his bow, permitting the fatal volley of arrows.',
        strategicConsideration: 'Decisively removes the greatest military threat to your survival, turning the strategic tide of the war.',
        ethicalConsideration: 'Bears the heavy moral taint of exploiting an elder’s chivalric restraint to defeat him, bending the heroic code.',
        longTermConsequence: 'Establishes that in existential survival, rigid adherence to chivalric forms must yield to systemic victory, setting a precedent of pragmatic warfare.',
        epicPrecedent: 'The historical action on Day 10: Arjuna stations his chariot directly behind Śikhaṇḍī, piercing Bhīṣma until he falls upon a bed of arrows.',
        scores: {
          strategicThinking: 95,
          riskAwareness: 80,
          consequenceAwareness: 90,
          responsibility: 90,
          ethicalReflection: 70
        },
        aiCuratedInsight: {
          prioritization: 'Prioritizes mission survival and strategic outcome over aesthetic adherence to conventional rules of dueling.',
          strategicTradeOffs: 'Secures battlefield survival and breaks an unbreakable stalemate, at the expense of pure chivalric reputation.',
          ethicalDimensions: 'Explores the boundary of ethical realism: when facing an adversary who shields systemic evil behind personal honor, how far may one go to neutralize him?',
          epicParallels: 'Arjuna’s historic compromise on Day 10, guided by Krishna’s argument that Bhīṣma’s vow cannot be allowed to shield Duryodhana’s adharma indefinitely.'
        }
      },
      {
        id: 's2-c2',
        label: 'Refuse the stratagem and maintain direct combat',
        summary: 'Reject exploiting Bhīṣma’s vow; persist with standard combined-arms assaults, accepting the risk of mutual attrition.',
        prioritizes: 'Strict adherence to honorable direct warrior ethics, uncompromised chivalry, and reverence for the teacher.',
        immediateEffect: 'Preserves the flawless moral purity of your martial conduct in the eyes of traditionalists.',
        strategicConsideration: 'Guarantees the catastrophic attrition of your own best divisions and leads toward imminent military collapse.',
        ethicalConsideration: 'Chooses noble self-destruction over moral compromise, elevating honor above survival.',
        longTermConsequence: 'Results in noble defeat, leaving the realm entirely in the hands of Duryodhana and the perpetrators of the gambling hall.',
        epicPrecedent: 'The tragic stance of heroic purists who preferred death to tactical innovation, criticized by Krishna as false virtue.',
        scores: {
          strategicThinking: 50,
          riskAwareness: 60,
          consequenceAwareness: 65,
          responsibility: 50,
          ethicalReflection: 90
        },
        aiCuratedInsight: {
          prioritization: 'Places abstract codes of honor above empirical survival and the welfare of dependents.',
          strategicTradeOffs: 'Maintains personal integrity, but virtually guarantees organizational catastrophe.',
          ethicalDimensions: 'Exposes the danger of ethical vanity: prioritizing one’s own clean conscience over the real-world consequences suffered by others.',
          epicParallels: 'Krishna cautions Arjuna that refusing practical countermeasures when facing superior force is not virtue, but abdication of responsibility.'
        }
      },
      {
        id: 's2-c3',
        label: 'Confront the elder directly at night to seek his counsel',
        summary: 'Visit Bhīṣma’s camp under nighttime truce, acknowledge the impasse honestly, and ask him directly how he may be overcome.',
        prioritizes: 'Transparency, psychological courage, honoring hierarchy, and converting an adversarial confrontation into shared ethical resolution.',
        immediateEffect: 'Bhīṣma is moved by your candor and respect; he personally reveals his vulnerability and gives his blessing to the necessary tactic.',
        strategicConsideration: 'Eliminates ethical doubt among your own commanders and gains inside intelligence directly from the opposing commander-in-chief.',
        ethicalConsideration: 'Transforms an act of covert ambush into an act of consented sacrifice by the elder himself.',
        longTermConsequence: 'Preserves the profound emotional bond between grandfather and grandson while enabling the necessary strategic outcome.',
        epicPrecedent: 'Yudhiṣṭhira and the Pandavas visiting Bhīṣma’s tent on the night of Day 9 (Mahābhārata, Bhīṣma Parva 107).',
        scores: {
          strategicThinking: 90,
          riskAwareness: 85,
          consequenceAwareness: 95,
          responsibility: 95,
          ethicalReflection: 95
        },
        aiCuratedInsight: {
          prioritization: 'Blends profound ethical reverence with astute psychological diplomacy and operational problem-solving.',
          strategicTradeOffs: 'Requires the vulnerability of entering enemy lines unarmed, but yields unparalleled moral authority.',
          ethicalDimensions: 'Resolves the dilemma by involving the elder in the tragic necessity of his own removal, respecting his agency.',
          epicParallels: 'Directly replicates Book 6, Chapter 107, where Bhīṣma himself tells Yudhiṣṭhira: "Place Śikhaṇḍī before Arjuna; I will not strike him, and Arjuna may then pierce me."'
        }
      }
    ]
  },
  {
    id: 'scenario-3',
    number: 3,
    title: 'The Code of War vs. Total Victory',
    sanskritSubtitle: 'धर्मयुद्ध नियम एवं परिणाम (Rules of Engagement)',
    setting: 'Kurukshetra, Late afternoon of Day 10. The agreed rules of war are beginning to unravel under the brutal stress of casualty counts.',
    openingNarrative: 'At the outset of the war, both armies took solemn oaths on the sacred soil: no warrior strikes one who has dropped their weapon; no combat after sunset; archers duel only archers; cavalry engages only cavalry. But as the casualties mount into hundreds of thousands, Kaurava commanders have begun attacking unhorsed warriors. Your captains come to you in rage: "Our men are dying because we fight with tied hands! Release us from the rules of Dharmayuddha and let us fight with matching ruthlessness!"',
    dilemma: 'If you maintain the rules unilaterally, your soldiers suffer asymmetrical casualties against an opponent who exploits your restraint. If you abandon the rules, the war degenerates into barbaric slaughter, destroying the moral legitimacy of the victory you seek.',
    question: 'When the adversary begins breaching the rules of war, what principle guides your command?',
    choices: [
      {
        id: 's3-c1',
        label: 'Strictly uphold the rules unilaterally',
        summary: 'Command your army to maintain the ethical codes of Dharmayuddha without exception, regardless of enemy violations.',
        prioritizes: 'Absolute ethical standards, long-term moral authority, and refusing to allow the adversary to dictate your character.',
        immediateEffect: 'Avoids moral degradation of your soldiers, but costs soldiers’ lives when the opponent attacks unhorsed or weary units.',
        strategicConsideration: 'Risks operational defeat through self-imposed handicap in an unconstrained environment.',
        ethicalConsideration: 'Maintains that a victory won by becoming identical to the monster one fights is not victory, but moral defeat.',
        longTermConsequence: 'Preserves the foundational moral standard for post-war civilization, though at an excruciating tactical cost.',
        epicPrecedent: 'Yudhiṣṭhira’s persistent philosophical ideal, frequently tested by the escalating savagery of the war.',
        scores: {
          strategicThinking: 55,
          riskAwareness: 65,
          consequenceAwareness: 75,
          responsibility: 60,
          ethicalReflection: 95
        },
        aiCuratedInsight: {
          prioritization: 'Places uncompromising integrity above tactical survival.',
          strategicTradeOffs: 'Maintains spotless ethical pedigree, but places subordinates at a lethal competitive disadvantage.',
          ethicalDimensions: 'Kant’s categorical imperative in action: adhere to the universal law even if the world perishes.',
          epicParallels: 'The classical debate between Yudhiṣṭhira and Bhīma throughout the epic regarding whether goodness can survive absolute malice without adapting.'
        }
      },
      {
        id: 's3-c2',
        label: 'Adopt calibrated proportional reciprocity',
        summary: 'Permit tactical flexibility to counter specific breaches, strictly matching the adversary’s escalation to protect your forces.',
        prioritizes: 'Force protection, tactical deterrence (tit-for-tat with restraint), and dynamic adaptability to bad-faith adversaries.',
        immediateEffect: 'Restores tactical parity on the field, neutralizes the opponent’s unfair advantages, and protects your fighting men.',
        strategicConsideration: 'Prevents the adversary from weaponizing your ethics while maintaining a calibrated limit on total degeneration.',
        ethicalConsideration: 'Differentiates defensive counter-measures from unprovoked cruelty; holds that rules require mutual compliance to remain binding.',
        longTermConsequence: 'Successfully secures victory, but requires rigorous post-war institutional healing to curb normalized brutality.',
        epicPrecedent: 'Krishna’s famous maxim: "Mayinam tu mayaya vadhya" — one who fights with deceit may be met with deceit to restore balance.',
        scores: {
          strategicThinking: 95,
          riskAwareness: 90,
          consequenceAwareness: 90,
          responsibility: 95,
          ethicalReflection: 80
        },
        aiCuratedInsight: {
          prioritization: 'Balances ethical awareness with strategic game theory: cooperative by default, retaliatory when provoked, but never maliciously excessive.',
          strategicTradeOffs: 'Protects personnel and ensures survival while preventing a complete, irreversible descent into unbridled chaos.',
          ethicalDimensions: 'Modern just war doctrine (jus in bello): self-defense and proportionality justify suspending unilateral disadvantages against a treaty-breaker.',
          epicParallels: 'Krishna’s pragmatic guidance when the Kauravas systematically tore down the chivalric codes during the later days of battle.'
        }
      },
      {
        id: 's3-c3',
        label: 'Issue a public challenge and redefine red lines',
        summary: 'Convene an emergency parley with the enemy commanders to publicly document the breaches and declare explicit new terms of engagement.',
        prioritizes: 'Institutional transparency, public accountability, and resetting governance boundaries under crisis conditions.',
        immediateEffect: 'Exposes the opponent’s bad faith to all allied and uncommitted kingdoms; forces their commanders to justify their actions.',
        strategicConsideration: 'May fail to alter a ruthless enemy’s private behavior, but completely strips them of political and historical justification.',
        ethicalConsideration: 'Replaces silent gradual drift into lawlessness with deliberate, conscious redefinition of operational reality.',
        longTermConsequence: 'Ensures the record of history recognizes who broke the peace and why defensive escalations were necessitated.',
        epicPrecedent: 'Sanjaya’s role as the objective chronicler recording every breach for posterity and cosmic justice.',
        scores: {
          strategicThinking: 85,
          riskAwareness: 85,
          consequenceAwareness: 95,
          responsibility: 85,
          ethicalReflection: 90
        },
        aiCuratedInsight: {
          prioritization: 'Prioritizes institutional legitimacy, narrative transparency, and deterrence through exposure.',
          strategicTradeOffs: 'Consumes critical time and may not stop frontline violations immediately, but solidifies broad political alignment.',
          ethicalDimensions: 'Demands that even when rules change, the change must be stated openly rather than concealed in hypocrisy.',
          epicParallels: 'Reflects the epic’s profound concern with truth (Satya) and public witness: deeds performed in secret inevitably poison the victor’s crown.'
        }
      }
    ]
  }
];
