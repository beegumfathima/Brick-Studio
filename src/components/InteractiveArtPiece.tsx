import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function InteractiveArtPiece() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-[400px] h-[400px]"
      >
        {/* Abstract geometric shapes */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border border-white/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{ transform: 'translateZ(50px)' }}
          />

          {/* Middle ring */}
          <motion.div
            className="absolute inset-8 border border-white/15"
            animate={{
              rotate: -360,
              scale: [1, 1.08, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
            }}
            style={{ transform: 'translateZ(30px)' }}
          />

          {/* Inner ring */}
          <motion.div
            className="absolute inset-16 border border-white/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 },
            }}
            style={{ transform: 'translateZ(10px)' }}
          />

          {/* Crossing lines */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transform: 'translateZ(20px)' }}
          />
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{ transform: 'translateZ(20px)' }}
          />

          {/* Corner elements */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 border border-white/15"
              style={{
                top: i < 2 ? '10%' : 'auto',
                bottom: i >= 2 ? '10%' : 'auto',
                left: i % 2 === 0 ? '10%' : 'auto',
                right: i % 2 === 1 ? '10%' : 'auto',
                transform: `translateZ(${40 + i * 10}px)`,
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 10 + i * 2, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
              }}
            />
          ))}

          {/* Center dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transform: 'translateZ(60px)' }}
          />

          {/* Subtle glow */}
          <div className="absolute inset-0 bg-white/5 blur-[60px] rounded-full opacity-50" />
        </motion.div>
      </motion.div>
    </div>
  );
}
