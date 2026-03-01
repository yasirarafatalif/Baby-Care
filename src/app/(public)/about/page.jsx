import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden md:flex">
        
        {/* Left Side: Image or Illustration Placeholder */}
        <div className="md:w-1/3 bg-blue-600 flex items-center justify-center p-10">
          <h2 className="text-4xl font-bold text-white">About Us</h2>
        </div>

        {/* Right Side: Content */}
        <div className="p-8 md:w-2/3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to Our Journey
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Amader uddeshyo holo apnadher kache shera service pouchaya deya. 
            Ekhane apni amader kaj ebong vision somporke jante parben. 
            Amra protiniyot chesta korchi kibhabe technology-ke aro shohoj kora jay.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <span className="block text-2xl font-bold text-blue-600">50+</span>
              <span className="text-sm text-gray-500">Projects Done</span>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <span className="block text-2xl font-bold text-green-600">10k+</span>
              <span className="text-sm text-gray-500">Happy Clients</span>
            </div>
          </div>

          <button className="mt-8 px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;