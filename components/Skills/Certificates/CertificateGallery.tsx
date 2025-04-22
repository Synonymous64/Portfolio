import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

import certificates from './Certificates';

// Certificate Type Definition
export interface Certificate {
  id?: string;
  title?: string;
  issuer?: string;
  description?: string;
  date?: string;
  credentialUrl?: string;
  skills?: string[];
  badgeUrl?: string;
}

// Sample Certificates Data (you can replace with your actual certificates)

// Certificate Card Component
const CertificateCard: React.FC<{
  certificate: Certificate;
  className?: string;
  isActive?: boolean;
}> = ({ certificate, className, isActive = false }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1 : 0.95,
        transition: { duration: 0.3 },
      }}
      className={cn(
        'group relative cursor-pointer rounded-2xl p-6',
        'bg-gradient-to-br from-gray-800/80 to-gray-900/80',
        'border border-gray-700/50 shadow-2xl',
        'transform transition-all duration-300 ease-in-out',
        'hover:border-blue-600/50 hover:shadow-blue-900/50',
        className,
      )}
    >
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center text-blue-400">
          <Award className="mr-3 h-6 w-6 text-blue-500" />
          <span className="text-sm font-medium text-blue-300">
            {certificate.issuer}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-100">
          {certificate.title}
        </h3>

        <p className="mb-4 text-sm text-gray-400">{certificate.description}</p>

        {/* Skills Chips */}
        <div className="mb-4 flex flex-wrap gap-2">
          {certificate.skills?.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-gray-700/50 px-2 py-1 text-xs text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="text-xs text-gray-500">{certificate.date}</div>

          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
            >
              <span>Credential</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Certificate Gallery Component
const CertificateGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Use 90% of container width to match the card width
      const scrollAmount = container.clientWidth * 0.9;
      const newScrollLeft =
        direction === 'left'
          ? Math.max(0, container.scrollLeft - scrollAmount)
          : Math.min(
              container.scrollWidth - container.clientWidth,
              container.scrollLeft + scrollAmount,
            );

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      // Calculate active index based on 90% container width
      const newActiveIndex = Math.round(
        scrollPosition / (containerWidth * 0.9),
      );
      setActiveIndex(Math.min(newActiveIndex, certificates.length - 1));

      // Check scroll boundaries with a small threshold
      setIsAtStart(scrollPosition <= 10);
      setIsAtEnd(
        Math.ceil(scrollPosition + containerWidth) >= scrollWidth - 10,
      );
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', handleScroll);
    return () => currentRef?.removeEventListener('scroll', handleScroll);
  }, [certificates.length]);

  return (
    <div className="relative w-full py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-center text-4xl font-bold text-transparent"
        >
          My Certifications
        </motion.h2>

        {/* Gallery Container */}
        <div className="group relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            disabled={isAtStart}
            className={cn(
              'absolute left-0 top-1/2 z-20 -translate-y-1/2',
              'rounded-full bg-gray-800/50 p-2 hover:bg-gray-700/70',
              'disabled:cursor-not-allowed disabled:opacity-30',
              'hidden md:block',
            )}
          >
            <ChevronLeft className="h-8 w-8 text-gray-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            disabled={isAtEnd}
            className={cn(
              'absolute right-0 top-1/2 z-20 -translate-y-1/2',
              'rounded-full bg-gray-800/50 p-2 hover:bg-gray-700/70',
              'disabled:cursor-not-allowed disabled:opacity-30',
              'hidden md:block',
            )}
          >
            <ChevronRight className="h-8 w-8 text-gray-300" />
          </motion.button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-6"
          >
            <AnimatePresence>
              {certificates.map((certificate, index) => (
                <div
                  key={certificate.id}
                  className="w-full flex-shrink-0 snap-center px-2 md:w-[calc(90%)] lg:w-[calc(70%)]"
                >
                  <CertificateCard
                    certificate={certificate}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          {certificates.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all duration-300',
                index === activeIndex ? 'w-6 bg-blue-500' : 'bg-gray-600',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateGallery;
