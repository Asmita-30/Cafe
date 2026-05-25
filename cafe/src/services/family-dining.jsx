// src/page/family-dining.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import familyDiningImg from '../assets/services/Family Dining.png';

// Import food images
import VegBurger from '../assets/menucard/Veg Burger.png';
import GrilledCheese from '../assets/menucard/Grilled Cheese.png';
import ChocolateCake from '../assets/menucard/Chocolate Cake.png';
import Cheesecake from '../assets/menucard/Cheesecake.png';

const FamilyDining = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
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
    alert(`🍽️ Thank you ${formData.name}! Your family dining table has been reserved. We look forward to serving your family!`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      occasion: '',
      message: ''
    });
    setSelectedPackage(null);
  };

  const packages = [
    {
      id: 1,
      name: 'Kids Special',
      price: '₹299',
      icon: '🧒',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      features: [
        'Kids Meal with Burger/Fries',
        'Ice Cream Scoop',
        'Soft Drink',
        'Activity Coloring Sheet',
        'Small Toy Gift'
      ]
    },
    {
      id: 2,
      name: 'Family Buffet',
      price: '₹799',
      icon: '🍱',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      popular: true,
      features: [
        'Unlimited Veg/Non-Veg Starters',
        'Main Course (4 Options)',
        'Dessert Counter',
        'Soft Drinks Included',
        'Kids Eat Free (Under 5)',
        'Free Valet Parking'
      ]
    },
    {
      id: 3,
      name: 'Weekend Special',
      price: '₹999',
      icon: '🌞',
      color: '#22c55e',
      bgColor: '#dcfce7',
      features: [
        'Welcome Drinks for All',
        '3-Course Meal (Soup to Dessert)',
        'Live Pasta/Pizza Counter',
        'Mocktail for Each Person',
        'Family Photo Session',
        'Takeaway Goodie Bag'
      ]
    }
  ];

  const menuItems = [
    { id: 1, name: 'Veg Burger', price: '₹280', icon: '🍔', desc: 'Plant-based patty with fries', image: VegBurger },
    { id: 2, name: 'Grilled Cheese', price: '₹180', icon: '🥪', desc: 'Classic grilled cheese', image: GrilledCheese },
    { id: 3, name: 'Chocolate Cake', price: '₹180', icon: '🍰', desc: 'Rich chocolate cake', image: ChocolateCake },
    { id: 4, name: 'Cheesecake', price: '₹200', icon: '🍰', desc: 'New York style', image: Cheesecake }
  ];

  const familyFavorites = [
    { id: 1, icon: '🍕', name: 'Margherita Pizza', price: '₹350', desc: 'Fresh mozzarella, basil' },
    { id: 2, icon: '🍝', name: 'Penne Arrabiata', price: '₹320', desc: 'Spicy tomato pasta' },
    { id: 3, icon: '🥗', name: 'Garden Salad', price: '₹180', desc: 'Fresh seasonal veggies' },
    { id: 4, icon: '🍛', name: 'Veg Biryani', price: '₹280', desc: 'Fragrant rice with veggies' },
    { id: 5, icon: '🍦', name: 'Ice Cream Sundae', price: '₹150', desc: 'With chocolate sauce' },
    { id: 6, icon: '🥤', name: 'Fresh Lime Soda', price: '₹80', desc: 'Sweet or salted' }
  ];

  const movingItems = [
    { icon: '👨‍👩‍👧‍👦', name: 'Family Time' },
    { icon: '🍽️', name: 'Dining' },
    { icon: '🍕', name: 'Pizza' },
    { icon: '🍔', name: 'Burger' },
    { icon: '🍝', name: 'Pasta' },
    { icon: '🍰', name: 'Dessert' },
    { icon: '🥤', name: 'Drinks' },
    { icon: '🍦', name: 'Ice Cream' },
    { icon: '💝', name: 'Love' },
    { icon: '🎈', name: 'Celebration' },
  ];

  const timeSlots = [
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM',
    '9:00 PM - 10:00 PM'
  ];

  const occasions = [
    'Regular Dining',
    'Birthday Celebration',
    'Anniversary',
    'Family Get-together',
    'Kids Day Out',
    'Weekend Family Lunch'
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
      background: `linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.4)), url(${familyDiningImg})`,
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    menuCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '25px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease',
    },
    menuIcon: {
      fontSize: '50px',
      marginBottom: '15px',
    },
    menuName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '8px',
    },
    menuDesc: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '10px',
    },
    menuPrice: {
      fontSize: '22px',
      fontWeight: 'bold',
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
    welcomeSection: {
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
      padding: '50px 20px',
      textAlign: 'center',
    },
    welcomeText: {
      fontSize: '22px',
      color: '#78350f',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
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
          🍽️ Family Dining at Café Aura 👨‍👩‍👧‍👦
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.heroSubtitle}
        >
          Create beautiful memories with your loved ones over delicious food 
          in a warm and welcoming family atmosphere
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.heroBtn}
          onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Reserve Your Table →
        </motion.button>
      </div>

      {/* Welcome Section */}
      <div style={styles.welcomeSection}>
        <p style={styles.welcomeText}>
          "Good food, good mood, good company - that's what family dining is all about. 
          Come, share a meal and make memories at Café Aura!"
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

      {/* Special Packages Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎁 Family Specials 🎁</h2>
        <p style={styles.sectionSubtitle}>Special offers for families and kids</p>
        
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
              {pkg.popular && <div style={styles.popularBadge}>⭐ BEST VALUE</div>}
              <div style={styles.packageHeader}>
                <div style={styles.packageIcon}>{pkg.icon}</div>
                <h3 style={styles.packageName}>{pkg.name}</h3>
                <div style={styles.packagePrice}>{pkg.price}</div>
              </div>
              <div style={styles.packageFeatures}>
                {pkg.features.map((feature, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button style={styles.selectBtn}>Select Offer</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Family Favorites Menu */}
      <div style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>✨ Family Favorites ✨</h2>
        <p style={styles.sectionSubtitle}>Most loved dishes by our family customers</p>
        
        <div style={styles.menuGrid}>
          {familyFavorites.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              style={styles.menuCard}
            >
              <div style={styles.menuIcon}>{item.icon}</div>
              <h3 style={styles.menuName}>{item.name}</h3>
              <p style={styles.menuDesc}>{item.desc}</p>
              <div style={styles.menuPrice}>{item.price}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dining Highlights */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🌟 Why Families Love Us 🌟</h2>
        <p style={styles.sectionSubtitle}>We make every family meal special</p>
        
        <div style={styles.packagesGrid}>
          <div style={styles.menuCard}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>👨‍👩‍👧‍👦</div>
            <h3 style={styles.menuName}>Family Seating</h3>
            <p style={styles.menuDesc}>Comfortable booths and large tables for families</p>
          </div>
          <div style={styles.menuCard}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>🧒</div>
            <h3 style={styles.menuName}>Kids Menu</h3>
            <p style={styles.menuDesc}>Special dishes made just for little ones</p>
          </div>
          <div style={styles.menuCard}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>🎨</div>
            <h3 style={styles.menuName}>Activity Corner</h3>
            <p style={styles.menuDesc}>Coloring sheets and games for kids</p>
          </div>
          <div style={styles.menuCard}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>🅿️</div>
            <h3 style={styles.menuName}>Free Parking</h3>
            <p style={styles.menuDesc}>Ample parking space for families</p>
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
            <h2 style={styles.formTitle}>🍽️ Reserve Your Family Table 🍽️</h2>
            <p style={styles.formSubtitle}>Book a table for your family dining experience</p>
            
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
                <label style={styles.label}>Select Time Slot *</label>
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
                  placeholder="How many people (including kids)?"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Number of Kids (Under 12)</label>
                <input
                  type="number"
                  name="kids"
                  value={formData.kids}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="How many children?"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Occasion</label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Select Occasion (Optional)</option>
                  {occasions.map((occ, idx) => (
                    <option key={idx} value={occ}>{occ}</option>
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
                  placeholder="Any dietary restrictions, high chair needed, or celebration requests..."
                />
              </div>
              
              <button type="submit" style={styles.submitBtn}>
                🍽️ Reserve Table Now 🍽️
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
            .menuGrid { grid-template-columns: repeat(2, 1fr) !important; }
            .formContainer { padding: 25px !important; }
            .welcomeText { font-size: 16px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default FamilyDining;