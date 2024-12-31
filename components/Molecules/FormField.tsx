// components/molecules/FormField/FormField.tsx
import { Input } from '@/components/atoms/Input';
import { PasswordInput } from '@/components/atoms/PasswordInput';
import { Label } from '@/components/atoms/Labeltemp';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  [key: string]: any;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  required = false,
  error,
  ...props
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {type === 'password' ? (
        <PasswordInput
          id={name}
          name={name}
          error={error}
          required={required}
          {...props}
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          error={error}
          required={required}
          {...props}
        />
      )}
    </div>
  );
};