import React from 'react';
import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  delay: number;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay,
      type: "spring",
      stiffness: 100
    }}
    className="px-3 py-1 rounded-full bg-gray-100/50 dark:bg-navy-800/50 text-sm font-medium 
               text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:scale-110 transition-transform"
  >
    {name}
  </motion.div>
);

const TechStack = () => {
  const technologies = [
    'JavaScript',
    'HTML5',
    'CSS3',
    'React.js',
    'Git & GitHub',
    'Tailwind CSS',
    'Microsoft Dynamics',
    'Process Optimization',
    'Client Relations'
  ];

  return (
    <div className="mt-8">
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-semibold mb-4 text-gray-800 dark:text-white"
      >
        Technologies
      </motion.h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <TechBadge 
            key={tech} 
            name={tech} 
            delay={index * 0.1} // Stagger the animations
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
