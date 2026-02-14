

import { dbConnect } from "@/lib/bdConnect";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services - CareHub",
  description: "Trusted baby sitting and elderly care services"
};

const ServicesPage = async () => {
  const services =await dbConnect("products").find().toArray();
  console.log(services)
//   const services = await Service.find({ is_active: true }).lean();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Care Services
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <div
            key={service._id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <Image
              src={service?.image}
              alt={service.name}
              width={400}
              height={250}
              className="rounded-t-2xl object-cover h-48 w-full"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {service.name}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {service.short_description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-indigo-600 font-bold">
                  ৳{service.price.per_hour}/hour
                </span>
                <span className="text-gray-500 text-sm">
                  ৳{service.price.per_day}/day
                </span>
              </div>

              <Link
                href={`/services/${service._id}`}
                className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
