import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

export function InteractiveCamera() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Smooth scroll animations
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0, 360, 720]), {
    stiffness: 100,
    damping: 30,
  });
  
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, 0]), {
    stiffness: 100,
    damping: 30,
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1.2, 1.2, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center sticky top-0 pointer-events-none">
      <motion.div
        style={{
          rotateY,
          rotateX,
          scale,
          opacity,
        }}
        className="relative w-64 h-48"
      >
        {/* Camera Body */}
        <div className="absolute inset-0 transform-gpu perspective-1000">
          {/* Main Camera Body */}
          <motion.div
            className="absolute inset-0 border-4 border-white bg-black"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front Face */}
            <div className="absolute inset-0 border-2 border-white/20 bg-gradient-to-br from-white/10 to-transparent" />
            
            {/* Lens */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 20px rgba(255,255,255,0.3)',
                    '0 0 40px rgba(255,255,255,0.5)',
                    '0 0 20px rgba(255,255,255,0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-white/20 to-black flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-transparent border-2 border-white/40" />
              </motion.div>
            </div>

            {/* Viewfinder */}
            <div className="absolute top-4 right-4 w-12 h-8 border-2 border-white/60 bg-white/5" />

            {/* Record Button */}
            <motion.div
              animate={{
                backgroundColor: ['#FFFFFF', '#FF0000', '#FFFFFF'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-4 left-4 w-4 h-4 rounded-full border-2 border-white"
            />

            {/* Side Details */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-24 border-l-2 border-white/20 bg-white/5">
              <div className="flex flex-col gap-2 p-2">
                <div className="w-full h-1 bg-white/40" />
                <div className="w-full h-1 bg-white/40" />
                <div className="w-full h-1 bg-white/40" />
              </div>
            </div>

            {/* Bottom Grip */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 border-t-2 border-white/20 bg-gradient-to-t from-white/10 to-transparent" />
          </motion.div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${50 + Math.cos((i * Math.PI * 2) / 12) * 150}px`,
              top: `${50 + Math.sin((i * Math.PI * 2) / 12) * 150}px`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeOut',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
