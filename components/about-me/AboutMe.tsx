'use client';

import React from 'react';
import Letter from './Letter';
import SectionHeading from '../SectionHeading';

import { FeatureSection } from '../ui/FeatureSectionDemo';

export default function AboutMe() {
  return (
    <div id="about" className="mx-auto max-w-[1000px] space-y-12 px-4">
      <SectionHeading
        heading="Who is Prajwal Urkude?"
        subheading="Full-Stack Developer & AI Enthusiast crafting seamless digital experiences with modern technologies"
      />
      <Letter />

      <SectionHeading subheading="Learn more about who I am, what I do and what inspires me! 🚀" />

      <FeatureSection />
    </div>
  );
}
