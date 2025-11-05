import { motion } from 'motion/react';
import { ChessPiece3D } from '../ChessPiece3D';
import { ChessButton } from '../ChessButton';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

interface KingPageProps {
  onNavigate: (page: string) => void;
}

export function KingPage({ onNavigate }: KingPageProps) {
  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:sahal@creative.com' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Royal Light Effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-[200px]"
        style={{
          background: 'radial-gradient(circle, rgba(68, 68, 255, 0.4) 0%, rgba(177, 151, 252, 0.2) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Crown Rays */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/4 left-1/2 w-1 h-40 bg-gradient-to-t from-[#B197FC] to-transparent origin-bottom"
          style={{
            transform: `rotate(${i * 30}deg) translateY(-200px)`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            height: [160, 200, 160],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      <div className="relative max-w-[1440px] mx-auto px-20 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#4444FF] mb-4 tracking-widest uppercase">
            ♔ THE KING PAGE
          </p>
          <h1 className="text-[84px] leading-none mb-6">The Vision</h1>
          <p className="text-[20px] text-[#B3B3B3] max-w-3xl mx-auto leading-relaxed">
            The game ends when the King falls — but the story lives on through legacy.
          </p>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <ChessPiece3D piece="king" size="large" />
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="p-12 rounded-2xl bg-[#1E1E1E] border border-[#4444FF]/30">
            <h2 className="text-4xl mb-8 text-center text-[#4444FF]">The Manifesto</h2>
            <div className="space-y-6 text-lg text-[#B3B3B3] leading-relaxed">
              <p>
                To create is to lead. Every frame, every edit, every decision shapes the narrative. 
                Like a king commands the board, a creator commands the story — with vision, precision, and purpose.
              </p>
              <p>
                My work is not just about what looks good — it's about what <em className="text-white italic">means</em> something. 
                It's about connecting with people, evoking emotions, and leaving a lasting impact.
              </p>
              <p>
                The journey from pawn to king is never a straight line. It's filled with challenges, 
                unexpected moves, and moments of brilliance. But that's what makes it worth telling.
              </p>
              <p className="text-xl text-white italic text-center pt-4">
                "The true king doesn't just win the game — they inspire others to play."
              </p>
            </div>
          </div>
        </motion.div>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl mb-8 text-center">What's Next?</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                title: 'Feature Film',
                description: 'Currently developing a full-length narrative film that explores themes of identity and creativity.',
              },
              {
                title: 'Global Collaborations',
                description: 'Working with international artists to create boundary-pushing content.',
              },
              {
                title: 'Workshop Series',
                description: 'Launching educational workshops to mentor the next generation of creators.',
              },
              {
                title: 'Creative Studio',
                description: 'Building a creative collective focused on innovative storytelling.',
              },
            ].map((goal, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-[#1E1E1E] border border-[#1E1E1E] hover:border-[#4444FF] transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-xl mb-3 text-[#4444FF]">{goal.title}</h3>
                <p className="text-[#B3B3B3]">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <h2 className="text-4xl mb-8">Let's Connect</h2>
          <p className="text-[#B3B3B3] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Every great collaboration starts with a conversation. Whether you have a project in mind, 
            or just want to connect, I'd love to hear from you.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-4 rounded-full bg-[#1E1E1E] text-[#B197FC] hover:bg-[#B197FC] hover:text-[#0E0E0E] transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <ChessButton onClick={() => onNavigate('endgame')} variant="primary">
            Discover the Endgame →
          </ChessButton>
        </motion.div>
      </div>
    </div>
  );
}