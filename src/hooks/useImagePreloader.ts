import { useState, useEffect } from 'react';

export const useImagePreloader = (imagePath: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setLoaded(true);
  }, [imagePath]);

  return loaded;
};