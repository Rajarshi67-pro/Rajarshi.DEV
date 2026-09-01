import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Ensure route changes always scroll directly to the top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="container page-wrapper"
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
        <Route path="/reviews" element={<PageWrapper><Reviews /></PageWrapper>} />
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
      <ScrollToTop />
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
