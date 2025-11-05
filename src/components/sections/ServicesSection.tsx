import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

const services = [
  {
    title: 'Brand Building',
    description: 'We don\'t create logos. We construct identities that breathe, evolve, and resonate. Every brand gets a foundation strong enough to carry its story.',
    details: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Positioning']
  },
  {
    title: 'Design',
    description: 'Design as architecture. Design as emotion. We craft experiences that exist in the intersection of precision and soul.',
    details: ['UI/UX Design', 'Graphic Design', 'Print Design', 'Web Design']
  },
  {
    title: 'Video Editing',
    description: 'Motion that moves people. Cuts that tell stories. We edit with rhythm, intention, and an eye for the frame that matters.',
    details: ['Commercial Videos', 'Brand Films', 'Social Content', 'Motion Graphics']
  },
  {
    title: 'Post-Production',
    description: 'Where raw becomes refined. Where footage becomes film. The final layer that brings everything together.',
    details: ['Color Grading', 'VFX', 'Sound Design', 'Final Output']
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="min-h-screen py-32 md:py-48 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Minimal grid */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
      >
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 md:mb-40"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">Services</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-[-0.03em] mb-8">
            What We Do
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl">
            A creative space for brand building, designing, video editing and more.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-px bg-white/5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-black p-10 md:p-14 lg:p-16 relative overflow-hidden group cursor-pointer"
            >
              {/* Hover effect */}
              <motion.div
                initial={false}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white/[0.01]"
              />

              <div className="relative z-10 space-y-6">
                {/* Number */}
                <div className="text-[10px] tracking-[0.3em] text-white/30">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base leading-[1.8] text-white/50 max-w-lg">
                  {service.description}
                </p>
                
                {/* Details */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {service.details.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-xs text-white/40"
                    >
                      <div className="w-1 h-1 bg-white/30 rounded-full" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-12 border-t border-white/5 text-center"
        >
          <p className="font-serif text-lg md:text-xl italic text-white/30">
            And whatever else your brand needs to come alive
          </p>
        </motion.div>
      </div>
    </section>
  );
}
