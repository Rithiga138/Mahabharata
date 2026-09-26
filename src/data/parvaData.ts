import { ParvaCard, TimelineEvent, StrategicLesson, SourceItem } from '../types';

export const PARVA_OVERVIEW_CARDS: ParvaCard[] = [
  {
    id: 'battle',
    title: 'THE BATTLE',
    sanskritTitle: 'रणारम्भ (Raṇārambha)',
    subtitle: 'The Opening Phase of Kurukshetra',
    summary: 'Eleven Akṣauhiṇīs of Kauravas and seven of the Pandavas assemble on the sacred field of Kurukshetra, marking the irrevocable failure of peace diplomacy and the dawn of total warfare.',
    extendedContext: 'Bhīṣma Parva covers the first ten grueling days of the eighteen-day war under the supreme generalship of the grand patriarch Bhīṣma. It sets the rules of engagement (Dharmayuddha) and illustrates the clash of immense logistical arrays—including Krauñca (Heron), Garuḍa (Eagle), and Maṇḍala (Circular) formations.',
    sourceCiting: 'Mahābhārata, Book 6 (Bhīṣma Parva), Chapters 1–24 (BORI Critical Edition)',
    keyTakeaway: 'When structural mediation collapses, operational readiness must immediately pivot from diplomatic negotiation to disciplined execution.'
  },
  {
    id: 'dilemma',
    title: 'THE DILEMMA',
    sanskritTitle: 'विषादयोग (Viṣāda-Yoga)',
    subtitle: 'Arjuna’s Crisis of Conscience',
    summary: 'Arjuna commands Krishna to place the chariot between the two armies (senayor ubhayor madhye). Surveying grandfathers, teachers, and kinsmen, his resolve fractures under the weight of anticipated civilizational collapse.',
    extendedContext: 'Arjuna’s grief is not personal fear; it is an articulate, multi-tiered socio-ethical argument. He foresees the death of families, the disruption of social fabric (kula-dharma), moral chaos, and guilt that no sovereign throne could ever heal.',
    sourceCiting: 'Bhagavad Gītā, Chapter 1 (Arjuna-Viṣāda Yoga)',
    keyTakeaway: 'The greatest decision dilemmas occur not between clear right and wrong, but between competing, mutually irreconcilable duties.'
  },
  {
    id: 'counsel',
    title: 'THE COUNSEL',
    sanskritTitle: 'गीतोपदेश (Gītopadeśa)',
    subtitle: 'Krishna’s Strategic Realignment',
    summary: 'Krishna dismantles paralysis through philosophical and operational counsel. He redefines action not through emotional attachment to outcome, but as purposeful service to cosmic and moral equilibrium (Loka-saṅgraha).',
    extendedContext: 'Through the doctrine of Nishkāma Karma (detached duty), Krishna reframes Arjuna from a passive victim of fate into an ethical agent. Inaction, Krishna argues, is itself a consequential decision that guarantees the triumph of lawlessness.',
    sourceCiting: 'Bhagavad Gītā, Chapters 2–18',
    keyTakeaway: 'Leadership counsel must address the root psychological framing of an actor before tactical execution can succeed.'
  },
  {
    id: 'strategy',
    title: 'THE STRATEGY',
    sanskritTitle: 'व्यूहरचना एवं नीति (Vyūha & Nīti)',
    subtitle: 'Decisions Under Incomplete Information',
    summary: 'The war demands constant strategic improvisation. Decisions require balancing duty (svadharma), managing cognitive exhaustion, and calculating systemic consequences under radical battlefield volatility.',
    extendedContext: 'From Yudhiṣṭhira’s audacious barefoot walk across no-man’s-land to seek Bhīṣma’s blessings, to the tactical deployment of Śikhaṇḍī on the tenth day to neutralize Bhīṣma’s unyielding offensive, the epic studies the limits of formal codes under extreme existential pressure.',
    sourceCiting: 'Mahābhārata, Bhīṣma Parva, Chapters 41–124',
    keyTakeaway: 'Strategy is the discipline of maintaining principled direction while remaining tactically adaptive to shifting realities.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 't1',
    day: 'Preparation',
    title: 'The Armies Assemble',
    sanskritTitle: 'सैन्यसंनिवेश',
    shortDesc: 'Eighteen Akṣauhiṇī divisions camp on the plains of Kurukshetra. Sanjaya receives divine sight to report the war to blind King Dhṛtarāṣṭra.',
    detailedContext: 'The plain of Kurukshetra is transformed into a city of tents, banners, and war engines. Both sides agree on formal codes of chivalry (Dharmayuddha): combat only between equals, non-combatants spared, cessation of hostilities at sunset.',
    strategicSignificance: 'Establishing common governance protocols and communication channels before the friction of war begins.',
    ethicalTension: 'The paradox of attempting to codify and sanitize an act of catastrophic mutual annihilation.'
  },
  {
    id: 't2',
    day: 'Dawn of Day 1',
    title: 'Arjuna Surveys the Battlefield',
    sanskritTitle: 'सैन्यनिरीक्षण',
    shortDesc: 'Arjuna asks Krishna to station his war chariot precisely in the middle between both armies to inspect those who have gathered to fight.',
    detailedContext: 'From the neutral focal point between the two massive battle arrays, the abstract concept of "the enemy" instantly dissolves into intimate, cherished faces: his revered grandfather Bhīṣma, his archery master Droṇa, childhood companions, and cousins.',
    strategicSignificance: 'Gaining direct frontline visibility versus relying on insulated command-room assumptions.',
    ethicalTension: 'The sudden, overwhelming realization of the human cost of political victory.'
  },
  {
    id: 't3',
    day: 'Day 1 Morning',
    title: "Arjuna's Dilemma & Paralysis",
    sanskritTitle: 'गाण्डीवनिपातः',
    shortDesc: 'Overcome by moral revulsion and profound grief, Arjuna drops his celestial bow Gāṇḍīva and refuses to take up arms.',
    detailedContext: 'Arjuna sits down in the carriage of his chariot, his mind clouded by sorrow. He argues that slaying one’s own lineage to gain sovereign territory destroys ancestral traditions, breeds societal decay, and yields only blood-stained pleasure.',
    strategicSignificance: 'The sudden collapse of executive will at the decisive operational zero-hour.',
    ethicalTension: 'Personal moral conscience versus institutional warrior oath (kṣātra-dharma).'
  },
  {
    id: 't4',
    day: 'Day 1 Mid-Morning',
    title: "Krishna's Counsel & Dialectic",
    sanskritTitle: 'योगशास्त्रोपदेश',
    shortDesc: 'Krishna delivers the timeless dialogue of the Bhagavad Gītā, elevating the conflict from tribal vengeance to cosmic moral duty.',
    detailedContext: 'Krishna systematically addresses Arjuna’s emotional despair, cognitive confusion, and existential crisis. He reveals the eternal nature of consciousness, the necessity of disinterested action (karma-yoga), and the imperative to defend the societal order without egotistical pride.',
    strategicSignificance: 'Reframing paralysis by detaching the actor’s ego from unpredictable external outcomes.',
    ethicalTension: 'Reconciling the imperative of non-violence (ahiṁsā) with the state’s obligation to check aggression.'
  },
  {
    id: 't5',
    day: 'Day 1 Afternoon',
    title: 'The Battle Begins',
    sanskritTitle: 'शङ्खनाद एवं समरारम्भ',
    shortDesc: 'Conch shells echo across Kurukshetra. Yudhiṣṭhira walks unarmed to Bhīṣma and Droṇa to touch their feet, securing their psychological blessing.',
    detailedContext: 'Before the clash of steel, Yudhiṣṭhira’s gesture stuns both armies. Bhīṣma and Droṇa bless the Pandavas with ultimate victory despite being duty-bound to fight against them. The Kauravas’ moral coherence is subtly shattered before the first arrow flies.',
    strategicSignificance: 'Moral statecraft and psychological disarming of an adversary through vulnerability and respect.',
    ethicalTension: 'Fighting revered elders with absolute military lethality while maintaining internal veneration.'
  },
  {
    id: 't6',
    day: 'Days 2–10',
    title: 'Strategic Consequences & Bhīṣma’s Fall',
    sanskritTitle: 'भीष्मशरशय्या',
    shortDesc: 'Ten days of brutal combat culminate in the fall of Bhīṣma upon a bed of arrows, altering the strategic balance of the entire war.',
    detailedContext: 'Day after day, Bhīṣma decimates the Pandava ranks. Realizing Bhīṣma cannot be defeated in direct frontal combat, the Pandavas confront their own moral threshold: advancing behind Śikhaṇḍī—whom Bhīṣma vows never to strike. On the tenth day, Bhīṣma falls.',
    strategicSignificance: 'The necessity of asymmetric tactics when conventional warfare reaches an intractable stalemate.',
    ethicalTension: 'Exploiting an adversary’s ethical vow to achieve a tactical breakthrough.'
  }
];

