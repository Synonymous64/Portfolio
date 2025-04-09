'use client';

import Image from 'next/image';
import Link from 'next/link';
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
        {data?.pages.map((group) =>
          group.map(({ node, cursor }) => (
            <Link
              key={node.id}
              href={`/posts/${node.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg dark:border-gray-800"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {node.coverImage?.url && (
                  <Image
                    src={node.coverImage.url}
                    alt={node.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {node.title}
                  </h3>
                  <p className="line-clamp-3 text-gray-600 dark:text-gray-400">
                    {node.subtitle || node.content.text.slice(0, 150)}...
                  </p>
                </div>
                <div className="mt-4 flex items-center">
                  {node.author.profilePicture && (
                    <Image
                      src={node.author.profilePicture}
                      alt={node.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {node.author.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )),
        )}
      </div>
      {hasNextPage && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetching}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isFetching ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
}
