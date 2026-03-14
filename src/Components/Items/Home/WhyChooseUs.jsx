import React from "react";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  Star,
  Headphones,
  CheckCircle,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-blue-500 dark:text-blue-400" size={32} />,
      title: "Verified Professionals",
      description:
        "Every caregiver undergoes a rigorous background check and NID verification for your family's safety.",
      gradient: "from-blue-500/20 to-transparent",
    },
    {
      icon: <Zap className="text-amber-500 dark:text-amber-400" size={32} />,
      title: "Instant Booking",
      description:
        "Find and hire a trusted caregiver in minutes with our streamlined, user-friendly dynamic booking system.",
      gradient: "from-amber-500/20 to-transparent",
    },
    {
      icon: (
        <HeartHandshake className="text-rose-500 dark:text-rose-400" size={32} />
      ),
      title: "Compassionate Care",
      description:
        "We don't just provide services; we provide emotional support and companionship for your loved ones.",
      gradient: "from-rose-500/20 to-transparent",
    },
    {
      icon: <Star className="text-purple-500 dark:text-purple-400" size={32} />,
      title: "Premium Quality",
      description:
        "Our platform ensures the highest standards of caregiving, from baby sitting to specialized elderly care.",
      gradient: "from-purple-500/20 to-transparent",
    },
    {
      icon: (
        <Headphones className="text-cyan-500 dark:text-cyan-400" size={32} />
      ),
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any inquiries or emergencies.",
      gradient: "from-cyan-500/20 to-transparent",
    },
    {
      icon: (
        <CheckCircle className="text-emerald-500 dark:text-emerald-400" size={32} />
      ),
      title: "Transparent Pricing",
      description:
        "No hidden fees. Dynamic cost calculation based on your specific duration and location needs.",
      gradient: "from-emerald-500/20 to-transparent",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">
            The Care.IO Advantage
          </h2>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Why Thousands of Families <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
              Trust Our Platform
            </span>
          </h1>

          <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We bridge the gap between technology and human care, making professional caregiving accessible to everyone.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[2rem] bg-white dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm shadow-sm dark:shadow-none"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`}
              ></div>

              <div className="relative z-10">
                <div className="mb-6 p-4 w-max rounded-2xl bg-gray-100 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-slate-500 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 p-1 px-4 rounded-full bg-gray-100 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            Join 500+ caregivers waiting to help you.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;