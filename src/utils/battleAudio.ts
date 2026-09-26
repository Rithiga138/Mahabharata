// Browser-native synthetic audio engine for epic battlefield ambiance and tailored character soundscapes
// Uses Web Audio API without any external assets to guarantee zero latency and 100% offline reliability.

class BattleAudioEngine {
  private ctx: AudioContext | null = null;
  public isMuted: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // ==========================================
  // 1. ARJUNA: THE FEARLESS WARRIOR
  // Rapid bowstring snap + razor arrow flight whoosh + metallic warrior blade ping
  // ==========================================
  public playArjunaWarrior() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Layer A: Powerful Gāṇḍīva bowstring twang & snap (Sawtooth drop)
      const bowOsc = this.ctx.createOscillator();
      const bowGain = this.ctx.createGain();
      const bowFilter = this.ctx.createBiquadFilter();

      bowOsc.type = 'sawtooth';
      bowOsc.frequency.setValueAtTime(560, now);
      bowOsc.frequency.exponentialRampToValueAtTime(110, now + 0.35);

      bowFilter.type = 'lowpass';
      bowFilter.frequency.setValueAtTime(2200, now);
      bowFilter.frequency.exponentialRampToValueAtTime(350, now + 0.35);

      bowGain.gain.setValueAtTime(0.4, now);
      bowGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      bowOsc.connect(bowFilter);
      bowFilter.connect(bowGain);
      bowGain.connect(this.ctx.destination);

      bowOsc.start(now);
      bowOsc.stop(now + 0.4);

      // Layer B: Aerodynamic arrow whoosh slicing the air (White noise through sweeping bandpass)
      const bufferSize = this.ctx.sampleRate * 0.4;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noiseNode = this.ctx.createBufferSource();
      noiseNode.buffer = noiseBuffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(3200, now);
      noiseFilter.frequency.exponentialRampToValueAtTime(700, now + 0.35);
      noiseFilter.Q.setValueAtTime(4, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.28, now + 0.05);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      noiseNode.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noiseNode.start(now);
      noiseNode.stop(now + 0.38);

      // Layer C: High metallic blade/arrowhead shimmer
      const metalOsc = this.ctx.createOscillator();
      const metalGain = this.ctx.createGain();
      metalOsc.type = 'sine';
      metalOsc.frequency.setValueAtTime(1480, now);
      metalOsc.frequency.exponentialRampToValueAtTime(980, now + 0.4);

      metalGain.gain.setValueAtTime(0.18, now);
      metalGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      metalOsc.connect(metalGain);
      metalGain.connect(this.ctx.destination);

      metalOsc.start(now);
      metalOsc.stop(now + 0.42);

      // Layer D: Warrior kick thump (tactical impact)
      const kickOsc = this.ctx.createOscillator();
      const kickGain = this.ctx.createGain();
      kickOsc.type = 'sine';
      kickOsc.frequency.setValueAtTime(150, now);
      kickOsc.frequency.exponentialRampToValueAtTime(45, now + 0.25);

      kickGain.gain.setValueAtTime(0.35, now);
      kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      kickOsc.connect(kickGain);
      kickGain.connect(this.ctx.destination);

