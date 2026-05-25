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

  // Services data with nested structure
  const servicesData = [
    {
      id: 1,
      name: '🎉 Family Celebrations',
      icon: '🎉',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      description: 'Create unforgettable memories with your loved ones',
      subtypes: [
        { name: 'Birthday Parties', icon: '🎂', desc: 'Customized birthday celebrations with cake and decorations', price: 'Starting ₹5000', link: '/services/birthday' },
        { name: 'Anniversary Celebrations', icon: '💑', desc: 'Romantic anniversary setups with special menu', price: 'Starting ₹4000', link: '/services/anniversary' },
        { name: 'Family Gatherings', icon: '👨‍👩‍👧‍👦', desc: 'Spacious family dining area with group packages', price: 'Starting ₹3000', link: '/services/family-gathering' }
      ]
    },
    {
      id: 2,
      name: '🥳 Party Events',
      icon: '🥳',
      color: '#ec4899',
      bgColor: '#fce7f3',
      description: 'Host the perfect party with us',
      subtypes: [
        { name: 'Private Parties', icon: '🎈', desc: 'Exclusive party arrangements with customized menu', price: 'Starting ₹8000', link: '/services/private-party' },
        { name: 'Group Booking', icon: '👥', desc: 'Special discounts for groups of 10+ people', price: '10% off', link: '/services/group-booking' },
        { name: 'Corporate Events', icon: '💼', desc: 'Professional event management for companies', price: 'Custom pricing', link: '/services/corporate' }
      ]
    },
    {
      id: 3,
      name: '🎧 DJ & Club',
      icon: '🎧',
      color: '#4f46e5',
      bgColor: '#e0e7ff',
      description: 'Experience the best nightlife',
      subtypes: [
        { name: 'Live Music Nights', icon: '🎸', desc: 'Live band performances every weekend', price: 'Entry ₹500', link: '/services/live-music' },
        { name: 'DJ Arrangements', icon: '🪩', desc: 'Professional DJ setups for events', price: 'Starting ₹10000', link: '/services/dj' },
        { name: 'Club Events', icon: '💃', desc: 'Themed club nights with special offers', price: 'Entry ₹600', link: '/services/club' }
      ]
    },
    {
      id: 4,
      name: '☕ Dining',
      icon: '☕',
      color: '#22c55e',
      bgColor: '#dcfce7',
      description: 'Exquisite dining experience',
      subtypes: [
        { name: 'Family Dining', icon: '🍽️', desc: 'Cozy family atmosphere with kid-friendly menu', price: 'Avg ₹500/person', link: '/services/family-dining' },
        { name: 'Coffee & Dessert Specials', icon: '🍰', desc: 'Exclusive combo offers on coffee and desserts', price: 'Starting ₹299', link: '/services/coffee-specials' },
        { name: 'Fine Dining', icon: '🍷', desc: 'Premium dining experience with curated menu', price: 'Avg ₹1200/person', link: '/services/fine-dining' }
      ]
    }
  ];

  // Menu data with nested structure
  const menuData = [
    {
      id: 1,
      name: '☕ Hot Coffees',
      icon: '☕',
      color: '#78350f',
      bgColor: '#fef3c7',
      subtypes: [
        { name: 'Espresso', price: '₹180', desc: 'Strong and bold shot of pure coffee', filterId: 'espresso' },
        { name: 'Caffè Latte', price: '₹220', desc: 'Espresso with steamed milk and light foam', filterId: 'latte' },
        { name: 'Cappuccino', price: '₹220', desc: 'Espresso with equal parts steamed milk and foam', filterId: 'cappuccino' },
        { name: 'Mocha', price: '₹260', desc: 'Espresso with chocolate and steamed milk', filterId: 'mocha' },
        { name: 'American', price: '₹190', desc: 'Espresso diluted with hot water', filterId: 'american' }
      ]
    },
    {
      id: 2,
      name: '🧊 Cold Coffees',
      icon: '🧊',
      color: '#3b82f6',
      bgColor: '#dbeafe',
      subtypes: [
        { name: 'Iced Latte', price: '₹240', desc: 'Chilled espresso with cold milk over ice', filterId: 'iced-latte' },
        { name: 'Iced Mocha', price: '₹270', desc: 'Chocolate espresso with cold milk', filterId: 'iced-mocha' },
        { name: 'Cold Brew', price: '₹230', desc: 'Slow-steeped coffee served cold', filterId: 'cold-brew' },
        { name: 'Frappuccino', price: '₹290', desc: 'Blended coffee with cream', filterId: 'frappuccino' }
      ]
    },
    {
      id: 3,
      name: '🍵 Teas & Chai',
      icon: '🍵',
      color: '#10b981',
      bgColor: '#d1fae5',
      subtypes: [
        { name: 'Masala Chai', price: '₹150', desc: 'Traditional spiced Indian tea', filterId: 'masala-chai' },
        { name: 'Green Tea', price: '₹140', desc: 'Healthy antioxidant-rich tea', filterId: 'green-tea' },
        { name: 'Ginger Tea', price: '₹140', desc: 'Fresh ginger infused tea', filterId: 'ginger-tea' },
        { name: 'Earl Grey', price: '₹160', desc: 'Classic black tea with bergamot', filterId: 'earl-grey' }
      ]
    },
    {
      id: 4,
      name: '🥐 Fresh Bakery',
      icon: '🥐',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      subtypes: [
        { name: 'Butter Croissant', price: '₹120', desc: 'Flaky, buttery French pastry', filterId: 'croissant' },
        { name: 'Chocolate Muffin', price: '₹110', desc: 'Rich chocolate chip muffin', filterId: 'chocolate-muffin' },
        { name: 'Chocolate Chip Cookie', price: '₹80', desc: 'Soft-baked cookie with chocolate chunks', filterId: 'cookie' },
        { name: 'Cinnamon Roll', price: '₹140', desc: 'Warm roll with cinnamon glaze', filterId: 'cinnamon-roll' }
      ]
    },
    {
      id: 5,
      name: '🍳 Breakfast',
      icon: '🍳',
      color: '#ef4444',
      bgColor: '#fee2e2',
      subtypes: [
        { name: 'Classic Pancakes', price: '₹220', desc: 'Fluffy pancakes with maple syrup', filterId: 'pancakes' },
        { name: 'Masala Omelette', price: '₹180', desc: 'Spiced egg omelette with toast', filterId: 'omelette' },
        { name: 'French Toast', price: '₹210', desc: 'Brioche toast with berries', filterId: 'french-toast' },
        { name: 'Eggs Benedict', price: '₹320', desc: 'Poached eggs with hollandaise', filterId: 'eggs-benedict' }
      ]
    },
    {
      id: 6,
      name: '🍝 Lunch & Dinner',
      icon: '🍝',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      subtypes: [
        { name: 'Margherita Pizza', price: '₹350', desc: 'Fresh mozzarella, basil, tomato', filterId: 'margherita' },
        { name: 'Veg Burger', price: '₹280', desc: 'Plant-based patty with fries', filterId: 'veg-burger' },
        { name: 'Chicken Burger', price: '₹320', desc: 'Grilled chicken burger', filterId: 'chicken-burger' },
        { name: 'Penne Arrabiata', price: '₹320', desc: 'Spicy tomato pasta', filterId: 'pasta' }
      ]
    },
    {
      id: 7,
      name: '🍰 Desserts',
      icon: '🍰',
      color: '#ec4899',
      bgColor: '#fce7f3',
      subtypes: [
        { name: 'Chocolate Cake', price: '₹180', desc: 'Rich flourless chocolate cake', filterId: 'chocolate-cake' },
        { name: 'Cheesecake', price: '₹200', desc: 'New York style cheesecake', filterId: 'cheesecake' },
        { name: 'Tiramisu', price: '₹220', desc: 'Classic Italian dessert', filterId: 'tiramisu' },
        { name: 'Brownie', price: '₹150', desc: 'Warm chocolate brownie', filterId: 'brownie' }
      ]
    },
    {
      id: 8,
      name: '🥤 Smoothies',
      icon: '🥤',
      color: '#06b6d4',
      bgColor: '#cffafe',
      subtypes: [
        { name: 'Berry Blast', price: '₹230', desc: 'Mixed berry smoothie', filterId: 'berry-blast' },
        { name: 'Mango Tango', price: '₹220', desc: 'Fresh mango smoothie', filterId: 'mango-tango' },
        { name: 'Protein Power', price: '₹260', desc: 'Banana protein smoothie', filterId: 'protein-power' }
      ]
    },
    {
      id: 9,
      name: '✨ Signature Drinks',
      icon: '✨',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      subtypes: [
        { name: 'Café Aura Special', price: '₹300', desc: 'Our signature caramel latte', filterId: 'aura-special' },
        { name: 'Hazelnut Dream', price: '₹280', desc: 'Hazelnut flavored coffee', filterId: 'hazelnut' },
        { name: 'Vanilla Bliss', price: '₹270', desc: 'Vanilla bean latte', filterId: 'vanilla-bliss' }
      ]
    },
    {
      id: 10,
      name: '🥪 Sandwiches',
      icon: '🥪',
      color: '#84cc16',
      bgColor: '#ecfccb',
      subtypes: [
        { name: 'Grilled Cheese', price: '₹180', desc: 'Classic grilled cheese sandwich', filterId: 'grilled-cheese' },
        { name: 'Club Sandwich', price: '₹250', desc: 'Triple-decker chicken club', filterId: 'club-sandwich' },
        { name: 'Veg Mayo Sandwich', price: '₹160', desc: 'Vegetable mayonnaise sandwich', filterId: 'veg-mayo' }
      ]
    },
    {
      id: 11,
      name: '🥗 Salads',
      icon: '🥗',
      color: '#22c55e',
      bgColor: '#dcfce7',
      subtypes: [
        { name: 'Caesar Salad', price: '₹240', desc: 'Romaine lettuce with croutons', filterId: 'caesar' },
        { name: 'Greek Salad', price: '₹260', desc: 'Feta, olives, cucumber', filterId: 'greek' },
        { name: 'Quinoa Bowl', price: '₹280', desc: 'Healthy quinoa with veggies', filterId: 'quinoa' }
      ]
    }
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
      fontSize: '16px',
      padding: '8px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontFamily: 'inherit',
    },
    // Main Dropdown
    mainDropdown: {
      position: 'absolute',
      top: '45px',
      left: '0',
      minWidth: '280px',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      zIndex: 100,
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-15px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(180, 83, 9, 0.1)',
      overflow: 'hidden',
    },
    mainDropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
    dropdownItem: {
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid #f5f5f5',
      position: 'relative',
    },
    dropdownItemIcon: {
      fontSize: '24px',
      width: '36px',
    },
    dropdownItemContent: {
      flex: 1,
    },
    dropdownItemName: {
      fontWeight: '600',
      fontSize: '14px',
      color: '#374151',
      marginBottom: '2px',
    },
    dropdownItemDesc: {
      fontSize: '11px',
      color: '#9ca3af',
    },
    dropdownArrow: {
      fontSize: '12px',
      color: '#9ca3af',
    },
    // Sub Dropdown
    subDropdown: {
      position: 'absolute',
      top: '0',
      left: '100%',
      width: '320px',
      background: 'white',
      borderRadius: '16px',
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
    subDropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateX(0)',
    },
    subItem: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid #f5f5f5',
    },
    subItemIcon: {
      fontSize: '20px',
      width: '32px',
    },
    subItemContent: {
      flex: 1,
    },
    subItemName: {
      fontWeight: '600',
      fontSize: '13px',
      color: '#374151',
    },
    subItemDesc: {
      fontSize: '10px',
      color: '#9ca3af',
      marginTop: '2px',
    },
    subItemPrice: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#f59e0b',
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
      width: '340px',
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
      padding: '14px 16px',
      textDecoration: 'none',
      color: '#374151',
      fontWeight: '600',
      borderRadius: '12px',
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
    mobileSubItems: {
      paddingLeft: '20px',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease',
    },
    mobileSubItemsOpen: {
      maxHeight: '500px',
    },
    mobileSubItem: {
      padding: '12px 16px',
      borderRadius: '10px',
      marginBottom: '5px',
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
                      <div style={{...styles.mainDropdown, ...(isServicesDropdownOpen ? styles.mainDropdownVisible : {})}}>
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
                              <div style={styles.dropdownItemDesc}>{service.description}</div>
                            </div>
                            <span style={styles.dropdownArrow}>→</span>

                            {/* Service Subtypes Dropdown */}
                            {activeService === service.id && (
                              <div style={{...styles.subDropdown, ...styles.subDropdownVisible}}>
                                {service.subtypes.map((sub, idx) => (
                                  <div
                                    key={idx}
                                    style={styles.subItem}
                                    onClick={() => navigateTo(sub.link)}
                                  >
                                    <span style={styles.subItemIcon}>{sub.icon}</span>
                                    <div style={styles.subItemContent}>
                                      <div style={styles.subItemName}>{sub.name}</div>
                                      <div style={styles.subItemDesc}>{sub.desc}</div>
                                    </div>
                                    <div style={styles.subItemPrice}>{sub.price}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Menu Dropdown */}
                    {item.type === 'menu' && (
                      <div style={{...styles.mainDropdown, ...(isMenuDropdownOpen ? styles.mainDropdownVisible : {}), minWidth: '300px'}}>
                        {menuData.map((menuItem) => (
                          <div
                            key={menuItem.id}
                            style={styles.dropdownItem}
                            onMouseEnter={() => setActiveMenuItem(menuItem.id)}
                            onMouseLeave={() => setActiveMenuItem(null)}
                          >
                            <span style={styles.dropdownItemIcon}>{menuItem.icon}</span>
                            <div style={styles.dropdownItemContent}>
                              <div style={styles.dropdownItemName}>{menuItem.name}</div>
                              <div style={styles.dropdownItemDesc}>{menuItem.subtypes.length} items available</div>
                            </div>
                            <span style={styles.dropdownArrow}>→</span>

                            {/* Menu Subtypes Dropdown */}
                            {activeMenuItem === menuItem.id && (
                              <div style={{...styles.subDropdown, ...styles.subDropdownVisible}}>
                                {menuItem.subtypes.map((sub, idx) => (
                                  <div
                                    key={idx}
                                    style={styles.subItem}
                                    onClick={() => navigateToWithFilter(sub.filterId)}
                                  >
                                    <span style={styles.subItemIcon}>{menuItem.icon}</span>
                                    <div style={styles.subItemContent}>
                                      <div style={styles.subItemName}>{sub.name}</div>
                                      <div style={styles.subItemDesc}>{sub.desc}</div>
                                    </div>
                                    <div style={styles.subItemPrice}>{sub.price}</div>
                                  </div>
                                ))}
                              </div>
                            )}
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

                {/* Mobile Services Submenu */}
                {item.type === 'services' && (
                  <div style={{...styles.mobileSubItems, ...(isMobileServicesDropdownOpen ? styles.mobileSubItemsOpen : {})}}>
                    {servicesData.map((service) => (
                      <div key={service.id}>
                        <button
                          style={{...styles.mobileDropdownBtn, background: service.bgColor, marginBottom: '5px'}}
                          onClick={() => setMobileActiveService(mobileActiveService === service.id ? null : service.id)}
                        >
                          <span><span>{service.icon}</span> {service.name}</span>
                          <span>{mobileActiveService === service.id ? '▲' : '▼'}</span>
                        </button>
                        <div style={{...styles.mobileSubItems, ...(mobileActiveService === service.id ? styles.mobileSubItemsOpen : {})}}>
                          {service.subtypes.map((sub, idx) => (
                            <div
                              key={idx}
                              style={{...styles.mobileSubItem, background: '#f9fafb'}}
                              onClick={() => navigateTo(sub.link)}
                            >
                              <div><span>{sub.icon}</span> {sub.name}</div>
                              <div style={{fontSize: '11px', color: '#6b7280'}}>{sub.desc}</div>
                              <div style={{fontSize: '12px', color: '#f59e0b', fontWeight: 'bold', marginTop: '5px'}}>{sub.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile Menu Submenu */}
                {item.type === 'menu' && (
                  <div style={{...styles.mobileSubItems, ...(isMobileMenuDropdownOpen ? styles.mobileSubItemsOpen : {})}}>
                    {menuData.map((menuItem) => (
                      <div key={menuItem.id}>
                        <button
                          style={{...styles.mobileDropdownBtn, background: menuItem.bgColor, marginBottom: '5px'}}
                          onClick={() => setMobileActiveMenuItem(mobileActiveMenuItem === menuItem.id ? null : menuItem.id)}
                        >
                          <span><span>{menuItem.icon}</span> {menuItem.name}</span>
                          <span>{mobileActiveMenuItem === menuItem.id ? '▲' : '▼'}</span>
                        </button>
                        <div style={{...styles.mobileSubItems, ...(mobileActiveMenuItem === menuItem.id ? styles.mobileSubItemsOpen : {})}}>
                          {menuItem.subtypes.map((sub, idx) => (
                            <div
                              key={idx}
                              style={{...styles.mobileSubItem, background: '#f9fafb'}}
                              onClick={() => navigateToWithFilter(sub.filterId)}
                            >
                              <div><span>{menuItem.icon}</span> {sub.name}</div>
                              <div style={{fontSize: '11px', color: '#6b7280'}}>{sub.desc}</div>
                              <div style={{fontSize: '12px', color: '#f59e0b', fontWeight: 'bold', marginTop: '5px'}}>{sub.price}</div>
                            </div>
                          ))}
                        </div>
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
    </>
  );
};

export default Header;