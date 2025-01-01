// components/molecules/FormField/FormField.tsx
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { PasswordInput } from '@/components/atoms/PasswordInput';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  success?: boolean;
  register?: any;
  placeholder?: string;
  [key: string]: any;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  required = false,
  error,
  success,
  register,
  placeholder,
  ...props
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <div className="relative">
        {type === 'password' ? (
          <PasswordInput
            id={name}
            error={error}
            placeholder={placeholder}
            {...register(name)}
            {...props}
          />
        ) : (
          <Input
            id={name}
            type={type}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-900
              ${error 
                ? 'border-red-500 focus:ring-red-200' 
                : 'border-gray-300 focus:ring-indigo-200'
              }
              ${success && 'border-green-500'}
              placeholder:text-gray-400`}
            placeholder={placeholder}
            {...register(name)}
            {...props}
          />
        )}
        {success && type !== 'password' && (
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      {/* {error && <p className="mt-1 text-sm text-red-500">{error}</p>} */}
    </div>
  );
};