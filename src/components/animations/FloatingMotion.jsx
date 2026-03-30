import React from 'react';
import { motion } from 'framer-motion';

const FloatingMotion = ({ children, className = '', style = {}, y = 12, rotate = 3, duration = 8, ...props }) => {
  return (
    <motion.div
      animate={{ y: [0, -y, 0], rotate: [0, rotate, 0, -rotate, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FloatingMotion;
