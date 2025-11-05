import { motion } from 'motion/react';
import { useState } from 'react';

interface EasterEggProps {
  message: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  onReveal?: () => void;
}

export function EasterEgg({ message, position, onReveal }: EasterEggProps) {
  const [revealed, setRevealed] = useState(false);
  const [hoverStartTime, setHoverStartTime] = useState<number | null>(null);

  const positionClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  };

  const handleMouseEnter = () => {
    const startTime = Date.now();
    setHoverStartTime(startTime);

    setTimeout(() => {
      if (hoverStartTime === startTime) {
        setRevealed(true);
        onReveal?.();
      }
    }, 2000);
  };

  const handleMouseLeave = () => {
    setHoverStartTime(null);
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-30`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-12 h-12 relative cursor-pointer">
        {revealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute bottom-full mb-4 right-0 bg-[#1E1E1E] px-4 py-3 rounded-xl border border-[#B197FC] shadow-lg whitespace-nowrap"
            style={{
              boxShadow: '0 0 20px rgba(177, 151, 252, 0.3)',
            }}
          >
            <p className="text-[#B197FC]">{message}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}