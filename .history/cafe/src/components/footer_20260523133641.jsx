// src/components/footer.jsx
import React, { useState } from 'react';
import logo from '../assets/cafelogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
      color: 'white',
      marginTop: '60px',
      position: 'relative',
      overflow: 'hidden',
    },
    wave: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px 30px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginBottom: '40px',
    },
    brandSection: {
      animation: 'fadeInUp 0.6s ease-out',
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
      filter: 'brightness(0) invert(1)',
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
      fontSize: '10px',
      color: '#fbbf24',
      letterSpacing: '2px',
      margin: 0,
    },
    description: {
      color: '#9ca3af',
      lineHeight: '1.6',
      fontSize: '14px',
      marginBottom: '20px',
    },
    newsletterTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#fbbf24',
      marginBottom: '10px',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
    },
    input: {
      flex: 1,
      padding: '10px 12px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
    },
    subscribeBtn: {
      padding: '10px 16px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
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
      width: '40px',
      height: '2px',
      background: '#fbbf24',
      borderRadius: '2px',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '12px',
    },
    link: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '15px',
      color: '#9ca3af',
      fontSize: '14px',
    },
    contactIcon: {
      fontSize: '20px',
    },
    socialContainer: {
      display: 'flex',
      gap: '12px',
      marginTop: '20px',
    },
    socialIcon: {
      width: '36px',
      height: '36px',
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
      color: '#6b7280',
      fontSize: '14px',
      marginBottom: '10px',
    },
    bottomLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    bottomLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: '12px',
      transition: 'color 0.3s ease',
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
      {/* Wave Decoration */}
      <div style={styles.wave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '36px' }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#fef3c7" opacity="0.1"></path>
        </svg>
      </div>

      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand Section */}
          <div style={styles.brandSection}>
            <div style={styles.logoContainer}>
              <img src={logo} alt="Cafe Logo" style={styles.logo} />
              <div>
                <h2 style={styles.logoTitle}>Café Ura</h2>
                <p style={styles.logoSlogan}>SIP • RELAX • REPEAT</p>
              </div>
            </div>
            <p style={styles.description}>
              Experience the perfect blend of artisanal coffee and warm hospitality. 
              Every cup tells a story of passion and perfection.
            </p>
            
            {/* Newsletter */}
            <form onSubmit={handleSubscribe}>
              <h3 style={styles.newsletterTitle}>Subscribe to our newsletter</h3>
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
                <button 
                  type="submit" 
                  style={styles.subscribeBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
                  }}
                >
                  →
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <div style={styles.sectionTitle}>
              Quick Links
              <div style={styles.sectionUnderline}></div>
            </div>
            <ul style={styles.linkList}>
              {['Home', 'Menu', 'About', 'Contact'].map((link) => (
                <li key={link} style={styles.linkItem}>
                  <a 
                    href={`/${link.toLowerCase()}`} 
                    style={styles.link}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fbbf24';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ width: '0', height: '2px', background: '#fbbf24', transition: 'width 0.3s' }}></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={styles.sectionTitle}>
              Services
              <div style={styles.sectionUnderline}></div>
            </div>
            <ul style={styles.linkList}>
              {['Dine In', 'Takeaway', 'Delivery', 'Catering'].map((service) => (
                <li key={service} style={styles.linkItem}>
                  <a 
                    href="#" 
                    style={styles.link}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fbbf24';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div style={styles.sectionTitle}>
              Get in Touch
              <div style={styles.sectionUnderline}></div>
            </div>
            <div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <span>123 Coffee Street, NYC</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <span>+1 234 567 890</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>✉️</span>
                <span>hello@cafeura.com</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>⏰</span>
                <span>Mon-Sun: 8AM - 10PM</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div style={styles.socialContainer}>
              {['📸', '👍', '🐦', '📌'].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f59e0b';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>© {currentYear} Café Ura. All rights reserved. Crafted with ☕ & ❤️</p>
          <div style={styles.bottomLinks}>
            <a href="#" style={styles.bottomLink} onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Privacy Policy</a>
            <a href="#" style={styles.bottomLink} onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Terms of Service</a>
            <a href="#" style={styles.bottomLink} onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
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
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;