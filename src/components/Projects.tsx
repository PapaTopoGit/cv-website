'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket } from 'lucide-react';

interface ProjectsProps {
  data: Array<{
    title: string;
    date: string;
    emoji: string;
    highlights: string[];
  }>;
}

export default function Projects({ data }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium mb-4 tracking-wider uppercase">Entrepreneurship & Coding</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects & Startups</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {data.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 text-4xl flex items-center justify-center bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    className="text-white/30"
                  >
                    <Rocket size={20} />
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-bold text-white/90 mb-1 leading-tight">{item.title}</h3>
                <p className="text-xs text-white/40 mb-3">{item.date}</p>
                
                <ul className="space-y-1.5 flex-1">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-white/60 pl-3 relative leading-relaxed">
                      <span className="absolute left-0 text-violet-400">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
