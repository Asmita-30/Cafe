// src/components/header.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/cafelogo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [openServiceCategory, setOpenServiceCategory] = useState(null);
  const [isMobileMenuDropdownOpen, setIsMobileMenuDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [mobileOpenServiceCategory, setMobileOpenServiceCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
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
        setOpenServiceCategory(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuDropdownOpen, isServicesDropdownOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const navigateToWithFilter = (filterId) => {
    localStorage.setItem('menuFilter', filterId);
    window.location.href = '/menu';
  };

  // Services Data
  const servicesData = [
    {
      id: 1,
      name: '🎉 Family Celebrations',
      icon: '🎉',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      subtypes: [
        { name: 'Birthday Parties', icon: '🎂', desc: 'Customized birthday celebrations', link: '/services/birthday' },
        { name: 'Anniversary Celebrations', icon: '💑', desc: 'Romantic anniversary setups', link: '/services/anniversary' },
        { name: 'Family Gatherings', icon: '👨‍👩‍👧‍👦', desc: 'Spacious family dining area', link: '/services/family-gathering' }
      ]
    },
    {
      id: 2,
      name: '🥳 Party Events',
      icon: '🥳',
      color: '#ec4899',
      bgColor: '#fce7f3',
      subtypes: [
        { name: 'Private Parties', icon: '🎈', desc: 'Exclusive party arrangements', link: '/services/private-party' },
        { name: 'Group Booking', icon: '👥', desc: 'Special discounts for groups', link: '/services/group-booking' }
      ]
    },
    {
      id: 3,
      name: '🎧 DJ & Club',
      icon: '🎧',
      color: '#4f46e5',
      bgColor: '#e0e7ff',
      subtypes: [
        { name: 'Live Music Nights', icon: '🎸', desc: 'Live band performances', link: '/services/live-music' },
        { name: 'DJ Arrangements', icon: '🪩', desc: 'Professional DJ setups', link: '/services/dj' }
      ]
    },
    {
      id: 4,
      name: '☕ Dining',
      icon: '☕',
      color: '#22c55e',
      bgColor: '#dcfce7',
      subtypes: [
        { name: 'Family Dining', icon: '🍽️', desc: 'Cozy family atmosphere', link: '/services/family-dining' },
        { name: 'Coffee & Dessert Specials', icon: '🍰', desc: 'Exclusive combo offers', link: '/services/coffee-specials' }
      ]
    }
  ];

  // Menu Data
  const menuData = [
    { id: 1, name: '☕ Hot Coffees', icon: '☕', color: '#78350f', bgColor: '#fef3c7', filterId: 'coffee' },
    { id: 2, name: '🧊 Cold Coffees', icon: '🧊', color: '#3b82f6', bgColor: '#dbeafe', filterId: 'cold' },
    { id: 3, name: '🍵 Teas & Chai', icon: '🍵', color: '#10b981', bgColor: '#d1fae5', filterId: 'tea' },
    { id: 4, name: '🥐 Fresh Bakery', icon: '🥐', color: '#f59e0b', bgColor: '#fef3c7', filterId: 'bakery' },
    { id: 5, name: '🍳 Breakfast', icon: '🍳', color: '#ef4444', bgColor: '#fee2e2', filterId: 'breakfast' },
    { id: 6, name: '🍝 Lunch & Dinner', icon: '🍝', color: '#8b5cf6', bgColor: '#ede9fe', filterId: 'lunch' },
    { id: 7, name: '🍰 Desserts', icon: '🍰', color: '#ec4899', bgColor: '#fce7f3', filterId: 'desserts' },
    { id: 8, name: '🥤 Smoothies', icon: '🥤', color: '#06b6d4', bgColor: '#cffafe', filterId: 'smoothies' },
    { id: 9, name: '✨ Signature Drinks', icon: '✨', color: '#f59e0b', bgColor: '#fef3c7', filterId: 'signature' },
    { id: 10, name: '🥪 Sandwiches', icon: '🥪', color: '#84cc16', bgColor: '#ecfccb', filterId: 'sandwiches' },
    { id: 11, name: '🥗 Salads', icon: '🥗', color: '#22c55e', bgColor: '#dcfce7', filterId: 'salads' }
  ];

  const navItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '📖' },
    { name: 'Services', href: '/services', icon: '🎉', hasDropdown: true, type: 'services' },
    { name: 'Menu', href: '/menu', icon: '🍽️', hasDropdown: true, type: 'menu' },
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
    },
    logoSlogan: {
      fontSize: '10px',
      color: '#b45309',
      letterSpacing: '3px',
      margin: 0,
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
      fontSize: '15px',
      padding: '8px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontFamily: 'inherit',
    },
    // Services Dropdown
    servicesDropdown: {
      position: 'absolute',
      top: '45px',
      left: '0',
      width: '320px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      zIndex: 100,
      border: '1px solid rgba(180, 83, 9, 0.1)',
      overflow: 'hidden',
      maxHeight: '500px',
      overflowY: 'auto',
    },
    serviceCategory: {
      borderBottom: '1px solid #f0f0f0',
    },
    serviceCategoryHeader: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      width: '100%',
      background: 'none',
      border: 'none',
      textAlign: 'left',
    },
    serviceCategoryIcon: {
      fontSize: '20px',
      width: '32px',
    },
    serviceCategoryName: {
      flex: 1,
      fontWeight: '600',
      fontSize: '13px',
      color: '#374151',
    },
    serviceCategoryArrow: {
      fontSize: '12px',
      color: '#9ca3af',
      transition: 'transform 0.2s ease',
    },
    serviceSubtypes: {
      display: 'none',
      background: '#fafafa',
    },
    serviceSubtypesOpen: {
      display: 'block',
    },
    serviceSubtypeItem: {
      padding: '10px 16px 10px 48px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderTop: '1px solid #f5f5f5',
    },
    serviceSubtypeIcon: {
      fontSize: '16px',
      width: '28px',
    },
    serviceSubtypeContent: {
      flex: 1,
    },
    serviceSubtypeName: {
      fontSize: '12px',
      fontWeight: '500',
      color: '#374151',
    },
    serviceSubtypeDesc: {
      fontSize: '10px',
      color: '#9ca3af',
    },
    // Menu Dropdown
    menuDropdown: {
      position: 'absolute',
      top: '45px',
      left: '0',
      width: '240px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      zIndex: 100,
      border: '1px solid rgba(180, 83, 9, 0.1)',
      overflow: 'hidden',
      maxHeight: '450px',
      overflowY: 'auto',
    },
    menuItem: {
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid #f5f5f5',
    },
    menuItemIcon: {
      fontSize: '18px',
      width: '30px',
    },
    menuItemName: {
      fontSize: '13px',
      fontWeight: '500',
      color: '#374151',
    },
    orderButton: {
      padding: '10px 28px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(245,158,11,0.3)',
    },
    // Mobile Toggle Button (Hamburger)
    mobileToggle: {
      display: isMobile ? 'flex' : 'none',
      background: '#fef3c7',
      border: 'none',
      width: '45px',
      height: '45px',
      borderRadius: '12px',
      cursor: 'pointer',
      color: '#78350f',
      fontSize: '24px',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1001,
      transition: 'all 0.3s ease',
    },
    // Sidebar Overlay
    sidebarOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.6)',
      zIndex: 999,
      opacity: isSidebarOpen ? 1 : 0,
      visibility: isSidebarOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
    },
    // Sidebar Menu
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '85%',
      maxWidth: '350px',
      height: '100%',
      background: 'white',
      zIndex: 1000,
      transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '-5px 0 30px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
    },
    sidebarHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      borderBottom: '1px solid #f0f0f0',
      background: '#fefaf5',
    },
    sidebarLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    sidebarLogoImg: {
      height: '40px',
      width: 'auto',
    },
    sidebarLogoText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#78350f',
    },
    closeBtn: {
      background: '#fef3c7',
      border: 'none',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      fontSize: '18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#78350f',
    },
    sidebarNav: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
    },
    sidebarNavLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 16px',
      margin: '5px 0',
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '600',
      borderRadius: '12px',
      fontSize: '16px',
      transition: 'all 0.2s ease',
      width: '100%',
      background: 'none',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
    },
    sidebarDropdownBtn: {
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
      transition: 'all 0.2s ease',
    },
    sidebarSubItems: {
      paddingLeft: '20px',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'maxHeight 0.3s ease',
    },
    sidebarSubItemsOpen: {
      maxHeight: '600px',
    },
    sidebarServiceCategory: {
      marginBottom: '5px',
    },
    sidebarServiceSubtypes: {
      paddingLeft: '35px',
    },
    sidebarServiceSubtype: {
      padding: '10px 12px',
      borderRadius: '8px',
      marginBottom: '5px',
      fontSize: '14px',
      cursor: 'pointer',
    },
    sidebarMenuItem: {
      padding: '10px 12px',
      borderRadius: '8px',
      marginBottom: '5px',
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
    },
    sidebarOrderBtn: {
      margin: '20px',
      padding: '14px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
  };

  const handleServiceCategoryClick = (categoryId) => {
    setOpenServiceCategory(openServiceCategory === categoryId ? null : categoryId);
  };

  const handleMobileServiceCategoryClick = (categoryId) => {
    setMobileOpenServiceCategory(mobileOpenServiceCategory === categoryId ? null : categoryId);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setMobileOpenServiceCategory(null);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileMenuDropdownOpen(false);
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
                className={item.type === 'menu' ? 'menu-dropdown' : (item.type === 'services' ? 'services-dropdown' : '')}
              >
                {item.hasDropdown ? (
                  <>
                    <button 
                      style={styles.navLink}
                      onClick={() => {
                        if (item.type === 'services') {
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                          if (!isServicesDropdownOpen) setOpenServiceCategory(null);
                        } else if (item.type === 'menu') {
                          setIsMenuDropdownOpen(!isMenuDropdownOpen);
                        }
                      }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>

                    {/* Services Dropdown */}
                    {item.type === 'services' && isServicesDropdownOpen && (
                      <div style={styles.servicesDropdown}>
                        {servicesData.map((service) => (
                          <div key={service.id} style={styles.serviceCategory}>
                            <button 
                              style={styles.serviceCategoryHeader}
                              onClick={() => handleServiceCategoryClick(service.id)}
                              onMouseEnter={(e) => e.currentTarget.style.background = service.bgColor}
                              onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                            >
                              <span style={styles.serviceCategoryIcon}>{service.icon}</span>
                              <span style={styles.serviceCategoryName}>{service.name}</span>
                              <span style={{
                                ...styles.serviceCategoryArrow,
                                transform: openServiceCategory === service.id ? 'rotate(180deg)' : 'rotate(0deg)'
                              }}>▼</span>
                            </button>
                            <div style={{
                              ...styles.serviceSubtypes,
                              ...(openServiceCategory === service.id ? styles.serviceSubtypesOpen : {})
                            }}>
                              {service.subtypes.map((sub, idx) => (
                                <div
                                  key={idx}
                                  style={styles.serviceSubtypeItem}
                                  onClick={() => navigateTo(sub.link)}
                                  onMouseEnter={(e) => e.currentTarget.style.background = '#f0f0f0'}
                                  onMouseLeave={(e) => e.currentTarget.style.background = '#fafafa'}
                                >
                                  <span style={styles.serviceSubtypeIcon}>{sub.icon}</span>
                                  <div style={styles.serviceSubtypeContent}>
                                    <div style={styles.serviceSubtypeName}>{sub.name}</div>
                                    <div style={styles.serviceSubtypeDesc}>{sub.desc}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Menu Dropdown */}
                    {item.type === 'menu' && isMenuDropdownOpen && (
                      <div style={styles.menuDropdown}>
                        {menuData.map((menuItem) => (
                          <div
                            key={menuItem.id}
                            style={styles.menuItem}
                            onClick={() => navigateToWithFilter(menuItem.filterId)}
                            onMouseEnter={(e) => e.currentTarget.style.background = menuItem.bgColor}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                          >
                            <span style={styles.menuItemIcon}>{menuItem.icon}</span>
                            <span style={styles.menuItemName}>{menuItem.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button 
                    onClick={() => navigateTo(item.href)} 
                    style={styles.navLink}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                )}
              </div>
            ))}
            <button 
              style={styles.orderButton}
              onClick={() => navigateTo('/order')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(245,158,11,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(245,158,11,0.3)';
              }}
            >
              🛒 Order Now
            </button>
          </nav>

          {/* Mobile Toggle Button (Hamburger) */}
          <button 
            style={styles.mobileToggle}
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div style={styles.sidebarOverlay} onClick={closeSidebar}></div>
      
      {/* Mobile Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <div style={styles.sidebarLogo}>
            <img src={logo} alt="Café Aura" style={styles.sidebarLogoImg} />
            <span style={styles.sidebarLogoText}>Café Aura</span>
          </div>
          <button style={styles.closeBtn} onClick={closeSidebar}>✕</button>
        </div>

        <div style={styles.sidebarNav}>
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <>
                  <button
                    style={styles.sidebarDropdownBtn}
                    onClick={() => {
                      if (item.type === 'services') {
                        setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
                        setIsMobileMenuDropdownOpen(false);
                        if (!isMobileServicesDropdownOpen) setMobileOpenServiceCategory(null);
                      } else if (item.type === 'menu') {
                        setIsMobileMenuDropdownOpen(!isMobileMenuDropdownOpen);
                        setIsMobileServicesDropdownOpen(false);
                      }
                    }}
                  >
                    <span><span>{item.icon}</span> {item.name}</span>
                    <span>{isMobileServicesDropdownOpen || isMobileMenuDropdownOpen ? '▲' : '▼'}</span>
                  </button>

                  {/* Mobile Services Dropdown */}
                  {item.type === 'services' && isMobileServicesDropdownOpen && (
                    <div style={{...styles.sidebarSubItems, ...styles.sidebarSubItemsOpen}}>
                      {servicesData.map((service) => (
                        <div key={service.id} style={styles.sidebarServiceCategory}>
                          <button
                            style={{...styles.sidebarDropdownBtn, background: service.bgColor, marginBottom: '5px', fontSize: '14px', padding: '10px 12px'}}
                            onClick={() => handleMobileServiceCategoryClick(service.id)}
                          >
                            <span><span>{service.icon}</span> {service.name}</span>
                            <span>{mobileOpenServiceCategory === service.id ? '▲' : '▼'}</span>
                          </button>
                          <div style={{...styles.sidebarSubItems, ...(mobileOpenServiceCategory === service.id ? styles.sidebarSubItemsOpen : {}), paddingLeft: '30px'}}>
                            {service.subtypes.map((sub, idx) => (
                              <div
                                key={idx}
                                style={{...styles.sidebarServiceSubtype, background: '#f9fafb'}}
                                onClick={() => {
                                  navigateTo(sub.link);
                                  closeSidebar();
                                }}
                              >
                                <div><span>{sub.icon}</span> {sub.name}</div>
                                <div style={{fontSize: '11px', color: '#6b7280', marginTop: '3px'}}>{sub.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mobile Menu Dropdown */}
                  {item.type === 'menu' && isMobileMenuDropdownOpen && (
                    <div style={{...styles.sidebarSubItems, ...styles.sidebarSubItemsOpen}}>
                      {menuData.map((menuItem) => (
                        <div
                          key={menuItem.id}
                          style={{...styles.sidebarMenuItem, background: menuItem.bgColor}}
                          onClick={() => {
                            navigateToWithFilter(menuItem.filterId);
                            closeSidebar();
                          }}
                        >
                          <span>{menuItem.icon}</span> {menuItem.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button 
                  onClick={() => {
                    navigateTo(item.href);
                    closeSidebar();
                  }} 
                  style={styles.sidebarNavLink}
                >
                  <span>{item.icon}</span> {item.name}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Order Button */}
        <button 
          style={styles.sidebarOrderBtn} 
          onClick={() => { 
            navigateTo('/order'); 
            closeSidebar(); 
          }}
        >
          🛒 Order Now
        </button>
      </div>

      <style>
        {`
          div[style*="overflowY: auto"]::-webkit-scrollbar {
            width: 5px;
          }
          div[style*="overflowY: auto"]::-webkit-scrollbar-track {
            background: #fef3c7;
            border-radius: 10px;
          }
          div[style*="overflowY: auto"]::-webkit-scrollbar-thumb {
            background: #f59e0b;
            border-radius: 10px;
          }
          button {
            cursor: pointer;
          }
          @media (max-width: 768px) {
            .desktop-nav {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;