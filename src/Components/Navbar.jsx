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
    { name: "Services", href: "/services", icon: <FaShoppingBag /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
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
            <Logo />
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative flex items-center gap-2 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
              >
               {link.icon} {link.name}
                {/* Hover Underline */}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* End: ThemeToggle & User Section */}
          <div className="flex items-center gap-4 hover:cursor-pointer">
           

            {user ? (
              <div className="relative group ">
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
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-400 origin-top-right z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <p className="text-xs text-gray-500">Welcome,</p>
                    <p className="text-sm font-bold truncate">{user.name}</p>
                  </div>
                  <div className="p-1">
                    {/* 01708384876 */}
                    <div>
                      <ThemeToggle />
                      

                    </div>
                     

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
                {/* Login – Elevated Glass Effect */}
                <Link
                  href="/login"
                  className="btn btn-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-8 normal-case border-none shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(93,93,93,0.23)] hover:scale-105 active:scale-95 transition-all duration-300 ring-1 ring-slate-200 dark:ring-slate-700"
                >
                  Login
                </Link>

                {/* Register – Gradient Glow Effect */}
                <Link
                  href="/register"
                  className="btn btn-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl px-8 normal-case border-none shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
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
