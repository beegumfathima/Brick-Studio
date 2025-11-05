import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface WorkCardProps {
  title: string;
  tags: string[];
  imageUrl: string;
  onClick: () => void;
}

export function WorkCard({ title, tags, imageUrl, onClick }: WorkCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-[#1E1E1E] cursor-pointer"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
          initial={false}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 rounded-full bg-[#B197FC] flex items-center justify-center">
            <Play className="w-6 h-6 text-[#0E0E0E] fill-[#0E0E0E]" />
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-[#0E0E0E] text-[#B197FC] border border-[#B197FC]/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}