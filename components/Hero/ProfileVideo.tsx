'use client';

import { motion } from 'framer-motion';
import React from 'react';

// Immersive profile video container with animated rings, code symbols,
// pulsing backlight, and dynamic gradients. Designed to feel like a
// high-tech terminal surrounding your personal animation.

export default function ProfileVideo() {
  const FloatingSymbol = ({
    symbol,
    size = 'h-10 w-10',
    delay = 0,
    duration = 6,
  }: {
    symbol: string;
    size?: string;
    delay?: number;
    duration?: number;
  }) => (
    <motion.div
      className={`${size} absolute flex items-center justify-center rounded-md bg-gradient-to-br from-violet-600/20 to-cyan-400/20 text-white text-sm font-semibold`}
      animate={{
        y: [0, -20, 0],
        x: [0, 20, 0],
        rotate: [0, 360],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {symbol}
    </motion.div>
  );

  return (
    <motion.div
      className="relative h-full w-full rounded-3xl overflow-hidden perspective-1000"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.08 }}
    >
      {/* rotating backlight ring */}
      <motion.div
        className="absolute inset-0 rounded-3xl ring-8 ring-gradient animate-spin-slow pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #8b5cf6, #0ea5e9, #8b5cf6)',
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />

      {/* main video */}
      <video
        src="videos/pfpanimation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover filter brightness-90 contrast-110"
        onError={() =>
          console.warn('Unable to load /videos/pfpanimation.mp4. Confirm file exists in public/videos')
        }
      >
        <p className="text-white text-center">Video unavailable</p>
      </video>

      {/* pulsing circular gradient */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-indigo-500/10 to-transparent"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* floating code symbols */}
      <FloatingSymbol symbol="&lt;/&gt;" delay={0} duration={8} size="h-12 w-12" />
      <FloatingSymbol symbol="{ }" delay={1} duration={7} size="h-10 w-10" />
      <FloatingSymbol symbol="()" delay={2} duration={9} size="h-10 w-10" />
      <FloatingSymbol symbol="λ" delay={3} duration={6} size="h-10 w-10" />

      {/* subtle noise overlay */}
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-10" />
    </motion.div>
  );
}
