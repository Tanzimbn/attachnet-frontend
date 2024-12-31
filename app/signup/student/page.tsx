'use client'
import { useRouter } from 'next/navigation';
import { CustomButton } from '@/components/atoms/CustomButton';
import { FormInput } from '@/components/atoms/FormInput';
import { FormCard } from '@/components/Molecules/FormCard';
import { AuthLayout } from '@/components/Organisms/AuthLayout';
import { Modal } from '@/components/atoms/Modal';
import { useState } from 'react';

export default function StudentSignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(''); // Clear previous errors
    setIsSuccess(false); // Clear previous success message
  
    const formData = new FormData(e.target as HTMLFormElement);
    const userData = {
      role: "2",
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      contact: formData.get('contact'),
      studentId: formData.get('studentId'),
      batch: formData.get('batch'),
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/user/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
      
        try {
          // Attempt to parse as JSON
          const errorEntity = JSON.parse(errorMessage);console.log(errorEntity);
      
          // If the parsed object has an "error" property, use it
          if (errorEntity && errorEntity.error) { console.log(errorEntity.error);
            throw new Error('errorEntity.error'); // Use the error message from the entity
          } else {
            throw new Error('An unknown error occurred.');
          }
        } catch (e) {
          // If parsing fails, fall back to raw text
          throw new Error(errorMessage || 'An unknown error occurred.');
        }
      }
      
  
      setIsSuccess(true);
      router.push('/dashboard'); // Redirect on success
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setIsModalOpen(true); // Open the modal immediately after setting the error
      } else {
        setError('Something went wrong. Please try again later.');
        setIsModalOpen(true); // Open the modal even for unknown errors
      }
    } finally {
      setIsLoading(false);
    }
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthLayout>
      <FormCard title="Student Registration">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput id="name" name="name" label="Full Name" type="text" required />
          <FormInput id="studentId" name="studentId" label="Student ID" type="text" required pattern="^[0-9]+$" />
          <FormInput id="email" name="email" label="Email" type="email" required />
          <FormInput id="password" name="password" label="Password" type="password" required />
          <FormInput id="contact" name="contact" label="Contact Number" type="tel" required pattern="^[0-9]{11}$" />
          <FormInput id="batch" name="batch" label="Batch" type="text" required pattern="^[0-9]+$" />

          <CustomButton type="submit" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </CustomButton>
          <CustomButton color="gray" fullSized onClick={() => router.push('/')}>
            Back to Home
          </CustomButton>
        </form>
      </FormCard>

      {/* Modal to show error */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={error}
        header="Error"
        headerColor="text-red-600" // Custom header color
        buttonColor="bg-red-500" // Custom close button color
        modalBackgroundColor="bg-gray-200" // Custom modal background color
        textColor="text-black" // Custom text color for message
      />
    </AuthLayout>
  );
}
