import { adminFindAllServices, adminpaymentAmountInfo } from "@/actions/server/services";
import MonthlyServicesChart from "@/Components/Items/Charts/MonthlyServicesChart";
import { dbConnect } from "@/lib/bdConnect";
import Link from "next/link";

export default  async function AdminDashboard() {
  const pendingservices = await dbConnect("services")
    .find({ status:"Pending" })
    .toArray();
  const completedservices = await dbConnect("services")
    .find({ status:"completed" })
    .toArray();
  const services = await dbConnect("services")
    .find()
    .toArray();

    const payments  = await adminpaymentAmountInfo()
    // console.log(payments)
    const allservices = await adminFindAllServices();
    console.log(allservices)
    
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">
          Overview of platform performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Services" value={services.length} />
        <StatCard title="Completed" value={completedservices.length} />
        <StatCard title="Pending" value={pendingservices.length} />
        <StatCard title="Total Earnings" value={payments} />
      </div>

      {/* Charts */}
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

          {/* <MonthlyServicesChart data={monthlyEarningData} /> */}
          <div className="h-40 flex items-center justify-center text-gray-400">
            Chart Coming Soon
          </div>
        </div>
      </div>

      {/* Recent Services */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Services</h2>
          <Link
            href="/dashboard/admin/services"
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
                {allservices.map((service) => (
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
    // </div>
  );
}

/* Small Reusable Card */
const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow">
    <p className="text-sm text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold mt-2">{value}</h2>
  </div>
);
