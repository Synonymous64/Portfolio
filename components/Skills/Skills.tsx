'use client';

import React, { useState } from 'react';
import {
  Code,
  Database,
  Laptop,
  Server,
  Globe,
  PenTool,
  Layout,
  GitBranch,
  GitCommit,
  BookOpen,
  Rocket,
} from 'lucide-react';

import GithubContributions from './GithubContribution';
import CertificateGallery from './Certificates/CertificateGallery';

const toolIcons = {
  HTML: Globe,
  CSS: Layout,
  SCSS: PenTool,
  JavaScript: BookOpen,
  TypeScript: Code,
  'C++': Laptop,
  EJS: Server,
  React: Globe,
  Redux: Rocket,
  'Tailwind CSS': Layout,
  'Next.js': Code,
  'Vue.js': Globe,
  GSAP: PenTool,
  'Redux Toolkit': Rocket,
  'Ant Design': Layout,
  Bootstrap: Layout,
  'Material UI': PenTool,
  Shadcn: Code,
  'Next UI': Code,
  NodeJs: Server,
  ExpressJs: Server,
  Sockets: Rocket,
  Appwrite: Database,
  Firebase: Rocket,
  Supabase: Database,
  Stripe: GitCommit,
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Database,
  SQLite: Database,
  Git: GitBranch,
  GitHub: GitBranch,
  Jest: Code,
  Postman: Laptop,
  Prisma: Database,
  'Strapi CMS': Server,
};

const categoryIcons = [
  Laptop, // Frontend
  Server, // Backend
  Database, // Database Management
  GitBranch, // Others
];

const categoryColors = [
  'from-blue-500 to-purple-600',
  'from-green-500 to-teal-600',
  'from-red-500 to-orange-600',
  'from-indigo-500 to-pink-600',
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TOOLS_DATA = [
    {
      category: 'Frontend Development',
      tools: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'TypeScript',
        'C++',
        'EJS',
        'React',
        'Redux',
        'Tailwind CSS',
        'Next.js',
        'Vue.js',
        'GSAP',
        'Redux Toolkit',
        'Ant Design',
        'Bootstrap',
        'Material UI',
        'Shadcn',
        'Next UI',
      ],
    },
    {
      category: 'Backend Development',
      tools: [
        'NodeJs',
        'ExpressJs',
        'Sockets',
        'Appwrite',
        'Prisma',
        'Firebase',
        'Supabase',
        'Strapi CMS',
        'Stripe',
      ],
    },
    {
      category: 'Database Management',
      tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    },
    {
      category: 'Others',
      tools: ['Git', 'GitHub', 'Jest', 'Postman'],
    },
  ];

  return (
    <div
      id="skills"
      className="mx-auto max-w-[1200px] space-y-12 bg-gradient-to-br"
    >
      <div className="mb-12 text-center">
        <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent">
          My Technical Arsenal
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-300">
          A curated collection of tools and technologies I&apos;ve leveraged to
          craft innovative digital solutions
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Category Buttons */}
        <div className="space-y-4 md:w-1/4">
          {TOOLS_DATA.map((item, index) => {
            const IconComponent = categoryIcons[index];

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group flex w-full items-center gap-3 rounded-xl px-6 py-3 text-left transition-all duration-300 ${
                  activeIndex === index
                    ? `bg-gradient-to-r ${categoryColors[index]} text-white shadow-lg`
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                } `}
              >
                {IconComponent && (
                  <IconComponent
                    className={` ${
                      activeIndex === index
                        ? 'text-white'
                        : 'text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200'
                    } `}
                    size={24}
                  />
                )}
                <span className="font-medium">{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div className="md:w-3/4">
          {TOOLS_DATA.map(
            (item, index) =>
              activeIndex === index && (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900"
                >
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {item.tools.map((tool, toolIndex) => {
                      const IconComponent =
                        toolIcons[tool as keyof typeof toolIcons];
                      return (
                        <li
                          key={toolIndex}
                          className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-100 p-3 transition-all duration-300 hover:scale-105 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                        >
                          {IconComponent && (
                            <IconComponent
                              className="text-neutral-600 dark:text-neutral-300"
                              size={24}
                            />
                          )}
                          <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                            {tool}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ),
          )}
        </div>
      </div>
      <GithubContributions />
      <CertificateGallery />
    </div>
  );
};

export default Skills;