export const STRATEGIC_LESSONS: StrategicLesson[] = [
  {
    id: 'lesson-1',
    title: 'THINK BEYOND THE IMMEDIATE',
    sanskritConcept: 'दीर्घदर्शी विवेक (Dīrghadarśī Viveka)',
    coreRule: 'Consider multi-order consequences rather than short-term relief or impulse.',
    mahabharataContext: 'Arjuna initially saw only the horrific immediate bloodshed of battle. Krishna expanded his temporal lens across generations: allowing lawlessness (adharma) to triumph today out of emotional recoil would condemn entire societies to unchecked tyranny tomorrow.',
    strategicInterpretation: 'Short-term peace achieved through capitulation often accelerates systemic fragility. Strategic leaders must evaluate secondary and tertiary consequences (2nd- and 3rd-order effects) rather than evaluating choices purely on their immediate emotional discomfort.',
    modernApplication: 'In organizational governance, delaying a necessary restructuring or ignoring unethical conduct to preserve immediate harmony invariably leads to existential corporate scandal or systemic collapse months later.'
  },
  {
    id: 'lesson-2',
    title: 'BALANCE COMPETING PRIORITIES',
    sanskritConcept: 'धर्मसङ्कट सन्तुलन (Dharmasaṅkaṭa Santulana)',
    coreRule: 'High-stakes decisions rarely offer pure right vs. wrong choices; they demand weighing valid competing claims.',
    mahabharataContext: 'Bhīṣma held an unbreakable vow of loyalty to the crown of Hastinapura, yet witnessed the throne commit grave moral violations. His life epitomizes "Dharmasaṅkaṭa"—the tragic dilemma where keeping an individual oath inadvertently abets institutional corruption.',
    strategicInterpretation: 'Leadership decisions often force trade-offs between fiduciary duties, ethical values, employee welfare, and market survival. The mature strategist acknowledges trade-offs openly instead of pretending an easy, cost-free solution exists.',
    modernApplication: 'Engineers developing algorithmic systems must constantly balance user data privacy with predictive utility, or speed-to-market with rigorous safety validation. Neither priority is malicious, yet prioritizing one degrades the other.'
  },
  {
    id: 'lesson-3',
    title: 'DECIDE UNDER UNCERTAINTY',
    sanskritConcept: 'असंशय कर्म (Asaṁśaya Karma)',
    coreRule: 'Action cannot wait for complete certainty; cultivate conviction in principle over prediction of fruit.',
    mahabharataContext: 'Neither Arjuna nor Yudhiṣṭhira had any guarantee that fighting would restore golden prosperity—they only knew the cost would be devastating. Krishna taught that clarity lies in the purity of the action (Nishkāma Karma), not in illusory control over future outcomes.',
    strategicInterpretation: 'Analysis paralysis is a strategic death sentence in volatile, ambiguous environments (VUCA). Strategic decision-makers establish robust operational principles and execute decisively, adjusting dynamically rather than waiting for nonexistent certainty.',
    modernApplication: 'During an unprecedented public health or financial crisis, leaders must make high-consequence interventions with partial epidemiological or financial telemetry. Waiting for complete data results in catastrophe.'
  },
  {
    id: 'lesson-4',
    title: 'REFLECT BEFORE ACTING',
    sanskritConcept: 'आत्मसंयम एवं विचार (Ātmasaṁyama & Vicāra)',
    coreRule: 'Understanding the problem architecture must precede tactical intervention.',
    mahabharataContext: 'Arjuna did not fire blindly in panic; he called a deliberate halt between the armies (senayor ubhayor madhye) to examine reality directly. That pause permitted the philosophical dialogue of the Bhagavad Gītā, realigning his entire mental model before taking action.',
    strategicInterpretation: 'Strategic discipline requires inserting a cognitive pause between trigger and reaction. Unreflective action in crisis merely amplifies chaos; deep reflection crystallizes purpose and prevents catastrophic misdirection.',
    modernApplication: 'When an organization faces an aggressive competitor maneuver or PR crisis, the natural instinct is reactive counter-punching. Senior leadership must enforce an analytical pause to diagnose whether the incident is a tactical blip or a structural shift.'
  }
];

