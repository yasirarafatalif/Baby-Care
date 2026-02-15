"use client";

import { useState } from "react";
import { Search, Clock, Calendar, MapPin } from "lucide-react";

const AdminServicsTable = ({ services }) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ক্যাটাগরি লিস্ট তৈরি (Unique Categories)
  const categories = ["All", ...new Set(services.map((item) => item.category))];

  const filteredData = services.filter((item) => {
    const matchesSearch =
      item.username.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.serviceName.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500 font-medium">Monitoring all service requests and bookings</p>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by user, email or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50/50 text-gray-500 border-b border-gray-50">
              <th className="px-6 py-5 text-left font-bold uppercase tracking-wider text-[10px]">Customer</th>
              <th className="px-6 py-5 text-left font-bold uppercase tracking-wider text-[10px]">Service Details</th>
              <th className="px-6 py-5 text-left font-bold uppercase tracking-wider text-[10px]">Booking Period</th>
              <th className="px-6 py-5 text-left font-bold uppercase tracking-wider text-[10px]">Total Cost</th>
              <th className="px-6 py-5 text-left font-bold uppercase tracking-wider text-[10px]">Status</th>
              <th className="px-6 py-5 text-right font-bold uppercase tracking-wider text-[10px]">Payment</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {filteredData.map((item) => (
              <tr key={item._id} className="hover:bg-blue-50/20 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-gray-900">{item.username}</p>
                  <p className="text-xs text-gray-500">{item.email}</p>
                </td>

                <td className="px-6 py-4">
                  <p className="font-bold text-blue-600">{item.serviceName}</p>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-0.5">
                    <MapPin size={12} /> {item.location}
                  </div>
                </td>

                {/* Day / Hour Count */}
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock size={14} className="text-blue-400" />
                      <span className="font-semibold">{item.perHour} Hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[11px]">
                      <Calendar size={14} className="text-orange-400" />
                      <span>{item.perDay} Days</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <p className="font-bold text-gray-900">৳ {item.totalHourCost + item.totalDayCost}</p>
                  <p className="text-[10px] text-gray-400">Total Calculation</p>
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-700">
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
                    item.paid === "paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    {item.paid}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filteredData.map((item) => (
          <div key={item._id} className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-900">{item.username}</p>
                <p className="text-xs text-gray-500">{item.email}</p>
              </div>
              <span className={`px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-tighter ${
                item.paid === "paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {item.paid}
              </span>
            </div>

            <div className="p-3 bg-gray-50 rounded-2xl">
              <p className="font-bold text-blue-600 text-sm">{item.serviceName}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1 text-xs text-gray-600 font-medium">
                  <Clock size={12} className="text-blue-500" /> {item.perHour}h
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-600 font-medium">
                  <Calendar size={12} className="text-orange-500" /> {item.perDay}d
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <p className="font-bold text-lg">৳ {item.totalHourCost + item.totalDayCost}</p>
              <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-[9px] font-bold uppercase">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServicsTable;