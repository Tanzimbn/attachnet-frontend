'use client';

import { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';

interface FormInputProps {
  id: string;
  name: string; // Add name as a required prop
  label: string;
  type: string;
  required?: boolean;
  pattern?: string; // Optional pattern for validation
}

export const FormInput = ({ id, name, label, type, required, pattern }: FormInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  // Default pattern for numeric digits (only numbers)
  const numericPattern = pattern || '^[0-9]+$'; // Only numeric digits

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <div className="relative">
        <TextInput
          id={id}
          name={name} // Add the name attribute here
          type={
            type === "password" && !isPasswordVisible ? "password" :
            type === "email" ? "email" :
            type === "tel" ? "tel" :
            "text"
          } // Conditionally handle email, password, and other types
          required={required}
          pattern={id === "batch" || id === "studentId" || type === "tel" ? numericPattern : pattern} // Apply pattern for batch, studentId, or tel
          className="block w-full mt-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium text-gray-500 bg-transparent border-l focus:outline-none"
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};
