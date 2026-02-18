"use server";

import { dbConnect } from "@/lib/bdConnect";

export const insertServices = async (data) => {
  const { email, category } = data;

  const collection = dbConnect("services");

  const duplicate = await collection.findOne({ email, category });

  if (duplicate) {
    return {
      success: false,
      message: "You have already booked a service with this email and category.",
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
