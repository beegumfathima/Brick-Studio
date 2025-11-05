import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ChessButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function ChessButton({ children, onClick, variant = 'primary', className = '' }: ChessButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      onClick={onClick}
      className={`
        px-8 py-4 rounded-2xl tracking-tight
        transition-all duration-300
        ${isPrimary 
          ? 'bg-[#B197FC] text-[#0E0E0E] hover:bg-[#9979E0]' 
          : 'bg-transparent border-2 border-[#B197FC] text-[#B197FC] hover:bg-[#B197FC] hover:text-[#0E0E0E]'
        }
        ${className}
      `}
      whileHover={{ 
        scale: 1.05,
        boxShadow: isPrimary ? '0 0 20px rgba(177, 151, 252, 0.5)' : '0 0 20px rgba(177, 151, 252, 0.3)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}