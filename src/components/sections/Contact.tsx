import React from 'react';

const Contact = () => {
  return (
    <div className="h-full flex flex-col justify-center text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Looking to collaborate on frontend projects or discuss how my unique background in insurance and process optimization can benefit your team? Let's connect!
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
            <span>📧</span>
            <span>peris.muniu@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
            <span>📱</span>
            <span>+254723167757</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
            <span>💼</span>
            <a href="https://www.linkedin.com/in/perismuniu/" 
               className="text-green-500 hover:text-green-600 transition-colors">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
