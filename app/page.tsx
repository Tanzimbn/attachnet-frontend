// app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

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
            Simplify industrial attachments for students and teachers. Easily manage groups, track placements, and monitor applications in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/login" className="w-full sm:w-auto">
              <Button
                variant="primary"
                fullWidth
                className="transform hover:-translate-y-0.5"
              >
                Login
              </Button>
            </Link>

            <Link href="/signup" className="w-full sm:w-auto">
              <Button
                variant="outline"
                fullWidth
                className="transform hover:-translate-y-0.5"
              >
                Sign Up
              </Button>
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