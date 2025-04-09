import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { getPost } from '@/lib/graphql';
import { notFound } from 'next/navigation';
import BackButton from '@/components/BackButton';

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BackButton />
      <article className="mx-auto max-w-4xl px-4 py-12 pt-24 md:pt-32">
        <div className="mb-8">
          <h1 className="mb-4 text-center text-4xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-center text-xl text-gray-600 dark:text-gray-400">
              {post.subtitle}
            </p>
          )}
          <div className="mt-6 flex items-center justify-center">
            {post.author.profilePicture && (
              <Image
                src={post.author.profilePicture}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {post.author.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </p>
            </div>
          </div>
        </div>

        {post.coverImage?.url && (
          <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </article>
    </>
  );
}
