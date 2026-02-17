// app/dashboard/layout.jsx
"use client";

import UserNavbar from "@/Components/Items/UserNavbar";
import UserSideBar from "@/Components/Items/UserSideBar";
import { useState } from "react";


export default function UserLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-950">
      
      <UserSideBar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col">
        <UserNavbar setOpen={setOpen} />

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
