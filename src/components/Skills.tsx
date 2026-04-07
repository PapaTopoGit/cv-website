'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cpu, Globe, Heart } from 'lucide-react';

interface SkillsProps {
  data: {
    tech: string[];
    software: string[];
    languages: Array<{ name: string; level: number }>;
    interests: string[];
  };
}

export default function Skills({ data }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium mb-4 tracking-wider uppercase">What I Bring to the Table</p>
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Interests</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="bento-grid"
        >
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code size={24} className="text-cyan-400" />
              <h3 className="text-lg font-semibold text-white/80">Tech & Data</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.tech.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                  className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-white/70"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={24} className="text-fuchsia-400" />
              <h3 className="text-lg font-semibold text-white/80">Software & AI</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.software.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(232, 121, 249, 0.2)' }}
                  className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full text-white/70"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 bento-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Globe size={24} className="text-violet-400" />
              <h3 className="text-lg font-semibold text-white/80">Languages</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.languages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">{lang.name}</span>
                    <span className="text-white/40">{lang.level}/5</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${(lang.level / 5) * 100}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 bento-span-full">
            <div className="flex items-center gap-3 mb-6">
              <Heart size={24} className="text-rose-400" />
              <h3 className="text-lg font-semibold text-white/80">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {data.interests.map((interest) => (
                <motion.div
                  key={interest}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-white/10 rounded-xl text-white/80"
                >
                  {interest}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
