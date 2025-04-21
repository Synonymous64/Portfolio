'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Add ImageModalProps interface
interface ImageModalProps {
  item: typeof featuredItems[0];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

// Add ImageModal component
const ImageModal = ({
  item,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ImageModalProps) => {
  // Close modal when clicking outside content
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrevious) onPrevious();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasNext, hasPrevious, onClose, onNext, onPrevious]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="relative mx-auto flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-gray-900 shadow-2xl lg:h-[80vh] lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image container */}
        <div className="relative h-[50vh] w-full lg:h-full lg:w-2/3">
          <Image
            src={item.driveUrl}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
            priority
          />

          {/* Navigation buttons */}
          {hasPrevious && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 transition hover:bg-black/70"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 transition hover:bg-black/70"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Content container */}
        <div className="flex h-[40vh] flex-col overflow-y-auto p-6 lg:h-full lg:w-1/3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
            <span className="inline-block rounded-full bg-purple-600/80 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {item.category}
            </span>
          </div>

          <div className="mt-auto pt-4">
            <button
              onClick={onClose}
              className="w-full rounded-full bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Modify the FeaturedGallery component to include modal state and handlers
const FeaturedGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof featuredItems[0] | null>(null);

  // Modal navigation handlers
  const currentIndex = selectedItem
    ? featuredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedItem(featuredItems[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < featuredItems.length - 1) {
      setSelectedItem(featuredItems[currentIndex + 1]);
    }
  };

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
        ease: 'easeOut',
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
              onClick={() => setSelectedItem(item)}
              className="group relative h-[400px] cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-2xl"
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

        {/* Add the modal */}
        <AnimatePresence>
          {selectedItem && (
            <ImageModal
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
              onNext={handleNext}
              onPrevious={handlePrevious}
              hasNext={currentIndex < featuredItems.length - 1}
              hasPrevious={currentIndex > 0}
            />
          )}
        </AnimatePresence>

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
