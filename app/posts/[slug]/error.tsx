'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
      <Link
        href="/posts"
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Return to Posts
      </Link>
    </div>
  );
}