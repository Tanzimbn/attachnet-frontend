// components/molecules/AlertMessage/AlertMessage.tsx
import { XCircleIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface AlertMessageProps {
  type: 'success' | 'error';
  message: string;
  onClose?: () => void;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({ type, message, onClose }) => {
  const styles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700',
      icon: <CheckCircleIcon className="h-5 w-5" />
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-700',
      icon: <XCircleIcon className="h-5 w-5" />
    }
  };

  const currentStyle = styles[type];

  return (
    <div className={`p-4 ${currentStyle.bg} border ${currentStyle.border} rounded-lg flex items-center gap-2 ${currentStyle.text}`}>
      {currentStyle.icon}
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="hover:bg-opacity-20 hover:bg-black rounded p-1"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};