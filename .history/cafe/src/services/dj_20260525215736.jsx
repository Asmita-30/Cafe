// src/page/dj.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import djArrangementsImg from '../assets/services/DJ Arrangements.png';

const DJArrangements = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    venue: '',
    eventType: '',
    duration: '',
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
    alert(`🎧 Thank you ${formData.name}! We will contact you shortly to discuss your DJ arrangement for ${formData.eventType}.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      venue: '',
      eventType: '',
      duration: '',
      message: ''
    });
    setSelectedPackage(null);
  };

  const packages = [
    {
      id: 1,
      name: 'Basic DJ Package',
      price: '₹10,000',
      icon: '🎧',
      color: '#94a3b8',
      bgColor: '#f1f5f9',
      features: [
        'Professional DJ for 3 hours',
        'Basic Sound System',
        'Standard Speakers',
        'LED Lighting Effects',
        'Wireless Microphone',
        'Pre-recorded Playlists'
      ]
    },
    {
      id: 2,
      name: 'Premium DJ Package',
      price: '₹20,000',
      icon: '🎵',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      popular: true,
      features: [
        'Professional DJ for 5 hours',
        'Premium Sound System',
        'High-end Speakers + Subwoofer',
        'DJ Mixer + Controller',
        'Professional Lighting Setup',
        'Smoke/Fog Machine',
        'Wireless Mics (2)',
        'Live Mixing + Requests',
        'Dedicated MC/Host'
      ]
    },
    {
      id: 3,
      name: 'Platinum DJ Package',
      price: '₹35,000',
      icon: '💎',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      features: [
        'Professional DJ for 6+ hours',
        'Premium Sound + Visuals',
        'Line Array Sound System',
        'LED Video Wall/DJ Booth',
        'Moving Head Lights + Laser',
        'CO2 Cannons + Sparklers',
        'Live Percussionist',
        'VJ + Visual Effects',
        'Professional Photography',
        'Custom Stage Decoration'
      ]
    }
  ];

  const galleryItems = [
    { id: 1, icon: '🎧', name: 'DJ Console', desc: 'Professional mixing setup' },
    { id: 2, icon: '🔊', name: 'Sound System', desc: 'Crystal clear audio' },
    { id: 3, icon: '💡', name: 'Lighting', desc: 'Dynamic LED effects' },
    { id: 4, icon: '🎤', name: 'Live Mixing', desc: 'Request your favorites' },
    { id: 5, icon: '🪩', name: 'Disco Ball', desc: 'Classic party vibe' },
    { id: 6, icon: '🎶', name: 'Playlist', desc: 'Customized tracks' }
  ];

  const movingItems = [
    { icon: '🎧', name: 'DJ' },
    { icon: '🔊', name: 'Music' },
    { icon: '💃', name: 'Dance' },
    { icon: '🎵', name: 'Beats' },
    { icon: '🪩', name: 'Party' },
    { icon: '💡', name: 'Lights' },
    { icon: '🎤', name: 'Mic' },
    { icon: '🎶', name: 'Songs' },
    { icon: '🔥', name: 'Energy' },
    { icon: '✨', name: 'Vibe' },
  ];

  const eventTypes = [
    'Birthday Party',
    'Wedding Reception',
    'Corporate Event',
    'Anniversary Celebration',
    'College Party',
    'New Year Eve',
    'Private Party',
    'Club Night'
  ];

  const durations = [
    '2 Hours',
    '3 Hours',
    '4 Hours',
    '5 Hours',
    '6 Hours',
    'Full Night (8+ Hours)'
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
      background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${djArrangementsImg})`,
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
      background: '#0f0f0f',
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
    packagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    packageCard: {
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
    packageHeader: {
      padding: '30px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
    },
    packageIcon: {
      fontSize: '50px',
      marginBottom: '15px',
    },
    packageName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '10px',
    },
    packagePrice: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#f59e0b',
      marginBottom: '5px',
    },
    packageFeatures: {
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
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    galleryCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '30px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    galleryIcon: {
      fontSize: '60px',
      marginBottom: '15px',
    },
    galleryName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#fef3c7',
      marginBottom: '8px',
    },
    galleryDesc: {
      fontSize: '14px',
      color: '#d1d5db',
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
      background: '#1a1a2e',
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
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
    },
    movingIcon: {
      fontSize: '45px',
      marginBottom: '10px',
    },
    movingText: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#fef3c7',
    },
    quoteSection: {
      background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
      padding: '60px 20px',
      textAlign: 'center',
    },
    quoteText: {
      fontSize: '24px',
      color: '#fef3c7',
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
          🎧 DJ Arrangements at Café Aura 🎵
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.heroSubtitle}
        >
          Professional DJ services for your special events. 
          Let the music play and create unforgettable memories on the dance floor!
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.heroBtn}
          onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Book Your DJ Now →
        </motion.button>
      </div>

      {/* Quote Section */}
      <div style={styles.quoteSection}>
        <p style={styles.quoteText}>
          "Where words fail, music speaks. Let our DJs set the perfect rhythm for your celebration!"
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

      {/* Packages Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎵 DJ Packages 🎵</h2>
        <p style={styles.sectionSubtitle}>Choose the perfect DJ package for your event</p>
        
        <div style={styles.packagesGrid}>
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={styles.packageCard}
              onClick={() => setSelectedPackage(pkg)}
            >
              {pkg.popular && <div style={styles.popularBadge}>🔥 MOST POPULAR</div>}
              <div style={styles.packageHeader}>
                <div style={styles.packageIcon}>{pkg.icon}</div>
                <h3 style={styles.packageName}>{pkg.name}</h3>
                <div style={styles.packagePrice}>{pkg.price}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>+ GST</div>
              </div>
              <div style={styles.packageFeatures}>
                {pkg.features.map((feature, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button style={styles.selectBtn}>Select Package</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div style={styles.sectionAlt}>
        <h2 style={styles.sectionTitleLight}>✨ What We Offer ✨</h2>
        <p style={styles.sectionSubtitleLight}>Professional equipment and experienced DJs</p>
        
        <div style={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              style={styles.galleryCard}
            >
              <div style={styles.galleryIcon}>{item.icon}</div>
              <h3 style={styles.galleryName}>{item.name}</h3>
              <p style={styles.galleryDesc}>{item.desc}</p>
            </motion.div>
          ))}
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
            <h2 style={styles.formTitle}>🎧 Book Your DJ Arrangement 🎧</h2>
            <p style={styles.formSubtitle}>Fill the form and we'll help you plan the perfect music experience</p>
            
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
                <label style={styles.label}>Event Date *</label>
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
                <label style={styles.label}>Venue / Location *</label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  placeholder="Enter venue address"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Type of Event *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select Event Type</option>
                  {eventTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Duration Required *</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select Duration</option>
                  {durations.map((duration, idx) => (
                    <option key={idx} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Special Requests / Music Preferences</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  placeholder="Tell us about your music preferences, favorite genres, or any special requests..."
                />
              </div>
              
              <button type="submit" style={styles.submitBtn}>
                🎧 Submit DJ Booking Request 🎧
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
            .packagesGrid { grid-template-columns: 1fr !important; }
            .galleryGrid { grid-template-columns: repeat(2, 1fr) !important; }
            .formContainer { padding: 25px !important; }
            .quoteText { font-size: 18px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default DJArrangements;