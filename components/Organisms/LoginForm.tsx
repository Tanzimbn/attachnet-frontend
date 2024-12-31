// components/organisms/LoginForm/LoginForm.tsx
'use client';

import { useState } from 'react';
import { FormField } from '@/components/Molecules/FormField';
import { Button } from '@/components/atoms/Button';
import { validateEmail } from '@/utils/validation';
import Link from 'next/link';

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="your.email@example.com"
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        required
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="Enter your password"
      />
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" fullWidth>
        Login
      </Button>
    </form>
  );
};