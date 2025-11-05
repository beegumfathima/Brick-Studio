import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <section ref={sectionRef} className="min-h-screen py-32 md:py-48 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle background image */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center opacity-[0.04]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIyNTk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
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
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">Vision</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-[-0.03em]">
            The Space
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] mb-8 text-white/90">
              A physical space where art and design breathes and meets business
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg leading-[1.8] text-white/60">
              A space where people talk art, breathe art and see beyond art.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-white/60">
              Where the tactile meets the digital. Where brick walls witness brands being born. Where creativity isn't contained in screens but fills the room.
            </p>
          </motion.div>
        </div>

        {/* Three pillars - more minimal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {[
              {
                number: '01',
                label: 'Collaborate',
                description: 'Where creative minds converge and ideas collide'
              },
              {
                number: '02',
                label: 'Create',
                description: 'Where concepts become tangible and vision takes form'
              },
              {
                number: '03',
                label: 'Construct',
                description: 'Where brands take their first breath and come alive'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-black p-10 md:p-12 group hover:bg-white/[0.01] transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="text-[10px] tracking-[0.3em] text-white/30">
                    {item.number}
                  </div>
                  <h4 className="text-2xl md:text-3xl tracking-[-0.01em]">
                    {item.label}
                  </h4>
                  <p className="text-sm leading-[1.8] text-white/50">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