export const RESEARCH_IDEA_STEPS = [
  {
    step: 'CONTEMPORARY PROBLEM',
    title: 'Decision Fatigue & Pedagogy Deficit',
    description: 'Modern students and aspiring leaders are inundated with sterile case studies and simplistic gamified tests that reduce complex ethical choices into binary right-or-wrong answers.',
    icon: 'AlertTriangle'
  },
  {
    step: 'TRADITIONAL INSIGHT',
    title: 'The Living Laboratory of Mahābhārata',
    description: 'The Bhīṣma Parva provides an unmatched, historically refined framework of duty (Dharma), uncertainty, multi-generational consequences, and competing legitimate obligations.',
    icon: 'BookOpen'
  },
  {
    step: 'INNOVATION',
    title: 'Interactive Epic Decision Simulation',
    description: 'Transforming classical dilemmas into active, perspective-driven scenario engines where users confront trade-offs, explore consequence dimensions, and receive reflective evaluation.',
    icon: 'Compass'
  },
  {
    step: 'EVALUATION',
    title: 'Empirical Reflection & Strategic Scored Output',
    description: 'Measuring decision awareness across strategic thinking, ethical reflection, risk calibration, and consequence awareness—providing a meaningful reflective radar profile.',
    icon: 'CheckCircle2'
  }
];

