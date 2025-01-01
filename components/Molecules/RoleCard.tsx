// components/Molecules/RoleCard/RoleCard.tsx
import Link from 'next/link';

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant: 'primary' | 'outline';
}

export const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  icon,
  href,
  variant
}) => {
  return (
    <Link 
      href={href}
      className="block w-full transition-transform hover:-translate-y-1"
    >
      <div className={`
        p-6 sm:p-8 rounded-xl border-2 transition-all duration-300
        ${variant === 'primary' 
          ? 'border-indigo-100 hover:border-indigo-200 bg-white' 
          : 'border-gray-100 hover:border-indigo-100 bg-white'
        }
        hover:shadow-md
      `}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 bg-indigo-100 rounded-lg">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {description}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button
            className={`
              w-full py-3 px-4 rounded-lg font-medium transition-colors
              ${variant === 'primary'
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
              }
            `}
          >
            Sign up as {title}
          </button>
        </div>
      </div>
    </Link>
  );
};