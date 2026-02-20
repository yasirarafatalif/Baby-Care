export default function AdminServicesCompletedLoading() {
  return (
    <div className="p-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6 space-y-2">
        <div className="h-6 w-56 bg-gray-300 rounded"></div>
        <div className="h-4 w-80 bg-gray-300 rounded"></div>
      </div>

      {/* Table Skeleton */}
      <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              {Array.from({ length: 9 }).map((_, i) => (
                <th key={i} className="px-4 py-4">
                  <div className="h-3 w-20 bg-gray-300 rounded"></div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y">
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                {/* Service */}
                <td className="px-4 py-4">
                  <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </td>

                {/* Category */}
                <td className="px-4 py-4">
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </td>

                {/* User */}
                <td className="px-4 py-4 space-y-2">
                  <div className="h-4 w-28 bg-gray-300 rounded"></div>
                  <div className="h-3 w-36 bg-gray-300 rounded"></div>
                </td>

                {/* Location */}
                <td className="px-4 py-4">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </td>

                {/* Per Day */}
                <td className="px-4 py-4 text-center">
                  <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>
                </td>

                {/* Per Hour */}
                <td className="px-4 py-4 text-center">
                  <div className="h-4 w-16 bg-gray-300 rounded mx-auto"></div>
                </td>

                {/* Total Cost */}
                <td className="px-4 py-4 text-center">
                  <div className="h-4 w-20 bg-gray-300 rounded mx-auto"></div>
                </td>

                {/* Status */}
                <td className="px-4 py-4 text-center">
                  <div className="h-6 w-20 bg-gray-300 rounded-full mx-auto"></div>
                </td>

                {/* Date */}
                <td className="px-4 py-4">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}