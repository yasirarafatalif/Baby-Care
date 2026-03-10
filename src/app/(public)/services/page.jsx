import ServicesCard from "@/Components/Items/Card/ServicesCard";
import { dbConnect } from "@/lib/bdConnect";
import Link from "next/link";

export const metadata = {
  title: "Our Services - CareHub",
  description: "Trusted baby sitting and elderly care services",
};

const ServicesPage = async ({ searchParams }) => {
  const params = await searchParams;
  const currentPage = parseInt(params.page) || 1;
  const itemsPerPage = 6;
  const skip = (currentPage - 1) * itemsPerPage;
  const category = params?.category || "all";


  // const collection = await dbConnect("products");

  const services = await dbConnect("products")
    .find()
    .skip(skip)
    .limit(itemsPerPage)
    .toArray();

  const totalItems = await dbConnect("products").countDocuments();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto pt-16 pb-10 px-4">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 
        bg-gradient-to-r from-indigo-600 to-purple-600 
        bg-clip-text text-transparent"
        >
          Our Care Services
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Trusted baby sitting and elderly care services designed to make
          families feel safe and supported.
        </p>
      </div>

     

      {/* Services Grid */}
      <div className="max-w-7xl my-3 mx-auto px-4 pb-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service} />
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col items-center justify-center space-y-4 pb-20 mt-10">
        {/* Info text */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing page{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {currentPage}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalPages}
          </span>
        </p>

        <nav
          className="inline-flex -space-x-px rounded-md shadow-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
          aria-label="Pagination"
        >
          {/* Previous Button */}
          <Link
            href={`?page=${currentPage > 1 ? currentPage - 1 : 1}`}
            className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0 ${
              currentPage <= 1
                ? "opacity-50 pointer-events-none text-gray-400"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <Link
                key={pageNumber}
                href={`?page=${pageNumber}`}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 dark:ring-gray-800 focus:z-20 ${
                  currentPage === pageNumber
                    ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {pageNumber}
              </Link>
            );
          })}

          {/* Next Button */}
          <Link
            href={`?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`}
            className={`relative inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0 ${
              currentPage >= totalPages
                ? "opacity-50 pointer-events-none text-gray-400"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default ServicesPage;
