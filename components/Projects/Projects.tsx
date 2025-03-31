'use client';

import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';

// export interface Project {
//   title: string;
//   description: string;
//   imageUrl: string;
//   date: string;
//   tags: string[];
//   links: {
//     title: string;
//     url: string;
//   }[];
//   fullDescription: string;
//   slug: string;
// }

// export const projectsData: Project[] = [
//   {
//     title: 'AI-Powered Trading Bot',
//     description:
//       'Developed a sophisticated trading bot using machine learning algorithms to analyze market patterns and execute automated trades with risk management strategies.',
//     date: 'December 2023',
//     imageUrl: '/projects/trading-bot.jpg',
//     tags: [
//       'Python',
//       'TensorFlow',
//       'AWS',
//       'Docker',
//       'Machine Learning',
//       'Trading',
//       'Crypto',
//     ],
//     slug: 'ai-powered-trading-bot',
//     links: [
//       { title: 'Live Demo', url: 'https://trading-bot.demo' },
//       { title: 'GitHub', url: 'https://github.com/username/trading-bot' },
//     ],
//     fullDescription:
//       '## Problem\n\n' +
//       'Traditional trading strategies often struggle to adapt to the rapidly evolving cryptocurrency markets, resulting in missed opportunities and potential losses. Manual trading approaches are limited by human reaction times and emotional biases, while existing automated solutions lack the sophistication to handle market complexity.\n\n' +
//       'The challenge was further compounded by the need to process vast amounts of market data in real-time, manage risk effectively across multiple trading pairs, and maintain consistent performance during high-volatility periods.\n\n' +
//       '## Action\n\n' +
//       'Developed a sophisticated trading bot utilizing Python and TensorFlow to implement deep learning models. The system architecture was designed to process market data through multiple specialized neural networks, each focused on different aspects of market analysis - from price action and volume patterns to sentiment analysis of social media feeds.\n\n' +
//       'Implemented advanced risk management algorithms that dynamically adjust position sizes and leverage based on market conditions and portfolio performance. Deployed the system on AWS using Docker containers for consistent performance, with automated failover and scaling capabilities to handle varying market conditions.\n\n' +
//       '## Results\n\n' +
//       'The trading bot has demonstrated exceptional performance across multiple metrics:\n\n' +
//       '- 40% improvement in trade execution speed compared to previous systems\n' +
//       '- 60% reduction in false trading signals through advanced filtering algorithms\n' +
//       '- Maintained consistent profit margins even during high market volatility\n' +
//       '- Successfully processes over 1 million market data points daily\n' +
//       '- Sub-second response times for market condition changes\n' +
//       '- 99.99% system uptime through robust infrastructure design',
//   },
//   {
//     title: 'DeFi Yield Aggregator',
//     description:
//       'Built a decentralized finance platform that automatically finds and compounds the best yields across multiple protocols, maximizing returns for users.',
//     date: 'November 2023',
//     imageUrl: '/projects/defi-yield.jpg',
//     tags: ['Solidity', 'React', 'Web3.js', 'Smart Contracts', 'DeFi', 'Crypto'],
//     slug: 'defi-yield-aggregator',
//     links: [
//       { title: 'DApp', url: 'https://defi-yield.app' },
//       { title: 'GitHub', url: 'https://github.com/username/defi-yield' },
//       { title: 'Documentation', url: 'https://docs.defi-yield.app' },
//     ],
//     fullDescription:
//       '## Problem\n\n' +
//       'DeFi users face significant challenges in optimizing their yield farming strategies across multiple protocols. The complexity of monitoring various platforms, understanding optimal entry and exit points, and managing gas costs creates substantial barriers to maximizing returns.\n\n' +
//       'Additionally, the rapid evolution of DeFi protocols and yield opportunities means that manual management becomes increasingly time-consuming and inefficient, leading to missed opportunities and suboptimal returns.\n\n' +
//       '## Action\n\n' +
//       'Built a comprehensive yield aggregation platform that automatically discovers and compounds the best yields across multiple DeFi protocols. The system architecture includes real-time monitoring of yield opportunities, smart contract integrations with major protocols, and a sophisticated routing system for optimizing transaction paths.\n\n' +
//       'Developed an intuitive user interface that simplifies complex DeFi interactions, implemented automated portfolio rebalancing, and created a gas-efficient routing system that batches transactions when possible. The platform includes advanced features such as impermanent loss protection and flash loan integration for larger transactions.\n\n' +
//       '## Results\n\n' +
//       'The platform has achieved significant milestones in improving DeFi yield farming efficiency:\n\n' +
//       '- Over $10M in total value locked (TVL)\n' +
//       '- Users save 5-10 hours per week in portfolio management\n' +
//       '- 20-30% higher yields compared to single-protocol strategies\n' +
//       '- 40% reduction in gas costs through optimized contract execution\n' +
//       '- Zero security incidents since launch\n' +
//       '- Integration with 15+ major DeFi protocols',
//   },
//   {
//     title: 'NFT Marketplace',
//     description:
//       'Created a marketplace for digital collectibles with features like minting, trading, and auctions, supporting multiple blockchain networks.',
//     date: 'October 2023',
//     imageUrl: '/projects/nft-marketplace.jpg',
//     tags: ['Next.js', 'TypeScript', 'IPFS', 'Smart Contracts'],
//     slug: 'nft-marketplace',
//     links: [
//       { title: 'Marketplace', url: 'https://nft.marketplace' },
//       { title: 'GitHub', url: 'https://github.com/username/nft-marketplace' },
//     ],
//     fullDescription:
//       '## Problem\n\n' +
//       'The NFT space has been plagued by high barriers to entry for both artists and collectors. High gas fees on popular networks, complex minting processes, and limited cross-chain functionality have restricted the growth of the NFT ecosystem.\n\n' +
//       'Furthermore, artists struggle with royalty enforcement and transparent pricing mechanisms, while collectors face challenges in verifying authenticity and understanding fair market values.\n\n' +
//       '## Action\n\n' +
//       'Created a user-friendly NFT marketplace supporting multiple blockchain networks. The platform implements innovative solutions including lazy minting to defer gas costs, an efficient auction system with automated price discovery, and a robust royalty management framework that ensures creator compensation.\n\n' +
//       'Integrated IPFS for decentralized storage with redundancy mechanisms, implemented gas optimization techniques, and developed cross-chain bridging capabilities. The platform includes advanced features such as batch minting, collection management tools, and automated metadata generation.\n\n' +
//       '## Results\n\n' +
//       'The marketplace has achieved significant traction and technical milestones:\n\n' +
//       '- Facilitated over $5M in NFT trades\n' +
//       '- Reduced minting costs by 60% through optimizations\n' +
//       '- Supports artists across five different blockchain networks\n' +
//       '- 45% improvement in average transaction times\n' +
//       '- 99.9% platform uptime\n' +
//       '- Over 10,000 active users across multiple chains',
//   },
//   {
//     title: 'Cross-Chain Bridge',
//     description:
//       'Implemented a secure bridge solution enabling users to transfer assets between different blockchain networks with minimal fees and maximum security.',
//     date: 'September 2023',
//     imageUrl: '/projects/bridge.jpg',
//     tags: ['Rust', 'Solidity', 'zkProofs', 'Smart Contracts'],
//     slug: 'cross-chain-bridge',
//     links: [
//       { title: 'Bridge App', url: 'https://bridge.app' },
//       {
//         title: 'GitHub',
//         url: 'https://github.com/username/cross-chain-bridge',
//       },
//       { title: 'Technical Paper', url: 'https://bridge.app/whitepaper' },
//     ],
//     fullDescription:
//       '## Problem\n\n' +
//       'Cross-chain asset transfers have been a major pain point in the blockchain ecosystem, with users facing significant risks and high fees. Existing bridge solutions often lack robust security measures and suffer from poor efficiency, leading to lost funds and frustrated users.\n\n' +
//       'The challenge was further complicated by the need to maintain security across multiple chains while providing a seamless user experience and ensuring transaction finality.\n\n' +
//       '## Action\n\n' +
//       'Implemented a secure bridge solution using Rust and advanced cryptography. The system architecture incorporates zero-knowledge proof systems for transaction verification, an automated liquidity management system for efficient transfers, and multi-signature security protocols with threshold signing.\n\n' +
//       'Developed specialized smart contracts for each supported chain, implemented automated monitoring and alerting systems, and created a robust transaction recovery mechanism. The solution includes advanced features such as atomic swaps and cross-chain messaging.\n\n' +
//       '## Results\n\n' +
//       'The bridge has demonstrated exceptional performance and security metrics:\n\n' +
//       '- Processed over $100M in cross-chain transfers\n' +
//       '- Zero security incidents since launch\n' +
//       '- 70% reduction in transfer fees\n' +
//       '- Sub-minute finality times across all supported chains\n' +
//       '- 100% accuracy in asset transfers\n' +
//       '- Support for 5 major blockchain networks',
//   },
//   {
//     title: 'DAO Governance Platform',
//     description:
//       'Designed and built a decentralized autonomous organization platform with voting mechanisms, proposal creation, and treasury management.',
//     date: 'August 2023',
//     imageUrl: '/projects/dao.jpg',
//     tags: ['Vue.js', 'Smart Contracts', 'The Graph', 'TypeScript'],
//     slug: 'dao-governance-platform',
//     links: [
//       { title: 'DAO Portal', url: 'https://dao.platform' },
//       { title: 'GitHub', url: 'https://github.com/username/dao-platform' },
//     ],
//     fullDescription:
//       '## Problem\n\n' +
//       'Decentralized communities have struggled with effective governance coordination, often resulting in low participation rates and inefficient decision-making processes. Traditional voting mechanisms fail to account for stake weight and voter expertise, while treasury management lacks transparency and efficiency.\n\n' +
//       'The challenge extended to proposal creation and execution, where manual processes and lack of standardization led to delays and potential security risks.\n\n' +
//       '## Action\n\n' +
//       'Designed and built a comprehensive DAO governance platform using Vue.js and smart contracts. Implemented innovative features including quadratic voting to balance stake-weighted decisions, an automated proposal execution system with security checks, and transparent treasury management tools.\n\n' +
//       'Integrated with The Graph Protocol for efficient data querying, developed customizable governance frameworks, and created detailed analytics dashboards. The platform includes advanced features such as delegation mechanisms and reputation systems.\n\n' +
//       '## Results\n\n' +
//       'The platform has transformed DAO governance processes:\n\n' +
//       '- Serves 50+ active DAOs\n' +
//       '- Processed over 1000 governance proposals\n' +
//       '- Manages $50M+ in treasury assets\n' +
//       '- 300% increase in governance participation\n' +
//       '- Reduced proposal execution time from days to hours\n' +
//       '- Zero security incidents in treasury management',
//   },
//   {
//     title: 'Crypto Portfolio Tracker',
//     description:
//       'Developed a comprehensive portfolio tracking application that aggregates crypto assets across multiple wallets and exchanges with real-time price updates.',
//     date: 'July 2023',
//     imageUrl: '/projects/portfolio-tracker.jpg',
//     tags: [
//       'React Native',
//       'Node.js',
//       'APIs',
//       'Mobile',
//       'Crypto',
//       'Trading',
//       'DeFi',
//     ],
//     slug: 'crypto-portfolio-tracker',
//     links: [
//       { title: 'Web App', url: 'https://crypto-tracker.app' },
//       { title: 'GitHub', url: 'https://github.com/username/crypto-tracker' },
//       { title: 'Mobile App', url: 'https://apps.apple.com/app/crypto-tracker' },
//     ],
//     fullDescription:
//       '## Problem\n\n' +
//       'Crypto investors face significant challenges in tracking their portfolio performance across multiple wallets and exchanges. The fragmented nature of crypto investments, combined with complex DeFi interactions and tax reporting requirements, creates substantial overhead in portfolio management.\n\n' +
//       'Manual tracking methods are error-prone and time-consuming, while existing solutions often lack support for DeFi protocols and comprehensive tax reporting capabilities.\n\n' +
//       '## Action\n\n' +
//       'Developed a comprehensive portfolio tracking solution using React Native and Node.js. The application features real-time price updates, advanced analytics tools, and automated tax reporting capabilities. Built integrations with multiple exchanges via APIs and added support for popular DeFi protocols.\n\n' +
//       'Implemented sophisticated portfolio analysis tools, including performance attribution, risk metrics, and tax-loss harvesting opportunities. The system includes automated transaction categorization and support for multiple accounting methods.\n\n' +
//       '## Results\n\n' +
//       'The application has achieved significant adoption and user benefits:\n\n' +
//       '- 100,000+ active users globally\n' +
//       '- Tracks $500M+ in crypto assets\n' +
//       '- Automated tax reporting for 30+ countries\n' +
//       '- Users save 10+ hours monthly on portfolio management\n' +
//       '- 99.9% accuracy in transaction categorization\n' +
//       '- Integration with 50+ exchanges and DeFi protocols',
//   },
// ];

