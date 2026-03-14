"use server";

import { dbConnect } from "@/lib/bdConnect";

export const insertServices = async (data) => {
  const { email,serviceName} = data;
 

  const collection = dbConnect("services");

  const duplicate = await collection.findOne({ email, status: "Pending", serviceName });

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
    .find({ email, status: "Pending" })
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

// latest services for user dashboard
export const userLatestServices = async (email) => {
  const latestServices = await dbConnect("services")
    .find({ email })
    .sort({ createdAt: -1 })
    .limit(3)
    .toArray(); 
  return latestServices;
};


export const monthlyServicesData = async (email) => {

  const services = await dbConnect("services")
    .aggregate([
      {
        $match: { email }
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          services: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ])
    .toArray();

  return services;
};

export const monthlyEarningsData = async (email) => {

  const data = await dbConnect("services")
    .aggregate([
      {
        $match: {
          email: email,
          paid: "paid"
        }
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          earnings: {
            $sum: {
              $add: ["$totalDayCost", "$totalHourCost"]
            }
          }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ])
    .toArray();

  return data;
};

export const userfind= async (email) => {
  const user = await dbConnect("users").findOne({ email });
  return user;
}


export const updateUserProfile = async (formData) => {

  const email = formData.get("email");
  const name = formData.get("name");
  const phone = formData.get("phone");
  const location = formData.get("location");

  const result = await dbConnect("users").updateOne(
    { email: email },
    {
      $set: {
        name: name,
        phone: phone,
        location: location,
      },
    }
  );

  return result;
};

// admin secarch payemnts info 

export const adminpaymentAmountInfo = async () => {

  const result = await dbConnect("payments").aggregate([
    {
      $match: {
        paymentStatus: "paid",
        
      }
    },
    {
      $group: {
        _id: null,
        amount: { $sum: "$amount" }
      }
    }
  ]).toArray();
  console.log(result)

  return result[0]?.amount || 0;
};

export const adminFindAllServices = async () => {
  const services = await dbConnect("services")
    .find()
    .sort({ createdAt: -1 })
    .limit(5)
    .toArray(); 
  return services;
}