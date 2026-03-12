import { userfind } from "@/actions/server/services";
import PassUpdate from "@/Components/Items/Users/PassUpdate";
import ProfileUpdateform from "@/Components/Items/Users/ProfileUpdateform";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const UserSettingsPage = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const data = await userfind(email)
  
  
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">

      <h1 className="text-3xl font-bold text-gray-800">User Settings</h1>

      {/* Profile Info */}
      <div className="bg-white shadow rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Profile Information
        </h2>

        <ProfileUpdateform email={email} />

     
      </div>

      {/* Password Change */}
     <PassUpdate />

      {/* Notification */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Notifications
        </h2>

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          Email Notifications
        </label>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-red-600 mb-3">
          Danger Zone
        </h2>

        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
          Delete Account
        </button>
      </div>

    </div>
  );
};

export default UserSettingsPage;