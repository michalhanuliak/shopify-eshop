export function ProductCardSkeleton() {
  return (
    <div
      className="animate-pulse hover:shadow-lg focus:outline-blue-500 bg-gray-100 rounded-lg h-fit"
      aria-hidden="true"
    >
      <div className="h-48 bg-gray-300 rounded-t-lg"></div>

      <div className="p-4">
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>

        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-2">
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
