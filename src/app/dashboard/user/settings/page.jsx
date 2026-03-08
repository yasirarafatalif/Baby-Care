import React from "react";

const UserSettingsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">

      <h1 className="text-3xl font-bold text-gray-800">User Settings</h1>

      {/* Profile Info */}
      <div className="bg-white shadow rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Profile Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border p-3 rounded-lg w-full"
          />

          <input
            type="text"
            placeholder="Location"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
          Update Profile
        </button>
      </div>

      {/* Password Change */}
      <div className="bg-white shadow rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Change Password
        </h2>

        <input
          type="password"
          placeholder="Current Password"
          className="border p-3 rounded-lg w-full"
        />

        <input
          type="password"
          placeholder="New Password"
          className="border p-3 rounded-lg w-full"
        />

        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800">
          Update Password
        </button>
      </div>

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