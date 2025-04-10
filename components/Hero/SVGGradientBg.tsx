'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function DarkModeGradientBg() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { clientWidth, clientHeight } = document.documentElement;
        setDimensions({ width: clientWidth, height: clientHeight });
        canvasRef.current.width = clientWidth;
        canvasRef.current.height = clientHeight;
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let time = 0;
    const speed = 0.0005; // Very slow movement

    const drawGradient = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create a smooth, dark background
      ctx.fillStyle = '#0A0A0F';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create two subtle flowing gradients that move slowly
      const gradientPositions = [
        {
          x: canvas.width * (0.5 + 0.2 * Math.sin(time)),
          y: canvas.height * (0.5 + 0.1 * Math.cos(time * 0.7)),
        },
        {
          x: canvas.width * (0.5 + 0.15 * Math.cos(time * 0.8)),
          y: canvas.height * (0.5 + 0.2 * Math.sin(time * 0.5)),
        },
      ];

      // First gradient - deep purple/blue
      const gradient1 = ctx.createRadialGradient(
        gradientPositions[0].x,
        gradientPositions[0].y,
        0,
        gradientPositions[0].x,
        gradientPositions[0].y,
        canvas.width * 0.6,
      );

      gradient1.addColorStop(0, 'rgba(59, 36, 101, 0.7)');
      gradient1.addColorStop(0.5, 'rgba(43, 30, 82, 0.3)');
      gradient1.addColorStop(1, 'rgba(20, 17, 40, 0)');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Second gradient - subtle teal accent
      const gradient2 = ctx.createRadialGradient(
        gradientPositions[1].x,
        gradientPositions[1].y,
        0,
        gradientPositions[1].x,
        gradientPositions[1].y,
        canvas.width * 0.5,
      );

      gradient2.addColorStop(0, 'rgba(22, 72, 99, 0.6)');
      gradient2.addColorStop(0.6, 'rgba(17, 51, 73, 0.2)');
      gradient2.addColorStop(1, 'rgba(10, 20, 30, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add a soft vignette effect
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5,
      );

      vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');

      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add very subtle stars/specks in the background
      const starsCount = Math.floor((canvas.width * canvas.height) / 20000);

      for (let i = 0; i < starsCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.2;
        const opacity = Math.random() * 0.15 + 0.05;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }

      time += speed;
      animationFrameRef.current = requestAnimationFrame(drawGradient);
    };

    drawGradient();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
