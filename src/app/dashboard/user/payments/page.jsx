import { paymentInfo } from '@/actions/server/services';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const PaymentsPage = async () => {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    const data = await paymentInfo(userEmail);
    console.log(data)

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Payment History</h1>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Service Name</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Cost</th>
                            {/* <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Days (Cost)</th> */}
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data && data.length > 0 ? (
                            data.map((payment) => (
                                <tr key={payment.serviceId} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{payment.serviceName}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{payment.category}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{payment.location}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">
                                        {new Date(payment.submitDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-600">
                                         {payment.totalHourCost + payment.totalDayCost} ৳
                                    </td>
                                    
                                    <td className="px-4 py-4 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            payment.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {payment.status.toUpperCase()}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-4 py-10 text-center text-gray-500">
                                    No payment records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentsPage;