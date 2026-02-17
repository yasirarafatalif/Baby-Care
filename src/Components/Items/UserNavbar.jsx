// components/dashboard/Navbar.jsx
"use client";

import { Menu } from "lucide-react";

export default function UserNavbar({ setOpen }) {
  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 md:px-6">
      
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Hello, User
        </span>
        <button className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600">
          Logout
        </button>
      </div>
    </header>
  );
}
