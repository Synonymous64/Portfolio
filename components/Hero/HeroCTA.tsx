'use client';

import Image from 'next/image';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import InstagramLogo from '@/public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';
import TwitterLogo from '@/public/images/svg/X-Twitter-Logo.svg';
import MoonImage from '@/public/images/png/moon.png';

import { motion } from 'framer-motion';
import ProjectButton from '../ui/ProjectButton';

import Leetcode from '@/public/images/svg/leetcode.svg';

const CV_URL = '/portfolio-main/public/Curriculum_vitae_Prajwal_Urkude.pdf';

export default function HeroCTA() {
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
            </span>{' '}
            I&apos;m
          </motion.span>

          <motion.h1
            className="font-display sparkle-item relative mb-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Prajwal Urkude
          </motion.h1>

          <motion.h2
            className="font-display mb-6 text-2xl font-medium text-muted-foreground md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="inline-block animate-shimmer bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </motion.h2>

          <motion.p
            className="font-body mx-auto mb-8 max-w-md text-lg md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="rounded-md bg-gradient-to-r from-violet-500/10 via-purple-500/20 to-indigo-500/10 py-1 backdrop-blur-sm">
              I build{' '}
              <span className="font-semibold text-violet-500">accessible</span>,{' '}
              <span className="font-semibold text-purple-500">responsive</span>,
              and{' '}
              <span className="font-semibold text-indigo-500">performant</span>{' '}
              web and app applications using modern technologies.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* <a href="#contact" className="font-display">
              <ProjectButton text={"Get in Touch"} />
            </a> */}

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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.5)',
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
                    className="opacity-70 transition-opacity hover:opacity-100"
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
          {/* Animated gradient backgrounds */}
          <div className="animate-pulse-glow absolute inset-0 -rotate-1 transform rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="animate-pulse-glow animation-delay-1000 absolute inset-0 rotate-1 transform rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10"></div>
          <div className="absolute inset-0 rounded-3xl backdrop-blur-[2px]"></div>

          {/* Moon container with parallax effect */}
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
              <Image
                src={MoonImage}
                alt="Moon"
                fill
                className="object-contain transition-all duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  filter:
                    'contrast(1.1) brightness(1.05) drop-shadow(0 0 25px rgba(139, 92, 246, 0.4))',
                  mixBlendMode: 'lighten',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Particle effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 backdrop-blur-[1px]"></div>
        </motion.div>
      </div>
    </section>
  );
}