export const SCHOLARLY_SOURCES: {
  primary: SourceItem[];
  translations: SourceItem[];
  research: SourceItem[];
  digital: SourceItem[];
} = {
  primary: [
    {
      title: 'Mahābhārata: Bhīṣma Parva (The Critical Edition)',
      authorOrEditor: 'Bhandarkar Oriental Research Institute (BORI)',
      publication: 'BORI Critical Edition (Vol. VII)',
      year: '1947',
      description: 'The authoritative critical text constituted from hundreds of regional manuscripts, establishing the consensus verse corpus for Book 6 and the Bhagavad Gītā.',
      accessNote: 'Pune, India'
    },
    {
      title: 'Śrīmad Bhagavad Gītā (Chapters 23–40 of Bhīṣma Parva)',
      authorOrEditor: 'Traditional attribution: Kṛṣṇa Dvaipāyana Vyāsa',
      publication: 'Sanskrit text with classical commentaries of Śaṅkara, Rāmānuja, and Madhva',
      year: 'Classical Antiquity',
      description: 'The philosophical core of the Bhīṣma Parva exploring ethics, epistemology, and action under crisis.'
    }
  ],
  translations: [
    {
      title: 'The Mahabharata, Vol. 5: Book 6 (Bhishma Parva)',
      authorOrEditor: 'Translated by Bibek Debroy',
      publication: 'Penguin Books India',
      year: '2012',
      description: 'Unabridged, rigorously accurate English translation based strictly on the BORI Critical Edition, preserving nuances of Sanskrit terms and military dialogue.'
    },
    {
      title: 'The Bhagavadgītā in the Mahābhārata',
      authorOrEditor: 'Translated and edited by J. A. B. van Buitenen',
      publication: 'The University of Chicago Press',
      year: '1981',
      description: 'Bilingual critical edition with scholarly commentary emphasizing the text’s integral role within the narrative tension of the Kurukshetra war.'
    },
    {
      title: 'The Mahabharata of Krishna-Dwaipayana Vyasa (Book 6)',
      authorOrEditor: 'Translated by Kisari Mohan Ganguli',
      publication: 'Bharata Press, Calcutta',
      year: '1883–1896',
      description: 'The first complete prose translation into English, offering classical Victorian prose rendering of the battlefield encounters and military speeches.'
    }
  ],
  research: [
    {
      title: 'The Difficulty of Being Good: On the Subtle Art of Dharma',
      authorOrEditor: 'Gurcharan Das',
      publication: 'Oxford University Press',
      year: '2009',
      description: 'Academic and philosophical examination of the Mahābhārata’s moral ambiguities, exploring leadership, governance, and the ethics of duty versus consequence.'
    },
    {
      title: 'Strategic Thinking in Ancient India: The Epics and Arthashastra',
      authorOrEditor: 'P. K. Gautam',
      publication: 'Institute for Defence Studies and Analyses (IDSA)',
      year: '2013',
      description: 'Scholarly monograph analyzing the strategic doctrines, coalition politics, psychological operations, and ethical thresholds in the Mahābhārata.'
    },
    {
      title: 'Moral Dilemmas in the Mahābhārata',
      authorOrEditor: 'Bimal Krishna Matilal',
      publication: 'Indian Institute of Advanced Study & Motilal Banarsidass',
      year: '1989',
      description: 'Groundbreaking analytical philosophy work examining the irreconcilable moral crises of Arjuna, Bhīṣma, and Yudhiṣṭhira through modern decision theory.'
    }
  ],
  digital: [
    {
      title: 'BORI Electronic Database of the Mahabharata',
      authorOrEditor: 'Bhandarkar Oriental Research Institute & Tokunaga (Kyoto University)',
      publication: 'Digital Text Repository',
      year: '2003–present',
      description: 'Open scholarly archive containing searchable Sanskrit text of the 19-volume Critical Edition.'
    },
    {
      title: 'Brown University Sanskrit Epics Database',
      authorOrEditor: 'Department of Classics & Religious Studies, Brown University',
      publication: 'Digital Humanities Archive',
      year: '2018',
      description: 'Annotated structural concordance of the Mahābhārata and critical apparatus comparisons.'
    }
  ]
};

