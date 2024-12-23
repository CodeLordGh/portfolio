import React from 'react';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    { Icon: Linkedin, href: '#' },
    { Icon: Facebook, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Youtube, href: '#' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          className="w-10 h-10 rounded-full dark:bg-navy-800 bg-white flex items-center justify-center
                   hover:bg-green-500 transition-colors duration-300 group
                   shadow-lg"
        >
          <Icon size={20} className="dark:text-green-400 text-green-500 group-hover:text-white" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;