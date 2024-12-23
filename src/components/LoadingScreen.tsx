import React from 'react';
import { motion } from 'framer-motion';
import { useLoading } from '../context/LoadingContext';

const codeSnippet = `const Developer = {
  name: "Peris Muniu",
  role: "Frontend Developer",
  background: "Insurance Professional",
  skills: ["JavaScript", "React", "HTML5", "CSS3"],
  strengths: ["Process Optimization", "Client Relations"],
  motto: "Bridging Business & Technology",
};`;

const LoadingScreen = () => {
  const { progress } = useLoading();

  const messages = [
    "Loading experience...",
    "Optimizing processes...",
    "Bridging business & tech...",
    "Creating user interfaces...",
    "Almost ready..."
  ];

  const currentMessage = messages[Math.floor((progress / 100) * messages.length)];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-navy-950"
    >
      <div className="relative">
        {/* Code Editor Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-100 dark:bg-navy-900 p-6 rounded-lg shadow-xl w-[300px] relative overflow-hidden"
        >
          {/* Line Numbers */}
          <div className="absolute left-3 top-6 text-sm text-gray-400 font-mono">
            {codeSnippet.split('\n').map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Code Content */}
          <pre className="pl-8 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-800 dark:text-gray-200"
            >
              {codeSnippet}
            </motion.div>
          </pre>

          {/* Typing Cursor */}
          <motion.div
            animate={{ 
              opacity: [1, 0],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="absolute bottom-6 right-4 w-2 h-4 bg-green-400"
          />
        </motion.div>

        {/* Loading Progress */}
        <div className="mt-8 flex flex-col items-center">
          <div className="relative w-48 h-1 bg-gray-200 dark:bg-navy-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute h-full bg-green-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.p
            key={currentMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-sm text-gray-600 dark:text-gray-400"
          >
            {currentMessage}
          </motion.p>
          <motion.p
            className="mt-2 text-xs text-gray-500 dark:text-gray-500"
          >
            {Math.round(progress)}%
          </motion.p>
        </div>

        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              y: [0, -15, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              scale: [1, 1.1, 1],
              rotate: [0, i % 2 === 0 ? 180 : -180, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "rgb(74, 222, 128)",
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
