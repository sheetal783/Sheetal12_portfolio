import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedCard from './animations/AnimatedCard';
import ParallaxLayer from './animations/ParallaxLayer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaPython, FaDatabase 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMysql, SiCplusplus 
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-primary" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-soft" /> },
      { name: 'JavaScript', icon: <FaJs className="text-accent" /> },
      { name: 'React', icon: <FaReact className="text-primary" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-soft" /> },
      { name: 'Express', icon: <SiExpress className="text-slate-800" /> },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-accent" /> },
      { name: 'MySQL', icon: <SiMysql className="text-soft" /> },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: <FaPython className="text-primary" /> },
      { name: 'C++', icon: <SiCplusplus className="text-soft" /> },
      { name: 'JavaScript', icon: <FaJs className="text-accent" /> },
    ],
  },
];

const Skills = () => {
  return (
    <AnimatedSection
      id="skills"
      className="py-24 bg-secondary text-[var(--color-text)] px-6 md:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <ParallaxLayer speed={0.1} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            My <span className="text-gold border-b-2 border-gold/30 pb-1">Skills</span>
          </h2>
        </ParallaxLayer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <AnimatedCard
              key={idx}
              delay={idx * 0.08}
              className="glass-card p-8 border border-glass-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-8 text-soft uppercase tracking-widest">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-4 group">
                    <div className="text-3xl transition-transform duration-300 group-hover:scale-125">
                      {skill.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-sm font-semibold tracking-wide text-[var(--color-text)]">{skill.name}</span>
                      </div>
                      <div className="w-full h-1.5 bg-card rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-gold to-gold-accent rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
