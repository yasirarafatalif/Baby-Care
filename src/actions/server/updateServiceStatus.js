"use server";

import { dbConnect } from "@/lib/bdConnect";
import { ObjectId } from "mongodb";

export async function updateServiceStatus(id, status) {
  await dbConnect("services").updateOne(
    { _id: new ObjectId(id) },
    { $set: { status } },
  );
}
export async function adminAddserviceStatus(serviceData) {
  await dbConnect("products").insertOne(serviceData);
}
export async function userPayemntsAdd(serviceData) {
  // console.log(serviceData)
  const email = serviceData.customerEmail;
  const sessionId = serviceData.sessionId;
  const existingPayment = await dbConnect("payments").findOne({
    sessionId: serviceData.sessionId,
  });
  const existingPayServices = await dbConnect("services").findOne({
    _id: new ObjectId(serviceData.percelId),
  });
  // console.log(existingPayServices,"after")
  if (
    (existingPayServices && existingPayServices.paid === "pending") ||
    existingPayment
  ) {
    console.log("User has already made a payment. Skipping insertion.");
    return;
  }

  const result = await dbConnect("services").updateOne(
    { _id: new ObjectId(serviceData.percelId) },
    { $set: { paid: "paid" } },
  );

  await dbConnect("payments").insertOne(serviceData);
}
