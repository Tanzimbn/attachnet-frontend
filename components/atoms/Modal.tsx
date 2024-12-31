import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  header?: string; // Optional header text
  headerColor?: string; // Optional color for the header text
  buttonColor?: string; // Optional color for the close button
  modalBackgroundColor?: string; // Optional background color for the modal
  textColor?: string; // Optional text color for the message
}

export const Modal = ({
  isOpen,
  onClose,
  message,
  header = 'Error', // Default header if none is passed
  headerColor = 'text-black', // Default header color
  buttonColor = 'bg-blue-500', // Default close button color
  modalBackgroundColor = 'bg-white', // Default modal background color
  textColor = 'text-gray-700', // Default text color for the message
}: ModalProps) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className={`p-6 rounded-lg shadow-lg w-1/2 ${modalBackgroundColor}`}>
        <div className="flex justify-between items-center">
          <h3 className={`text-lg font-semibold ${headerColor}`}>{header}</h3>
        </div>
        <p className={`mt-4 ${textColor}`}>{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
