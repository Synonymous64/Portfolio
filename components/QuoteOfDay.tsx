'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

interface Quote {
  content: string;
  author: string;
  tags: string[];
}

export function QuoteOfDay() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuoteOfDay = async () => {
      try {
        // Get today's date as a key for caching
        const today = new Date().toDateString();
        const cacheKey = `quote-of-day-${today}`;

        // Check if we have a cached quote for today
        const cachedQuote = localStorage.getItem(cacheKey);
        if (cachedQuote) {
          setQuote(JSON.parse(cachedQuote));
          setLoading(false);
          return;
        }

        // Fetch new quote from API
        const response = await fetch('/api/quote-of-day');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = (await response.json()) as Quote;
        setQuote(data);

        // Cache the quote for today only
        localStorage.setItem(cacheKey, JSON.stringify(data));

        // Clean up old quotes from cache (older than 7 days)
        const now = Date.now();
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith('quote-of-day-')) {
            const dateStr = key.replace('quote-of-day-', '');
            const dateObj = new Date(dateStr);
            const daysDiff = Math.floor(
              (now - dateObj.getTime()) / (1000 * 60 * 60 * 24)
            );
            if (daysDiff > 7) {
              localStorage.removeItem(key);
            }
          }
        });

        setError(null);
      } catch (err) {
        console.error('Error fetching quote:', err);
        setError(
          err instanceof Error ? err.message : 'Failed to fetch quote'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchQuoteOfDay();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin h-8 w-8 border-4 border-purple-400 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error || !quote) {
    return (
      <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
        <p className="text-red-400">Unable to load quote today. Try refreshing.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="relative bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 border border-purple-400/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
        {/* Decorative quote marks */}
        <div className="absolute top-4 left-4 text-4xl text-purple-400/30 font-serif">
          &apos;
        </div>
        <div className="absolute bottom-4 right-4 text-4xl text-purple-400/30 font-serif">
          &apos;
        </div>

        {/* Quote content */}
        <div className="relative z-10 space-y-4 md:space-y-6">
          <blockquote className="text-lg md:text-2xl leading-relaxed text-gray-100 font-medium">
            {quote.content}
          </blockquote>

          {/* Author */}
          <div className="space-y-2">
            <p className="text-sm md:text-base text-purple-300 font-semibold">
              — {quote.author}
            </p>
          </div>

          {/* Tags */}
          {quote.tags && quote.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {quote.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs md:text-sm rounded-full border border-purple-400/30 hover:bg-purple-500/30 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Daily indicator */}
          <div className="pt-2 text-xs text-gray-400">
            📅 Today&apos;s Quote
          </div>
        </div>
      </div>
    </motion.div>
  );
}
