import AdminNavbar from "@/Components/Items/AdminNavbar";
import AdminSidebar from "@/Components/Items/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex  bg-gray-100">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="ml-0 md:ml-64 w-full flex flex-col">
        <AdminNavbar />

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
