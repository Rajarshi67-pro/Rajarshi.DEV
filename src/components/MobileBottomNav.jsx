import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, GraduationCap, Briefcase, Award, Mail } from 'lucide-react';

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/journey', label: 'Journey', icon: GraduationCap },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/achievements', label: 'Awards', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="mobile-bottom-nav-container">
      <nav className="mobile-bottom-dock liquid-glass">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="mobile-nav-item"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                padding: '0.45rem 0.2rem',
                textDecoration: 'none',
                color: isActive ? '#ffffff' : '#888888',
                zIndex: 2,
                transition: 'color 0.2s ease',
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-active"
                  className="mobile-nav-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  style={{
                    position: 'absolute',
                    inset: '4px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.25), rgba(0, 240, 255, 0.15))',
                    border: '1px solid rgba(255, 107, 0, 0.5)',
                    boxShadow: '0 0 15px rgba(255, 107, 0, 0.35)',
                    zIndex: -1,
                  }}
                />
              )}

              <motion.div
                animate={isActive ? { scale: 1.12, y: -2 } : { scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <Icon
                  size={20}
                  color={isActive ? 'var(--accent-orange)' : '#8a8a8a'}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </motion.div>

              <span
                style={{
                  fontSize: '0.66rem',
                  fontWeight: isActive ? '700' : '500',
                  marginTop: '2px',
                  letterSpacing: '0.2px',
                  color: isActive ? '#ffffff' : '#888888',
                }}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      <style>{`
        .mobile-bottom-nav-container {
          display: none;
          position: fixed;
          bottom: 12px;
          left: 12px;
          right: 12px;
          z-index: 9999;
          pointer-events: auto;
        }

        .mobile-bottom-dock {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(10, 10, 10, 0.88) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 20px !important;
          padding: 0.35rem 0.5rem !important;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.85), 0 0 20px rgba(255, 107, 0, 0.15) !important;
        }

        @media (max-width: 768px) {
          .mobile-bottom-nav-container {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileBottomNav;
