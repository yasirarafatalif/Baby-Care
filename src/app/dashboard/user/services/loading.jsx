export default function UserServicesLoading() {
  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-950 animate-pulse">

      {/* Header Skeleton */}
      <div className="mb-6 space-y-2">
        <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Search + Category Skeleton */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="h-10 w-full sm:w-2/3 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        <div className="h-10 w-full sm:w-1/3 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
      </div>

      {/* Cards Skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 dark:border-gray-800
                       bg-white dark:bg-gray-900 shadow-sm"
          >
            <div className="p-5 space-y-4">
              {/* Title */}
              <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>

              {/* Category + Location */}
              <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>

              {/* Status Pills */}
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-800">
                <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>

              {/* Button */}
              <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}