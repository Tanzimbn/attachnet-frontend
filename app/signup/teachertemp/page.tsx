// app/signup/teacher/page.tsx
import { AuthLayout } from '@/components/AuthLayout';
import { TeacherSignupForm } from '@/components/Organisms/TeacherSignupForm';
import { SignupRedirect } from '@/components/Organisms/SignupRedirect';

export default function TeacherSignupPage() {
  return (
    <AuthLayout 
      title="Teacher Sign Up"
      subtitle="Create your teacher account"
      showBackButton={true}
    >
      <TeacherSignupForm />
      <SignupRedirect />
    </AuthLayout>
  );
}