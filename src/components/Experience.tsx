'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  data: Array<{
    company: string;
    role: string;
    date: string;
    location: string;
    highlights: string[];
  }>;
}

export default function Experience({ data }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium mb-4 tracking-wider uppercase">Professional Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block" />
          
          {data.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.date}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`mb-12 md:mb-8 md:flex md:items-center ${
                index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'
              }`}
            >
              <div className="glass-card p-6 md:w-[calc(50%-1rem)] hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                  >
                    <Briefcase size={20} className="text-white" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white/90">{item.company}</h3>
                    <p className="text-sm text-white/40">{item.location}</p>
                  </div>
                </div>
                
                <p className="text-cyan-300 font-medium mb-2">{item.role}</p>
                <p className="text-sm text-white/50 mb-3">{item.date}</p>
                
                {item.highlights.length > 0 && (
                  <ul className="space-y-1">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-white/60 pl-4 relative">
                        <span className="absolute left-0 text-cyan-400">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
