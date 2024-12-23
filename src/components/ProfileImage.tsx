import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../context/NavigationContext';

const ProfileImage = () => {
  const { activeSection } = useNavigation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const imagePath = '/assets/peris.jpeg';

  // Prefetch image when component mounts
  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full overflow-hidden">
      {imageLoaded && (
        <>
          <img
            src={imagePath}
            alt="Peris Muniu - Frontend Developer"
            className="w-full h-full object-cover"
          />
          {/* Rotating borders */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-400/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-400/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}
    </div>
  );
};

export default ProfileImage;