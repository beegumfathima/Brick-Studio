import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

export function FloatingPlayButton() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Follow mouse with some constraint
        x.set(mouseX * 0.3);
        y.set(mouseY * 0.3);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center relative">
      <motion.div
        style={{
          x: springX,
          y: springY,
          opacity,
          scale,
        }}
        className="relative"
      >
        {/* Outer Rings */}
        <motion.div
          className="absolute inset-0 w-48 h-48 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 w-48 h-48 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Main Button */}
        <motion.button
          className="relative w-32 h-32 bg-white text-black rounded-full flex items-center justify-center cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(255,255,255,0.3)',
              '0 0 40px rgba(255,255,255,0.6)',
              '0 0 20px rgba(255,255,255,0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Play className="w-12 h-12 ml-2" fill="currentColor" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-white blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
        </motion.button>

        {/* Text */}
        <motion.div
          className="absolute top-full mt-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-2xl font-heading">Watch Showreel</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
