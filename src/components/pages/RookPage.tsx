import { motion } from 'motion/react';
import { useState } from 'react';
import { ChessPiece3D } from '../ChessPiece3D';
import { WorkCard } from '../WorkCard';
import { EasterEgg } from '../EasterEgg';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { X } from 'lucide-react';

interface RookPageProps {
  onNavigate: (page: string) => void;
}

export function RookPage({ onNavigate }: RookPageProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Brand Campaign 2024',
      tags: ['Commercial', 'Brand Film', 'Direction'],
      imageUrl: 'https://images.unsplash.com/photo-1591033013778-ef2a8eb08bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU5OTA5NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A cinematic brand campaign that tells a story of innovation and creativity through stunning visuals.',
    },
    {
      title: 'Music Video - Eclipse',
      tags: ['Music Video', 'Editing', 'VFX'],
      imageUrl: 'https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk5MjU5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'An experimental music video featuring dynamic transitions and creative visual effects.',
    },
    {
      title: 'Documentary Series',
      tags: ['Documentary', 'Storytelling', 'Cinematography'],
      imageUrl: 'https://images.unsplash.com/photo-1753442360604-0003d4ecacca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZWRpdGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NTk5NTAwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A multi-part documentary exploring creative journeys of artists and innovators.',
    },
    {
      title: 'Motion Graphics Reel',
      tags: ['Motion Design', 'Animation', '2D/3D'],
      imageUrl: 'https://images.unsplash.com/photo-1732032506091-6fd57cc3113e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFic3RyYWN0fGVufDF8fHx8MTc1OTkzMjA0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A showcase of dynamic motion graphics and animation work for various clients.',
    },
    {
      title: 'Fashion Editorial',
      tags: ['Fashion', 'Photography', 'Color Grading'],
      imageUrl: 'https://images.unsplash.com/photo-1611087966028-bc70bc75d5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvZ3JhcGh5JTIwYXJ0fGVufDF8fHx8MTc1OTk1MDA0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'High-end fashion editorial with meticulous attention to lighting and composition.',
    },
    {
      title: 'Digital Art Collection',
      tags: ['Digital Art', 'Concept', 'Design'],
      imageUrl: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU5OTMyMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A curated collection of digital artworks exploring abstract concepts and visual narratives.',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(68, 68, 255, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <EasterEgg
        message="The Queen always protects her Rook."
        position="bottom-right"
        onReveal={() => console.log('Easter egg revealed!')}
      />

      <div className="relative max-w-[1440px] mx-auto px-20 py-32">
        <div className="grid grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#4444FF] mb-4 tracking-widest uppercase">
              ♜ THE ROOK PAGE
            </p>
            <h1 className="text-[84px] leading-none mb-6">Work That Stands Tall</h1>
            <p className="text-[20px] text-[#B3B3B3] leading-relaxed">
              Where strategy meets creation — Sahal's best works and collaborations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <ChessPiece3D piece="rook" size="medium" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <WorkCard
                title={project.title}
                tags={project.tags}
                imageUrl={project.imageUrl}
                onClick={() => setSelectedProject(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-[#1E1E1E] border-[#B197FC]">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{projects[selectedProject].title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src={projects[selectedProject].imageUrl}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#B3B3B3] leading-relaxed text-lg">
                  {projects[selectedProject].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-[#0E0E0E] text-[#B197FC] border border-[#B197FC]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}