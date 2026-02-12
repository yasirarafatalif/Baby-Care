"use server";

import { dbConnect } from "@/lib/bdConnect";

export const insertServices = async (data) => {
   const {email ,category}=data;
  const dublicateservices = await dbConnect("services").find({email,category}).toArray();
  if (dublicateservices.length > 0) {


    const existingService = dublicateservices.find((service) => service.email === email && service.category === category);


    return {
      success: false,
      message: "You have already booked a service with this email and category.",
    };
  }
  const result  = await dbConnect("services").insertOne(data);
  return {
    success: true,
    message: "Service booked successfully",
    insertedId: result.insertedId.toString(), 
  };
}