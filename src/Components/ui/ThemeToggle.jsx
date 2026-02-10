"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="
        flex items-center gap-2
        px-3 py-2 rounded-full
        bg-white/80 dark:bg-gray-900/80
        border border-gray-200 dark:border-gray-700
        shadow-md hover:shadow-lg
        transition-all duration-300
        hover:scale-105 active:scale-95
      "
    >
      {/* Icon */}
      {isDark ? (
        <FiSun className="text-yellow-400 text-xl transition-transform duration-300" />
      ) : (
        <FiMoon className="text-indigo-500 text-xl transition-transform duration-300" />
      )}

      {/* Label */}
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 select-none">
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}

export default ThemeToggle;
