import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Working Mother",
      image: "https://i.pravatar.cc/150?u=sarah",
      comment:
        "Finding a reliable babysitter used to be a nightmare. Care.IO made it so easy! The caregiver was professional and my kids loved her.",
      rating: 5,
    },
    {
      name: "David Miller",
      role: "Architect",
      image: "https://i.pravatar.cc/150?u=david",
      comment:
        "The elderly care service for my father was exceptional. Their medical knowledge and patience are truly commendable.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Business Owner",
      image: "https://i.pravatar.cc/150?u=emily",
      comment:
        "Transparent pricing and easy booking. I love how I can see the total cost before confirming. Highly recommended!",
      rating: 4,
    },
    {
      name: "Robert Wilson",
      role: "Professor",
      image: "https://i.pravatar.cc/150?u=robert",
      comment:
        "Reliable and secure. The NID verification of caregivers gives me peace of mind when someone is at my home.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-sm font-medium mb-4">
            <Star size={14} fill="currentColor" />
            <span>Trusted by 10k+ Families</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Stories from Our <span className="text-blue-500">Community</span>
          </h2>

          <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            Real feedback from families who have experienced our professional care services.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2rem] bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm relative"
            >
              <Quote
                className="absolute top-6 right-8 text-gray-300 dark:text-slate-700 group-hover:text-blue-500/20 transition-colors"
                size={40}
              />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 dark:text-slate-600"
                    }
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-8 italic">
                "{review.comment}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-slate-700 group-hover:border-blue-500 transition-colors relative z-10"
                  />
                </div>

                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 dark:text-slate-500 text-xs uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-slate-800/50 flex flex-wrap justify-center gap-12 grayscale opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-gray-800 dark:text-white font-black text-xl tracking-tighter italic">
            TRUSTED CARE
          </span>
          <span className="text-gray-800 dark:text-white font-black text-xl tracking-tighter italic">
            SAFE HOME
          </span>
          <span className="text-gray-800 dark:text-white font-black text-xl tracking-tighter italic">
            KIDS CHOICE
          </span>
          <span className="text-gray-800 dark:text-white font-black text-xl tracking-tighter italic">
            ELDERLY HELP
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;