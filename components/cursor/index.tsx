'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface CursorPosition {
  x: number;
  y: number;
}

export const CursorAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorPosRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const prevX = cursorPosRef.current.x;
      const prevY = cursorPosRef.current.y;

      cursorPosRef.current = { x: e.clientX, y: e.clientY };

      // Create particles on movement
      const distance = Math.hypot(e.clientX - prevX, e.clientY - prevY);
      if (distance > 5) {
        createParticles(e.clientX, e.clientY, 2);
      }
    };

    // Create particle burst
    const createParticles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = (Math.random() * Math.PI * 2);
        const velocity = 2 + Math.random() * 4;

        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          maxLife: 1,
          size: 2 + Math.random() * 3,
        });
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas completely for transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // Gravity

        // Reduce life
        particle.life -= 0.02;

        if (particle.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // Draw particle with glow
        const opacity = particle.life;

        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 20;
        ctx.fillStyle = `#00d4ff${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * opacity, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw cursor circle with magnetism effect
      const cursorSize = 15;
      const glowSize = 40;

      // Outer glow
      const gradient = ctx.createRadialGradient(
        cursorPosRef.current.x,
        cursorPosRef.current.y,
        0,
        cursorPosRef.current.x,
        cursorPosRef.current.y,
        glowSize
      );
      gradient.addColorStop(0, '#00d4ff80');
      gradient.addColorStop(1, '#0099ff00');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cursorPosRef.current.x, cursorPosRef.current.y, glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Inner cursor
      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 15;
      ctx.strokeStyle = '#00d4ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cursorPosRef.current.x, cursorPosRef.current.y, cursorSize, 0, Math.PI * 2);
      ctx.stroke();

      // Center dot
      ctx.fillStyle = '#00ffff';
      ctx.beginPath();
      ctx.arc(cursorPosRef.current.x, cursorPosRef.current.y, 4, 0, Math.PI * 2);
      ctx.fill();

      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        style={{ cursor: 'none' }}
      />
      <style jsx>{`
        body {
          cursor: none !important;
        }
        button,
        a,
        input,
        textarea,
        select,
        [role="button"],
        [onclick] {
          cursor: auto !important;
        }
      `}</style>
    </>
  );
};
