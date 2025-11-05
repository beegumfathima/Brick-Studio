import { motion } from 'motion/react';
import { ChessButton } from '../ChessButton';
import { ChessPiece3D } from '../ChessPiece3D';
import { EasterEgg } from '../EasterEgg';

interface PawnPageProps {
  onNavigate: (page: string) => void;
}

export function PawnPage({ onNavigate }: PawnPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Chessboard spotlight */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(177, 151, 252, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <EasterEgg
        message="Every pawn dreams to be a Queen."
        position="bottom-right"
      />

      <div className="relative max-w-[1440px] mx-auto px-20 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#B197FC] mb-4 tracking-widest uppercase"
          >
            ♙ THE PAWN PAGE
          </motion.p>
          <h1 className="text-[84px] leading-none mb-6 font-heading">The First Move</h1>
          <p className="text-[20px] text-[#B3B3B3] max-w-3xl mx-auto leading-relaxed font-body">
            Every story begins with courage — here's how Sahal took his first creative step.
          </p>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <ChessPiece3D piece="pawn" size="medium" />
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-heading">The Beginning</h3>
              <p className="text-[#B3B3B3] leading-relaxed font-body">
                Like every pawn on the board, Sahal started with simple moves. A curiosity for visual storytelling, a camera in hand, and an unwavering determination to create something meaningful.
              </p>
              <p className="text-[#B3B3B3] leading-relaxed font-body">
                Growing up, he was fascinated by how stories could be told through motion, light, and sound. From childhood sketches to his first video edits, every creation was a step forward.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-heading">First Steps</h3>
              <p className="text-[#B3B3B3] leading-relaxed font-body">
                His first creative project was a simple short film made with friends. It wasn't perfect, but it sparked something inside — a realization that this was what he wanted to do for life.
              </p>
              <p className="text-[#B3B3B3] leading-relaxed font-body">
                That single move forward set everything in motion. Like a pawn advancing on the board, each step brought him closer to his vision, building the foundation for everything that would follow.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 p-12 rounded-2xl bg-[#1E1E1E] border border-[#B197FC]/20">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl text-[#B197FC] mb-2 font-heading">2015</div>
              <p className="text-[#B3B3B3] font-body">First Creation</p>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl text-[#B197FC] mb-2 font-heading">100+</div>
              <p className="text-[#B3B3B3] font-body">Early Projects</p>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl text-[#B197FC] mb-2 font-heading">∞</div>
              <p className="text-[#B3B3B3] font-body">Dreams Ahead</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <ChessButton onClick={() => onNavigate('rook')}>
            Move Forward →
          </ChessButton>
        </motion.div>
      </div>
    </div>
  );
}