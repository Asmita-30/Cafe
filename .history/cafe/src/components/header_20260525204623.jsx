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
  const [activeServiceSubtype, setActiveServiceSubtype] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [activeMenuSubtype, setActiveMenuSubtype] = useState(null);
  const [isMobileMenuDropdownOpen, setIsMobileMenuDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [mobileActiveService, setMobileActiveService] = useState(null);
  const [mobileActiveServiceSubtype, setMobileActiveServiceSubtype] = useState(null);
  const [mobileActiveMenuItem, setMobileActiveMenuItem] = useState(null);
  const [mobileActiveMenuSubtype, setMobileActiveMenuSubtype] = useState(null);

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
        setActiveMenuSubtype(null);
      }
      if (isServicesDropdownOpen && !event.target.closest('.services-dropdown')) {
        setIsServicesDropdownOpen(false);
        setActiveService(null);
        setActiveServiceSubtype(null);
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

  // Services data with 3-level nested structure
  const servicesData = [
    {
      id: 1,
      name: '🎉 Family Celebrations',
      icon: '🎉',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      description: 'Create unforgettable memories with your loved ones',
      subtypes: [
        { 
          id: 11,
          name: 'Birthday Parties', 
          icon: '🎂', 
          desc: 'Customized birthday celebrations with cake and decorations',
          price: 'Starting ₹5000',
          link: '/services/birthday',
          subSubtypes: [
            { name: 'Kids Birthday', icon: '🧸', desc: 'Fun activities for kids', price: '₹4000', link: '/services/birthday/kids' },
            { name: 'Adult Birthday', icon: '🥂', desc: 'Party with bar arrangement', price: '₹7000', link: '/services/birthday/adult' },
            { name: 'Surprise Party', icon: '🎁', desc: 'Complete surprise setup', price: '₹8000', link: '/services/birthday/surprise' }
          ]
        },
        { 
          id: 12,
          name: 'Anniversary Celebrations', 
          icon: '💑', 
          desc: 'Romantic anniversary setups with special menu',
          price: 'Starting ₹4000',
          link: '/services/anniversary',
          subSubtypes: [
            { name: 'Silver Jubilee', icon: '🥈', desc: '25 years celebration', price: '₹6000', link: '/services/anniversary/silver' },
            { name: 'Golden Jubilee', icon: '🥇', desc: '50 years celebration', price: '₹10000', link: '/services/anniversary/golden' },
            { name: 'Renewal of Vows', icon: '💒', desc: 'Vow renewal ceremony', price: '₹8000', link: '/services/anniversary/renewal' }
          ]
        },
        { 
          id: 13,
          name: 'Family Gatherings', 
          icon: '👨‍👩‍👧‍👦', 
          desc: 'Spacious family dining area with group packages',
          price: 'Starting ₹3000',
          link: '/services/family-gathering',
          subSubtypes: [
            { name: 'Reunion Party', icon: '🤝', desc: 'Family reunion special', price: '₹5000', link: '/services/family/reunion' },
            { name: 'Festival Dinner', icon: '🎊', desc: 'Special festival menu', price: '₹4000', link: '/services/family/festival' },
            { name: 'Weekend Brunch', icon: '🍳', desc: 'Sunday special brunch', price: '₹2500', link: '/services/family/brunch' }
          ]
        }
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
        { 
          id: 21,
          name: 'Private Parties', 
          icon: '🎈', 
          desc: 'Exclusive party arrangements with customized menu',
          price: 'Starting ₹8000',
          link: '/services/private-party',
          subSubtypes: [
            { name: 'Cocktail Party', icon: '🍸', desc: 'Premium cocktail arrangements', price: '₹12000', link: '/services/private/cocktail' },
            { name: 'Themed Party', icon: '🎭', desc: 'Custom theme decorations', price: '₹10000', link: '/services/private/themed' },
            { name: 'Pool Party', icon: '🏊', desc: 'Poolside celebration', price: '₹15000', link: '/services/private/pool' }
          ]
        },
        { 
          id: 22,
          name: 'Group Booking', 
          icon: '👥', 
          desc: 'Special discounts for groups of 10+ people',
          price: '10% off',
          link: '/services/group-booking',
          subSubtypes: [
            { name: 'Corporate Groups', icon: '💼', desc: 'Team building events', price: '15% off', link: '/services/group/corporate' },
            { name: 'College Groups', icon: '🎓', desc: 'Student special packages', price: '20% off', link: '/services/group/college' },
            { name: 'Friends Meetup', icon: '👬', desc: 'Friends gathering special', price: '12% off', link: '/services/group/friends' }
          ]
        },
        { 
          id: 23,
          name: 'Corporate Events', 
          icon: '💼', 
          desc: 'Professional event management for companies',
          price: 'Custom pricing',
          link: '/services/corporate',
          subSubtypes: [
            { name: 'Annual Party', icon: '🎊', desc: 'Company annual celebration', price: 'Custom', link: '/services/corporate/annual' },
            { name: 'Product Launch', icon: '🚀', desc: 'Product launch events', price: 'Custom', link: '/services/corporate/launch' },
            { name: 'Team Building', icon: '🤝', desc: 'Team bonding activities', price: '₹8000', link: '/services/corporate/team' }
          ]
        }
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
        { 
          id: 31,
          name: 'Live Music Nights', 
          icon: '🎸', 
          desc: 'Live band performances every weekend',
          price: 'Entry ₹500',
          link: '/services/live-music',
          subSubtypes: [
            { name: 'Rock Night', icon: '🤘', desc: 'Rock band performance', price: '₹600', link: '/services/music/rock' },
            { name: 'Jazz Evening', icon: '🎷', desc: 'Smooth jazz nights', price: '₹800', link: '/services/music/jazz' },
            { name: 'Acoustic Session', icon: '🎵', desc: 'Unplugged performances', price: '₹500', link: '/services/music/acoustic' }
          ]
        },
        { 
          id: 32,
          name: 'DJ Arrangements', 
          icon: '🪩', 
          desc: 'Professional DJ setups for events',
          price: 'Starting ₹10000',
          link: '/services/dj',
          subSubtypes: [
            { name: 'Wedding DJ', icon: '💒', desc: 'Wedding reception music', price: '₹15000', link: '/services/dj/wedding' },
            { name: 'Party DJ', icon: '🎉', desc: 'Birthday/Party DJ', price: '₹10000', link: '/services/dj/party' },
            { name: 'Club DJ', icon: '🪩', desc: 'Nightclub experience', price: '₹12000', link: '/services/dj/club' }
          ]
        },
        { 
          id: 33,
          name: 'Club Events', 
          icon: '💃', 
          desc: 'Themed club nights with special offers',
          price: 'Entry ₹600',
          link: '/services/club',
          subSubtypes: [
            { name: 'Ladies Night', icon: '💃', desc: 'Free entry for ladies', price: '₹400', link: '/services/club/ladies' },
            { name: 'Couple Night', icon: '💑', desc: 'Couple special discounts', price: '₹1000/couple', link: '/services/club/couple' },
            { name: 'Festival Night', icon: '🎊', desc: 'Festival celebrations', price: '₹800', link: '/services/club/festival' }
          ]
        }
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
        { 
          id: 41,
          name: 'Family Dining', 
          icon: '🍽️', 
          desc: 'Cozy family atmosphere with kid-friendly menu',
          price: 'Avg ₹500/person',
          link: '/services/family-dining',
          subSubtypes: [
            { name: 'Kids Special', icon: '🧒', desc: 'Special kids menu', price: '₹300', link: '/services/dining/kids' },
            { name: 'Family Buffet', icon: '🍱', desc: 'Unlimited buffet', price: '₹800', link: '/services/dining/buffet' },
            { name: 'Sunday Special', icon: '🌞', desc: 'Sunday brunch', price: '₹600', link: '/services/dining/sunday' }
          ]
        },
        { 
          id: 42,
          name: 'Coffee & Dessert Specials', 
          icon: '🍰', 
          desc: 'Exclusive combo offers on coffee and desserts',
          price: 'Starting ₹299',
          link: '/services/coffee-specials',
          subSubtypes: [
            { name: 'Coffee Lovers', icon: '☕', desc: 'Buy 1 Get 1 on coffee', price: '₹299', link: '/services/coffee/bogo' },
            { name: 'Dessert Combo', icon: '🍰', desc: 'Coffee + Dessert', price: '₹399', link: '/services/coffee/combo' },
            { name: 'Late Night', icon: '🌙', desc: '9PM onwards special', price: '₹249', link: '/services/coffee/latenight' }
          ]
        },
        { 
          id: 43,
          name: 'Fine Dining', 
          icon: '🍷', 
          desc: 'Premium dining experience with curated menu',
          price: 'Avg ₹1200/person',
          link: '/services/fine-dining',
          subSubtypes: [
            { name: 'Chef Special', icon: '👨‍🍳', desc: 'Chef\'s tasting menu', price: '₹1500', link: '/services/fine/chef' },
            { name: 'Couple Candlelight', icon: '🕯️', desc: 'Romantic dinner setup', price: '₹2000', link: '/services/fine/candlelight' },
            { name: 'Private Room', icon: '🚪', desc: 'Private dining area', price: '₹3000', link: '/services/fine/private' }
          ]
        }
      ]
    }
  ];

  // Menu data with 3-level nested structure
  const menuData = [
    {
      id: 1,
      name: '☕ Hot Coffees',
      icon: '☕',
      color: '#78350f',
      bgColor: '#fef3c7',
      subtypes: [
        { 
          name: 'Espresso', 
          price: '₹180', 
          desc: 'Strong and bold shot of pure coffee',
          filterId: 'espresso',
          subSubtypes: [
            { name: 'Single Espresso', price: '₹180', desc: 'Single shot', filterId: 'single-espresso' },
            { name: 'Double Espresso', price: '₹240', desc: 'Double shot', filterId: 'double-espresso' },
            { name: 'Ristretto', price: '₹200', desc: 'Short shot', filterId: 'ristretto' }
          ]
        },
        { 
          name: 'Caffè Latte', 
          price: '₹220', 
          desc: 'Espresso with steamed milk and light foam',
          filterId: 'latte',
          subSubtypes: [
            { name: 'Regular Latte', price: '₹220', desc: 'Classic latte', filterId: 'regular-latte' },
            { name: 'Caramel Latte', price: '₹250', desc: 'With caramel syrup', filterId: 'caramel-latte' },
            { name: 'Vanilla Latte', price: '₹250', desc: 'With vanilla syrup', filterId: 'vanilla-latte' }
          ]
        },
        { 
          name: 'Cappuccino', 
          price: '₹220', 
          desc: 'Espresso with equal parts steamed milk and foam',
          filterId: 'cappuccino',
          subSubtypes: [
            { name: 'Dry Cappuccino', price: '₹220', desc: 'Extra foam', filterId: 'dry-cappuccino' },
            { name: 'Wet Cappuccino', price: '₹220', desc: 'Less foam', filterId: 'wet-cappuccino' },
            { name: 'Flavored Cappuccino', price: '₹250', desc: 'With flavored syrup', filterId: 'flavored-cappuccino' }
          ]
        }
      ]
    },
    {
      id: 2,
      name: '🧊 Cold Coffees',
      icon: '🧊',
      color: '#3b82f6',
      bgColor: '#dbeafe',
      subtypes: [
        { 
          name: 'Iced Latte', 
          price: '₹240', 
          desc: 'Chilled espresso with cold milk over ice',
          filterId: 'iced-latte',
          subSubtypes: [
            { name: 'Regular Iced Latte', price: '₹240', desc: 'Classic iced latte', filterId: 'regular-iced-latte' },
            { name: 'Iced Caramel Latte', price: '₹270', desc: 'With caramel', filterId: 'iced-caramel-latte' },
            { name: 'Iced Vanilla Latte', price: '₹270', desc: 'With vanilla', filterId: 'iced-vanilla-latte' }
          ]
        },
        { 
          name: 'Cold Brew', 
          price: '₹230', 
          desc: 'Slow-steeped coffee served cold',
          filterId: 'cold-brew',
          subSubtypes: [
            { name: 'Black Cold Brew', price: '₹230', desc: 'No milk', filterId: 'black-cold-brew' },
            { name: 'Creamy Cold Brew', price: '₹260', desc: 'With cream', filterId: 'creamy-cold-brew' },
            { name: 'Sweet Cold Brew', price: '₹260', desc: 'With vanilla syrup', filterId: 'sweet-cold-brew' }
          ]
        }
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
    // Level 1 Dropdown
    level1Dropdown: {
      position: 'absolute',
      top: '45px',
      left: '0',
      minWidth: '300px',
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
    level1DropdownVisible: {
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
    // Level 2 Dropdown
    level2Dropdown: {
      position: 'absolute',
      top: '0',
      left: '100%',
      width: '340px',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      border: '1px solid rgba(180, 83, 9, 0.1)',
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateX(-10px)',
      transition: 'all 0.25s ease',
      zIndex: 101,
      maxHeight: '450px',
      overflowY: 'auto',
    },
    level2DropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateX(0)',
    },
    level2Item: {
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid #f5f5f5',
      position: 'relative',
    },
    level2ItemIcon: {
      fontSize: '20px',
      width: '32px',
    },
    level2ItemContent: {
      flex: 1,
    },
    level2ItemName: {
      fontWeight: '600',
      fontSize: '13px',
      color: '#374151',
    },
    level2ItemDesc: {
      fontSize: '10px',
      color: '#9ca3af',
      marginTop: '2px',
    },
    level2ItemPrice: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#f59e0b',
    },
    // Level 3 Dropdown
    level3Dropdown: {
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
      zIndex: 102,
      maxHeight: '400px',
      overflowY: 'auto',
    },
    level3DropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateX(0)',
    },
    level3Item: {
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid #f5f5f5',
    },
    level3ItemIcon: {
      fontSize: '16px',
      width: '28px',
    },
    level3ItemContent: {
      flex: 1,
    },
    level3ItemName: {
      fontWeight: '500',
      fontSize: '12px',
      color: '#374151',
    },
    level3ItemDesc: {
      fontSize: '9px',
      color: '#9ca3af',
    },
    level3ItemPrice: {
      fontSize: '11px',
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
      maxHeight: '600px',
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
                    setActiveServiceSubtype(null);
                  }
                  if (item.hasDropdown && item.type === 'menu') {
                    setIsMenuDropdownOpen(true);
                    setActiveMenuItem(null);
                    setActiveMenuSubtype(null);
                  }
                }}
                onMouseLeave={() => {
                  if (item.type === 'services') {
                    setIsServicesDropdownOpen(false);
                    setActiveService(null);
                    setActiveServiceSubtype(null);
                  }
                  if (item.type === 'menu') {
                    setIsMenuDropdownOpen(false);
                    setActiveMenuItem(null);
                    setActiveMenuSubtype(null);
                  }
                }}
              >
                {item.hasDropdown ? (
                  <>
                    <button style={styles.navLink}>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>

                    {/* Services Dropdown - Level 1 */}
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
                              <div style={styles.dropdownItemDesc}>{service.description}</div>
                            </div>
                            <span style={styles.dropdownArrow}>→</span>

                            {/* Services Level 2 Dropdown */}
                            {activeService === service.id && (
                              <div style={{...styles.level2Dropdown, ...styles.level2DropdownVisible}}>
                                {service.subtypes.map((sub) => (
                                  <div
                                    key={sub.id}
                                    style={styles.level2Item}
                                    onMouseEnter={() => setActiveServiceSubtype(sub.id)}
                                    onMouseLeave={() => setActiveServiceSubtype(null)}
                                  >
                                    <span style={styles.level2ItemIcon}>{sub.icon}</span>
                                    <div style={styles.level2ItemContent}>
                                      <div style={styles.level2ItemName}>{sub.name}</div>
                                      <div style={styles.level2ItemDesc}>{sub.desc}</div>
                                    </div>
                                    <div style={styles.level2ItemPrice}>{sub.price}</div>
                                    {sub.subSubtypes && sub.subSubtypes.length > 0 && (
                                      <span style={styles.dropdownArrow}>→</span>
                                    )}

                                    {/* Services Level 3 Dropdown */}
                                    {activeServiceSubtype === sub.id && sub.subSubtypes && (
                                      <div style={{...styles.level3Dropdown, ...styles.level3DropdownVisible}}>
                                        {sub.subSubtypes.map((subsub, idx) => (
                                          <div
                                            key={idx}
                                            style={styles.level3Item}
                                            onClick={() => navigateTo(subsub.link)}
                                          >
                                            <span style={styles.level3ItemIcon}>{subsub.icon}</span>
                                            <div style={styles.level3ItemContent}>
                                              <div style={styles.level3ItemName}>{subsub.name}</div>
                                              <div style={styles.level3ItemDesc}>{subsub.desc}</div>
                                            </div>
                                            <div style={styles.level3ItemPrice}>{subsub.price}</div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Menu Dropdown - Level 1 */}
                    {item.type === 'menu' && (
                      <div style={{...styles.level1Dropdown, ...(isMenuDropdownOpen ? styles.level1DropdownVisible : {}), minWidth: '300px'}}>
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

                            {/* Menu Level 2 Dropdown */}
                            {activeMenuItem === menuItem.id && (
                              <div style={{...styles.level2Dropdown, ...styles.level2DropdownVisible}}>
                                {menuItem.subtypes.map((sub, idx) => (
                                  <div
                                    key={idx}
                                    style={styles.level2Item}
                                    onMouseEnter={() => setActiveMenuSubtype(idx)}
                                    onMouseLeave={() => setActiveMenuSubtype(null)}
                                  >
                                    <span style={styles.level2ItemIcon}>{menuItem.icon}</span>
                                    <div style={styles.level2ItemContent}>
                                      <div style={styles.level2ItemName}>{sub.name}</div>
                                      <div style={styles.level2ItemDesc}>{sub.desc}</div>
                                    </div>
                                    <div style={styles.level2ItemPrice}>{sub.price}</div>
                                    {sub.subSubtypes && sub.subSubtypes.length > 0 && (
                                      <span style={styles.dropdownArrow}>→</span>
                                    )}

                                    {/* Menu Level 3 Dropdown */}
                                    {activeMenuSubtype === idx && sub.subSubtypes && (
                                      <div style={{...styles.level3Dropdown, ...styles.level3DropdownVisible}}>
                                        {sub.subSubtypes.map((subsub, subidx) => (
                                          <div
                                            key={subidx}
                                            style={styles.level3Item}
                                            onClick={() => navigateToWithFilter(subsub.filterId)}
                                          >
                                            <span style={styles.level3ItemIcon}>{menuItem.icon}</span>
                                            <div style={styles.level3ItemContent}>
                                              <div style={styles.level3ItemName}>{subsub.name}</div>
                                              <div style={styles.level3ItemDesc}>{subsub.desc}</div>
                                            </div>
                                            <div style={styles.level3ItemPrice}>{subsub.price}</div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
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

                {/* Mobile Services - Level 1 & 2 & 3 */}
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
                          {service.subtypes.map((sub) => (
                            <div key={sub.id}>
                              <button
                                style={{...styles.mobileDropdownBtn, background: '#f3f4f6', marginBottom: '5px', paddingLeft: '30px'}}
                                onClick={() => setMobileActiveServiceSubtype(mobileActiveServiceSubtype === sub.id ? null : sub.id)}
                              >
                                <span><span>{sub.icon}</span> {sub.name}</span>
                                <span>{mobileActiveServiceSubtype === sub.id ? '▲' : '▼'}</span>
                              </button>
                              {sub.subSubtypes && (
                                <div style={{...styles.mobileSubItems, ...(mobileActiveServiceSubtype === sub.id ? styles.mobileSubItemsOpen : {})}}>
                                  {sub.subSubtypes.map((subsub, idx) => (
                                    <div
                                      key={idx}
                                      style={{...styles.mobileSubItem, background: '#f9fafb', marginLeft: '20px'}}
                                      onClick={() => navigateTo(subsub.link)}
                                    >
                                      <div><span>{subsub.icon}</span> {subsub.name}</div>
                                      <div style={{fontSize: '10px', color: '#6b7280'}}>{subsub.desc}</div>
                                      <div style={{fontSize: '11px', color: '#f59e0b', fontWeight: 'bold', marginTop: '3px'}}>{subsub.price}</div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile Menu - Level 1 & 2 & 3 */}
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
                            <div key={idx}>
                              <button
                                style={{...styles.mobileDropdownBtn, background: '#f3f4f6', marginBottom: '5px', paddingLeft: '30px'}}
                                onClick={() => setMobileActiveMenuSubtype(mobileActiveMenuSubtype === idx ? null : idx)}
                              >
                                <span><span>{menuItem.icon}</span> {sub.name} - {sub.price}</span>
                                <span>{mobileActiveMenuSubtype === idx ? '▲' : '▼'}</span>
                              </button>
                              {sub.subSubtypes && (
                                <div style={{...styles.mobileSubItems, ...(mobileActiveMenuSubtype === idx ? styles.mobileSubItemsOpen : {})}}>
                                  {sub.subSubtypes.map((subsub, subidx) => (
                                    <div
                                      key={subidx}
                                      style={{...styles.mobileSubItem, background: '#f9fafb', marginLeft: '20px'}}
                                      onClick={() => navigateToWithFilter(subsub.filterId)}
                                    >
                                      <div><span>{menuItem.icon}</span> {subsub.name}</div>
                                      <div style={{fontSize: '10px', color: '#6b7280'}}>{subsub.desc}</div>
                                      <div style={{fontSize: '11px', color: '#f59e0b', fontWeight: 'bold', marginTop: '3px'}}>{subsub.price}</div>
                                    </div>
                                  ))}
                                </div>
                              )}
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