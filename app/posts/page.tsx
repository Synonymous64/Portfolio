'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PostGrid from './PostGrid';


export default function Posts() {
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic background with multiple gradient layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90" />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMDIwMjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI5IDAgYTI5IDI5IDAgMSAwIDU4IDAgYTI5IDI5IDAgMSAwIC01OCAwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjI1Ii8+PC9nPjwvc3ZnPg==')] opacity-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Header section with enhanced typography */}
          <div className="mb-16 text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative inline-block text-6xl font-bold lg:text-7xl"
            >
              <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent opacity-70 blur-lg">
                Blogs
              </span>
              <span className="relative bg-gradient-to-r from-violet-400 via-fuchsia-300 to-pink-500 bg-clip-text text-transparent">
                Blogs
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl"
            >
              <p className="text-xl leading-relaxed text-gray-300/90 lg:text-2xl">
                Thoughts, ideas, and insights about web development, design, AI,
                and machine learning.
              </p>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-purple-500/0 via-pink-500 to-purple-500/0"
            />
          </div>

          {/* Main content area with enhanced visuals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            {/* Glass card effect for content */}
            <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl lg:p-10">
              {/* Animated inner glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-pink-500/20 opacity-70 blur-lg" />

              {/* Subtle shine effect on hover */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Content grid */}
              <div className="relative z-10">
                <PostGrid />
              </div>
            </div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-10 left-10 h-20 w-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-20 blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-gradient-to-bl from-blue-500 to-purple-600 opacity-20 blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </motion.div>

    </div>
  );
}
