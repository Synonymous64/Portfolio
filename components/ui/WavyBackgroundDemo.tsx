'use client';
import React from 'react';
import { WavyBackground } from '../ui/wavy-background';
import { motion } from 'framer-motion';

export function WavyBackgroundDemo() {
  return (
    <div className="mt-8 sm:mt-0"> {/* Added margin-top only for mobile */}
      <WavyBackground
        backgroundFill="#08080e"
        className="relative mx-auto max-w-5xl py-8 md:py-12"
        containerClassName="h-auto min-h-[40vh] md:min-h-[50vh]"
      >
        <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center space-y-3 md:space-y-4"
      >
        <div className="max-w-2xl px-4 md:max-w-3xl">
          <p className="inter-var text-center text-base md:text-lg lg:text-xl">
            <span className="mb-1 block font-light italic text-white/80">
              ❝
            </span>
            <span className="bg-gradient-to-r from-white via-purple-200 to-[#B17DE8] bg-clip-text text-transparent">
              Your website is the center of your digital ecosystem, like a brick
              and mortar location, the experience matters once a customer
              enters, just as much as the perception they have of you before
              they walk through the door.
            </span>
            <span className="mt-1 block font-light italic text-white/80">
              ❞
            </span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-3 flex items-center gap-2 md:mt-4"
        >
          <div className="h-px w-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent md:w-8" />
          <p className="inter-var text-xs font-light text-white/70 md:text-sm">
            Leland Dieno
          </p>
          <div className="h-px w-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent md:w-8" />
        </motion.div>
      </motion.div>
    </WavyBackground>
    </div>
  );
}
