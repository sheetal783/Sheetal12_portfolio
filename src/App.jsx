import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Personality from './components/Personality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-[var(--color-text)] selection:bg-gold/20 selection:text-white cursor-none selection:cursor-auto">
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-0"
      >
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Projects />
        <Skills />
        <Personality />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
