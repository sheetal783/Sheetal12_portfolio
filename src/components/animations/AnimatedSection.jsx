import React from 'react';
import { motion } from 'framer-motion';
import { sectionReveal } from '../../utils/variants';

const AnimatedSection = ({
  id,
  className,
  children,
  amount = 0.2,
  variant = sectionReveal,
  ...props
}) => {
  return (
    <motion.section
      id={id}
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
