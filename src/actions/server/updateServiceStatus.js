"use server";


import { dbConnect } from "@/lib/bdConnect";
import { ObjectId } from "mongodb";

export async function updateServiceStatus(id, status) {
  await dbConnect("services").updateOne(
    { _id: new ObjectId(id) },
    { $set: { status } }
  );
}
export async function adminAddserviceStatus(serviceData) {
  await dbConnect("products").insertOne(
    serviceData
  );
}
export async function userPayemntsAdd(serviceData) {
  console.log(serviceData)
  const existingPayment = await dbConnect("payments").findOne({ sessionId: serviceData.sessionId });

  if (existingPayment) {
    console.log("Payment with this sessionId already exists. Skipping insertion.");
    return;
  }


  await dbConnect("payments").insertOne(
    serviceData
  );
}






