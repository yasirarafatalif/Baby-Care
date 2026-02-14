const ServiceSingleSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Skeleton */}
        <div className="w-full h-[350px] bg-gray-200 rounded-2xl"></div>

        {/* Info Skeleton */}
        <div>
          {/* Category */}
          <div className="w-32 h-6 bg-gray-200 rounded-full mb-4"></div>

          {/* Title */}
          <div className="w-3/4 h-8 bg-gray-200 rounded mb-4"></div>

          {/* Short Description */}
          <div className="space-y-2 mb-6">
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
          </div>

          {/* Price Cards */}
          <div className="flex gap-4 mb-6">
            <div className="w-32 h-24 bg-gray-200 rounded-xl"></div>
            <div className="w-32 h-24 bg-gray-200 rounded-xl"></div>
          </div>

          {/* Button */}
          <div className="w-48 h-12 bg-gray-200 rounded-xl"></div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <div className="w-64 h-7 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10">
        <div className="w-48 h-7 bg-gray-200 rounded mb-4"></div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-12 bg-gray-200 rounded-xl"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSingleSkeleton;
