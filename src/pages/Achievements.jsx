import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, CheckCircle2, BookCheck, ShieldCheck, Sparkles } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy size={24} color="#ff6b00" />,
      badge: "National Level",
      title: "Smart India Hackathon Finalist (2025)",
      organization: "Ministry of Education & AICTE",
      desc: "Selected as finalist in Smart India Hackathon (SIH 2025), presenting innovative software and algorithmic solutions to solve real-world industry challenges.",
      accent: "#ff6b00"
    },
    {
      icon: <Award size={24} color="#00f0ff" />,
      badge: "Leadership",
      title: "Sponsorship Co-Head — Eclectica 2025–26",
      organization: "Techno Main Salt Lake",
      desc: "Led corporate sponsorship outreach, brand partnerships, and cross-functional team coordination for the flagship annual festival at TMSL.",
      accent: "#00f0ff"
    },
    {
      icon: <Star size={24} color="#ff007f" />,
      badge: "Industry Experience",
      title: "Web Development Intern",
      organization: "Pinnacle Labs (Dec 2024 – Jan 2025)",
      desc: "Successfully completed web engineering internship, delivering responsive portfolio layouts, interactive calculator apps, and debugging workflows.",
      accent: "#ff007f"
    },
    {
      icon: <ShieldCheck size={24} color="#00ff9d" />,
      badge: "Academic Leadership",
      title: "Class Representative & Core Committee Member",
      organization: "Department of CSE, TMSL",
      desc: "Serving as Class Representative and core organizer, acting as a liaison between faculty and students while coordinating technical seminars.",
      accent: "#00ff9d"
    }
  ];

  const certifications = [
    {
      title: "NPTEL Java Certification",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "November 2025",
      skills: ["Core Java", "OOP", "Multithreading", "Collections"],
      accent: "#ff6b00"
    },
    {
      title: "Database Management System (DBMS)",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "March 2026",
      skills: ["Relational Algebra", "SQL", "Indexing", "ACID Transactions"],
      accent: "#00f0ff"
    },
    {
      title: "Programming with Python",
      issuer: "University of Michigan (Coursera)",
      date: "April 2024",
      skills: ["Python 3", "Data Structures", "Web Scraping", "Algorithms"],
      accent: "#ff007f"
    }
  ];

  return (
    <section style={{ padding: '1.5rem 0 4rem 0' }}>
      {/* Header */}
      <div className="page-header" style={{ marginBottom: '2.5rem' }}>
        <div className="rainbow-badge" style={{ marginBottom: '0.8rem' }}>
          <Sparkles size={13} color="var(--accent-blue)" />
          <span style={{ color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '700' }}>
            Honors & Accreditations
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
          Achievements & <span className="rainbow-text">Certifications</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          National hackathon finalizations, college leadership, and premier certifications.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Achievements Section */}
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Trophy size={20} color="var(--accent-orange)" />
            <span>Key Achievements & Leadership</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="liquid-glass"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: `3px solid ${item.accent}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div style={{ padding: '0.6rem', background: 'rgba(255,255,255,0.04)', borderRadius: '10px' }}>
                    {item.icon}
                  </div>
                  <span style={{ padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: item.accent, fontSize: '0.75rem', fontWeight: '700' }}>
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '0.25rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: item.accent, fontSize: '0.82rem', fontWeight: '600', marginBottom: '0.6rem' }}>
                  {item.organization}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookCheck size={20} color="#00f0ff" />
            <span>Academic Certifications</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="liquid-glass"
                style={{
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${cert.accent}`
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', color: cert.accent, fontWeight: '700' }}>
                      {cert.issuer}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.04)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                      {cert.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#fff', marginBottom: '0.8rem' }}>
                    {cert.title}
                  </h3>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.8rem' }}>
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          padding: '0.2rem 0.5rem',
                          background: 'rgba(255,255,255,0.04)',
                          borderRadius: '4px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.75rem'
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: cert.accent, fontSize: '0.82rem', fontWeight: '600', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <CheckCircle2 size={13} color={cert.accent} />
                  <span>Verified Credential</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
