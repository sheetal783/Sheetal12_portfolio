export const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
