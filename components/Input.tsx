interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
  }
  
  const Input: React.FC<InputProps> = ({ label, type = "text", id, required = false, ...props }) => {
    return (
      <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          type={type}
          id={id}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />
      </div>
    )
  }
  
  export default Input