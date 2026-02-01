"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gray-50 dark:bg-gray-900 
      text-center px-4 transition-colors duration-300"
    >
      <h1 className="text-8xl font-extrabold text-red-500 dark:text-red-400">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Page Not Found 
      </h2>

      <p className="mt-2 max-w-md text-gray-600 dark:text-gray-400">
        Sorry, you are trying to access a page that does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-lg 
          bg-blue-600 dark:bg-blue-500 
          px-6 py-3 text-white font-medium 
          hover:bg-blue-700 dark:hover:bg-blue-600 
          transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
