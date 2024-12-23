import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Coffee } from 'lucide-react';
import { useDetail } from '../../context/DetailContext';
import ChatBot from '../ChatBot';

interface HighlightCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  onClick: () => void;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ icon: Icon, title, description, delay, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-gray-100/50 dark:bg-navy-800/50 p-4 rounded-lg backdrop-blur-sm cursor-pointer 
               hover:bg-gray-200/50 dark:hover:bg-navy-700/50 transition-colors relative"
    onClick={onClick}
  >
    <div className="flex items-start space-x-3">
      <div className="p-2 bg-green-400/10 rounded-lg">
        <Icon className="w-5 h-5 text-green-400" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  const { setActiveDetail } = useDetail();

  return (
    <div className="h-full flex flex-col justify-center space-y-8 py-8 relative overflow-y-auto max-h-[80vh] pr-4">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300"
        >
          Transitioning from a successful career in insurance to frontend development, I bring a unique blend of 
          business acumen and technical skills. My experience in process optimization and client relations, 
          combined with my passion for creating intuitive user interfaces, allows me to bridge the gap between 
          business needs and technical solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <HighlightCard
          icon={Code2}
          title="Technical Focus"
          description="Frontend development with JavaScript, HTML5, CSS3, and React.js, backed by practical experience in software development coordination."
          delay={0.3}
          onClick={() => setActiveDetail('expertise')}
        />
        <HighlightCard
          icon={Briefcase}
          title="Professional Background"
          description="8+ years of experience in insurance and process optimization, with proven track record of increasing efficiency by 80% through technical solutions."
          delay={0.4}
          onClick={() => setActiveDetail('experience')}
        />
        <HighlightCard
          icon={GraduationCap}
          title="Education & Growth"
          description="Software Engineering Certificate with Frontend specialization from ALX Africa, complemented by insurance and business qualifications."
          delay={0.5}
          onClick={() => setActiveDetail('education')}
        />
        <HighlightCard
          icon={Coffee}
          title="Work Philosophy"
          description="Combining business insights with technical skills to create user-centric solutions that drive real business value."
          delay={0.6}
          onClick={() => setActiveDetail('philosophy')}
        />
      </div>
      <div className=" bottom-8 right-0 flex items-center flex-col gap-3">
        <p className="text-gray-600 dark:text-gray-300 text-sm">Want to know more about me? Let's chat!</p>
        <ChatBot className="relative" />
      </div>
    </div>
  );
};

export default About;