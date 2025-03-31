// components/projects/ArchiveLink.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArchive } from 'react-icons/fi';

const ArchiveLink: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <p className="text-slate-600 dark:text-slate-400 mb-5">
        Interested in seeing more of my work?
      </p>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/archive" passHref>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-slate-800 dark:text-slate-200 rounded-md font-medium transition-colors duration-300">
            <FiArchive className="text-emerald-600 dark:text-emerald-400" />
            View Full Project Archive
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ArchiveLink;
