"use client";
import React from "react";
import AdminMenu from "./AdminMenu";
import { useSession } from "next-auth/react";
import UserMenu from "./UserMenu";

const AdminNavbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="bg-gray-800 text-white p-4  flex items-center justify-between">
      <h1 className="text-xl font-bold ml-2">Admin Dashboard</h1>

      <div className="border-t border-gray-800 bg-gray-900/60">
      {/* <UserMenu user={user} /> */}
        <AdminMenu user={user} />
      </div>
    </div>
  );
};

export default AdminNavbar;
