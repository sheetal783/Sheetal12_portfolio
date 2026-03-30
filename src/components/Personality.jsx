import React from 'react';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedCard from './animations/AnimatedCard';
import ParallaxLayer from './animations/ParallaxLayer';
import { HiMusicNote, HiColorSwatch, HiCube } from 'react-icons/hi';
import { FaChessKnight } from 'react-icons/fa';

const hobbies = [
  {
    title: 'Singing',
    icon: <HiMusicNote className="text-accent" />,
    description: 'Expressing emotions through melodies and finding rhythm in every beat.',
    bg: 'bg-accent/10',
  },
  {
    title: 'Graphic Designing',
    icon: <HiColorSwatch className="text-soft" />,
    description: 'Visions come to life through digital art and visual storytelling.',
    bg: 'bg-secondary/10',
  },
  {
    title: 'Chess',
    icon: <FaChessKnight className="text-primary" />,
    description: 'Strategizing every move and mastering the art of patience and focus.',
    bg: 'bg-primary/10',
  },
];

const Personality = () => {
  return (
    <AnimatedSection
      className="py-24 bg-secondary text-[var(--color-text)] px-6 md:px-12"
    >
      <div className="container mx-auto">
        <ParallaxLayer speed={0.1} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Beyond <span className="text-soft">Coding</span>
          </h2>
        </ParallaxLayer>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, i) => (
            <AnimatedCard
              key={i}
              delay={i * 0.08}
              whileHover={{ y: -10 }}
              className={`glass-card p-10 flex flex-col items-center text-center transition-all duration-300 group ${hobby.bg}`}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {hobby.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{hobby.title}</h3>
              <p className="text-muted group-hover:text-[var(--color-text)] transition-colors">{hobby.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Personality;
