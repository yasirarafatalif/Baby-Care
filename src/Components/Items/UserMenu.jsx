"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle, FaTachometerAlt } from "react-icons/fa";
import ThemeToggle from "../ui/ThemeToggle";
import LogOutButton from "./LogOutButton";
import { useSession } from "next-auth/react";

const UserMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { data: session } = useSession();
  const isUser = session?.role === "user";
  const isAdmin = session?.role === "admin";
  

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", handleOutsideClick);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          setOpen((prev) => !prev);
        }}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        {user.image ? (
          <Image
            src={user.image}
            alt="User"
            width={32}
            height={32}
            className="rounded-full border border-blue-500"
          />
        ) : (
          <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-400" />
        )}
        <span className="hidden md:block text-sm font-semibold">
          {user.name?.split(" ")[0]}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl z-50 overflow-hidden animate-scaleIn"
        >
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <p className="text-xs text-gray-500">Welcome,</p>
            <p className="text-sm font-bold truncate">{user.name}</p>
          </div>

          <div className="p-1 space-y-1">
            <ThemeToggle />

           

            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <FaUserCircle className="text-purple-500" />
              Profile
            </Link>
            {
                isAdmin && (
                 <Link
              href="/dashboard/admin"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <FaTachometerAlt className="text-blue-500" />
              Dashboard
            </Link>
            )
            }
            {
                isUser && (
                 <Link
              href="/dashboard/user"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <FaTachometerAlt className="text-blue-500" />
              Dashboard
            </Link>
            )
            }
          </div>

          <div className="p-1 border-t border-gray-100 dark:border-gray-800">
            <LogOutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
