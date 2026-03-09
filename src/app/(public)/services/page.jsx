
import ServicesCard from "@/Components/Items/Card/ServicesCard";
import { dbConnect } from "@/lib/bdConnect";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services - CareHub",
  description: "Trusted baby sitting and elderly care services"
};

const ServicesPage = async () => {
  const services =await dbConnect("products").find().toArray();


  // const services = await findAllServices();
//   const services = await Service.find({ is_active: true }).lean();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Care Services
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <ServicesCard key={service._id} service={service} />
          
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
