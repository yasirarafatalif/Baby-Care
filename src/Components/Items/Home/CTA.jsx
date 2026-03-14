import React from "react";
import { ArrowRight, Calendar, UserPlus } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative rounded-[3rem] overflow-hidden border border-gray-200 dark:border-slate-700/50 bg-gray-50 dark:bg-slate-900/40 backdrop-blur-xl p-8 md:p-16 shadow-xl dark:shadow-2xl">

          {/* Decorative Icon */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Calendar size={200} className="text-gray-700 dark:text-white -rotate-12" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h2 className="text-blue-500 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
                Ready to experience better care?
              </h2>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                Give Your Loved Ones <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
                  The Care They Deserve
                </span>
              </h1>

              <p className="text-gray-600 dark:text-slate-400 text-lg mb-10 max-w-lg">
                Join thousands of families in Dhaka who trust Care.IO for reliable,
                secure, and professional caregiving services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20 group">
                  Book a Service Now
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-300 dark:border-slate-700 transition-all">
                  <UserPlus size={20} />
                  Join as Caregiver
                </button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md">
                <h3 className="text-gray-900 dark:text-white font-bold text-3xl mb-1">2k+</h3>
                <p className="text-gray-500 dark:text-slate-500 text-sm">
                  Active Caregivers
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md">
                <h3 className="text-gray-900 dark:text-white font-bold text-3xl mb-1">98%</h3>
                <p className="text-gray-500 dark:text-slate-500 text-sm">
                  Satisfaction Rate
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md">
                <h3 className="text-gray-900 dark:text-white font-bold text-3xl mb-1">24/7</h3>
                <p className="text-gray-500 dark:text-slate-500 text-sm">
                  Emergency Support
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md">
                <h3 className="text-gray-900 dark:text-white font-bold text-3xl mb-1">Secure</h3>
                <p className="text-gray-500 dark:text-slate-500 text-sm">
                  Payment Gateway
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;