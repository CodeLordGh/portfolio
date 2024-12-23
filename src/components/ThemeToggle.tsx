import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-navy-800/90 dark:bg-white/90 
                backdrop-blur-sm shadow-lg transition-all duration-300
                hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-navy-950" />
      ) : (
        <Moon className="w-5 h-5 text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;