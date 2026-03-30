import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxLayer = ({ children, speed = 0.08, className = '', style = {}, ...props }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, willChange: 'transform', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
