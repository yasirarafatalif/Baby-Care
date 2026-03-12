"use client";

import React, { useState } from "react";
import { adminAddserviceStatus } from "@/actions/server/updateServiceStatus";
import Swal from "sweetalert2";

const AdminAddServicesFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    short_description: "",
    description: "",
    category: "Elder Care",
    price: "",
    image: "",
    is_active: true,
    features: ["", "", "", ""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
      setFormData((prev) => ({ ...prev, name: value, slug: generatedSlug }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      price: {
        per_day: Number(formData.price),
        per_hour: Number(formData.price_per_hour),
      },
      createdAt: new Date().toISOString(),
    };

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You are about to add a new service.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!",
      }).then(async (result) => {
        await adminAddserviceStatus(finalData);
        if (result.isConfirmed) {
          Swal.fire("Added!", "The new service has been added.", "success");
        }
        e.target.reset();
      });
    } catch (error) {
      Swal.fire(
        "Error!",
        "There was an issue adding the service. Please try again.",
        "error",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          Add New Service
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Service Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="e.g. Dementia Care"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* Slug */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Slug (Auto-generated)
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              placeholder="dementia-care"
              className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              className="p-3 border rounded-lg outline-none"
              onChange={handleChange}
            >
              <option value="Elder Care">Elder Care</option>
              <option value="Home Nursing">Home Nursing</option>
              <option value="Special Care">Special Care</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Price (Per Day)
            </label>
            <input
              type="number"
              name="price"
              placeholder="2500"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Price (Per Hour)
            </label>
            <input
              type="number"
              name="price_per_hour"
              placeholder="2500"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Short Description
            </label>
            <input
              type="text"
              name="short_description"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Full Description
            </label>
            <textarea
              name="description"
              rows="4"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://i.ibb.co/..."
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-gray-600 mb-2 block">
              Key Features (List 4)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.features.map((feature, index) => (
                <input
                  key={index}
                  type="text"
                  value={feature}
                  placeholder={`Feature ${index + 1}`}
                  className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md"
            >
              Publish Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddServicesFrom;
