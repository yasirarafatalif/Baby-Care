"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

const LogOutButton = () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="w-full flex items-center gap-3 px-4 py-3 text-sm
                                text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition"
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default LogOutButton;
