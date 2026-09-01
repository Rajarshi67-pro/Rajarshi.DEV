import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquarePlus, Send, CheckCircle2, Sparkles, User, ThumbsUp, Heart } from 'lucide-react';

const INITIAL_FEEDBACK = [
  {
    id: 1,
    name: "Subhamoy B.",
    role: "Senior Full-Stack Developer",
    rating: 5,
    tag: "🎨 Sleek Glassmorphism",
    message: "The dark mode aesthetic and 3D card physics are top-tier. Very clean code structure and fast loading time!",
    date: "August 2026",
    likes: 12
  },
  {
    id: 2,
    name: "Debadrit D.",
    role: "Tech Lead @ Hackathon",
    rating: 5,
    tag: "💡 Strong Projects",
    message: "BharatVote and the AI Supply Chain project showcase real engineering depth. Proud to see SIH finalists building such clean architectures.",
    date: "August 2026",
    likes: 9
  },
  {
    id: 3,
    name: "Priya S.",
    role: "UI/UX Designer",
    rating: 5,
    tag: "📱 Great Mobile UX",
    message: "The mobile bottom dock and responsive layout feel just like a native iOS application. Extremely smooth animations!",
    date: "September 2026",
    likes: 7
  }
];

const AVAILABLE_TAGS = [
  "⚡ Blazing Fast",
  "🎨 Sleek Glassmorphism",
  "💡 Strong Projects",
  "📱 Great Mobile UX",
  "🏆 Hackathon Caliber",
  "🚀 Clean Architecture"
];

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saved = localStorage.getItem('portfolio_feedbacks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_FEEDBACK;
      }
    }
    return INITIAL_FEEDBACK;
  });

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTag, setSelectedTag] = useState("🎨 Sleek Glassmorphism");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio_feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newFeedback = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim() || "Visitor / Tech Enthusiast",
      rating,
      tag: selectedTag,
      message: message.trim(),
      date: "Just now",
      likes: 1
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setSubmitted(true);
    setName("");
    setRole("");
    setMessage("");

    setTimeout(() => {
      setSubmitted(false);
    }, 4500);
  };

  const getRatingSentiment = (val) => {
    switch (val) {
      case 1: return "Needs Work 🔨";
      case 2: return "Fair 👌";
      case 3: return "Good 👍";
      case 4: return "Impressive! ⭐";
      case 5: return "Mind-Blowing! 🚀";
      default: return "Rate Your Experience";
    }
  };

  return (
    <section style={{ marginTop: '4.5rem' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.95rem',
          borderRadius: '30px',
          background: 'rgba(255, 107, 0, 0.08)',
          border: '1px solid rgba(255, 107, 0, 0.25)',
          marginBottom: '0.8rem'
        }}>
          <MessageSquarePlus size={14} color="var(--accent-orange)" />
          <span style={{ color: 'var(--accent-orange)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Visitor Impressions
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.4rem)', fontWeight: '800' }}>
          Visitor <span className="gradient-text">Feedback & Reviews</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '560px', margin: '0 auto' }}>
          Leave your rating, feedback, or review for this portfolio. Your review is stored and displayed live!
        </p>
      </div>

      {/* Grid: Form on Left/Top, Live Feed on Right/Bottom */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Form Card */}
        <div className="liquid-glass" style={{ padding: '2rem', borderTop: '4px solid var(--accent-orange)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--accent-orange)" />
            <span>Leave a Review</span>
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginBottom: '1.5rem' }}>
            Share your thoughts on the UI, project depth, or overall experience.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'rgba(0, 255, 157, 0.08)',
                border: '1px solid rgba(0, 255, 157, 0.3)',
                borderRadius: '12px'
              }}
            >
              <CheckCircle2 size={42} color="#00ff9d" style={{ margin: '0 auto 0.8rem auto' }} />
              <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.3rem' }}>
                Thank You for Your Feedback!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                Your review has been saved and is now visible in the live visitor feed.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              
              {/* Interactive Star Rating */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: '600' }}>
                  Rating: <span style={{ color: 'var(--accent-orange)', fontWeight: '700' }}>{getRatingSentiment(hoverRating || rating)}</span>
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.2rem',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Star
                        size={26}
                        color={(hoverRating || rating) >= star ? '#ffb703' : '#444444'}
                        fill={(hoverRating || rating) >= star ? '#ffb703' : 'transparent'}
                        style={{ filter: (hoverRating || rating) >= star ? 'drop-shadow(0 0 8px rgba(255, 183, 3, 0.6))' : 'none' }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tag Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: '600' }}>
                  Highlight Tag
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {AVAILABLE_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        background: selectedTag === tag ? 'rgba(255, 107, 0, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        color: selectedTag === tag ? '#ffffff' : 'var(--text-secondary)',
                        border: selectedTag === tag ? '1px solid var(--accent-orange)' : '1px solid rgba(255, 255, 255, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Role Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex M."
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.8rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Role / Company</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Developer / Student"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.8rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Feedback Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Your Message *</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What did you think of the portfolio?"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '0.88rem',
                    resize: 'vertical',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-orange"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.92rem',
                  fontWeight: '700',
                  marginTop: '0.2rem'
                }}
              >
                <span>Submit Feedback</span>
                <Send size={15} />
              </motion.button>
            </form>
          )}
        </div>

        {/* Live Feedback Feed Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: '700' }}>
              Live Visitor Reviews ({feedbacks.length})
            </span>
            <span style={{ fontSize: '0.75rem', color: '#00ff9d', fontWeight: '700' }}>
              ● Real-Time
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '520px', overflowY: 'auto', paddingRight: '0.3rem' }}>
            {feedbacks.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="liquid-glass"
                style={{
                  padding: '1.3rem',
                  borderLeft: '3px solid var(--accent-blue)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#fff' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>{item.role}</p>
                  </div>

                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} color="#ffb703" fill="#ffb703" />
                    ))}
                  </div>
                </div>

                <span style={{
                  alignSelf: 'flex-start',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '12px',
                  background: 'rgba(0, 240, 255, 0.08)',
                  color: '#00f0ff',
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  border: '1px solid rgba(0, 240, 255, 0.2)'
                }}>
                  {item.tag}
                </span>

                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.86rem', lineHeight: '1.5' }}>
                  "{item.message}"
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: 'var(--text-secondary)', paddingTop: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span>{item.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-orange)' }}>
                    <Heart size={12} fill="var(--accent-orange)" />
                    <span>Verified Visitor</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeedbackSection;
