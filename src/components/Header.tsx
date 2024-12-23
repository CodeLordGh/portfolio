import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Portfolio', 'Service', 'Contact'];
  const { activeSection, setActiveSection } = useNavigation();
  const { isDark } = useTheme();

  const handleNavClick = (item: string) => {
    const section = item.toLowerCase();
    setActiveSection(section === 'home' ? null : section as any);
    setIsMenuOpen(false);

    // Smooth scroll on mobile
    if (window.innerWidth < 768) {
      const element = document.getElementById(section === 'home' ? 'main-content' : section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (item: string) => {
    if (item.toLowerCase() === 'home') {
      return activeSection === null;
    }
    return item.toLowerCase() === activeSection;
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Portfolio.
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`transition-colors relative
                  ${isActive(item) 
                    ? 'text-green-400' 
                    : isDark 
                      ? 'text-gray-300 hover:text-green-400'
                      : 'text-gray-600 hover:text-green-400'
                  }
                  after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                  after:w-full after:h-[2px] after:bg-green-400
                  after:transition-transform after:duration-300
                  after:transform ${isActive(item) ? 'after:scale-x-100' : 'after:scale-x-0'}
                `}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isDark ? 'text-white' : 'text-gray-800'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <nav className="py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`text-left px-4 py-2 rounded-lg transition-colors
                      ${isActive(item)
                        ? 'bg-green-400/10 text-green-400'
                        : isDark
                          ? 'text-gray-300 hover:bg-green-400/10'
                          : 'text-gray-600 hover:bg-green-400/10'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;