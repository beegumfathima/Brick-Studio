import { motion } from 'motion/react';
import { ChessButton } from '../ChessButton';
import { ChessPiece3D } from '../ChessPiece3D';
import { useState } from 'react';

interface BoardPageProps {
  onNavigate: (page: string) => void;
}

export function BoardPage({ onNavigate }: BoardPageProps) {
  const [hoveredPiece, setHoveredPiece] = useState<string | null>(null);

  const pieces = [
    { name: 'Pawn', page: 'pawn', subtitle: 'The First Move', color: '#B197FC', piece: 'pawn' as const },
    { name: 'Rook', page: 'rook', subtitle: 'Work That Stands', color: '#4444FF', piece: 'rook' as const },
    { name: 'Bishop', page: 'bishop', subtitle: 'Career & Growth', color: '#B197FC', piece: 'bishop' as const },
    { name: 'Knight', page: 'knight', subtitle: 'Creative Moves', color: '#4444FF', piece: 'knight' as const },
    { name: 'Queen', page: 'queen', subtitle: 'Passion & Power', color: '#B197FC', piece: 'queen' as const },
    { name: 'King', page: 'king', subtitle: 'The Vision', color: '#4444FF', piece: 'king' as const },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Chessboard Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full max-w-[1440px] mx-auto">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.01 }}
              className={`${(Math.floor(i / 8) + i) % 2 === 0 ? 'bg-white' : 'bg-transparent'} border border-white/5`}
            />
          ))}
        </div>
      </div>

      {/* Multiple Spotlight Effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(177, 151, 252, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(68, 68, 255, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-20 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotateY: 0 }}
            animate={{ scale: 1, rotateY: 360 }}
            transition={{ 
              scale: { duration: 0.5, delay: 0.2 },
              rotateY: { duration: 2, delay: 0.5, ease: 'easeInOut' }
            }}
            className="inline-block mb-8"
          >
            <div className="w-[300px] h-[300px]">
              <ChessPiece3D piece="king" size="large" animate={true} />
            </div>
          </motion.div>
          
          <h1 className="text-[84px] leading-none mb-6 font-heading">The Board</h1>
          <p className="text-[20px] text-[#B3B3B3] max-w-2xl mx-auto leading-relaxed font-body">
            Every game tells a story. Each piece, a chapter. Welcome to Sahal's creative journey — where strategy meets artistry.
          </p>
        </motion.div>

        {/* Pieces Grid */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {pieces.map((piece, index) => (
            <motion.div
              key={piece.page}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <motion.button
                onClick={() => onNavigate(piece.page)}
                onMouseEnter={() => setHoveredPiece(piece.page)}
                onMouseLeave={() => setHoveredPiece(null)}
                className="w-full p-8 rounded-2xl bg-[#1E1E1E] border border-[#1E1E1E] hover:border-[#B197FC] transition-all duration-300 group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(177, 151, 252, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${piece.color}20 0%, transparent 70%)`,
                  }}
                />

                {/* 3D Chess Piece */}
                <div className="relative mb-4 h-32 flex items-center justify-center">
                  <ChessPiece3D 
                    piece={piece.piece} 
                    size="small" 
                    animate={hoveredPiece === piece.page}
                  />
                </div>

                <h3 className="text-3xl mb-2 relative z-10 font-heading">{piece.name}</h3>
                <p className="text-[#B3B3B3] relative z-10 font-body">{piece.subtitle}</p>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${piece.color} 0%, transparent 100%)`,
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <ChessButton onClick={() => onNavigate('pawn')}>
            Begin the Game →
          </ChessButton>
        </motion.div>
      </div>
    </div>
  );
}
