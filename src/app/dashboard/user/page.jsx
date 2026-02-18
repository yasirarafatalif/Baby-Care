import {
  userCompletedServices,
  userFindServices,
  userPendingServices,
} from "@/actions/server/services";
import { authOptions } from "@/lib/authOptions";
import { dbConnect } from "@/lib/bdConnect";
import { getServerSession } from "next-auth";

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);

  const email = session?.user?.email;

  const totalservices = await userFindServices(email);
  const pendingservices = await userPendingServices(email);
  const completedservices = await userCompletedServices(email);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">Overview of platform performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Services" value={totalservices.length} />
        <StatCard title="Completed" value={completedservices.length} />
        <StatCard title="Pending" value={pendingservices.length} />
        <StatCard title="Total Earnings" value={0} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          📊 Monthly Services Chart
        </div>
        <div className="p-6 bg-white rounded-xl shadow">💰 Earnings Chart</div>
      </div>

      {/* Recent Services */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Services</h2>
        <p className="text-gray-500">Latest completed & pending services</p>
      </div>
    </div>
  );
}

/* Small Reusable Card */
const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
  </div>
);
