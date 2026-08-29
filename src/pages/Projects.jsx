import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Code2 } from 'lucide-react';

const GithubIcon = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: "bharatvote",
      isLatest: true,
      title: "BharatVote — Voting Management System",
      date: "Nov 2025",
      tagline: "Online Election System",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      desc: "Secure online voting system with voter authentication, candidate management, one-vote-per-user integrity, and real-time tabulation.",
      github: "https://github.com/Rajarshi67-pro",
      live: "https://github.com/Rajarshi67-pro",
      accent: "var(--accent-orange)"
    },
    {
      id: "inventory-ml",
      isLatest: true,
      title: "Inventory & Supply Chain System",
      date: "May 2026",
      tagline: "AI Logistics Platform",
      tech: ["React.js", "Oracle SQL", "Python", "ML"],
      desc: "Full-stack warehouse and supplier management platform featuring barcode tracking, demand forecasting with ML, and RBAC security.",
      github: "https://github.com/Rajarshi67-pro",
      live: "https://github.com/Rajarshi67-pro",
      accent: "var(--accent-blue)"
    },
    {
      id: "portfolio-3d",
      isLatest: false,
      title: "Personal 3D Portfolio",
      date: "Current",
      tagline: "Interactive Web App",
      tech: ["React.js", "Vite", "Framer Motion"],
      desc: "Fluid portfolio with liquid glassmorphism, 3D mouse parallax cards, custom auto-typing engine, and seamless route transitions.",
      github: "https://github.com/Rajarshi67-pro",
      live: "https://github.com/Rajarshi67-pro",
      accent: "var(--accent-orange)"
    },
    {
      id: "calculator-apps",
      isLatest: false,
      title: "Interactive Web Suite",
      date: "Dec 2024",
      tagline: "Frontend Utilities (Pinnacle Labs)",
      tech: ["HTML5", "CSS3", "JavaScript ES6+"],
      desc: "High-precision web calculator and responsive personal portfolio layouts built during internship at Pinnacle Labs.",
      github: "https://github.com/Rajarshi67-pro",
      live: "https://github.com/Rajarshi67-pro",
      accent: "var(--accent-blue)"
    }
  ];

  const filteredProjects = filter === 'latest' 
    ? projects.filter(p => p.isLatest) 
    : projects;

  return (
    <section style={{ padding: '1.5rem 0 4rem 0' }}>
      {/* Header */}
      <div className="page-header" style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.85rem', borderRadius: '30px', background: 'rgba(255, 107, 0, 0.08)', border: '1px solid rgba(255, 107, 0, 0.2)', marginBottom: '0.8rem' }}>
          <Sparkles size={13} color="var(--accent-orange)" />
          <span style={{ color: 'var(--accent-orange)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '700' }}>
            Featured Projects
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
          Featured <span className="gradient-text">Projects</span>
        </h1>
        <p style={{ maxWidth: '550px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Clean, minimal full-stack software and machine learning platforms.
        </p>

        {/* Minimal Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.2rem' }}>
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'latest', label: '🔥 Latest 2 Projects' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                background: filter === tab.id ? 'var(--accent-orange)' : 'rgba(255,255,255,0.05)',
                color: filter === tab.id ? '#fff' : 'var(--text-secondary)',
                border: filter === tab.id ? '1px solid var(--accent-orange)' : '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.82rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Minimal Project Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="liquid-glass"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: `3px solid ${project.accent}`,
                position: 'relative'
              }}
            >
              <div>
                {/* Header Tag & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.75rem', color: project.accent, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {project.tagline}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.04)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                    {project.date}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                  {project.title}
                </h2>

                {/* Concise Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                  {project.desc}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.2rem' }}>
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.2rem 0.5rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        borderRadius: '4px',
                        color: 'var(--text-primary)',
                        fontSize: '0.74rem',
                        fontWeight: '500'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto', paddingTop: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <motion.a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 0.8rem',
                    background: 'var(--accent-orange)',
                    color: '#fff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.82rem',
                    boxShadow: '0 0 10px rgba(255, 107, 0, 0.25)'
                  }}
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </motion.a>

                <motion.a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 0.8rem',
                    background: 'var(--accent-blue)',
                    color: '#050505',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.82rem',
                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.25)'
                  }}
                >
                  <span>Live</span>
                  <ArrowUpRight size={13} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
