// app/home/page.tsx
import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 font-sans">
      {/* Vertically long glassmorphism container */}
      <div className="w-full max-w-3xl h-[80vh] p-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col justify-center items-center">
        <div className="text-center">
          {/* Updated company name color for better visibility */}
          <h1 className="text-5xl font-extrabold text-white">AttachNet</h1>
          <p className="mt-4 text-xl text-gray-700">
            Welcome to AttachNet! We're glad to have you here.
          </p>
          <div className="mt-8 space-x-4">
            {/* Updated Login button color */}
            <Link
              href="/login"
              className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Login
            </Link>
            {/* Add "or" text */}
            <span className="mx-4 text-lg text-gray-600">or</span>
            {/* Sign Up Button */}
            <Link
              href="/signup"
              className="px-6 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
