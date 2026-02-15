"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

export default function UsersTable({ users }) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Users Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage all registered users
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Provider</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Joined</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredUsers.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <Image
                    src={user.image || "/avatar.png"}
                    alt={user.name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <span className="font-medium">{user.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600">
                    {user.provider || "Email"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.role === "admin" ? (
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      Admin
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100">
                      User
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white border rounded-xl p-4 flex gap-3"
          >
            <Image
              src={user.image || "/avatar.png"}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />

            <div className="flex-1">
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>

              <div className="flex gap-2 mt-2">
                <span className="px-2 py-0.5 text-xs rounded bg-blue-50 text-blue-600">
                  {user.provider}
                </span>
                <span
                  className={`px-2 py-0.5 text-xs rounded ${
                    user.role === "admin"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100"
                  }`}
                >
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
