'use client';

import React from 'react';

import GithubContributions from './GithubContribution';
import CertificateGallery from './Certificates/CertificateGallery';
import ResearchPapers from './Research/ResearchPapers';
import Tools from './Tools/Tools';

const Skills = () => {
  return (
    <div
      id="skills"
      className="mx-auto space-y-8 bg-gradient-to-br mt-5 mb-8"
    >
      <Tools />
      <GithubContributions />
      <CertificateGallery />
      <ResearchPapers />
    </div>
  );
};

export default Skills;
