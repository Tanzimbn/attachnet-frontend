'use client'
interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="min-h-screen relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
    <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6">
      {children}
    </div>
  </div>
);