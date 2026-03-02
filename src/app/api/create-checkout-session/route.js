import stripe from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
    console.log(request)
  try {
    const origin = request.headers.get("origin");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Pro Membership",
            },
            unit_amount: 2000, // $20
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/dashboard/user/services/success`,
      cancel_url: `${origin}/dashboard/user/services/cancel`,
    });

    return NextResponse.json({ id: session.id ,sessionUrl: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}