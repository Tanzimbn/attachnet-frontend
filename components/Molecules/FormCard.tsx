'use client'
import { Card } from 'flowbite-react';
import { Logo } from '../atoms/Logo';

interface FormCardProps {
  title: string;
  children: React.ReactNode;
}

export const FormCard = ({ title, children }: FormCardProps) => (
  <Card className="w-full max-w-md">
    <div className="space-y-6">
      <Logo />
      <h2 className="text-2xl font-bold text-center text-gray-900">{title}</h2>
      {children}
    </div>
  </Card>
);