'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/graphql';
import { PostMetadata } from '@/lib/types';
import { IoArrowForward } from 'react-icons/io5';

const FeaturedBlogs = () => {
  const [featuredPosts, setFeaturedPosts] = useState<PostMetadata[]>([]);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      const posts = await getPosts({
        first: 3,
        pageParam: '',
        meta: undefined,
        queryKey: ['posts'],
        signal: new AbortController().signal,
        client: undefined as any
      });
      setFeaturedPosts(posts.map((edge) => edge.node));
    };
    fetchFeaturedPosts();
  }, []);

  return (
    <section className="relative overflow-hidden py-20 featured-blogs-section">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -left-20 top-0 h-72 w-72 rounded-full  blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full  blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Featured Articles
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg"
            >
              {/* Card inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                {post.coverImage?.url && (
                  <Image
                    src={post.coverImage.url}
                    alt={post.title}
                    fill
                    className="transform object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-gray-300">
                  {post.subtitle || post.content.text.substring(0, 120) + '...'}
                </p>

                {/* Author info */}
                <div className="flex items-center">
                  {post.author.profilePicture && (
                    <Image
                      src={post.author.profilePicture}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full ring-2 ring-purple-500/50"
                    />
                  )}
                  <span className="ml-2 text-sm text-gray-300">
                    {post.author.name}
                  </span>
                </div>

                {/* Read More Link */}
                <Link href={`/posts/${post.slug}`}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-4 flex items-center text-purple-400 hover:text-purple-300"
                  >
                    Read More <IoArrowForward className="ml-2" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link href="/posts">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/25"
            >
              View All Blogs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
