import { Character } from '../types';

export const CHARACTERS: Character[] = [
  {
    id: 'arjuna',
    name: 'Arjuna',
    sanskritName: 'अर्जुन',
    role: 'Pandava Warrior & Archer',
    focus: 'The Decision-Maker',
    description: 'Arjuna stands at the center of the existential crisis. Confronted by beloved kin and revered elders across the battlefield, his dilemma is not cowardice but the harrowing collision of competing moral obligations: warrior duty versus familial sanctity.',
    perspectiveIntro: 'You see the war through Arjuna’s eyes: the heavy bow Gāṇḍīva slipping from trembling hands, the battlefield of Kurukshetra turning into a mirror of tragic moral ambiguity where victory feels indistinguishable from grief.',
    quote: {
      sanskrit: 'न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च ।',
      english: 'I do not desire victory, O Krishna, nor sovereignty, nor pleasures. What is kingdom to us, or enjoyment, or even life itself?',
      source: 'Bhagavad Gītā 1.32'
    },
    symbolism: 'Gāṇḍīva Bow & Chariot of Contemplation',
    keyDilemma: 'How does one act decisively when every foreseeable outcome produces catastrophic loss?',
    strategicStrength: 'Moral introspection, technical mastery, and receptivity to counsel.',
    portraitPrompt: 'Warrior hero with bow lowered in deep contemplative hesitation',
    bgGradient: 'from-amber-950/40 via-charcoal-900 to-black'
  },
  {
    id: 'krishna',
    name: 'Krishna',
    sanskritName: 'कृष्ण',
    role: "Arjuna's Charioteer & Mentor",
    focus: 'The Strategist & Counselor',
    description: 'Krishna does not command Arjuna to fight blindly; instead, he expands Arjuna’s cognitive horizon. He introduces Nishkāma Karma (action without attachment to personal fruits) and reveals the systemic consequences of inaction.',
    perspectiveIntro: 'You see the war through Krishna’s eyes: the vast cosmic and temporal web where individual duty (svadharma) must uphold the collective moral equilibrium (loka-saṅgraha) regardless of personal comfort.',
    quote: {
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।',
      english: 'Your entitlement is only to the action, never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.',
      source: 'Bhagavad Gītā 2.47'
    },
    symbolism: 'The Reins of the Chariot & The Conch Pāñcajanya',
    keyDilemma: 'Balancing empathetic counsel with the ruthless necessity of maintaining systemic cosmic order.',
    strategicStrength: 'Holistic systems thinking, psychological insight, and detachment from ego.',
    portraitPrompt: 'Divine counselor holding the reins of the four white horses with quiet majesty',
    bgGradient: 'from-blue-950/40 via-charcoal-900 to-black'
  },
  {
    id: 'bhisma',
    name: 'Bhīṣma',
    sanskritName: 'भीष्म',
    role: 'Commander-in-Chief of Kaurava Forces',
    focus: 'Duty & Loyalty',
    description: 'The revered patriarch represents the tragic burden of oaths. Bound by his sacred vow of lifelong celibacy and allegiance to the throne of Hastinapura, he leads armies for a king whose conduct he privately condemns.',
    perspectiveIntro: 'You see the war through Bhīṣma’s eyes: an invincible grandmaster waging war against the grandsons he held on his lap, honoring loyalty to the state even when the state has lost its moral compass.',
    quote: {
      sanskrit: 'अर्थस्य पुरुषो दासो दासस्त्वर्थो न कस्यचित् ।',
      english: 'A man is a servant to material obligation and state debt; material obligation is servant to no one. Thus I am bound to the throne.',
      source: 'Mahābhārata, Bhīṣma Parva 41.36'
    },
    symbolism: 'The White Banner with Silver Palm Tree & The Golden Chariot',
    keyDilemma: 'The agonizing paradox of honoring personal vows while being trapped on the morally compromised side of history.',
    strategicStrength: 'Unmatched military experience, disciplined self-restraint, and unflinching fidelity.',
    portraitPrompt: 'Patriarch elder in silver armor and white beard commanding with solemn majesty',
    bgGradient: 'from-stone-900 via-charcoal-900 to-black'
  },
  {
    id: 'duryodhana',
    name: 'Duryodhana',
    sanskritName: 'दुर्योधन',
    role: 'Crown Prince of the Kauravas',
    focus: 'Power & Strategy',
    description: 'Duryodhana operates from a realpolitik framework centered on sovereignty, resource mobilization, and decisive power. He views the Pandavas not merely as cousins but as existential rivals to the stability of his dynasty.',
    perspectiveIntro: 'You see the war through Duryodhana’s eyes: the relentless drive for supremacy, the belief that kingship is taken through strength rather than granted through pity, and the acute anxiety of commanding vast yet fractious alliances.',
    quote: {
      sanskrit: 'सूच्यग्रं नैव दास्यामि विना युद्धेन केशव ।',
      english: 'I will not surrender even that needlepoint of earth without war, O Keshava.',
      source: 'Mahābhārata, Udyoga Parva 125.26'
    },
    symbolism: 'The Royal Mace (Gadā) & The Serpent Crest',
    keyDilemma: 'Maintaining coalition confidence while sensing internal ideological resistance from his own commanders.',
    strategicStrength: 'Unflinching determination, geopolitical alliance building, and martial assertiveness.',
    portraitPrompt: 'Proud prince with royal ornaments and golden armor displaying formidable will',
    bgGradient: 'from-red-950/40 via-charcoal-900 to-black'
  },
  {
    id: 'yudhishthira',
    name: 'Yudhiṣṭhira',
    sanskritName: 'युधिष्ठिर',
    role: 'Pandava King & Sovereign',
    focus: 'Responsibility & Dharma',
    description: 'Known as Dharmarāja, Yudhiṣṭhira bears the moral weight of legitimate kingship. Before a single arrow is loosed, he steps down from his chariot, unarmed, to bow and request the blessings of his opposing elders—combining ethical reverence with tactical sagacity.',
    perspectiveIntro: 'You see the war through Yudhiṣṭhira’s eyes: the agonizing burden of high command where every royal decree carries the weight of thousands of lives, and where righteousness must survive the brutal practicalities of conflict.',
    quote: {
      sanskrit: 'यतो धर्मस्ततो जयः ।',
      english: 'Where there is righteousness and ethical alignment, there alone is victory.',
      source: 'Mahābhārata, Bhīṣma Parva 41.55'
    },
    symbolism: 'The Unadorned Golden Standard & Barefoot Approach to Elders',
    keyDilemma: 'Navigating statecraft and warfare when conscience continually recoils against the violence it requires.',
    strategicStrength: 'Moral legitimacy, resilience through adversity, and transparent governance.',
    portraitPrompt: 'Dignified king with gentle yet determined gaze bearing the crown of justice',
    bgGradient: 'from-emerald-950/30 via-charcoal-900 to-black'
  }
];
