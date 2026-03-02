"use client";
// import { loadStripe } from "@stripe/stripe-js";
import React from "react";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
// );

const UserPayementsBtn = ({ service }) => {
  const handlePayment = async () => {
    // const stripe = await stripePromise;

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.sessionUrl;
  };
  return (
    <div>
      <button
        onClick={handlePayment}
        className="px-5 py-2 rounded-xl text-sm font-semibold 
              bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Pay Now
      </button>

      {/* {
              service.paid === "unpaid" || service.status === "completed"  ? (
                 <button
                 
                 className="px-5 py-2 rounded-xl text-sm font-semibold 
              bg-blue-600 text-white hover:bg-blue-700 transition"
                 
              >
              Pay Now
            </button>) :  <button 
            onClick={handlePayment}
            className="px-5 py-2 rounded-xl text-sm font-semibold 
              bg-blue-600 text-white hover:bg-blue-700 transition">
              Paid
            </button>


            } */}
    </div>
  );
};

export default UserPayementsBtn;
