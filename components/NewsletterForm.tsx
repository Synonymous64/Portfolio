'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter } from '@/lib/graphql';
import {
  IoMailOutline,
  IoCheckmarkCircle,
  IoAlertCircle,
} from 'react-icons/io5';
import { ClientError } from 'graphql-request';

interface NewsletterFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function NewsletterForm({ isModal, onClose }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Check if user already subscribed
    if (localStorage.getItem('newsletter')) return;

    if (!isModal) {
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await subscribeToNewsletter(email);
      localStorage.setItem('newsletter', email);
      setStatus('success');
      setMessage('Subscribed to newsletter! Check your email to confirm your subscription.');
      setEmail('');

      // Hide form after success
      setTimeout(() => {
        if (isModal && onClose) {
          onClose();
        } else {
          setShowForm(false);
        }
      }, 3000);
    } catch (error) {
      setStatus('error');
      if (error instanceof ClientError) {
        // Handle GraphQL errors
        const errorMessage =
          error.response.errors?.[0]?.message || 'Something went wrong!';
        setMessage(errorMessage);
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    }
  };

  if (!isModal && !showForm) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className={`relative ${
        isModal ? 'mt-4' : 'mt-16'
      } rounded-2xl p-4 sm:p-6`}
    >
      <div className="text-center">
        <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
          Stay Updated
        </h3>
        <p className="text-sm text-gray-300/90 sm:text-base">
          Get notified about the latest posts and updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 pl-10 text-base text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            required
          />
          <IoMailOutline className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'loading'}
          className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-base font-medium text-white shadow-lg transition-all hover:from-purple-500 hover:to-pink-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
        </motion.button>
      </form>

      {/* Status message with improved visibility */}
      {status !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 flex items-center justify-center space-x-2 rounded-lg ${
            status === 'success' ? 'bg-green-500/10' : 'bg-red-500/10'
          } p-3 text-sm sm:text-base`}
        >
          {status === 'success' ? (
            <IoCheckmarkCircle className="h-5 w-5 text-green-400" />
          ) : (
            <IoAlertCircle className="h-5 w-5 text-red-400" />
          )}
          <span className={status === 'success' ? 'text-green-400' : 'text-red-400'}>
            {message}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
