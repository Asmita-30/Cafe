// src/page/home.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import homepageImg from '../assets/homepage.png';
import homepage2Img from '../assets/homepage2.png';
import aboutImg from '../assets/about.png';
import coffieserveImg from '../assets/coffieserve.png';
import cafebillImg from '../assets/cafebill.png';
import homepageBg from '../assets/homepage.png';
import testimonialBg from '../assets/homepage2.png';
import featuresBg from '../assets/coffieserve.png';

// Import menu card images
import Espresso from '../assets/menucard/Espresso cofee.png';
import CaffeLatte from '../assets/menucard/Caffè Latte.png';
import Cappuccino from '../assets/menucard/cappuccino.png';
import MasalaChai from '../assets/menucard/Masala Chai.png';
import ChocolateCake from '../assets/menucard/Chocolate Cake.png';
import VegBurger from '../assets/menucard/Veg Burger.png';
import IcedLatte from '../assets/menucard/Iced Latte.png';
import ChocolateMuffin from '../assets/menucard/Chocolate Muffin.png';
import GrilledCheese from '../assets/menucard/Grilled Cheese.png';
import Cheesecake from '../assets/menucard/Cheesecake.png';

// Import moving category images
import BakeryImg from '../assets/menu/Bakery.png';
import BreakfastImg from '../assets/menu/Breakfast.png';
import ColdCoffeeImg from '../assets/menu/coldcoffie.png';
import DessertsImg from '../assets/menu/Desserts.png';
import HotCoffeeImg from '../assets/menu/hotcoffie.png';
import LunchDinnerImg from '../assets/menu/Lunch & Dinner.png';
import SaladsImg from '../assets/menu/Salads.png';
import SandwichesImg from '../assets/menu/Sandwiches.png';
import SignatureDrinksImg from '../assets/menu/Signature Drinks.png';
import SmoothiesImg from '../assets/menu/Smoothies.png';
import TeaImg from '../assets/menu/Tea.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: homepageImg,
      title: "Welcome to Café Aura",
      subtitle: "Where Every Sip Tells a Story",
      description: "Experience the perfect blend of artisanal coffee and warm hospitality"
    },
    {
      id: 2,
      image: homepage2Img,
      title: "Crafted with Passion",
      subtitle: "Premium Coffee & Delicious Food",
      description: "Made with love using the finest ingredients"
    },
    {
      id: 3,
      image: coffieserveImg,
      title: "Freshly Brewed",
      subtitle: "Every Cup is a Masterpiece",
      description: "Expertly prepared by our skilled baristas"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const popularItems = [
    { id: 1, name: 'Espresso', price: '₹180', icon: '☕', image: Espresso, category: 'Coffee', rating: 4.8, orders: '1.2k+' },
    { id: 2, name: 'Caffè Latte', price: '₹220', icon: '☕', image: CaffeLatte, category: 'Coffee', rating: 4.9, orders: '2.5k+' },
    { id: 3, name: 'Cappuccino', price: '₹220', icon: '☕', image: Cappuccino, category: 'Coffee', rating: 4.7, orders: '1.8k+' },
    { id: 4, name: 'Masala Chai', price: '₹150', icon: '🍵', image: MasalaChai, category: 'Tea', rating: 4.9, orders: '3.1k+' },
    { id: 5, name: 'Iced Latte', price: '₹240', icon: '🧊', image: IcedLatte, category: 'Cold Coffee', rating: 4.8, orders: '1.5k+' },
    { id: 6, name: 'Chocolate Cake', price: '₹180', icon: '🍰', image: ChocolateCake, category: 'Dessert', rating: 4.9, orders: '2.2k+' },
    { id: 7, name: 'Veg Burger', price: '₹280', icon: '🍔', image: VegBurger, category: 'Lunch', rating: 4.7, orders: '1.9k+' },
    { id: 8, name: 'Chocolate Muffin', price: '₹110', icon: '🧁', image: ChocolateMuffin, category: 'Bakery', rating: 4.8, orders: '3.5k+' },
    { id: 9, name: 'Grilled Cheese', price: '₹180', icon: '🥪', image: GrilledCheese, category: 'Sandwich', rating: 4.6, orders: '1.1k+' },
    { id: 10, name: 'Cheesecake', price: '₹200', icon: '🍰', image: Cheesecake, category: 'Dessert', rating: 4.9, orders: '2.8k+' }
  ];

  const features = [
    { id: 1, icon: "☕", title: "Premium Coffee", desc: "100% Arabica beans from finest estates", color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)" },
    { id: 2, icon: "🍰", title: "Fresh Bakery", desc: "Baked daily with love and care", color: "#e74c3c", gradient: "linear-gradient(135deg, #e74c3c, #f39c12)" },
    { id: 3, icon: "🏠", title: "Cozy Ambiance", desc: "Perfect for work, meetings & relaxation", color: "#3498db", gradient: "linear-gradient(135deg, #3498db, #2ecc71)" },
    { id: 4, icon: "🚚", title: "Free Delivery", desc: "On orders above ₹500 within 5km", color: "#2ecc71", gradient: "linear-gradient(135deg, #2ecc71, #27ae60)" },
    { id: 5, icon: "👨‍🍳", title: "Expert Baristas", desc: "10+ years of coffee expertise", color: "#9b59b6", gradient: "linear-gradient(135deg, #9b59b6, #8e44ad)" },
    { id: 6, icon: "🌱", title: "Sustainable Sourcing", desc: "Eco-friendly coffee beans", color: "#27ae60", gradient: "linear-gradient(135deg, #27ae60, #2ecc71)" },
    { id: 7, icon: "🎵", title: "Live Music", desc: "Weekend acoustic sessions", color: "#e67e22", gradient: "linear-gradient(135deg, #e67e22, #f39c12)" },
    { id: 8, icon: "📚", title: "Work Friendly", desc: "Free WiFi & power outlets", color: "#1abc9c", gradient: "linear-gradient(135deg, #1abc9c, #16a085)" }
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence", icon: "🏆" },
    { number: "50+", label: "Coffee Varieties", icon: "☕" },
    { number: "5000+", label: "Happy Customers", icon: "😊" },
    { number: "25+", label: "Expert Baristas", icon: "👨‍🍳" }
  ];

  const movingCategories = [
    { id: 1, name: 'Hot Coffee', image: HotCoffeeImg },
    { id: 2, name: 'Cold Coffee', image: ColdCoffeeImg },
    { id: 3, name: 'Tea', image: TeaImg },
    { id: 4, name: 'Signature Drinks', image: SignatureDrinksImg },
    { id: 5, name: 'Smoothies', image: SmoothiesImg },
    { id: 6, name: 'Breakfast', image: BreakfastImg },
    { id: 7, name: 'Lunch & Dinner', image: LunchDinnerImg },
    { id: 8, name: 'Sandwiches', image: SandwichesImg },
    { id: 9, name: 'Salads', image: SaladsImg },
    { id: 10, name: 'Bakery', image: BakeryImg },
    { id: 11, name: 'Desserts', image: DessertsImg }
  ];

  const testimonials = [
    { id: 1, name: "Priya Sharma", role: "Regular Customer", text: "The best coffee in town! The ambiance is amazing and the staff is super friendly.", rating: 5, image: "👩‍💼", date: "2 days ago" },
    { id: 2, name: "Rahul Verma", role: "Food Blogger", text: "Café Aura has the most delicious menu. Their signature drinks are a must-try!", rating: 5, image: "👨‍💻", date: "5 days ago" },
    { id: 3, name: "Neha Gupta", role: "Yoga Instructor", text: "Perfect place for a quiet coffee date or work from café. The veg burger is my favorite!", rating: 5, image: "🧘‍♀️", date: "1 week ago" },
    { id: 4, name: "Amit Patel", role: "IT Professional", text: "Great place to relax after work. The Masala Chai is absolutely delicious!", rating: 5, image: "👨‍💼", date: "3 days ago" },
    { id: 5, name: "Sneha Reddy", role: "College Student", text: "Love the cozy vibe and the affordable prices. The cappuccino is my go-to!", rating: 5, image: "👩‍🎓", date: "1 day ago" },
    { id: 6, name: "Vikram Singh", role: "Entrepreneur", text: "Excellent service and even better coffee. My morning coffee ritual is sorted!", rating: 5, image: "👨‍💼", date: "4 days ago" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
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
      boxShadow: "0 15px 30px rgba(245,158,11,0.2)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const featureCardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      overflow: 'hidden',
    },
    sliderContainer: {
      position: 'relative',
      height: '90vh',
      minHeight: '600px',
      overflow: 'hidden',
    },
    slideOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
    },
    slideContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      color: 'white',
      maxWidth: '800px',
      padding: '20px',
    },
    slideTitle: {
      fontSize: '64px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
    },
    slideSubtitle: {
      fontSize: '30px',
      marginBottom: '15px',
    },
    slideDesc: {
      fontSize: '18px',
      marginBottom: '30px',
    },
    ctaButton: {
      padding: '14px 45px',
      fontSize: '18px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
    },
    sliderButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.3)',
      backdropFilter: 'blur(5px)',
      border: 'none',
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      fontSize: '28px',
      cursor: 'pointer',
      color: 'white',
      zIndex: 10,
    },
    prevButton: { left: '25px' },
    nextButton: { right: '25px' },
    dotsContainer: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '15px',
      zIndex: 10,
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.5)',
      cursor: 'pointer',
    },
    activeDot: {
      background: '#f59e0b',
      width: '35px',
      borderRadius: '6px',
    },
    aboutSection: {
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #fff 0%, #fefaf5 100%)',
    },
    aboutContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    aboutImage: {
      width: '100%',
      borderRadius: '30px',
      boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
    },
    aboutBadge: {
      color: '#f59e0b',
      fontSize: '14px',
      fontWeight: '700',
      letterSpacing: '3px',
      marginBottom: '15px',
      textTransform: 'uppercase',
    },
    aboutTitle: {
      fontSize: '42px',
      color: '#78350f',
      marginBottom: '25px',
      fontWeight: 'bold',
    },
    aboutHighlight: { color: '#f59e0b' },
    aboutDesc: {
      color: '#4b5563',
      lineHeight: '1.8',
      marginBottom: '20px',
      fontSize: '16px',
    },
    
    movingSection: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #fefaf5 0%, #fff 100%)',
      overflow: 'hidden',
    },
    movingContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    movingTrack: {
      display: 'flex',
      gap: '25px',
      animation: 'scroll 40s linear infinite',
      width: 'max-content',
    },
    movingItem: {
      flex: '0 0 auto',
      width: '200px',
      textAlign: 'center',
      cursor: 'pointer',
    },
    movingImageWrapper: {
      width: '160px',
      height: '160px',
      margin: '0 auto 15px',
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      border: '4px solid #f59e0b',
    },
    movingImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    movingName: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#78350f',
    },
    
    featuresSection: {
      position: 'relative',
      padding: '100px 20px',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${featuresBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    featuresContainer: {
      maxWidth: '1300px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '30px',
      marginTop: '50px',
    },
    featureCard: {
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '25px',
      padding: '30px 20px',
      textAlign: 'center',
      cursor: 'pointer',
      border: '2px solid rgba(245,158,11,0.3)',
      position: 'relative',
      overflow: 'hidden',
    },
    featureIconWrapper: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #fef3c7, #f59e0b)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      fontSize: '45px',
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '10px',
    },
    featureDesc: {
      fontSize: '13px',
      color: '#6b7280',
      lineHeight: '1.5',
    },
    featureNumber: {
      position: 'absolute',
      bottom: '10px',
      right: '15px',
      fontSize: '40px',
      fontWeight: 'bold',
      color: 'rgba(245,158,11,0.1)',
    },
    
    // SMALLER MENU SECTION - Reduced sizes
    menuSection: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #fff 0%, #fef3c7 50%, #fff 100%)',
    },
    sectionHeader: { textAlign: 'center', marginBottom: '40px' },
    sectionTitle: {
      fontSize: '36px',
      color: '#78350f',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    sectionSubtitle: { fontSize: '16px', color: '#6b7280' },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '25px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    menuCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative',
      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
      border: '1px solid rgba(245,158,11,0.15)',
    },
    menuImageWrapper: { 
      width: '100%', 
      height: '160px', 
      overflow: 'hidden', 
      background: 'linear-gradient(135deg, #fefaf5, #fff)', 
      position: 'relative' 
    },
    menuImage: { 
      width: '100%', 
      height: '100%', 
      objectFit: 'contain', 
      transition: 'transform 0.4s ease', 
      padding: '10px' 
    },
    ratingBadge: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      background: '#f59e0b',
      color: 'white',
      padding: '3px 8px',
      borderRadius: '15px',
      fontSize: '10px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
    },
    ordersBadge: {
      position: 'absolute',
      bottom: '8px',
      left: '8px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      padding: '3px 8px',
      borderRadius: '15px',
      fontSize: '9px',
      fontWeight: 'bold',
    },
    menuContent: { padding: '12px 15px 15px' },
    menuHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' },
    menuIcon: { fontSize: '20px' },
    menuName: { fontSize: '15px', fontWeight: 'bold', color: '#78350f', flex: 1, marginLeft: '8px' },
    menuPrice: { fontSize: '16px', fontWeight: 'bold', color: '#f59e0b' },
    menuCategory: { 
      fontSize: '10px', 
      color: '#9ca3af', 
      marginBottom: '10px', 
      display: 'inline-block', 
      background: '#fef3c7', 
      padding: '2px 10px', 
      borderRadius: '15px' 
    },
    orderBtn: {
      width: '100%',
      padding: '8px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      border: 'none',
      borderRadius: '12px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '12px',
    },
    viewAllBtn: { textAlign: 'center', marginTop: '40px' },
    viewAllButton: {
      padding: '12px 35px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    statsSection: {
      position: 'relative',
      padding: '80px 20px',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${homepageBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    statsContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      textAlign: 'center',
    },
    statCard: { 
      color: 'white', 
      padding: '20px',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
    },
    statIcon: { fontSize: '40px', marginBottom: '10px' },
    statNumber: { fontSize: '35px', fontWeight: 'bold', marginBottom: '5px', color: '#f59e0b' },
    statLabel: { fontSize: '13px', opacity: 0.95, color: 'white' },
    
    testimonialsSection: {
      position: 'relative',
      padding: '80px 20px',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${testimonialBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    testimonialsContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    testimonialsTrack: {
      display: 'flex',
      gap: '25px',
      animation: 'scrollReverse 35s linear infinite',
      width: 'max-content',
    },
    testimonialCard: {
      flex: '0 0 auto',
      width: '320px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,245,235,0.95))',
      backdropFilter: 'blur(10px)',
      borderRadius: '25px',
      padding: '25px',
      boxShadow: '0 25px 40px rgba(0,0,0,0.25)',
      textAlign: 'center',
      border: '1px solid rgba(245,158,11,0.4)',
      position: 'relative',
    },
    testimonialQuote: {
      position: 'absolute',
      top: '15px',
      left: '20px',
      fontSize: '50px',
      color: '#f59e0b',
      opacity: 0.3,
    },
    testimonialImage: {
      fontSize: '55px',
      marginBottom: '12px',
      background: 'linear-gradient(135deg, #fef3c7, #f59e0b)',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 15px',
      border: '3px solid #f59e0b',
    },
    testimonialName: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#78350f',
      marginBottom: '3px',
    },
    testimonialRole: {
      fontSize: '11px',
      color: '#f59e0b',
      marginBottom: '12px',
      fontWeight: '600',
    },
    testimonialText: {
      fontSize: '13px',
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '12px',
      fontStyle: 'italic',
    },
    testimonialRating: {
      color: '#f59e0b',
      fontSize: '14px',
      letterSpacing: '2px',
      marginBottom: '8px',
    },
    testimonialDate: {
      fontSize: '10px',
      color: '#9ca3af',
    },
    
    specialSection: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      position: 'relative',
    },
    specialContainer: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'center',
    },
    specialImage: { 
      width: '100%', 
      borderRadius: '25px', 
      border: '3px solid #f59e0b',
    },
    specialTitle: { 
      fontSize: '40px', 
      color: '#f59e0b', 
      marginBottom: '15px', 
      fontWeight: 'bold',
    },
    specialPrice: { 
      fontSize: '42px', 
      color: '#fff', 
      fontWeight: 'bold', 
      marginBottom: '20px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      display: 'inline-block',
      padding: '8px 25px',
      borderRadius: '50px',
    },
    specialDesc: {
      color: '#e2e8f0',
      fontSize: '16px',
      marginBottom: '25px',
      lineHeight: '1.5',
    },
    specialBtn: {
      padding: '14px 40px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    specialBadge: {
      position: 'absolute',
      top: '20px',
      right: '-30px',
      background: '#f59e0b',
      color: '#fff',
      padding: '6px 35px',
      transform: 'rotate(45deg)',
      fontSize: '12px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Slider */}
      <div style={styles.sliderContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={styles.slideOverlay}></div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={styles.slideContent}
            >
              <h1 style={styles.slideTitle}>{slides[currentSlide].title}</h1>
              <h2 style={styles.slideSubtitle}>{slides[currentSlide].subtitle}</h2>
              <p style={styles.slideDesc}>{slides[currentSlide].description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.ctaButton}
                onClick={() => window.location.href = '/menu'}
              >
                Explore Menu ✨
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <button style={{...styles.sliderButton, ...styles.prevButton}} onClick={prevSlide}>❮</button>
        <button style={{...styles.sliderButton, ...styles.nextButton}} onClick={nextSlide}>❯</button>

        <div style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <div
              key={index}
              style={{...styles.dot, ...(currentSlide === index ? styles.activeDot : {})}}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={styles.aboutSection}
      >
        <div style={styles.aboutContainer}>
          <motion.div variants={itemVariants}>
            <img src={aboutImg} alt="About Café Aura" style={styles.aboutImage} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <div style={styles.aboutBadge}>✨ ABOUT US ✨</div>
            <h2 style={styles.aboutTitle}>
              Welcome to <span style={styles.aboutHighlight}>Café Aura</span>
            </h2>
            <p style={styles.aboutDesc}>
              Nestled in the heart of the city, Café Aura is more than just a coffee shop – 
              it's a sanctuary for coffee lovers and food enthusiasts. Our journey began with 
              a simple passion for creating the perfect cup of coffee and serving delicious 
              food that brings people together.
            </p>
            <p style={styles.aboutDesc}>
              We source our beans from the finest estates around the world and roast them 
              in-house to ensure every cup is fresh and flavorful. Our team of expert baristas 
              crafts each beverage with precision and love, while our kitchen serves up 
              mouthwatering dishes made from locally sourced ingredients.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Moving Categories Section */}
      <div style={styles.movingSection}>
        <div style={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.sectionTitle}
          >
            🍽️ Explore Our Menu Categories 🍽️
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={styles.sectionSubtitle}
          >
            Something delicious for every craving
          </motion.p>
        </div>
        
        <div style={styles.movingContainer}>
          <div style={styles.movingTrack} className="moving-track">
            {[...movingCategories, ...movingCategories].map((item, idx) => (
              <motion.div
                key={`${item.id}-${idx}`}
                whileHover={{ y: -8, scale: 1.03 }}
                style={styles.movingItem}
                onClick={() => window.location.href = '/menu'}
              >
                <div style={styles.movingImageWrapper}>
                  <img src={item.image} alt={item.name} style={styles.movingImage} />
                </div>
                <div style={styles.movingName}>{item.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <div style={styles.featuresContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.sectionHeader}
          >
            <h2 style={{...styles.sectionTitle, color: '#fef3c7'}}>
              🌟 Why Choose Café Aura? 🌟
            </h2>
            <p style={{...styles.sectionSubtitle, color: '#fef3c7'}}>
              Experience the difference that makes us special
            </p>
          </motion.div>

          <div style={styles.featuresGrid}>
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                style={styles.featureCard}
              >
                <div style={{...styles.featureIconWrapper, background: feature.gradient}}>
                  {feature.icon}
                </div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>
                <div style={styles.featureNumber}>{(idx + 1).toString().padStart(2, '0')}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SMALLER Popular Menu Section */}
      <div style={styles.menuSection}>
        <div style={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.sectionTitle}
          >
            🔥 Popular Menu Items 🔥
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={styles.sectionSubtitle}
          >
            Our customers' all-time favorites
          </motion.p>
        </div>

        <div style={styles.menuGrid}>
          {popularItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              style={styles.menuCard}
              onClick={() => window.location.href = '/menu'}
            >
              <div style={styles.menuImageWrapper}>
                <img src={item.image} alt={item.name} style={styles.menuImage} className="menu-img" />
                <div style={styles.ratingBadge}>⭐ {item.rating}</div>
                <div style={styles.ordersBadge}>🛒 {item.orders}</div>
              </div>
              <div style={styles.menuContent}>
                <div style={styles.menuHeader}>
                  <span style={styles.menuIcon}>{item.icon}</span>
                  <span style={styles.menuName}>{item.name}</span>
                  <span style={styles.menuPrice}>{item.price}</span>
                </div>
                <div style={styles.menuCategory}>{item.category}</div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  style={styles.orderBtn}
                  onClick={(e) => { e.stopPropagation(); window.location.href = '/order'; }}
                >
                  🛒 Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={styles.viewAllBtn}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.viewAllButton}
            onClick={() => window.location.href = '/menu'}
          >
            View Full Menu →
          </motion.button>
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsContainer}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03 }}
              style={styles.statCard}
            >
              <div style={styles.statIcon}>{stat.icon}</div>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={styles.testimonialsSection}>
        <div style={styles.testimonialsContainer}>
          <div style={styles.sectionHeader}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{...styles.sectionTitle, color: '#fef3c7'}}
            >
              ⭐ What Our Customers Say ⭐
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{...styles.sectionSubtitle, color: '#fef3c7'}}
            >
              Loved by thousands of coffee enthusiasts
            </motion.p>
          </div>
          
          <div style={styles.testimonialsTrack} className="testimonials-track">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                whileHover={{ y: -10, scale: 1.02 }}
                style={styles.testimonialCard}
              >
                <div style={styles.testimonialQuote}>"</div>
                <div style={styles.testimonialImage}>{testimonial.image}</div>
                <div style={styles.testimonialName}>{testimonial.name}</div>
                <div style={styles.testimonialRole}>{testimonial.role}</div>
                <div style={styles.testimonialText}>"{testimonial.text}"</div>
                <div style={styles.testimonialRating}>{"★".repeat(testimonial.rating)}</div>
                <div style={styles.testimonialDate}>📅 {testimonial.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offer Section */}
      <div style={styles.specialSection}>
        <div style={styles.specialBadge}>🔥 LIMITED OFFER 🔥</div>
        <div style={styles.specialContainer}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div style={styles.specialTitle}>🎉 Special Combo Offer 🎉</div>
            </motion.div>
            <p style={styles.specialDesc}>
              Get our signature coffee with a freshly baked croissant at an unbeatable price! 
              <br />✨ Perfect start to your morning ✨
            </p>
            <div style={styles.specialPrice}>Only ₹299</div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              style={styles.specialBtn}
              onClick={() => window.location.href = '/order'}
            >
              Order Now → 🛒
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0, rotate: -3 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src={cafebillImg} alt="Special Offer" style={styles.specialImage} />
          </motion.div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .moving-track {
            animation: scroll 40s linear infinite;
          }
          .moving-track:hover {
            animation-play-state: paused;
          }
          .testimonials-track {
            animation: scrollReverse 35s linear infinite;
          }
          .testimonials-track:hover {
            animation-play-state: paused;
          }
          .menu-img:hover {
            transform: scale(1.05);
          }
          @media (max-width: 768px) {
            .menuGrid { grid-template-columns: repeat(2, 1fr) !important; gap: 15px !important; }
            .aboutContainer, .specialContainer { grid-template-columns: 1fr !important; text-align: center; }
            .statsContainer { grid-template-columns: repeat(2, 1fr) !important; gap: 15px !important; }
            .featuresGrid { grid-template-columns: repeat(2, 1fr) !important; gap: 15px !important; }
            .slideTitle { font-size: 36px !important; }
            .slideSubtitle { font-size: 20px !important; }
            .sectionTitle { font-size: 28px !important; }
            .aboutTitle { font-size: 28px !important; }
            .specialTitle { font-size: 28px !important; }
            .specialPrice { font-size: 32px !important; }
            .statNumber { font-size: 28px !important; }
            .movingItem { width: 130px !important; }
            .movingImageWrapper { width: 100px !important; height: 100px !important; }
            .testimonialCard { width: 270px !important; padding: 20px !important; }
            .menuImageWrapper { height: 130px !important; }
            .menuName { font-size: 13px !important; }
            .menuPrice { font-size: 14px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Home;