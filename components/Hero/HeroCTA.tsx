'use client';

import Image from 'next/image';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import InstagramLogo from '@/public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';
import TwitterLogo from '@/public/images/svg/X-Twitter-Logo.svg';
import MoonImage from '@/public/images/png/moon.png';
import Sample from '@/public/images/png/sample.png';

import { motion } from 'framer-motion';
import ProjectButton from '../ui/ProjectButton';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Leetcode from '@/public/images/svg/leetcode.svg';
import { SparklesText } from '../ui/SparkleText';

const CV_URL = '/Curriculum_vitae_Prajwal_Urkude.pdf';

export default function HeroCTA() {
  const professionalTitles = [
    'Full Stack Developer',
    'AI Researcher & Developer',
    'Web Developer',
    'App Developer',
    'UI/UX Designer',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Title transition timing
    const visibilityTimer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentTitleIndex(
          (prevIndex) => (prevIndex + 1) % professionalTitles.length,
        );
        setIsVisible(true);
      }, 600); // Wait for exit animation to complete
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(visibilityTimer);
  }, []);

  const socialLinks = [
    { icon: GithubLogo, url: 'https://github.com/Synonymous64' },
    { icon: TwitterLogo, url: 'https://x.com/PrajInMetaverse' },
    {
      icon: LinkedinLogo,
      url: 'https://www.linkedin.com/in/prajwal-urkude-8a1b6818b',
    },
    { icon: InstagramLogo, url: 'https://www.instagram.com/praj_in_metaverse' },
    { icon: Leetcode, url: 'https://leetcode.com/u/Synonymous/' },
  ];

  return (
    <section
      id="home"
      className="container relative mx-auto -mt-14 flex min-h-[80vh] flex-col justify-center overflow-hidden px-4 py-20 sm:-mt-20"
    >
      {/* Enhanced background with subtle cosmic effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] via-background to-background"></div>

      <div className="z-10 flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <motion.span
            className="font-display mb-2 block text-lg font-semibold text-primary md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello
            <span className="ml-1 inline-block origin-[70%_70%] animate-wave">
              👋
            </span>
            , I&apos;m
          </motion.span>

          <motion.h1
            className="font-display sparkle-item relative mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-4xl font-bold md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SparklesText>Prajwal Urkude</SparklesText>
          </motion.h1>

          {/* Title transition section */}
          <motion.div
            className="font-display mb-6 h-12 text-2xl font-medium text-muted-foreground md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.span
                  key={currentTitleIndex}
                  className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    y: { duration: 0.5 },
                  }}
                >
                  {professionalTitles[currentTitleIndex]}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="font-body mx-auto mb-8 max-w-md text-base leading-relaxed sm:text-lg md:mx-0 md:mb-10 md:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="inline-block rounded-md bg-gradient-to-r from-violet-500/15 via-fuchsia-500/20 to-indigo-500/15 px-3 py-2 md:px-4 md:py-2.5">
              I build{' '}
              <span className="font-semibold text-violet-400">accessible</span>,{' '}
              <span className="font-semibold text-fuchsia-400">responsive</span>{' '}
              and{' '}
              <span className="font-semibold text-indigo-400">performant</span>{' '}
              web and app applications using modern technologies.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href={CV_URL}
              download="Prajwal_Urkude_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!CV_URL) {
                  e.preventDefault();
                  alert('CV will be available soon!');
                }
              }}
            >
              <ProjectButton text={'Download CV'} />
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center space-x-4 md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-gradient-to-br hover:from-violet-500/20 hover:to-fuchsia-500/20"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <div className="relative h-5 w-5">
                  <Image
                    src={social.icon}
                    alt={`${social.url.split('/').pop()} icon`}
                    fill
                    className="opacity-70 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative h-64 w-full md:h-[500px] md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Moon container with improved blending */}
          <motion.div
            className="moon-container relative h-full w-full"
            whileHover={{ scale: 1.05 }}
            animate={{ rotate: [0, 2, 0] }}
            transition={{
              rotate: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <motion.div
              className="moon-glow absolute inset-0"
              whileHover={{ scale: 1.1 }}
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Moon image with improved blending */}
              <div className="relative h-full w-full">
                <Image
                  src={MoonImage}
                  alt="Moon"
                  fill
                  className="object-contain opacity-90 mix-blend-screen transition-all duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Ambient glow effect */}
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-indigo-500/5 blur-3xl" />
              </div>

              {/* Enhanced cosmic particles */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent opacity-70 mix-blend-screen blur-xl" />
              </div>
            </motion.div>
          </motion.div>

          {/* Animated star field */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`animate-twinkle absolute h-[2px] w-[2px] rounded-full bg-white/70`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
