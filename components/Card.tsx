interface CardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
      <div className={`bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 ${className}`}>
        {children}
      </div>
    )
  }
  
  export default Card