// src/components/header.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/cafelogo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuDropdownOpen, setIsMobileMenuDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);

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
      if (isServicesDropdownOpen && !event.target.closest('.services-dropdown')) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuDropdownOpen, isServicesDropdownOpen]);

  // Navigation function with filter support
  const navigateToWithFilter = (filterId) => {
    localStorage.setItem('menuFilter', filterId);
    window.location.href = '/menu';
  };

  const navigateTo = (path) => {
    window.location.href = path;
  };

  // Services dropdown items with attractive sub-items
  const servicesItems = [
    { 
      id: 1,
      name: '🎉 Family Celebrations', 
      icon: '🎉',
      bgColor: '#fef3c7',
      iconColor: '#f59e0b',
      desc: 'Create unforgettable memories with your loved ones',
      items: [
        { name: 'Birthday Parties', icon: '🎂', desc: 'Customized birthday celebrations' },
        { name: 'Anniversary Celebrations', icon: '💑', desc: 'Romantic anniversary setups' },
        { name: 'Family Gatherings', icon: '👨‍👩‍👧‍👦', desc: 'Spacious family dining area' }
      ]
    },
    { 
      id: 2,
      name: '🥳 Party Events', 
      icon: '🥳',
      bgColor: '#fce7f3',
      iconColor: '#ec4899',
      desc: 'Host the perfect party with us',
      items: [
        { name: 'Private Parties', icon: '🎈', desc: 'Exclusive party arrangements' },
        { name: 'Group Booking', icon: '👥', desc: 'Special discounts for groups' },
        { name: 'Corporate Events', icon: '💼', desc: 'Professional event management' }
      ]
    },
    { 
      id: 3,
      name: '🎧 DJ & Club', 
      icon: '🎧',
      bgColor: '#e0e7ff',
      iconColor: '#4f46e5',
      desc: 'Experience the best nightlife',
      items: [
        { name: 'Live Music Nights', icon: '🎸', desc: 'Live band performances' },
        { name: 'DJ Arrangements', icon: '🪩', desc: 'Professional DJ setups' },
        { name: 'Club Events', icon: '💃', desc: 'Themed club nights' }
      ]
    },
    { 
      id: 4,
      name: '☕ Dining', 
      icon: '☕',
      bgColor: '#dcfce7',
      iconColor: '#22c55e',
      desc: 'Exquisite dining experience',
      items: [
        { name: 'Family Dining', icon: '🍽️', desc: 'Cozy family atmosphere' },
        { name: 'Coffee & Dessert Specials', icon: '🍰', desc: 'Exclusive combo offers' },
        { name: 'Fine Dining', icon: '🍷', desc: 'Premium dining experience' }
      ]
    }
  ];

  // Menu dropdown items
  const menuItems = [
    { name: 'All Items', filterId: 'all', icon: '🍽️', desc: 'View complete menu', color: '#f59e0b' },
    { name: 'Hot Coffees', filterId: 'coffee', icon: '☕', desc: 'Espresso, Latte, Cappuccino', color: '#78350f' },
    { name: 'Cold Coffees', filterId: 'cold', icon: '🧊', desc: 'Iced Coffee, Frappé', color: '#3b82f6' },
    { name: 'Teas & Chai', filterId: 'tea', icon: '🍵', desc: 'Green Tea, Masala Chai', color: '#10b981' },
    { name: 'Fresh Bakery', filterId: 'bakery', icon: '🥐', desc: 'Croissants, Muffins, Cookies', color: '#f59e0b' },
    { name: 'Breakfast', filterId: 'breakfast', icon: '🍳', desc: 'Eggs, Pancakes, Omelettes', color: '#ef4444' },
    { name: 'Lunch & Dinner', filterId: 'lunch', icon: '🍝', desc: 'Pasta, Burgers, Pizza', color: '#8b5cf6' },
    { name: 'Desserts', filterId: 'desserts', icon: '🍰', desc: 'Cakes, Pastries, Ice Cream', color: '#ec4899' },
    { name: 'Smoothies', filterId: 'smoothies', icon: '🥤', desc: 'Fruit & Protein Smoothies', color: '#06b6d4' },
    { name: 'Signature Drinks', filterId: 'signature', icon: '✨', desc: 'Chef Special Beverages', color: '#f59e0b' },
    { name: 'Sandwiches', filterId: 'sandwiches', icon: '🥪', desc: 'Grilled & Cold Sandwiches', color: '#84cc16' },
    { name: 'Salads', filterId: 'salads', icon: '🥗', desc: 'Fresh & Healthy Bowls', color: '#22c55e' }
  ];

  const navItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '📖' },
    { 
      name: 'Services', 
      href: '/services',
      icon: '🎉',
      hasDropdown: true,
      dropdownType: 'services'
    },
    { 
      name: 'Menu', 
      href: '/menu',
      icon: '🍽️',
      hasDropdown: true,
      dropdownType: 'menu'
    },
    { name: 'Contact', href: '/contact', icon: '📞' },
    { name: 'Order', href: '/order', icon: '🛒' }
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
      gap: '35px',
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
    // Services Dropdown Styles
    servicesDropdown: {
      position: 'absolute',
      top: '45px',
      left: '-180px',
      width: '500px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
      padding: '20px',
      zIndex: 100,
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-15px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(245,158,11,0.2)',
    },
    servicesDropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
    },
    serviceCard: {
      padding: '15px',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    serviceHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '12px',
    },
    serviceIcon: {
      fontSize: '32px',
    },
    serviceName: {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: 0,
    },
    serviceDesc: {
      fontSize: '11px',
      color: '#6b7280',
      marginBottom: '12px',
      lineHeight: '1.4',
    },
    serviceItems: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    serviceItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      background: 'rgba(0,0,0,0.04)',
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '11px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    serviceItemIcon: {
      fontSize: '12px',
    },
    // Menu Dropdown Styles
    menuDropdown: {
      position: 'absolute',
      top: '45px',
      left: '-150px',
      width: '450px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
      padding: '15px',
      zIndex: 100,
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-15px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(245,158,11,0.2)',
      maxHeight: '450px',
      overflowY: 'auto',
    },
    menuDropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
    },
    menuCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    menuIcon: {
      fontSize: '24px',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
    },
    menuInfo: {
      flex: 1,
    },
    menuName: {
      fontSize: '13px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '2px',
    },
    menuDesc: {
      fontSize: '10px',
      color: '#9ca3af',
    },
    orderButton: {
      padding: '10px 28px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(245,158,11,0.3)',
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
    },
    mobileDropdownItems: {
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease',
      paddingLeft: '20px',
    },
    mobileDropdownItemsOpen: {
      maxHeight: '600px',
    },
    mobileServiceItem: {
      padding: '12px 16px',
      margin: '8px 0',
      borderRadius: '12px',
    },
    mobileMenuItem: {
      padding: '10px 16px',
      margin: '5px 0',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    mobileOrderButton: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
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

  const handleMenuClick = (filterId) => {
    setIsMenuDropdownOpen(false);
    navigateToWithFilter(filterId);
  };

  const handleServiceClick = () => {
    setIsServicesDropdownOpen(false);
    navigateTo('/services');
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>
          <a href="/" style={styles.logoContainer}>
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
                className={item.name === 'Menu' ? 'menu-dropdown' : (item.name === 'Services' ? 'services-dropdown' : '')}
                onMouseEnter={() => {
                  if (item.hasDropdown && item.name === 'Menu') setIsMenuDropdownOpen(true);
                  if (item.hasDropdown && item.name === 'Services') setIsServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown && item.name === 'Menu') setIsMenuDropdownOpen(false);
                  if (item.hasDropdown && item.name === 'Services') setIsServicesDropdownOpen(false);
                }}
              >
                {item.hasDropdown ? (
                  <>
                    <button 
                      style={{...styles.navLink}}
                      onClick={() => item.name === 'Menu' ? navigateTo('/menu') : navigateTo('/services')}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && (
                      <div style={{
                        ...styles.servicesDropdown,
                        ...(isServicesDropdownOpen ? styles.servicesDropdownVisible : {})
                      }}>
                        <div style={styles.servicesGrid}>
                          {servicesItems.map((service) => (
                            <div
                              key={service.id}
                              style={{
                                ...styles.serviceCard,
                                background: service.bgColor,
                              }}
                              onClick={handleServiceClick}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            >
                              <div style={styles.serviceHeader}>
                                <span style={styles.serviceIcon}>{service.icon}</span>
                                <span style={{...styles.serviceName, color: service.iconColor}}>
                                  {service.name}
                                </span>
                              </div>
                              <p style={styles.serviceDesc}>{service.desc}</p>
                              <div style={styles.serviceItems}>
                                {service.items.map((subItem, idx) => (
                                  <span
                                    key={idx}
                                    style={styles.serviceItem}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.background = service.iconColor + '20';
                                      e.currentTarget.style.transform = 'scale(1.02)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.background = 'rgba(0,0,0,0.04)';
                                      e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                  >
                                    <span style={styles.serviceItemIcon}>{subItem.icon}</span>
                                    <span>{subItem.name}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Menu Dropdown */}
                    {item.name === 'Menu' && (
                      <div style={{
                        ...styles.menuDropdown,
                        ...(isMenuDropdownOpen ? styles.menuDropdownVisible : {})
                      }}>
                        <div style={styles.menuGrid}>
                          {menuItems.map((menuItem) => (
                            <div
                              key={menuItem.name}
                              style={styles.menuCard}
                              onClick={() => handleMenuClick(menuItem.filterId)}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#fef3c7';
                                e.currentTarget.style.transform = 'translateX(3px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <div style={{...styles.menuIcon, background: menuItem.color + '15', color: menuItem.color}}>
                                {menuItem.icon}
                              </div>
                              <div style={styles.menuInfo}>
                                <div style={styles.menuName}>{menuItem.name}</div>
                                <div style={styles.menuDesc}>{menuItem.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a href={item.href} style={styles.navLink}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                )}
              </div>
            ))}
          </nav>
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
                  onClick={() => {
                    if (item.name === 'Menu') {
                      setIsMobileMenuDropdownOpen(!isMobileMenuDropdownOpen);
                    } else if (item.name === 'Services') {
                      setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
                    }
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </span>
                  <span style={{
                    ...styles.mobileDropdownArrow,
                    transform: (item.name === 'Menu' && isMobileMenuDropdownOpen) || (item.name === 'Services' && isMobileServicesDropdownOpen) ? 'rotate(180deg)' : 'rotate(0)'
                  }}>▼</span>
                </button>
                
                {/* Mobile Services Dropdown */}
                {item.name === 'Services' && (
                  <div style={{
                    ...styles.mobileDropdownItems,
                    ...(isMobileServicesDropdownOpen ? styles.mobileDropdownItemsOpen : {})
                  }}>
                    {servicesItems.map((service) => (
                      <div
                        key={service.id}
                        style={{...styles.mobileServiceItem, background: service.bgColor}}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          navigateTo('/services');
                        }}
                      >
                        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
                          <span style={{fontSize: '24px'}}>{service.icon}</span>
                          <span style={{fontWeight: 'bold', color: service.iconColor}}>{service.name}</span>
                        </div>
                        <p style={{fontSize: '11px', color: '#6b7280', marginBottom: '8px'}}>{service.desc}</p>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
                          {service.items.map((sub, idx) => (
                            <span key={idx} style={{background: 'rgba(0,0,0,0.05)', padding: '2px 8px', borderRadius: '15px', fontSize: '10px'}}>
                              {sub.icon} {sub.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile Menu Dropdown */}
                {item.name === 'Menu' && (
                  <div style={{
                    ...styles.mobileDropdownItems,
                    ...(isMobileMenuDropdownOpen ? styles.mobileDropdownItemsOpen : {})
                  }}>
                    {menuItems.map((menuItem) => (
                      <div
                        key={menuItem.name}
                        style={{...styles.mobileMenuItem, background: menuItem.color + '10'}}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          navigateToWithFilter(menuItem.filterId);
                        }}
                      >
                        <span style={{fontSize: '20px'}}>{menuItem.icon}</span>
                        <div style={{flex: 1}}>
                          <div style={{fontWeight: '600', fontSize: '14px'}}>{menuItem.name}</div>
                          <div style={{fontSize: '10px', color: '#9ca3af'}}>{menuItem.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a href={item.href} style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            )}
          </div>
        ))}
        <button 
          style={styles.mobileOrderButton}
          onClick={() => {
            navigateTo('/order');
            setIsMobileMenuOpen(false);
          }}
        >
          <span>🛒</span>
          <span>Order Now</span>
        </button>
      </div>
    </>
  );
};

export default Header;