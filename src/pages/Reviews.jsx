import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquarePlus, Send, CheckCircle2, Sparkles, User, Heart, MessageSquare } from 'lucide-react';

const AVAILABLE_TAGS = [
  "⚡ Blazing Fast",
  "🎨 Sleek Glassmorphism",
  "💡 Strong Projects",
  "📱 Great Mobile UX",
  "🏆 Hackathon Caliber",
  "🚀 Clean Architecture"
];

const Reviews = () => {
  // Load real reviews from localStorage, default to 0 reviews (empty array)
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('portfolio_user_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTag, setSelectedTag] = useState("🎨 Sleek Glassmorphism");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio_user_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: role.trim() || "Visitor / Tech Enthusiast",
      rating,
      tag: selectedTag,
      message: message.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    // Dynamically add new review and update count immediately
    setReviews(prev => [newReview, ...prev]);
    setSubmitted(true);
    setName("");
    setRole("");
    setMessage("");

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const getRatingSentiment = (val) => {
    switch (val) {
      case 1: return "Needs Improvement 🔨";
      case 2: return "Fair 👌";
      case 3: return "Good 👍";
      case 4: return "Impressive! ⭐";
      case 5: return "Mind-Blowing! 🚀";
      default: return "Rate Your Experience";
    }
  };

  return (
    <section style={{ padding: '1.5rem 0 4rem 0' }}>
      {/* Page Header */}
      <div className="page-header" style={{ marginBottom: '2.5rem' }}>
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
            Community Impressions
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
          Visitor <span className="gradient-text">Reviews</span>
        </h1>

        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Leave your feedback, ratings, and impressions. Real reviews submitted by visitors appear dynamically below.
        </p>

        {/* Live Dynamic Review Counter Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.1rem',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff9d', boxShadow: '0 0 8px #00ff9d' }} />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>Total Verified Reviews:</span>
            <span style={{ color: '#00f0ff', fontSize: '1rem', fontWeight: '800' }}>{reviews.length}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Submit Form (Left) & Reviews Feed (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1050px', margin: '0 auto' }}>
        
        {/* Review Submission Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="liquid-glass"
          style={{ padding: '2rem', borderTop: '4px solid var(--accent-orange)' }}
        >
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--accent-orange)" />
            <span>Write a Review</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginBottom: '1.5rem' }}>
            Share your feedback on the portfolio, project architecture, or user experience.
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
              <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.3rem' }}>
                Review Published!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                Thank you for your feedback. Your review is now live in the community feed.
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
                      whileHover={{ scale: 1.2 }}
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.8rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex"
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
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Role / Title</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Developer"
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

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', fontWeight: '500' }}>Review Message *</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts..."
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
                <span>Submit Review</span>
                <Send size={15} />
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Live Reviews Feed List (Right Column) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: '700' }}>
              Visitor Feed ({reviews.length})
            </span>
            <span style={{ fontSize: '0.75rem', color: '#00ff9d', fontWeight: '700' }}>
              ● Live Sync
            </span>
          </div>

          {reviews.length === 0 ? (
            /* Clean Empty State when review count is 0 */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="liquid-glass"
              style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                border: '1px dashed rgba(255, 255, 255, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(255, 107, 0, 0.2)'
              }}>
                <MessageSquare size={22} color="var(--accent-orange)" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: '700' }}>No reviews yet</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', maxWidth: '320px', lineHeight: '1.5' }}>
                Be the first to share your thoughts and rate your experience using the form!
              </p>
            </motion.div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '560px', overflowY: 'auto', paddingRight: '0.3rem' }}>
              <AnimatePresence>
                {reviews.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
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
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
