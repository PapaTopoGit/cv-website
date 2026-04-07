'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutProps {
  data: {
    name: string;
    about: string[];
    stats: { number: string; label: string }[];
  };
}

export default function About({ data }: AboutProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium mb-4 tracking-wider uppercase">The Brief Version</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="bento-grid"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 bento-span-2"
          >
            <h3 className="text-lg font-semibold mb-4 text-white/80">Background</h3>
            <p className="text-white/60 leading-relaxed mb-4">{data.about[0]}</p>
            <p className="text-white/60 leading-relaxed">{data.about[1]}</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-8"
          >
            <h3 className="text-lg font-semibold mb-4 text-white/80">Personal</h3>
            <p className="text-white/60 leading-relaxed">{data.about[2]}</p>
          </motion.div>

          {data.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-card p-8 flex flex-col items-center justify-center text-center"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4, type: 'spring' }}
                className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.span>
              <span className="text-white/50 text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
