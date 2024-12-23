import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Preload profile image
    const profileImage = new Image();
    profileImage.src = '/profile.jpg'; // Update with your image path
    
    // Create a promise that resolves after desired loading time
    const minLoadingTime = new Promise(resolve => {
      // Animate progress over 5 seconds
      let startTime = Date.now();
      const duration = 5000; // 5 seconds

      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const currentProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(currentProgress);

        if (currentProgress < 100) {
          requestAnimationFrame(updateProgress);
        } else {
          resolve(true);
        }
      };

      requestAnimationFrame(updateProgress);
    });

    // Wait for both image load and minimum time
    Promise.all([
      new Promise(resolve => {
        profileImage.onload = resolve;
        profileImage.onerror = resolve; // Continue even if image fails
      }),
      minLoadingTime
    ]).then(() => {
      setAssetsLoaded(true);
      setTimeout(() => setIsLoading(false), 500); // Smooth transition
    });
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, progress, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
