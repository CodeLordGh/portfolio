import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDetail } from './DetailContext';

type Section = 'home' | 'about' | 'portfolio' | 'service' | 'contact' | null;

interface NavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const { setActiveDetail } = useDetail();

  // Reset detail view when navigation changes
  useEffect(() => {
    setActiveDetail(null);
  }, [activeSection, setActiveDetail]);

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};