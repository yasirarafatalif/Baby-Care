"use client";

import React from "react";

const Invoice = () => {
  const invoice = {
    invoiceNumber: "INV-1023",
    email: "user@email.com",
    service: "Baby Sitting Service",
    amount: 50,
    transactionId: "pi_123456789",
    status: "Paid",
    date: new Date().toLocaleDateString(),
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 border p-8 rounded-lg shadow">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Invoice</h1>

      {/* Invoice Info */}
      <div className="space-y-3">
        <p><b>Invoice Number:</b> {invoice.invoiceNumber}</p>
        <p><b>Date:</b> {invoice.date}</p>
        <p><b>Customer Email:</b> {invoice.email}</p>
        <p><b>Service:</b> {invoice.service}</p>
        <p><b>Amount:</b> ${invoice.amount}</p>
        <p><b>Payment Status:</b> {invoice.status}</p>
        <p><b>Transaction ID:</b> {invoice.transactionId}</p>
      </div>

      {/* Button */}
      <button
        onClick={() => window.print()}
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded"
      >
        Download / Print Invoice
      </button>
      
    </div>
  );
};

export default Invoice;