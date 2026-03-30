import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './animations/AnimatedSection';
import { HiAcademicCap, HiLightningBolt, HiCode, HiExternalLink } from 'react-icons/hi';

const certificates = [
  {
    title: 'Hacksagon 2026 (Ideation Phase)',
    issuer: 'IEEE ABV-IIITM Student Branch',
    institution: 'MITS Gwalior',
    icon: <HiAcademicCap />,
    highlight: 'Ideation Runner-up'
  },
  {
    title: 'Build Your Own GPT Workshop',
    issuer: 'IETE Students Forum + Coding Thinker',
    institution: 'Sept 2024',
    icon: <HiLightningBolt />,
    highlight: 'GenAI Workshop'
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Apna College',
    institution: 'Professional Course',
    icon: <HiCode />,
    highlight: 'MERN Stack'
  },
];

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-8 group cursor-pointer border-gold/10 hover:border-gold/30"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold text-3xl transition-transform group-hover:scale-110 group-hover:rotate-6">
            {cert.icon}
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-accent bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
            {cert.highlight}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gold group-hover:brightness-125 transition-all">
          {cert.title}
        </h3>

        <div className="space-y-2 mt-auto">
          <div className="flex items-center text-sm text-muted font-medium uppercase tracking-wide">
             <span className="w-6 h-[1px] bg-gold/30 mr-3"></span>
             {cert.issuer}
          </div>
          <div className="text-xs text-soft/60 italic ml-9 italic">
             {cert.institution}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/5 flex items-center text-gold/40 group-hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest">
           View Credential <HiExternalLink className="ml-2" />
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <AnimatedSection
      id="certificates"
      className="py-24 bg-secondary relative overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-accent font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold"
          >
            My <span className="text-gold">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Certificates;
