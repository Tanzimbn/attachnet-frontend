'use client'
import { Button, ButtonProps } from 'flowbite-react';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const CustomButton = ({ children, ...props }: CustomButtonProps) => (
  <button
    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
    {...props}
  >
    <span className="relative block w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      {children}
    </span>
  </button>

);