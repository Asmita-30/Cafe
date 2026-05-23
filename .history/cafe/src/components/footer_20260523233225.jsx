// src/components/footer.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/cafelogo.png';
import coffieserveImg from '../assets/coffieserve.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with ${email}!`);
      setEmail('');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    hover: {
      x: 5,
      color: "#fbbf24",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const styles = {
    footer: {
      position: 'relative',
      color: 'white',
      marginTop: '40px',
      overflow: 'hidden',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url(${coffieserveImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    container: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '50px 20px 25px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '35px',
      marginBottom: '35px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '15px',
    },
    logo: {
      height: '55px',
      width: 'auto',
      objectFit: 'contain',
      // Removed filter to show original logo colors
    },
    logoText: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #fcd34d, #f59e0b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0,
    },
    logoSlogan: {
      fontSize: '9px',
      color: '#fbbf24',
      letterSpacing: '2px',
      margin: 0,
    },
    description: {
      color: '#cbd5e1',
      lineHeight: '1.5',
      fontSize: '13px',
      marginBottom: '15px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '12px',
      fontSize: '13px',
    },
    contactIcon: {
      fontSize: '18px',
      minWidth: '30px',
      height: '30px',
      background: 'rgba(245,158,11,0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactText: {
      color: '#cbd5e1',
    },
    contactLink: {
      color: '#fbbf24',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fbbf24',
      marginBottom: '20px',
      position: 'relative',
      display: 'inline-block',
    },
    sectionUnderline: {
      position: 'absolute',
      bottom: '-8px',
      left: 0,
      width: '50px',
      height: '3px',
      background: 'linear-gradient(90deg, #f59e0b, #fcd34d)',
      borderRadius: '2px',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '10px',
    },
    link: {
      color: '#cbd5e1',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
    },
    hoursItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      padding: '8px 0',
      borderBottom: '1px dashed rgba(255,255,255,0.1)',
      fontSize: '13px',
    },
    hoursDay: {
      color: '#fbbf24',
      fontWeight: '500',
    },
    hoursTime: {
      color: '#cbd5e1',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginTop: '15px',
    },
    input: {
      flex: 1,
      padding: '10px 14px',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '8px',
      fontSize: '13px',
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    subscribeBtn: {
      padding: '10px 20px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
    },
    socialContainer: {
      display: 'flex',
      gap: '12px',
      marginTop: '20px',
    },
    socialIcon: {
      width: '35px',
      height: '35px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      textDecoration: 'none',
      color: 'white',
      transition: 'all 0.3s ease',
    },
    bottomBar: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '20px',
      textAlign: 'center',
    },
    copyright: {
      color: '#94a3b8',
      fontSize: '12px',
    },
    wave: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      zIndex: 1,
    },
  };

  const socialLinks = [
    { icon: '📸', name: 'Instagram', color: '#E4405F', link: '#' },
    { icon: '👍', name: 'Facebook', color: '#1877F2', link: '#' },
    { icon: '🐦', name: 'Twitter', color: '#1DA1F2', link: '#' },
    { icon: '📌', name: 'Pinterest', color: '#BD081C', link: '#' }
  ];

  const quickLinks = ['Home', 'About', 'Menu', 'Contact', 'Order'];

  return (
    <footer style={styles.footer}>
      {/* Decorative Wave at Top */}
      <div style={styles.wave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '40px' }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#fef3c7" opacity="0.15"></path>
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        style={styles.container}
      >
        <div style={styles.grid}>
          {/* Brand & Contact */}
          <motion.div variants={itemVariants}>
            <div style={styles.logoContainer}>
              <img src={logo} alt="Café Aura" style={styles.logo} />
              <div style={styles.logoText}>
                <h2 style={styles.logoTitle}>Café Aura</h2>
                <p style={styles.logoSlogan}>SIP • RELAX • REPEAT</p>
              </div>
            </div>
            <p style={styles.description}>
              Artisanal coffee & delicious food in a warm, welcoming atmosphere.
            </p>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📞</div>
              <a href="tel:7447508006" style={styles.contactLink}>+91 74475 08006</a>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>✉️</div>
              <a href="mailto:cafe@gmail.com" style={styles.contactLink}>cafe@gmail.com</a>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📍</div>
              <span style={styles.contactText}>Navi Mumbai, Sector 15, CBD Belapur</span>
            </div>
            
            {/* Social Icons */}
            <div style={styles.socialContainer}>
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  style={styles.socialIcon}
                  whileHover={{ 
                    scale: 1.1, 
                    background: social.color,
                    y: -3
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <div style={styles.sectionTitle}>
              Quick Links
              <div style={styles.sectionUnderline}></div>
            </div>
            <ul style={styles.linkList}>
              {quickLinks.map((link) => (
                <motion.li
                  key={link}
                  variants={linkVariants}
                  whileHover="hover"
                  style={styles.linkItem}
                >
                  <a href={`/${link.toLowerCase()}`} style={styles.link}>
                    <span>→</span>
                    <span>{link}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <div style={styles.sectionTitle}>
              Opening Hours
              <div style={styles.sectionUnderline}></div>
            </div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              style={styles.hoursItem}
            >
              <span style={styles.hoursDay}>Monday - Friday</span>
              <span style={styles.hoursTime}>8:00 AM - 10:00 PM</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              style={styles.hoursItem}
            >
              <span style={styles.hoursDay}>Saturday - Sunday</span>
              <span style={styles.hoursTime}>9:00 AM - 11:00 PM</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              style={styles.hoursItem}
            >
              <span style={styles.hoursDay}>Holidays</span>
              <span style={styles.hoursTime}>10:00 AM - 8:00 PM</span>
            </motion.div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <div style={styles.sectionTitle}>
              Newsletter
              <div style={styles.sectionUnderline}></div>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '13px', marginBottom: '10px' }}>
              Get latest offers & updates
            </p>
            <form onSubmit={handleSubscribe}>
              <div style={styles.inputGroup}>
                <motion.input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  whileFocus={{ borderColor: '#f59e0b', scale: 1.02 }}
                  required
                />
                <motion.button
                  type="submit"
                  style={styles.subscribeBtn}
                  whileHover={{ scale: 1.05, background: '#d97706' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          style={styles.bottomBar}
        >
          <p style={styles.copyright}>
            © {currentYear} Café Aura. All rights reserved. Crafted with ☕ & ❤️
          </p>
        </motion.div>
      </motion.div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @media (max-width: 768px) {
            .grid {
              gap: 25px !important;
            }
            .socialContainer {
              justify-content: center;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;