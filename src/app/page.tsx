'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cv';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import CVSection from '@/components/CVSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="gradient-bg" />
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero data={cvData.profile} />
        <About data={cvData.profile} />
        <Education data={cvData.education} />
        <Experience data={cvData.experience} />
        <Projects data={cvData.projects} />
        <Skills data={cvData.skills} />
        <Contact data={cvData.profile} />
        <CVSection />
      </motion.div>
      
      <footer className="py-8 text-center text-sm text-white/30">
        <p>© 2026 Alexander Maus. Built with OpenClaw AI.</p>
      </footer>
    </main>
  );
}
