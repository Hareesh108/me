'use client';

import { useEffect, useRef } from 'react';

interface BackgroundParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  distance: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<BackgroundParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
const animationIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles
    const initializeParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      const colors = ['#00d4ff', '#0099ff', '#00ff88', '#ff00ff', '#00ffff', '#ff0099'];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          distance: 0,
        });
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };
    resizeCanvas();

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      // Clear with subtle trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];

        // Movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Distance to mouse
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        particle.distance = Math.hypot(dx, dy);

        // Repel from cursor
        const repelDistance = 200;
        if (particle.distance < repelDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (repelDistance - particle.distance) / repelDistance;
          particle.vx += Math.cos(angle) * force * 2;
          particle.vy += Math.sin(angle) * force * 2;

          // Increase opacity when near cursor
          particle.opacity = Math.min(1, particle.opacity + 0.02);
        } else {
          particle.opacity = Math.max(0.2, particle.opacity - 0.01);
        }

        // Draw particle
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `#00d4ff${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{ background: 'transparent' }}
    />
  );
};
