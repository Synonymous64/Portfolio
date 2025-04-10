'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '@/lib/graphql';

export default function PostGrid() {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    getNextPageParam: (lastPage) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: '',
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.pages.map((group, pageIndex) =>
          group.map(({ node }, index) => (
            <Link key={node.id} href={`/posts/${node.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (pageIndex * group.length + index) * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg transition-all duration-300 hover:ring-2 hover:ring-purple-500/50"
              >
                {/* Card inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  {node.coverImage?.url && (
                    <Image
                      src={node.coverImage.url}
                      alt={node.title}
                      fill
                      className="transform object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-purple-400">
                    {node.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-gray-300">
                    {node.subtitle || node.content.text.substring(0, 120) + '...'}
                  </p>

                  {/* Author info */}
                  <div className="flex items-center">
                    {node.author.profilePicture && (
                      <Image
                        src={node.author.profilePicture}
                        alt={node.author.name}
                        width={32}
                        height={32}
                        className="rounded-full ring-2 ring-purple-500/50"
                      />
                    )}
                    <span className="ml-2 text-sm text-gray-300">
                      {node.author.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        )}
      </div>

      {/* Load More Button */}
      {hasNextPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={() => fetchNextPage()}
            disabled={isFetching}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/25 disabled:opacity-50"
          >
            {isFetching ? 'Loading...' : 'Load More Posts'}
          </motion.button>
        </motion.div>
      )}
    </>
  );
}
