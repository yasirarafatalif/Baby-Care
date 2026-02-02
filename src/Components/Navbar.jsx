import Link from "next/link";
import {
  FaUserCircle,
  FaBars,
  FaTachometerAlt,
  FaHome,
  FaShoppingBag,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import ThemeToggle from "./ui/ThemeToggle";
import Logo from "./ui/logo";
import LogOutButton from "./Items/LogOutButton";
import { FaRegCircleUser } from "react-icons/fa6";
import LogIn from "./Items/LogIn";

const Navbar = ({ session }) => {
  const user = session?.user || null;
  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Shop", href: "/shop", icon: <FaShoppingBag /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-2">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <FaBars className="text-xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52 border border-gray-100 dark:border-gray-800"
              >
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 py-2"
                    >
                      {link.icon} {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Logo /> {/* Tomar Logo Component */}
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* End: ThemeToggle & User Section */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  {/* <FaRegCircleUser  /> */}
                  {user.image ? (
                    <img
                      src={user.image}
                      alt="User"
                      className="w-8 h-8 rounded-full border border-blue-500"
                    />
                  ) : (
                    // <FaRegCircleUser  />
                    <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-400" />
                  )}
                  <span className="hidden md:block text-sm font-semibold">
                    {user.name.split(" ")[0]}
                  </span>
                </button>

                {/* Profile Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-right z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <p className="text-xs text-gray-500">Welcome,</p>
                    <p className="text-sm font-bold truncate">{user.name}</p>
                  </div>
                  <div className="p-1">
                    {/* 01708384876 */}


                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition"
                    >
                      <FaTachometerAlt className="text-blue-500" /> Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition"
                    >
                      <FaUserCircle className="text-purple-500" /> Profile
                    </Link>
                  </div>
                  <div className="p-1 border-t border-gray-100 dark:border-gray-800">
                    <LogOutButton />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                {/* Login – Primary */}
                <Link
                  href="/login"
                  className="btn btn-sm btn-primary rounded-full px-6 normal-case
    shadow-md hover:shadow-lg transition-all"
                >
                  Login
                </Link>
               
                

                {/* Register – Outline */}
                <Link
                  href="/register"
                  className="btn btn-sm btn-outline btn-primary rounded-full px-6 normal-case
    hover:bg-primary hover:text-primary-content transition-all"
                >
                  Register
                </Link>
                
              </div>
              
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
