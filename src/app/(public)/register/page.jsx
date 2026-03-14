"use client";

import { postUser } from "@/actions/server/auth";
import GoogleLogInButton from "@/Components/Items/GoogleLogInButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (status === "authenticated") {
      router.push("/");
      return;
    }

    const form = e.target;

    const password = form.password.value;

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be 6+ characters with 1 uppercase and 1 lowercase letter",
      });
      return;
    }

    const formData = {
      nid: form.nid.value,
      name: form.name.value,
      email: form.email.value,
      contact: form.contact.value,
      password: password,
    };

    const result = await postUser(formData);

    if (result?.message) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Registered",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/login");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: result?.message || "Registration Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Create Account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Join us today! Please enter your details.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handelSubmit}>

          {/* NID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              NID No
            </label>
            <input
              type="text"
              name="nid"
              placeholder="1234567890"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              placeholder="01XXXXXXXXX"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border"
              required
            />
            <p className="text-xs text-gray-400 mt-1">
              Password must be 6+ characters with 1 uppercase & 1 lowercase
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6">
          <GoogleLogInButton />
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;