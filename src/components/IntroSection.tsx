import { useState } from 'react';
import { Code2 } from 'lucide-react';
import IntroTabs from './IntroTabs';
import IntroContent from './IntroContent';
import WorkWithMeModal from './WorkWithMeModal';

type Tab = 'general' | 'employer' | 'collaborator';

const IntroSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('general');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Name and Title */}
      <div>
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-gray-900 mb-4">
          Peris Muniu
        </h1>
        <IntroTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Dynamic Content */}
      <IntroContent activeTab={activeTab} />

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-green-500 text-white rounded-full 
                   hover:bg-green-600 transition-colors duration-300
                   flex items-center gap-2 group">
          <Code2 className="group-hover:rotate-12 transition-transform" />
          Work With Me
        </button>
        <a 
          href="/assets/Peris_Muniu_CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-green-400 dark:text-green-400 
                   text-green-500 rounded-full hover:bg-green-400/10 
                   transition-colors duration-300">
          Download CV
        </a>
      </div>

      <WorkWithMeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default IntroSection;