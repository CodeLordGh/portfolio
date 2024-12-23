import React from 'react';

const Service = () => {
  return (
    <div className="h-full flex flex-col justify-center text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100/50 dark:bg-navy-800/50 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold">Web Development</h3>
          <p className="text-gray-600 dark:text-gray-300">Full-stack web development with modern technologies</p>
        </div>
        <div className="bg-gray-100/50 dark:bg-navy-800/50 p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold">UI/UX Design</h3>
          <p className="text-gray-600 dark:text-gray-300">Creating beautiful and intuitive user interfaces</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
