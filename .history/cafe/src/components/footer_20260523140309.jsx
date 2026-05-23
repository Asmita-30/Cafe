// src/components/footer.jsx
import React, { useState } from 'react';
import logo from '../assets/cafelogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
      color: 'white',
      marginTop: '40px',
      position: 'relative',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px 20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginBottom: '30px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '15px',
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
      fontSize: '22px',
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
      marginBottom: '10px',
      fontSize: '13px',
    },
    contactIcon: {
      fontSize: '16px',
      minWidth: '28px',
    },
    contactText: {
      color: '#cbd5e1',
    },
    contactLink: {
      color: '#fbbf24',
      textDecoration: 'none',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fbbf24',
      marginBottom: '15px',
      position: 'relative',
      display: 'inline-block',
    },
    sectionUnderline: {
      position: 'absolute',
      bottom: '-5px',
      left: 0,
      width: '40px',
      height: '2px',
      background: '#f59e0b',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '8px',
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
      marginBottom: '8px',
      fontSize: '13px',
    },
    hoursDay: {
      color: '#fbbf24',
    },
    hoursTime: {
      color: '#cbd5e1',
    },
    inputGroup: {
      display: 'flex',
      gap: '8px',
      marginTop: '10px',
    },
    input: {
      flex: 1,
      padding: '8px 12px',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '6px',
      fontSize: '12px',
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
    },
    subscribeBtn: {
      padding: '8px 16px',
      background: '#f59e0b',
      border: 'none',
      borderRadius: '6px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    bottomBar: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '15px',
      textAlign: 'center',
    },
    copyright: {
      color: '#94a3b8',
      fontSize: '11px',
    },
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand & Contact */}
          <div>
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
              <span style={styles.contactIcon}>📞</span>
              <a href="tel:7447508006" style={styles.contactLink}>+91 74475 08006</a>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>✉️</span>
              <a href="mailto:cafe@gmail.com" style={styles.contactLink}>cafe@gmail.com</a>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <span style={styles.contactText}>123 Coffee Street, City</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={styles.sectionTitle}>
              Quick Links
              <div style={styles.sectionUnderline}></div>
            </div>
            <ul style={styles.linkList}>
              {['Home', 'About', 'Menu', 'Contact', 'Order'].map((link) => (
                <li key={link} style={styles.linkItem}>
                  <a href={`/${link.toLowerCase()}`} style={styles.link}>
                    <span>→</span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div style={styles.sectionTitle}>
              Opening Hours
              <div style={styles.sectionUnderline}></div>
            </div>
            <div style={styles.hoursItem}>
              <span style={styles.hoursDay}>Mon - Fri</span>
              <span style={styles.hoursTime}>8AM - 10PM</span>
            </div>
            <div style={styles.hoursItem}>
              <span style={styles.hoursDay}>Sat - Sun</span>
              <span style={styles.hoursTime}>9AM - 11PM</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div style={styles.sectionTitle}>
              Newsletter
              <div style={styles.sectionUnderline}></div>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '12px', marginBottom: '10px' }}>
              Get latest offers & updates
            </p>
            <form onSubmit={handleSubscribe}>
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
                <button type="submit" style={styles.subscribeBtn}>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            © {currentYear} Café Aura. All rights reserved. Crafted with ☕ & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;