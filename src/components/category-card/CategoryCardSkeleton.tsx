export function CategoryCardSkeleton() {
  return (
    <div
      className="bg-gray-200 animate-pulse flex flex-col p-4 rounded-lg shadow-md"
      aria-hidden="true"
    >
      <div className="flex justify-between mb-4">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>

        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
      </div>

      <div className="h-5 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-5 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
}
