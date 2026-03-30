import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-accent to-gold origin-left z-[10000] shadow-[0_2px_10px_rgba(255,215,0,0.3)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
