// app/user/services/page.jsx
import { userFindServices } from "@/actions/server/services";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import UserServicesClient from "@/Components/Items/UserServicesClient";

const UserServices = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const services = await userFindServices(email);

  const safeServices = services.map((service) => ({
    ...service,
    _id: service._id?.toString(),
    serviceId: service.serviceId?.toString(),
    createdAt: service.createdAt?.toISOString?.(),
    submitDate: service.submitDate?.toISOString?.(),
  }));

  return <UserServicesClient services={safeServices} />;
};

export default UserServices;
