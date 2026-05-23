// src/page/contact.jsx
import React, { useState } from 'react';
import aboutImg from '../assets/about.png';
import homepageImg from '../assets/homepage.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    { icon: '📍', title: 'Visit Us', details: ['123 Coffee Street', 'Foodie\'s Paradise', 'City - 400001'] },
    { icon: '📞', title: 'Call Us', details: ['+91 74475 08006', '+91 98765 43210'] },
    { icon: '✉️', title: 'Email Us', details: ['cafe@gmail.com', 'hello@cafeaura.com'] },
    { icon: '⏰', title: 'Opening Hours', details: ['Mon-Fri: 8:00 AM - 10:00 PM', 'Sat-Sun: 9:00 AM - 11:00 PM', 'Holidays: 10:00 AM - 8:00 PM'] }
  ];

  const faqs = [
    { q: 'Do you offer home delivery?', a: 'Yes, we deliver through Zomato, Swiggy, and our own delivery partners within 5 km radius.' },
    { q: 'Can I book a table for a party?', a: 'Absolutely! We accept reservations for parties of 6 or more. Please call us 24 hours in advance.' },
    { q: 'Do you have vegetarian options?', a: 'Yes, we have a wide range of vegetarian and vegan options available.' },
    { q: 'Is there parking available?', a: 'Yes, we have dedicated parking space for our customers.' }
  ];

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      paddingTop: '80px',
    },
    // Hero Section
    heroSection: {
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
      padding: '60px 20px',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '48px',
      color: '#78350f',
      marginBottom: '20px',
      animation: 'fadeInDown 0.8s ease-out',
    },
    heroSubtitle: {
      fontSize: '18px',
      color: '#92400e',
      maxWidth: '600px',
      margin: '0 auto',
    },
    // Contact Section
    contactSection: {
      padding: '60px 20px',
      background: 'white',
    },
    contactContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
    },
    // Contact Info Cards
    infoCard: {
      background: '#fefaf5',
      padding: '30px',
      borderRadius: '20px',
      marginBottom: '20px',
      transition: 'transform 0.3s ease',
    },
    infoIcon: {
      fontSize: '32px',
      marginBottom: '15px',
    },
    infoTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '15px',
    },
    infoDetail: {
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '5px',
    },
    // Form Styles
    formContainer: {
      background: 'white',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    },
    formTitle: {
      fontSize: '28px',
      color: '#78350f',
      marginBottom: '10px',
    },
    formSubtitle: {
      color: '#6b7280',
      marginBottom: '25px',
      fontSize: '14px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#374151',
      fontWeight: '500',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '14px',
      transition: 'border-color 0.3s ease',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      fontSize: '14px',
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: 'inherit',
    },
    submitBtn: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    successMsg: {
      background: '#10b981',
      color: 'white',
      padding: '12px',
      borderRadius: '10px',
      textAlign: 'center',
      marginTop: '15px',
    },
    // Map Section
    mapSection: {
      padding: '60px 20px',
      background: '#fefaf5',
    },
    mapContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    mapTitle: {
      textAlign: 'center',
      fontSize: '32px',
      color: '#78350f',
      marginBottom: '15px',
    },
    mapSubtitle: {
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: '40px',
    },
    mapWrapper: {
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    },
    mapPlaceholder: {
      width: '100%',
      height: '400px',
      background: 'linear-gradient(135deg, #e5e7eb, #9ca3af)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#374151',
    },
    // FAQ Section
    faqSection: {
      padding: '60px 20px',
      background: 'white',
    },
    faqContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    faqTitle: {
      textAlign: 'center',
      fontSize: '32px',
      color: '#78350f',
      marginBottom: '40px',
    },
    faqGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px',
    },
    faqItem: {
      background: '#fefaf5',
      padding: '20px',
      borderRadius: '15px',
      transition: 'transform 0.3s ease',
    },
    faqQuestion: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    faqAnswer: {
      color: '#4b5563',
      lineHeight: '1.6',
      fontSize: '14px',
    },
    // CTA Section
    ctaSection: {
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      textAlign: 'center',
      color: 'white',
    },
    ctaTitle: {
      fontSize: '32px',
      marginBottom: '15px',
    },
    ctaText: {
      fontSize: '16px',
      marginBottom: '25px',
      opacity: 0.95,
    },
    ctaButton: {
      padding: '12px 35px',
      background: 'white',
      color: '#78350f',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Get in Touch</h1>
        <p style={styles.heroSubtitle}>
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
        </p>
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <div style={styles.contactContainer}>
          {/* Left Side - Contact Info */}
          <div>
            {contactInfo.map((info, idx) => (
              <div 
                key={idx} 
                style={styles.infoCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={styles.infoIcon}>{info.icon}</div>
                <div style={styles.infoTitle}>{info.title}</div>
                {info.details.map((detail, i) => (
                  <div key={i} style={styles.infoDetail}>{detail}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>Send us a Message</h2>
            <p style={styles.formSubtitle}>We'll get back to you within 24 hours</p>
            
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                  onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <button 
                type="submit" 
                style={styles.submitBtn}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Send Message
              </button>

              {isSubmitted && (
                <div style={styles.successMsg}>
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={styles.mapSection}>
        <div style={styles.mapContainer}>
          <h2 style={styles.mapTitle}>Find Us Here</h2>
          <p style={styles.mapSubtitle}>Visit our cozy café in the heart of the city</p>
          <div style={styles.mapWrapper}>
            <div style={styles.mapPlaceholder}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🗺️</div>
              <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>123 Coffee Street, Foodie's Paradise</div>
              <div style={{ fontSize: '14px' }}>City - 400001</div>
              <div style={{ fontSize: '12px', marginTop: '10px' }}>📍 Google Maps Integration Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqSection}>
        <div style={styles.faqContainer}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          <div style={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                style={styles.faqItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={styles.faqQuestion}>
                  <span>❓</span> {faq.q}
                </div>
                <div style={styles.faqAnswer}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Visit Us Today!</h2>
        <p style={styles.ctaText}>Experience the warmth of Café Aura. Walk in or order online!</p>
        <button 
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = '#fef3c7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'white';
          }}
          onClick={() => window.location.href = '/menu'}
        >
          Explore Menu
        </button>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 768px) {
            .contactContainer {
              grid-template-columns: 1fr !important;
            }
            .faqGrid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;