// components/atoms/PasswordInput/PasswordInput.tsx
'use client';

import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ error, className = '', ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full relative">
      <input
        type={showPassword ? 'text' : 'password'}
        className={`w-full px-4 py-2 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500
                   ${error ? 'border-red-500' : 'border-gray-300'}
                   ${className}`}
        {...props}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5" />
        ) : (
          <EyeIcon className="h-5 w-5" />
        )}
      </button>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};