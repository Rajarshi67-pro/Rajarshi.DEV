import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Cpu, Globe2, Wrench, Sparkles, Compass, Camera, MessageSquare, BookOpen, Layers } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      color: "#ff6b00",
      icon: <Code2 size={20} color="#ff6b00" />,
      skills: ["C", "C++", "Java", "Python", "JavaScript"]
    },
    {
      category: "Web & Frontend",
      color: "#ff007f",
      icon: <Globe2 size={20} color="#ff007f" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Liquid Glassmorphism"]
    },
    {
      category: "Backend & Security",
      color: "#00f0ff",
      icon: <Server size={20} color="#00f0ff" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Role-Based Access"]
    },
    {
      category: "Databases & Storage",
      color: "#00ff9d",
      icon: <Database size={20} color="#00ff9d" />,
      skills: ["MongoDB", "MySQL", "Oracle Database", "SQL", "MongoDB Atlas"]
    },
    {
      category: "Core Computer Science",
      color: "#ffbe0b",
      icon: <Layers size={20} color="#ffbe0b" />,
      skills: ["DSA", "OOPs", "DBMS", "Operating Systems", "Computer Networks", "Computer Architecture", "Automata (FLAT)"]
    },
    {
      category: "AI / Machine Learning",
      color: "#8a2be2",
      icon: <Cpu size={20} color="#8a2be2" />,
      skills: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Demand Forecasting"]
    },
    {
      category: "Tools & Deployment",
      color: "#ff6b00",
      icon: <Wrench size={20} color="#ff6b00" />,
      skills: ["Git", "GitHub", "Vite", "Render", "Vercel", "npm", "Postman"]
    }
  ];

  const areasOfInterest = [
    { name: "Software Engineering", color: "#ff6b00" },
    { name: "Full-Stack Web Development", color: "#ff007f" },
    { name: "Backend Architecture & APIs", color: "#00f0ff" },
    { name: "Artificial Intelligence & ML", color: "#8a2be2" },
    { name: "Database Systems & Optimization", color: "#00ff9d" },
    { name: "Cloud Technologies", color: "#ffbe0b" },
    { name: "Data Structures & Algorithms", color: "#ff6b00" }
  ];

  const languages = [
    { lang: "English", level: "Fluent", color: "#00f0ff" },
    { lang: "Bengali", level: "Fluent", color: "#ff007f" },
    { lang: "Hindi", level: "Intermediate", color: "#ffbe0b" }
  ];

  return (
    <section style={{ padding: '1.5rem 0 4rem 0' }}>
      {/* Header */}
      <div className="page-header" style={{ marginBottom: '2.5rem' }}>
        <div className="rainbow-badge" style={{ marginBottom: '0.8rem' }}>
          <Sparkles size={13} color="var(--accent-orange)" />
          <span style={{ color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '700' }}>
            Get To Know Me
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
          About <span className="rainbow-text">Rajarshi Chatterjee</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Computer Science undergraduate, full-stack engineer, and academic leader.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '1050px', margin: '0 auto' }}>
        
        {/* Main Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="liquid-glass"
          style={{ padding: '2.2rem', borderLeft: '4px solid var(--accent-orange)' }}
        >
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <BookOpen size={20} color="var(--accent-orange)" />
            <span>Profile Summary</span>
          </h2>
          <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1rem' }}>
            A motivated <strong>Computer Science and Engineering</strong> undergraduate at <strong>Techno Main Salt Lake, Kolkata (2023–2027)</strong> with strong problem-solving and programming skills. Passionate about software development, database systems, and modern full-stack technologies.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
            Experienced in academic leadership as a <strong>Class Representative</strong> and <strong>Core Committee Member & Sponsorship Co-Head</strong> of Team Eclectica, demonstrating strong teamwork, communication, coordination, and organizational abilities. Eager to apply technical knowledge to real-world challenges, learn emerging technologies, and contribute effectively to innovative software engineering projects.
          </p>
        </motion.div>

        {/* Technical Skills Categorized with Rainbow Accent Cards */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800' }}>
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Core technologies and frameworks categorized.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="liquid-glass"
                style={{ padding: '1.5rem', borderTop: `3px solid ${cat.color}` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: '8px' }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#fff' }}>{cat.category}</h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: '500'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Areas of Interest & Communication */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          {/* Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass"
            style={{ padding: '1.8rem', borderLeft: '3px solid var(--accent-orange)' }}
          >
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Compass size={18} color="var(--accent-orange)" />
              <span>Areas of Interest</span>
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {areasOfInterest.map((area, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.35rem 0.8rem',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${area.color}40`,
                    color: '#fff',
                    fontSize: '0.82rem',
                    fontWeight: '600'
                  }}
                >
                  <span style={{ color: area.color, marginRight: '4px' }}>•</span>
                  {area.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages & Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass"
            style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', borderLeft: '3px solid #00f0ff' }}
          >
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageSquare size={18} color="#00f0ff" />
                <span>Languages</span>
              </h3>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {languages.map((l, idx) => (
                  <div key={idx} style={{ padding: '0.4rem 0.8rem', background: 'rgba(255, 255, 255, 0.04)', border: `1px solid ${l.color}35`, borderRadius: '8px' }}>
                    <span style={{ fontWeight: '700', color: '#fff', fontSize: '0.85rem' }}>{l.lang}</span>
                    <span style={{ color: l.color, fontSize: '0.78rem', marginLeft: '0.3rem' }}>({l.level})</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Camera size={18} color="#ff007f" />
                <span>Hobbies & Interests</span>
              </h3>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', fontSize: '0.85rem' }}>
                  🌍 Exploring new places
                </span>
                <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', fontSize: '0.85rem' }}>
                  📸 Photography
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
