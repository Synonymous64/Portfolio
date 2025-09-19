'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import createGlobe from 'cobe';
import PythonLogo from '@/public/images/svg/Python-Logo.svg';
import TailwindCSSLogo from '@/public/images/svg/Tailwind-Logo.svg';
import ReactLogo from '@/public/images/svg/react-logo.svg';
import TypescriptLogo from '@/public/images/svg/TS-Logo.svg';
import FigmaLogo from '@/public/images/svg/figma-logo.svg';
import VercelLogo from '@/public/images/svg/Vercel-Logo.svg';
import EthereumLogo from '@/public/images/svg/ethereum-logo.svg';
import SolidityLogo from '@/public/images/svg/solidity-logo.svg';
import EthersJSLogo from '@/public/images/svg/ethersjs-logo.svg';
import OpenAILogo from '@/public/images/svg/openai-logo.svg';
import blender from '@/public/images/svg/blender.svg';
import bootstrap from '@/public/images/svg/bootstrap.svg';
import cpp from '@/public/images/svg/cpp.svg';
import java from '@/public/images/svg/java.svg';
import CSS from '@/public/images/svg/CSS.svg';
import HTML from '@/public/images/svg/HTML.svg';
import express from '@/public/images/svg/express.svg';
import gatsby from '@/public/images/svg/gatsby.svg';
import github from '@/public/images/svg/github.svg';
import langchain from '@/public/images/svg/langchain.svg';
import MaterialUI from '@/public/images/svg/MaterialUI.svg';
import mongodb from '@/public/images/svg/mongodb.svg';
import mysql from '@/public/images/svg/mysql.svg';
import nodejs from '@/public/images/svg/nodejs.svg';
import prisma from '@/public/images/svg/prisma.svg';
import redis from '@/public/images/svg/redis.svg';
import redux from '@/public/images/svg/redux.svg';
import supabase from '@/public/images/svg/supabase.svg';
import vite from '@/public/images/svg/vite.svg';
import vscode from '@/public/images/svg/vscode.svg';

import {
  Book,
  Code,
  Github,
  Chrome,
  Gamepad2,
  Dumbbell,
  Music,
  BookOpen,
  Mountain,
  Camera,
  Palette,
  Plane,
  Coffee,
  Utensils,
  Mic2,
  Brain,
  Dog,
  HeartHandshake,
} from 'lucide-react';

// Add this interface near the top of the file
interface Logo {
  src: string;
  alt: string;
  name: string;
  width: number;
  height: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.64, 0.04, 0.35, 1],
    },
  }),
};

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(0);
  const isHovered = useRef(false);

  useEffect(() => {
    let width = 0;
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.8,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1], // Bright blue marker
      glowColor: [0.8, 0.8, 1], // Bluish white glow
      markers: [
        // Berlin, Germany with larger marker
        { location: [52.5200, 13.4050], size: 0.15 }
      ],
      onRender: (state) => {
        // Faster rotation speed when not hovered
        state.phi = phi.current;
        state.theta = 0.8;
        phi.current += isHovered.current ? 0.003 : 0.01; // 3x faster rotation
      }
    });

    const canvas = canvasRef.current!;
    canvas.onmouseenter = () => { isHovered.current = true; };
    canvas.onmouseleave = () => { isHovered.current = false; };

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full transition-opacity duration-300 hover:opacity-100"
      style={{
        cursor: 'grab',
        contain: 'layout paint size',
        opacity: 0.8,
      }}
    />
  );
};

const MapSection = () => (
  <motion.div
    variants={cardVariants}
    custom={3}
    className="glass-card relative overflow-hidden rounded-3xl p-0 lg:col-span-4"
    style={
      {
        height: '400px',
        '--glow-color': 'rgba(56, 189, 248, 0.3)',
      } as React.CSSProperties
    }
  >
    <div className="card-glow group-hover:opacity-100" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50">
      <Globe />
    </div>
  </motion.div>
);

