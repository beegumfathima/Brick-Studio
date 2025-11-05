import { motion } from 'motion/react';
import { useState } from 'react';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
  };

  return (
    <section className="min-h-screen py-32 md:py-48 px-6 md:px-16 lg:px-24 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-white/30" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-white/50">Contact</span>
              </div>
              <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-[-0.03em]">
                Let's Build<br />
                Something That<br />
                <span className="font-serif italic">Breathes</span>
              </h2>
            </div>

            <p className="text-base md:text-lg leading-[1.8] text-white/60 max-w-lg">
              Whether you're ready to start or just want to talk about what's possible, we're here.
            </p>
            
            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-white/30 rounded-full mt-2" />
                <div>
                  <div className="text-xs text-white/30 mb-1 tracking-wider">EMAIL</div>
                  <a href="mailto:hello@brickstudio.co" className="text-base md:text-lg hover:text-white/80 transition-colors">
                    hello@brickstudio.co
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-white/30 rounded-full mt-2" />
                <div>
                  <div className="text-xs text-white/30 mb-1 tracking-wider">LOCATION</div>
                  <p className="text-base md:text-lg text-white/60">Kerala, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-8">
                <div>
                  <label htmlFor="email" className="block text-xs tracking-wider text-white/40 mb-3">
                    YOUR EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:outline-none focus:border-white/30 transition-colors text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-wider text-white/40 mb-3">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:outline-none focus:border-white/30 transition-colors text-base resize-none"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden pt-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs tracking-[0.25em] uppercase text-white/80">Send Message</span>
                  <motion.div
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-px bg-white/60"
                  />
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-32 md:mt-40 pt-16 border-t border-white/5 text-center"
        >
          <p className="font-serif text-xl md:text-2xl italic text-white/25">
            Where art and business meet
          </p>
        </motion.div>
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
