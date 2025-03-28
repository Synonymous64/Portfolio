'use client';

import React from 'react';
import Image from 'next/image';
import AquaWolfPFP from '@/public/images/svg/aquawolf-pfp.svg';
import AboutMeImage from './AboutMeImage';

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0 pb-9">
      <h2 className="text-transparent">About Me</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 font-serif text-base leading-relaxed tracking-wide text-white/90 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <AboutMeImage />
            <p>
              Hello there! I&apos;m Prajwal, a passionate Full-Stack Developer from
              India, currently pursuing my Master&apos;s in Germany.
            </p>

            <p>
              My journey into the world of coding began in 2021 when I built
              TextUtils, a React-based text editor that sparked my love for web
              development. Since then, I&apos;ve been on an exciting path of
              continuous learning and growth.
            </p>

            <p>
              At IT-NETWORKZ Infosystem, I honed my skills as a Salesforce and
              web development intern, laying the foundation for my professional
              journey. Now, I&apos;m expanding my horizons in Germany while working
              on innovative projects that push the boundaries of what&apos;s possible
              in tech.
            </p>

            <p>
              My latest venture, E-Store, showcases my commitment to full-stack
              development and my passion for creating seamless user experiences.
              But what really drives me is the endless potential of combining
              modern technologies to solve real-world problems.
            </p>

            <p>So, now I&apos;m wearing multiple hats:</p>
            <ul className="list-disc pl-6">
              <li>Full-Stack Web and app Developer</li>
              <li>Researcher</li>
              <li>UI/UX Designer</li>
              <li>AI Tinkerer & Hacker</li>
              <li>Creative Problem Solver</li>
            </ul>

            <p>
              My mission is to bridge the gap between blockchain, AI, and
              human-centered design, creating experiences that are not just
              technically robust but also intuitive and meaningful.
            </p>

            <p>
              As I continue my academic journey in Germany, I&apos;m excited to
              collaborate with fellow developers and contribute to projects that
              make a difference. Whether it&apos;s discussing emerging technologies,
              exploring new frameworks, or diving into innovative solutions, I&apos;m
              always eager to connect and learn.
            </p>

            <p>Let&apos;s create something amazing together! 🚀</p>

            <div className="relative flex flex-col items-center gap-2">
              <div className="self-start">
                Building the future, one line of code at a time ✨
              </div>
            </div>

            <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
              <div className="text-white">Prajwal Urkude</div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
