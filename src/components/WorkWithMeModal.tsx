import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface WorkWithMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkWithMeModal: React.FC<WorkWithMeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const options = [
    {
      title: 'For Employers',
      description: 'Looking for a frontend developer with strong business acumen?',
      cta: 'View My Resume',
      action: () => window.open('/resume.pdf', '_blank'),
    },
    {
      title: 'For Backend Engineers',
      description: 'Need a frontend collaborator who understands system architecture?',
      cta: 'View My Projects',
      action: () => window.location.href = '#portfolio',
    },
    {
      title: 'For General Inquiries',
      description: 'Want to discuss potential opportunities?',
      cta: 'Send an Email',
      action: () => window.location.href = 'mailto:peris.muniu@gmail.com?subject=Work%20Opportunity',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-navy-900 rounded-lg p-6 max-w-lg w-full shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold dark:text-white">Let's Work Together</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 border dark:border-navy-700 rounded-lg hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors cursor-pointer"
              onClick={() => {
                option.action();
                onClose();
              }}
            >
              <h3 className="text-lg font-semibold dark:text-white mb-2">{option.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{option.description}</p>
              <button className="text-green-500 hover:text-green-600 font-medium">
                {option.cta} →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkWithMeModal;
