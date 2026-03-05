"use client";
import Invoice from "@/Components/Items/Invoice/Invoice";
import InvoicePDF from "@/Components/Items/Invoice/InvoicePDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";

const UserSettingsPage = () => {
  const invoiceData = {
    invoiceNumber: "INV-2026-001",
    email: "alifk5937@gmail.com",
    customerName: "Yasir Arafat Alif",
    service: "Baby Sitting Service",
    location: "Mymensingh",
    pricePerHour: 52,
    hours: 5,
    totalAmount: 260,
    paymentStatus: "Paid",
    transactionId: "pi_3N8sdf8923hd92",
    date: "05 March 2026",
  };
  return (
    <div>
      {/* <Invoice></Invoice>             */}
      <h1>User Settings</h1>

      <PDFDownloadLink
        document={<InvoicePDF data={invoiceData} />}
        fileName="invoice.pdf"
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice")}
      </PDFDownloadLink>
    </div>
  );
};

export default UserSettingsPage;
