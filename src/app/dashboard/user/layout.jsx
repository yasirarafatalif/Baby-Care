
import UserNavbar from "@/Components/Items/UserNavbar";
import UserSideBar from "@/Components/Items/UserSideBar";

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen flex  bg-gray-100">
      {/* Fixed Sidebar */}
      <UserSideBar />

      {/* Main Content */}
      <div className="ml-0 md:ml-64 w-full flex flex-col">
        <UserNavbar />

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
