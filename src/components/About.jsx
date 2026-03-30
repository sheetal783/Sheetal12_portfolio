import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './animations/AnimatedSection';
import ParallaxLayer from './animations/ParallaxLayer';

const About = () => {
  return (
    <AnimatedSection
      id="about"
      className="py-24 bg-secondary text-[var(--color-text)] px-6 md:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-5xl mx-auto"
        >
          <ParallaxLayer speed={0.12}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              About <span className="text-gold">Me</span>
            </h2>
          </ParallaxLayer>

          <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/40 transition-all duration-700 float-slow" />
            
            <div className="relative z-10 leading-relaxed text-lg md:text-xl text-muted">
              <p className="mb-6">
                I'm an engineering student with <span className="text-gold font-semibold">1+ year experience</span> in building responsive and user-friendly web applications. I specialize in the <span className="text-gold font-semibold">MERN stack</span> and prefer learning by building rather than just studying theory.
              </p>
              <p className="mb-6">
                I enjoy understanding how things work internally and improving through hands-on experience. Whether it's architecting a complex backend or fine-tuning a pixel-perfect UI, I'm always eager to dive deep into the tech.
              </p>
              <p>
                Outside of coding, I enjoy <span className="text-soft font-semibold italic">singing</span> and <span className="text-accent font-semibold italic">graphic designing</span>, which helps me stay creative and brings a unique perspective to my developmental work.
              </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
             {[
               { label: 'Experience', value: '1+ Year' },
               { label: 'Projects', value: '10+' },
               { label: 'Cups of Coffee', value: 'Too many' },
             ].map((stat, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.88 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.12, duration: 0.75 }}
                 className="rounded-[28px] border border-[var(--color-border)] bg-card/80 p-6"
               >
                 <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                 <div className="text-muted text-sm uppercase tracking-widest">{stat.label}</div>
               </motion.div>
             ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;
