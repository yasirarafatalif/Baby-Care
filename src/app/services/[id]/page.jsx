
import { dbConnect } from "@/lib/bdConnect";
import { ObjectId } from "mongodb";
import ServiceSingleSkeleton from "./loading";
import Image from "next/image";
import BookServiceButton from "@/Components/Items/BookServiceButton";

const ServicesSingelPages = async ({ params,session }) => {
  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return <h1 className="text-center mt-10">Invalid Service ID</h1>;
  }

  const service = await dbConnect("products").findOne({
    _id: new ObjectId(id),
  });

  if (!service) {
    return <ServiceSingleSkeleton />;
  }

  return  (
    <div className="max-w-7xl mx-auto px-4 py-10 text-slate-900 dark:text-slate-100">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg dark:shadow-black/40">
          <Image
          
            src={service.image}
            alt={service.name}
            width={500}
            height={350}
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full 
            bg-blue-100 text-blue-600 
            dark:bg-blue-900/40 dark:text-blue-300">
            {service.category}
          </span>

          <h1 className="text-3xl font-bold mb-4">
            {service.name}
          </h1>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {service.short_description}
          </p>

          {/* Price Cards */}
          <div className="flex gap-4 mb-6">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl px-6 py-4 text-center">
              <p className="text-sm text-slate-500">Per Hour</p>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                ৳ {service.price.per_hour}
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl px-6 py-4 text-center">
              <p className="text-sm text-slate-500">Per Day</p>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                ৳ {service.price.per_day}
              </p>
            </div>
          </div>

          {/* CTA */}

          <BookServiceButton dayprice={service.price.per_day} hourprice={service.price.per_hour} ></BookServiceButton>
          {/* <button
            className="btn rounded-xl px-8 
              bg-blue-600 hover:bg-blue-700 
              dark:bg-blue-500 dark:hover:bg-blue-600 
              text-white transition">
            Book This Service
          </button> */}
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Service Description
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Features */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          What’s Included
        </h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 
                bg-slate-100 dark:bg-slate-800 
                px-4 py-3 rounded-xl shadow-sm
                dark:shadow-black/30"
            >
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

};

export default ServicesSingelPages;
