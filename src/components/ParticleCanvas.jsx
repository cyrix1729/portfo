import React, { useRef, useEffect, useState } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const THICKNESS = 6400; // 80^2
  const SPACING = 15;
  const COLOR = 0; // Black color
  const DRAG = 0.95;
  const EASE = 0.25;

  useEffect(() => {
    console.log('ParticleCanvas mounted.');
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      const w = canvas.width = window.innerWidth;
      const h = canvas.height = window.innerHeight;

      const COLS = Math.floor(w / SPACING);
      const ROWS = Math.floor(h / SPACING);
      const numParticles = COLS * ROWS;

      const particleArray = [];

      for (let i = 0; i < numParticles; i++) {
        const x = SPACING * (i % COLS);
        const y = SPACING * Math.floor(i / COLS);
        particleArray.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
      }

      particlesRef.current = particleArray;

    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
  
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    handleResize(); // Initial setup

    const step = () => {
      const { x: mx, y: my } = mouseRef.current;
      const particles = particlesRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mx - p.x;
        const dy = my - p.y;
        const d = dx * dx + dy * dy;

        if (d < THICKNESS) {
          const f = -THICKNESS / d;
          const t = Math.atan2(dy, dx);
          p.vx += f * Math.cos(t);
          p.vy += f * Math.sin(t);
        }

        p.vx *= DRAG;
        p.vy *= DRAG;
        p.x += p.vx + (p.ox - p.x) * EASE;
        p.y += p.vy + (p.oy - p.y) * EASE;

        ctx.fillStyle = `rgb(${COLOR}, ${COLOR}, ${COLOR})`;
        ctx.fillRect(p.x, p.y, 2, 2); // Particle size
      }

      requestAnimationFrame(step);
    };

    step();
      return () => {
        console.log('ParticleCanvas unmounted.');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'white'}} />
  );
};

export default ParticleCanvas;