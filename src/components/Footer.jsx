import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { sectionReveal } from '../utils/variants';

const Footer = () => {
  return (
    <motion.footer
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-12 bg-secondary border-t border-[var(--color-border)] text-muted text-center"
    >
      <div className="container mx-auto px-6">
        <p className="text-lg font-medium mb-4">
          Built with <FaHeart className="inline text-gold animate-pulse" /> by <span className="text-gold">Sheetal Gourh</span>
        </p>
        <p className="text-sm tracking-widest uppercase mb-8">© {new Date().getFullYear()} All Rights Reserved</p>
        
        <div className="flex justify-center space-x-8 text-sm">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#projects" className="hover:text-gold transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
