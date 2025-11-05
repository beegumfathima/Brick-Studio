import { motion } from 'motion/react';
import { ChessPiece3D } from '../ChessPiece3D';
import { EasterEgg } from '../EasterEgg';
import { Play } from 'lucide-react';

interface QueenPageProps {
  onNavigate: (page: string) => void;
}

export function QueenPage({ onNavigate }: QueenPageProps) {
  const passionProjects = [
    {
      title: 'Personal Short Film',
      description: 'A deeply personal narrative exploring themes of growth and transformation.',
    },
    {
      title: 'Experimental Series',
      description: 'Pushing creative boundaries with unconventional visual storytelling.',
    },
    {
      title: 'Art Collaboration',
      description: 'Cross-medium collaboration with artists, musicians, and performers.',
    },
    {
      title: 'Documentary Project',
      description: 'Documenting untold stories from creative communities.',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient Light */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[200px]"
        style={{
          background: 'radial-gradient(circle, rgba(177, 151, 252, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Particle Effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#B197FC] rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <EasterEgg
        message="Only one remains: The King."
        position="bottom-right"
      />

      <div className="relative max-w-[1440px] mx-auto px-20 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#B197FC] mb-4 tracking-widest uppercase">
            ♛ THE QUEEN PAGE
          </p>
          <h1 className="text-[84px] leading-none mb-6">Passion & Power</h1>
          <p className="text-[20px] text-[#B3B3B3] max-w-3xl mx-auto leading-relaxed">
            Where Sahal rules the board — his boldest, fastest, most passionate creations.
          </p>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <ChessPiece3D piece="queen" size="large" />
        </motion.div>

        {/* Showreel Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl mb-8 text-center">Showreel 2025</h2>
          <div className="aspect-video rounded-2xl overflow-hidden bg-[#1E1E1E] border-2 border-[#B197FC] relative group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
              <motion.div
                className="w-24 h-24 rounded-full bg-[#B197FC] flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="w-12 h-12 text-[#0E0E0E] fill-[#0E0E0E] ml-2" />
              </motion.div>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-[#B197FC]/20 to-[#4444FF]/20" />
          </div>
        </motion.div>

        {/* Passion Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-4xl mb-8 text-center">Passion Projects</h2>
          <div className="grid grid-cols-2 gap-8">
            {passionProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group p-8 rounded-2xl bg-[#1E1E1E] border border-[#B197FC]/20 hover:border-[#B197FC] transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(177, 151, 252, 0.3)',
                }}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className="text-5xl text-[#B197FC] group-hover:scale-110 transition-transform"
                  >
                    ♛
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-3">{project.title}</h3>
                    <p className="text-[#B3B3B3] leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8"
        >
          {[
            { value: '10M+', label: 'Total Views' },
            { value: '500K+', label: 'Engagements' },
            { value: '∞', label: 'Creative Energy' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-[#1E1E1E] border border-[#B197FC]/30 text-center"
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(177, 151, 252, 0.8)',
                boxShadow: '0 0 30px rgba(177, 151, 252, 0.3)',
              }}
            >
              <div className="text-5xl text-[#B197FC] mb-3">{stat.value}</div>
              <p className="text-[#B3B3B3]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}