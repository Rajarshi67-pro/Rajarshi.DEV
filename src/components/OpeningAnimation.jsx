import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';

const OpeningAnimation = ({ onComplete }) => {
  const [show, setShow] = useState(() => {
    // Only show on first visit in the current session
    return !sessionStorage.getItem('hasSeenPortfolioIntro');
  });

  useEffect(() => {
    if (!show) {
      if (onComplete) onComplete();
      return;
    }

    // Snappy duration between 700ms and 1100ms (900ms)
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasSeenPortfolioIntro', 'true');
      if (onComplete) onComplete();
    }, 900);

    return () => clearTimeout(timer);
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#050505',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          {/* Subtle Grid Accent */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(to right, rgba(255,107,0,0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,240,255,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              opacity: 0.6
            }}
          />

          {/* Central Pulse Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,107,0,0.22) 0%, rgba(0,240,255,0.16) 50%, transparent 70%)',
              filter: 'blur(35px)',
              pointerEvents: 'none'
            }}
          />

          {/* Logo & Content */}
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 1.5rem' }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 14, stiffness: 280 }}
              style={{
                width: '58px',
                height: '58px',
                margin: '0 auto 1.1rem auto',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, var(--accent-orange), var(--accent-blue))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 35px rgba(255, 107, 0, 0.6), 0 0 45px rgba(0, 240, 255, 0.4)'
              }}
            >
              <Code2 size={28} color="#050505" strokeWidth={2.5} />
            </motion.div>

            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.3rem)', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '0.4rem' }}
            >
              Rajarshi <span className="gradient-text">Chatterjee</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}
            >
              <Terminal size={14} color="var(--accent-blue)" />
              <span>INITIALIZING PORTFOLIO...</span>
            </motion.div>

            {/* Snappy Glowing Progress Line */}
            <div style={{ width: '170px', height: '2.5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', margin: '1.2rem auto 0 auto', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--accent-orange), var(--accent-blue))',
                  boxShadow: '0 0 10px var(--accent-blue)'
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;
