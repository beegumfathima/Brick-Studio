import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center py-32 px-6">
      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-body text-[#999999] tracking-widest mb-4 block">
                ABOUT ME
              </span>
              <h2 className="text-5xl md:text-6xl font-heading mb-6">
                Crafting Digital
                <br />
                Excellence
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-[#999999] font-body"
            >
              <p>
                I'm Sahal Muhammed, a motion designer and video editor specializing in creating
                visually stunning content that captivates audiences and tells compelling stories.
              </p>
              <p>
                With expertise in Adobe After Effects, Premiere Pro, and DaVinci Resolve, I've
                delivered high-quality motion graphics and video content for brands, creators,
                and agencies worldwide.
              </p>
              <p>
                From dynamic logo animations to cinematic video edits, I bring your vision to life
                with creativity, precision, and attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-black font-heading hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Background Pattern */}
              <motion.div
                className="absolute -inset-4 border border-white/20"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Image Container */}
              <div className="relative h-full bg-white/5 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMDk5Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Video Editing Workspace"
                  className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/80 backdrop-blur-sm border border-white/20 p-4"
                >
                  <div className="text-3xl font-heading mb-1">100%</div>
                  <div className="text-xs text-[#999999] font-body">Client Satisfaction</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/80 backdrop-blur-sm border border-white/20 p-4"
                >
                  <div className="text-3xl font-heading mb-1">24/7</div>
                  <div className="text-xs text-[#999999] font-body">Support Available</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            'After Effects',
            'Premiere Pro',
            'DaVinci Resolve',
            'Final Cut Pro',
            'Cinema 4D',
            'Blender',
            'Photoshop',
            'Illustrator',
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#FFFFFF' }}
              className="border border-white/10 p-6 text-center hover:bg-white/5 transition-all cursor-pointer"
            >
              <span className="font-body">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
