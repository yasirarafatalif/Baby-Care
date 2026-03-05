"use client";

import {
  CheckCircle2,
  ArrowRight,
  Mail,
  User,
  Package,
  CreditCard,
} from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { userPayemntsAdd } from "@/actions/server/updateServiceStatus";
import InvoicePDF from "@/Components/Items/Invoice/InvoicePDF";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [data, setData] = useState(null);
  // console.log(data);


  useEffect(() => {
    if (!sessionId) return;

    const fetchPaymentInfo = async () => {
      const res = await fetch(`/api/checkout-session?session_id=${sessionId}`);
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
    };

    fetchPaymentInfo();
  }, [sessionId]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Processing payment...
      </div>
    );
  }

  const formattedAmount = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: data.currency,
  }).format(data.amount_total / 100);

  const invoiceData = {
    _id: data.id,
    sessionId: data.id,
    paymentIntentId: data.payment_intent,
    paymentStatus: data.payment_status,
    sessionStatus: data.status,
    amount: data.amount_total,
    currency: data.currency,
    customerEmail: data.customer_details?.email,
    customerName: data.customer_details?.name,
    percelId: data.metadata?.percelId,
    percelName: data.metadata?.percelName,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* LEFT SIDE – Success Visual */}
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-12 flex flex-col justify-center items-center text-center">
          <CheckCircle2 className="w-20 h-20 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Payment Successful 🎉</h1>
          <p className="opacity-90">
            Your transaction has been completed securely.
          </p>

          <div className="mt-8 text-4xl font-extrabold">{formattedAmount}</div>
        </div>

        {/* RIGHT SIDE – Details */}
        <div className="p-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Transaction Details
          </h2>

          <div className="space-y-5">
            <DetailRow
              icon={<User size={18} />}
              label="Customer"
              value={data?.customer_details?.name}
            />
            <DetailRow
              icon={<Mail size={18} />}
              label="Email"
              value={data?.customer_details?.email}
            />
            <DetailRow
              icon={<Package size={18} />}
              label="Service"
              value={data?.metadata?.percelName}
            />
            <DetailRow
              icon={<CreditCard size={18} />}
              label="Payment ID"
              value={data.payment_intent}
            />
          </div>

          <div className="mt-10">
            <button
              onClick={() =>
                (window.location.href = "/dashboard/user/services")
              }
              className="w-full bg-gray-900 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all"
            >
              Go to Dashboard
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="mt-4">
            <PDFDownloadLink
              document={<InvoicePDF data={invoiceData} />}
              fileName={`invoice-${data?.customer_details?.name}.pdf`}
            >
              {({ loading }) => (
                <button className="w-full bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition">
                  {loading ? "Generating Invoice..." : "Download Invoice"}
                </button>
              )}
            </PDFDownloadLink>
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
