import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const philosophies = [
    {
      number: "01",
      title: "Design isn't decoration",
      subtitle: "It's construction with emotion",
      description: "We find beauty in dust, poetry in grids, and soul in sharp corners. Every element serves a purpose, every pixel carries intention."
    },
    {
      number: "02",
      title: "Analog meets digital",
      subtitle: "Brick meets light",
      description: "We mix memory and machine because creativity doesn't come from perfection — it comes from the friction between worlds."
    },
    {
      number: "03",
      title: "Not an agency",
      subtitle: "A creative space",
      description: "Where brands rediscover their artistic edge. Where chaos finds its frame. Where the ordinary becomes extraordinary."
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen py-32 md:py-48 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Minimal vertical line */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-[5%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"
      />

      <div className="max-w-[1400px] mx-auto">
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
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">Philosophy</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-[-0.03em]">
            Our Beliefs
          </h2>
        </motion.div>

        {/* Philosophy items */}
        <div className="space-y-24 md:space-y-32">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid md:grid-cols-12 gap-8 md:gap-12 items-start border-t border-white/5 pt-12"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <div className="text-sm tracking-[0.3em] text-white/20">
                  {item.number}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-10 space-y-6">
                <div>
                  <h3 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-serif italic text-lg md:text-xl text-white/50">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-base md:text-lg leading-[1.8] text-white/60 max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 md:mt-40 pt-16 border-t border-white/5"
        >
          <p className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.5] italic text-white/40 max-w-3xl">
            We build work that feels <span className="text-white/70">human</span>, not manufactured.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
