'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  data: {
    email: string;
    phone: string;
    location: string;
  };
}

export default function Contact({ data }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium mb-4 tracking-wider uppercase">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-10"
        >
          <p className="text-white/60 text-center text-lg mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, tech projects, or finance collaborations.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href={`mailto:${data.email}`}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card p-6 flex flex-col items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/30 transition-colors">
                <Mail size={24} className="text-violet-400" />
              </div>
              <span className="text-white/70 text-sm">Email</span>
              <span className="text-white/90 font-medium">{data.email}</span>
            </motion.a>

            <motion.a
              href={`tel:${data.phone}`}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card p-6 flex flex-col items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                <Phone size={24} className="text-cyan-400" />
              </div>
              <span className="text-white/70 text-sm">Phone</span>
              <span className="text-white/90 font-medium">{data.phone}</span>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card p-6 flex flex-col items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center group-hover:bg-fuchsia-500/30 transition-colors"
              >
                <MapPin size={24} className="text-fuchsia-400" />
              </div>
              <span className="text-white/70 text-sm">Location</span>
              <span className="text-white/90 font-medium">{data.location}</span>
            </motion.div>
          </div>

          <motion.a
            href={`mailto:${data.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 mx-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl font-medium text-white hover:opacity-90 transition-opacity max-w-fit"
          >
            <Send size={20} />
            Send Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
