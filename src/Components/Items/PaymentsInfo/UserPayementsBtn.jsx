"use client";
import { useSession } from "next-auth/react";
// import { loadStripe } from "@stripe/stripe-js";
import React from "react";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
// );

const UserPayementsBtn = ({ service }) => {
  console.log(service.paid)
  const { data: session } = useSession();
  const user = session?.user;
  const handlePayment = async () => {
    const totalAmount = service?.totalDayCost + service?.totalHourCost;

    const paymentInfo = {
      userName: user?.name || user?.displayName || "Unknown User",
      userId: user?.id,
      userEmail: user?.email,
      serviceId: service?._id,
      serviceName: service?.serviceName,
      amount: totalAmount,
      serviceType: service?.serviceType,
      serviceImage: service?.serviceImage,
      serviceStatus: service?.paid,
    };
    // const stripe = await stripePromise;

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentInfo),
    });

    const data = await res.json();
    window.location.href = data.sessionUrl;
  };
  return (
    <div>
      {service.paid === "paid" || service.status === "completed" ? (
        <button
          className="px-5 py-2 rounded-xl text-sm font-semibold 
              bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Paid
        </button>
      ) : (
        <button
          onClick={handlePayment}
          className="px-5 py-2 rounded-xl text-sm font-semibold 
              bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Pay Now
        </button>
      )}
    </div>
  );
};

export default UserPayementsBtn;
