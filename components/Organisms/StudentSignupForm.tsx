// components/organisms/StudentSignupForm/StudentSignupForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { studentSchema, type StudentFormData } from '@/utils/StudentSchema';
import { FormField } from '@/components/Molecules/FormField';
import { Button } from '@/components/atoms/Button';
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export const StudentSignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    reset // Add reset to clear form after successful submission
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: StudentFormData) => {
    data.role = 2;
    setIsSubmitting(true);
    setApiError(null); // Clear any previous errors

    try {
      const { confirmPassword, ...dataToSend } = data;
      console.log(dataToSend);
      const response = await fetch('http://localhost:8080/api/v1/user/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        // Try to parse as JSON first
        let errorMessage;
        const contentType = response.headers.get('content-type');
        
        try {
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || 'An unexpected error occurred';
          } else {
            // If not JSON or JSON parsing fails, get as text
            errorMessage = await response.text();
          }
        } catch (e) {
          // If JSON parsing fails, try to get as text
          errorMessage = await response.text();
        }

        throw new Error(errorMessage);
      }

      setSubmitSuccess(true);
      reset(); // Clear form on success
      // Optional: Redirect user or show success message
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* API Error Message */}
      {apiError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <XCircleIcon className="h-5 w-5" />
          <span>{apiError}</span>
        </div>
      )}

      {/* Success Message */}
      {submitSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
          <CheckCircleIcon className="h-5 w-5" />
          <span>Account created successfully!</span>
        </div>
      )}

      <FormField
        label="Full Name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        register={register}
        error={errors.name?.message}
        success={dirtyFields.name && !errors.name}
        required
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="your.email@example.com"
        register={register}
        error={errors.email?.message}
        success={dirtyFields.email && !errors.email}
        required
      />

      <FormField
        label="Student ID"
        name="studentId"
        type="text"
        placeholder="Enter your student ID"
        register={register}
        error={errors.studentId?.message}
        success={dirtyFields.studentId && !errors.studentId}
        required
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="Create a strong password"
        register={register}
        error={errors.password?.message}
        success={dirtyFields.password && !errors.password}
        required
      />

      <FormField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        register={register}
        error={errors.confirmPassword?.message}
        success={dirtyFields.confirmPassword && !errors.confirmPassword}
        required
      />

      <FormField
        label="Contact"
        name="contact"
        type="tel"
        placeholder="11-digit phone number"
        register={register}
        error={errors.contact?.message}
        success={dirtyFields.contact && !errors.contact}
        required
      />

      <FormField
        label="Batch"
        name="batch"
        type="text"
        placeholder="Enter your batch number"
        register={register}
        error={errors.batch?.message}
        success={dirtyFields.batch && !errors.batch}
        required
      />

      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`w-full ${!isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Creating Account...
          </div>
        ) : (
          'Create Account'
        )}
      </Button>
    </form>
  );
};