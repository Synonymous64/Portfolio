import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl transition-all duration-300 hover:border-purple-500 hover:shadow-2xl"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.coverImage || '/placeholder-image.jpg'}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-3 left-3 flex items-center space-x-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-purple-400">
            <Image
              src={post.author.profilePicture || '/placeholder-avatar.jpg'}
              alt={post.author.name}
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="text-sm font-medium text-white">
            {post.author.name}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs text-purple-300">
              {formatDistanceToNow(new Date(post.dateAdded), {
                addSuffix: true,
              })}
            </span>
            <span className="rounded-full bg-purple-900/50 px-2 py-1 text-xs text-purple-300">
              {post.readTime} min read
            </span>
          </div>
          <h3 className="mb-2 line-clamp-2 text-xl font-bold text-white transition-colors hover:text-purple-300">
            <Link href={`/blog/${post.slug}`} className="block">
              {post.title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-sm text-gray-300">{post.brief}</p>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4"
        >
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
          >
            Read More
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
