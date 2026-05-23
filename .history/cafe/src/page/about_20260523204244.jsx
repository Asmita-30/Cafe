// src/page/about.jsx
import React from 'react';
import aboutImg from '../assets/about.png';
import homepageImg from '../assets/homepage.png';
import coffieserveImg from '../assets/coffieserve.png';
import cafebillImg from '../assets/cafebill.png';

const About = () => {
  const teamMembers = [
    { name: 'Rajesh Kumar', role: 'Master Barista', experience: '12 years', icon: '👨‍🍳' },
    { name: 'Priya Sharma', role: 'Head Chef', experience: '10 years', icon: '👩‍🍳' },
    { name: 'Amit Patel', role: 'Coffee Roaster', experience: '8 years', icon: '☕' },
    { name: 'Neha Singh', role: 'Restaurant Manager', experience: '9 years', icon: '👩‍💼' },
  ];

  const values = [
    { icon: '☕', title: 'Quality First', desc: 'Using only the finest ingredients and premium coffee beans' },
    { icon: '❤️', title: 'Passion Driven', desc: 'Every cup is made with love and dedication to perfection' },
    { icon: '🌱', title: 'Sustainability', desc: 'Eco-friendly practices and locally sourced ingredients' },
    { icon: '🤝', title: 'Community', desc: 'Creating a warm, welcoming space for everyone' },
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
      fontSize: '20px',
      color: '#92400e',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    // Cafe Story Section (Image Left, Text Right)
    storySection: {
      padding: '80px 20px',
      background: 'white',
    },
    storyContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'center',
    },
    storyImage: {
      width: '100%',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    storyContent: {
      animation: 'fadeInRight 0.8s ease-out',
    },
    sectionBadge: {
      color: '#f59e0b',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '2px',
      marginBottom: '15px',
      textTransform: 'uppercase',
    },
    sectionTitle: {
      fontSize: '36px',
      color: '#78350f',
      marginBottom: '20px',
    },
    sectionText: {
      color: '#4b5563',
      lineHeight: '1.8',
      marginBottom: '15px',
      fontSize: '16px',
    },
    // Vision Section (Image Right, Text Left)
    visionSection: {
      padding: '80px 20px',
      background: '#fefaf5',
    },
    visionContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'center',
    },
    visionContent: {
      animation: 'fadeInLeft 0.8s ease-out',
    },
    visionImage: {
      width: '100%',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    // Mission Section (Image Left, Text Right)
    missionSection: {
      padding: '80px 20px',
      background: 'white',
    },
    missionContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'center',
    },
    missionContent: {
      animation: 'fadeInRight 0.8s ease-out',
    },
    missionImage: {
      width: '100%',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    // Values Section
    valuesSection: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      color: 'white',
    },
    valuesTitle: {
      textAlign: 'center',
      fontSize: '36px',
      marginBottom: '50px',
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
      padding: '30px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)',
      transition: 'transform 0.3s ease',
    },
    valueIcon: {
      fontSize: '48px',
      marginBottom: '15px',
    },
    valueTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    valueDesc: {
      fontSize: '14px',
      opacity: 0.9,
      lineHeight: '1.5',
    },
    // Team Section
    teamSection: {
      padding: '80px 20px',
      background: '#fefaf5',
    },
    teamTitle: {
      textAlign: 'center',
      fontSize: '36px',
      color: '#78350f',
      marginBottom: '15px',
    },
    teamSubtitle: {
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: '50px',
    },
    teamGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
    },
    teamCard: {
      textAlign: 'center',
      padding: '30px',
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
    },
    teamIcon: {
      fontSize: '60px',
      marginBottom: '15px',
    },
    teamName: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '5px',
    },
    teamRole: {
      color: '#f59e0b',
      fontSize: '14px',
      marginBottom: '5px',
    },
    teamExp: {
      color: '#6b7280',
      fontSize: '12px',
    },
    // CTA Section
    ctaSection: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '32px',
      color: '#78350f',
      marginBottom: '20px',
    },
    ctaButton: {
      padding: '14px 40px',
      fontSize: '18px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Our Story</h1>
        <p style={styles.heroSubtitle}>
          Discover the passion, dedication, and love that goes into every cup of coffee 
          and every dish we serve at Café Aura.
        </p>
      </div>

      {/* Cafe Story Section - Image Left, Text Right */}
      <div style={styles.storySection}>
        <div style={styles.storyContainer}>
          <div>
            <img 
              src={aboutImg} 
              alt="Café Aura Story" 
              style={styles.storyImage}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
              }}
            />
          </div>
          <div style={styles.storyContent}>
            <div style={styles.sectionBadge}>OUR JOURNEY</div>
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
          </div>
        </div>
      </div>

      {/* Vision Section - Image Right, Text Left */}
      <div style={styles.visionSection}>
        <div style={styles.visionContainer}>
          <div style={styles.visionContent}>
            <div style={styles.sectionBadge}>OUR VISION</div>
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
          </div>
          <div>
            <img 
              src={homepageImg} 
              alt="Our Vision" 
              style={styles.visionImage}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </div>
      </div>

      {/* Mission Section - Image Left, Text Right */}
      <div style={styles.missionSection}>
        <div style={styles.missionContainer}>
          <div>
            <img 
              src={coffieserveImg} 
              alt="Our Mission" 
              style={styles.missionImage}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <div style={styles.missionContent}>
            <div style={styles.sectionBadge}>OUR MISSION</div>
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
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div style={styles.valuesSection}>
        <h2 style={styles.valuesTitle}>Our Core Values</h2>
        <div style={styles.valuesGrid}>
          {values.map((value, idx) => (
            <div 
              key={idx} 
              style={styles.valueCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.valueIcon}>{value.icon}</div>
              <div style={styles.valueTitle}>{value.title}</div>
              <div style={styles.valueDesc}>{value.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div style={styles.teamSection}>
        <h2 style={styles.teamTitle}>Meet Our Team</h2>
        <p style={styles.teamSubtitle}>The passionate people behind your favorite coffee</p>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              style={styles.teamCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              <div style={styles.teamIcon}>{member.icon}</div>
              <div style={styles.teamName}>{member.name}</div>
              <div style={styles.teamRole}>{member.role}</div>
              <div style={styles.teamExp}>{member.experience} experience</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Experience the Café Aura Difference</h2>
        <button 
          style={styles.ctaButton}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => window.location.href = '/menu'}
        >
          Explore Our Menu →
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
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @media (max-width: 768px) {
            .storyContainer, .visionContainer, .missionContainer {
              grid-template-columns: 1fr !important;
            }
            .valuesGrid, .teamGrid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;