"use client";

import Link from "next/link";
import { useState } from "react";

const UserServicesClient = ({ services }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredServices = services.filter((service) => {
    const matchSearch =
      service.serviceName.toLowerCase().includes(search.toLowerCase()) ||
      service.location.toLowerCase().includes(search.toLowerCase()) ||
      service.category.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" || service.category === category;

    return matchSearch && matchCategory;
  });

  const categories = [
    "all",
    ...new Set(services.map((s) => s.category)),
  ];


  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          My Services
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Search & manage your services
        </p>
      </div>

      {/* 🔍 Search + Category */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by service, location, category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-2/3 px-4 py-2 rounded-lg
                     bg-white dark:bg-gray-900
                     border border-gray-300 dark:border-gray-700
                     text-gray-900 dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 rounded-lg
                     bg-white dark:bg-gray-900
                     border border-gray-300 dark:border-gray-700
                     text-gray-900 dark:text-gray-100"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>
      </div>

      {/* 🧾 Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <div
            key={service.serviceId}
            className="rounded-xl border border-gray-200 dark:border-gray-800
                       bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
          >
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {service.serviceName}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {service.category} • {service.location}
              </p>

              {/* Status */}
              <div className="flex gap-2 text-sm">
                <span
                  className={`px-3 py-1 rounded-full font-medium
                  ${
                    service.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  }`}
                >
                  {service.status}
                </span>

                <span
                  className={`px-3 py-1 rounded-full font-medium
                  ${
                    service.paid === "unpaid"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  }`}
                >
                  {service.paid}
                </span>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total Cost
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  ৳ {service.totalDayCost}
                </p>
              </div>

              {/* 👁️ View Button */}
              <Link
                href={`/dashboard/user/services/${service._id}`}
                className="w-full mt-3 px-4 py-2 rounded-lg
                           bg-blue-600 hover:bg-blue-700
                           text-white font-semibold transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty */}
      {filteredServices.length === 0 && (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400">
          No services found
        </div>
      )}
    </div>
  );
};

export default UserServicesClient;
