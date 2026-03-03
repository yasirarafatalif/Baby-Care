"use client";
import { userPayemntsAdd } from "@/actions/server/updateServiceStatus";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!sessionId) return;

    const fetchPaymentInfo = async () => {
      try {
        const res = await fetch(
          `/api/checkout-session?session_id=${sessionId}`,
        );

        const result = await res.json();
        setData(result);

        const paymentData = {
          sessionId: result.id,
          paymentIntentId: result.payment_intent,
          paymentStatus: result.payment_status,
          sessionStatus: result.status,

          amount: result.amount_total,
          currency: result.currency,

          customerEmail: result.customer_email,
          customerName: result.customer_details?.name,

          percelId: result.metadata?.percelId,
          percelName: result.metadata?.percelName,
        };
        await userPayemntsAdd(paymentData);
      } catch (err) {
        console.error("Error fetching payment info:", err);
      }
    };

    fetchPaymentInfo();
  }, [sessionId]);

  if (!data) return <p>Loading payment info...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-green-600">
        Payment Successful ✅
      </h1>

      <p>
        <b>Customer:</b> {data.customer_email}
      </p>
      <p>
        <b>Amount:</b> ${(data.amount_total / 100).toFixed(2)}
      </p>
      <p>
        <b>Status:</b> {data.payment_status}
      </p>
      <p>
        <b>Payment ID:</b> {data.id}
      </p>
    </div>
  );
}
