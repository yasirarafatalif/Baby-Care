import { dbConnect } from "@/lib/bdConnect";
import React from "react";

const UserSingelServicesPage = async ({ params }) => {
  const { id } = await params;

  const service = await dbConnect("services").findOne({ serviceId: id });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Service not found
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto">
        {/* Card */}
        <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 space-y-6">
          
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {service.serviceName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Category: {service.category}
              </p>
            </div>

            {/* Status Badge */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold
              ${
                service.status === "approved"
                  ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
              }`}
            >
              {service.status}
            </span>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Info label="Location" value={service.location} />
            <Info label="Email" value={service.email} />
            <Info label="Per Hour" value={`৳ ${service.perHour}`} />
            <Info label="Per Day" value={`৳ ${service.perDay}`} />
            <Info label="Total Hour Cost" value={`৳ ${service.totalHourCost}`} />
            <Info label="Total Day Cost" value={`৳ ${service.totalDayCost}`} />
          </div>

          {/* Payment Status */}
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Payment Status
              </p>
              <p
                className={`font-semibold ${
                  service.paid === "paid"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {service.paid}
              </p>
            </div>

            <button className="px-5 py-2 rounded-xl text-sm font-semibold 
              bg-blue-600 text-white hover:bg-blue-700 transition">
              Pay Now
            </button>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 dark:text-gray-500">
            Submitted on: {new Date(service.submitDate).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSingelServicesPage;

/* Small Reusable Component */
const Info = ({ label, value }) => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
    <p className="text-gray-500 dark:text-gray-400 text-xs">{label}</p>
    <p className="font-semibold text-gray-800 dark:text-gray-200">
      {value}
    </p>
  </div>
);
