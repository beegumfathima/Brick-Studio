import { useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import { MouseFollower } from './components/MouseTracker';
import HeroSection from './components/sections/HeroSection';
import PhilosophySection from './components/sections/PhilosophySection';
import BrickAnimation from './components/BrickAnimation';
import VisionSection from './components/sections/VisionSection';
import ServicesSection from './components/sections/ServicesSection';
import ContactSection from './components/sections/ContactSection';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden antialiased">
      {/* Film grain effect */}
      <div className="grain" />
      
      <MouseFollower />
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="philosophy">
          <PhilosophySection />
        </section>
        
        <BrickAnimation />
        
        <section id="vision">
          <VisionSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <div>
            © 2025 The Brick Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <a href="#philosophy" className="hover:text-white/60 transition-colors">Philosophy</a>
            <a href="#vision" className="hover:text-white/60 transition-colors">Vision</a>
            <a href="#services" className="hover:text-white/60 transition-colors">Services</a>
            <a href="#contact" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
