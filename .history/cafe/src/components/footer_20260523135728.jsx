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
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      marginBottom: '50px',
    },
    brandSection: {
      animation: 'fadeInUp 0.6s ease-out',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px',
    },
    logo: {
      height: '55px',
      width: 'auto',
      filter: 'brightness(0) invert(1)',
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
      fontSize: '10px',
      color: '#fbbf24',
      letterSpacing: '2px',
      margin: 0,
    },
    description: {
      color: '#cbd5e1',
      lineHeight: '1.6',
      fontSize: '14px',
      marginBottom: '25px',
    },
    contactInfo: {
      marginTop: '20px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '15px',
      color: '#cbd5e1',
      fontSize: '14px',
      transition: 'transform 0.3s ease',
    },
    contactIcon: {
      fontSize: '18px',
      minWidth: '30px',
      height: '30px',
      background: 'rgba(245, 158, 11, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fbbf24',
      marginBottom: '25px',
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
      marginBottom: '12px',
    },
    link: {
      color: '#cbd5e1',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
    },
    hoursItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px',
      padding: '8px 0',
      borderBottom: '1px dashed rgba(255,255,255,0.1)',
    },
    hoursDay: {
      color: '#fbbf24',
      fontWeight: '500',
    },
    hoursTime: {
      color: '#cbd5e1',
    },
    newsletterTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#fbbf24',
      marginBottom: '15px',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    input: {
      flex: 1,
      padding: '12px 15px',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
    },
    subscribeBtn: {
      padding: '12px 20px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
    },
    socialContainer: {
      display: 'flex',
      gap: '12px',
      marginTop: '20px',
    },
    socialIcon: {
      width: '38px',
      height: '38px',
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
      paddingTop: '25px',
      textAlign: 'center',
    },
    copyright: {
      color: '#94a3b8',
      fontSize: '13px',
      marginBottom: '10px',
    },
    bottomLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      flexWrap: 'wrap',
    },
    bottomLink: {
      color: '#94a3b8',
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

  const handlePhoneClick = () => {
    window.location.href = 'tel:7447508006';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:cafe@gmail.com';
  };

  return (
    <footer style={styles.footer}>
      {/* Decorative Wave */}
      <div style={styles.wave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '40px' }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#fef3c7" opacity="0.08"></path>
        </svg>
      </div>

      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand Section */}
          <div style={styles.brandSection}>
            <div style={styles.logoContainer}>
              <img src={logo} alt="Café Aura Logo" style={styles.logo} />
              <div style={styles.logoText}>
                <h2 style={styles.logoTitle}>Café Aura</h2>
                <p style={styles.logoSlogan}>SIP • RELAX • REPEAT</p>
              </div>
            </div>
            <p style={styles.description}>
              Experience the perfect blend of artisanal coffee, delicious food, 
              and warm hospitality. Every cup tells a story of passion and perfection.
            </p>
            
            {/* Contact Information */}
            <div style={styles.contactInfo}>
              <div 
                style={styles.contactItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={styles.contactIcon}>📞</div>
                <div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Call Us</div>
                  <a 
                    href="tel:7447508006" 
                    style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: '500' }}
                    onClick={handlePhoneClick}
                  >
                    +91 74475 08006
                  </a>
                </div>
              </div>
              
              <div 
                style={styles.contactItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={styles.contactIcon}>✉️</div>
                <div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}Email Us</div>
                  <a 
                    href="mailto:cafe@gmail.com" 
                    style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: '500' }}
                    onClick={handleEmailClick}
                  >
                    cafe@gmail.com
                  </a>
                </div>
              </div>
              
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>📍</div>
                <div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}Visit Us</div>
                  <div style={{ color: '#cbd5e1' }}123 Coffee Street, Foodie's Paradise, City - 400001</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={styles.sectionTitle}>
              Quick Links
              <div style={styles.sectionUnderline}></div>
            </div>
            <ul style={styles.linkList}>
              {[
                { name: 'Home', icon: '🏠', href: '/' },
                { name: 'About Us', icon: '📖', href: '/about' },
                { name: 'Menu', icon: '🍽️', href: '/menu' },
                { name: 'Contact', icon: '📞', href: '/contact' },
                { name: 'Order Online', icon: '🛒', href: '/order' },
                { name: 'Gallery', icon: '📸', href: '/gallery' }
              ].map((link) => (
                <li key={link.name} style={styles.linkItem}>
                  <a 
                    href={link.href} 
                    style={styles.link}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fbbf24';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#cbd5e1';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <div style={styles.sectionTitle}>
              Opening Hours
              <div style={styles.sectionUnderline}></div>
            </div>
            <div>
              <div style={styles.hoursItem}>
                <span style={styles.hoursDay}>Monday - Friday</span>
                <span style={styles.hoursTime}>8:00 AM - 10:00 PM</span>
              </div>
              <div style={styles.hoursItem}>
                <span style={styles.hoursDay}>Saturday - Sunday</span>
                <span style={styles.hoursTime}>9:00 AM - 11:00 PM</span>
              </div>
              <div style={styles.hoursItem}>
                <span style={styles.hoursDay}>Holidays</span>
                <span style={styles.hoursTime}>10:00 AM - 8:00 PM</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div style={{ marginTop: '30px' }}>
              <h3 style={styles.newsletterTitle}>📧 Newsletter</h3>
              <form onSubmit={handleSubscribe}>
                <div style={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Your email address"
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
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <div style={styles.sectionTitle}>
              Follow Us
              <div style={styles.sectionUnderline}></div>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '20px' }}>
              Connect with us on social media for updates, offers, and more!
            </p>
            
            <div style={styles.socialContainer}>
              {[
                { icon: '📸', name: 'Instagram', color: '#E4405F', link: '#' },
                { icon: '👍', name: 'Facebook', color: '#1877F2', link: '#' },
                { icon: '🐦', name: 'Twitter', color: '#1DA1F2', link: '#' },
                { icon: '📌', name: 'Pinterest', color: '#BD081C', link: '#' },
                { icon: '🎵', name: 'TikTok', color: '#000000', link: '#' },
                { icon: '▶️', name: 'YouTube', color: '#FF0000', link: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div style={{ marginTop: '30px' }}>
              <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '10px' }}>We Accept</div>
              <div style={{ display: 'flex', gap: '10px', fontSize: '24px' }}>
                <span>💳</span>
                <span>📱</span>
                <span>💵</span>
                <span>🏦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            © {currentYear} Café Aura. All rights reserved. Crafted with ☕ & ❤️
          </p>
          <div style={styles.bottomLinks}>
            <a 
              href="#" 
              style={styles.bottomLink} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              style={styles.bottomLink} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              style={styles.bottomLink} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
            >
              Refund Policy
            </a>
            <a 
              href="#" 
              style={styles.bottomLink} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
            >
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
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
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;