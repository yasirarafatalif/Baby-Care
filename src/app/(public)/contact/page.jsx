import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Contact Information */}
        <div className="md:w-2/5 bg-blue-700 p-10 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-8 text-blue-100">
            Amader sathe jogajog korte nicher info-gulo bebohar korun ba form-ti fill-up korun.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="bg-blue-600 p-3 rounded-lg text-xl">📍</span>
              <div>
                <p className="text-sm text-blue-200">Address</p>
                <p className="font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="bg-blue-600 p-3 rounded-lg text-xl">📞</span>
              <div>
                <p className="text-sm text-blue-200">Phone</p>
                <p className="font-medium">+880 123 456 789</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="bg-blue-600 p-3 rounded-lg text-xl">📧</span>
              <div>
                <p className="text-sm text-blue-200">Email</p>
                <p className="font-medium">hello@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-10 md:w-3/5">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Apnar Nam" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="example@mail.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="Apni ki bolte chan..." 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-800 transition shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;