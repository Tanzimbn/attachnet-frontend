// app/page.tsx
'use client';

import { Logo } from '@/components/atoms/Logo';
import Image from 'next/image';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-7xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        {/* Content Section */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AttachNet
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Your gateway to amazing experiences. Join our community today and discover
            what makes us special.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/logintemp">
              <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg 
                               hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200
                               focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="w-full sm:w-auto px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg 
                               border-2 border-indigo-600 hover:bg-indigo-50 transform hover:-translate-y-0.5 
                               transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                               focus:ring-offset-2">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full max-w-md">
          <Image
            src="/welcome.png"
            alt="Welcome Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </main>
  );
}