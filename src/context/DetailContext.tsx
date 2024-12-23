import React, { createContext, useContext, useState } from 'react';

type DetailType = 'expertise' | 'experience' | 'education' | 'philosophy' | null;

interface DetailContextType {
  activeDetail: DetailType;
  setActiveDetail: (detail: DetailType) => void;
}

const DetailContext = createContext<DetailContextType | undefined>(undefined);

export const DetailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeDetail, setActiveDetail] = useState<DetailType>(null);

  return (
    <DetailContext.Provider value={{ activeDetail, setActiveDetail }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetail = () => {
  const context = useContext(DetailContext);
  if (context === undefined) {
    throw new Error('useDetail must be used within a DetailProvider');
  }
  return context;
};
