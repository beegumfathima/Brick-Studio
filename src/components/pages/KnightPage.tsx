import { motion } from 'motion/react';
import { useState } from 'react';
import { ChessPiece3D } from '../ChessPiece3D';
import { EasterEgg } from '../EasterEgg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface KnightPageProps {
  onNavigate: (page: string) => void;
}

export function KnightPage({ onNavigate }: KnightPageProps) {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    'Creativity is seeing what others miss.',
    'The best ideas come from unexpected angles.',
    'Innovation happens when you dare to leap.',
    'Art is not linear — it moves in unique patterns.',
    'Every creative move opens new possibilities.',
  ];

  const concepts = [
    {
      title: 'Experimental Edits',
      description: 'Pushing boundaries with unconventional editing techniques and visual storytelling.',
    },
    {
      title: 'Concept Pieces',
      description: 'Original creative concepts that challenge traditional narrative structures.',
    },
    {
      title: 'Visual Poetry',
      description: 'Blending motion, music, and visuals to create emotional experiences.',
    },
    {
      title: 'Collaborative Art',
      description: 'Cross-disciplinary projects with musicians, designers, and artists.',
    },
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(68, 68, 255, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          x: [-100, 100, -100],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <EasterEgg
        message="The Queen awaits the Knight."
        position="top-left"
      />

      <div className="relative max-w-[1440px] mx-auto px-20 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#4444FF] mb-4 tracking-widest uppercase">
            ♞ THE KNIGHT PAGE
          </p>
          <h1 className="text-[84px] leading-none mb-6">Creative Moves</h1>
          <p className="text-[20px] text-[#B3B3B3] max-w-3xl mx-auto leading-relaxed">
            Creativity isn't linear — Sahal's work leaps in unexpected ways.
          </p>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <ChessPiece3D piece="knight" size="medium" />
        </motion.div>

        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative p-16 rounded-2xl bg-[#1E1E1E] border border-[#4444FF]/30">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl text-[#4444FF] leading-relaxed italic">
                "{quotes[currentQuote]}"
              </p>
            </motion.div>

            <div className="flex items-center justify-between mt-12">
              <motion.button
                onClick={prevQuote}
                className="p-4 rounded-full bg-[#0E0E0E] text-[#4444FF] hover:bg-[#4444FF] hover:text-[#0E0E0E] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <div className="flex gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentQuote ? 'bg-[#4444FF] w-8' : 'bg-[#4444FF]/30'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextQuote}
                className="p-4 rounded-full bg-[#0E0E0E] text-[#4444FF] hover:bg-[#4444FF] hover:text-[#0E0E0E] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Concept Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 gap-8"
        >
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-[#1E1E1E] border border-[#1E1E1E] hover:border-[#4444FF] transition-all group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: '0 20px 40px rgba(68, 68, 255, 0.2)',
              }}
            >
              <motion.div
                className="text-6xl mb-4 group-hover:rotate-12 transition-transform"
              >
                ♞
              </motion.div>
              <h3 className="text-2xl mb-3">{concept.title}</h3>
              <p className="text-[#B3B3B3] leading-relaxed">{concept.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}