import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  Terminal, Briefcase, Globe, Mail, Phone, MapPin, FileText, Code2, 
  Database, Cpu, Award, ArrowRight, Download, Sparkles, CheckCircle2, 
  Flame, GitBranch, Star, Activity, Users, Eye, TrendingUp, Radio
} from 'lucide-react';
import heroImg from '../assets/rajarshi_original_aligned.jpg';

const GithubIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" r="2" />
  </svg>
);

const LeetCodeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.789l3.854-4.126 5.406-5.788c.54-.54.54-1.414 0-1.954A1.374 1.374 0 0 0 13.483 0zm-2.88 8.78a1.378 1.378 0 0 0-.974.405l-4.73 4.73a1.38 1.38 0 0 0 0 1.954 1.38 1.38 0 0 0 1.954 0l4.73-4.73a1.38 1.38 0 0 0-.98-2.359z" fill="#FFA116"/>
  </svg>
);

const Home = () => {
  const navigate = useNavigate();
  const [typedName, setTypedName] = useState('');
  const [githubRepos, setGithubRepos] = useState(8);
  const [visitorCount, setVisitorCount] = useState(0);
  const [todayVisitors, setTodayVisitors] = useState(0);
  
  useEffect(() => {
    let timeoutId;
    let i = 0;
    let isDeleting = false;
    const text = "Rajarshi Chatterjee";
    const baseText = "Rajarshi";
    
    const type = () => {
      if (!isDeleting) {
        setTypedName(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 2200);
        } else {
          timeoutId = setTimeout(type, 90);
        }
      } else {
        setTypedName(text.slice(0, i - 1));
        i--;
        if (i === baseText.length) {
          isDeleting = false;
          timeoutId = setTimeout(type, 1200);
        } else {
          timeoutId = setTimeout(type, 50);
        }
      }
    };
    timeoutId = setTimeout(type, 150);
    return () => clearTimeout(timeoutId);
  }, []);

  // Live Visitor Counter Increment Logic (Strictly initialized from 0)
  useEffect(() => {
    const legacy = localStorage.getItem('portfolio_total_visits');
    if (legacy && parseInt(legacy, 10) > 100) {
      localStorage.removeItem('portfolio_total_visits');
      localStorage.removeItem('portfolio_today_visits');
    }

    const storedVisits = localStorage.getItem('portfolio_clean_visits');
    let currentVisits = storedVisits ? parseInt(storedVisits, 10) : 0;
    
    const hasVisitedSession = sessionStorage.getItem('visited_session_clean');
    if (!hasVisitedSession) {
      currentVisits += 1;
      localStorage.setItem('portfolio_clean_visits', currentVisits.toString());
      sessionStorage.setItem('visited_session_clean', 'true');
    }
    
    setVisitorCount(currentVisits);

    const todayDate = new Date().toDateString();
    const lastDate = localStorage.getItem('portfolio_today_date_clean');
    let currentToday = (lastDate === todayDate && localStorage.getItem('portfolio_today_visits_clean')) 
      ? parseInt(localStorage.getItem('portfolio_today_visits_clean'), 10) 
      : 0;

    if (!hasVisitedSession) {
      currentToday += 1;
      localStorage.setItem('portfolio_today_visits_clean', currentToday.toString());
      localStorage.setItem('portfolio_today_date_clean', todayDate);
    }

    setTodayVisitors(currentToday || currentVisits);
  }, []);

  // Fetch live GitHub repo count
  useEffect(() => {
    fetch('https://api.github.com/users/Rajarshi67-pro')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.public_repos === 'number') {
          setGithubRepos(data.public_repos);
        }
      })
      .catch(() => {});
  }, []);

  // Desktop 3D Card Parallax (Touch-Safe)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (event) => {
    if (window.innerWidth < 820) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const quickHighlights = [
    { label: "B.Tech CSE", value: "Techno Main Salt Lake", color: "#ff6b00", icon: <Code2 size={16} color="#ff6b00" /> },
    { label: "SIH Finalist", value: "Smart India Hackathon 2025", color: "#00f0ff", icon: <Award size={16} color="#00f0ff" /> },
    { label: "Experience", value: "Pinnacle Labs Intern", color: "#ff6b00", icon: <Briefcase size={16} color="#ff6b00" /> },
    { label: "Location", value: "Kolkata, West Bengal", color: "#00f0ff", icon: <MapPin size={16} color="#00f0ff" /> }
  ];

  const techBadges = [
    "C", "C++", "Java", "Python", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Oracle SQL", "Machine Learning"
  ];

  // Helper to render name cleanly
  const renderTypedName = () => {
    if (typedName.startsWith("Rajarshi")) {
      const surnamePart = typedName.slice(8);
      return (
        <>
          <span style={{ color: '#ffffff' }}>Rajarshi</span>
          {surnamePart.length > 0 && (
            <span style={{ color: '#ff6b00', textShadow: '0 0 25px rgba(255, 107, 0, 0.5)' }}>
              {surnamePart}
            </span>
          )}
        </>
      );
    }
    return <span style={{ color: '#ffffff' }}>{typedName}</span>;
  };

  return (
    <section className="hero-section" style={{ minHeight: 'calc(100vh - 110px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      {/* ========================================================================= */}
      {/* 📱 MOBILE EXCLUSIVE PROFILE PHOTO HEADER (Clean, Centered, Perfectly Scaled) */}
      {/* ========================================================================= */}
      <div className="mobile-profile-hero" style={{ display: 'none', textAlign: 'center', marginBottom: '1.8rem' }}>
        <div style={{
          position: 'relative',
          display: 'inline-block',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          padding: '4px',
          background: 'linear-gradient(135deg, var(--accent-orange), var(--accent-blue))',
          boxShadow: '0 0 30px rgba(255, 107, 0, 0.35)'
        }}>
          <img 
            src={heroImg} 
            alt="Rajarshi Chatterjee" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              display: 'block',
              border: '3px solid #000000'
            }} 
          />
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#000000',
            border: '1px solid var(--accent-orange)',
            borderRadius: '20px',
            padding: '0.25rem 0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            whiteSpace: 'nowrap',
            boxShadow: '0 0 15px rgba(255, 107, 0, 0.5)'
          }}>
            <Award size={12} color="var(--accent-orange)" />
            <span style={{ fontSize: '0.68rem', fontWeight: 'bold', color: '#fff' }}>SIH '25 Finalist</span>
          </div>
        </div>
      </div>

      {/* Hero Section Grid */}
      <div className="hero-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
        
        {/* Left Column: Bio & Intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Status Pill */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '30px',
              background: 'rgba(255, 107, 0, 0.08)',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              marginBottom: '1.2rem'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff6b00', boxShadow: '0 0 10px #ff6b00', display: 'inline-block' }} />
            <span style={{ color: 'var(--accent-orange)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.76rem', fontWeight: '700' }}>
              Software Engineer & CSE Student
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.4rem)', marginBottom: '1rem', lineHeight: '1.18', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Hi, I'm <br />
            {renderTypedName()}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.7 }}
              style={{ color: 'var(--accent-orange)', fontWeight: '300' }}
            >
              |
            </motion.span>
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', marginBottom: '2rem', maxWidth: '520px', lineHeight: '1.7' }}>
            Computer Science & Engineering undergraduate at <strong style={{ color: '#fff' }}>Techno Main Salt Lake</strong> (2023–2027). Passionate about building high-performance full-stack architectures, database systems, AI/ML, and fluid responsive applications.
          </p>

          {/* Action Buttons: Perfectly Aligned Side-by-Side on Mobile & Desktop */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.85rem', maxWidth: '440px', width: '100%', marginBottom: '2rem' }}>
            
            {/* Explore Projects Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/projects')}
              className="btn-orange"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.82rem 1.1rem',
                fontSize: '0.92rem',
                gap: '0.45rem',
                width: '100%',
                cursor: 'pointer',
                borderRadius: '10px',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Explore Projects</span>
              <ArrowRight size={17} />
            </motion.button>

            {/* Download CV Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="/Rajarshi_Chatterjee_CV.pdf"
              download="Rajarshi_Chatterjee_CV.pdf"
              className="btn-blue"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.82rem 1.1rem',
                fontSize: '0.92rem',
                gap: '0.45rem',
                width: '100%',
                textDecoration: 'none',
                cursor: 'pointer',
                borderRadius: '10px',
                whiteSpace: 'nowrap'
              }}
            >
              <Download size={17} color="#000000" strokeWidth={2.5} />
              <span>Download CV</span>
            </motion.a>
          </div>

          {/* Social Links: Balanced & Perfectly Aligned */}
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', fontWeight: '600', marginRight: '0.2rem' }}>Connect:</span>
            
            <a 
              href="https://github.com/Rajarshi67-pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                color: '#fff',
                padding: '0.42rem 0.8rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '0.82rem',
                fontWeight: '600'
              }}
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/rajarshi-chatterjee-3020a533b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-pill social-pill-blue"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                color: '#00f0ff',
                padding: '0.42rem 0.8rem',
                background: 'rgba(0, 240, 255, 0.06)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                fontSize: '0.82rem',
                fontWeight: '600'
              }}
            >
              <LinkedinIcon size={14} color="#00f0ff" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="mailto:rajarshighs7@gmail.com" 
              className="social-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                color: '#ff6b00',
                padding: '0.42rem 0.8rem',
                background: 'rgba(255, 107, 0, 0.06)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 107, 0, 0.25)',
                fontSize: '0.82rem',
                fontWeight: '600'
              }}
            >
              <Mail size={14} color="#ff6b00" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Desktop 3D Interactive Hero Card */}
        <div
          className="desktop-hero-card"
          style={{ perspective: 1000, display: 'flex', justifyContent: 'center', width: '100%' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="liquid-glass"
            style={{
              rotateX,
              rotateY,
              padding: '1.2rem',
              display: 'inline-block',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 30px rgba(255, 107, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '22px',
              maxWidth: '380px',
              width: '100%',
              background: 'rgba(16, 16, 16, 0.75)'
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', aspectRatio: '1/1' }}>
              <img 
                src={heroImg} 
                alt="Rajarshi Chatterjee" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)' }} />
              
              <div style={{ position: 'absolute', bottom: '1.1rem', left: '1.1rem', right: '1.1rem' }}>
                <p style={{ color: '#00f0ff', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Techno Main Salt Lake
                </p>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: '800' }}>
                  Rajarshi Chatterjee
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem' }}>
                  B.Tech CSE (2023 - 2027) • Kolkata
                </p>
              </div>
            </div>

            {/* Clean Floating Badge */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: '#000000',
                border: '1px solid var(--accent-orange)',
                borderRadius: '10px',
                padding: '0.45rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 0 20px rgba(255, 107, 0, 0.55)'
              }}
            >
              <Award size={15} color="var(--accent-orange)" />
              <span style={{ fontSize: '0.74rem', fontWeight: 'bold', color: '#fff' }}>SIH 2025 Finalist</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Quick Highlights Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.1rem' }}
      >
        {quickHighlights.map((item, idx) => (
          <div key={idx} className="liquid-glass" style={{ padding: '1.1rem 1.3rem', display: 'flex', alignItems: 'center', gap: '0.9rem', borderLeft: `3px solid ${item.color}` }}>
            <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.icon}
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: '600' }}>{item.label}</p>
              <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '700', marginTop: '2px' }}>{item.value}</h4>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ========================================================================= */}
      {/* 📊 LIVE VISITOR COUNTER WIDGET */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '2.5rem' }}
      >
        <div 
          className="liquid-glass" 
          style={{ 
            padding: '1.4rem 1.8rem', 
            borderTop: '3px solid var(--accent-orange)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.2rem',
            background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.75) 0%, rgba(10, 10, 10, 0.95) 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(255, 107, 0, 0.12)',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(255, 107, 0, 0.25)'
            }}>
              <Eye size={20} color="var(--accent-orange)" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', color: '#00ff9d', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  ● Live Traffic Monitor
                </span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff9d', boxShadow: '0 0 8px #00ff9d' }} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff', marginTop: '2px' }}>
                Visitor Analytics & Counter
              </h3>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>Total Portfolio Visits</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginTop: '2px' }}>
                <span style={{ fontSize: '1.7rem', fontWeight: '800', color: '#00f0ff', textShadow: '0 0 15px rgba(0, 240, 255, 0.4)' }}>
                  {visitorCount}
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>Visits</span>
              </div>
            </div>

            <div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>Active Today</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginTop: '2px' }}>
                <span style={{ fontSize: '1.7rem', fontWeight: '800', color: 'var(--accent-orange)', textShadow: '0 0 15px rgba(255, 107, 0, 0.4)' }}>
                  {todayVisitors}
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>Visitors</span>
              </div>
            </div>

            <div style={{ paddingLeft: '1rem', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', display: 'none', minWidth: '140px' }} className="visitor-geo">
              <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Status:</p>
              <p style={{ fontSize: '0.78rem', color: '#00ff9d', fontWeight: '600' }}>● Real-Time Active</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 🚀 MINIMAL CODING & GITHUB METRICS HUB */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '1.8rem' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
          
          {/* MINIMAL LEETCODE CARD */}
          <div 
            className="liquid-glass"
            style={{
              padding: '1.3rem 1.5rem',
              borderLeft: '3px solid #FFA116',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <LeetCodeIcon size={17} />
                  <span style={{ fontWeight: '700', fontSize: '0.92rem', color: '#fff' }}>LeetCode Solving</span>
                </div>
                <span style={{ fontSize: '0.7rem', color: '#00ff9d', background: 'rgba(0, 255, 157, 0.08)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '700' }}>
                  Beats 61.7%
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.1rem', marginBottom: '0.8rem' }}>
                <div>
                  <span style={{ fontSize: '1.7rem', fontWeight: '800', color: '#00f0ff' }}>50</span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginLeft: '0.3rem' }}>Solved</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Acceptance: <strong style={{ color: '#00ff9d' }}>84.8%</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Submissions: <strong style={{ color: '#ff6b00' }}>66</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(0, 255, 157, 0.08)', color: '#00ff9d', fontSize: '0.72rem', fontWeight: '600' }}>
                  Easy: 24
                </span>
                <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(255, 190, 11, 0.08)', color: '#ffbe0b', fontSize: '0.72rem', fontWeight: '600' }}>
                  Medium: 22
                </span>
                <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(255, 0, 85, 0.08)', color: '#ff0055', fontSize: '0.72rem', fontWeight: '600' }}>
                  Hard: 4
                </span>
              </div>
            </div>
          </div>

          {/* MINIMAL GITHUB LIVE ACTIVITY CARD */}
          <div 
            className="liquid-glass"
            style={{
              padding: '1.3rem 1.5rem',
              borderLeft: '3px solid var(--accent-orange)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GithubIcon size={17} color="var(--accent-orange)" />
                  <span style={{ fontWeight: '700', fontSize: '0.92rem', color: '#fff' }}>GitHub Activity</span>
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-orange)', background: 'rgba(255, 107, 0, 0.08)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '700' }}>
                  ● Live Sync
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.1rem', marginBottom: '0.8rem' }}>
                <div>
                  <span style={{ fontSize: '1.7rem', fontWeight: '800', color: '#fff' }}>{githubRepos}</span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--accent-orange)', marginLeft: '0.3rem' }}>+ Repos</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Projects: <strong style={{ color: '#00f0ff' }}>7 Shipped</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Handle: <strong style={{ color: '#fff' }}>@Rajarshi67-pro</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-secondary)', fontSize: '0.72rem' }}>
                  JavaScript
                </span>
                <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-secondary)', fontSize: '0.72rem' }}>
                  Node.js
                </span>
                <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-secondary)', fontSize: '0.72rem' }}>
                  Python
                </span>
                <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-secondary)', fontSize: '0.72rem' }}>
                  Oracle SQL
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Tech Stack Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ marginTop: '2.5rem', textAlign: 'center' }}
      >
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.7rem', textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: '600' }}>
          Core Languages & Technologies
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', justifyContent: 'center' }}>
          {techBadges.map((tech, idx) => (
            <span
              key={idx}
              className="tech-pill"
              style={{
                padding: '0.32rem 0.85rem',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: '500',
                cursor: 'default'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 819px) {
          .desktop-hero-card {
            display: none !important;
          }
          .mobile-profile-hero {
            display: block !important;
          }
        }
        @media (min-width: 640px) {
          .visitor-geo {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
