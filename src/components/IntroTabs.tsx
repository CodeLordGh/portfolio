import React from 'react';
import { motion } from 'framer-motion';

type Tab = 'general' | 'employer' | 'collaborator';

interface IntroTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: 'general', label: 'General' },
  { id: 'employer', label: 'For Employers' },
  { id: 'collaborator', label: 'For Collaborators' },
];

const IntroTabs: React.FC<IntroTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-6 mb-6">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`relative px-2 py-1 text-sm font-medium transition-colors
                    dark:text-gray-300 text-gray-600
                    hover:text-green-500 dark:hover:text-green-400`}
        >
          {label}
          {activeTab === id && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default IntroTabs;