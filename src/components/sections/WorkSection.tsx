import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const projects = [
  {
    title: 'Tech Product Launch',
    category: 'Commercial Video',
    description: 'High-energy product reveal video with dynamic motion graphics and sleek transitions.',
    image: 'https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYXxlbnwxfHx8fDE3NjAxNjc4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['After Effects', 'Premiere Pro', 'Color Grading', 'Sound Design'],
  },
  {
    title: 'Brand Motion Graphics',
    category: 'Motion Design',
    description: 'Animated logo reveal and brand identity package with modern kinetic typography.',
    image: 'https://images.unsplash.com/photo-1758653130020-a907ea4123f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRlc2lnbnxlbnwxfHx8fDE3NjAxNzU5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Motion Graphics', '2D Animation', 'Typography', 'Cinema 4D'],
  },
  {
    title: 'YouTube Series Edit',
    category: 'Video Editing',
    description: 'Complete editing suite for popular YouTube channel with 2M+ views per video.',
    image: 'https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMDk5Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Premiere Pro', 'Thumbnails', 'Pacing', 'Engagement'],
  },
  {
    title: 'Music Video VFX',
    category: 'Visual Effects',
    description: 'Creative visual effects and compositing for indie music video production.',
    image: 'https://images.unsplash.com/photo-1742942965475-25d3b7bf2bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzYwMDk1ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['VFX', 'Compositing', 'Green Screen', 'Particle FX'],
  },
];

export function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen py-32 px-6 bg-[#0A0A0A]">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm font-body text-[#999999] tracking-widest mb-4 block">
            SELECTED PROJECTS
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-heading">
              Featured
              <br />
              Work
            </h2>
            <p className="text-xl text-[#999999] font-body max-w-xl">
              A collection of motion design and video editing projects that showcase cinematic
              storytelling and visual creativity.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative aspect-[4/3] overflow-hidden ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-heading"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </motion.div>

                {/* Border Animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-white"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <motion.span
                  className="inline-block text-sm font-body text-[#999999] mb-4"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.category}
                </motion.span>

                <motion.h3
                  className="text-4xl md:text-5xl font-heading mb-6"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-lg text-[#999999] font-body mb-8"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-3 mb-8"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 border border-white/20 text-sm font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.button
                  className="flex items-center gap-2 text-white font-heading group"
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <motion.button
            className="px-8 py-4 bg-white text-black font-heading text-lg hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
