// Components/admin/AdminSidebar.jsx
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64  bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-3 flex flex-col">
        <Link href="/dashboard/admin">Dashboard</Link>
        <Link href="/dashboard/admin/users">Users</Link>
        <Link href="/dashboard/admin/products">Products</Link>
        <Link href="/dashboard/admin/settings">Settings</Link>
      </nav>
    </aside>
  );
}
