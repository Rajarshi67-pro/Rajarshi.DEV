import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, School, Sparkles, Calendar, MapPin } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      period: "2023 – 2027",
      type: "Education",
      title: "B.Tech in Computer Science & Engineering",
      institution: "Techno Main Salt Lake, Kolkata",
      meta: "CGPA: 6.191",
      icon: <GraduationCap size={18} color="#ff6b00" />,
      color: "#ff6b00",
      description: "Core Computer Science curriculum focusing on DSA, Database Management Systems, Operating Systems, Computer Networks, OOP, and Full-Stack Engineering. Class Representative & active hackathon contributor."
    },
    {
      period: "2025 – 2026",
      type: "Leadership & Honors",
      title: "Smart India Hackathon Finalist & Sponsorship Co-Head",
      institution: "SIH 2025 & Team Eclectica, TMSL",
      meta: "National Finalist",
      icon: <Award size={18} color="#00f0ff" />,
      color: "#00f0ff",
      description: "Selected as finalist in Smart India Hackathon (SIH 2025). Appointed Sponsorship Co-Head & Core Committee Member for Eclectica 2025–26 at Techno Main Salt Lake, leading corporate sponsorships and team management."
    },
    {
      period: "Dec 2024 – Jan 2025",
      type: "Experience",
      title: "Web Development Intern",
      institution: "Pinnacle Labs",
      meta: "Internship",
      icon: <Briefcase size={18} color="#ff007f" />,
      color: "#ff007f",
      description: "Engineered responsive web applications and personal portfolios using HTML5, CSS3, and JavaScript. Built interactive calculator tools, UI designs, and production debugging workflows."
    },
    {
      period: "2023",
      type: "Education",
      title: "Higher Secondary (CBSE Class XII)",
      institution: "Apeejay School",
      meta: "Score: 68.2%",
      icon: <School size={18} color="#00ff9d" />,
      color: "#00ff9d",
      description: "Completed Senior Secondary examination with focus on Physics, Chemistry, and Mathematics (PCM)."
    },
    {
      period: "2021",
      type: "Education",
      title: "Secondary School (ICSE Class X)",
      institution: "Garden High School",
      meta: "Score: 85.0%",
      icon: <School size={18} color="#ffbe0b" />,
      color: "#ffbe0b",
      description: "Graduated with 85% distinction under ICSE board, establishing early passion for computer science and technology."
    }
  ];

  return (
    <section style={{ padding: '1.5rem 0 4rem 0' }}>
      <div className="page-header" style={{ marginBottom: '2.5rem' }}>
        <div className="rainbow-badge" style={{ marginBottom: '0.8rem' }}>
          <Sparkles size={13} color="var(--accent-blue)" />
          <span style={{ color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '700' }}>
            Academic & Career Timeline
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
          My <span className="rainbow-text">Journey</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Educational milestones, industry internships, and leadership experiences.
        </p>
      </div>

      <div style={{ position: 'relative', maxWidth: '850px', margin: '2rem auto 0 auto', padding: '0 0.5rem' }}>
        
        {/* Timeline Center Rainbow Gradient Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '20px',
          bottom: '20px',
          transform: 'translateX(-50%)',
          width: '2.5px',
          background: 'linear-gradient(to bottom, #ff6b00, #ff007f, #00f0ff, #00ff9d, #ffbe0b)',
          borderRadius: '3px',
          opacity: 0.6
        }} className="timeline-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                style={{
                  display: 'flex',
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  position: 'relative',
                  width: '100%'
                }}
                className="timeline-item"
              >
                {/* Milestone Card */}
                <div 
                  className="liquid-glass" 
                  style={{
                    width: '46%',
                    padding: '1.5rem',
                    position: 'relative',
                    borderLeft: `3px solid ${item.color}`
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.2rem 0.55rem',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '6px',
                      color: item.color,
                      fontSize: '0.75rem',
                      fontWeight: '700'
                    }}>
                      <Calendar size={12} />
                      {item.period}
                    </span>

                    <span style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-secondary)',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '4px',
                      fontWeight: '600'
                    }}>
                      {item.meta}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '0.3rem' }}>
                    {item.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: item.color, fontSize: '0.84rem', fontWeight: '600', marginBottom: '0.6rem' }}>
                    <MapPin size={13} />
                    <span>{item.institution}</span>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>

                {/* Timeline Center Node */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '20px',
                  transform: 'translateX(-50%)',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: '#000000',
                  border: `2px solid ${item.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: `0 0 12px ${item.color}50`
                }} className="timeline-node">
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 18px !important;
            transform: none !important;
          }
          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 45px !important;
          }
          .timeline-item .liquid-glass {
            width: 100% !important;
          }
          .timeline-node {
            left: 18px !important;
            transform: translateX(-50%) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Journey;
