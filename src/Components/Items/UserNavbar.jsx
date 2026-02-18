"use client";

import { usePathname } from "next/navigation";
import AdminMenu from "./AdminMenu";

const pageTitles = {
  "/dashboard/user": "Dashboard",
  "/dashboard/user/services": "Services",
  "/dashboard/user/settings": "Settings",
};

const UserNavbar = () => {
  const pathname = usePathname();

  const title = pageTitles[pathname] || "User Dashboard";

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold ml-2">{title}</h1>

      <div>
        <AdminMenu />
      </div>
    </div>
  );
};

export default UserNavbar;
