// components/projects/FeaturedProjects.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  externalLink?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Content Generator',
    description:
      "A full-stack application that leverages OpenAI's GPT models to generate high-quality content for various purposes. Features include user authentication, content history, and export options.",
    image: '/images/projects/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'TailwindCSS'],
    githubLink: 'https://github.com/yourusername/ai-content-generator',
    externalLink: 'https://ai-content-generator.com',
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description:
      'A comprehensive dashboard for e-commerce store owners with real-time analytics, inventory management, and order processing. Includes dark mode and responsive design for all devices.',
    image: '/images/projects/project2.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Chart.js'],
    githubLink: 'https://github.com/yourusername/ecommerce-dashboard',
  },
  {
    id: 3,
    title: 'Crypto Portfolio Tracker',
    description:
      'A real-time cryptocurrency portfolio tracker that allows users to monitor their investments, track performance, and receive alerts based on price movements.',
    image: '/images/projects/project3.jpg',
    technologies: ['React', 'Redux', 'Firebase', 'CoinGecko API', 'Recharts'],
    githubLink: 'https://github.com/yourusername/crypto-tracker',
    externalLink: 'https://crypto-portfolio-tracker.com',
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <div className="mb-24">
      <h3 className="mb-12 text-center text-2xl font-bold text-slate-800 dark:text-slate-200">
        Featured Projects
      </h3>

      <div className="space-y-32">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}
          >
            {/* Project Image with Overlay */}
            <div className="group relative w-full md:w-7/12">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-emerald-100 dark:bg-emerald-900/20">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-emerald-600/10 transition-all duration-300 group-hover:bg-transparent dark:bg-emerald-400/10"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Project Info */}
            <div
              className={`relative z-10 w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
            >
              <p className="mb-1 font-mono text-emerald-600 dark:text-emerald-400">
                Featured Project
              </p>
              <h4 className="mb-4 text-xl font-bold text-slate-800 dark:text-slate-200 md:text-2xl">
                {project.title}
              </h4>

              <div className="mb-4 rounded-lg bg-slate-100 p-6 shadow-lg dark:bg-slate-800">
                <p className="text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
              </div>

              <ul
                className={`mb-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                {project.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="font-mono text-sm text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div
                className={`flex gap-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                )}

                {project.externalLink && (
                  <motion.a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
