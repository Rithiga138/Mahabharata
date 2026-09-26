import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, ShieldAlert } from 'lucide-react';
import { battleAudio } from '../utils/battleAudio';

interface Arrow {
  x: number;
  y: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  speed: number;
  progress: number;
  angle: number;
  size: number;
  isFlaming: boolean;
  trail: { x: number; y: number; alpha: number }[];
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export const AtmosphereBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [showWarControls, setShowWarControls] = useState(false);

  const toggleAudio = () => {
    battleAudio.isMuted = !isAudioMuted;
    setIsAudioMuted(!isAudioMuted);
    if (isAudioMuted) {
      battleAudio.playBowstring();
    }
  };

  const triggerVolleyRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Ambient floating embers & war dust
    const emberCount = 55;
    const embers: Particle[] = Array.from({ length: emberCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.45,
      speedY: -Math.random() * 0.65 - 0.2,
      opacity: Math.random() * 0.5 + 0.15,
      color: Math.random() > 0.4 ? 'rgba(212, 175, 55,' : 'rgba(220, 75, 40,',
    }));

    // Active battlefield arrows
    const arrows: Arrow[] = [];

    const spawnArrow = (direction: 'left-to-right' | 'right-to-left' = 'left-to-right') => {
      const isL2R = direction === 'left-to-right';
      const startX = isL2R ? -50 : width + 50;
      const startY = Math.random() * (height * 0.65) + 40;
      const targetX = isL2R ? width + 100 : -100;
      const targetY = startY + (Math.random() - 0.3) * 200;

      const angle = Math.atan2(targetY - startY, targetX - startX);
      const isFlaming = Math.random() > 0.45;

      arrows.push({
        x: startX,
        y: startY,
        startX,
        startY,
        targetX,
        targetY,
        speed: Math.random() * 0.012 + 0.008,
        progress: 0,
        angle,
        size: Math.random() * 10 + 28,
        isFlaming,
        trail: [],
      });
    };

    // Release volley
    const releaseVolley = () => {
      const count = Math.floor(Math.random() * 4) + 3;
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          spawnArrow(Math.random() > 0.3 ? 'left-to-right' : 'right-to-left');
        }, i * 180);
      }
    };

    triggerVolleyRef.current = releaseVolley;

    // Initial few arrows
    setTimeout(() => spawnArrow('left-to-right'), 800);
    setTimeout(() => spawnArrow('right-to-left'), 2200);

    // Volley interval: shoots volleys across the sky periodically
    const volleyTimer = setInterval(() => {
      if (document.hidden) return;
      releaseVolley();
    }, 6500);

    // Distant lightning/astra flash state
    let flashOpacity = 0;
    const triggerFlash = () => {
      flashOpacity = Math.random() * 0.12 + 0.04;
    };

    const flashTimer = setInterval(() => {
      if (Math.random() > 0.5) triggerFlash();
    }, 8000);

    // Draw silhouettes of distant Kurukshetra war camp/banners along the bottom
    const drawDistantWarSilhouette = () => {
      ctx.save();
      const horizonY = height - 70;

      // Distant war banner poles & chariot flags
      ctx.fillStyle = 'rgba(8, 9, 13, 0.85)';
      ctx.strokeStyle = 'rgba(180, 140, 70, 0.15)';
      ctx.lineWidth = 1;

      // Draw subtle ground gradient
      const groundGrad = ctx.createLinearGradient(0, horizonY - 40, 0, height);
      groundGrad.addColorStop(0, 'rgba(11, 12, 16, 0)');
      groundGrad.addColorStop(0.3, 'rgba(14, 16, 22, 0.85)');
      groundGrad.addColorStop(1, 'rgba(6, 7, 9, 0.98)');
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, horizonY - 40, width, height - horizonY + 40);

      // Distant fluttering pennants / spears along horizon
      const flagCount = Math.floor(width / 140);
      for (let i = 0; i < flagCount; i++) {
        const x = (i / flagCount) * width + 40;
        const poleHeight = 45 + (i % 5) * 12;
        const poleY = height - poleHeight;

        // Spear / standard pole
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(x, poleY);
        ctx.strokeStyle = 'rgba(140, 110, 60, 0.2)';
        ctx.stroke();

        // Spear tip glow
        ctx.beginPath();
        ctx.arc(x, poleY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.35)';
        ctx.fill();

        // Fluttering flag banner triangle
        ctx.beginPath();
        const wave = Math.sin(Date.now() * 0.003 + i) * 6;
        ctx.moveTo(x, poleY);
        ctx.lineTo(x + 22 + wave, poleY + 8);
        ctx.lineTo(x, poleY + 16);
        ctx.closePath();
        ctx.fillStyle = i % 2 === 0 ? 'rgba(128, 30, 30, 0.25)' : 'rgba(200, 157, 86, 0.2)';
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Distant celestial astra flash
      if (flashOpacity > 0.005) {
        ctx.fillStyle = `rgba(212, 175, 55, ${flashOpacity})`;
        ctx.fillRect(0, 0, width, height * 0.5);
        flashOpacity *= 0.94;
      }

      // 2. Rising embers and battlefield dust
      embers.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.opacity})`;
        ctx.shadowBlur = p.size > 2 ? 6 : 2;
        ctx.shadowColor = 'rgba(230, 120, 40, 0.6)';
        ctx.fill();
      });

      // 3. Render Battlefield Arrows in Flight
      for (let i = arrows.length - 1; i >= 0; i--) {
        const a = arrows[i];
        a.progress += a.speed;

        // Parabolic arc trajectory
        const curX = a.startX + (a.targetX - a.startX) * a.progress;
        const arcElevation = Math.sin(a.progress * Math.PI) * 70;
        const curY = a.startY + (a.targetY - a.startY) * a.progress - arcElevation;

        a.x = curX;
        a.y = curY;

        // Record trail points
        a.trail.push({ x: curX, y: curY, alpha: 1 });
        if (a.trail.length > 14) {
          a.trail.shift();
        }

        // Draw arrow flame/smoke trail
        ctx.save();
        for (let t = 0; t < a.trail.length - 1; t++) {
          const pt1 = a.trail[t];
          const pt2 = a.trail[t + 1];
          const ratio = t / a.trail.length;

          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          ctx.lineWidth = ratio * (a.isFlaming ? 3.5 : 1.8);

          if (a.isFlaming) {
            ctx.strokeStyle = `rgba(245, 140, 30, ${ratio * 0.75})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(255, 90, 0, 0.8)';
          } else {
            ctx.strokeStyle = `rgba(212, 175, 55, ${ratio * 0.5})`;
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
          }
          ctx.stroke();
        }
        ctx.restore();

        // Draw the arrow body & golden tip
        ctx.save();
        ctx.translate(curX, curY);

        // Approximate tangent angle from trajectory
        const tangentAngle = a.angle + (a.progress - 0.5) * 0.4;
        ctx.rotate(tangentAngle);

        // Arrow shaft
        ctx.beginPath();
        ctx.moveTo(-a.size, 0);
        ctx.lineTo(0, 0);
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = a.isFlaming ? 'rgba(255, 200, 100, 0.9)' : 'rgba(200, 180, 130, 0.8)';
        ctx.stroke();

        // Arrow head (triangular golden point)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-7, -3);
        ctx.lineTo(-4, 0);
        ctx.lineTo(-7, 3);
        ctx.closePath();
        ctx.fillStyle = a.isFlaming ? '#ffc837' : '#d4af37';
        ctx.shadowBlur = a.isFlaming ? 12 : 5;
        ctx.shadowColor = a.isFlaming ? '#ff4b1f' : '#c89d56';
        ctx.fill();

        // Feather fletching at the tail
        ctx.beginPath();
        ctx.moveTo(-a.size, 0);
        ctx.lineTo(-a.size + 6, -3.5);
        ctx.moveTo(-a.size, 0);
        ctx.lineTo(-a.size + 6, 3.5);
        ctx.strokeStyle = 'rgba(220, 200, 160, 0.7)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // If flaming, add spark particles at arrow head
        if (a.isFlaming && Math.random() > 0.4) {
          ctx.beginPath();
          ctx.arc(-2 + Math.random() * 4, (Math.random() - 0.5) * 4, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ff8800';
          ctx.fill();
        }

        ctx.restore();

        // Remove expired arrows
        if (a.progress >= 1 || curX > width + 120 || curX < -120 || curY > height + 80) {
          arrows.splice(i, 1);
        }
      }

      // 4. Render distant Kurukshetra war silhouette banners
      drawDistantWarSilhouette();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(volleyTimer);
      clearInterval(flashTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep atmospheric war vignette & dusk gradient - subtle to preserve background imagery visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/40 via-transparent to-[#06070a]/70" />
        
        {/* Subtle fiery battlefield horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#801e1e]/20 via-[#c89d56]/10 to-transparent pointer-events-none" />

        {/* Dynamic arrows and war dust canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 opacity-95" />
      </div>

      {/* Battlefield Ambience Floating Control in bottom-right */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={() => {
            if (triggerVolleyRef.current) {
              triggerVolleyRef.current();
              battleAudio.playBowstring();
            }
          }}
          title="Release Arrow Volley"
          id="release-arrows-btn"
          className="px-3 py-2 rounded-full bg-[#181a24]/90 hover:bg-[#222533] border border-[#c89d56]/40 text-[#c89d56] hover:text-[#ede6d6] shadow-lg text-[11px] font-['Cinzel'] font-bold tracking-wider flex items-center gap-1.5 transition-all backdrop-blur-sm group"
        >
          <span className="w-2 h-2 rounded-full bg-[#f59e0b] group-hover:animate-ping" />
          <span className="hidden sm:inline">Fire Volley</span>
          <span className="sm:hidden">🏹</span>
        </button>

        <button
          onClick={toggleAudio}
          title={isAudioMuted ? 'Unmute Epic War Audio' : 'Mute War Audio'}
          id="toggle-war-audio-btn"
          className="p-2.5 rounded-full bg-[#181a24]/90 hover:bg-[#222533] border border-[#c89d56]/40 text-[#c89d56] hover:text-[#ede6d6] shadow-lg transition-all backdrop-blur-sm"
        >
          {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#f59e0b]" />}
        </button>
      </div>
    </>
  );
};
