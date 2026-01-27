import Link from "next/link";
import { FaUserCircle, FaBars, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import ThemeToggle from "./ui/ThemeToggle";
import Logo from "./ui/logo";

const Navbar = () => {
  const user = {
    name: "Yasir", // demo user
  };

  const NavLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <nav className=" w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Logo></Logo>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NavLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-gray-600 dark:text-gray-300 font-medium
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                           after:bg-blue-600 dark:after:bg-blue-400
                           hover:after:w-full after:transition-all after:duration-300
                           hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Section */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-300" />
                  <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-200">
                    {user.name}
                  </span>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-44 rounded-xl shadow-lg
                                bg-white dark:bg-gray-900 border dark:border-gray-800
                                opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                                transition-all origin-top-right">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 text-sm
                               hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <FaTachometerAlt /> Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm
                               hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <FaUserCircle /> Profile
                  </Link>
                  <button
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500
                               hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm
                             hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Button */}
            <label
              htmlFor="nav-toggle"
              className="md:hidden cursor-pointer p-2 dark:text-gray-300"
            >
              <FaBars className="text-xl" />
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <input type="checkbox" id="nav-toggle" className="hidden peer" />
      <div className="hidden peer-checked:block md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
        <div className="px-4 py-4 space-y-4">
          {NavLinks.map((item) => (
            <Link
              key={item}
              href="/"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
