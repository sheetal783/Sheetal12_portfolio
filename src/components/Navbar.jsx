import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = null;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        frame = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-secondary/80 backdrop-blur-lg border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gold"
        >
          Sheetal.
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 220 }}
              className="text-[var(--color-text)] hover:text-primary font-medium transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="btn-primary"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-[var(--color-text)] focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-secondary/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 text-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-4xl text-[var(--color-text)]"
            >
              <HiX />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-text)] hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