// export default function Projects() {
//   return (
//     <div id="projects" className="mx-auto mt-5 max-w-7xl">
//       <SectionHeading
//         heading="Featured Projects"
//         subheading="A collection of my most impactful work in blockchain and web development"
//       />
//       <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {projectsData.map((project, index) => (
//           <ProjectCard
//             key={index}
//             title={project.title}
//             description={project.description}
//             date={project.date}
//             imageUrl={project.imageUrl}
//             tags={project.tags}
//             slug={project.slug}
//             links={project.links}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// ProjectSection.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import Link from 'next/link';

// Define project interfaces
interface BaseProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
}

interface FeaturedProject extends BaseProject {
  image: string;
  featured: true;
}

interface OtherProject extends BaseProject {
  featured: false;
}

type Project = FeaturedProject | OtherProject;

// Sample data (replace with your actual projects)
const PROJECTS: Project[] = [
  {
    id: 'project1',
    title: 'Immersive Audio Visualizer',
    description:
      'An interactive audio visualizer that creates stunning visual representations of music using WebGL and the Web Audio API.',
    technologies: ['React', 'WebGL', 'Web Audio API', 'Three.js'],
    image: 'projects/defi-yield.jpg',
    github: 'https://github.com/yourusername/audio-visualizer',
    external: 'https://audio-visualizer-demo.vercel.app',
    featured: true,
  },
  {
    id: 'project2',
    title: 'AI-Powered Content Generator',
    description:
      'A machine learning application that generates custom content based on user specifications and preferences.',
    technologies: ['TypeScript', 'Next.js', 'TensorFlow.js', 'Tailwind CSS'],
    image: 'projects/defi-yield.jpg',
    github: 'https://github.com/yourusername/ai-content-generator',
    external: 'https://ai-content-generator.vercel.app',
    featured: true,
  },
  {
    id: 'project3',
    title: 'Blockchain Explorer',
    description:
      'A comprehensive blockchain explorer with real-time transaction tracking and visualization.',
    technologies: ['React', 'Node.js', 'Web3.js', 'D3.js'],
    image: 'projects/defi-yield.jpg',
    github: 'https://github.com/yourusername/blockchain-explorer',
    external: 'https://blockchain-explorer-demo.vercel.app',
    featured: true,
  },
  {
    id: 'project4',
    title: 'Developer Portfolio Template',
    description:
      'A customizable portfolio template for developers with modern design and smooth animations.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/dev-portfolio',
    featured: false,
  },
  {
    id: 'project5',
    title: 'E-commerce Dashboard',
    description:
      'An analytics dashboard for e-commerce platforms with comprehensive data visualization.',
    technologies: ['React', 'Redux', 'Chart.js', 'Material UI'],
    github: 'https://github.com/yourusername/ecommerce-dashboard',
    featured: false,
  },
  {
    id: 'project6',
    title: 'Markdown Note App',
    description:
      'A minimalist markdown note-taking application with cloud sync and sharing capabilities.',
    technologies: ['Vue.js', 'Firebase', 'Markdown-it', 'PWA'],
    github: 'https://github.com/yourusername/markdown-notes',
    external: 'https://markdown-notes-app.vercel.app',
    featured: false,
  },
  // Add more projects for the archive section
  {
    id: 'project7',
    title: 'Weather App',
    description:
      'A weather application with beautiful UI and accurate forecasts.',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS3'],
    github: 'https://github.com/yourusername/weather-app',
    featured: false,
  },
  {
    id: 'project8',
    title: 'Social Media API',
    description:
      'A RESTful API for social media applications with authentication and real-time features.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/yourusername/social-media-api',
    featured: false,
  },
  {
    id: 'project9',
    title: 'Movie Recommendation Engine',
    description:
      'A movie recommendation system using collaborative filtering algorithms.',
    technologies: ['Python', 'Scikit-learn', 'Flask', 'MongoDB'],
    github: 'https://github.com/yourusername/movie-recommender',
    featured: false,
  },
  // Add more archive projects as needed
];

