import React from "react";
import { Heart, ShieldCheck, Clock } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-16 mb-16 shadow-2xl">
          <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center md:text-left md:flex items-center justify-between">

            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                মানুষের সেবায়, <br /> হৃদয়ের মমতায়{" "}
                <span className="text-blue-200">Care.IO</span>
              </h1>

              <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl">
                আমাদের মূল লক্ষ্য হলো আপনার প্রিয়জনদের জন্য একটি নিরাপদ
                এবং নির্ভরযোগ্য যত্ন নিশ্চিত করা। প্রযুক্তির মাধ্যমে আমরা
                কেয়ারগিভিং সার্ভিসকে করেছি আরও সহজ, দ্রুত এবং বিশ্বাসযোগ্য।
              </p>
            </div>

            <div className="hidden md:block">
              <div className="w-64 h-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center">
                <Heart size={100} className="text-white animate-pulse" />
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
          {[
            { label: "সফল প্রজেক্ট", value: "৫০০+", color: "text-blue-600" },
            { label: "খুশি গ্রাহক", value: "১০হাজার+", color: "text-green-600" },
            { label: "দক্ষ কেয়ারগিভার", value: "১৫০+", color: "text-purple-600" },
            { label: "সেবা এলাকা", value: "১২+", color: "text-orange-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition"
            >
              <span
                className={`block text-3xl font-bold ${stat.color} mb-1`}
              >
                {stat.value}
              </span>

              <span className="text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Care.IO শুধুমাত্র একটি প্ল্যাটফর্ম নয়, এটি একটি আস্থার নাম।
              আমরা বিশ্বাস করি প্রতিটি শিশুর সঠিক বিকাশ এবং প্রতিটি
              বয়োজ্যেষ্ঠ ব্যক্তির সম্মানজনক ও যত্নশীল জীবন প্রাপ্য।
            </p>

            <div className="space-y-4">

              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    শতভাগ নিরাপত্তা
                  </h4>

                  <p className="text-gray-500 dark:text-gray-400">
                    আমাদের প্রত্যেক কেয়ারগিভার ভেরিফাইড এবং অভিজ্ঞ।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600">
                  <Clock size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    ২৪/৭ কাস্টমার সাপোর্ট
                  </h4>

                  <p className="text-gray-500 dark:text-gray-400">
                    যেকোনো প্রয়োজনে আমরা আছি আপনার পাশে সবসময়।
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-xl rotate-2">
            <img
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf"
              alt="Caregiving"
              className="rounded-2xl w-full h-80 object-cover"
            />
          </div>

        </div>

        {/* CTA */}
        <div className="text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-10 rounded-3xl">

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            আমাদের সাথে যুক্ত হতে চান?
          </h3>

          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            আপনার পরিবারের জন্য সেরা কেয়ারগিভার খুঁজে নিতে আজই আমাদের
            সার্ভিসগুলো দেখুন।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg transition">
              সার্ভিসগুলো দেখুন
            </button>

            <button className="px-8 py-3 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-gray-600 transition">
              যোগাযোগ করুন
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;