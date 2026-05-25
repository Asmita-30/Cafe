// src/page/live-music.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import liveMusicImg from '../assets/services/Live Music Nights.png';

const LiveMusic = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    eventType: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎸 Thank you ${formData.name}! Your Live Music Night booking has been confirmed. Get ready for an amazing musical experience!`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '',
      eventType: '',
      message: ''
    });
    setSelectedEvent(null);
  };

  const events = [
    {
      id: 1,
      name: 'Acoustic Nights',
      price: 'Free Entry',
      icon: '🎸',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      day: 'Every Friday',
      time: '7:00 PM - 10:00 PM',
      features: [
        'Live Acoustic Performances',
        'Unplugged Sessions',
        'Singer-Songwriter Showcase',
        'Open Mic Opportunities',
        'Special Coffee Discounts'
      ]
    },
    {
      id: 2,
      name: 'Jazz Evenings',
      price: '₹499',
      icon: '🎷',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      popular: true,
      day: 'Every Saturday',
      time: '8:00 PM - 11:00 PM',
      features: [
        'Professional Jazz Band',
        'Smooth Jazz & Blues',
        'Special Cocktail Menu',
        'Complimentary Snacks',
        'Reserved Seating'
      ]
    },
    {
      id: 3,
      name: 'Rock The Night',
      price: '₹799',
      icon: '🤘',
      color: '#ec4899',
      bgColor: '#fce7f3',
      day: 'Last Saturday of Month',
      time: '8:00 PM - 12:00 AM',
      features: [
        'Live Rock Band',
        'High Energy Performance',
        'Dance Floor Access',
        'Welcome Drink Included',
        'Late Night Menu'
      ]
    },
    {
      id: 4,
      name: 'Bollywood Beats',
      price: '₹599',
      icon: '🎵',
      color: '#22c55e',
      bgColor: '#dcfce7',
      day: 'Every Sunday',
      time: '7:30 PM - 10:30 PM',
      features: [
        'Bollywood Live Band',
        'Popular Hit Songs',
        'Retro & New Mix',
        'Themed Decorations',
        'Free Soft Drinks'
      ]
    }
  ];

  const upcomingArtists = [
    { id: 1, name: 'The Acoustic Project', genre: 'Folk/Rock', date: 'June 15, 2026', icon: '🎸' },
    { id: 2, name: 'Soulful Strings', genre: 'Jazz/Blues', date: 'June 22, 2026', icon: '🎷' },
    { id: 3, name: 'Rhythm Warriors', genre: 'Rock/Pop', date: 'June 29, 2026', icon: '🤘' },
    { id: 4, name: 'Melody Makers', genre: 'Bollywood', date: 'July 6, 2026', icon: '🎵' },
    { id: 5, name: 'Electric Echoes', genre: 'Electronic', date: 'July 13, 2026', icon: '🎧' },
    { id: 6, name: 'Classical Fusion', genre: 'Classical', date: 'July 20, 2026', icon: '🎻' }
  ];

  const movingItems = [
    { icon: '🎸', name: 'Guitar' },
    { icon: '🎷', name: 'Jazz' },
    { icon: '🤘', name: 'Rock' },
    { icon: '🎵', name: 'Music' },
    { icon: '🎤', name: 'Vocals' },
    { icon: '🥁', name: 'Drums' },
    { icon: '🎹', name: 'Piano' },
    { icon: '🎻', name: 'Violin' },
    { icon: '🎧', name: 'Audio' },
    { icon: '💃', name: 'Dance' },
  ];

  const eventTypes = [
    'Private Party',
    'Corporate Event',
    'Birthday Celebration',
    'Anniversary',
    'Date Night',
    'Friends Gathering'
  ];

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      paddingTop: '80px',
    },
    heroSection: {
      position: 'relative',
      padding: '120px 20px',
      textAlign: 'center',
      background: `linear-gradient(135deg, rgba(0,0,0,0.65), rgba(0,0,0,0.5)), url(${liveMusicImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
    },
    heroTitle: {
      fontSize: '56px',
      marginBottom: '20px',
      fontWeight: 'bold',
      textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
    },
    heroSubtitle: {
      fontSize: '20px',
      maxWidth: '700px',
      margin: '0 auto',
      opacity: 0.95,
    },
    heroBtn: {
      marginTop: '30px',
      padding: '14px 40px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    section: {
      padding: '80px 20px',
    },
    sectionAlt: {
      padding: '80px 20px',
      background: '#0a0a0a',
      color: 'white',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '38px',
      color: '#78350f',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    sectionTitleLight: {
      textAlign: 'center',
      fontSize: '38px',
      color: '#fef3c7',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    sectionSubtitle: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#6b7280',
      marginBottom: '50px',
    },
    sectionSubtitleLight: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#d1d5db',
      marginBottom: '50px',
    },
    eventsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      maxWidth: '1300px',
      margin: '0 auto',
    },
    eventCard: {
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, boxShadow 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    popularBadge: {
      position: 'absolute',
      top: '20px',
      right: '-30px',
      background: '#f59e0b',
      color: 'white',
      padding: '6px 40px',
      transform: 'rotate(45deg)',
      fontSize: '12px',
      fontWeight: 'bold',
      zIndex: 2,
    },
    eventHeader: {
      padding: '30px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
    },
    eventIcon: {
      fontSize: '50px',
      marginBottom: '15px',
    },
    eventName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '10px',
    },
    eventPrice: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#f59e0b',
      marginBottom: '5px',
    },
    eventDay: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#6b7280',
      marginTop: '5px',
    },
    eventFeatures: {
      padding: '30px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 0',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '14px',
      color: '#4b5563',
    },
    selectBtn: {
      width: 'calc(100% - 40px)',
      margin: '0 20px 25px',
      padding: '12px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    artistsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    artistCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '25px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    artistIcon: {
      fontSize: '50px',
      marginBottom: '15px',
    },
    artistName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#fef3c7',
      marginBottom: '8px',
    },
    artistGenre: {
      fontSize: '13px',
      color: '#d1d5db',
      marginBottom: '5px',
    },
    artistDate: {
      fontSize: '12px',
      color: '#f59e0b',
    },
    formSection: {
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      padding: '80px 20px',
    },
    formContainer: {
      maxWidth: '700px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '30px',
      padding: '40px',
      boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
    },
    formTitle: {
      fontSize: '28px',
      color: '#78350f',
      marginBottom: '10px',
      textAlign: 'center',
    },
    formSubtitle: {
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: '30px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#374151',
    },
    input: {
      width: '100%',
      padding: '14px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      transition: 'borderColor 0.3s ease',
      outline: 'none',
    },
    select: {
      width: '100%',
      padding: '14px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      backgroundColor: 'white',
      cursor: 'pointer',
    },
    textarea: {
      width: '100%',
      padding: '14px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      minHeight: '100px',
      outline: 'none',
    },
    submitBtn: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    movingSection: {
      overflow: 'hidden',
      padding: '40px 0',
      background: '#fff',
    },
    movingTrack: {
      display: 'flex',
      gap: '20px',
      animation: 'scroll 30s linear infinite',
      width: 'max-content',
    },
    movingItem: {
      flex: '0 0 auto',
      width: '180px',
      textAlign: 'center',
      padding: '20px',
      background: '#fefaf5',
      borderRadius: '20px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    },
    movingIcon: {
      fontSize: '45px',
      marginBottom: '10px',
    },
    movingText: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#78350f',
    },
    quoteSection: {
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
      padding: '50px 20px',
      textAlign: 'center',
    },
    quoteText: {
      fontSize: '24px',
      color: '#78350f',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontStyle: 'italic',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.heroTitle}
        >
          🎸 Live Music Nights at Café Aura 🎵
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.heroSubtitle}
        >
          Experience the magic of live music every week. From acoustic sessions to rock bands, 
          we bring the best talent to your table.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.heroBtn}
          onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Reserve Your Seat →
        </motion.button>
      </div>

      {/* Quote Section */}
      <div style={styles.quoteSection}>
        <p style={styles.quoteText}>
          "Where words fail, music speaks. Join us for unforgettable nights filled with rhythm, 
          melody, and great company!"
        </p>
      </div>

      {/* Moving Images Section */}
      <div style={styles.movingSection}>
        <div style={styles.movingTrack} className="moving-track">
          {[...movingItems, ...movingItems].map((item, idx) => (
            <div key={idx} style={styles.movingItem}>
              <div style={styles.movingIcon}>{item.icon}</div>
              <div style={styles.movingText}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎤 Weekly Music Events 🎤</h2>
        <p style={styles.sectionSubtitle}>Something for every music lover</p>
        
        <div style={styles.eventsGrid}>
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={styles.eventCard}
              onClick={() => setSelectedEvent(event)}
            >
              {event.popular && <div style={styles.popularBadge}>⭐ MOST POPULAR</div>}
              <div style={styles.eventHeader}>
                <div style={styles.eventIcon}>{event.icon}</div>
                <h3 style={styles.eventName}>{event.name}</h3>
                <div style={styles.eventPrice}>{event.price}</div>
                <div style={styles.eventDay}>{event.day} | {event.time}</div>
              </div>
              <div style={styles.eventFeatures}>
                {event.features.map((feature, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button style={styles.selectBtn}>Book Tickets</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Artists Section */}
      <div style={styles.sectionAlt}>
        <h2 style={styles.sectionTitleLight}>🎵 Upcoming Artists 🎵</h2>
        <p style={styles.sectionSubtitleLight}>Get ready for amazing performances</p>
        
        <div style={styles.artistsGrid}>
          {upcomingArtists.map((artist) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              style={styles.artistCard}
            >
              <div style={styles.artistIcon}>{artist.icon}</div>
              <h3 style={styles.artistName}>{artist.name}</h3>
              <p style={styles.artistGenre}>{artist.genre}</p>
              <p style={styles.artistDate}>📅 {artist.date}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Music Highlights */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>✨ Why Join Our Music Nights ✨</h2>
        <p style={styles.sectionSubtitle}>An experience you'll never forget</p>
        
        <div style={styles.eventsGrid}>
          <div style={styles.eventCard}>
            <div style={{ fontSize: '50px', textAlign: 'center', paddingTop: '30px' }}>🎤</div>
            <div style={styles.packageFeatures}>
              <div style={styles.featureItem}><span>✓</span><span>Top Local & National Artists</span></div>
              <div style={styles.featureItem}><span>✓</span><span>Intimate Concert Setting</span></div>
              <div style={styles.featureItem}><span>✓</span><span>Great Acoustics</span></div>
            </div>
          </div>
          <div style={styles.eventCard}>
            <div style={{ fontSize: '50px', textAlign: 'center', paddingTop: '30px' }}>🍽️</div>
            <div style={styles.packageFeatures}>
              <div style={styles.featureItem}><span>✓</span><span>Special Food & Drink Menu</span></div>
              <div style={styles.featureItem}><span>✓</span><span>Comfortable Seating</span></div>
              <div style={styles.featureItem}><span>✓</span><span>Friendly Atmosphere</span></div>
            </div>
          </div>
          <div style={styles.eventCard}>
            <div style={{ fontSize: '50px', textAlign: 'center', paddingTop: '30px' }}>🎫</div>
            <div style={styles.packageFeatures}>
              <div style={styles.featureItem}><span>✓</span><span>Affordable Pricing</span></div>
              <div style={styles.featureItem}><span>✓</span><span>Group Discounts Available</span></div>
              <div style={styles.featureItem}><span>✓</span><span>Easy Online Booking</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div id="booking-form" style={styles.formSection}>
        <div style={styles.formContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={styles.formTitle}>🎸 Reserve Your Spot 🎸</h2>
            <p style={styles.formSubtitle}>Book your seats for an unforgettable musical evening</p>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  placeholder="Enter your name"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Select Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Number of Guests *</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  placeholder="How many people?"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Event Preference</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Select Event (Optional)</option>
                  {events.map((event) => (
                    <option key={event.id} value={event.name}>{event.name} - {event.day}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Occasion (if any)</label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Select Occasion</option>
                  {eventTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Special Requests</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  placeholder="Any special requests, seating preferences, or celebration notes..."
                />
              </div>
              
              <button type="submit" style={styles.submitBtn}>
                🎵 Book Live Music Experience 🎵
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .moving-track {
            animation: scroll 30s linear infinite;
          }
          .moving-track:hover {
            animation-play-state: paused;
          }
          input:focus, textarea:focus, select:focus {
            border-color: #f59e0b;
            box-shadow: 0 0 0 3px rgba(245,158,11,0.1);
            outline: none;
          }
          @media (max-width: 768px) {
            .heroTitle { font-size: 36px !important; }
            .sectionTitle { font-size: 28px !important; }
            .eventsGrid { grid-template-columns: 1fr !important; }
            .artistsGrid { grid-template-columns: repeat(2, 1fr) !important; }
            .formContainer { padding: 25px !important; }
            .quoteText { font-size: 18px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default LiveMusic;