const LogoMarquee = ({ logos }: { logos: Logo[] }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="marquee-container h-20 py-4">
        <div className="marquee-content">
          <div className="logo-group">
            {logos.map((logo, idx) => (
              <motion.div
                key={`${logo.name}-${idx}`}
                className="logo-item"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  filter: 'brightness(1.3)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </motion.div>
            ))}
          </div>
          <div className="logo-group">
            {logos.map((logo, idx) => (
              <motion.div
                key={`${logo.name}-${idx}-duplicate`}
                className="logo-item"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  filter: 'brightness(1.3)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logos.map((logo) => (
          <motion.span
            key={logo.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            className="rounded-full border border-white/5 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-300 backdrop-blur-sm transition-colors duration-300"
          >
            {logo.name}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export function FeatureSection() {
  const logos: Logo[] = [
    {
      src: TypescriptLogo,
      alt: 'TypeScript Logo',
      name: 'TypeScript',
      width: 30,
      height: 30,
    },
    {
      src: cpp,
      alt: 'C++ Logo',
      name: 'C++',
      width: 30,
      height: 30,
    },
    {
      src: java,
      alt: 'Java Logo',
      name: 'Java',
      width: 30,
      height: 30,
    },
    {
      src: EthereumLogo,
      alt: 'Ethereum Logo',
      name: 'Ethereum',
      width: 30,
      height: 30,
    },
    {
      src: SolidityLogo,
      alt: 'Solidity Logo',
      name: 'Solidity',
      width: 30,
      height: 30,
    },
    {
      src: EthersJSLogo,
      alt: 'Ethers.js Logo',
      name: 'Ethers.js',
      width: 30,
      height: 30,
    },
    {
      src: OpenAILogo,
      alt: 'OpenAI Logo',
      name: 'AI/ML',
      width: 30,
      height: 30,
    },
    { src: ReactLogo, alt: 'React Logo', name: 'React', width: 30, height: 30 },
    {
      src: VercelLogo,
      alt: 'Vercel Logo',
      name: 'Vercel',
      width: 30,
      height: 30,
    },
    {
      src: TailwindCSSLogo,
      alt: 'Tailwind CSS Logo',
      name: 'Tailwind CSS',
      width: 30,
      height: 30,
    },
    {
      src: PythonLogo,
      alt: 'Python Logo',
      name: 'Python',
      width: 30,
      height: 30,
    },
    { src: FigmaLogo, alt: 'Figma Logo', name: 'Figma', width: 23, height: 23 },
    {
      src: blender,
      alt: 'Blender Logo',
      name: 'Blender',
      width: 23,
      height: 23,
    },
    {
      src: bootstrap,
      alt: 'Bootstrap Logo',
      name: 'Bootstrap',
      width: 23,
      height: 23,
    },
    { src: CSS, alt: 'CSS Logo', name: 'CSS', width: 23, height: 23 },
    { src: HTML, alt: 'HTML Logo', name: 'HTML', width: 23, height: 23 },
    {
      src: express,
      alt: 'Express Logo',
      name: 'Express',
      width: 23,
      height: 23,
    },
    { src: gatsby, alt: 'Gatsby Logo', name: 'Gatsby', width: 23, height: 23 },
    { src: github, alt: 'Github Logo', name: 'Github', width: 23, height: 23 },
    {
      src: langchain,
      alt: 'Langchain Logo',
      name: 'Langchain',
      width: 23,
      height: 23,
    },
    {
      src: MaterialUI,
      alt: 'Material UI Logo',
      name: 'Material UI',
      width: 23,
      height: 23,
    },
    {
      src: mongodb,
      alt: 'Mongodb Logo',
      name: 'Mongodb',
      width: 23,
      height: 23,
    },
    { src: mysql, alt: 'MySql Logo', name: 'MySql', width: 23, height: 23 },
    { src: nodejs, alt: 'Nodejs Logo', name: 'Nodejs', width: 23, height: 23 },
    { src: prisma, alt: 'Prisma Logo', name: 'Prisma', width: 23, height: 23 },
    { src: redis, alt: 'Redis Logo', name: 'Redis', width: 23, height: 23 },
    { src: redux, alt: 'Redux Logo', name: 'Redux', width: 23, height: 23 },
    {
      src: supabase,
      alt: 'Supabase Logo',
      name: 'Supabase',
      width: 23,
      height: 23,
    },
    { src: vite, alt: 'Vite Logo', name: 'Vite', width: 23, height: 23 },
    { src: vscode, alt: 'Vscode Logo', name: 'Vscode', width: 23, height: 23 },
  ];
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = Array.from(document.getElementsByClassName('glass-card'));
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16"
      onMouseMove={handleMouseMove}
    >
      <div className="feature-grid">
        {/* My Reads Section */}
        <motion.div
          variants={cardVariants}
          custom={0}
          className="glass-card hover-lift group flex flex-col rounded-3xl p-6 sm:p-8 lg:col-span-4"
          style={
            { '--glow-color': 'rgba(147, 51, 234, 0.3)' } as React.CSSProperties
          }
        >
          <div className="card-glow group-hover:opacity-100" />
          <SectionTitle
            icon={<Book className="h-6 w-6 text-purple-500" />}
            title="My Reads"
          />
          <p className="mb-8 mt-2 text-muted-foreground">
            Explore the books shaping my perspectives.
          </p>
          <div className="relative flex h-[300px] w-full items-center justify-center">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                translateZ: 20,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="perspective-1000 relative w-[200px] transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl" />
              <Image
                src="/images/jpeg/BookImage.jpg"
                alt="Atomic Habits book cover"
                width={350}
                height={350}
                className="relative h-full w-full rounded-lg object-cover shadow-2xl transition-transform duration-300 will-change-transform hover:shadow-purple-500/20"
                priority
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
            </motion.div>
          </div>
        </motion.div>

        {/* My Toolbox Section */}
        <motion.div
          variants={cardVariants}
          custom={1}
          className="glass-card hover-lift group flex flex-col rounded-3xl p-6 sm:p-8 lg:col-span-8"
          style={
            { '--glow-color': 'rgba(59, 130, 246, 0.3)' } as React.CSSProperties
          }
        >
          <div className="card-glow group-hover:opacity-100" />
          <SectionTitle
            icon={<Code className="h-6 w-6 text-blue-500" />}
            title="My Toolbox"
          />
          <p className="mb-8 mt-2 text-muted-foreground">
            Explore the technologies and tools I use to craft exceptional
            digital experiences.
          </p>
          <div className="flex flex-col gap-6">
            <LogoMarquee logos={logos} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap justify-center gap-2 text-xs text-slate-400"
            ></motion.div>
          </div>
        </motion.div>

        {/* Beyond the Code Section */}
        <motion.div
          variants={cardVariants}
          custom={2}
          className="glass-card hover-lift group flex flex-col rounded-3xl p-6 sm:p-8 lg:col-span-8"
          style={
            { '--glow-color': 'rgba(236, 72, 153, 0.3)' } as React.CSSProperties
          }
        >
          <div className="card-glow group-hover:opacity-100" />
          <SectionTitle
            icon={<Camera className="h-6 w-6 text-primary" />}
            title="Beyond the Code"
          />
          <p className="mb-6 mt-2 text-muted-foreground">
            Explore my interests and hobbies beyond the digital realm.
          </p>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HobbyPill
                  icon={hobby.icon}
                  name={hobby.name}
                  emoji={hobby.emoji}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Replace the existing Map Section with this */}
        <MapSection />
      </div>
    </motion.div>
  );
}

const SectionTitle = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <div className="flex items-center gap-2">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="icon-glow"
    >
      {icon}
    </motion.div>
    <h2 className="text-2xl font-medium text-white">{title}</h2>
  </div>
);

// Update Tool component
const Tool = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-800/50 p-4 shadow-md backdrop-blur-sm transition-colors duration-300 hover:bg-slate-700/50"
  >
    {icon}
    <span className="text-sm text-white/90 sm:text-base">{name}</span>
  </motion.div>
);

// Update HobbyPill component
const HobbyPill = ({
  icon,
  name,
  emoji,
}: {
  icon: React.ReactNode;
  name: string;
  emoji: string;
}) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      y: -5,
      transition: { type: 'spring', stiffness: 300 },
    }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/50 px-4 py-2 text-sm text-white/90 shadow-md backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-slate-700/50"
  >
    <motion.span
      animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className="text-lg"
    >
      {emoji}
    </motion.span>
    <span className="flex items-center gap-1.5">
      {icon}
      {name}
    </span>
  </motion.div>
);

