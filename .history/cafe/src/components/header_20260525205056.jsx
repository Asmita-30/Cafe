// src/components/header.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/cafelogo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isMobileMenuDropdownOpen, setIsMobileMenuDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [mobileActiveService, setMobileActiveService] = useState(null);
  const [mobileActiveMenuItem, setMobileActiveMenuItem] = useState(null);

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
        setActiveMenuItem(null);
      }
      if (isServicesDropdownOpen && !event.target.closest('.services-dropdown')) {
        setIsServicesDropdownOpen(false);
        setActiveService(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuDropdownOpen, isServicesDropdownOpen]);

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
        { name: 'Group Booking', icon: '👥', desc: 'Special discounts for groups', link: '/services/group-booking' },
        { name: 'Corporate Events', icon: '💼', desc: 'Professional event management', link: '/services/corporate' }
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
        { name: 'DJ Arrangements', icon: '🪩', desc: 'Professional DJ setups', link: '/services/dj' },
        { name: 'Club Events', icon: '💃', desc: 'Themed club nights', link: '/services/club' }
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
        { name: 'Coffee & Dessert Specials', icon: '🍰', desc: 'Exclusive combo offers', link: '/services/coffee-specials' },
        { name: 'Fine Dining', icon: '🍷', desc: 'Premium dining experience', link: '/services/fine-dining' }
      ]
    }
  ];

  // Menu Data - Compact with all items
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
    // Level 1 Dropdown
    level1Dropdown: {
      position: 'absolute',
      top: '45px',
      left: '0',
      width: '260px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      zIndex: 100,
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-15px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(180, 83, 9, 0.1)',
      overflow: 'hidden',
      maxHeight: '450px',
      overflowY: 'auto',
    },
    level1DropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
    dropdownItem: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid #f5f5f5',
      position: 'relative',
    },
    dropdownItemIcon: {
      fontSize: '20px',
      width: '32px',
    },
    dropdownItemContent: {
      flex: 1,
    },
    dropdownItemName: {
      fontWeight: '600',
      fontSize: '13px',
      color: '#374151',
      marginBottom: '2px',
    },
    dropdownItemDesc: {
      fontSize: '10px',
      color: '#9ca3af',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    dropdownArrow: {
      fontSize: '12px',
      color: '#9ca3af',
    },
    // Level 2 Dropdown (Services Subtypes)
    level2Dropdown: {
      position: 'absolute',
      top: '0',
      left: '100%',
      width: '280px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      border: '1px solid rgba(180, 83, 9, 0.1)',
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateX(-10px)',
      transition: 'all 0.25s ease',
      zIndex: 101,
      maxHeight: '400px',
      overflowY: 'auto',
    },
    level2DropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateX(0)',
    },
    level2Item: {
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid #f5f5f5',
    },
    level2ItemIcon: {
      fontSize: '18px',
      width: '30px',
    },
    level2ItemContent: {
      flex: 1,
    },
    level2ItemName: {
      fontWeight: '500',
      fontSize: '12px',
      color: '#374151',
    },
    level2ItemDesc: {
      fontSize: '10px',
      color: '#9ca3af',
    },
    // Menu Items (Compact)
    menuItemCompact: {
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
      padding: '8px 24px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    mobileButton: {
      display: isMobile ? 'block' : 'none',
      background: '#fef3c7',
      border: 'none',
      padding: '10px 14px',
      borderRadius: '10px',
      cursor: 'pointer',
      color: '#78350f',
      fontSize: '22px',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 999,
      display: isMobileMenuOpen ? 'block' : 'none',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '320px',
      height: '100%',
      background: 'white',
      zIndex: 1000,
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: '80px 20px 30px',
      overflowY: 'auto',
    },
    mobileNavLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '600',
      borderRadius: '10px',
      fontSize: '15px',
    },
    mobileDropdownBtn: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '12px 16px',
      fontSize: '15px',
      fontWeight: '600',
      color: '#374151',
      cursor: 'pointer',
      borderRadius: '10px',
    },
    mobileSubItems: {
      paddingLeft: '16px',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease',
    },
    mobileSubItemsOpen: {
      maxHeight: '500px',
    },
    mobileServiceItem: {
      padding: '10px 12px',
      borderRadius: '8px',
      marginBottom: '5px',
    },
    mobileMenuItem: {
      padding: '10px 12px',
      borderRadius: '8px',
      marginBottom: '5px',
    },
    mobileOrderButton: {
      width: '100%',
      padding: '12px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '15px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    // Scrollbar styles
    scrollbar: {
      scrollbarWidth: 'thin',
      scrollbarColor: '#f59e0b #fef3c7',
    },
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
                onMouseEnter={() => {
                  if (item.hasDropdown && item.type === 'services') {
                    setIsServicesDropdownOpen(true);
                    setActiveService(null);
                  }
                  if (item.hasDropdown && item.type === 'menu') {
                    setIsMenuDropdownOpen(true);
                    setActiveMenuItem(null);
                  }
                }}
                onMouseLeave={() => {
                  if (item.type === 'services') {
                    setIsServicesDropdownOpen(false);
                    setActiveService(null);
                  }
                  if (item.type === 'menu') {
                    setIsMenuDropdownOpen(false);
                    setActiveMenuItem(null);
                  }
                }}
              >
                {item.hasDropdown ? (
                  <>
                    <button style={styles.navLink}>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>

                    {/* Services Dropdown */}
                    {item.type === 'services' && (
                      <div style={{...styles.level1Dropdown, ...(isServicesDropdownOpen ? styles.level1DropdownVisible : {})}}>
                        {servicesData.map((service) => (
                          <div
                            key={service.id}
                            style={styles.dropdownItem}
                            onMouseEnter={() => setActiveService(service.id)}
                            onMouseLeave={() => setActiveService(null)}
                          >
                            <span style={styles.dropdownItemIcon}>{service.icon}</span>
                            <div style={styles.dropdownItemContent}>
                              <div style={styles.dropdownItemName}>{service.name}</div>
                              <div style={styles.dropdownItemDesc}>{service.subtypes.length} options</div>
                            </div>
                            <span style={styles.dropdownArrow}>→</span>

                            {/* Services Subtypes Dropdown */}
                            {activeService === service.id && (
                              <div style={{...styles.level2Dropdown, ...styles.level2DropdownVisible}}>
                                {service.subtypes.map((sub, idx) => (
                                  <div
                                    key={idx}
                                    style={styles.level2Item}
                                    onClick={() => navigateTo(sub.link)}
                                    onMouseEnter={(e) => e.currentTarget.style.background = service.bgColor}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                                  >
                                    <span style={styles.level2ItemIcon}>{sub.icon}</span>
                                    <div style={styles.level2ItemContent}>
                                      <div style={styles.level2ItemName}>{sub.name}</div>
                                      <div style={styles.level2ItemDesc}>{sub.desc}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Menu Dropdown - Compact with all items */}
                    {item.type === 'menu' && (
                      <div style={{...styles.level1Dropdown, ...(isMenuDropdownOpen ? styles.level1DropdownVisible : {}), width: '240px'}}>
                        {menuData.map((menuItem) => (
                          <div
                            key={menuItem.id}
                            style={styles.menuItemCompact}
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

      {/* Mobile Overlay & Menu */}
      <div style={styles.overlay} onClick={() => setIsMobileMenuOpen(false)}></div>
      <div style={styles.mobileMenu}>
        {navItems.map((item) => (
          <div key={item.name}>
            {item.hasDropdown ? (
              <>
                <button
                  style={styles.mobileDropdownBtn}
                  onClick={() => {
                    if (item.type === 'services') {
                      setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
                      setIsMobileMenuDropdownOpen(false);
                    } else if (item.type === 'menu') {
                      setIsMobileMenuDropdownOpen(!isMobileMenuDropdownOpen);
                      setIsMobileServicesDropdownOpen(false);
                    }
                  }}
                >
                  <span><span>{item.icon}</span> {item.name}</span>
                  <span>{isMobileServicesDropdownOpen || isMobileMenuDropdownOpen ? '▲' : '▼'}</span>
                </button>

                {/* Mobile Services */}
                {item.type === 'services' && (
                  <div style={{...styles.mobileSubItems, ...(isMobileServicesDropdownOpen ? styles.mobileSubItemsOpen : {})}}>
                    {servicesData.map((service) => (
                      <div key={service.id}>
                        <button
                          style={{...styles.mobileDropdownBtn, background: service.bgColor, marginBottom: '5px', fontSize: '14px', padding: '10px 12px'}}
                          onClick={() => setMobileActiveService(mobileActiveService === service.id ? null : service.id)}
                        >
                          <span><span>{service.icon}</span> {service.name}</span>
                          <span>{mobileActiveService === service.id ? '▲' : '▼'}</span>
                        </button>
                        <div style={{...styles.mobileSubItems, ...(mobileActiveService === service.id ? styles.mobileSubItemsOpen : {})}}>
                          {service.subtypes.map((sub, idx) => (
                            <div
                              key={idx}
                              style={{...styles.mobileServiceItem, background: '#f9fafb'}}
                              onClick={() => navigateTo(sub.link)}
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

                {/* Mobile Menu - Compact */}
                {item.type === 'menu' && (
                  <div style={{...styles.mobileSubItems, ...(isMobileMenuDropdownOpen ? styles.mobileSubItemsOpen : {})}}>
                    {menuData.map((menuItem) => (
                      <div
                        key={menuItem.id}
                        style={{...styles.mobileMenuItem, background: menuItem.bgColor}}
                        onClick={() => navigateToWithFilter(menuItem.filterId)}
                      >
                        <span>{menuItem.icon}</span> {menuItem.name}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a href={item.href} style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span>{item.icon}</span> {item.name}
              </a>
            )}
          </div>
        ))}
        <button style={styles.mobileOrderButton} onClick={() => { navigateTo('/order'); setIsMobileMenuOpen(false); }}>
          🛒 Order Now
        </button>
      </div>

      <style>
        {`
          /* Custom scrollbar for dropdowns */
          .services-dropdown::-webkit-scrollbar,
          .menu-dropdown::-webkit-scrollbar,
          div[style*="overflowY: auto"]::-webkit-scrollbar {
            width: 5px;
          }
          .services-dropdown::-webkit-scrollbar-track,
          .menu-dropdown::-webkit-scrollbar-track,
          div[style*="overflowY: auto"]::-webkit-scrollbar-track {
            background: #fef3c7;
            border-radius: 10px;
          }
          .services-dropdown::-webkit-scrollbar-thumb,
          .menu-dropdown::-webkit-scrollbar-thumb,
          div[style*="overflowY: auto"]::-webkit-scrollbar-thumb {
            background: #f59e0b;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Header;