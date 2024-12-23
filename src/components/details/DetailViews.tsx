import React from 'react';
import { motion } from 'framer-motion';
import { X, Code2 } from 'lucide-react';
import { useDetail } from '../../context/DetailContext';

const DetailWrapper: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  const { setActiveDetail } = useDetail();

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <button
          onClick={() => setActiveDetail(null)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-navy-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      {children}
      <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full 
                     hover:bg-green-600 transition-colors duration-300
                     flex items-center gap-2 group">
        <Code2 className="group-hover:rotate-12 transition-transform" />
        Work With Me
      </button>
    </div>
  );
};

export const ExpertiseDetail = () => (
  <DetailWrapper title="Technical Expertise">
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Frontend Development</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          <li>JavaScript, HTML5, and CSS3 for modern web development</li>
          <li>React.js with focus on responsive and interactive UIs</li>
          <li>Version control with Git & GitHub</li>
          <li>UI styling with Tailwind CSS</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Business Systems</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          <li>Microsoft Dynamics Navision implementation experience</li>
          <li>Insurance agency software development coordination</li>
          <li>Process automation and optimization</li>
          <li>System integration and documentation</li>
        </ul>
      </div>
    </div>
  </DetailWrapper>
);

export const ExperienceDetail = () => (
  <DetailWrapper title="Professional Experience">
    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
      <div className="border-l-2 border-green-400 pl-4">
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Senior Account Executive</h4>
        <p className="text-sm text-green-400 mb-2">July 2020 - June 2024</p>
        <p className="text-gray-600 dark:text-gray-300">
          • Enhanced overall efficiency by 80% through process improvements<br/>
          • Coordinated insurance agency software development<br/>
          • Managed client relations and premium collections<br/>
          • Improved operational efficiency by 30%
        </p>
      </div>
      
      <div className="border-l-2 border-green-400 pl-4">
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Underwriter</h4>
        <p className="text-sm text-green-400 mb-2">July 2019 - June 2020</p>
        <p className="text-gray-600 dark:text-gray-300">
          • Implemented centralized online filing system<br/>
          • Reduced processing errors by 30%<br/>
          • Achieved 98% compliance rate in Service Level Agreements
        </p>
      </div>

      <div className="border-l-2 border-green-400 pl-4">
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Assistant Principal Officer & Insurance Executive</h4>
        <p className="text-sm text-green-400 mb-2">April 2015 - August 2018</p>
        <p className="text-gray-600 dark:text-gray-300">
          • Led Microsoft Dynamics Navision implementation<br/>
          • Increased revenue generation by 60%<br/>
          • Managed motor and medical insurance schemes
        </p>
      </div>
    </div>
  </DetailWrapper>
);

export const EducationDetail = () => (
  <DetailWrapper title="Education & Certifications">
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Technical Education</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          <li>Software Engineering Certificate – Frontend specialization (ALX Africa, 2024)</li>
          <li>Virtual Assistant Course (ALX Africa, 2022)</li>
          <li>International Computer Driving License (I.C.D.L)</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Professional Qualifications</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          <li>Diploma in Insurance (The Chartered Insurance Institute, 2019)</li>
          <li>Certificate of Proficiency- Insurance (The College of Insurance, 2018)</li>
          <li>Certified Public Accountant Finalist (CPA Finalist, 2013)</li>
          <li>Bachelor of Commerce and Business Administration (JKUAT, 2012)</li>
        </ul>
      </div>
    </div>
  </DetailWrapper>
);

export const PhilosophyDetail = () => (
  <DetailWrapper title="Work Philosophy">
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Business-Driven Development</h4>
        <p className="text-gray-600 dark:text-gray-300">
          I believe in creating technical solutions that directly address business needs. My background in insurance
          and process optimization allows me to understand both the technical and business aspects of projects,
          ensuring that solutions deliver real value.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Continuous Improvement</h4>
        <p className="text-gray-600 dark:text-gray-300">
          My career transition from insurance to frontend development demonstrates my commitment to growth and
          adaptability. I bring this same mindset to every project, constantly looking for ways to improve processes
          and deliver better results.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Client-Centric Approach</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Years of experience in client relations have taught me the importance of understanding and meeting user
          needs. I apply this knowledge to create intuitive, user-friendly interfaces that solve real problems.
        </p>
      </div>
    </div>
  </DetailWrapper>
);