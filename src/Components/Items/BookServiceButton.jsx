"use client";

import { insertServices } from "@/actions/server/services";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import toast from "react-hot-toast";

const BookServiceButton = ({ service }) => {
  const bookAssign = useRef(null);
  const { data: sessionData, status } = useSession();
  const dayprice = service.price.per_day || 0;
  const hourprice = service.price.per_hour || 0;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") {
      return alert("Session loading, please wait...");
    }

    const email = sessionData?.user?.email;
    const username = sessionData?.user?.name;

    if (!email) {
      return alert("User not logged in");
    }

    const form = e.target;

    const fromdayPrice = Number(form.perDay.value);
    const fromhourPrice = Number(form.perHour.value);

    const daytotal = fromdayPrice * dayprice;
    const hourtotal = fromhourPrice * hourprice;

    const bookingData = {
      location: form.location.value,
      perHour: fromhourPrice,
      perDay: fromdayPrice,
      totalHourCost: hourtotal,
      totalDayCost: daytotal,
      status: "Pending",
      paid: "unpaid",
      submitDate: new Date().toISOString(),
      email,
      username,
      serviceId: service._id.toString(), 
      serviceName: service.name,
      category: service.category,
    };

    const res = await insertServices(bookingData);
    if (res.success === true) {
      toast.success("Service booked successfully!");
    } else {
      toast.error(res.message || "Failed to book service. Please try again.");
    }

    bookAssign.current.close();
    form.reset();
  };

  return (
    <div>
      <button
        onClick={() => bookAssign.current.showModal()}
        className="btn rounded-xl px-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition"
      >
        Book This Service
      </button>

      <dialog ref={bookAssign} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white dark:bg-base-200 text-black dark:text-white">
          <h3 className="font-bold text-lg mb-4">Work Schedule Form</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Location */}
            <div>
              <label className="label">
                <span className="label-text dark:text-white">Location</span>
              </label>

              <select
                name="location"
                defaultValue=""
                className="select select-bordered w-full bg-white dark:bg-base-100 dark:text-white"
                required
              >
                <option value="" disabled>
                  Choose Location
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Khulna">Khulna</option>
                <option value="Barishal">Barishal</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>

            {/* Per Hour */}
            <div>
              <label className="label">
                <span className="label-text dark:text-white">Per Hour</span>
              </label>
              <input
                type="number"
                name="perHour"
                placeholder="Enter hourly rate"
                className="input input-bordered w-full bg-white dark:bg-base-100 dark:text-white"
                required
              />
            </div>

            {/* Per Day */}
            <div>
              <label className="label">
                <span className="label-text dark:text-white">Per Day</span>
              </label>
              <input
                type="number"
                name="perDay"
                placeholder="Enter daily rate"
                className="input input-bordered w-full bg-white dark:bg-base-100 dark:text-white"
                required
              />
            </div>

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              <button
                type="button"
                className="btn"
                onClick={() => bookAssign.current.close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookServiceButton;
