import { NextResponse } from "next/server";

import { dbConnect } from "@/lib/bdConnect";

export async function POST(req) {
  try {
    const { sessionId } = await req.json();

    const payment = await dbConnect("payments").findOne({ sessionId });

    if (!payment) { 
        return NextResponse.json({  
            success: false,
            error: "Payment record not found",
        }, { status: 404 });
    }

    const updated = await  dbConnect("payments").updateOne(
        { sessionId },
        { $set: { isinvoiceSent: true } }
    );

    return NextResponse.json({
      success: true,
      data: updated,
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}