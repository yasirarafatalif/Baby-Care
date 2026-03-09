
import { dbConnect } from "@/lib/bdConnect";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {

    const body = await req.json();

    const { email, name, phone, location } = body;

    const exitingUser = await dbConnect("users").findOne({ email });

    if (!exitingUser) { 
        return "User not found"
    }

   

    const result = await dbConnect("users").updateOne(
      {  email },
      {
        $set: {
          name,
          phone,
          location,
        },
      }
    );
    

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      result,
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}