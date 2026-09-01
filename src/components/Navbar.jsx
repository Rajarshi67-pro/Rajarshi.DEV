import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/journey', label: 'Journey' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="desktop-nav" style={{
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
        padding: '0.9rem 2.2rem',
        borderRadius: '18px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 107, 0, 0.06)'
      }}>
        {/* Clean Brand Title */}
        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span className="gradient-text" style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Rajarshi.dev
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
