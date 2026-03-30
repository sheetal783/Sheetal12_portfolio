import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { HiArrowRight } from 'react-icons/hi';
import ParallaxLayer from './animations/ParallaxLayer';
import heroImage from '../assets/hero.png';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ParticleField = () => {
  const particles = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: Math.random() * 0.5 + 0.1,
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: ['0%', '10%', '-10%', '0%'],
            x: ['0%', '5%', '-5%', '0%'],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute w-1 h-1 bg-gold/40 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-secondary text-[var(--color-text)] px-6 md:px-12"
    >
      <ParticleField />
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxLayer speed={0.03} className="absolute left-[-10%] top-10 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
        <ParallaxLayer speed={0.04} className="absolute right-[-5%] top-1/4 h-[500px] w-[500px] rounded-full bg-gold-accent/10 blur-[140px]" />
        <ParallaxLayer speed={0.08} className="absolute right-12 top-24 hidden h-28 w-28 rounded-full border border-gold/20 bg-gold/5 shadow-[0_24px_80px_rgba(255,215,0,0.1)] md:block"
          style={{ translateY: '0px' }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <motion.p
              initial="hidden"
              animate="show"
              variants={textVariants}
              className="text-gold-accent font-mono text-lg tracking-[0.18em] uppercase font-semibold"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={textVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              <span className="text-gold">Sheetal Gourh</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
              className="text-xl md:text-2xl text-soft font-medium leading-relaxed max-w-3xl h-20"
            >
              <Typewriter
                words={['I build full-stack web applications.', 'I turn ideas into real projects.', 'Software Engineering Student.']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
                <HiArrowRight className="ml-3 text-xl" />
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 8, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
            className="relative mx-auto w-full max-w-md perspective-[1200px]"
          >
            <motion.div
              animate={{ y: [0, -18, 0], rotateY: [5, -5, 5], rotateX: [3, -3, 3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-full bg-gradient-to-br from-gold/50 via-gold/10 to-gold/50 p-1.5 shadow-[0_30px_90px_rgba(255,215,0,0.15)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="overflow-hidden rounded-full bg-secondary p-1.5 shadow-[0_20px_80px_rgba(0,0,0,0.3)]"
                style={{ transform: 'translateZ(0px)' }}
              >
                <img
                  src={heroImage}
                  alt="Profile"
                  className="h-[360px] w-[360px] rounded-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-8 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-gold/30 blur-3xl opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
