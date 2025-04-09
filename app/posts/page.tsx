
import PostGrid from './PostGrid';

export default function Posts() {
  return (
    <div className="lg:mt-30 relative z-10 mb-8 mt-10 px-2">
      <div className="mx-auto mb-8 mt-4 max-w-[1440px]">
        <h1 className="text-center text-4xl font-bold">Posts</h1>
        <h2 className="mb-12 text-center">
          Thoughts, ideas, and insights about web development, web3, AI, and
          machine learning.
        </h2>
        <PostGrid />
      </div>
    </div>
  );
}
