'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  educationData,
  experienceData,
  ACHIEVEMENT_ICONS,
} from './ExperienceData';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>(
    'experience',
  );
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    // Set the first item as selected by default
    if (activeTab === 'experience' && experienceData.length > 0) {
      setSelectedItem(experienceData[0].id);
    } else if (activeTab === 'education' && educationData.length > 0) {
      setSelectedItem(educationData[0].id);
    }
  }, [activeTab]);

  const getGradientClass = (index: number) => {
    const gradients = [
      'from-fuchsia-500 to-cyan-500',
      'from-violet-600 to-pink-500',
      'from-indigo-500 to-purple-500',
      'from-blue-500 to-teal-400',
      'from-purple-500 to-blue-400',
      'from-pink-500 to-indigo-500',
    ];
    return gradients[index % gradients.length];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div
      id="experience"
      className="relative min-h-screen bg-gradient-to-br md:px-8"
    >
      {/* Enhanced background with multiple gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-600 opacity-20 mix-blend-multiply blur-[128px] filter"></div>
        <div className="animate-blob animation-delay-2000 absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-blue-600 opacity-20 mix-blend-multiply blur-[128px] filter"></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-600 opacity-20 mix-blend-multiply blur-[128px] filter"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h2
          className="mb-12 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>

        <div className="mb-10 flex justify-center">
          <div className="rounded-full border border-gray-700 bg-gray-800 bg-opacity-40 p-1 shadow-[0_0_15px_rgba(139,92,246,0.15)] backdrop-blur-sm">
            <button
              className={`rounded-full px-6 py-3 text-lg font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white shadow-[0_0_20px_rgba(167,139,250,0.5)]'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`rounded-full px-6 py-3 text-lg font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left sidebar - Timeline */}
          <div className="lg:col-span-1">
            <motion.div
              className="h-full rounded-xl border border-gray-800 bg-gray-900 bg-opacity-50 p-6 shadow-[0_0_25px_rgba(139,92,246,0.1)] backdrop-blur-sm"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"></div>

                <motion.ul
                  className="relative z-10 space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {activeTab === 'experience'
                    ? experienceData.map((item, index) => (
                        <motion.li
                          key={item.id}
                          variants={itemVariants}
                          className="relative pl-10"
                          onClick={() => setSelectedItem(item.id)}
                          onMouseEnter={() => setIsHovered(item.id)}
                          onMouseLeave={() => setIsHovered(null)}
                        >
                          <motion.div
                            className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${getGradientClass(index)} transition-all duration-300 ${
                              selectedItem === item.id ? 'scale-125' : ''
                            }`}
                            whileHover={{ scale: 1.2 }}
                          >
                            <span className="text-xs font-bold">
                              {index + 1}
                            </span>
                          </motion.div>
                          <div
                            className={`cursor-pointer transition-all duration-300 ${
                              selectedItem === item.id
                                ? 'translate-x-2 opacity-100'
                                : isHovered === item.id
                                  ? 'translate-x-1 opacity-90'
                                  : 'opacity-70'
                            }`}
                          >
                            <h3 className="text-lg font-semibold text-white">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-300">
                              {item.period}
                            </p>
                          </div>
                        </motion.li>
                      ))
                    : educationData.map((item, index) => (
                        <motion.li
                          key={item.id}
                          variants={itemVariants}
                          className="relative pl-10"
                          onClick={() => setSelectedItem(item.id)}
                          onMouseEnter={() => setIsHovered(item.id)}
                          onMouseLeave={() => setIsHovered(null)}
                        >
                          <motion.div
                            className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${getGradientClass(index)} transition-all duration-300 ${
                              selectedItem === item.id ? 'scale-125' : ''
                            }`}
                            whileHover={{ scale: 1.2 }}
                          >
                            <span className="text-xs font-bold">
                              {index + 1}
                            </span>
                          </motion.div>
                          <div
                            className={`cursor-pointer transition-all duration-300 ${
                              selectedItem === item.id
                                ? 'translate-x-2 opacity-100'
                                : isHovered === item.id
                                  ? 'translate-x-1 opacity-90'
                                  : 'opacity-70'
                            }`}
                          >
                            <h3 className="text-lg font-semibold text-white">
                              {item.degree}
                            </h3>
                            <p className="text-sm text-gray-300">
                              {item.period}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>

          {/* Right content - Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {activeTab === 'experience' && selectedItem && (
                <motion.div
                  key={`exp-${selectedItem}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full overflow-hidden rounded-xl border border-indigo-900/30 bg-gradient-to-br from-gray-900 to-gray-950 p-8 shadow-[0_0_30px_rgba(99,102,241,0.15)] backdrop-blur-sm"
                >
                  {experienceData
                    .filter((item) => item.id === selectedItem)
                    .map((item) => (
                      <div key={item.id} className="relative z-10">
                        <div className="mb-6 flex flex-col justify-between md:flex-row md:items-center">
                          <div>
                            <h3 className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xl text-gray-200">
                              {item.company}
                            </p>
                          </div>
                          <p className="mt-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-900/30 to-fuchsia-900/30 px-4 py-1 font-medium text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)] md:ml-4 md:mt-0">
                            {item.period}
                          </p>
                        </div>

                        <div className="mb-8">
                          <h4 className="mb-3 text-lg font-semibold text-blue-300">
                            Responsibilities
                          </h4>
                          <ul className="space-y-3">
                            {item.description.map((desc, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className="mr-3 mt-0.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                                <span className="text-gray-200">{desc}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-3 text-lg font-semibold text-blue-300">
                            Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="rounded-full border border-violet-500/20 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-3 py-1 text-sm font-medium text-white shadow-[0_2px_10px_rgba(167,139,250,0.3)]"
                                whileHover={{
                                  scale: 1.05,
                                  boxShadow: '0 4px 15px rgba(167,139,250,0.5)',
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                  {/* Enhanced decorative elements */}
                  <div className="absolute right-0 top-0 -mr-24 -mt-24 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 opacity-10 blur-3xl filter"></div>
                  <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 opacity-10 blur-3xl filter"></div>
                  <div className="animation-delay-2000 absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 opacity-5 blur-3xl filter"></div>
                </motion.div>
              )}

              {activeTab === 'education' && selectedItem && (
                <motion.div
                  key={`edu-${selectedItem}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full overflow-hidden rounded-xl border border-blue-900/30 bg-gradient-to-br from-gray-900 to-slate-950 p-8 shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-sm"
                >
                  {educationData
                    .filter((item) => item.id === selectedItem)
                    .map((item) => (
                      <div key={item.id} className="relative z-10">
                        <div className="mb-6 flex flex-col justify-between md:flex-row md:items-center">
                          <div>
                            <h3 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                              {item.degree}
                            </h3>
                            <p className="mt-1 text-xl text-gray-200">
                              {item.institution}
                            </p>
                          </div>
                          <p className="mt-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 px-4 py-1 font-medium text-blue-300 shadow-[0_0_10px_rgba(96,165,250,0.2)] md:ml-4 md:mt-0">
                            {item.period}
                          </p>
                        </div>

                        <div className="mb-8">
                          <h4 className="mb-3 text-lg font-semibold text-blue-300">
                            Details
                          </h4>
                          <motion.p
                            className="rounded-lg border border-gray-700 bg-gray-800 bg-opacity-50 p-4 text-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.description}
                          </motion.p>
                        </div>

                        {/* Add some decorative achievement badges */}
                        {/* Achievement section */}
                        <div>
                          <h4 className="mb-3 text-lg font-semibold text-blue-300">
                            {item.achievements?.length ? 'Achievements' : ''}
                          </h4>
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {item.achievements?.map((achievement) => (
                              <motion.div
                                key={achievement.id}
                                className={`flex items-center rounded-lg border ${achievement.gradient.border} bg-gradient-to-r ${achievement.gradient.background} p-4 shadow-[0_4px_10px_rgba(139,92,246,0.15)]`}
                                initial={{
                                  opacity: 0,
                                  x: achievement.id % 2 === 0 ? 20 : -20,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.3 + achievement.id * 0.1,
                                }}
                              >
                                <div
                                  className={`mr-3 rounded-full bg-gradient-to-br ${achievement.gradient.icon} p-2 shadow-lg`}
                                >
                                  {ACHIEVEMENT_ICONS[achievement.icon]}
                                </div>
                                <span className="font-medium text-gray-100">
                                  {achievement.title}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                  {/* Decorative elements */}
                  <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl filter"></div>
                  <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-purple-500 opacity-10 blur-3xl filter"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
