import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';
import InteractiveBackground from './components/InteractiveBackground';
import CustomCursor from './components/CustomCursor';
import OpeningAnimation from './components/OpeningAnimation';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const ROUTE_ORDER = ['/', '/about', '/journey', '/projects', '/achievements', '/contact'];

const PageWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Snappy Elastic Swipe Gesture Support
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 65;
    const currentIndex = ROUTE_ORDER.indexOf(location.pathname);

    if (currentIndex === -1) return;

    if (info.offset.x < -swipeThreshold && currentIndex < ROUTE_ORDER.length - 1) {
      // Swiped Left -> Go to Next Page
      navigate(ROUTE_ORDER[currentIndex + 1]);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      // Swiped Right -> Go to Previous Page
      navigate(ROUTE_ORDER[currentIndex - 1]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 360,
        damping: 26,
        mass: 0.7
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      onDragEnd={handleDragEnd}
      className="container page-wrapper"
      style={{ touchAction: 'pan-y' }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/journey" element={<PageWrapper><Journey /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/cv" element={<PageWrapper><Resume /></PageWrapper>} />
        <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <Router>
      <OpeningAnimation onComplete={() => setIntroFinished(true)} />
      <CustomCursor />
      <InteractiveBackground />
      <Navbar />
      <AnimatedRoutes />
      <MobileBottomNav />
    </Router>
  );
}

export default App;
