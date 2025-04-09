export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl animate-pulse px-4 py-12">
      <div className="mb-8">
        <div className="mb-4 h-12 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-6 rounded bg-gray-200 dark:bg-gray-800" />
      </div>
      <div className="mb-8 h-[400px] rounded-lg bg-gray-200 dark:bg-gray-800" />
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-4 rounded bg-gray-200 dark:bg-gray-800"
          />
        ))}
      </div>
    </div>
  );
}