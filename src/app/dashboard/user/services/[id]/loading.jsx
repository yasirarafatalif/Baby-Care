export default function UserServicesDetalisPageLoading() {
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-gray-950 animate-pulse">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 
        border border-gray-200 dark:border-gray-800 p-6 space-y-6">

          {/* Header Skeleton */}
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>

          {/* Info Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 space-y-2"
              >
                <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>

          {/* Payment Section Skeleton */}
          <div className="flex items-center justify-between 
          bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div className="space-y-2">
              <div className="h-3 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-9 w-28 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
          </div>

          {/* Footer Skeleton */}
          <div className="h-3 w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}