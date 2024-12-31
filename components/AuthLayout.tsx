// components/templates/AuthLayout/AuthLayout.tsx
interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
  }
  
  export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 text-center mb-8">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    );
  };