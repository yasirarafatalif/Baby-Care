import {
  paymentAmountInfo,
  userCompletedServices,
  userFindServices,
  userPendingServices,
  userLatestServices,
  monthlyServicesData,
  monthlyEarningsData,
} from "@/actions/server/services";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { Briefcase, CheckCircle, Clock, Wallet } from "lucide-react";
import Link from "next/link";
import MonthlyServicesChart from "@/Components/Items/Charts/MonthlyServicesChart";

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const totalservices = await userFindServices(email);
  
  const pendingservices = await userPendingServices(email);
  const completedservices = await userCompletedServices(email);
  const paymentData = await paymentAmountInfo(email);
  const userLatestService = await userLatestServices(email);
  const monthlyDataa = await monthlyServicesData(email);
  const monthlyD = await monthlyEarningsData(email);
  
  const monthlyData = [
  { month: "Jan", services: 4 },
  { month: "Feb", services: 7 },
  { month: "Mar", services: 3 },
  { month: "Apr", services: 6 },
  { month: "May", services: 8 },
];
  const monthlyEarningData = [
  { month: "Jan", services: `${monthlyD[0]?.earnings || 0}` },
  { month: "Feb", services: `${monthlyD[1]?.earnings || 0}` },
  { month: "Mar", services: `${monthlyD[2]?.earnings || 0}` },
  { month: "Apr", services: `${monthlyD[3]?.earnings || 0}` },
  { month: "May", services: `${monthlyD[4]?.earnings || 0}` },
];

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Header */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold">User Dashboard</h1>
        <p className="opacity-90 mt-1">
          Welcome back! Here is your service overview.
        </p>
      </div> */}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Services"
          value={totalservices.length}
          icon={<Briefcase />}
          color="bg-blue-500"
        />

        <StatCard
          title="Completed"
          value={completedservices.length}
          icon={<CheckCircle />}
          color="bg-green-500"
        />

        <StatCard
          title="Pending"
          value={pendingservices.length}
          icon={<Clock />}
          color="bg-yellow-500"
        />

        <StatCard
          title="Total Earnings"
          value={`${paymentData} BDT`}
          icon={<Wallet />}
          color="bg-purple-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-3">📊 Monthly Services</h3>
           {/* <MonthlyServicesChart data={monthlyData} /> */}

          <div className="h-40 flex items-center justify-center text-gray-400">
            Chart Coming Soon
          </div>
        </div>
        

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-3">💰 Earnings</h3>

          <MonthlyServicesChart data={monthlyEarningData} />
          {/* <div className="h-40 flex items-center justify-center text-gray-400">
            Chart Coming Soon
          </div> */}
        </div>
      </div>

      {/* Recent Services */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Services</h2>
          <Link
            href="/dashboard/user/services"
            className="text-blue-600 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="py-3 px-4 font-semibold">Service</th>
                  <th className="py-3 px-4 font-semibold">Status</th>
                  <th className="py-3 px-4 font-semibold">Price</th>
                  <th className="py-3 px-4 font-semibold">Date</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {userLatestService.map((service) => (
                  <tr key={service._id} className="hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {service.serviceName}
                    </td>

                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
              ${
                service.status === "completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
                      >
                        {service.status}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-medium">
                      {service.totalDayCost + service.totalHourCost} BDT
                    </td>

                    <td className="py-3 px-4 text-gray-500">
                      {new Date(service.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Stat Card Component */

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>

    <div className={`${color} text-white p-3 rounded-lg`}>{icon}</div>
  </div>
);
