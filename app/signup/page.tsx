'use client'
import { useRouter } from 'next/navigation';
import { CustomButton } from '@/components/atoms/CustomButton';
import { FormCard } from '@/components/Molecules/FormCard';
import { AuthLayout } from '@/components/Organisms/AuthLayout';

export default function SignUp() {
  const router = useRouter();

  return (
    <AuthLayout>
      <FormCard title="Choose Registration Type">
  <div className="flex justify-center space-x-4">
    <CustomButton onClick={() => router.push('/signup/student')}>
      Register as Student
    </CustomButton>
    <CustomButton onClick={() => router.push('/signup/teacher')}>
      Register as Teacher
    </CustomButton>
  </div>
  <div className="flex justify-center mt-4">
    <CustomButton color="gray" onClick={() => router.push('/')}>
      Back to Home
    </CustomButton>
  </div>
</FormCard>


    </AuthLayout>
  );
}
