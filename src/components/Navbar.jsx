import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/journey', label: 'Journey' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      padding: '1.2rem 0'
    }}>
      <div className="container liquid-glass" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2.2rem',
        borderRadius: '18px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 107, 0, 0.06)'
      }}>
        {/* Brand Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            style={{
              display: 'inline-block',
              width: '11px',
              height: '11px',
              borderRadius: '50%',
              background: 'var(--accent-orange)',
              boxShadow: '0 0 12px var(--accent-orange)'
            }} 
          />
          <span className="gradient-text" style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Rajarshi.dev
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.6rem' }} className="desktop-menu">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                position: 'relative',
                padding: '0.6rem 1.1rem',
                color: isActive ? '#fff' : 'var(--text-secondary)',
                fontWeight: isActive ? '700' : '500',
                fontSize: '0.95rem',
                borderRadius: '10px',
                transition: 'color 0.25s ease'
              })}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '18%',
                        right: '18%',
                        height: '2.5px',
                        background: 'linear-gradient(90deg, var(--accent-orange), var(--accent-blue))',
                        borderRadius: '3px',
                        boxShadow: '0 0 10px var(--accent-blue)'
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '10px',
            color: '#fff',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isOpen ? <X size={22} color="var(--accent-orange)" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="liquid-glass"
            style={{
              position: 'absolute',
              top: '100%',
              left: '1.2rem',
              right: '1.2rem',
              marginTop: '0.6rem',
              padding: '1.4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.8)'
            }}
          >
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--accent-blue)' : '#fff',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '1rem',
                  border: isActive ? '1px solid rgba(0, 240, 255, 0.25)' : '1px solid transparent'
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 820px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
