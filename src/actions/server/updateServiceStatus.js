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
  console.log(serviceData)
  await dbConnect("products").insertOne(
    serviceData
  );
}


