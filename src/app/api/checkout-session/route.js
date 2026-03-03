
import stripe from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(req) {

  function generateTrackingId() {
  const timestamp = Date.now().toString(36); // current time ke base36 e
  const randomPart = Math.random().toString(36).substring(2, 8); // random 6 char
  const trackingId = `TRK-${timestamp}-${randomPart}`.toUpperCase();
  return trackingId;
}

// example use
const issueTrackingId = generateTrackingId();

  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");

  if (!session_id) {
    return NextResponse.json(
      { error: "Missing session_id" },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items"],
    });

    return NextResponse.json(session);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}