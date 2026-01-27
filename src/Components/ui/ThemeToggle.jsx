"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center
                 w-10 h-10 rounded-full
                 bg-gray-100 dark:bg-gray-800
                 text-gray-800 dark:text-gray-100
                 shadow-md hover:shadow-lg
                 transition-all duration-300
                 hover:scale-105"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-400 text-lg transition-transform rotate-0" />
      ) : (
        <FiMoon className="text-indigo-500 text-lg transition-transform rotate-0" />
      )}
    </button>
  );
}

export default ThemeToggle;
