// components/projects/OtherProjects.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';

interface OtherProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  externalLink?: string;
}

const otherProjects: OtherProject[] = [
  {
    id: 1,
    title: 'Weather Forecast App',
    description:
      'A minimalist weather app that provides accurate forecasts with beautiful UI and animations for different weather conditions.',
    technologies: ['React', 'OpenWeather API', 'CSS Animations'],
    githubLink: 'https://github.com/yourusername/weather-app',
    externalLink: 'https://weather-forecast-app.com',
  },
  {
    id: 2,
    title: 'Markdown Note Editor',
    description:
      'A browser-based markdown editor with real-time preview, syntax highlighting, and local storage integration.',
    technologies: ['Vue.js', 'Marked.js', 'LocalStorage API'],
    githubLink: 'https://github.com/yourusername/markdown-editor',
  },
  {
    id: 3,
    title: 'Recipe Finder',
    description:
      'Search for recipes based on ingredients you have. Features filtering by dietary restrictions and cuisine types.',
    technologies: ['React', 'Redux', 'Spoonacular API'],
    githubLink: 'https://github.com/yourusername/recipe-finder',
    externalLink: 'https://find-your-recipe.com',
  },
  {
    id: 4,
    title: 'Budget Tracker',
    description:
      'Personal finance application to track expenses, set budgets, and visualize spending patterns with interactive charts.',
    technologies: ['Next.js', 'Firebase', 'D3.js'],
    githubLink: 'https://github.com/yourusername/budget-tracker',
  },
  {
    id: 5,
    title: 'Portfolio Template',
    description:
      'A customizable portfolio template for developers with dark mode support and various layout options.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/yourusername/portfolio-template',
    externalLink: 'https://dev-portfolio-template.com',
  },
  {
    id: 6,
    title: 'Movie Recommendation Engine',
    description:
      'Get personalized movie recommendations based on your viewing history and preferences using machine learning algorithms.',
    technologies: ['Python', 'Flask', 'TensorFlow', 'TMDB API'],
    githubLink: 'https://github.com/yourusername/movie-recommendations',
  },
];

const OtherProjects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const totalProjects = otherProjects.length;

  const loadMoreProjects = () => {
    setVisibleProjects(Math.min(visibleProjects + 3, totalProjects));
  };

  return (
    <div className="mb-24">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-2xl font-bold text-slate-800 dark:text-slate-200"
      >
        Other Noteworthy Projects
      </motion.h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex h-full flex-col rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800"
            whileHover={{ y: -8 }}
          >
            <div className="mb-5 flex items-center justify-between">
              <FiFolder
                className="text-emerald-500 dark:text-emerald-400"
                size={40}
              />
              <div className="flex space-x-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    <FiGithub size={18} />
                  </a>
                )}

                {project.externalLink && (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h4 className="mb-3 text-xl font-bold text-slate-800 transition-colors group-hover:text-emerald-600 dark:text-slate-200 dark:group-hover:text-emerald-400">
              {project.title}
            </h4>

            <p className="mb-5 flex-grow text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <ul className="mt-auto flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <li
                  key={i}
                  className="font-mono text-xs text-slate-500 dark:text-slate-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {visibleProjects < totalProjects && (
        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMoreProjects}
            className="rounded-md bg-emerald-500 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-emerald-600"
          >
            Show More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default OtherProjects;
