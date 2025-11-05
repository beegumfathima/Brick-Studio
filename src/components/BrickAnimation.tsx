import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function BrickAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bricks = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center overflow-hidden relative">
      <div className="relative w-full max-w-4xl h-[500px] mx-auto px-6">
        {bricks.map((_, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;
          
          const y = useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [300, 0, -300]
          );
          
          const opacity = useTransform(
            scrollYProgress,
            [0, 0.3, 0.7, 1],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={index}
              style={{ 
                y, 
                opacity,
                x: col * 240 + (row % 2 === 0 ? 0 : 120),
                top: row * 100
              }}
              className="absolute w-56 h-20 border border-white/5 bg-white/[0.01] backdrop-blur-sm"
            >
              {/* Subtle inner border */}
              <div className="absolute inset-2 border border-white/[0.02]" />
            </motion.div>
          );
        })}
        
        {/* Center text */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0])
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6"
        >
          <h3 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-[-0.03em] mb-4">
            BRICK BY BRICK
          </h3>
          <p className="text-base md:text-lg text-white/40">
            Building brands with intention and soul
          </p>
        </motion.div>
      </div>
    </div>
  );
}
