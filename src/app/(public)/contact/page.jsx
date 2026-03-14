
"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Swal from "sweetalert2";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message Sent",
      text: "Thank you for contacting us! We will get back to you shortly.",
      showConfirmButton: false,
      timer: 2000,
    });
    e.target.reset();
  }
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Contact Care.IO
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is always ready to help.
            Reach out to us anytime and we will respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border dark:border-gray-700 flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 rounded-lg">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  yasirarafatalif1@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border dark:border-gray-700 flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 text-green-600 rounded-lg">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  +880 17851973300
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border dark:border-gray-700 flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 text-purple-600 rounded-lg">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Address
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Uttara, Dhaka, Bangladesh
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow border dark:border-gray-700">

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send Us a Message
            </h2>

            <form
            onSubmit={handleSubmit}
            className="space-y-4">

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 px-4 py-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full mt-1 px-4 py-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
               
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;