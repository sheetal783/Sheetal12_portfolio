import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/variants';

const AnimatedCard = ({ children, className, delay = 0, ...props }) => {
  const animatedVariants = {
    hidden: fadeInUp.hidden,
    show: {
      ...fadeInUp.show,
      transition: {
        ...fadeInUp.show.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={animatedVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
