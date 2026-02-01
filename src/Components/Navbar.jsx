import Link from "next/link";
import {
  FaUserCircle,
  FaBars,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import ThemeToggle from "./ui/ThemeToggle";
import Logo from "./ui/logo";
import { signOut } from "next-auth/react";
import LogOutButton from "./Items/LogOutButton";

const Navbar = ({ session }) => {
  const user = session?.user || null;
  const NavLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <nav className=" top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NavLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative font-medium text-gray-600 dark:text-gray-300
                transition-colors hover:text-blue-600 dark:hover:text-blue-400
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                after:bg-blue-600 dark:after:bg-blue-400
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <ThemeToggle />

            {/* User */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-300" />
                  <span className="hidden sm:block text-sm font-medium">
                    {user.name}
                  </span>
                </button>

                {/* Dropdown */}
                <div
                  className="absolute right-0 mt-3 w-48 rounded-xl overflow-hidden
                  bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
                  shadow-xl opacity-0 scale-95 translate-y-2
                  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                  transition-all duration-200 origin-top-right"
                >
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-sm
                    hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <FaTachometerAlt /> Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-sm
                    hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <FaUserCircle /> Profile
                  </Link>

                  {/* <button
                  onClick={()=>signOut()}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm
                    text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition"
                  >
                    <FaSignOutAlt /> Logout
                  </button> */}
                  <LogOutButton></LogOutButton>
                </div>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2 rounded-full text-sm text-white
                  bg-blue-600 hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Toggle */}
            <label
              htmlFor="nav-toggle"
              className="md:hidden p-2 cursor-pointer"
            >
              <FaBars className="text-xl" />
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <input type="checkbox" id="nav-toggle" className="hidden peer" />

      <div className="peer-checked:block hidden md:hidden
        bg-white dark:bg-gray-900 border-t dark:border-gray-800">
        <div className="px-6 py-4 space-y-4">
          {NavLinks.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block font-medium hover:text-blue-600"
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