export const RESEARCH_PILLARS = [
  {
    id: 'contemporary-problem',
    step: 'CONTEMPORARY PROBLEM',
    title: 'The Mythological Distance',
    description: 'Students and readers often encounter the Mahābhārata as a distant mythological story rather than an analytical study in decision-making, governance, and human conflict.',
    detail: 'Passive mythologizing obscures real-world strategic decision lessons.'
  },
  {
    id: 'traditional-insight',
    step: 'TRADITIONAL INSIGHT',
    title: 'Clash of Competing Dharmas',
    description: 'The epic repeatedly focuses on moments where dharma, duty, loyalty, and existential consequences clash without easy moral escapes.',
    detail: 'Classical Sanskrit narrative as an advanced moral and political laboratory.'
  },
  {
    id: 'innovation',
    step: 'INNOVATION',
    title: 'Active Decision Simulation',
    description: 'Transforming these ancient dilemmas into an interactive decision-making experience with character lenses and trade-off feedback.',
    detail: 'Shifting the user from a passive audience to an active strategist.'
  },
  {
    id: 'evaluation',
    step: 'EVALUATION',
    title: 'Comparative Strategic Profiling',
    description: 'Users reflect on their own decision patterns and compare them with the strategic frameworks of the epic across 5 key dimensions.',
    detail: 'Reflective radar profile mapping risk, duty, ethics, and consequences.'
  }
];

