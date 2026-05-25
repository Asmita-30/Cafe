// src/page/group-booking.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import groupBookingImg from '../assets/services/Group Booking.png';

const GroupBooking = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    groupType: '',
    budget: '',
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
    alert(`👥 Thank you ${formData.name}! Your group booking for ${formData.guests} people has been confirmed. We will contact you shortly!`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      groupType: '',
      budget: '',
      message: ''
    });
    setSelectedPackage(null);
  };

  const packages = [
    {
      id: 1,
      name: 'Small Group',
      price: '10% off',
      icon: '👥',
      color: '#94a3b8',
      bgColor: '#f1f5f9',
      minGuests: '10-20',
      features: [
        '10% Discount on Total Bill',
        'Welcome Drinks for All',
        'Dedicated Server',
        'Free WiFi',
        'Complimentary Parking'
      ]
    },
    {
      id: 2,
      name: 'Medium Group',
      price: '15% off',
      icon: '👨‍👩‍👧‍👦',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      popular: true,
      minGuests: '21-40',
      features: [
        '15% Discount on Total Bill',
        'Welcome Drinks + Starters',
        'Private Dining Area',
        'Customized Menu Options',
        'Free Dessert for Everyone',
        'Complimentary Parking'
      ]
    },
    {
      id: 3,
      name: 'Large Group',
      price: '20% off',
      icon: '🏢',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      minGuests: '41-75',
      features: [
        '20% Discount on Total Bill',
        'Welcome Drinks + Premium Starters',
        'Entire Hall Booking',
        'Customized Buffet Menu',
        'Free Mocktails for All',
        'Live Music Arrangement',
        'Dedicated Event Manager',
        'Free Parking for All Vehicles'
      ]
    },
    {
      id: 4,
      name: 'Corporate Group',
      price: '25% off',
      icon: '💼',
      color: '#22c55e',
      bgColor: '#dcfce7',
      minGuests: '75+',
      features: [
        '25% Discount on Total Bill',
        'Premium Welcome Drinks',
        'Full Venue Booking',
        'Customized Corporate Menu',
        'AV Equipment + Projector',
        'Professional Photography',
        'Conference Setup Available',
        'Luxury Return Gifts',
        'VIP Parking Reserved'
      ]
    }
  ];

  const groupTypes = [
    'Corporate Team',
    'College Group',
    'Family Reunion',
    'Friends Getaway',
    'Tourist Group',
    'Wedding Party',
    'Birthday Group',
    'Club/Organization'
  ];

  const movingItems = [
    { icon: '👥', name: 'Group' },
    { icon: '🎉', name: 'Party' },
    { icon: '🍽️', name: 'Dining' },
    { icon: '🍕', name: 'Food' },
    { icon: '🥂', name: 'Cheers' },
    { icon: '💼', name: 'Corporate' },
    { icon: '🎓', name: 'College' },
    { icon: '👨‍👩‍👧‍👦', name: 'Family' },
    { icon: '🎈', name: 'Celebration' },
    { icon: '⭐', name: 'Special' },
  ];

  const timeSlots = [
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '6:00 PM - 8:00 PM',
    '8:00 PM - 10:00 PM',
    '10:00 PM - 12:00 AM'
  ];

  const budgetRanges = [
    '₹5,000 - ₹10,000',
    '₹10,000 - ₹20,000',
    '₹20,000 - ₹30,000',
    '₹30,000 - ₹50,000',
    '₹50,000+'
  ];

  const benefits = [
    { id: 1, icon: '💰', name: 'Best Discounts', desc: 'Special group discounts up to 25%' },
    { id: 2, icon: '🍽️', name: 'Customized Menu', desc: 'Tailored menu for your group' },
    { id: 3, icon: '🏠', name: 'Private Space', desc: 'Dedicated area for groups' },
    { id: 4, icon: '🎤', name: 'Event Support', desc: 'Dedicated event manager' }
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
      background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${groupBookingImg})`,
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      maxWidth: '1300px',
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
    packageGuests: {
      fontSize: '13px',
      color: '#6b7280',
      marginTop: '5px',
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
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    benefitCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '30px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease',
    },
    benefitIcon: {
      fontSize: '50px',
      marginBottom: '15px',
    },
    benefitName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '8px',
    },
    benefitDesc: {
      fontSize: '13px',
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
    offerSection: {
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
      padding: '50px 20px',
      textAlign: 'center',
    },
    offerText: {
      fontSize: '24px',
      color: '#78350f',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: 'bold',
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
          👥 Group Booking at Café Aura 🎉
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.heroSubtitle}
        >
          Plan your next group gathering with us! Special discounts, customized menus, 
          and unforgettable experiences for groups of all sizes.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.heroBtn}
          onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Book Group Booking →
        </motion.button>
      </div>

      {/* Offer Section */}
      <div style={styles.offerSection}>
        <p style={styles.offerText}>
          "Bigger the group, bigger the savings! Book your group with us and get exclusive discounts 
          up to 25% + free benefits!"
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
        <h2 style={styles.sectionTitle}>🎁 Group Booking Packages 🎁</h2>
        <p style={styles.sectionSubtitle}>Choose the perfect package for your group size</p>
        
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
                <div style={styles.packageGuests}>👥 {pkg.minGuests} guests</div>
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

      {/* Benefits Section */}
      <div style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>✨ Group Benefits ✨</h2>
        <p style={styles.sectionSubtitle}>Why book your group with us?</p>
        
        <div style={styles.benefitsGrid}>
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              style={styles.benefitCard}
            >
              <div style={styles.benefitIcon}>{benefit.icon}</div>
              <h3 style={styles.benefitName}>{benefit.name}</h3>
              <p style={styles.benefitDesc}>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Group Types Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🌟 Perfect For 🌟</h2>
        <p style={styles.sectionSubtitle}>We cater to all types of groups</p>
        
        <div style={styles.benefitsGrid}>
          {groupTypes.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              style={styles.benefitCard}
            >
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>
                {type === 'Corporate Team' && '💼'}
                {type === 'College Group' && '🎓'}
                {type === 'Family Reunion' && '👨‍👩‍👧‍👦'}
                {type === 'Friends Getaway' && '👬'}
                {type === 'Tourist Group' && '✈️'}
                {type === 'Wedding Party' && '💒'}
                {type === 'Birthday Group' && '🎂'}
                {type === 'Club/Organization' && '🏛️'}
              </div>
              <h3 style={styles.benefitName}>{type}</h3>
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
            <h2 style={styles.formTitle}>👥 Book Your Group Event 👥</h2>
            <p style={styles.formSubtitle}>Fill the form and we'll help you plan the perfect group gathering</p>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Contact Person Name *</label>
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
                <label style={styles.label}>Preferred Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select Time</option>
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>{slot}</option>
                  ))}
                </select>
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
                <label style={styles.label}>Group Type *</label>
                <select
                  name="groupType"
                  value={formData.groupType}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select Group Type</option>
                  {groupTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Select Budget (Optional)</option>
                  {budgetRanges.map((range, idx) => (
                    <option key={idx} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Special Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={styles.textarea}
                  placeholder="Any special requests, dietary restrictions, or event requirements..."
                />
              </div>
              
              <button type="submit" style={styles.submitBtn}>
                👥 Submit Group Booking Request 👥
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
            .benefitsGrid { grid-template-columns: repeat(2, 1fr) !important; }
            .formContainer { padding: 25px !important; }
            .offerText { font-size: 18px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default GroupBooking;