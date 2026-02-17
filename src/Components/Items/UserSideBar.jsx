
"use client";

import Link from "next/link";

export default function UserSideBar({ open, setOpen }) {
  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50
          h-full w-64
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-800
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b dark:border-gray-800">
          User Panel
        </div>

        <nav className="p-4 space-y-2">
          {[
            { name: "Dashboard", path: "/dashboard" },
            { name: "Profile", path: "/dashboard/profile" },
            { name: "My Services", path: "/dashboard/services" },
            { name: "Settings", path: "/dashboard/settings" },
          ].map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.name}
              </div>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
