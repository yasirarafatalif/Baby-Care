"use client";
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
import Image from "next/image";
import UserMenu from "./Items/UserMenu";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

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

          {
            /* User Section */
            user ? (
              <UserMenu user={user} />
            ) : (
              <div className="flex items-center gap-3">
                {/* Login */}
                <Link
                  href="/login"
                  className="relative px-5 py-2 text-sm font-semibold text-blue-600 
        rounded-full border border-blue-600/40 
        backdrop-blur-md bg-white/40 dark:bg-gray-900/40
        hover:bg-blue-50 dark:hover:bg-gray-800
        transition-all duration-300"
                >
                  Login
                </Link>

                {/* Register */}
                <Link
                  href="/register"
                  className="relative px-5 py-2 text-sm font-semibold text-white 
        rounded-full bg-gradient-to-r from-blue-600 to-indigo-600
        shadow-lg shadow-blue-500/30
        hover:scale-105 hover:shadow-indigo-500/40
        transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            )
          }

          {/* <UserMenu user={user} /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
