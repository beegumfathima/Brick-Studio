import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Vision', href: '#vision' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-8 flex items-center justify-between"
      >
        <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/80">
          THE BRICK STUDIO
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 w-12 h-12 flex flex-col items-end justify-center gap-[6px] group"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 9 : 0,
              width: isOpen ? '100%' : '70%',
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="h-[1.5px] bg-white origin-center"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
              width: '100%',
            }}
            transition={{ duration: 0.2 }}
            className="h-[1.5px] bg-white"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -9 : 0,
              width: isOpen ? '100%' : '85%',
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="h-[1.5px] bg-white origin-center"
          />
        </button>
      </motion.nav>

      {/* Full screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-40"
          >
            <div className="h-full flex flex-col items-center justify-center px-6">
              <nav className="space-y-4 md:space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ 
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-[clamp(2.5rem,8vw,6rem)] leading-[1.1] tracking-[-0.02em] hover:opacity-60 transition-opacity duration-300"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Menu footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute bottom-12 left-0 right-0 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40"
              >
                <span>hello@brickstudio.co</span>
                <span>Kerala, India</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
