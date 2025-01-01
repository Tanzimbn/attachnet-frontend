// app/login/page.tsx
import { AuthLayout } from '@/components/AuthLayout';
import { LoginForm } from '@/components/Organisms/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account"
      showBackButton={true}
    >
      <LoginForm />
    </AuthLayout>
  );
}