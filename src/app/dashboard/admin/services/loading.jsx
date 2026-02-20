export default function AdminServicesLoading() {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen animate-pulse">

      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="h-6 w-48 bg-gray-300 rounded"></div>
          <div className="h-4 w-64 bg-gray-300 rounded"></div>
        </div>
        <div className="h-11 w-full md:w-80 bg-gray-300 rounded-2xl"></div>
      </div>

      {/* Category Tabs Skeleton */}
      <div className="flex gap-3 mb-6 overflow-x-auto">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-24 bg-gray-300 rounded-xl"
          ></div>
        ))}
      </div>

      {/* Desktop Table Skeleton */}
      <div className="hidden md:block bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              {Array.from({ length: 6 }).map((_, i) => (
                <th key={i} className="px-6 py-5">
                  <div className="h-3 w-20 bg-gray-300 rounded"></div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i} className="border-t">
                <td className="px-6 py-4 space-y-2">
                  <div className="h-4 w-28 bg-gray-300 rounded"></div>
                  <div className="h-3 w-36 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4 space-y-2">
                  <div className="h-4 w-32 bg-gray-300 rounded"></div>
                  <div className="h-3 w-24 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4 space-y-2">
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                  <div className="h-3 w-16 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4">
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </td>

                <td className="px-6 py-4">
                  <div className="h-8 w-24 bg-gray-300 rounded-xl"></div>
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="h-6 w-16 bg-gray-300 rounded-lg ml-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Skeleton */}
      <div className="md:hidden space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm space-y-4"
          >
            <div className="flex justify-between">
              <div className="space-y-2">
                <div className="h-4 w-28 bg-gray-300 rounded"></div>
                <div className="h-3 w-36 bg-gray-300 rounded"></div>
              </div>
              <div className="h-5 w-12 bg-gray-300 rounded"></div>
            </div>

            <div className="p-3 bg-gray-50 rounded-2xl space-y-2">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="flex gap-4">
                <div className="h-3 w-12 bg-gray-300 rounded"></div>
                <div className="h-3 w-12 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
              <div className="h-5 w-16 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}