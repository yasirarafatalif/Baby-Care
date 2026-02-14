// app/dashboard/admin/layout.jsx
"use client";

import AdminNavbar from "@/Components/Items/AdminNavbar";
import AdminSidebar from "@/Components/Items/AdminSidebar";




export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1">
        <AdminNavbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
