import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-blue-600 text-white p-6">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-300">Profile</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-300">Settings</a>
            </li>
            <li className="mb-4">
              <a href="/" className="hover:text-gray-300">Logout</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to your Dashboard</h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">1,230</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">New Messages</h3>
              <p className="text-3xl font-bold text-green-600">45</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pending Tasks</h3>
              <p className="text-3xl font-bold text-yellow-600">8</p>
            </div>
          </div>

          {/* Chart or Other Content */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Activity Overview</h3>
            <div className="h-64 bg-gray-200 rounded-lg flex justify-center items-center">
              <p className="text-gray-500">Insert a Chart here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
