import { motion } from 'motion/react';
import { ChessPiece3D } from '../ChessPiece3D';
import { TimelineNode } from '../TimelineNode';
import { EasterEgg } from '../EasterEgg';

interface BishopPageProps {
  onNavigate: (page: string) => void;
}

export function BishopPage({ onNavigate }: BishopPageProps) {
  const timeline = [
    {
      company: 'Creative Studios Inc.',
      role: 'Senior Video Editor',
      year: '2023 - Present',
      description: 'Leading video production and post-production for high-profile commercial campaigns.',
    },
    {
      company: 'Motion Lab',
      role: 'Motion Designer',
      year: '2021 - 2023',
      description: 'Specialized in motion graphics and animation for digital marketing campaigns.',
    },
    {
      company: 'Digital Arts Agency',
      role: 'Video Editor',
      year: '2019 - 2021',
      description: 'Edited and produced content for social media, web, and broadcast platforms.',
    },
    {
      company: 'Indie Productions',
      role: 'Junior Editor',
      year: '2017 - 2019',
      description: 'Started professional career working on independent films and music videos.',
    },
    {
      company: 'Self-Taught Journey',
      role: 'Student & Creator',
      year: '2015 - 2017',
      description: 'Learned the craft through online tutorials, practice projects, and experimentation.',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(177, 151, 252, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <EasterEgg
        message="The Knight sees in angles others don't."
        position="bottom-left"
      />

      <div className="relative max-w-[1440px] mx-auto px-20 py-32">
        <div className="grid grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <ChessPiece3D piece="bishop" size="medium" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#B197FC] mb-4 tracking-widest uppercase">
              ♝ THE BISHOP PAGE
            </p>
            <h1 className="text-[84px] leading-none mb-6">Career & Growth</h1>
            <p className="text-[20px] text-[#B3B3B3] leading-relaxed">
              Where Sahal sharpened his vision — the milestones that shaped his creative path.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-16"
        >
          {timeline.map((item, index) => (
            <TimelineNode
              key={index}
              company={item.company}
              role={item.role}
              year={item.year}
              description={item.description}
              index={index}
            />
          ))}
        </motion.div>

        {/* Growth Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-4 gap-6"
        >
          {[
            { number: '8+', label: 'Years Experience' },
            { number: '50+', label: 'Brands Worked With' },
            { number: '200+', label: 'Projects Delivered' },
            { number: '∞', label: 'Creative Growth' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-[#1E1E1E] border border-[#B197FC]/20 text-center"
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'rgba(177, 151, 252, 0.5)',
                boxShadow: '0 0 20px rgba(177, 151, 252, 0.2)',
              }}
            >
              <div className="text-5xl text-[#B197FC] mb-3">{stat.number}</div>
              <p className="text-[#B3B3B3]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}