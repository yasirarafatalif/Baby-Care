export default function Loading() {
  return (
    <div className="animate-pulse">

      {/* Header + Search Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="space-y-2">
          <div className="h-6 w-48 bg-gray-300 rounded"></div>
          <div className="h-4 w-64 bg-gray-300 rounded"></div>
        </div>

        <div className="h-10 w-full md:w-72 bg-gray-300 rounded-lg"></div>
      </div>

      {/* Desktop Table Skeleton */}
      <div className="hidden md:block bg-white rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {Array.from({ length: 5 }).map((_, i) => (
                <th key={i} className="px-6 py-4">
                  <div className="h-3 w-20 bg-gray-300 rounded"></div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y">
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                {/* User */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="h-9 w-9 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </td>

                {/* Email */}
                <td className="px-6 py-4">
                  <div className="h-4 w-36 bg-gray-300 rounded"></div>
                </td>

                {/* Provider */}
                <td className="px-6 py-4">
                  <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                </td>

                {/* Joined */}
                <td className="px-6 py-4">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
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
            className="bg-white border rounded-xl p-4 flex gap-3"
          >
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>

            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-3 w-40 bg-gray-300 rounded"></div>

              <div className="flex gap-2 pt-2">
                <div className="h-5 w-16 bg-gray-300 rounded"></div>
                <div className="h-5 w-14 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}