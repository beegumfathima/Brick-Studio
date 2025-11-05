import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import InteractiveArtPiece from '../InteractiveArtPiece';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Minimal background */}
      <div className="absolute inset-0 bg-black" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text Content */}
          <motion.div 
            style={{ y }}
            className="space-y-12 lg:space-y-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="space-y-10"
            >
              {/* Top label */}
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-12 h-px bg-white/30"
                />
                <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">
                  Brand Document
                </span>
              </div>

              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h1 className="text-[clamp(2.5rem,7vw,7rem)] leading-[1.05] tracking-[-0.04em]">
                  WE'RE NOT HERE<br />
                  TO BUILD<br />
                  <span className="font-serif italic font-normal opacity-90">"NICE"</span> BRANDS
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="max-w-lg"
              >
                <p className="text-base md:text-lg leading-[1.8] text-white/60">
                  We're here to build brands that breathe — imperfect, grounded, and alive in every pixel.
                </p>
              </motion.div>

              {/* Bottom indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="pt-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-px h-16 bg-white/10" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/30 -rotate-90 origin-left translate-y-8">
                    Scroll
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Interactive Art Piece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="hidden lg:flex items-center justify-center h-[500px]"
          >
            <InteractiveArtPiece />
          </motion.div>
        </div>
      </div>

      {/* Subtle ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </motion.section>
  );
}