export const SOURCES_DATA = [
  {
    category: 'PRIMARY TEXT',
    items: [
      {
        title: 'Mahābhārata: Bhīṣma Parva (Book 6) — Critical Edition',
        description: 'The authoritative critical text constituted from collation of over 300 manuscripts across the Indian subcontinent.',
        citation: 'Bhandarkar Oriental Research Institute (BORI), Pune (Vol. VII, ed. S. K. Belvalkar, 1947).',
        type: 'Primary Sanskrit Critical Apparatus'
      },
      {
        title: 'Śrīmad Bhagavad Gītā (Chapters 23–40 of Bhīṣma Parva)',
        description: 'The definitive dialogue between Arjuna and Krishna on duty, action, detachment, and social order.',
        citation: 'Textus Receptus with Critical Concordance, BORI.',
        type: 'Philosophical Text Core'
      }
    ]
  },
  {
    category: 'TRANSLATIONS & COMMENTARIES',
    items: [
      {
        title: 'The Mahabharata, Vol. 5: Book 6 (Bhishma Parva)',
        description: 'Unabridged, rigorously accurate modern English translation based strictly on the BORI Critical Edition.',
        citation: 'Trans. Bibek Debroy, Penguin Classics India, 2012.',
        type: 'Complete English Translation'
      },
      {
        title: 'The Mahabharata of Krishna-Dwaipayana Vyasa: Bhishma Parva',
        description: 'The classic 19th-century unabridged prose translation preserving Victorian classical idiom.',
        citation: 'Trans. Kisari Mohan Ganguli, Bharata Press, Calcutta (1883–1896).',
        type: 'Historical Translation'
      },
      {
        title: 'The Bhagavadgītā in the Mahābhārata: A Bilingual Edition',
        description: 'Scholarly translation situated explicitly within the epic context of the surrounding battle narrative.',
        citation: 'Trans. & ed. J. A. B. van Buitenen, University of Chicago Press, 1981.',
        type: 'Academic Commentary'
      }
    ]
  },
  {
    category: 'RESEARCH & PERSPECTIVES',
    items: [
      {
        title: 'Moral Dilemmas in the Mahābhārata',
        description: 'Foundational analytical philosophy work examining the irreconcilable moral crises of Arjuna, Bhīṣma, and Yudhiṣṭhira.',
        citation: 'Bimal Krishna Matilal, Motilal Banarsidass / IIAS, 1989.',
        type: 'Philosophical Analysis'
      },
      {
        title: 'The Difficulty of Being Good: On the Subtle Art of Dharma',
        description: 'Investigates the contemporary ethical and leadership relevance of Mahabharata characters when facing moral ambiguity.',
        citation: 'Gurcharan Das, Oxford University Press, 2009.',
        type: 'Leadership & Decision Theory'
      }
    ]
  },
  {
    category: 'DIGITAL & EDUCATIONAL RESOURCES',
    items: [
      {
        title: 'BORI Electronic Mahabharata Repository',
        description: 'Open-access digital edition of the 19-volume Poona Critical Edition in Devanagari and Roman transliteration.',
        citation: 'Bhandarkar Oriental Research Institute & Kyoto University (M. Tokunaga), 2003–present.',
        type: 'Digital Humanities Archive'
      },
      {
        title: 'Mahabharata Concordance & Sanskrit Text Archives',
        description: 'Digitized texts, metrical analysis, and parallel verse references for the epic corpus.',
        citation: 'Göttingen Register of Electronic Texts in Indian Languages (GRETIL).',
        type: 'Open Academic Resource'
      }
    ]
  }
];

