// src/page/home.jsx
import React, { useState, useEffect } from 'react';
import homepageImg from '../assets/homepage.png';
import homepage2Img from '../assets/homepage2.png';
import aboutImg from '../assets/about.png';
import coffieserveImg from '../assets/coffieserve.png';
import cafebillImg from '../assets/cafebill.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slider images
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

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    { icon: "☕", title: "Premium Coffee", desc: "100% Arabica beans" },
    { icon: "🍰", title: "Fresh Bakery", desc: "Baked daily" },
    { icon: "🏠", title: "Cozy Ambiance", desc: "Perfect for work & relax" },
    { icon: "🚚", title: "Free Delivery", desc: "On orders above ₹500" }
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "50+", label: "Coffee Varieties" },
    { number: "5000+", label: "Happy Customers" },
    { number: "25+", label: "Expert Baristas" }
  ];

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    // Slider Styles
    sliderContainer: {
      position: 'relative',
      height: '90vh',
      minHeight: '600px',
      overflow: 'hidden',
      borderRadius: '0 0 30px 30px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      transition: 'opacity 0.8s ease-in-out',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeSlide: {
      opacity: 1,
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
      animation: 'fadeInUp 0.8s ease-out',
    },
    slideTitle: {
      fontSize: '56px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    slideSubtitle: {
      fontSize: '28px',
      marginBottom: '15px',
      opacity: 0.95,
    },
    slideDesc: {
      fontSize: '18px',
      marginBottom: '30px',
      opacity: 0.9,
    },
    ctaButton: {
      padding: '14px 40px',
      fontSize: '18px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    sliderButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.3)',
      backdropFilter: 'blur(5px)',
      border: 'none',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      fontSize: '24px',
      cursor: 'pointer',
      color: 'white',
      zIndex: 10,
      transition: 'all 0.3s ease',
    },
    prevButton: {
      left: '20px',
    },
    nextButton: {
      right: '20px',
    },
    dotsContainer: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '12px',
      zIndex: 10,
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    activeDot: {
      background: '#f59e0b',
      width: '30px',
      borderRadius: '6px',
    },
    // About Section
    aboutSection: {
      padding: '80px 20px',
      background: '#fefaf5',
    },
    aboutContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'center',
    },
    aboutImage: {
      width: '100%',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    aboutContent: {
      animation: 'fadeInRight 0.8s ease-out',
    },
    aboutBadge: {
      color: '#f59e0b',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '2px',
      marginBottom: '15px',
    },
    aboutTitle: {
      fontSize: '36px',
      color: '#78350f',
      marginBottom: '20px',
    },
    aboutHighlight: {
      color: '#f59e0b',
    },
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
      marginTop: '30px',
    },
    featureCard: {
      padding: '15px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease',
    },
    featureIcon: {
      fontSize: '32px',
      marginBottom: '10px',
    },
    featureTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '5px',
    },
    featureDesc: {
      fontSize: '12px',
      color: '#6b7280',
    },
    // Stats Section
    statsSection: {
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      padding: '60px 20px',
      color: 'white',
    },
    statsContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '14px',
      opacity: 0.9,
    },
    // Special Offer
    specialSection: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
    },
    specialContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'center',
    },
    specialImage: {
      width: '100%',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    },
    specialTitle: {
      fontSize: '32px',
      color: '#78350f',
      marginBottom: '15px',
    },
    specialPrice: {
      fontSize: '36px',
      color: '#f59e0b',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    orderBtn: {
      padding: '12px 30px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Slider Section */}
      <div style={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              ...styles.slide,
              ...(currentSlide === index ? styles.activeSlide : {}),
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div style={styles.slideOverlay}></div>
            <div style={styles.slideContent}>
              <h1 style={styles.slideTitle}>{slide.title}</h1>
              <h2 style={styles.slideSubtitle}>{slide.subtitle}</h2>
              <p style={styles.slideDesc}>{slide.description}</p>
              <button 
                style={styles.ctaButton}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => window.location.href = '/menu'}
              >
                Explore Menu
              </button>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          style={{...styles.sliderButton, ...styles.prevButton}}
          onClick={prevSlide}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245,158,11,0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
        >
          ❮
        </button>
        <button 
          style={{...styles.sliderButton, ...styles.nextButton}}
          onClick={nextSlide}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245,158,11,0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
        >
          ❯
        </button>
        
        {/* Dots */}
        <div style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                ...(currentSlide === index ? styles.activeDot : {}),
              }}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* About Section with about.png image */}
      <div style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <div>
            <img 
              src={aboutImg} 
              alt="About Café Aura" 
              style={styles.aboutImage}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div style={styles.aboutContent}>
            <div style={styles.aboutBadge}>ABOUT US</div>
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
            
            {/* Features */}
            <div style={styles.featuresGrid}>
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  style={styles.featureCard}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={styles.featureIcon}>{feature.icon}</div>
                  <div style={styles.featureTitle}>{feature.title}</div>
                  <div style={styles.featureDesc}>{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsContainer}>
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offer Section with cafebill image */}
      <div style={styles.specialSection}>
        <div style={styles.specialContainer}>
          <div>
            <h2 style={styles.specialTitle}>Special Combo Offer</h2>
            <p style={{ color: '#4b5563', marginBottom: '15px' }}>
              Get our signature coffee with a freshly baked croissant at an unbeatable price!
            </p>
            <div style={styles.specialPrice}>Only ₹299</div>
            <button 
              style={styles.orderBtn}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => window.location.href = '/order'}
            >
              Order Now →
            </button>
          </div>
          <div>
            <img 
              src={cafebillImg} 
              alt="Special Offer" 
              style={styles.specialImage}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;