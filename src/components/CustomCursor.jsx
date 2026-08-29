import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 600, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 600, damping: 30 });
  
  const trailX = useSpring(0, { stiffness: 220, damping: 22 });
  const trailY = useSpring(0, { stiffness: 220, damping: 22 });

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest(
        'a, button, input, textarea, .liquid-glass, .tech-pill, .social-pill, .timeline-node, [role="button"]'
      );

      if (interactiveEl) {
        setIsHovered(true);
        if (interactiveEl.classList.contains('btn-blue') || interactiveEl.classList.contains('social-pill-blue')) {
          setHoverType('blue');
        } else {
          setHoverType('orange');
        }
      } else {
        setIsHovered(false);
        setHoverType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const ringColor = hoverType === 'blue' ? 'rgba(0, 240, 255, 0.9)' : 'rgba(255, 107, 0, 0.9)';
  const glowShadow = hoverType === 'blue' 
    ? '0 0 25px rgba(0, 240, 255, 0.6), inset 0 0 15px rgba(0, 240, 255, 0.3)' 
    : '0 0 25px rgba(255, 107, 0, 0.6), inset 0 0 15px rgba(255, 107, 0, 0.3)';

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? '9px' : '6px',
          height: isHovered ? '9px' : '6px',
          borderRadius: '50%',
          backgroundColor: hoverType === 'blue' ? '#00f0ff' : '#ff6b00',
          boxShadow: hoverType === 'blue' ? '0 0 12px #00f0ff, 0 0 24px #00f0ff' : '0 0 12px #ff6b00, 0 0 24px #ff6b00',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.18s, height 0.18s, background-color 0.18s, box-shadow 0.18s'
        }}
      />

      {/* Trailing Fluid Hover Halo */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          borderRadius: '50%',
          border: `1.5px solid ${ringColor}`,
          background: isHovered 
            ? (hoverType === 'blue' ? 'radial-gradient(circle, rgba(0,240,255,0.18) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)') 
            : 'transparent',
          boxShadow: isHovered ? glowShadow : '0 0 8px rgba(255, 107, 0, 0.25)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.22s ease-out, height 0.22s ease-out, border 0.22s ease-out, background 0.22s ease-out, box-shadow 0.22s ease-out'
        }}
      />
    </>
  );
};

export default CustomCursor;
