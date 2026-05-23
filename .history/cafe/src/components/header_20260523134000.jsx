// src/components/header.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/cafelogo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.5s ease-in-out',
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
      padding: isScrolled ? '12px 0' : '20px 0',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    logo: {
      height: '50px',
      width: 'auto',
      objectFit: 'contain',
    },
    logoText: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0,
    },
    logoSlogan: {
      fontSize: '10px',
      color: '#b45309',
      letterSpacing: '2px',
      margin: 0,
    },
    desktopNav: {
      display: isMobile ? 'none' : 'flex',
      gap: '32px',
      alignItems: 'center',
    },
    navLink: {
      textDecoration: 'none',
      color: isScrolled ? '#374151' : '#78350f',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      position: 'relative',
      padding: '5px 0',
    },
    orderButton: {
      padding: '10px 24px',
      background: 'linear-gradient(135deg, #b45309, #78350f)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(180, 83, 9, 0.3)',
    },
    mobileButton: {
      display: isMobile ? 'block' : 'none',
      background: '#fef3c7',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '8px',
      cursor: 'pointer',
      color: '#78350f',
      fontSize: '20px',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 999,
      transition: 'all 0.5s ease',
      display: isMobileMenuOpen ? 'block' : 'none',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '280px',
      height: '100%',
      background: 'white',
      zIndex: 1000,
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.5s ease-out',
      boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
      padding: '80px 24px 24px',
    },
    mobileNavLink: {
      display: 'block',
      padding: '12px 16px',
      margin: '8px 0',
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '500',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    mobileOrderButton: {
      width: '100%',
      padding: '12px',
      background: 'linear-gradient(135deg, #b45309, #78350f)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '20px',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>
          <a 
            href="/" 
            style={styles.logoContainer}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={logo} alt="Cafe Logo" style={styles.logo} />
            <div style={styles.logoText}>
              <h1 style={styles.logoTitle}>Café Ura</h1>
              <p style={styles.logoSlogan}>SIP • RELAX • REPEAT</p>
            </div>
          </a>

          <nav style={styles.desktopNav}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={styles.navLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#b45309';
                  const span = e.currentTarget.querySelector('span');
                  if (span) span.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isScrolled ? '#374151' : '#78350f';
                  const span = e.currentTarget.querySelector('span');
                  if (span) span.style.width = '0';
                }}
              >
                {item.name}
                <span style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  width: '0',
                  height: '2px',
                  background: '#b45309',
                  transition: 'width 0.3s ease',
                }}></span>
              </a>
            ))}
            <button 
              style={styles.orderButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(180, 83, 9, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(180, 83, 9, 0.3)';
              }}
              onClick={() => alert('Order Now clicked!')}
            >
              Order Now
            </button>
          </nav>

          <button 
            style={styles.mobileButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <div style={styles.overlay} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      <div style={styles.mobileMenu}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            style={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fef3c7';
              e.currentTarget.style.color = '#b45309';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#374151';
            }}
          >
            {item.name}
          </a>
        ))}
        <button 
          style={styles.mobileOrderButton}
          onClick={() => alert('Order Now clicked!')}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Order Now
        </button>
      </div>
    </>
  );
};

export default Header;