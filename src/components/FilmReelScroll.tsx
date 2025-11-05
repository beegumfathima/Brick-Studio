import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function FilmReelScroll() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <div ref={ref} className="h-64 overflow-hidden relative my-32">
      <motion.div
        style={{ x }}
        className="flex items-center gap-8 absolute left-0 whitespace-nowrap"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            style={{ rotate }}
            className="w-32 h-40 border-4 border-white bg-black flex-shrink-0 relative"
          >
            {/* Film Frame Holes */}
            <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-around py-2">
              {Array.from({ length: 8 }).map((_, j) => (
                <div key={j} className="w-3 h-3 bg-white mx-auto" />
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-4 flex flex-col justify-around py-2">
              {Array.from({ length: 8 }).map((_, j) => (
                <div key={j} className="w-3 h-3 bg-white mx-auto" />
              ))}
            </div>
            
            {/* Frame Content */}
            <div className="absolute inset-4 left-6 right-6 bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
              <span className="text-4xl font-heading">{i + 1}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
}
