'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-8 z-40 hidden md:block"
    >
      <Link
        href="/posts"
        className="group flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:bg-white/20 dark:bg-gray-900/50 dark:hover:bg-gray-900/80"
      >
        <ArrowLeft className="h-5 w-5 text-gray-700 transition-transform group-hover:-translate-x-1 dark:text-gray-200" />
        <span className="text-gray-700 dark:text-gray-200">Back to Posts</span>
      </Link>
    </motion.div>
  );
}