'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGithub,
  FiExternalLink,
  FiFolder,
  FiChevronDown,
  FiCode,
  FiSmartphone,
  FiServer,
  FiDatabase,
} from 'react-icons/fi';
import Image from 'next/image';
import PROJECTS from './ProjectData';

// Enhanced project interfaces with categories
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'blockchain' | 'ai' | 'devops';
  github?: string;
  external?: string;
  year: string;
  featured?: boolean;
  archived?: boolean;
  image?: string;
}

// Sample data with clear categorization

// Category icons mapping
const CATEGORY_ICONS = {
  web: <FiCode className="text-blue-400" />,
  mobile: <FiSmartphone className="text-green-400" />,
  blockchain: <FiDatabase className="text-purple-400" />,
  ai: <FiServer className="text-red-400" />,
  devops: <FiServer className="text-yellow-400" />,
};

const ProjectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'other' | 'archive'>(
    'featured',
  );
  const [visibleArchiveProjects, setVisibleArchiveProjects] = useState(4);

  // Filter projects by category
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter(
    (project) => !project.featured && !project.archived,
  );
  const archiveProjects = PROJECTS.filter((project) => project.archived);

  const loadMoreArchiveProjects = () => {
    setVisibleArchiveProjects((prev) =>
      Math.min(prev + 4, archiveProjects.length),
    );
  };

  return (
    <section className="relative bg-gradient-to-br py-20" id="projects">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Explore my work across different domains and technologies
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-gray-700 bg-gray-800/50 p-1 backdrop-blur-sm">
            {[
              { id: 'featured', label: 'Featured' },
              { id: 'other', label: 'Other Work' },
              { id: 'archive', label: 'Archive' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as 'featured' | 'other' | 'archive')
                }
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects content */}
        <AnimatePresence mode="wait">
          {activeTab === 'featured' && (
            <motion.div
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-32">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'other' && (
            <motion.div
              key="other"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project, index) => (
                  <OtherProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'archive' && (
            <motion.div
              key="archive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-purple-300">
                  Project Archive
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>
                    Showing{' '}
                    {Math.min(visibleArchiveProjects, archiveProjects.length)}{' '}
                    of {archiveProjects.length} projects
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {archiveProjects
                  .slice(0, visibleArchiveProjects)
                  .map((project) => (
                    <ArchiveProjectCard key={project.id} project={project} />
                  ))}
              </div>

              {visibleArchiveProjects < archiveProjects.length && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={loadMoreArchiveProjects}
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-purple-500/40"
                  >
                    Load More <FiChevronDown className="mt-0.5" />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Featured Project Card Component
const FeaturedProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Project Image Container */}
      <div
        className={`relative col-span-1 overflow-hidden rounded-xl lg:col-span-7 ${
          isEven ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <a
          href={project.external || project.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="perspective-1000 group relative block h-full"
          aria-label={`View ${project.title} project`}
        >
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:opacity-70"></div>

          {/* Ambient Background Effect */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 transition-opacity duration-300 group-hover:opacity-50"></div>
          {project.image && (
  <motion.div
    className="relative w-full overflow-hidden sm:h-auto lg:h-auto"
    initial={{ scale: 1 }}
    whileHover={{ scale: 1 }}
  >
    <div className="aspect-video relative">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain transition-all duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        quality={95}
        priority={index < 2}
      />

      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:opacity-70" />

      {/* Shine effect */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100" />
    </div>
  </motion.div>
)}

          {/* Enhanced Project Label */}
          <motion.div
            className="absolute bottom-0 left-0 z-20 p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-purple-500/90">
              {CATEGORY_ICONS[project.category]}
              Featured Project
            </span>
          </motion.div>
        </a>
      </div>

      {/* Project Info with Enhanced Mobile Responsiveness */}
      <div
        className={`col-span-1 lg:col-span-5 ${
          isEven ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'
        }`}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mb-2 flex items-center gap-2 text-sm text-purple-400">
            {CATEGORY_ICONS[project.category]}
            <span>{project.category.toUpperCase()}</span>
          </div>

          <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            <a
              href={project.external || project.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-300"
            >
              {project.title}
            </a>
          </h3>

          <div className="mb-6 rounded-xl bg-gray-800/70 p-6 shadow-2xl backdrop-blur-sm">
            <p className="text-gray-300">{project.description}</p>
          </div>

          <ul
            className={`mb-6 flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'lg:justify-end'}`}
          >
            {project.technologies.map((tech) => (
              <motion.li
                key={tech}
                className="rounded-full bg-gray-800/50 px-3 py-1 font-mono text-xs text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.li>
            ))}
          </ul>

          <div
            className={`flex gap-4 ${isEven ? 'justify-start' : 'lg:justify-end'}`}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-4 py-2 text-sm text-gray-300 transition-all hover:bg-purple-600/30 hover:text-white"
                whileHover={{ y: -2 }}
                aria-label="View on GitHub"
              >
                <FiGithub size={18} /> Code
              </motion.a>
            )}
            {project.external && (
              <motion.a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600/80 to-violet-500/80 px-4 py-2 text-sm text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-105"
                whileHover={{ y: -2 }}
                aria-label="View live demo"
              >
                <FiExternalLink size={18} /> Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Other Project Card Component
const OtherProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  return (
    <motion.div
      className="flex h-full flex-col rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-lg bg-gradient-to-br from-purple-600/30 to-violet-500/30 p-3">
          {CATEGORY_ICONS[project.category]}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all hover:scale-110 hover:text-purple-300"
              whileHover={{ y: -2 }}
              aria-label="GitHub repository"
            >
              <FiGithub size={20} />
            </motion.a>
          )}
          {project.external && (
            <motion.a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all hover:scale-110 hover:text-purple-300"
              whileHover={{ y: -2 }}
              aria-label="Live demo"
            >
              <FiExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      <h3 className="mb-3 text-xl font-bold text-white transition-colors hover:text-purple-300">
        <a
          href={project.external || project.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
      </h3>

      <p className="mb-6 flex-grow text-gray-400">{project.description}</p>

      <div className="mt-auto">
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <motion.li
              key={tech}
              className="rounded-full bg-gray-700/50 px-3 py-1 font-mono text-xs text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Archive Project Card Component
const ArchiveProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      className="rounded-xl border border-gray-700/50 bg-gray-800/30 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-purple-900/30 p-2">
            {CATEGORY_ICONS[project.category]}
          </div>
          <span className="text-sm text-gray-400">{project.year}</span>
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-purple-300"
              aria-label="GitHub repository"
            >
              <FiGithub size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mt-4 text-lg font-medium text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-700/50 px-2 py-1 text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="rounded-full bg-gray-700/50 px-2 py-1 text-xs text-gray-300">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectSection;
