'use client'
import { useRouter } from 'next/navigation';
import { CustomButton } from '@/components/atoms/CustomButton';
import { FormInput } from '@/components/atoms/FormInput';
import { FormCard } from '@/components/Molecules/FormCard';
import { AuthLayout } from '@/components/Organisms/AuthLayout';

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Your form validation or API call logic goes here

    // On successful login, navigate to the dashboard
    router.push('/dashboard');
  };

  return (
    <AuthLayout>
      <FormCard title="Login">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput id="email" label="Email" type="email" required name={''} />
          <FormInput id="password" label="Password" type="password" required name={''} />

          <div className="flex justify-center space-x-4">
            {/* Remove onClick from submit button */}
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton color="gray" onClick={() => router.push('/')}>
              Back to Home
            </CustomButton>
          </div>
        </form>
      </FormCard>
    </AuthLayout>
  );
}
