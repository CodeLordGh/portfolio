import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50"
      style={{ 
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${
          isDark 
            ? 'rgba(29, 78, 216, 0.15)' 
            : 'rgba(37, 99, 235, 0.05)'
        }, transparent 80%)`
      }}
    />
  );
};

export default MouseEffect;