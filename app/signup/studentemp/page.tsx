// app/signup/student/page.tsx
import { AuthLayout } from '@/components/AuthLayout';
import { StudentSignupForm } from '@/components/Organisms/StudentSignupForm';
import { SignupRedirect } from '@/components/Organisms/SignupRedirect';

export default function StudentSignupPage() {
  return (
    <AuthLayout 
      title="Student Sign Up"
      subtitle="Create your student account"
      showBackButton={true}
    >
      <StudentSignupForm />
      <SignupRedirect />
    </AuthLayout>
  );
}