      kickOsc.start(now);
      kickOsc.stop(now + 0.26);
    } catch (e) {
      console.debug('Audio error', e);
    }
  }

  // ==========================================
  // 2. KRISHNA: TRANSCENDENT & DIVINE
  // Celestial Sa-Pa harmonic glow, celestial shimmering bells & sacred conch swell
  // ==========================================
  public playKrishnaDivine() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Layer A: Celestial Solfeggio / Om chord (528 Hz + 792 Hz + 1056 Hz pure divine sines)
      const freqs = [528, 792, 1056, 1584];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Subtle slow vibrato for celestial luminescence
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(4.5 + idx * 0.4, now);
        lfoGain.gain.setValueAtTime(3.5, now);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start(now);
        lfo.stop(now + 2.8);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.12 / (idx + 1), now + 0.4);
        gain.gain.setValueAtTime(0.1 / (idx + 1), now + 1.6);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 2.8);
      });

      // Layer B: Pāñcajanya sacred conch horn blast swelling with divine majesty
      const conchOsc1 = this.ctx.createOscillator();
      const conchOsc2 = this.ctx.createOscillator();
      const conchFilter = this.ctx.createBiquadFilter();
      const conchGain = this.ctx.createGain();

      conchOsc1.type = 'triangle';
      conchOsc2.type = 'sawtooth';

      conchOsc1.frequency.setValueAtTime(261.6, now + 0.15); // Middle C
      conchOsc1.frequency.exponentialRampToValueAtTime(392, now + 0.7); // G4
      conchOsc1.frequency.exponentialRampToValueAtTime(440, now + 1.4); // A4
      conchOsc1.frequency.exponentialRampToValueAtTime(349, now + 2.5);

      conchOsc2.frequency.setValueAtTime(263, now + 0.15);
      conchOsc2.frequency.exponentialRampToValueAtTime(395, now + 0.7);
      conchOsc2.frequency.exponentialRampToValueAtTime(443, now + 1.4);
      conchOsc2.frequency.exponentialRampToValueAtTime(351, now + 2.5);

      conchFilter.type = 'lowpass';
      conchFilter.frequency.setValueAtTime(550, now);
      conchFilter.frequency.exponentialRampToValueAtTime(1200, now + 0.9);
      conchFilter.frequency.exponentialRampToValueAtTime(400, now + 2.6);

      conchGain.gain.setValueAtTime(0.001, now);
      conchGain.gain.exponentialRampToValueAtTime(0.25, now + 0.6);
      conchGain.gain.setValueAtTime(0.22, now + 1.5);
      conchGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      conchOsc1.connect(conchFilter);
      conchOsc2.connect(conchFilter);
      conchFilter.connect(conchGain);
      conchGain.connect(this.ctx.destination);

      conchOsc1.start(now + 0.15);
      conchOsc2.start(now + 0.15);
      conchOsc1.stop(now + 2.8);
      conchOsc2.stop(now + 2.8);
    } catch (e) {
      console.debug('Audio error', e);
    }
  }

  // ==========================================
  // 3. BHĪṢMA / BHIMA: MONUMENTAL GREATNESS
  // Grand patriarchal fanfare, colossal brass fifths & titan shield resonance
  // ==========================================
  public playBhishmaGreatness() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Layer A: Grand Imperial Power Chords (Monumental brass: C3, G3, C4, E4)
      const grandPitches = [130.8, 196.0, 261.6, 329.6];
      grandPitches.forEach((pitch, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = i === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(pitch, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(350, now);
        filter.frequency.exponentialRampToValueAtTime(1600, now + 0.4);
        filter.frequency.exponentialRampToValueAtTime(500, now + 2.2);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.22 / (i * 0.4 + 1), now + 0.25);
        gain.gain.setValueAtTime(0.18 / (i * 0.4 + 1), now + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.4);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 2.45);
      });

      // Layer B: Monumental Titan Shield / Anvil Strike
      const shieldOsc = this.ctx.createOscillator();
      const shieldGain = this.ctx.createGain();
      shieldOsc.type = 'triangle';
      shieldOsc.frequency.setValueAtTime(240, now);
      shieldOsc.frequency.exponentialRampToValueAtTime(65, now + 0.7);

      shieldGain.gain.setValueAtTime(0.45, now);
      shieldGain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

      shieldOsc.connect(shieldGain);
      shieldGain.connect(this.ctx.destination);

      shieldOsc.start(now);
      shieldOsc.stop(now + 0.8);

      // Layer C: Deep Sub-bass foundation (unshakeable greatness)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(65.4, now); // Low C

      subGain.gain.setValueAtTime(0.35, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);

      subOsc.start(now);
      subOsc.stop(now + 2.1);
    } catch (e) {
      console.debug('Audio error', e);
    }
  }

  // ==========================================
  // 4. DURYODHANA: SINISTER VILLAINY
  // Dark menacing tritone dissonance, low growling brass & crushing war mace
  // ==========================================
  public playDuryodhanaVillain() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Layer A: The Ominous Devil's Interval (Tritone) - Low C2 (65.4Hz) + F#2 (92.5Hz)
      const tritoneNotes = [65.4, 92.5, 123.5];
      tritoneNotes.forEach((f) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, now);
        // Ominous downwards microtone slide
        osc.frequency.exponentialRampToValueAtTime(f * 0.88, now + 1.8);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, now);
        filter.frequency.linearRampToValueAtTime(600, now + 0.4);
        filter.frequency.exponentialRampToValueAtTime(150, now + 1.8);
        filter.Q.setValueAtTime(6, now); // Sharp menacing resonant growl

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.28, now + 0.2);
        gain.gain.setValueAtTime(0.22, now + 1.0);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 2.05);
      });

      // Layer B: Heavy Royal War Mace (Gadā) Ground Strike
      const maceOsc = this.ctx.createOscillator();
      const maceGain = this.ctx.createGain();
      maceOsc.type = 'sine';
      maceOsc.frequency.setValueAtTime(140, now);
      maceOsc.frequency.exponentialRampToValueAtTime(32, now + 0.6);

      maceGain.gain.setValueAtTime(0.55, now);
      maceGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

      maceOsc.connect(maceGain);
      maceGain.connect(this.ctx.destination);

      maceOsc.start(now);
      maceOsc.stop(now + 0.7);

      // Layer C: Sinister metallic rattle / scrape
      const rattleBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.3, this.ctx.sampleRate);
      const rattleData = rattleBuffer.getChannelData(0);
      for (let i = 0; i < rattleData.length; i++) {
        rattleData[i] = (Math.random() * 2 - 1) * (1 - i / rattleData.length);
      }

      const rattleNode = this.ctx.createBufferSource();
      rattleNode.buffer = rattleBuffer;
      const rattleFilter = this.ctx.createBiquadFilter();
      rattleFilter.type = 'highpass';
      rattleFilter.frequency.setValueAtTime(1800, now);

      const rattleGain = this.ctx.createGain();
      rattleGain.gain.setValueAtTime(0.2, now);
      rattleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      rattleNode.connect(rattleFilter);
      rattleFilter.connect(rattleGain);
      rattleGain.connect(this.ctx.destination);

      rattleNode.start(now);
      rattleNode.stop(now + 0.35);
    } catch (e) {
      console.debug('Audio error', e);
    }
  }

  // ==========================================
  // 5. YUDHIṢṬHIRA: THE GREAT NOBLE KING
  // Regal coronation fanfare, imperial royal herald trumpets & golden sovereign bell
  // ==========================================
  public playYudhishthiraGreatKing() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Layer A: Royal Trumpet Coronation Fanfare Sequence
      // Note 1: E4 (330Hz) at 0.0s
      // Note 2: B4 (493.8Hz) at 0.18s
      // Note 3: E5 (659.2Hz) at 0.38s (sustained triumphant kingly glory)
      const fanfareNotes = [
        { freq: 329.6, start: 0.0, dur: 0.22, amp: 0.22 },
        { freq: 493.8, start: 0.18, dur: 0.24, amp: 0.26 },
        { freq: 659.2, start: 0.38, dur: 1.8, amp: 0.32 },
        { freq: 987.7, start: 0.42, dur: 1.6, amp: 0.16 }, // Noble fifth shimmer
      ];

      fanfareNotes.forEach((n) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(n.freq, now + n.start);

        // Regal vibrato on the sustained triumphant note
        if (n.dur > 1.0) {
          const lfo = this.ctx.createOscillator();
          const lfoGain = this.ctx.createGain();
          lfo.frequency.setValueAtTime(5.2, now + n.start);
          lfoGain.gain.setValueAtTime(4, now + n.start);
          lfo.connect(osc.frequency);
          lfo.start(now + n.start + 0.2);
          lfo.stop(now + n.start + n.dur);
        }

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2600, now + n.start);

        gain.gain.setValueAtTime(0.001, now + n.start);
        gain.gain.exponentialRampToValueAtTime(n.amp, now + n.start + 0.04);
        if (n.dur > 1.0) {
          gain.gain.setValueAtTime(n.amp * 0.85, now + n.start + 0.8);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + n.start + n.dur);
        } else {
          gain.gain.exponentialRampToValueAtTime(0.001, now + n.start + n.dur);
        }

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + n.start);
        osc.stop(now + n.start + n.dur + 0.05);
      });

      // Layer B: Imperial Golden Sovereign Bell / Royal Court Chime
      const bellFreqs = [880, 1320, 1760];
      bellFreqs.forEach((bf, i) => {
        if (!this.ctx) return;
        const bOsc = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();

        bOsc.type = 'sine';
        bOsc.frequency.setValueAtTime(bf, now + 0.4);

        bGain.gain.setValueAtTime(0.001, now + 0.4);
        bGain.gain.exponentialRampToValueAtTime(0.18 / (i + 1), now + 0.44);
        bGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

        bOsc.connect(bGain);
        bGain.connect(this.ctx.destination);

        bOsc.start(now + 0.4);
        bOsc.stop(now + 2.5);
      });
    } catch (e) {
      console.debug('Audio error', e);
    }
  }

  // Volley Bowstring sound
  public playBowstring() {
    this.playArjunaWarrior();
  }

  // Character-specific custom audio cues
  public playCharacterCue(characterId: string) {
    const id = characterId.toLowerCase();
    switch (id) {
      case 'arjuna':
        this.playArjunaWarrior();
        break;
      case 'krishna':
        this.playKrishnaDivine();
        break;
      case 'bhisma':
      case 'bhima':
        this.playBhishmaGreatness();
        break;
      case 'duryodhana':
        this.playDuryodhanaVillain();
        break;
      case 'yudhishthira':
        this.playYudhishthiraGreatKing();
        break;
      default:
        this.playArjunaWarrior();
    }
  }
}

export const battleAudio = new BattleAudioEngine();
