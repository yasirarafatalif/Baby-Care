"use client";

import {
  XCircle,
  ArrowRight,
  Mail,
  User,
  Package,
  CreditCard,
  RotateCcw,
} from "lucide-react";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CancelPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!sessionId) return;

    const fetchPaymentInfo = async () => {
      try {
        const res = await fetch(
          `/api/checkout-session?session_id=${sessionId}`
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching session info:", err);
      }
    };

    fetchPaymentInfo();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-100 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE – Cancel Visual */}
        <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white p-12 flex flex-col justify-center items-center text-center">
          <XCircle className="w-20 h-20 mb-6" />
          <h1 className="text-3xl font-bold mb-4">
            Payment Cancelled ❌
          </h1>
          <p className="opacity-90">
            Your transaction was not completed.
          </p>

          <div className="mt-6 flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm">
            <RotateCcw size={16} />
            You can try again anytime
          </div>
        </div>

        {/* RIGHT SIDE – Details */}
        <div className="p-10">

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Transaction Info
          </h2>

          <div className="space-y-5">

            <DetailRow icon={<User size={18} />} label="Customer" value={data?.customer_details?.name} />
            <DetailRow icon={<Mail size={18} />} label="Email" value={data?.customer_details?.email} />
            <DetailRow icon={<Package size={18} />} label="Service" value={data?.metadata?.percelName} />
            <DetailRow icon={<CreditCard size={18} />} label="Session ID" value={sessionId} />

          </div>

          {/* Buttons */}
          <div className="mt-10 space-y-4">
            <button
              onClick={() => window.history.back()}
              className="w-full bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all"
            >
              Try Payment Again
              <RotateCcw size={16} />
            </button>

            <button
              onClick={() =>
                (window.location.href = "/dashboard/user/services")
              }
              className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
            >
              Back to Dashboard
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

const DetailRow = ({ icon, label, value }) => (
  <div className="flex justify-between items-center border-b pb-3 text-sm">
    <div className="flex items-center gap-3 text-gray-500">
      {icon}
      <span>{label}</span>
    </div>
    <span className="font-semibold text-gray-800">{value || "N/A"}</span>
  </div>
);