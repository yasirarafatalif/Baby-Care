import { Search, Clock, MapPin, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Service",
    desc: "Select the caregiving service you need such as baby care, elderly care or sick care."
  },
  {
    icon: Clock,
    title: "Select Duration",
    desc: "Choose how long you need the caregiver for hours or days."
  },
  {
    icon: MapPin,
    title: "Enter Location",
    desc: "Provide your division, district, city and address."
  },
  {
    icon: CheckCircle,
    title: "Confirm Booking",
    desc: "Confirm your booking and track its status easily."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            How It Works
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Book a trusted caregiver in just a few simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  <Icon size={40} />
                </div>

                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;