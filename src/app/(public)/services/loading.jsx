import ServicesSkeleton from "@/Components/Items/Skeleton/ServicesSkeleton";


export default function Loading() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="text-center max-w-3xl mx-auto pt-16 pb-10 px-4">
        <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full max-w-md mx-auto animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <ServicesSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}