"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { IoIosHome } from "react-icons/io";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import AdminMenu from "./AdminMenu";

export default function AdminSidebar() {
  const { data: session } = useSession();
  const user = session?.user;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    pathname === path
      ? "bg-blue-600 text-white"
      : "text-gray-400 hover:bg-gray-800 hover:text-white";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 p-2 rounded-lg border border-gray-700"
      >
        <Menu className="text-white" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen w-64
        bg-gray-950 text-white border-r border-gray-800
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 flex flex-col`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-500" size={26} />
            <h2 className="text-lg font-bold">Admin Panel</h2>
          </div>

          <button onClick={() => setOpen(false)} className="md:hidden">
            <X />
          </button>
        </div>

        {/* Nav */}
        <nav className="px-4 space-y-2 flex-1">
          <p className="text-xs text-gray-500 uppercase mb-3">Main Menu</p>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-lg "
            )}`}
          >
            <IoIosHome size={18} />
            Home
          </Link>

          <Link
            href="/dashboard/admin"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-lg ${isActive(
              "/dashboard/admin"
            )}`}
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            href="/dashboard/admin/users"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-lg ${isActive(
              "/dashboard/admin/users"
            )}`}
          >
            <Users size={18} />
            Users
          </Link>

          <Link
            href="/dashboard/admin/products"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-lg ${isActive(
              "/dashboard/admin/products"
            )}`}
          >
            <Package size={18} />
            Products
          </Link>

          <Link
            href="/dashboard/admin/settings"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-lg ${isActive(
              "/dashboard/admin/settings"
            )}`}
          >
            <Settings size={18} />
            Settings
          </Link>
        </nav>

        {/* Bottom Admin Menu */}
        <div className="border-t border-gray-800 p-4 bg-gray-900/60">
          {/* <AdminMenu user={user} /> */}
        </div>
      </aside>
    </>
  );
}
