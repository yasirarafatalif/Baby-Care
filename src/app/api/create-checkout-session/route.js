import stripe from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  try {
    const origin = request.headers.get("origin");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "bdt",
            product_data: {
              name: body.serviceName,
            },
            image: body.serviceImage,
            unit_amount: body.amount * 100,
          },
          quantity: 1,
        },
      ],
       customer_email: body.userEmail,
      //  coustomerName: body.userName,
        metadata: {
          coustomerName: body.userName,
          coustomerEmail: body.userEmail,
          percelId: body.serviceId,
          percelName: body.serviceName
        },

      success_url: `${origin}/dashboard/user/services/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/dashboard/user/services/cancel`,
    });

    return NextResponse.json({ id: session.id, sessionUrl: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
