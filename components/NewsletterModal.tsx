'use client';

import { motion, AnimatePresence } from 'framer-motion';
import NewsletterForm from './NewsletterForm';
import { IoClose } from 'react-icons/io5';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-[50%] top-[50%] z-[70] w-[95%] max-w-md -translate-x-1/2 -translate-y-1/2 transform px-2 sm:w-full sm:px-0 md:max-w-lg"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/95 p-4 shadow-xl backdrop-blur-xl sm:p-6">
              {/* Close button with improved visibility */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-gray-400 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close modal"
              >
                <IoClose size={20} />
              </motion.button>

              {/* Content */}
              <div className="relative z-[1]">
                <NewsletterForm isModal={true} onClose={onClose} />
              </div>

              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-50" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}