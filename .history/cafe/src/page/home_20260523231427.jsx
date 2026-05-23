// src/page/home.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import homepageImg from '../assets/homepage.png';
import homepage2Img from '../assets/homepage2.png';
import aboutImg from '../assets/about.png';
import coffieserveImg from '../assets/coffieserve.png';
import cafebillImg from '../assets/cafebill.png';

// Import menu card images
import Espresso from '../assets/menucard/Espresso cofee.png';
import CaffeLatte from '../assets/menucard/Caffè Latte.png';
import Cappuccino from '../assets/menucard/cappuccino.png';
import MasalaChai from '../assets/menucard/Masala Chai.png';
import ChocolateCake from '../assets/menucard/Chocolate Cake.png';
import VegBurger from '../assets/menucard/Veg Burger.png';
import IcedLatte from '../assets/menucard/Iced Latte.png';
import ChocolateMuffin from '../assets/menucard/Chocolate Muffin.png';
import GrilledCheese from '../assets/menucard/Grilled Cheese.png';
import Cheesecake from '../assets/menucard/Cheesecake.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: homepageImg,
      title: "Welcome to Café Aura",
      subtitle: "Where Every Sip Tells a Story",
      description: "Experience the perfect blend of artisanal coffee and warm hospitality"
    },
    {
      id: 2,
      image: homepage2Img,
      title: "Crafted with Passion",
      subtitle: "Premium Coffee & Delicious Food",
      description: "Made with love using the finest ingredients"
    },
    {
      id: 3,
      image: coffieserveImg,
      title: "Freshly Brewed",
      subtitle: "Every Cup is a Masterpiece",
      description: "Expertly prepared by our skilled baristas"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const popularItems = [
    { id: 1, name: 'Espresso', price: '₹180', icon: '☕', image: Espresso, category: 'Coffee', delay: 0 },
    { id: 2, name: 'Caffè Latte', price: '₹220', icon: '☕', image: CaffeLatte, category: 'Coffee', delay: 0.1 },
    { id: 3, name: 'Cappuccino', price: '₹220', icon: '☕', image: Cappuccino, category: 'Coffee', delay: 0.2 },
    { id: 4, name: 'Masala Chai', price: '₹150', icon: '🍵', image: MasalaChai, category: 'Tea', delay: 0.3 },
    { id: 5, name: 'Iced Latte', price: '₹240', icon: '🧊', image: IcedLatte, category: 'Cold Coffee', delay: 0.4 },
    { id: 6, name: 'Chocolate Cake', price: '₹180', icon: '🍰', image: ChocolateCake, category: 'Dessert', delay: 0.5 },
    { id: 7, name: 'Veg Burger', price: '₹280', icon: '🍔', image: VegBurger, category: 'Lunch', delay: 0.6 },
    { id: 8, name: 'Chocolate Muffin', price: '₹110', icon: '🧁', image: ChocolateMuffin, category: 'Bakery', delay: 0.7 },
    { id: 9, name: 'Grilled Cheese', price: '₹180', icon: '🥪', image: GrilledCheese, category: 'Sandwich', delay: 0.8 },
    { id: 10, name: 'Cheesecake', price: '₹200', icon: '🍰', image: Cheesecake, category: 'Dessert', delay: 0.9 }
  ];

  const features = [
    { icon: "☕", title: "Premium Coffee", desc: "100% Arabica beans from finest estates" },
    { icon: "🍰", title: "Fresh Bakery", desc: "Baked daily with love and care" },
    { icon: "🏠", title: "Cozy Ambiance", desc: "Perfect for work, meetings & relaxation" },
    { icon: "🚚", title: "Free Delivery", desc: "On orders above ₹500 within 5km" }
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence", icon: "🏆" },
    { number: "50+", label: "Coffee Varieties", icon: "☕" },
    { number: "5000+", label: "Happy Customers", icon: "😊" },
    { number: "25+", label: "Expert Baristas", icon: "👨‍🍳" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      overflow: 'hidden',
    },
    sliderContainer: {
      position: 'relative',
      height: '90vh',
      minHeight: '600px',
      overflow: 'hidden',
    },
    slideOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
    },
    slideContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      color: 'white',
      maxWidth: '800px',
      padding: '20px',
    },
    slideTitle: {
      fontSize: '64px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
    },
    slideSubtitle: {
      fontSize: '30px',
      marginBottom: '15px',
    },
    slideDesc: {
      fontSize: '18px',
      marginBottom: '30px',
    },
    ctaButton: {
      padding: '14px 45px',
      fontSize: '18px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    sliderButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.3)',
      backdropFilter: 'blur(5px)',
      border: 'none',
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      fontSize: '28px',
      cursor: 'pointer',
      color: 'white',
      zIndex: 10,
    },
    prevButton: { left: '25px' },
    nextButton: { right: '25px' },
    dotsContainer: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '15px',
      zIndex: 10,
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.5)',
      cursor: 'pointer',
    },
    activeDot: {
      background: '#f59e0b',
      width: '35px',
      borderRadius: '6px',
    },
    // About Section
    aboutSection: {
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #fff 0%, #fefaf5 100%)',
    },
    aboutContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    aboutImage: {
      width: '100%',
      borderRadius: '30px',
      boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
    },
    aboutBadge: {
      color: '#f59e0b',
      fontSize: '14px',
      fontWeight: '700',
      letterSpacing: '3px',
      marginBottom: '15px',
      textTransform: 'uppercase',
    },
    aboutTitle: {
      fontSize: '42px',
      color: '#78350f',
      marginBottom: '25px',
      fontWeight: 'bold',
    },
    aboutHighlight: { color: '#f59e0b' },
    aboutDesc: {
      color: '#4b5563',
      lineHeight: '1.8',
      marginBottom: '20px',
      fontSize: '16px',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      marginTop: '35px',
    },
    featureCard: {
      padding: '20px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      textAlign: 'center',
    },
    featureIcon: { fontSize: '40px', marginBottom: '12px' },
    featureTitle: { fontSize: '18px', fontWeight: 'bold', color: '#78350f', marginBottom: '8px },
    featureDesc: { fontSize: '13px', color: '#6b7280' },
    // Popular Menu Section
    menuSection: {
      padding: '100px 20px',
      background: 'white',
    },
    sectionHeader: { textAlign: 'center', marginBottom: '60px' },
    sectionTitle: {
      fontSize: '42px',
      color: '#78350f',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    sectionSubtitle: { fontSize: '18px', color: '#6b7280' },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '35px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    menuCard: {
      background: '#fefaf5',
      borderRadius: '25px',
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative',
    },
    menuImageWrapper: { width: '100%', height: '220px', overflow: 'hidden', background: '#fff' },
    menuImage: { width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease' },
    menuContent: { padding: '22px' },
    menuHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' },
    menuIcon: { fontSize: '28px' },
    menuName: { fontSize: '18px', fontWeight: 'bold', color: '#78350f', flex: 1, marginLeft: '10px' },
    menuPrice: { fontSize: '20px', fontWeight: 'bold', color: '#f59e0b' },
    menuCategory: { fontSize: '12px', color: '#9ca3af', marginBottom: '12px' },
    orderBtn: {
      width: '100%',
      padding: '10px',
      background: '#fef3c7',
      border: 'none',
      borderRadius: '15px',
      color: '#78350f',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    viewAllBtn: { textAlign: 'center', marginTop: '60px' },
    viewAllButton: {
      padding: '14px 45px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    // Stats Section
    statsSection: {
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden',
    },
    statsContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
    },
    statCard: { color: 'white', padding: '20px' },
    statIcon: { fontSize: '45px', marginBottom: '15px' },
    statNumber: { fontSize: '42px', fontWeight: 'bold', marginBottom: '8px' },
    statLabel: { fontSize: '14px', opacity: 0.9 },
    // Special Offer
    specialSection: {
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
    },
    specialContainer: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    specialImage: { width: '100%', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' },
    specialTitle: { fontSize: '38px', color: '#78350f', marginBottom: '15px', fontWeight: 'bold' },
    specialPrice: { fontSize: '42px', color: '#f59e0b', fontWeight: 'bold', marginBottom: '25px' },
    specialBtn: {
      padding: '14px 40px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Slider with Framer Motion */}
      <div style={styles.sliderContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={styles.slideOverlay}></div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={styles.slideContent}
            >
              <h1 style={styles.slideTitle}>{slides[currentSlide].title}</h1>
              <h2 style={styles.slideSubtitle}>{slides[currentSlide].subtitle}</h2>
              <p style={styles.slideDesc}>{slides[currentSlide].description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.ctaButton}
                onClick={() => window.location.href = '/menu'}
              >
                Explore Menu ✨
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <button style={{...styles.sliderButton, ...styles.prevButton}} onClick={prevSlide}>❮</button>
        <button style={{...styles.sliderButton, ...styles.nextButton}} onClick={nextSlide}>❯</button>

        <div style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <div
              key={index}
              style={{...styles.dot, ...(currentSlide === index ? styles.activeDot : {})}}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* About Section - 2nd Position */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={styles.aboutSection}
      >
        <div style={styles.aboutContainer}>
          <motion.div variants={itemVariants}>
            <img src={aboutImg} alt="About Café Aura" style={styles.aboutImage} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <div style={styles.aboutBadge}>✨ ABOUT US ✨</div>
            <h2 style={styles.aboutTitle}>
              Welcome to <span style={styles.aboutHighlight}>Café Aura</span>
            </h2>
            <p style={styles.aboutDesc}>
              Nestled in the heart of the city, Café Aura is more than just a coffee shop – 
              it's a sanctuary for coffee lovers and food enthusiasts. Our journey began with 
              a simple passion for creating the perfect cup of coffee and serving delicious 
              food that brings people together.
            </p>
            <p style={styles.aboutDesc}>
              We source our beans from the finest estates around the world and roast them 
              in-house to ensure every cup is fresh and flavorful. Our team of expert baristas 
              crafts each beverage with precision and love, while our kitchen serves up 
              mouthwatering dishes made from locally sourced ingredients.
            </p>
            <div style={styles.featuresGrid}>
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={styles.featureCard}
                >
                  <div style={styles.featureIcon}>{feature.icon}</div>
                  <div style={styles.featureTitle}>{feature.title}</div>
                  <div style={styles.featureDesc}>{feature.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Popular Menu Section - 3rd Position */}
      <div style={styles.menuSection}>
        <div style={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.sectionTitle}
          >
            🔥 Popular Menu Items 🔥
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={styles.sectionSubtitle}
          >
            Our customers' all-time favorites
          </motion.p>
        </div>

        <div style={styles.menuGrid}>
          {popularItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              custom={item.delay}
              transition={{ delay: item.delay }}
              style={styles.menuCard}
              onClick={() => window.location.href = '/menu'}
            >
              <div style={styles.menuImageWrapper}>
                <img src={item.image} alt={item.name} style={styles.menuImage} className="menu-img" />
              </div>
              <div style={styles.menuContent}>
                <div style={styles.menuHeader}>
                  <span style={styles.menuIcon}>{item.icon}</span>
                  <span style={styles.menuName}>{item.name}</span>
                  <span style={styles.menuPrice}>{item.price}</span>
                </div>
                <div style={styles.menuCategory}>{item.category}</div>
                <motion.button
                  whileHover={{ scale: 1.02, background: '#f59e0b', color: 'white' }}
                  style={styles.orderBtn}
                  onClick={(e) => { e.stopPropagation(); window.location.href = '/order'; }}
                >
                  🛒 Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={styles.viewAllBtn}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.viewAllButton}
            onClick={() => window.location.href = '/menu'}
          >
            View Full Menu →
          </motion.button>
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsContainer}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={styles.statCard}
            >
              <div style={styles.statIcon}>{stat.icon}</div>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Offer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.specialSection}
      >
        <div style={styles.specialContainer}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.specialTitle}>Special Combo Offer 🎉</h2>
            <p style={{ color: '#4b5563', marginBottom: '15px', fontSize: '16px' }}>
              Get our signature coffee with a freshly baked croissant at an unbeatable price!
            </p>
            <div style={styles.specialPrice}>Only ₹299</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.specialBtn}
              onClick={() => window.location.href = '/order'}
            >
              Order Now → 🛒
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={cafebillImg} alt="Special Offer" style={styles.specialImage} />
          </motion.div>
        </div>
      </motion.div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @media (max-width: 768px) {
            .menuGrid { grid-template-columns: 1fr !important; }
            .aboutContainer, .specialContainer { grid-template-columns: 1fr !important; }
            .statsContainer { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
            .slideTitle { font-size: 36px !important; }
            .slideSubtitle { font-size: 20px !important; }
            .sectionTitle { font-size: 32px !important; }
            .aboutTitle { font-size: 32px !important; }
            .specialTitle { font-size: 28px !important; }
            .specialPrice { font-size: 32px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Home;