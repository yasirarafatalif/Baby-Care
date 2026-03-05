"use client";

import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "@/Components/Items/Invoice/InvoicePDF";

const Invoice = () => {

  const invoiceData = {
    email: "user@email.com",
    service: "Baby Sitting",
    amount: 50,
    transactionId: "pi_123456",
    date: new Date().toLocaleDateString(),
  };

  return (
    <div className="w-full h-screen">

      <PDFViewer width="100%" height="100%">
        <InvoicePDF data={invoiceData} />
      </PDFViewer>

    </div>
  );
};

export default Invoice;