import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#1E1E1E] bg-[#0E0E0E]">
      <div className="max-w-[1440px] mx-auto px-20 py-8">
        <div className="flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#B3B3B3]"
          >
            © 2025 Sahal
          </motion.p>
          <motion.button
            onClick={() => onNavigate('board')}
            className="text-[#B3B3B3] hover:text-[#B197FC] transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl mr-2 inline-block group-hover:animate-spin">♟</span>
            Back to the Board
          </motion.button>
        </div>
      </div>
    </footer>
  );
}