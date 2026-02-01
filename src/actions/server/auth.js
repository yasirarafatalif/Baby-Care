"use server";
import { dbConnect } from "@/lib/bdConnect";
import bcrypt from "bcryptjs";
export const postUser = async (payload) => {
  console.log(payload)
  
  //1 - check user exist or not

  const isExist = await dbConnect("users").findOne({ email: payload.email });
  if (isExist) {
    return {
      success: false,
      message: "user allready existed",
    };
  }

  //2 - create user

  const hashedPassword = await bcrypt.hash(payload.password, 10);
  // payload.password = hashedPassword;

  const newUser = {
    ...payload,
    createdAt: new Date().toISOString(),
    role: "user",
    password: hashedPassword,
  };
  console.log(newUser);
 //3 - send user to database
  const result = await dbConnect("users").insertOne(newUser);
  if (result.acknowledged) {
    return {
      success: true,
      message: `user created with ${result.insertedId.toString()}`,
    };
  } else {
    return {
      success: false,
      message: `Something Went wrong.try again`,
    };
  }
}