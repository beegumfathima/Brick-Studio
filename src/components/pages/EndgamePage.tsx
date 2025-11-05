import { motion } from 'motion/react';
import { ChessButton } from '../ChessButton';
import { Trophy } from 'lucide-react';

interface EndgamePageProps {
  onNavigate: (page: string) => void;
}

export function EndgamePage({ onNavigate }: EndgamePageProps) {
  const leaderboard = [
    { rank: 1, name: 'You', completionDate: new Date().toLocaleDateString(), badge: '♔' },
    { rank: 2, name: 'Creative Explorer', completionDate: '10/06/2025', badge: '♛' },
    { rank: 3, name: 'Story Seeker', completionDate: '10/05/2025', badge: '♜' },
    { rank: 4, name: 'Vision Finder', completionDate: '10/04/2025', badge: '♝' },
    { rank: 5, name: 'Journey Walker', completionDate: '10/03/2025', badge: '♞' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Victory Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[200px]"
        style={{
          background: 'radial-gradient(circle, rgba(177, 151, 252, 0.4) 0%, rgba(68, 68, 255, 0.2) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Confetti Effect */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 2 === 0 ? '#B197FC' : '#4444FF',
            top: -20,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, window.innerHeight + 50],
            rotate: [0, 360],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative max-w-[1440px] mx-auto px-20 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-center mb-20"
        >
          <motion.div
            className="text-[15rem] leading-none mb-8"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            ♟
          </motion.div>
          <h1 className="text-[84px] leading-none mb-6">The Endgame</h1>
          <p className="text-[20px] text-[#B3B3B3] max-w-2xl mx-auto leading-relaxed">
            Only those who made every move can see this. You've witnessed the full journey.
          </p>
        </motion.div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="p-12 rounded-2xl bg-[#1E1E1E] border-2 border-[#B197FC] text-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block"
            >
              <Trophy className="w-24 h-24 text-[#B197FC] mx-auto mb-6" />
            </motion.div>
            <h2 className="text-4xl mb-4">Achievement Unlocked!</h2>
            <p className="text-xl text-[#B197FC] mb-2">Grandmaster Explorer</p>
            <p className="text-[#B3B3B3]">
              You've completed Sahal's entire creative journey from Pawn to King. 
              Your dedication to the story is truly remarkable.
            </p>
          </div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-4xl mb-8 text-center">Hall of Champions</h2>
          <div className="space-y-4">
            {leaderboard.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className={`flex items-center gap-6 p-6 rounded-2xl ${
                  entry.rank === 1 
                    ? 'bg-gradient-to-r from-[#B197FC]/20 to-[#4444FF]/20 border-2 border-[#B197FC]' 
                    : 'bg-[#1E1E1E] border border-[#1E1E1E]'
                }`}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0E0E0E] text-2xl">
                  {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{entry.badge}</span>
                    <h3 className="text-2xl">{entry.name}</h3>
                    {entry.rank === 1 && (
                      <span className="px-3 py-1 rounded-full bg-[#B197FC] text-[#0E0E0E] text-sm">
                        That's you!
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-[#B3B3B3]">{entry.completionDate}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <ChessButton onClick={() => onNavigate('board')}>
            ♔ Back to the Board
          </ChessButton>
        </motion.div>
      </div>
    </div>
  );
}