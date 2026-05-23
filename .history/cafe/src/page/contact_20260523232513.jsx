// src/page/contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import homepageImg from '../assets/homepage.png';
import aboutImg from '../assets/about.png';
import coffieserveImg from '../assets/coffieserve.png';

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
    { icon: '📍', title: 'Visit Us', details: ['Navi Mumbai, Sector 15', 'CBD Belapur', 'Maharashtra - 400614'], delay: 0 },
    { icon: '📞', title: 'Call Us', details: ['+91 74475 08006', '+91 98765 43210'], delay: 0.1 },
    { icon: '✉️', title: 'Email Us', details: ['cafe@gmail.com', 'hello@cafeaura.com'], delay: 0.2 },
    { icon: '⏰', title: 'Opening Hours', details: ['Mon-Fri: 8:00 AM - 10:00 PM', 'Sat-Sun: 9:00 AM - 11:00 PM', 'Holidays: 10:00 AM - 8:00 PM'], delay: 0.3 }
  ];

  const faqs = [
    { q: 'Do you offer home delivery?', a: 'Yes, we deliver through Zomato, Swiggy, and our own delivery partners within 5 km radius.', delay: 0 },
    { q: 'Can I book a table for a party?', a: 'Absolutely! We accept reservations for parties of 6 or more. Please call us 24 hours in advance.', delay: 0.1 },
    { q: 'Do you have vegetarian options?', a: 'Yes, we have a wide range of vegetarian and vegan options available.', delay: 0.2 },
    { q: 'Is there parking available?', a: 'Yes, we have dedicated parking space for our customers.', delay: 0.3 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    // Hero Section with Background Image
    heroSection: {
      position: 'relative',
      padding: '120px 20px',
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${homepageImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    heroSubtitle: {
      fontSize: '20px',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
      opacity: 0.95,
    },
    // Contact Section
    contactSection: {
      padding: '80px 20px',
      background: 'white',
    },
    contactContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
    },
    infoCard: {
      background: '#fefaf5',
      padding: '30px',
      borderRadius: '20px',
      marginBottom: '20px',
      cursor: 'pointer',
    },
    infoIcon: { fontSize: '40px', marginBottom: '15px' },
    infoTitle: { fontSize: '22px', fontWeight: 'bold', color: '#78350f', marginBottom: '12px' },
    infoDetail: { color: '#4b5563', lineHeight: '1.6', marginBottom: '5px', fontSize: '15px' },
    // Form Styles
    formContainer: {
      background: 'white',
      padding: '35px',
      borderRadius: '25px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
    },
    formTitle: { fontSize: '28px', color: '#78350f', marginBottom: '10px', fontWeight: 'bold' },
    formSubtitle: { color: '#6b7280', marginBottom: '25px', fontSize: '14px' },
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500', fontSize: '14px' },
    input: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: 'inherit',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    submitBtn: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    successMsg: {
      background: '#10b981',
      color: 'white',
      padding: '12px',
      borderRadius: '12px',
      textAlign: 'center',
      marginTop: '15px',
    },
    // Map Section - Navi Mumbai Map
    mapSection: {
      padding: '80px 20px',
      background: '#fefaf5',
    },
    mapContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    mapTitle: {
      textAlign: 'center',
      fontSize: '38px',
      color: '#78350f',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    mapWrapper: {
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
      marginTop: '30px',
    },
    mapIframe: {
      width: '100%',
      height: '450px',
      border: 0,
    },
    // FAQ Section
    faqSection: {
      padding: '80px 20px',
      background: 'white',
    },
    faqContainer: { maxWidth: '1200px', margin: '0 auto' },
    faqTitle: {
      textAlign: 'center',
      fontSize: '38px',
      color: '#78350f',
      marginBottom: '50px',
      fontWeight: 'bold',
    },
    faqGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' },
    faqItem: {
      background: '#fefaf5',
      padding: '25px',
      borderRadius: '20px',
      cursor: 'pointer',
    },
    faqQuestion: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    faqAnswer: { color: '#4b5563', lineHeight: '1.6', fontSize: '14px' },
    // CTA Section with Background Image
    ctaSection: {
      position: 'relative',
      padding: '100px 20px',
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${coffieserveImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
    },
    ctaTitle: { fontSize: '42px', marginBottom: '20px', fontWeight: 'bold' },
    ctaText: { fontSize: '18px', marginBottom: '30px', opacity: 0.95 },
    ctaButton: {
      padding: '14px 45px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section with Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.heroSection}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={styles.heroTitle}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={styles.heroSubtitle}
        >
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
        </motion.p>
      </motion.div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <div style={styles.contactContainer}>
          {/* Left Side - Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                style={styles.infoCard}
              >
                <div style={styles.infoIcon}>{info.icon}</div>
                <div style={styles.infoTitle}>{info.title}</div>
                {info.details.map((detail, i) => (
                  <div key={i} style={styles.infoDetail}>{detail}</div>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.formContainer}
          >
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

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={styles.submitBtn}
              >
                Send Message ✉️
              </motion.button>

              {isSubmitted && (
                <div style={styles.successMsg}>
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section - Navi Mumbai Map */}
      <div style={styles.mapSection}>
        <div style={styles.mapContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.mapTitle}
          >
            📍 Find Us in Navi Mumbai
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={styles.mapWrapper}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6434167454!2d72.97910594335936!3d19.082522401189476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f1c6a6f0c9%3A0x5b8e8e8e8e8e8e8e!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              style={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Café Aura Location Map"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqSection}>
        <div style={styles.faqContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.faqTitle}
          >
            ❓ Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            style={styles.faqGrid}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                style={styles.faqItem}
              >
                <div style={styles.faqQuestion}>
                  <span style={{ fontSize: '24px' }}>❓</span> {faq.q}
                </div>
                <div style={styles.faqAnswer}>{faq.a}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section with Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.ctaSection}
      >
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={styles.ctaTitle}
        >
          Ready for a Great Experience?
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={styles.ctaText}
        >
          Visit us today and enjoy the perfect cup of coffee!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.ctaButton}
          onClick={() => window.location.href = '/menu'}
        >
          Explore Our Menu →
        </motion.button>
      </motion.div>

      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .contactContainer { grid-template-columns: 1fr !important; gap: 30px !important; }
            .faqGrid { grid-template-columns: 1fr !important; }
            .heroTitle { font-size: 36px !important; }
            .heroSubtitle { font-size: 16px !important; }
            .mapTitle, .faqTitle { font-size: 28px !important; }
            .ctaTitle { font-size: 32px !important; }
            .mapIframe { height: 300px !important; }
            .formContainer { padding: 25px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;