'use client';

import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { getPost } from '@/lib/graphql';
import { notFound } from 'next/navigation';
import BackButton from '@/components/BackButton';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IoArrowUp } from 'react-icons/io5';

export default function PostPage({ params }: { params: { slug: string } }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(params.slug);
      if (!data) notFound();
      setPost(data);
    };
    fetchPost();
  }, [params.slug]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!post) return null;

  return (
    <div className="relative min-h-screen bg-gradient-to-br">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMDIwMjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI5IDAgYTI5IDI5IDAgMSAwIDU4IDAgYTI5IDI5IDAgMSAwIC01OCAwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjI1Ii8+PC9nPjwvc3ZnPg==')] opacity-10" />

      <BackButton />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-4 py-12 pt-24 md:pt-32"
      >
        <div className="mb-8 rounded-2xl bg-white/5 p-8 backdrop-blur-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-bold text-transparent"
          >
            {post.title}
          </motion.h1>

          {post.subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-xl text-gray-300/90"
            >
              {post.subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex items-center justify-center"
          >
            {post.author.profilePicture && (
              <Image
                src={post.author.profilePicture}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full ring-2 ring-purple-500/50"
              />
            )}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-200">
                {post.author.name}
              </p>
              <p className="text-sm text-gray-400">
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </p>
            </div>
          </motion.div>
        </div>

        {post.coverImage?.url && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl"
          >
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="prose prose-lg mx-auto prose-headings:text-gray-200 prose-p:text-gray-300 prose-a:text-purple-400 prose-blockquote:text-gray-300 prose-strong:text-gray-200 prose-code:text-purple-300"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </motion.article>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transition-all hover:scale-110"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoArrowUp className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
