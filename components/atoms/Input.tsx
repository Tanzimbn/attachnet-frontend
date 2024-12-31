// components/atoms/Input/Input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
  }
  
  export const Input: React.FC<InputProps> = ({ error, className = '', ...props }) => {
    return (
      <div className="w-full">
        <input
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500
                     ${error ? 'border-red-500' : 'border-gray-300'}
                     ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  };