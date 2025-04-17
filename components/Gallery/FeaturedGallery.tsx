'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Select featured items from your gallery
const featuredItems = [
  {
    id: '1',
    title: 'Nature Landscape',
    description: 'Beautiful mountain landscape with clear blue sky.',
    driveUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    category: 'nature',
  },
  {
    id: '2',
    title: 'City Skyline',
    description: 'Urban panorama showcasing modern architecture.',
    driveUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    category: 'urban',
  },
  {
    id: '3',
    title: 'Ocean Waves',
    description: 'Powerful ocean waves crashing on the shore.',
    driveUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    category: 'nature',
  },
];

const FeaturedGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut', // Changed from cubic-bezier to a valid Framer Motion easing
      },
    },
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 featured-gallery-section">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute -top-40 left-0 right-0 h-[500px] bg-gradient-to-b to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Featured Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Discover our most captivating pieces that showcase the pinnacle of
            artistic excellence
          </p>
        </motion.div>

        {/* Featured Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-[400px] overflow-hidden rounded-xl bg-gray-900 shadow-2xl"
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={item.driveUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: hoveredIndex === index ? 0.8 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: hoveredIndex === index ? 0 : 20,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-gray-300">{item.description}</p>
                <span className="mt-4 inline-block rounded-full bg-purple-600/80 px-4 py-2 text-sm text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/gallery"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-pink-700"
          >
            <span className="relative z-10">View Full Gallery</span>
            <motion.div
              className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
