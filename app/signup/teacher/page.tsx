'use client'
import { useRouter } from 'next/navigation';
import { CustomButton } from '@/components/atoms/CustomButton';
import { FormInput } from '@/components/atoms/FormInput';
import { FormCard } from '@/components/Molecules/FormCard';
import { AuthLayout } from '@/components/Organisms/AuthLayout';
import { useState } from 'react';
import { Modal } from '@/components/atoms/Modal';  // Import the Modal component

export default function TeacherSignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(''); // Clear previous errors if any
    setIsSuccess(false); // Clear previous success message
    console.log("working!");

    const formData = new FormData(e.target as HTMLFormElement);
    const userData = {
      role: "1",
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      contact: formData.get('contact'),
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
        throw new Error(`${errorMessage}`);
      }
      
      setIsSuccess(true);
      router.push('/dashboard');

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setIsLoading(false);
      if (error) {
        setIsModalOpen(true); // Open the modal if there is an error
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthLayout>
      <FormCard title="Teacher Registration">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput id="name" name="name" label="Full Name" type="text" required />
          <FormInput id="email" name="email" label="Email" type="email" required />
          <FormInput id="password" name="password" label="Password" type="password" required />
          <FormInput id="contact" name="contact" label="Contact Number" type="tel" required pattern="^[0-9]{11}$" />

          <CustomButton type="submit" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </CustomButton>

          {isSuccess && <p className="text-green-500">Registration successful!</p>}

          <CustomButton color="gray" onClick={() => router.push('/')}>
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
