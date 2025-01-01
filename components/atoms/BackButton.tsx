// components/atoms/BackButton/BackButton.tsx
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const BackButton = () => {
  return (
    <Link 
      href="/"
      className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
    >
      <ArrowLeftIcon className="h-4 w-4 mr-1" />
      Back to Homepage
    </Link>
  );
};