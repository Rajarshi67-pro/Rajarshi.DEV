import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Sparkles, ExternalLink, ArrowDownToLine, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section style={{ padding: '2rem 0 5rem 0' }}>
      {/* Header & Direct Download Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '950px', margin: '0 auto 2rem auto', flexWrap: 'wrap', gap: '1.2rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.8rem', borderRadius: '30px', background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.2)', marginBottom: '0.5rem' }}>
            <Sparkles size={13} color="var(--accent-blue)" />
            <span style={{ color: 'var(--accent-blue)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.72rem', fontWeight: '700' }}>
              Official Document
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800' }}>
            Curriculum <span className="gradient-text">Vitae (PDF)</span>
          </h1>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            href="/Rajarshi_Chatterjee_CV.pdf"
            download="Rajarshi_Chatterjee_CV.pdf"
            whileHover={{ scale: 1.06, boxShadow: '0 0 25px rgba(255, 107, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1.8rem',
              borderRadius: '10px',
              background: 'var(--accent-orange)',
              color: '#fff',
              border: 'none',
              fontWeight: '700',
              fontSize: '0.95rem',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(255, 107, 0, 0.35)'
            }}
          >
            <ArrowDownToLine size={18} />
            <span>Download Exact PDF</span>
          </motion.a>

          <motion.a
            href="/Rajarshi_Chatterjee_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, boxShadow: '0 0 25px rgba(0, 240, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1.6rem',
              borderRadius: '10px',
              background: 'var(--accent-blue)',
              color: '#050505',
              border: 'none',
              fontWeight: '700',
              fontSize: '0.95rem',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.35)'
            }}
          >
            <Eye size={18} />
            <span>Open in New Tab</span>
          </motion.a>
        </div>
      </div>

      {/* Embedded Live PDF Document Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="liquid-glass"
        style={{
          maxWidth: '950px',
          margin: '0 auto',
          padding: '1.5rem',
          borderRadius: '16px',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={18} color="var(--accent-orange)" />
            <span style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>Rajarshi_Chatterjee_CV.pdf</span>
          </div>

          <a 
            href="/Rajarshi_Chatterjee_CV.pdf" 
            download="Rajarshi_Chatterjee_CV.pdf"
            style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <span>Direct Download</span>
            <Download size={14} />
          </a>
        </div>

        {/* Embedded PDF iframe / object */}
        <div style={{ width: '100%', height: '800px', borderRadius: '10px', overflow: 'hidden', background: '#151515' }}>
          <iframe
            src="/Rajarshi_Chatterjee_CV.pdf"
            title="Rajarshi Chatterjee Resume PDF"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
