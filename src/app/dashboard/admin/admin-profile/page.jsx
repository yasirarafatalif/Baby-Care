import { userfind } from "@/actions/server/services";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

import React from "react";

const MyProfilePage = async () => {

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const user = await userfind(email);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            My Profile
          </h1>
          <p className="text-gray-500 text-sm">
            Manage your personal information
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {user?.name}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {user?.email}
              </p>
            </div>

            {/* Contact */}
            <div>
              <label className="text-sm text-gray-500">Contact Number</label>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {user?.contact}
              </p>
            </div>

            {/* NID */}
            <div>
              <label className="text-sm text-gray-500">NID Number</label>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {user?.nid}
              </p>
            </div>

          </div>

          {/* Button */}
          <div className="mt-8 flex gap-4">

            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
              Edit Profile
            </button>

            <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
              Change Password
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MyProfilePage;