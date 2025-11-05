import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChessPiece3D } from './ChessPiece3D';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: 'board', icon: '♟', piece: 'pawn' as const },
    { name: 'Pawn', path: 'pawn', icon: '♙', piece: 'pawn' as const },
    { name: 'Rook', path: 'rook', icon: '♜', piece: 'rook' as const },
    { name: 'Bishop', path: 'bishop', icon: '♝', piece: 'bishop' as const },
    { name: 'Knight', path: 'knight', icon: '♞', piece: 'knight' as const },
    { name: 'Queen', path: 'queen', icon: '♛', piece: 'queen' as const },
    { name: 'King', path: 'king', icon: '♔', piece: 'king' as const },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0E0E0E]/90 backdrop-blur-xl border-b border-[#1E1E1E]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-20 py-6">
        <nav className="flex items-center justify-between">
          <motion.button
            onClick={() => onNavigate('board')}
            className="flex items-center gap-3 group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <span 
                className="text-3xl transition-all duration-300"
                style={{
                  textShadow: '0 0 20px rgba(177, 151, 252, 0.8)',
                  color: '#B197FC',
                }}
              >
                ♔
              </span>
            </div>
            <span className="text-xl tracking-tight font-heading">Sahal</span>
          </motion.button>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative group transition-colors duration-300 ${
                  currentPage === item.path ? 'text-[#B197FC]' : 'text-[#B3B3B3] hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <motion.span 
                    className="text-xl inline-block"
                    style={{
                      textShadow: currentPage === item.path || hoveredItem === item.path
                        ? '0 0 15px rgba(177, 151, 252, 0.8)'
                        : 'none',
                    }}
                    animate={hoveredItem === item.path ? {
                      y: [0, -5, 0],
                      rotateZ: [0, 5, -5, 0],
                    } : {}}
                    transition={{
                      duration: 0.5,
                      repeat: hoveredItem === item.path ? Infinity : 0,
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="tracking-tight font-heading">{item.name}</span>
                </div>
                
                {currentPage === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#B197FC]"
                    style={{ boxShadow: '0 0 8px #B197FC' }}
                  />
                )}

                {/* 3D Hover Preview */}
                {hoveredItem === item.path && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 pointer-events-none"
                  >
                    <div className="w-32 h-32">
                      <ChessPiece3D 
                        piece={item.piece} 
                        size="small" 
                        animate={true}
                      />
                    </div>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
