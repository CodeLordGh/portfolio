import React from 'react';

const Portfolio = () => {
  return (
    <div className="h-full flex flex-col justify-center text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100/50 dark:bg-navy-800/50 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-gray-600 dark:text-gray-300">Description of project 1</p>
        </div>
        <div className="bg-gray-100/50 dark:bg-navy-800/50 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-gray-600 dark:text-gray-300">Description of project 2</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
