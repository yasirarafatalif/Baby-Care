"use server";

import { dbConnect } from "@/lib/bdConnect";

export const insertServices = async (data) => {
  const { email, category } = data;

  const collection = dbConnect("services");

  const duplicate = await collection.findOne({ email, status: "Pending", category });

  if (duplicate) {
    return {
      success: false,
      message: "You have already booked this service and it's pending. Please wait for it to be processed before booking again.",
    };
  }

  const result = await collection.insertOne({
    ...data,
    createdAt: new Date(),
  });

  return {
    success: true,
    message: "Service booked successfully",
    insertedId: result.insertedId.toString(), 
  };
};


export const userFindServices = async (email) => {
  const services = await dbConnect("services")
    .find({ email })
    .toArray(); 
  return services;
};
export const userPendingServices = async (email) => {
  const services = await dbConnect("services")
    .find({ email, status: "pending" })
    .toArray(); 
  return services;
};
export const userCompletedServices = async (email) => {
  const services = await dbConnect("services")
    .find({ email, status: "completed" })
    .toArray(); 
  return services;
};



export const paymentInfo =  async (email)=>{
  const payments = await dbConnect("services").find({  email , paid:"paid" }).sort({ paidAt: -1 }).toArray();
  return payments;

}


export const paymentAmountInfo = async (email) => {

  const result = await dbConnect("payments").aggregate([
    {
      $match: {
        paymentStatus: "paid",
        customerEmail: email
      }
    },
    {
      $group: {
        _id: "$customerEmail",
        amount: { $sum: "$amount" }
      }
    }
  ]).toArray();

  return result[0]?.amount || 0;
};