// Main component
const ProjectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'other' | 'archive'>(
    'featured',
  );
  const [archiveVisible, setArchiveVisible] = useState(false);
  const [visibleArchiveProjects, setVisibleArchiveProjects] = useState(6);

  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured).slice(
    0,
    3,
  );
  const archiveProjects = PROJECTS.filter((project) => !project.featured);

  const loadMoreArchiveProjects = () => {
    setVisibleArchiveProjects((prev) =>
      Math.min(prev + 6, archiveProjects.length),
    );
  };

  return (
    <section className="bg-gradient-to-br py-20" id='projects'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Tab navigation */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-800/50 p-1 backdrop-blur-sm">
            {['featured', 'other', 'archive'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab as 'featured' | 'other' | 'archive');
                  if (tab === 'archive') setArchiveVisible(true);
                }}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
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
                    project={project as FeaturedProject}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Other Projects */}
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

          {/* Archive */}
          {activeTab === 'archive' && archiveVisible && (
            <motion.div
              key="archive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h3 className="mb-8 text-2xl font-semibold text-purple-300">
                  Project Archive
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-purple-900/30 backdrop-blur-sm">
                        <th className="px-4 py-3 text-left text-sm font-medium text-purple-200">
                          Year
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-purple-200">
                          Project
                        </th>
                        <th className="hidden px-4 py-3 text-left text-sm font-medium text-purple-200 md:table-cell">
                          Made with
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-purple-200">
                          Links
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                      {archiveProjects
                        .slice(0, visibleArchiveProjects)
                        .map((project) => (
                          <motion.tr
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="transition-colors hover:bg-purple-800/20"
                          >
                            <td className="px-4 py-3 text-sm text-gray-300">
                              2023
                            </td>
                            <td className="px-4 py-3 text-sm font-medium text-purple-200">
                              {project.title}
                            </td>
                            <td className="hidden px-4 py-3 text-sm text-gray-400 md:table-cell">
                              {project.technologies.join(', ')}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <div className="flex space-x-3">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 transition-colors hover:text-purple-300"
                                  >
                                    <FiGithub size={18} />
                                  </a>
                                )}
                                {project.external && (
                                  <a
                                    href={project.external}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 transition-colors hover:text-purple-300"
                                  >
                                    <FiExternalLink size={18} />
                                  </a>
                                )}
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {visibleArchiveProjects < archiveProjects.length && (
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={loadMoreArchiveProjects}
                      className="rounded-full border border-purple-500 bg-purple-600/30 px-6 py-2 text-sm font-medium text-purple-200 transition-all duration-300 hover:bg-purple-600/50"
                    >
                      Show More
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Featured Project Card Component
const FeaturedProjectCard: React.FC<{
  project: FeaturedProject;
  index: number;
}> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative grid grid-cols-12 items-center gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Project Image */}
      <div
        className={`col-span-12 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <a
          href={project.external || project.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-full"
        >
          <div className="absolute inset-0 z-10 bg-purple-900/40 transition-all duration-300 group-hover:bg-transparent"></div>
          <motion.div
            className="relative h-full overflow-hidden rounded-lg shadow-xl shadow-purple-900/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </a>
      </div>

      {/* Project Info */}
      <div
        className={`col-span-12 lg:col-span-6 ${isEven ? 'lg:order-2 lg:col-start-7' : 'lg:order-1 lg:col-start-1'}`}
      >
        <div
          className={`lg:absolute lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-center ${isEven ? 'lg:pr-8 lg:text-left' : 'lg:pl-8 lg:text-right'}`}
        >
          <p className="mb-2 font-mono text-sm text-purple-400">
            Featured Project
          </p>
          <h3 className="mb-4 text-2xl font-bold text-gray-100 md:text-3xl">
            <a
              href={project.external || project.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-300"
            >
              {project.title}
            </a>
          </h3>
          <div className="mb-6 rounded-lg bg-gray-800/70 p-6 shadow-xl backdrop-blur-sm">
            <p className="text-gray-300">{project.description}</p>
          </div>
          <ul
            className={`mb-6 flex flex-wrap gap-2 ${isEven ? '' : 'lg:justify-end'}`}
          >
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-gray-800/50 px-3 py-1 font-mono text-sm text-gray-400"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className={`flex space-x-4 ${isEven ? '' : 'lg:justify-end'}`}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-purple-300"
              >
                <FiGithub size={22} />
              </a>
            )}
            {project.external && (
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-purple-300"
              >
                <FiExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Other Project Card Component
const OtherProjectCard: React.FC<{ project: OtherProject; index: number }> = ({
  project,
  index,
}) => {
  return (
    <motion.div
      className="flex h-full flex-col rounded-lg border border-purple-900/50 bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-lg bg-purple-900/30 p-2">
          <FiFolder size={30} className="text-purple-400" />
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-300"
            >
              <FiGithub size={20} />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-300"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-100 transition-colors hover:text-purple-300">
        <a
          href={project.external || project.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
      </h3>
      <p className="mb-6 flex-grow text-gray-400">{project.description}</p>
      <ul className="mt-auto flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech} className="font-mono text-xs text-gray-400">
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectSection;
