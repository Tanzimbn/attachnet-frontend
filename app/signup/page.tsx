// app/signup/page.tsx
import { AuthLayout } from '@/components/AuthLayout';
import { SignupRedirect } from '@/components/Organisms/SignupRedirect';
import { RoleCard } from '@/components/Molecules/RoleCard';
import { AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Choose your role to get started"
    >
      <div className="space-y-6 sm:space-y-8 py-4">
        <RoleCard
          title="Student"
          description="Sign up as a student to access course materials"
          icon={<AcademicCapIcon className="h-6 w-6 text-indigo-600" />}
          href="/signup/student"
          variant="primary"
        />

        <RoleCard
          title="Teacher"
          description="Sign up as a teacher to manage courses"
          icon={<UserGroupIcon className="h-6 w-6 text-indigo-600" />}
          href="/signup/teacher"
          variant="outline"
        />
      </div>

      <SignupRedirect />
    </AuthLayout>
  );
}