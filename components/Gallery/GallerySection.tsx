'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  driveUrl: string;
  tags: string[];
  category: string;
  createdAt?: string; // Added for sorting
}

interface GallerySectionProps {
  items?: GalleryItem[];
}

interface ImageModalProps {
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

interface CategoryButtonProps {
  category: string;
}

const sampleGalleryItems: GalleryItem[] = [
  {
    id: '6',
    title: 'Wildlife Photography',
    description:
      'Amazing wildlife in their natural habitats. This photo captures the raw beauty of nature with incredible detail and composition.',
    driveUrl: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6',
    tags: ['wildlife', 'animals', 'photography'],
    category: 'nature',
    createdAt: '2023-06-15',
  },
  {
    id: '5',
    title: 'Abstract Art',
    description:
      'Colorful geometric patterns and artistic expression. This piece explores the boundaries between digital and traditional art forms.',
    driveUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    tags: ['abstract', 'art', 'colorful'],
    category: 'art',
    createdAt: '2023-05-20',
  },
  {
    id: '4',
    title: 'Desert Sunset',
    description:
      'Golden hour in the vast desert landscape. The warm hues of the setting sun create a dramatic contrast with the cool desert sands.',
    driveUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    tags: ['desert', 'sunset', 'landscape'],
    category: 'nature',
    createdAt: '2023-04-10',
  },
  {
    id: '3',
    title: 'Ocean Waves',
    description:
      'Powerful ocean waves crashing on the shore. Captured at just the right moment to show the force and beauty of nature.',
    driveUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    tags: ['ocean', 'water', 'nature'],
    category: 'nature',
    createdAt: '2023-03-05',
  },
  {
    id: '2',
    title: 'City Skyline',
    description:
      'Urban panorama showcasing modern architecture. The city lights create a mesmerizing pattern against the twilight sky.',
    driveUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    tags: ['city', 'urban', 'architecture'],
    category: 'urban',
    createdAt: '2023-02-18',
  },
  {
    id: '1',
    title: 'Nature Landscape',
    description:
      'Beautiful mountain landscape with clear blue sky. The perfect harmony between earth and sky in this breathtaking view.',
    driveUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    tags: ['nature', 'mountains', 'travel'],
    category: 'nature',
    createdAt: '2023-01-01',
  },
];

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

  // Keyboard navigation
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
        {/* Image container - takes full width on mobile, 2/3 on desktop */}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
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

        {/* Content container - full width on mobile, 1/3 on desktop */}
        <div className="flex h-[40vh] flex-col overflow-y-auto p-6 lg:h-full lg:w-1/3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-purple-900/70 px-2 py-1 text-xs text-white"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4">
            <span className="text-sm text-gray-400">
              Category: {item.category}
            </span>
            <button
              onClick={onClose}
              className="rounded-full bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GallerySection = ({ items = sampleGalleryItems }: GallerySectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(items);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [sortedItems, setSortedItems] = useState<GalleryItem[]>([]);
  const itemsPerPage = 9;

  // Get unique categories and tags
  const categories = [
    'all',
    ...Array.from(new Set(items.map((item) => item.category))),
  ];
  const uniqueTags = Array.from(
    new Set(items.flatMap((item) => item.tags)),
  ).sort();

