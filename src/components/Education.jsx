import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './animations/AnimatedSection';
import ParallaxLayer from './animations/ParallaxLayer';
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const education = [
  {
    title: 'B.Tech in Computer Science and Design',
    institution: 'Madhav Institute of Technology and Science, Gwalior',
    period: '2024 — Present',
    description: 'Pursuing a B.Tech in Computer Science and Design.',
  },
  {
    title: 'Class 12 (PCM)',
    institution: 'Madhya Pradesh Board of Secondary Education',
    period: '2021-2022',
    description: 'Achieved 89.4% in PCM with a balanced strength in mathematics, physics, and chemistry.',
  },
  {
    title: 'Class 10',
    institution: 'Madhya Pradesh Board of Secondary Education',
    period: '2019-2020',
    description: 'Secured 97.3% with strong academic performance across all subjects.',
  },
];

const Education = () => {
  return (
    <AnimatedSection
      id="education"
      className="py-24 bg-secondary text-[var(--color-text)] px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        <ParallaxLayer speed={0.1} className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold">Learning journey with modern structure</h2>
        </ParallaxLayer>

        <div className="relative md:pl-10">
          <div className="absolute left-5 top-10 hidden h-[calc(100%-2.5rem)] w-px bg-[var(--color-border)] md:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-card/80 p-8 pl-16 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/15"
              >
                <div className="absolute left-0 top-10 flex h-12 w-12 items-center justify-center rounded-full bg-secondary border-2 border-primary text-primary shadow-lg shadow-primary/10">
                  <HiAcademicCap className="h-6 w-6" />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-2xl font-semibold text-[var(--color-text)]">{item.title}</h3>
                    <span className="rounded-full bg-card px-4 py-2 text-sm text-muted">{item.period}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-muted text-sm">
                    <span className="inline-flex items-center gap-2">
                      <HiLocationMarker className="h-4 w-4 text-primary" />
                      {item.institution}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <HiCalendar className="h-4 w-4 text-primary" />
                      Academic timeline
                    </span>
                  </div>

                  <p className="max-w-2xl text-muted">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;
