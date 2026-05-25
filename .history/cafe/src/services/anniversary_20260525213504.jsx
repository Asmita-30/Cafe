// src/page/anniversary.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import anniversaryImg from '../assets/services/Anniversary Celebrations.png';

const Anniversary = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    years: '',
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
    alert(`💑 Thank you ${formData.name}! We will contact you shortly for your ${formData.years}th Anniversary celebration booking.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '',
      years: '',
      message: ''
    });
    setSelectedPackage(null);
  };

  const packages = [
    {
      id: 1,
      name: 'Silver Anniversary',
      price: '₹8,000',
      icon: '🥈',
      color: '#94a3b8',
      bgColor: '#f1f5f9',
      features: [
        'Romantic Table Setup',
        'Anniversary Cake (1 kg)',
        'Dinner for 10 people',
        'Soft Drinks Included',
        'Rose Petal Decoration',
        '3 Hours Venue Access'
      ]
    },
    {
      id: 2,
      name: 'Golden Anniversary',
      price: '₹15,000',
      icon: '🥇',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      popular: true,
      features: [
        'Luxury Romantic Setup',
        'Custom Theme Cake (2 kg)',
        'Candle Light Dinner for 20',
        'Welcome Drinks + Wine',
        'Live Acoustic Music',
        'Professional Photography',
        '5 Hours Venue Access',
        'Couple’s Special Gift'
      ]
    },
    {
      id: 3,
      name: 'Diamond Anniversary',
      price: '₹30,000',
      icon: '💎',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      features: [
        'Premium Royal Decoration',
        'Multi-tier Designer Cake',
        '5-Course Gourmet Dinner',
        'Premium Drinks + Champagne',
        'Live Band + DJ',
        'Professional Video + Photo',
        '7 Hours Venue Access',
        'Luxury Stay Coupon',
        'Personalized Return Gifts'
      ]
    }
  ];

  const galleryItems = [
    { id: 1, icon: '💑', name: 'Couple Setup', desc: 'Romantic candlelight dinner' },
    { id: 2, icon: '🎂', name: 'Anniversary Cake', desc: 'Custom designed cakes' },
    { id: 3, icon: '🌹', name: 'Rose Decor', desc: 'Beautiful flower arrangements' },
    { id: 4, icon: '🎵', name: 'Live Music', desc: 'Soft romantic melodies' },
    { id: 5, icon: '📸', name: 'Photo Session', desc: 'Professional memories' },
    { id: 6, icon: '🍷', name: 'Fine Dining', desc: 'Exquisite food experience' }
  ];

  const movingItems = [
    { icon: '💑', name: 'Romance' },
    { icon: '🌹', name: 'Flowers' },
    { icon: '🎂', name: 'Cake' },
    { icon: '🍷', name: 'Wine' },
    { icon: '🎵', name: 'Music' },
    { icon: '📸', name: 'Photos' },
    { icon: '💍', name: 'Rings' },
    { icon: '🎁', name: 'Gifts' },
    { icon: '🕯️', name: 'Candles' },
    { icon: '💖', name: 'Love' },
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
      background: `linear-gradient(135deg, rgba(0,0,0,0.65), rgba(0,0,0,0.5)), url(${anniversaryImg})`,
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
      background: '#fefaf5',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '38px',
      color: '#78350f',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    sectionSubtitle: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#6b7280',
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
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease',
    },
    galleryIcon: {
      fontSize: '60px',
      marginBottom: '15px',
    },
    galleryName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '8px',
    },
    galleryDesc: {
      fontSize: '14px',
      color: '#6b7280',
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
      width: '200px',
      textAlign: 'center',
      padding: '20px',
      background: '#fefaf5',
      borderRadius: '20px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    },
    movingIcon: {
      fontSize: '50px',
      marginBottom: '10px',
    },
    movingText: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#78350f',
    },
    loveSection: {
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
      padding: '60px 20px',
      textAlign: 'center',
    },
    loveQuote: {
      fontSize: '28px',
      fontStyle: 'italic',
      color: '#78350f',
      maxWidth: '800px',
      margin: '0 auto',
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
          💑 Anniversary Celebrations at Café Aura 💖
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.heroSubtitle}
        >
          Celebrate your journey of love with our romantic setups, 
          delicious cuisine, and unforgettable experiences
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.heroBtn}
          onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Plan Your Celebration →
        </motion.button>
      </div>

      {/* Love Quote Section */}
      <div style={styles.loveSection}>
        <p style={styles.loveQuote}>
          "Love is not about how many days, months, or years you have been together. 
          It is about how much you love each other every single day."
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
        <h2 style={styles.sectionTitle}>💝 Anniversary Packages 💝</h2>
        <p style={styles.sectionSubtitle}>Choose the perfect package for your special day</p>
        
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
              {pkg.popular && <div style={styles.popularBadge}>⭐ MOST POPULAR</div>}
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
        <h2 style={styles.sectionTitle}>✨ What We Offer ✨</h2>
        <p style={styles.sectionSubtitle}>Everything you need for a romantic anniversary celebration</p>
        
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
            <h2 style={styles.formTitle}>💖 Book Your Anniversary Celebration 💖</h2>
            <p style={styles.formSubtitle}>Fill the form and we'll create magic for your special day</p>
            
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
                <label style={styles.label}>Celebrating Which Anniversary? *</label>
                <input
                  type="text"
                  name="years"
                  value={formData.years}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                  placeholder="e.g., 25th (Silver), 50th (Golden)"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Preferred Date *</label>
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
                <label style={styles.label}>Special Requests / Package Preference</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  placeholder="Tell us about your celebration..."
                />
              </div>
              
              <button type="submit" style={styles.submitBtn}>
                💝 Submit Booking Request 💝
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
          input:focus, textarea:focus {
            border-color: #f59e0b;
            box-shadow: 0 0 0 3px rgba(245,158,11,0.1);
          }
          @media (max-width: 768px) {
            .heroTitle { font-size: 36px !important; }
            .sectionTitle { font-size: 28px !important; }
            .packagesGrid { grid-template-columns: 1fr !important; }
            .galleryGrid { grid-template-columns: repeat(2, 1fr) !important; }
            .formContainer { padding: 25px !important; }
            .loveQuote { font-size: 20px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Anniversary;