const hobbies = [
  // {
  //   icon: <Camera className="text-pink-400" />,
  //   name: 'Photography',
  //   emoji: '📸',
  // },
  {
    icon: <Gamepad2 className="text-green-400" />,
    name: 'Gaming',
    emoji: '🎮',
  },
  {
    icon: <Dumbbell className="text-red-400" />,
    name: 'Fitness',
    emoji: '💪',
  },
  {
    icon: <Mountain className="text-blue-400" />,
    name: 'Hiking',
    emoji: '🏔️',
  },
  {
    icon: <Music className="text-purple-400" />,
    name: 'Music',
    emoji: '🎸',
  },
  {
    icon: <BookOpen className="text-yellow-400" />,
    name: 'Reading',
    emoji: '📚',
  },
  // {
  //   icon: <Palette className="text-orange-400" />,
  //   name: 'Art',
  //   emoji: '🎨',
  // },
  {
    icon: <Plane className="text-sky-400" />,
    name: 'Travel',
    emoji: '✈️',
  },
  // {
  //   icon: <Coffee className="text-amber-400" />,
  //   name: 'Café Hopping',
  //   emoji: '☕',
  // },
  {
    icon: <Utensils className="text-red-500" />,
    name: 'Cooking',
    emoji: '👨‍🍳',
  },

  // {
  //   icon: <Mic2 className="text-rose-400" />,
  //   name: 'Podcasting',
  //   emoji: '🎙️',
  // },
  // {
  //   icon: <Brain className="text-emerald-400" />,
  //   name: 'Philosophy',
  //   emoji: '🤔',
  // },

  // {
  //   icon: <Dog className="text-amber-500" />,
  //   name: 'Pet Care',
  //   emoji: '🐕',
  // },
  // {
  //   icon: <HeartHandshake className="text-red-400" />,
  //   name: 'Volunteering',
  //   emoji: '🤝',
  // },
];
