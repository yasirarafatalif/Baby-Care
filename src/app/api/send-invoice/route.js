import nodemailer from "nodemailer";
import { renderToBuffer } from "@react-pdf/renderer";
import InvoicePDF from "@/Components/Items/Invoice/InvoicePDF";

export async function POST(req) {
  const body = await req.json();

  const { email, name, service, amount, paymentId, sessionId,paidAt,paymentStatus,percelId,currency } = body;
  

  const pdfBuffer = await renderToBuffer(
  <InvoicePDF
    data={{
      customerName: name,
      customerEmail: email,
      percelName: service,
      paymentIntentId: paymentId,
      amount: amount,
      currency: currency || "BDT",
      sessionId: sessionId,
      paidAt: paidAt,
      paymentStatus: paymentStatus,
      percelId: percelId
    }}
  />
);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlTemplate = `
    <div style="font-family:sans-serif;background:#f3f4f6;padding:30px">
      <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:10px">
      
        <h2 style="color:#10b981">Payment Successful 🎉</h2>

        <p>Hello <b>${name}</b>,</p>

        <p>Your payment has been completed successfully.</p>

        <table style="width:100%;margin-top:20px;border-collapse:collapse">
          <tr>
            <td style="padding:8px">Service</td>
            <td style="padding:8px"><b>${service}</b></td>
          </tr>

          <tr>
            <td style="padding:8px">Amount</td>
            <td style="padding:8px"><b>${amount/100}</b></td>
          </tr>

          <tr>
            <td style="padding:8px">Payment ID</td>
            <td style="padding:8px"><b>${paymentId}</b></td>
          </tr>
        </table>

        <p style="margin-top:20px">
        Your invoice is attached with this email.
        </p>

        <hr/>

        <p style="font-size:12px;color:gray">
        Thank you for using our service.
        </p>

      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Service Payment" <${process.env.EMAIL_USER}>`,
    to: "yasirarafatalif1@gmail.com",
    subject: "Payment Invoice",
    html: htmlTemplate,
    attachments: [
      {
        filename: "invoice.pdf",
        content: pdfBuffer,
      },
    ],
  });

  return Response.json({
    success: true,
  });
}