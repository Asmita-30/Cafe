// src/page/coffee-specials.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import coffeeSpecialsImg from '../assets/services/Coffee & Dessert Specials.png';

// Import coffee and dessert images
import Espresso from '../assets/menucard/Espresso cofee.png';
import CaffeLatte from '../assets/menucard/Caffè Latte.png';
import Cappuccino from '../assets/menucard/cappuccino.png';
import IcedLatte from '../assets/menucard/Iced Latte.png';
import IcedMocha from '../assets/menucard/Iced Mocha.png';
import MasalaChai from '../assets/menucard/Masala Chai.png';
import ChocolateCake from '../assets/menucard/Chocolate Cake.png';
import Cheesecake from '../assets/menucard/Cheesecake.png';
import ChocolateMuffin from '../assets/menucard/Chocolate Muffin.png';
import ChocolateChipCookie from '../assets/menucard/Chocolate Chip Cookie.png';

const CoffeeSpecials = () => {
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    combo: '',
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
    alert(`☕ Thank you ${formData.name}! Your Coffee & Dessert booking has been confirmed. We look forward to serving you!`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      combo: '',
      message: ''
    });
    setSelectedCombo(null);
  };

  const combos = [
    {
      id: 1,
      name: 'Morning Delight',
      price: '₹299',
      icon: '🌅',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      coffee: 'Cappuccino',
      dessert: 'Chocolate Muffin',
      features: [
        'Hot Cappuccino',
        'Fresh Chocolate Muffin',
        'Complimentary Biscotti',
        'Free WiFi'
      ]
    },
    {
      id: 2,
      name: 'Coffee Lover\'s Dream',
      price: '₹499',
      icon: '☕',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      popular: true,
      features: [
        'Any Two Premium Coffees',
        'Two Assorted Desserts',
        'Chocolate Chip Cookies',
        'Coffee Beans Sample Pack',
        'Free WiFi'
      ]
    },
    {
      id: 3,
      name: 'Romantic Evening',
      price: '₹699',
      icon: '💑',
      color: '#ec4899',
      bgColor: '#fce7f3',
      features: [
        'Two Speciality Coffees',
        'Cheesecake + Chocolate Cake',
        'Rose Petal Decoration',
        'Candle Light Setup',
        'Complimentary Chocolate Box'
      ]
    },
    {
      id: 4,
      name: 'Family Treat',
      price: '₹999',
      icon: '👨‍👩‍👧‍👦',
      color: '#22c55e',
      bgColor: '#dcfce7',
      features: [
        '4 Signature Coffees',
        '4 Desserts (Any)',
        'Kids Hot Chocolate',
        'Family Photo Session',
        'Free Parking'
      ]
    }
  ];

  const specialItems = [
    { id: 1, name: 'Signature Latte', price: '₹250', icon: '☕', desc: 'Our special caramel latte', image: CaffeLatte },
    { id: 2, name: 'Espresso Shot', price: '₹180', icon: '⚡', desc: 'Strong & bold', image: Espresso },
    { id: 3, name: 'Iced Mocha', price: '₹270', icon: '🧊', desc: 'Chocolate espresso', image: IcedMocha },
    { id: 4, name: 'Masala Chai', price: '₹150', icon: '🍵', desc: 'Spiced Indian tea', image: MasalaChai },
    { id: 5, name: 'Chocolate Cake', price: '₹180', icon: '🍰', desc: 'Rich & moist', image: ChocolateCake },
    { id: 6, name: 'Cheesecake', price: '₹200', icon: '🍰', desc: 'New York style', image: Cheesecake },
    { id: 7, name: 'Chocolate Muffin', price: '₹110', icon: '🧁', desc: 'Soft & chocolaty', image: ChocolateMuffin },
    { id: 8, name: 'Cookie Jar', price: '₹80', icon: '🍪', desc: 'Chocolate chip', image: ChocolateChipCookie }
  ];

  const movingItems = [
    { icon: '☕', name: 'Espresso' },
    { icon: '☕', name: 'Latte' },
    { icon: '🍰', name: 'Cake' },
    { icon: '🧁', name: 'Muffin' },
    { icon: '🍪', name: 'Cookie' },
    { icon: '🍵', name: 'Chai' },
    { icon: '🧊', name: 'Iced' },
    { icon: '✨', name: 'Special' },
    { icon: '💝', name: 'Love' },
    { icon: '🎁', name: 'Treat' },
  ];

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    '6:00 PM - 8:00 PM',
    '8:00 PM - 10:00 PM'
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
      background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${coffeeSpecialsImg})`,
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
    combosGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    comboCard: {
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
    comboHeader: {
      padding: '30px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
    },
    comboIcon: {
      fontSize: '50px',
      marginBottom: '15px',
    },
    comboName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '10px',
    },
    comboPrice: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#f59e0b',
      marginBottom: '5px',
    },
    comboFeatures: {
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
    offerSection: {
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
      padding: '50px 20px',
      textAlign: 'center',
    },
    offerText: {
      fontSize: '22px',
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
          ☕ Coffee & Dessert Specials 🍰
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={styles.heroSubtitle}
        >
          Indulge in our premium coffee blends paired with delicious desserts. 
          Perfect for every craving and every mood.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.heroBtn}
          onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Book Your Coffee Date →
        </motion.button>
      </div>

      {/* Offer Section */}
      <div style={styles.offerSection}>
        <p style={styles.offerText}>
          "Life is too short for bad coffee and boring desserts. 
          Treat yourself to the best combination at Café Aura!"
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

      {/* Special Combos Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎁 Special Combos 🎁</h2>
        <p style={styles.sectionSubtitle}>Choose the perfect combo for your coffee experience</p>
        
        <div style={styles.combosGrid}>
          {combos.map((combo) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={styles.comboCard}
              onClick={() => setSelectedCombo(combo)}
            >
              {combo.popular && <div style={styles.popularBadge}>⭐ BEST SELLER</div>}
              <div style={styles.comboHeader}>
                <div style={styles.comboIcon}>{combo.icon}</div>
                <h3 style={styles.comboName}>{combo.name}</h3>
                <div style={styles.comboPrice}>{combo.price}</div>
              </div>
              <div style={styles.comboFeatures}>
                {combo.features.map((feature, idx) => (
                  <div key={idx} style={styles.featureItem}>
                    <span>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button style={styles.selectBtn}>Select Combo</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Menu Items Section */}
      <div style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>✨ Our Special Menu ✨</h2>
        <p style={styles.sectionSubtitle}>Handcrafted with love, made fresh daily</p>
        
        <div style={styles.menuGrid}>
          {specialItems.map((item) => (
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

      {/* Booking Form */}
      <div id="booking-form" style={styles.formSection}>
        <div style={styles.formContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={styles.formTitle}>☕ Reserve Your Coffee Experience ☕</h2>
            <p style={styles.formSubtitle}>Book a table and enjoy our special combos</p>
            
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
                <label style={styles.label}>Preferred Combo</label>
                <select
                  name="combo"
                  value={formData.combo}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Select Combo (Optional)</option>
                  {combos.map((combo) => (
                    <option key={combo.id} value={combo.name}>{combo.name} - {combo.price}</option>
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
                  placeholder="Any special requests? (e.g., dietary restrictions, celebration...)"
                />
              </div>
              
              <button type="submit" style={styles.submitBtn}>
                ☕ Book My Coffee Date ☕
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
            .combosGrid { grid-template-columns: 1fr !important; }
            .menuGrid { grid-template-columns: repeat(2, 1fr) !important; }
            .formContainer { padding: 25px !important; }
            .offerText { font-size: 16px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default CoffeeSpecials;