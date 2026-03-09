"use client";
import React from "react";
import Swal from "sweetalert2";

const ProfileUpdateform = ({ email }) => {
 const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value;
  const phoneNumber = form.phoneNumber.value;
  const location = form.location.value;

  const formData = {
    email,
    name,
    phoneNumber,
    location,
  };

  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You are about to update your profile information.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#10b981",
    cancelButtonColor: "#ef4444",
    confirmButtonText: "Yes, update it!",
  });

  if (!result.isConfirmed) return;

  try {
    const res = await fetch("/api/user/update-profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.result?.modifiedCount === 1) {
      Swal.fire({
        title: "Updated!",
        text: "Your profile has been updated successfully.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      form.reset();
    } else {
      Swal.fire({
        title: "No Changes",
        text: "Nothing was updated.",
        icon: "info",
      });
    }
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "Something went wrong!",
      icon: "error",
    });
  }
};

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          required
          className="border p-3 rounded-lg w-full"
        />

        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          required
          className="border p-3 rounded-lg w-full"
        />

        <input
          type="text"
          placeholder="Location"
          name="location"
          required
          className="border p-3 rounded-lg w-full"
        />

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-[50%] bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdateform;
