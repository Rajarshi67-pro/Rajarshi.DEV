import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        background: '#000000'
      }}
    >
      {/* Precision Grid Layer */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
          maskImage: !isTouch ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 35%)` : 'none',
          WebkitMaskImage: !isTouch ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 35%)` : 'none',
          opacity: isTouch ? 0.4 : 0.8,
          transition: 'mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out',
        }}
      />

      {/* Floating Rainbow / Orange Glow Orbs */}
      {/* Orb 1: Orange Pulse */}
      <motion.div
        animate={!isTouch ? {
          x: mousePosition.x * 0.04,
          y: mousePosition.y * 0.04,
          scale: [1, 1.15, 1],
        } : {
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={!isTouch ? { type: 'spring', damping: 45, stiffness: 180 } : { repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '45vw',
          height: '45vw',
          maxWidth: '550px',
          maxHeight: '550px',
          background: 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, rgba(255,0,128,0.08) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      {/* Orb 2: Rainbow Cyan / Violet Glow */}
      <motion.div
        animate={!isTouch ? {
          x: mousePosition.x * -0.04,
          y: mousePosition.y * -0.04,
          scale: [1, 1.2, 1],
        } : {
          x: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={!isTouch ? { type: 'spring', damping: 45, stiffness: 180 } : { repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '600px',
          maxHeight: '600px',
          background: 'radial-gradient(circle, rgba(0,240,255,0.14) 0%, rgba(138,43,226,0.1) 45%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      {/* Orb 3: Subtle Emerald / Gold Accent in center */}
      <motion.div
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.12, 0.25, 0.12]
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '40%',
          right: '25%',
          width: '35vw',
          height: '35vw',
          maxWidth: '400px',
          maxHeight: '400px',
          background: 'radial-gradient(circle, rgba(0,255,157,0.1) 0%, rgba(255,193,7,0.06) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(65px)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
