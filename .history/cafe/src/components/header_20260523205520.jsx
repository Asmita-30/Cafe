// src/components/header.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/cafelogo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isMobileMenuDropdownOpen, setIsMobileMenuDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuDropdownOpen && !event.target.closest('.menu-dropdown')) {
        setIsMenuDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuDropdownOpen]);

  const navItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '📖' },
    { 
      name: 'Menu', 
      href: '',
      icon: '🍽️',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Hot Coffees', href: '/menu/hot-coffee', icon: '☕', desc: 'Espresso, Latte, Cappuccino' },
        { name: 'Cold Coffees', href: '/menu/cold-coffee', icon: '🧊', desc: 'Iced Coffee, Frappé' },
        { name: 'Teas & Chai', href: '/menu/tea', icon: '🍵', desc: 'Green Tea, Masala Chai' },
        { name: 'Fresh Bakery', href: '/menu/bakery', icon: '🥐', desc: 'Croissants, Muffins, Cookies' },
        { name: 'Breakfast', href: '/menu/breakfast', icon: '🍳', desc: 'Eggs, Pancakes, Omelettes' },
        { name: 'Lunch & Dinner', href: '/menu/lunch', icon: '🍝', desc: 'Pasta, Burgers, Pizza' },
        { name: 'Desserts', href: '/menu/desserts', icon: '🍰', desc: 'Cakes, Pastries, Ice Cream' },
        { name: 'Smoothies', href: '/menu/smoothies', icon: '🥤', desc: 'Fruit & Protein Smoothies' },
        { name: 'Signature Drinks', href: '/menu/signature', icon: '✨', desc: 'Chef Special Beverages' },
        { name: 'Sandwiches', href: '/menu/sandwiches', icon: '🥪', desc: 'Grilled & Cold Sandwiches' },
        { name: 'Salads', href: '/menu/salads', icon: '🥗', desc: 'Fresh & Healthy Bowls' },
        // { name: "Kids Menu", href: '/menu/kids', icon: '🧒', desc: 'Special for Little Ones' },
        // { name: 'Vegan', href: '/menu/vegan', icon: '🌱', desc: 'Plant-Based Options' }
      ]
    },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ];

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.1)' : '0 2px 20px rgba(0,0,0,0.05)',
      padding: isScrolled ? '8px 0' : '15px 0',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
    },
    logo: {
      height: isScrolled ? '50px' : '65px',
      width: 'auto',
      objectFit: 'contain',
      transition: 'height 0.3s ease',
    },
    logoText: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoTitle: {
      fontSize: isScrolled ? '22px' : '28px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #78350f, #b45309, #f59e0b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0,
      transition: 'font-size 0.3s ease',
    },
    logoSlogan: {
      fontSize: '10px',
      color: '#b45309',
      letterSpacing: '3px',
      margin: 0,
      fontWeight: '500',
    },
    desktopNav: {
      display: isMobile ? 'none' : 'flex',
      gap: '40px',
      alignItems: 'center',
    },
    navItem: {
      position: 'relative',
    },
    navLink: {
      textDecoration: 'none',
      color: isScrolled ? '#374151' : '#78350f',
      fontWeight: '600',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      padding: '8px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontFamily: 'inherit',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '45px',
      left: '-20px',
      minWidth: '280px',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      padding: '12px 0',
      zIndex: 100,
      opacity: isMenuDropdownOpen ? 1 : 0,
      visibility: isMenuDropdownOpen ? 'visible' : 'hidden',
      transform: isMenuDropdownOpen ? 'translateY(0)' : 'translateY(-15px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(180, 83, 9, 0.1)',
    },
    dropdownItem: {
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
      color: '#374151',
      transition: 'all 0.2s ease',
      fontSize: '14px',
      fontWeight: '500',
      borderBottom: '1px solid #f5f5f5',
    },
    dropdownIcon: {
      fontSize: '20px',
      minWidth: '32px',
    },
    dropdownContent: {
      flex: 1,
    },
    dropdownName: {
      fontWeight: '600',
      marginBottom: '2px',
    },
    dropdownDesc: {
      fontSize: '11px',
      color: '#9ca3af',
    },
    orderButton: {
      padding: '10px 28px',
      background: 'linear-gradient(135deg, #b45309, #78350f)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(180, 83, 9, 0.3)',
      marginLeft: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    mobileButton: {
      display: isMobile ? 'block' : 'none',
      background: '#fef3c7',
      border: 'none',
      padding: '10px 14px',
      borderRadius: '10px',
      cursor: 'pointer',
      color: '#78350f',
      fontSize: '24px',
      fontWeight: 'bold',
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
      width: '340px',
      height: '100%',
      background: 'white',
      zIndex: 1000,
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '-5px 0 30px rgba(0,0,0,0.2)',
      padding: '80px 20px 30px',
      overflowY: 'auto',
    },
    mobileNavLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 16px',
      margin: '5px 0',
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '600',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      fontSize: '16px',
    },
    mobileDropdownBtn: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '14px 16px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
      cursor: 'pointer',
      borderRadius: '12px',
    },
    mobileDropdownArrow: {
      fontSize: '12px',
      transition: 'transform 0.3s',
      transform: isMobileMenuDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
    },
    mobileDropdownItems: {
      maxHeight: isMobileMenuDropdownOpen ? '500px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease',
      paddingLeft: '20px',
    },
    mobileDropdownItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      textDecoration: 'none',
      color: '#6b7280',
      fontSize: '14px',
      fontWeight: '500',
      borderBottom: '1px solid #f0f0f0',
    },
    mobileOrderButton: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #b45309, #78350f)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>
          <a 
            href="/" 
            style={styles.logoContainer}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={logo} alt="Café Aura Logo" style={styles.logo} />
            <div style={styles.logoText}>
              <h1 style={styles.logoTitle}>Café Aura</h1>
              <p style={styles.logoSlogan}>SIP • RELAX • REPEAT</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav style={styles.desktopNav}>
            {navItems.map((item) => (
              <div 
                key={item.name} 
                style={styles.navItem} 
                className="menu-dropdown"
                onMouseEnter={() => item.hasDropdown && setIsMenuDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsMenuDropdownOpen(false)}
              >
                {item.hasDropdown ? (
                  <>
                    <span style={styles.navLink}>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    <div style={styles.dropdownMenu}>
                      {item.dropdownItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          style={styles.dropdownItem}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#fef3c7';
                            e.currentTarget.style.paddingLeft = '25px';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.paddingLeft = '20px';
                          }}
                        >
                          <span style={styles.dropdownIcon}>{subItem.icon}</span>
                          <div style={styles.dropdownContent}>
                            <div style={styles.dropdownName}>{subItem.name}</div>
                            <div style={styles.dropdownDesc}>{subItem.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    style={styles.navLink}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#b45309'}
                    onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#374151' : '#78350f'}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                )}
              </div>
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
              onClick={() => window.location.href = '/order'}
            >
              <span>🛒</span>
              <span>Order Now</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div style={styles.overlay} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        {navItems.map((item) => (
          <div key={item.name}>
            {item.hasDropdown ? (
              <>
                <button
                  style={styles.mobileDropdownBtn}
                  onClick={() => setIsMobileMenuDropdownOpen(!isMobileMenuDropdownOpen)}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#fef3c7'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  <span style={styles.mobileDropdownArrow}>▼</span>
                </button>
                <div style={styles.mobileDropdownItems}>
                  {item.dropdownItems.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      style={styles.mobileDropdownItem}
                      onClick={() => setIsMobileMenuOpen(false)}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#fef3c7'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ fontSize: '18px' }}>{subItem.icon}</span>
                      <span>{subItem.name}</span>
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a
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
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            )}
          </div>
        ))}
        <button 
          style={styles.mobileOrderButton}
          onClick={() => {
            window.location.href = '/order';
            setIsMobileMenuOpen(false);
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span>🛒</span>
          <span>Order Now</span>
        </button>
      </div>
    </>
  );
};

export default Header;