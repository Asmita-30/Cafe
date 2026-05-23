// src/page/about.jsx
import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';
import homepageImg from '../assets/homepage.png';
import coffieserveImg from '../assets/coffieserve.png';
import cafebillImg from '../assets/cafebill.png';
import homepageBg from '../assets/homepage.png';

const About = () => {
  const teamMembers = [
    { name: 'Rajesh Kumar', role: 'Master Barista', experience: '12 years', icon: '👨‍🍳', delay: 0 },
    { name: 'Priya Sharma', role: 'Head Chef', experience: '10 years', icon: '👩‍🍳', delay: 0.1 },
    { name: 'Amit Patel', role: 'Coffee Roaster', experience: '8 years', icon: '☕', delay: 0.2 },
    { name: 'Neha Singh', role: 'Restaurant Manager', experience: '9 years', icon: '👩‍💼', delay: 0.3 },
  ];

  const values = [
    { icon: '☕', title: 'Quality First', desc: 'Using only the finest ingredients and premium coffee beans', delay: 0 },
    { icon: '❤️', title: 'Passion Driven', desc: 'Every cup is made with love and dedication to perfection', delay: 0.1 },
    { icon: '🌱', title: 'Sustainability', desc: 'Eco-friendly practices and locally sourced ingredients', delay: 0.2 },
    { icon: '🤝', title: 'Community', desc: 'Creating a warm, welcoming space for everyone', delay: 0.3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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
      y: -15,
      scale: 1.05,
      boxShadow: "0 25px 40px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const teamCardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    hover: {
      y: -15,
      scale: 1.05,
      boxShadow: "0 25px 40px rgba(0,0,0,0.2)",
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
      backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${homepageBg})`,
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
    // Cafe Story Section
    storySection: {
      padding: '100px 20px',
      background: 'white',
    },
    storyContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    storyImage: {
      width: '100%',
      borderRadius: '30px',
      boxShadow: '0 30px 50px rgba(0,0,0,0.15)',
    },
    sectionBadge: {
      color: '#f59e0b',
      fontSize: '14px',
      fontWeight: '700',
      letterSpacing: '3px',
      marginBottom: '15px',
      textTransform: 'uppercase',
    },
    sectionTitle: {
      fontSize: '42px',
      color: '#78350f',
      marginBottom: '25px',
      fontWeight: 'bold',
    },
    sectionText: {
      color: '#4b5563',
      lineHeight: '1.8',
      marginBottom: '20px',
      fontSize: '16px',
    },
    // Vision Section
    visionSection: {
      padding: '100px 20px',
      background: '#fefaf5',
    },
    visionContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    visionImage: {
      width: '100%',
      borderRadius: '30px',
      boxShadow: '0 30px 50px rgba(0,0,0,0.15)',
    },
    // Mission Section
    missionSection: {
      padding: '100px 20px',
      background: 'white',
    },
    missionContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    missionImage: {
      width: '100%',
      borderRadius: '30px',
      boxShadow: '0 30px 50px rgba(0,0,0,0.15)',
    },
    // Values Section with Background Image
    valuesSection: {
      position: 'relative',
      padding: '100px 20px',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${coffieserveImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
    },
    valuesTitle: {
      textAlign: 'center',
      fontSize: '42px',
      marginBottom: '60px',
      fontWeight: 'bold',
    },
    valuesGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
    },
    valueCard: {
      textAlign: 'center',
      padding: '35px 25px',
      background: 'rgba(255,255,255,0.12)',
      borderRadius: '25px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    valueIcon: { fontSize: '55px', marginBottom: '15px' },
    valueTitle: { fontSize: '22px', fontWeight: 'bold', marginBottom: '12px' },
    valueDesc: { fontSize: '14px', opacity: 0.9, lineHeight: '1.6' },
    // Team Section
    teamSection: {
      padding: '100px 20px',
      background: '#fefaf5',
    },
    teamTitle: {
      textAlign: 'center',
      fontSize: '42px',
      color: '#78350f',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    teamSubtitle: {
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: '60px',
      fontSize: '18px',
    },
    teamGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '35px',
    },
    teamCard: {
      textAlign: 'center',
      padding: '35px 20px',
      background: 'white',
      borderRadius: '25px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      cursor: 'pointer',
    },
    teamIcon: { fontSize: '70px', marginBottom: '15px' },
    teamName: { fontSize: '20px', fontWeight: 'bold', color: '#78350f', marginBottom: '8px' },
    teamRole: { color: '#f59e0b', fontSize: '15px', marginBottom: '5px', fontWeight: '500' },
    teamExp: { color: '#6b7280', fontSize: '13px' },
    // CTA Section with Background Image
    ctaSection: {
      position: 'relative',
      padding: '100px 20px',
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cafebillImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
    },
    ctaTitle: {
      fontSize: '42px',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    ctaSubtitle: {
      fontSize: '18px',
      marginBottom: '35px',
      opacity: 0.95,
    },
    ctaButton: {
      padding: '16px 48px',
      fontSize: '18px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
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
          Our Story
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={styles.heroSubtitle}
        >
          Discover the passion, dedication, and love that goes into every cup of coffee 
          and every dish we serve at Café Aura.
        </motion.p>
      </motion.div>

      {/* Cafe Story Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={styles.storySection}
      >
        <div style={styles.storyContainer}>
          <motion.div variants={itemVariants}>
            <img src={aboutImg} alt="Café Aura Story" style={styles.storyImage} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <div style={styles.sectionBadge}>✨ OUR JOURNEY ✨</div>
            <h2 style={styles.sectionTitle}>The Café Aura Story</h2>
            <p style={styles.sectionText}>
              Founded in 2015, Café Aura began as a small dream in the heart of the city. 
              What started as a passion for creating the perfect cup of coffee has now grown 
              into a beloved community hub where people come together to enjoy exceptional 
              food and beverages in a warm, inviting atmosphere.
            </p>
            <p style={styles.sectionText}>
              Our name "Aura" reflects the positive energy and welcoming vibe that surrounds 
              our café. Every detail, from the carefully sourced coffee beans to the 
              handcrafted furniture, has been thoughtfully chosen to create an unforgettable 
              experience for our guests.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={styles.visionSection}
      >
        <div style={styles.visionContainer}>
          <motion.div variants={itemVariants}>
            <div style={styles.sectionBadge}>🌟 OUR VISION 🌟</div>
            <h2 style={styles.sectionTitle}>Creating Moments That Matter</h2>
            <p style={styles.sectionText}>
              Our vision is to become the most beloved café chain that transforms ordinary 
              coffee breaks into extraordinary moments. We aspire to create spaces where 
              conversations flow as smoothly as our coffee, and where every visit leaves 
              you with a smile.
            </p>
            <p style={styles.sectionText}>
              We envision a future where Café Aura is synonymous with quality, warmth, 
              and community - a place where strangers become friends over shared meals 
              and where every cup tells a story of passion and dedication.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <img src={homepageImg} alt="Our Vision" style={styles.visionImage} />
          </motion.div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={styles.missionSection}
      >
        <div style={styles.missionContainer}>
          <motion.div variants={itemVariants}>
            <img src={coffieserveImg} alt="Our Mission" style={styles.missionImage} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <div style={styles.sectionBadge}>🎯 OUR MISSION 🎯</div>
            <h2 style={styles.sectionTitle}>Serving Excellence Every Day</h2>
            <p style={styles.sectionText}>
              Our mission is to delight every customer with exceptional coffee, delicious 
              food, and heartfelt hospitality. We are committed to sourcing the finest 
              ingredients, roasting our beans to perfection, and training our team to 
              deliver consistent quality in every cup and every dish.
            </p>
            <p style={styles.sectionText}>
              We strive to make a positive impact on our community by supporting local 
              farmers, reducing our environmental footprint, and creating a workplace 
              where our team members can grow and thrive.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Values Section with Background Image */}
      <div style={styles.valuesSection}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.valuesTitle}
        >
          Our Core Values
        </motion.h2>
        <div style={styles.valuesGrid}>
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              custom={value.delay}
              style={styles.valueCard}
            >
              <div style={styles.valueIcon}>{value.icon}</div>
              <div style={styles.valueTitle}>{value.title}</div>
              <div style={styles.valueDesc}>{value.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div style={styles.teamSection}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.teamTitle}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={styles.teamSubtitle}
        >
          The passionate people behind your favorite coffee
        </motion.p>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              variants={teamCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              custom={member.delay}
              style={styles.teamCard}
            >
              <div style={styles.teamIcon}>{member.icon}</div>
              <div style={styles.teamName}>{member.name}</div>
              <div style={styles.teamRole}>{member.role}</div>
              <div style={styles.teamExp}>{member.experience} experience</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section with Background Image */}
      <div style={styles.ctaSection}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.ctaTitle}
        >
          Experience the Café Aura Difference
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={styles.ctaSubtitle}
        >
          Join us for an unforgettable coffee experience
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.ctaButton}
          onClick={() => window.location.href = '/menu'}
        >
          Explore Our Menu →
        </motion.button>
      </div>

      <style>
        {`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .storyContainer, .visionContainer, .missionContainer {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
            .valuesGrid, .teamGrid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 20px !important;
            }
            .heroTitle { font-size: 36px !important; }
            .heroSubtitle { font-size: 16px !important; }
            .sectionTitle { font-size: 32px !important; }
            .valuesTitle, .teamTitle, .ctaTitle { font-size: 32px !important; }
            .valueCard { padding: 25px 15px !important; }
            .teamCard { padding: 25px 15px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default About;