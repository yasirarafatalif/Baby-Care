import React from 'react';

const SettingsPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>
      
      <div className="bg-white rounded-lg shadow p-6 max-w-4xl">
        {/* Profile Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Public Profile</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Display Name</label>
              <input type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="Admin Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" className="mt-1 block w-full border rounded-md p-2" placeholder="admin@example.com" />
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Preferences</h2>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        </section>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;