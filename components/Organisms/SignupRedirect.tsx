// components/Organisms/SignupRedirect/SignupRedirect.tsx
import Link from 'next/link';

export const SignupRedirect = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="text-center">
        <p className="text-sm sm:text-base text-gray-600">
          Already have an account?{' '}
          <Link 
            href="/login" 
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};