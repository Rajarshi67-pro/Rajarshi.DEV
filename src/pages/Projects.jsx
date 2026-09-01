import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Code2, Compass, Utensils, Terminal, Globe } from 'lucide-react';

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
      id: "insightforge-eda",
      category: "python",
      isLatest: true,
      title: "InsightForge-EDA — Automated Data Intelligence & ML",
      date: "Aug 2026",
      tagline: "Automated EDA & ML Platform",
      tech: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Docker"],
      desc: "Automatically analyzes raw datasets, detects data-quality issues, generates statistical insights, trains ML models, and produces actionable conclusions through an interactive dashboard.",
      github: "https://github.com/Rajarshi67-pro/InsightForge-EDA",
      live: "https://github.com/Rajarshi67-pro/InsightForge-EDA",
      accent: "#00ff9d"
    },
    {
      id: "ai-travel-planner",
      category: "travel",
      isLatest: true,
      title: "AI Travel Planner — Smart Trip & Itinerary System",
      date: "Aug 2026",
      tagline: "AI Trip Generator & Travel Hub",
      tech: ["TypeScript", "React", "Tailwind CSS", "AI Integration", "REST APIs"],
      desc: "AI-powered travel companion that generates custom day-by-day itineraries, hotel and attraction recommendations, budget breakdowns, and route optimization.",
      github: "https://github.com/Rajarshi67-pro/AI-TRAVEL-PLANNER",
      live: "https://github.com/Rajarshi67-pro/AI-TRAVEL-PLANNER",
      accent: "var(--accent-orange)"
    },
    {
      id: "heritage-food-atlas",
      category: "food",
      isLatest: true,
      title: "Heritage Food Atlas — Culinary Heritage & Cuisines",
      date: "Aug 2026",
      tagline: "Regional Cuisine & Heritage Atlas",
      tech: ["TypeScript", "React", "Node.js", "Interactive Maps", "CSS3"],
      desc: "Interactive digital atlas celebrating and preserving regional heritage cuisines, authentic traditional culinary recipes, cultural roots, and gastronomic geography.",
      github: "https://github.com/Rajarshi67-pro/Heritage-Food-Atlas",
      live: "https://github.com/Rajarshi67-pro/Heritage-Food-Atlas",
      accent: "#ff0055"
    },
    {
      id: "inventrack",
      category: "web",
      isLatest: true,
      title: "InvenTrack — Enterprise Warehouse & Supply Chain",
      date: "Jun 2026",
      tagline: "Enterprise Logistics & Forecasting",
      tech: ["TypeScript", "React", "PL/SQL", "Oracle SQL", "Python ML"],
      desc: "Enterprise warehouse and supplier management platform featuring barcode integration, automated stock tracking, demand forecasting, and role-based access control.",
      github: "https://github.com/Rajarshi67-pro/InvenTrack",
      live: "https://github.com/Rajarshi67-pro/InvenTrack",
      accent: "var(--accent-blue)"
    },
    {
      id: "ovms-bharatvote",
      category: "web",
      isLatest: true,
      title: "OVMS — Online Voting Management System",
      date: "Jun 2026",
      tagline: "Secure Voting Portal",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "JavaScript"],
      desc: "Robust online election management system with secure voter authentication, candidate management, one-vote-per-user integrity, and real-time live vote tabulation.",
      github: "https://github.com/Rajarshi67-pro/OVMS",
      live: "https://github.com/Rajarshi67-pro/OVMS",
      accent: "var(--accent-orange)"
    },
    {
      id: "election-prediction",
      category: "python",
      isLatest: false,
      title: "Election Winner Predictor — AI Constituency Analytics",
      date: "May 2026",
      tagline: "AI Election Modeling",
      tech: ["Python", "Machine Learning", "Data Modeling", "JavaScript"],
      desc: "Constituency-level election predictive analysis system modeling candidate win probabilities based on voter demographic indicators and historical voting trends.",
      github: "https://github.com/Rajarshi67-pro/Election",
      live: "https://github.com/Rajarshi67-pro/Election",
      accent: "#ffbe0b"
    },
    {
      id: "rajarshi-dev",
      category: "web",
      isLatest: false,
      title: "Rajarshi.DEV — Personal 3D Developer Portfolio",
      date: "Aug 2026",
      tagline: "Interactive 3D Portfolio",
      tech: ["React.js", "Vite", "Framer Motion", "Liquid Glassmorphism"],
      desc: "High-performance personal developer portfolio with liquid glassmorphic UI, live LeetCode/GitHub stats sync, mobile bottom dock, and real-time reviews.",
      github: "https://github.com/Rajarshi67-pro/Rajarshi.DEV",
      live: "https://github.com/Rajarshi67-pro/Rajarshi.DEV",
      accent: "var(--accent-blue)"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'python', label: '🐍 Python & ML' },
    { id: 'travel', label: '✈️ AI Travel' },
    { id: 'food', label: '🍔 Heritage Food' },
    { id: 'web', label: '🌐 Full-Stack & Web' }
  ];

  return (
    <section style={{ padding: '1.5rem 0 4rem 0' }}>
      {/* Header */}
      <div className="page-header" style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.85rem', borderRadius: '30px', background: 'rgba(255, 107, 0, 0.08)', border: '1px solid rgba(255, 107, 0, 0.2)', marginBottom: '0.8rem' }}>
          <Sparkles size={13} color="var(--accent-orange)" />
          <span style={{ color: 'var(--accent-orange)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '700' }}>
            GitHub Verified Repositories
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
          Featured <span className="gradient-text">Projects</span>
        </h1>
        <p style={{ maxWidth: '580px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Open-source software, automated Python data engines, AI travel planners, and heritage culinary platforms from GitHub.
        </p>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.4rem', flexWrap: 'wrap' }}>
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              style={{
                padding: '0.4rem 0.95rem',
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

      {/* Project Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.4rem', maxWidth: '1050px', margin: '0 auto' }}>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="liquid-glass"
              style={{
                padding: '1.4rem',
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
                  <span style={{ fontSize: '0.74rem', color: project.accent, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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

              {/* Action Buttons with direct GitHub repository URLs */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <motion.a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
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
                  <span>GitHub Repo</span>
                </motion.a>

                <motion.a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
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
                  <span>Explore</span>
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
