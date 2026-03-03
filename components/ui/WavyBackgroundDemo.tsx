'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchAndCacheQuote, DeveloperQuote } from '@/lib/quotes';

export function WavyBackgroundDemo() {
  const [quote, setQuote] = useState<DeveloperQuote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuote = async () => {
      const dailyQuote = await fetchAndCacheQuote(1);
      setQuote(dailyQuote);
      setLoading(false);
    };
    loadQuote();
  }, []);

  if (loading) {
    return (
      <div className="relative flex h-96 items-center justify-center overflow-hidden py-16 md:py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-400 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Wavy background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.2, pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            d="M0,192L48,213.3C96,235,192,277,288,277.3C384,277,480,235,576,224C672,213,768,235,864,229.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#gradient1)"
            strokeWidth="3"
            stroke="#8b5cf6"
          />
          <motion.path
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.3, pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.2, ease: 'easeInOut' }}
            d="M0,320L48,293.3C96,267,192,213,288,202.7C384,192,480,224,576,229.3C672,235,768,213,864,181.3C960,149,1056,107,1152,128C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#gradient2)"
            strokeWidth="2"
            stroke="#a78bfa"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Quote content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4 md:space-y-8"
      >
        {quote && (
          <div className="max-w-2xl rounded-2xl border border-purple-400/20 bg-black/30 p-8 shadow-xl backdrop-blur-sm md:max-w-3xl md:p-10">
            {/* Large decorative quote mark */}
            <span className="mb-3 block text-center font-serif text-5xl text-purple-300 md:text-6xl">
              ❝
            </span>

            <p className="inter-var text-center text-lg leading-relaxed md:text-xl lg:text-2xl">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text font-medium text-transparent">
                {quote.text}
              </span>
            </p>

            {/* Bottom decorative quote mark */}
            <span className="mt-3 block text-center font-serif text-5xl text-purple-300 md:text-6xl">
              ❞
            </span>
          </div>
        )}

        {quote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <p className="inter-var text-sm font-medium tracking-wider text-white md:text-base">
              {quote.author}
            </p>
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </motion.div>
        )}

        {quote?.title && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs italic text-purple-200/70 md:text-sm"
          >
            {quote.title}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.7, duration: 1.5 }}
        className="absolute -left-12 top-1/4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600/20 to-transparent blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.9, duration: 1.5 }}
        className="absolute -right-12 bottom-1/4 h-32 w-32 rounded-full bg-gradient-to-tl from-purple-600/20 to-transparent blur-2xl"
      />
    </div>
  );
}
