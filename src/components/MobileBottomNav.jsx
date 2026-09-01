import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, GraduationCap, Briefcase, Award, MessageSquare, Mail } from 'lucide-react';

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/journey', label: 'Journey', icon: GraduationCap },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/achievements', label: 'Awards', icon: Award },
    { path: '/reviews', label: 'Reviews', icon: MessageSquare },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="mobile-bottom-nav-container">
      <nav className="mobile-bottom-dock">
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
                padding: '0.4rem 0.1rem',
                textDecoration: 'none',
                color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                zIndex: 2,
                transition: 'color 0.2s ease',
              }}
            >
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon
                  size={19}
                  color={isActive ? 'var(--accent-orange)' : 'rgba(255, 255, 255, 0.5)'}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  style={{
                    filter: isActive ? 'drop-shadow(0 0 8px rgba(255, 107, 0, 0.7))' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: '0.64rem',
                  fontWeight: isActive ? '700' : '500',
                  marginTop: '3px',
                  letterSpacing: '0.1px',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                }}
              >
                {item.label}
              </span>

              {/* Minimal Glowing Active Indicator Dot */}
              {isActive && (
                <motion.span
                  layoutId="mobile-nav-dot"
                  style={{
                    position: 'absolute',
                    bottom: '1px',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--accent-orange)',
                    boxShadow: '0 0 8px var(--accent-orange)'
                  }}
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
            </NavLink>
          );
        })}
      </nav>

      <style>{`
        .mobile-bottom-nav-container {
          display: none;
          position: fixed;
          bottom: 10px;
          left: 10px;
          right: 10px;
          z-index: 9999;
          pointer-events: auto;
        }

        .mobile-bottom-dock {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(12, 12, 12, 0.72) !important;
          backdrop-filter: blur(25px) !important;
          -webkit-backdrop-filter: blur(25px) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 18px !important;
          padding: 0.35rem 0.4rem !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.75), 0 0 15px rgba(255, 107, 0, 0.1) !important;
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
