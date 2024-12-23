import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import SocialIcons from './components/SocialIcons';
import ProfileImage from './components/ProfileImage';
import IntroSection from './components/IntroSection';
import MouseEffect from './components/MouseEffect';
import ThemeToggle from './components/ThemeToggle';
import TechStack from './components/TechStack';
import LoadingScreen from './components/LoadingScreen';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { DetailProvider, useDetail } from './context/DetailContext';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Service from './components/sections/Service';
import Contact from './components/sections/Contact';
import { ExpertiseDetail, ExperienceDetail, EducationDetail, PhilosophyDetail } from './components/details/DetailViews';

const contentVariants = {
  enter: { opacity: 0, y: -20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const MainContent = () => {
  const { activeSection } = useNavigation();
  const { isLoading } = useLoading();
  const { activeDetail } = useDetail();

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'service':
        return <Service />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const renderDetail = () => {
    switch (activeDetail) {
      case 'expertise':
        return <ExpertiseDetail />;
      case 'experience':
        return <ExperienceDetail />;
      case 'education':
        return <EducationDetail />;
      case 'philosophy':
        return <PhilosophyDetail />;
      default:
        return (
          <>
            <IntroSection />
            <div className="mt-8">
              <SocialIcons />
            </div>
            <TechStack />
          </>
        );
    }
  };

  if (isLoading) return null;

  return (
    <main id="main-content" className="container mx-auto px-4 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between pt-24 md:pt-0 md:h-screen">
        <motion.div 
          className="w-full md:w-1/2 pr-8"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDetail || 'intro'}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {renderDetail()}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="w-full md:w-1/2 relative min-h-[400px] flex justify-center items-center">
          <AnimatePresence mode="wait">
            {activeSection ? (
              <motion.div
                key={activeSection}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 w-full"
                id={activeSection}
              >
                {renderSection()}
              </motion.div>
            ) : (
              <motion.div
                key="profile"
                variants={contentVariants}
                initial="center"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full h-full hidden md:flex justify-center items-center"
              >
                <ProfileImage />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

function App() {
  const { isLoading } = useLoading();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 relative overflow-x-hidden transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <MouseEffect />
      {!isLoading && <Header />}
      <MainContent />
      {!isLoading && <ThemeToggle />}
    </div>
  );
}

function AppWrapper() {
  return (
    <DetailProvider>
      <LoadingProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </LoadingProvider>
    </DetailProvider>
  );
}

export default AppWrapper;