'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, BarChart3 } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  data: {
    name: string;
    title: string;
    tagline: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-24 left-6 md:left-12 lg:left-16"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20">
          <Image
            src="/profile.png"
            alt={data.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm {''}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {data.name.split(' ')[0]}
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/60 mb-4"
        >
          {data.title}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12"
        >
          {data.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#experience"
            className="glass-card px-8 py-3 text-sm font-medium bg-white/10 hover:bg-white/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Experience
          </motion.a>
          
          <motion.a
            href="#contact"
            className="glass-card px-8 py-3 text-sm font-medium border-violet-500/30 text-violet-300"
            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          
          <motion.a
            href="/CV_Alexander_Maus.pdf"
            download
            className="glass-card px-8 py-3 text-sm font-medium border-cyan-500/30 text-cyan-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <motion.a
            href="https://alex-dashboard-teal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/30 hover:border-violet-500/50 transition-all group"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="p-2 rounded-lg bg-violet-500/20">
              <BarChart3 size={20} className="text-violet-300" />
            </div>
            <div className="text-left">
              <p className="text-xs text-white/50">Live Trading Dashboard</p>
              <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">alex-dashboard-teal.vercel.app →</p>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block text-white/30 hover:text-white/60 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
}
