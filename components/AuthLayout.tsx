// components/AuthLayout/AuthLayout.tsx
import { BackButton } from '@/components/atoms/BackButton';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  showBackButton = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        {showBackButton && (
          <div className="mb-6">
            <BackButton />
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};