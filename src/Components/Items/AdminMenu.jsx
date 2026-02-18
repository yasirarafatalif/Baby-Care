"use client";

import Link from "next/link";
import { Shield, LogOut, Settings, User, ChevronDown } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function AdminMenu() {
  const { data: session } = useSession();
    const user = session?.user;
    
  return (
    <div className="relative group">
      {/* Dropdown menu (DOWN) */}
      <div className="
        absolute top-full left-0 w-full
        bg-gray-800 border border-gray-700 rounded-xl shadow-2xl
        overflow-hidden
        transform scale-95 opacity-0 -translate-y-2
        group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200 origin-top
      ">
        <div className="p-3 border-b border-gray-700 bg-gray-800/50">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Account
          </p>
        </div>

        <div className="p-2 space-y-1">
          <Link
            href="/dashboard/admin/profile"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
          >
            <User size={16} />
            <span>My Profile</span>
          </Link>

          <Link
            href="/dashboard/admin/settings"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
          >
            <Settings size={16} />
            <span>System Settings</span>
          </Link>

          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Trigger */}
      <div className="
        flex items-center justify-between gap-3 p-3
        rounded-xl bg-gray-800/40 hover:bg-gray-800
        border border-transparent hover:border-gray-700
        cursor-pointer transition-all
      ">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold border-2 border-gray-700">
              {user?.image ? (
                <Image
                width={40}
                height={40}
                src={user?.image} alt="User" className="w-full h-full rounded-full object-cover" />
              ) : (
                <User size={20} />
              )}
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-bold text-white truncate max-w-[100px]">
              {user?.name || "Admin"}
            </p>
            <div className="flex items-center gap-1 text-[10px] text-blue-400 font-medium uppercase tracking-[1px]">
              <Shield size={10} />
              <span>{session?.role || "Admin"}</span>
            </div>
          </div>
        </div>

        <ChevronDown
          size={16}
          className="text-gray-500 group-hover:text-white transition-transform group-hover:rotate-180"
        />
      </div>
    </div>
  );
}
