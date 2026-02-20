import { dbConnect } from "@/lib/bdConnect";
import { Calendar, Clock } from "lucide-react";
import AdminServicesCompletedLoading from "./loading";

const CompletedServices = async () => {
  const services = await dbConnect("services")
    .find({ status: "completed" })
    .toArray();

    if (!services) {
      return <AdminServicesCompletedLoading />;
    }

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          ✅ Completed Services
        </h1>
        <p className="text-sm text-gray-500">
          All successfully completed services are listed here
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-center">Per Day</th>
              <th className="px-4 py-3 text-center">Per Hour</th>
              <th className="px-4 py-3 text-center">Total Cost</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {services.map((service) => (
              <tr key={service._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">
                  {service.serviceName}
                </td>
                <td className="px-4 py-3">{service.category}</td>
                <td className="px-4 py-3">
                  <p className="font-medium">{service.username}</p>
                  <p className="text-xs text-gray-500">{service.email}</p>
                </td>
                <td className="px-4 py-3">{service.location}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock size={14} className="text-blue-400" />
                    <span className="font-semibold">
                      {service.perHour} Hours
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-gray-500 text-[11px]">
                    <Calendar size={14} className="text-orange-400" />
                    <span>{service.perDay} Days</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center font-bold text-green-600">
                  ৳ {service.totalDayCost + service.totalHourCost}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                    Completed
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {new Date(service.submitDate).toLocaleDateString()}
                </td>
              </tr>
            ))}

            {services.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-10 text-gray-500">
                  No completed services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedServices;
