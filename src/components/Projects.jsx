import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedCard from './animations/AnimatedCard';
import ParallaxLayer from './animations/ParallaxLayer';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const projects = [
  {
    title: 'AutoServePro',
    description: 'A full-stack car service booking platform with authentication, map integration, and booking system.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/SheetalGourh/AutoServePro',
    status: 'Live',
  },
  {
    title: 'Version Control System',
    description: 'A simplified Git-like system to track file changes and manage versions using custom APIs.',
    tech: ['JavaScript', 'API', 'Node.js'],
    link: 'https://github.com/sheetal783/version-control-system',
    status: 'Beta',
  },
  {
    title: 'Airbnb Clone',
    description: 'A MERN-based project with authentication and property listing features. (In Progress)',
    tech: ['React', 'Tailwind', 'Redux', 'Mongoose'],
    link: 'https://github.com/sheetal783/airbnb-clone-web',
    status: 'Coming Soon',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <AnimatedCard
      delay={index * 0.08}
      className="glass-card flex flex-col h-full bg-card border border-glass-border shadow-lg shadow-transparent transition-all duration-300 overflow-hidden"
      whileHover={{
        scale: 1.04,
        y: -6,
        rotateX: 3,
        rotateY: -4,
        boxShadow: '0 35px 90px rgba(15, 23, 42, 0.22)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <HiCode className="text-4xl text-primary" />
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded uppercase tracking-widest">{project.status}</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted mb-8 flex-grow leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full uppercase">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-6">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-bold text-[var(--color-text)] hover:text-primary transition-colors">
            <span>View GitHub</span>
            <HiExternalLink className="text-lg" />
          </a>
        </div>
      </div>
    </AnimatedCard>
  );
};

const Projects = () => {
  return (
    <AnimatedSection
      id="projects"
      className="py-24 bg-secondary text-[var(--color-text)] px-6 md:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <ParallaxLayer speed={0.12} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Recent <span className="text-soft">Projects</span>
          </h2>
        </ParallaxLayer>
        
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
