"use client";

import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import GoogleLogInButton from "@/Components/Items/GoogleLogInButton";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    Swal.fire({
      title: "Login Successful",
      icon: "success",
      draggable: true,
    });

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: true,
    });
  };

  const googleLogin = () => {
    Swal.fire({
      title: "Login Successful",
      icon: "success",
      draggable: true,
    });
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-transparent dark:border-gray-700">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Login to access your dashboard
          </p>
        </div>

        <form className="space-y-5" onSubmit={handelSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              placeholder="example@mail.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <a
                href="#"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <Link
          href="/register"
          className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          Don't have an account?{" "}
          <span
            href="#"
            className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
          >
            Register
          </span>
        </Link>
        <div className="mt-3">
          <GoogleLogInButton></GoogleLogInButton>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
