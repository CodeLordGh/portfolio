import React from 'react';
import { Code2, Briefcase, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'general' | 'employer' | 'collaborator';

interface IntroContentProps {
  activeTab: Tab;
}

const contentVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const IntroContent: React.FC<IntroContentProps> = ({ activeTab }) => {
  const content = {
    general: {
      title: "Frontend Software Engineer",
      description: "Transitioning from insurance to tech with a unique blend of business acumen and technical skills. Specialized in frontend development with JavaScript, HTML, and CSS, bringing a fresh perspective to software engineering through my experience in process optimization and client relations.",
      icon: Code2,
    },
    employer: {
      title: "Value-Driven Developer",
      description: "Former Senior Account Executive with proven track record of increasing efficiency by 80% through process improvements. Now channeling that same drive into frontend development, combining business insights with technical skills to create impactful user experiences.",
      icon: Briefcase,
    },
    collaborator: {
      title: "Bridge Builder",
      description: "Experienced in coordinating software development projects from the business side, now bringing that perspective to frontend engineering. Strong foundation in customer service, process optimization, and team collaboration, making me an effective bridge between technical and business teams.",
      icon: Users,
    },
  };

  const { title, description, icon: Icon } = content[activeTab];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={contentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "tween", duration: 0.3 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-semibold dark:text-white text-gray-800">{title}</h2>
        </div>
        <p className="dark:text-gray-300 text-gray-600 max-w-xl">{description}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroContent;