"use client";
import React from "react";
import Swal from "sweetalert2";

const PassUpdate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password update logic here
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Right now, this feature is under development. Please wait for the next update.",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">Change Password</h2>

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
    </form>
  );
};

export default PassUpdate;