  // Sort items by latest first (using createdAt or id as fallback)
  useEffect(() => {
    const sorted = [...items].sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      return b.id.localeCompare(a.id);
    });
    setSortedItems(sorted);
  }, [items]);

  // Filter items based on category, tags, and search term
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = sortedItems;

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(
          (item) => item.category === selectedCategory,
        );
      }

      if (selectedTags.length > 0) {
        filtered = filtered.filter((item) =>
          selectedTags.some((tag) => item.tags.includes(tag)),
        );
      }

      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (item) =>
            item.title.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower) ||
            item.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
        );
      }

      setFilteredItems(filtered);
      setCurrentPage(1);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm, selectedTags, sortedItems]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Modal navigation
  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  // Event handlers with proper type annotations
  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleTagClick = (tag: string): void => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleClearFilters = (): void => {
    setSelectedCategory('all');
    setSearchTerm('');
    setSelectedTags([]);
  };

  // Fixed TagFilters component
  const TagFilters = () => (
    <div className="relative z-10 mb-6 flex flex-wrap gap-2">
      {uniqueTags.map((tag: string) => (
        <button
          key={tag}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleTagClick(tag);
          }}
          className={`relative z-10 rounded-full px-3 py-1 text-sm transition ${
            selectedTags.includes(tag)
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );

  // Fixed CategoryButton component
  const CategoryButton = ({ category }: CategoryButtonProps) => (
    <button
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        handleCategoryClick(category);
      }}
      className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
        selectedCategory === category
          ? 'bg-purple-600 text-white'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br  px-4 py-9 text-white sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-12 max-w-7xl text-center"
      >
        <h2 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
          Stunning Gallery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-300">
          Explore our collection of breathtaking visuals and artistic
          masterpieces
        </p>
      </motion.div>

      <TagFilters />

      {/* Search and Filter Controls */}
      <div className="relative z-20 mx-auto mb-12 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(e.target.value)
                }
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute right-3 top-2.5">🔍</span>
            </div>
          </div>

          <div className="flex w-full gap-2 overflow-x-auto pb-2 md:w-auto">
            {categories.map((category: string) => (
              <CategoryButton key={category} category={category} />
            ))}
          </div>

          <div className="z-10 flex gap-2">
            <button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setIsGridView(true);
              }}
              className={`rounded-md p-2 transition ${
                isGridView
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              aria-label="Grid view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setIsGridView(false);
              }}
              className={`rounded-md p-2 transition ${
                !isGridView
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              aria-label="List view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex h-64 items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 1.5, repeat: Infinity, ease: 'linear' },
              scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="h-12 w-12 rounded-full border-4 border-purple-500 border-t-transparent"
          />
        </div>
      )}

      {/* No results message */}
      {!isLoading && filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 text-center"
        >
          <p className="text-xl text-gray-400">
            No images match your search criteria.
          </p>
          <button
            onClick={handleClearFilters}
            className="mt-4 rounded-md bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Clear filters
          </button>
        </motion.div>
      )}

      {/* Gallery Grid/List Views */}
      {!isLoading && paginatedItems.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`mx-auto max-w-7xl ${
            isGridView
              ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
              : 'space-y-6'
          }`}
        >
          {paginatedItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedItem(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative cursor-pointer overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-all duration-300 ${
                isGridView ? 'h-64 sm:h-72' : 'h-64 md:h-48'
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={item.driveUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <motion.div
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6"
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: hoveredItem === item.id ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-bold text-white"
                  animate={{
                    y: hoveredItem === item.id ? 0 : 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="mt-2 line-clamp-2 text-gray-300"
                  animate={{
                    y: hoveredItem === item.id ? 0 : 10,
                    opacity: hoveredItem === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {item.description}
                </motion.p>

                <motion.div
                  className="mt-3 flex flex-wrap gap-2"
                  animate={{
                    y: hoveredItem === item.id ? 0 : 15,
                    opacity: hoveredItem === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {item.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-purple-900/70 px-2 py-1 text-xs text-white backdrop-blur-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Pagination */}
      {!isLoading && filteredItems.length > 0 && totalPages > 1 && (
        <nav className="mt-8 flex justify-center">
          <ul className="flex items-center space-x-2">
            <li>
              <button
                onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-400 transition hover:bg-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
            </li>

            {totalPages <= 5 ? (
              // Show all pages if 5 or fewer
              Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <li key={number}>
                    <button
                      onClick={() => setCurrentPage(number)}
                      className={`rounded-md border border-gray-700 px-4 py-2 ${
                        currentPage === number
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {number}
                    </button>
                  </li>
                ),
              )
            ) : (
              // Handle pagination for more than 5 pages
              <>
                {/* First page */}
                <li>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className={`rounded-md border border-gray-700 px-4 py-2 ${
                      currentPage === 1
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    1
                  </button>
                </li>

                {/* Ellipsis if current page > 3 */}
                {currentPage > 3 && <li className="px-2 text-gray-400">...</li>}

                {/* Pages around current page */}
                {Array.from({ length: Math.min(3, totalPages - 2) }, (_, i) => {
                  let pageNum;
                  if (currentPage <= 2) {
                    pageNum = i + 2; // Show 2, 3, 4
                  } else if (currentPage >= totalPages - 1) {
                    pageNum = totalPages - 3 + i; // Show last 3 pages before the last page
                  } else {
                    pageNum = currentPage - 1 + i; // Show around current page
                  }
                  return pageNum > 1 && pageNum < totalPages ? (
                    <li key={pageNum}>
                      <button
                        onClick={() => setCurrentPage(pageNum)}
                        className={`rounded-md border border-gray-700 px-4 py-2 ${
                          currentPage === pageNum
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        {pageNum}
                      </button>
                    </li>
                  ) : null;
                })}

                {/* Ellipsis if current page < totalPages - 2 */}
                {currentPage < totalPages - 2 && (
                  <li className="px-2 text-gray-400">...</li>
                )}

                {/* Last page */}
                <li>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`rounded-md border border-gray-700 px-4 py-2 ${
                      currentPage === totalPages
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {totalPages}
                  </button>
                </li>
              </>
            )}

            <li>
              <button
                onClick={() =>
                  setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-400 transition hover:bg-gray-700 disabled:opacity-50"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ImageModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            hasNext={currentIndex < filteredItems.length - 1}
            hasPrevious={currentIndex > 0}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallerySection;
