"use client";

import { motion } from "framer-motion";
import { Heart, Baby, UserPlus } from "lucide-react";

const services = [
  {
    title: "Baby Care",
    desc: "Gentle and professional care for your baby’s safety, comfort, and happiness.",
    icon: <Baby size={36} />,
  },
  {
    title: "Elderly Service",
    desc: "Compassionate support and daily assistance for elderly family members.",
    icon: <UserPlus size={36} />,
  },
  {
    title: "Sick People Service",
    desc: "Reliable care and monitoring for patients during recovery at home.",
    icon: <Heart size={36} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Trusted care services for every stage of life
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="rounded-3xl p-8 text-center
                         bg-white dark:bg-gray-800
                         shadow-md hover:shadow-xl
                         transition-shadow"
            >
              <div
                className="w-16 h-16 mx-auto flex items-center justify-center rounded-full
                           bg-pink-100 dark:bg-pink-500/10
                           text-pink-500 dark:text-pink-400"
              >
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
