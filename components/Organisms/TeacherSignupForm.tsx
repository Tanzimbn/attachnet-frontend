// components/organisms/TeacherSignupForm/TeacherSignupForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { teacherSchema, type TeacherFormData } from '@/utils/TeacherSchema';
import { FormField } from '@/components/Molecules/FormField';
import { Button } from '@/components/atoms/Button';
import { AlertMessage } from '@/components/Molecules/AltertMessage';

export const TeacherSignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    reset
  } = useForm<TeacherFormData>({
    resolver: zodResolver(teacherSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: TeacherFormData) => {
    data.role = 1;
    setIsSubmitting(true);
    setApiError(null);

    try {
        const { confirmPassword, ...dataToSend } = data;
      const response = await fetch('http://localhost:8080/api/v1/user/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        let errorMessage;
        const contentType = response.headers.get('content-type');
        
        try {
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || 'An unexpected error occurred';
          } else {
            errorMessage = await response.text();
          }
        } catch (e) {
          errorMessage = await response.text();
        }

        throw new Error(errorMessage);
      }

      setSubmitSuccess(true);
      reset();
      window.location.href = '/dashboard';
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {apiError && (
        <AlertMessage
          type="error"
          message={apiError}
          onClose={() => setApiError(null)}
        />
      )}

      {submitSuccess && (
        <AlertMessage
          type="success"
          message="Teacher account created successfully!"
          onClose={() => setSubmitSuccess(false)}
        />
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
        label="Contact Number"
        name="contact"
        type="tel"
        placeholder="11-digit phone number"
        register={register}
        error={errors.contact?.message}
        success={dirtyFields.contact && !errors.contact}
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
          'Create Teacher Account'
        )}
      </Button>
    </form>
  );
};