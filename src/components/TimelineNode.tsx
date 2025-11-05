import { motion } from 'motion/react';

interface TimelineNodeProps {
  company: string;
  role: string;
  year: string;
  description: string;
  index: number;
}

export function TimelineNode({ company, role, year, description, index }: TimelineNodeProps) {
  return (
    <motion.div
      className="relative flex gap-8 group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex-1 text-right">
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl mb-2">{company}</h3>
          <p className="text-[#B3B3B3]">{year}</p>
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-[#B197FC] relative z-10 group-hover:scale-150 transition-transform duration-300"
          style={{
            boxShadow: '0 0 20px rgba(177, 151, 252, 0.6)',
          }}
          whileHover={{
            boxShadow: '0 0 30px rgba(177, 151, 252, 0.9)',
          }}
        />
        <div className="absolute top-4 bottom-0 w-0.5 bg-[#B197FC]/30" />
      </div>

      <div className="flex-1">
        <motion.div
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
        >
          <h4 className="text-xl mb-2 text-[#B197FC]">{role}</h4>
          <p className="text-[#B3B3B3] leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}