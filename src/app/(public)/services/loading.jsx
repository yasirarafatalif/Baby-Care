const ServicesLoading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Care Services
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow animate-pulse"
          >
            {/* Image skeleton */}
            <div className="h-48 w-full bg-gray-300 rounded-t-2xl"></div>

            <div className="p-5 space-y-4">
              {/* Title */}
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>

              {/* Description */}
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>

              {/* Price */}
              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>

              {/* Button */}
              <div className="h-10 bg-gray-300 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLoading;
