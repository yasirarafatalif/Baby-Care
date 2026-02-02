"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogInButton = () => {
  const googleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <button
      onClick={googleLogin}
      className="w-full flex items-center justify-center gap-3
      rounded-xl px-4 py-3 text-sm font-semibold
      bg-white dark:bg-gray-900
      text-gray-700 dark:text-gray-200
      border border-gray-300 dark:border-gray-700
      hover:bg-gray-50 dark:hover:bg-gray-800
      shadow-md hover:shadow-lg
      transition-all duration-300
      active:scale-[0.97]"
    >
      <FcGoogle size={22} />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLogInButton;
