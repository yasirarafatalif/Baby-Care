"use client";

import { usePathname } from "next/navigation";
import AdminMenu from "./AdminMenu";

const pageTitles = {
  "/dashboard/admin": "Dashboard",
  "/dashboard/admin/users": "Users",
  "/dashboard/admin/services": "Services",
  "/dashboard/admin/settings": "Settings",
};

const AdminNavbar = () => {
  const pathname = usePathname();

  const title = pageTitles[pathname] || "Admin Dashboard";

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold ml-2">{title}</h1>

      <div>
        <AdminMenu />
      </div>
    </div>
  );
};

export default AdminNavbar;
