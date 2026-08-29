import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

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
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section style={{ padding: '1.5rem 0 4rem 0' }}>
      {/* Header */}
      <div className="page-header" style={{ marginBottom: '2.5rem' }}>
        <div className="rainbow-badge" style={{ marginBottom: '0.8rem' }}>
          <Sparkles size={13} color="var(--accent-orange)" />
          <span style={{ color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '700' }}>
            Let's Collaborate
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
          Get In <span className="rainbow-text">Touch</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Reach out for software opportunities, projects, or technical collaboration.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Contact Details & Social Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="liquid-glass"
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid var(--accent-orange)' }}
        >
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.6rem', color: '#fff' }}>
              Contact Details
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.8rem' }}>
              Feel free to call, email, or connect via GitHub and LinkedIn.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
              
              {/* Email */}
              <a 
                href="mailto:rajarshighs7@gmail.com" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', textDecoration: 'none' }}
              >
                <div style={{ padding: '0.65rem', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="#00f0ff" />
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</p>
                  <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>rajarshighs7@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+919007469993" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', textDecoration: 'none' }}
              >
                <div style={{ padding: '0.65rem', background: 'rgba(255, 107, 0, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={18} color="var(--accent-orange)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone / WhatsApp</p>
                  <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>+91 9007469993</p>
                </div>
              </a>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff' }}>
                <div style={{ padding: '0.65rem', background: 'rgba(0, 255, 157, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={18} color="#00ff9d" />
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Location</p>
                  <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>Kolkata, West Bengal, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '0.8rem' }}>
              Online Profiles
            </h3>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <motion.a
                href="https://github.com/Rajarshi67-pro"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 1rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '0.82rem',
                  fontWeight: '600'
                }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} color="var(--text-secondary)" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/rajarshi-chatterjee-3020a533b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 1rem',
                  background: 'rgba(0, 240, 255, 0.08)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  borderRadius: '8px',
                  color: '#00f0ff',
                  fontSize: '0.82rem',
                  fontWeight: '600'
                }}
              >
                <LinkedinIcon size={16} color="#00f0ff" />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} color="#00f0ff" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="liquid-glass"
          style={{ padding: '2rem', borderTop: '4px solid #00f0ff' }}
        >
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.6rem', color: '#fff' }}>
            Send Message
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Fill in the form and I will respond to your email.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                borderRadius: '12px'
              }}
            >
              <CheckCircle2 size={40} color="#00f0ff" style={{ margin: '0 auto 0.8rem auto' }} />
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Message Received!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Thank you for reaching out, Rajarshi will reply soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.3rem', fontWeight: '500' }}>Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe" 
                  style={{
                    width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff', fontSize: '0.9rem', outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.3rem', fontWeight: '500' }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@example.com" 
                  style={{
                    width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff', fontSize: '0.9rem', outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.3rem', fontWeight: '500' }}>Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship / Collaboration" 
                  style={{
                    width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff', fontSize: '0.9rem', outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.3rem', fontWeight: '500' }}>Message</label>
                <textarea 
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write message..." 
                  style={{
                    width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff', fontSize: '0.9rem', resize: 'vertical', outline: 'none'
                  }}
                />
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: 'var(--accent-orange)',
                  border: 'none',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  marginTop: '0.3rem',
                  boxShadow: '0 0 15px rgba(255, 107, 0, 0.4)'
                }}
              >
                <span>Send Message</span>
                <Send size={15} />
              </motion.button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
