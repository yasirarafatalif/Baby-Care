const ServicesSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm animate-pulse border border-gray-100 dark:border-gray-800">
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
      <div className="mt-6 flex justify-between items-center">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-24"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-full w-8"></div>
      </div>
    </div>
  );
};

export default ServicesSkeleton;