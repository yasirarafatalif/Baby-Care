import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div
            key={service._id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg dark:shadow-gray-900 transition border border-transparent dark:border-gray-700"
        >
            <Image
                src={service?.image}
                alt={service.name}
                width={400}
                height={250}
                className="rounded-t-2xl object-cover h-48 w-full"
            />

            <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {service.name}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {service.short_description}
                </p>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                        ৳{service.price.per_hour}/hour
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                        ৳{service.price.per_day}/day
                    </span>
                </div>

                <Link
                    href={`/services/${service._id}`}
                    className="block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-2 rounded-xl font-medium transition-colors"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ServicesCard;