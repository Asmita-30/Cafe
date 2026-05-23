// src/page/menu.jsx
import React, { useState, useEffect } from 'react';
import homepageImg from '../assets/homepage.png';
import hotcoffie from '../assets/menu/hotcoffie.png';
import coldcoffie from '../assets/menu/coldcoffie.png';
import Tea from '../assets/menu/Tea.png';
import Bakery from '../assets/menu/Bakery.png';
import Breakfast from '../assets/menu/Breakfast.png';
import LunchDinner from '../assets/menu/Lunch & Dinner.png';
import Desserts from '../assets/menu/Desserts.png';
import Smoothies from '../assets/menu/Smoothies.png';
import SignatureDrinks from '../assets/menu/Signature Drinks.png';
import Sandwiches from '../assets/menu/Sandwiches.png';
import Salads from '../assets/menu/Salads.png';

// Individual menu card images
import Espresso from '../assets/menucard/Espresso cofee.png';
import CaffeLatte from '../assets/menucard/Caffè Latte.png';
import Cappuccino from '../assets/menucard/cappuccino.png';
import IcedLatte from '../assets/menucard/Iced Latte.png';
import IcedMocha from '../assets/menucard/Iced Mocha.png';
import MasalaChai from '../assets/menucard/Masala Chai.png';
import GreenTea from '../assets/menucard/Green Tea.png';
import LemonTea from '../assets/menucard/Lemon Tea.png';
import ChocolateMuffin from '../assets/menucard/Chocolate Muffin.png';
import ChocolateChipCookie from '../assets/menucard/Chocolate Chip Cookie.png';
import ClassicPancakes from '../assets/menucard/Classic Pancakes.png';
import MasalaOmelette from '../assets/menucard/Masala Omelette.png';
import EggsBenedict from '../assets/menucard/Eggs Benedict.png';
import VegBurger from '../assets/menucard/Veg Burger.png';
import ChickenBurger from '../assets/menucard/Chicken Burger.png';
import ChocolateCake from '../assets/menucard/Chocolate Cake.png';
import Cheesecake from '../assets/menucard/Cheesecake.png';
import MangoTango from '../assets/menucard/Mango Tango.png';
import VanillaBliss from '../assets/menucard/Vanilla Bliss.png';
import GrilledCheese from '../assets/menucard/Grilled Cheese.png';
import VegMayo from '../assets/menucard/Veg Mayo.png';
import FruitSalad from '../assets/menucard/Fruit Salad.png';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
    const timer = setTimeout(() => setAnimateCards(false), 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️', bgImage: homepageImg },
    { id: 'coffee', name: 'Hot Coffees', icon: '☕', bgImage: hotcoffie },
    { id: 'cold', name: 'Cold Coffees', icon: '🧊', bgImage: coldcoffie },
    { id: 'tea', name: 'Teas & Chai', icon: '🍵', bgImage: Tea },
    { id: 'bakery', name: 'Fresh Bakery', icon: '🥐', bgImage: Bakery },
    { id: 'breakfast', name: 'Breakfast', icon: '🍳', bgImage: Breakfast },
    { id: 'lunch', name: 'Lunch & Dinner', icon: '🍝', bgImage: LunchDinner },
    { id: 'desserts', name: 'Desserts', icon: '🍰', bgImage: Desserts },
    { id: 'smoothies', name: 'Smoothies', icon: '🥤', bgImage: Smoothies },
    { id: 'signature', name: 'Signature Drinks', icon: '✨', bgImage: SignatureDrinks },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪', bgImage: Sandwiches },
    { id: 'salads', name: 'Salads', icon: '🥗', bgImage: Salads }
  ];

  const menuItems = {
    coffee: [
      { id: 1, name: 'Espresso', price: '₹180', desc: 'Strong and bold shot of pure coffee', icon: '☕', image: Espresso, category: 'coffee', isPopular: true },
      { id: 2, name: 'Caffè Latte', price: '₹220', desc: 'Espresso with steamed milk and light foam', icon: '☕', image: CaffeLatte, category: 'coffee', isPopular: true },
      { id: 3, name: 'Cappuccino', price: '₹220', desc: 'Espresso with equal parts steamed milk and foam', icon: '☕', image: Cappuccino, category: 'coffee', isPopular: true },
      { id: 4, name: 'Flat White', price: '₹240', desc: 'Smooth espresso with velvety microfoam', icon: '☕', image: hotcoffie, category: 'coffee', isPopular: false },
      { id: 5, name: 'Mocha', price: '₹260', desc: 'Espresso with chocolate and steamed milk', icon: '☕', image: hotcoffie, category: 'coffee', isPopular: false },
      { id: 6, name: 'American', price: '₹190', desc: 'Espresso diluted with hot water', icon: '☕', image: hotcoffie, category: 'coffee', isPopular: false }
    ],
    cold: [
      { id: 7, name: 'Iced Latte', price: '₹240', desc: 'Chilled espresso with cold milk over ice', icon: '🧊', image: IcedLatte, category: 'cold', isPopular: true },
      { id: 8, name: 'Iced Mocha', price: '₹270', desc: 'Chocolate espresso with cold milk', icon: '🧊', image: IcedMocha, category: 'cold', isPopular: true },
      { id: 9, name: 'Cold Brew', price: '₹230', desc: 'Slow-steeped coffee served cold', icon: '🧊', image: coldcoffie, category: 'cold', isPopular: false },
      { id: 10, name: 'Frappuccino', price: '₹290', desc: 'Blended coffee with cream', icon: '🧊', image: coldcoffie, category: 'cold', isPopular: false },
      { id: 11, name: 'Iced Caramel Macchiato', price: '₹280', desc: 'Vanilla, caramel, and espresso over ice', icon: '🧊', image: coldcoffie, category: 'cold', isPopular: false }
    ],
    tea: [
      { id: 12, name: 'Masala Chai', price: '₹150', desc: 'Traditional spiced Indian tea', icon: '🍵', image: MasalaChai, category: 'tea', isPopular: true },
      { id: 13, name: 'Green Tea', price: '₹140', desc: 'Healthy antioxidant-rich tea', icon: '🍵', image: GreenTea, category: 'tea', isPopular: true },
      { id: 14, name: 'Ginger Tea', price: '₹140', desc: 'Fresh ginger infused tea', icon: '🍵', image: Tea, category: 'tea', isPopular: false },
      { id: 15, name: 'Earl Grey', price: '₹160', desc: 'Classic black tea with bergamot', icon: '🍵', image: Tea, category: 'tea', isPopular: false },
      { id: 16, name: 'Lemon Tea', price: '₹130', desc: 'Refreshing citrus tea', icon: '🍵', image: LemonTea, category: 'tea', isPopular: false }
    ],
    bakery: [
      { id: 17, name: 'Butter Croissant', price: '₹120', desc: 'Flaky, buttery French pastry', icon: '🥐', image: Bakery, category: 'bakery', isPopular: true },
      { id: 18, name: 'Chocolate Muffin', price: '₹110', desc: 'Rich chocolate chip muffin', icon: '🥐', image: ChocolateMuffin, category: 'bakery', isPopular: true },
      { id: 19, name: 'Blueberry Muffin', price: '₹110', desc: 'Fresh blueberry muffin', icon: '🥐', image: Bakery, category: 'bakery', isPopular: false },
      { id: 20, name: 'Chocolate Chip Cookie', price: '₹80', desc: 'Soft-baked cookie with chocolate chunks', icon: '🥐', image: ChocolateChipCookie, category: 'bakery', isPopular: true },
      { id: 21, name: 'Cinnamon Roll', price: '₹140', desc: 'Warm roll with cinnamon glaze', icon: '🥐', image: Bakery, category: 'bakery', isPopular: false }
    ],
    breakfast: [
      { id: 22, name: 'Classic Pancakes', price: '₹220', desc: 'Fluffy pancakes with maple syrup', icon: '🍳', image: ClassicPancakes, category: 'breakfast', isPopular: true },
      { id: 23, name: 'Masala Omelette', price: '₹180', desc: 'Spiced egg omelette with toast', icon: '🍳', image: MasalaOmelette, category: 'breakfast', isPopular: true },
      { id: 24, name: 'French Toast', price: '₹210', desc: 'Brioche toast with berries', icon: '🍳', image: Breakfast, category: 'breakfast', isPopular: false },
      { id: 25, name: 'Eggs Benedict', price: '₹320', desc: 'Poached eggs with hollandaise', icon: '🍳', image: EggsBenedict, category: 'breakfast', isPopular: true },
      { id: 26, name: 'Breakfast Sandwich', price: '₹200', desc: 'Egg, cheese, and sausage on croissant', icon: '🍳', image: Breakfast, category: 'breakfast', isPopular: false }
    ],
    lunch: [
      { id: 27, name: 'Margherita Pizza', price: '₹350', desc: 'Fresh mozzarella, basil, tomato', icon: '🍝', image: LunchDinner, category: 'lunch', isPopular: true },
      { id: 28, name: 'Penne Arrabiata', price: '₹320', desc: 'Spicy tomato pasta', icon: '🍝', image: LunchDinner, category: 'lunch', isPopular: false },
      { id: 29, name: 'Veg Burger', price: '₹280', desc: 'Plant-based patty with fries', icon: '🍝', image: VegBurger, category: 'lunch', isPopular: true },
      { id: 30, name: 'Chicken Burger', price: '₹320', desc: 'Grilled chicken burger', icon: '🍝', image: ChickenBurger, category: 'lunch', isPopular: true },
      { id: 31, name: 'Fettuccine Alfredo', price: '₹380', desc: 'Creamy garlic parmesan pasta', icon: '🍝', image: LunchDinner, category: 'lunch', isPopular: false }
    ],
    desserts: [
      { id: 32, name: 'Chocolate Cake', price: '₹180', desc: 'Rich flourless chocolate cake', icon: '🍰', image: ChocolateCake, category: 'desserts', isPopular: true },
      { id: 33, name: 'Cheesecake', price: '₹200', desc: 'New York style cheesecake', icon: '🍰', image: Cheesecake, category: 'desserts', isPopular: true },
      { id: 34, name: 'Tiramisu', price: '₹220', desc: 'Classic Italian dessert', icon: '🍰', image: Desserts, category: 'desserts', isPopular: false },
      { id: 35, name: 'Ice Cream Sundae', price: '₹190', desc: 'Vanilla ice cream with toppings', icon: '🍰', image: Desserts, category: 'desserts', isPopular: false },
      { id: 36, name: 'Brownie', price: '₹150', desc: 'Warm chocolate brownie', icon: '🍰', image: Desserts, category: 'desserts', isPopular: false }
    ],
    smoothies: [
      { id: 37, name: 'Berry Blast', price: '₹230', desc: 'Mixed berry smoothie', icon: '🥤', image: Smoothies, category: 'smoothies', isPopular: false },
      { id: 38, name: 'Mango Tango', price: '₹220', desc: 'Fresh mango smoothie', icon: '🥤', image: MangoTango, category: 'smoothies', isPopular: true },
      { id: 39, name: 'Protein Power', price: '₹260', desc: 'Banana protein smoothie', icon: '🥤', image: Smoothies, category: 'smoothies', isPopular: false },
      { id: 40, name: 'Green Goddess', price: '₹240', desc: 'Spinach, kale, apple smoothie', icon: '🥤', image: Smoothies, category: 'smoothies', isPopular: false }
    ],
    signature: [
      { id: 41, name: 'Café Aura Special', price: '₹300', desc: 'Our signature caramel latte', icon: '✨', image: SignatureDrinks, category: 'signature', isPopular: true },
      { id: 42, name: 'Hazelnut Dream', price: '₹280', desc: 'Hazelnut flavored coffee', icon: '✨', image: SignatureDrinks, category: 'signature', isPopular: false },
      { id: 43, name: 'Vanilla Bliss', price: '₹270', desc: 'Vanilla bean latte', icon: '✨', image: VanillaBliss, category: 'signature', isPopular: true },
      { id: 44, name: 'Irish Coffee', price: '₹320', desc: 'Coffee with Irish cream', icon: '✨', image: SignatureDrinks, category: 'signature', isPopular: false }
    ],
    sandwiches: [
      { id: 45, name: 'Grilled Cheese', price: '₹180', desc: 'Classic grilled cheese sandwich', icon: '🥪', image: GrilledCheese, category: 'sandwiches', isPopular: true },
      { id: 46, name: 'Club Sandwich', price: '₹250', desc: 'Triple-decker chicken club', icon: '🥪', image: Sandwiches, category: 'sandwiches', isPopular: false },
      { id: 47, name: 'Veg Mayo Sandwich', price: '₹160', desc: 'Vegetable mayonnaise sandwich', icon: '🥪', image: VegMayo, category: 'sandwiches', isPopular: true },
      { id: 48, name: 'Paneer Tikka Sandwich', price: '₹220', desc: 'Grilled paneer sandwich', icon: '🥪', image: Sandwiches, category: 'sandwiches', isPopular: false }
    ],
    salads: [
      { id: 49, name: 'Caesar Salad', price: '₹240', desc: 'Romaine lettuce with croutons', icon: '🥗', image: Salads, category: 'salads', isPopular: false },
      { id: 50, name: 'Greek Salad', price: '₹260', desc: 'Feta, olives, cucumber', icon: '🥗', image: Salads, category: 'salads', isPopular: false },
      { id: 51, name: 'Quinoa Bowl', price: '₹280', desc: 'Healthy quinoa with veggies', icon: '🥗', image: Salads, category: 'salads', isPopular: true },
      { id: 52, name: 'Fruit Salad', price: '₹190', desc: 'Seasonal fresh fruits', icon: '🥗', image: FruitSalad, category: 'salads', isPopular: true }
    ]
  };

  const getAllItems = () => {
    let allItems = [];
    Object.keys(menuItems).forEach(category => {
      allItems = [...allItems, ...menuItems[category]];
    });
    return allItems;
  };

  const getDisplayItems = () => {
    let items = [];
    if (activeCategory === 'all') {
      items = getAllItems();
    } else {
      items = menuItems[activeCategory] || [];
    }
    
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return items;
  };

  const displayItems = getDisplayItems();
  const activeCategoryData = categories.find(c => c.id === activeCategory);
  const currentBgImage = activeCategoryData?.bgImage || homepageImg;

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      paddingTop: '80px',
    },
    heroSection: {
      position: 'relative',
      padding: '80px 20px',
      textAlign: 'center',
      background: `linear-gradient(135deg, rgba(120,53,15,0.9), rgba(180,83,9,0.8)), url(${homepageImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
    },
    heroTitle: {
      fontSize: '56px',
      marginBottom: '20px',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      animation: 'slideInDown 0.8s ease-out',
    },
    heroSubtitle: {
      fontSize: '18px',
      maxWidth: '600px',
      margin: '0 auto',
      opacity: 0.95,
      animation: 'fadeInUp 0.8s ease-out',
    },
    searchSection: {
      padding: '30px 20px',
      background: 'linear-gradient(135deg, #fff, #fefaf5)',
      textAlign: 'center',
    },
    searchBox: {
      maxWidth: '500px',
      margin: '0 auto',
      display: 'flex',
      gap: '10px',
      background: 'white',
      padding: '5px',
      borderRadius: '60px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    searchInput: {
      flex: 1,
      padding: '15px 20px',
      border: 'none',
      borderRadius: '60px',
      fontSize: '16px',
      outline: 'none',
      background: 'transparent',
    },
    searchBtn: {
      padding: '12px 25px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      border: 'none',
      borderRadius: '60px',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'transform 0.3s ease',
    },
    categoriesSection: {
      padding: '20px 20px',
      background: 'white',
      position: 'sticky',
      top: '80px',
      zIndex: 100,
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    },
    categoriesContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      justifyContent: 'center',
    },
    categoryBtn: {
      padding: '12px 24px',
      background: '#fefaf5',
      border: '2px solid #fef3c7',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#78350f',
    },
    activeCategory: {
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      borderColor: '#f59e0b',
      transform: 'scale(1.05)',
      boxShadow: '0 5px 20px rgba(245,158,11,0.3)',
    },
    menuSection: {
      padding: '60px 20px',
      backgroundImage: `url(${currentBgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative',
    },
    menuOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(255, 255, 255, 0.94)',
    },
    menuContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    categoryHeader: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    categoryHeaderTitle: {
      fontSize: '38px',
      color: '#78350f',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    categoryHeaderDesc: {
      color: '#92400e',
      fontSize: '16px',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: '30px',
    },
    menuCard: {
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
    },
    menuImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    menuContent: {
      padding: '20px',
    },
    menuHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    menuIcon: {
      fontSize: '28px',
    },
    menuName: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#78350f',
      flex: 1,
      marginLeft: '10px',
    },
    menuPrice: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#f59e0b',
    },
    menuDesc: {
      color: '#6b7280',
      fontSize: '13px',
      lineHeight: '1.5',
      marginBottom: '15px',
    },
    orderBtn: {
      width: '100%',
      padding: '10px',
      background: '#fef3c7',
      border: 'none',
      borderRadius: '50px',
      color: '#78350f',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize: '14px',
    },
    badge: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: 'bold',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.9)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeIn 0.3s ease-out',
    },
    modalContent: {
      background: 'white',
      borderRadius: '30px',
      maxWidth: '550px',
      width: '90%',
      maxHeight: '85vh',
      overflow: 'auto',
      position: 'relative',
      animation: 'scaleIn 0.3s ease-out',
    },
    modalImage: {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
    },
    modalBody: {
      padding: '30px',
    },
    closeBtn: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'white',
      border: 'none',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      fontSize: '22px',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s ease',
    },
    statsSection: {
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      padding: '50px 20px',
    },
    statsContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      textAlign: 'center',
    },
    statItem: {
      color: 'white',
      transition: 'transform 0.3s ease',
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    statLabel: {
      fontSize: '14px',
      opacity: 0.9,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>✨ Our Delicious Menu ✨</h1>
        <p style={styles.heroSubtitle}>
          Discover our carefully crafted selection of coffees, teas, and delicious food items
        </p>
      </div>

      <div style={styles.searchSection}>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="🔍 Search your favorite item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          {searchTerm && (
            <button 
              style={styles.searchBtn} 
              onClick={() => setSearchTerm('')}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div style={styles.categoriesSection}>
        <div style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              style={{
                ...styles.categoryBtn,
                ...(activeCategory === cat.id ? styles.activeCategory : {})
              }}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchTerm('');
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={styles.menuSection}>
        <div style={styles.menuOverlay}></div>
        <div style={styles.menuContainer}>
          <div style={styles.categoryHeader}>
            <h2 style={styles.categoryHeaderTitle}>
              {activeCategory === 'all' ? '🍽️ All Items 🍽️' : `${activeCategoryData?.icon} ${activeCategoryData?.name} ${activeCategoryData?.icon}`}
            </h2>
            <p style={styles.categoryHeaderDesc}>
              {activeCategory === 'all' 
                ? 'Explore our complete menu selection' 
                : `Discover our delicious ${activeCategoryData?.name?.toLowerCase()} collection`}
            </p>
          </div>

          <div style={styles.menuGrid}>
            {displayItems.map((item, index) => (
              <div 
                key={item.id} 
                style={{
                  ...styles.menuCard,
                  animation: animateCards ? `fadeInUp ${0.2 + index * 0.02}s ease-out` : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                  const img = e.currentTarget.querySelector('.menu-img');
                  if (img) img.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  const img = e.currentTarget.querySelector('.menu-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
                onClick={() => setSelectedItem(item)}
              >
                <div style={{ overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="menu-img"
                    style={styles.menuImage}
                  />
                </div>
                <div style={styles.menuContent}>
                  <div style={styles.menuHeader}>
                    <span style={styles.menuIcon}>{item.icon}</span>
                    <span style={styles.menuName}>{item.name}</span>
                    <span style={styles.menuPrice}>{item.price}</span>
                  </div>
                  <div style={styles.menuDesc}>{item.desc}</div>
                  <button 
                    style={styles.orderBtn}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fef3c7';
                      e.currentTarget.style.color = '#78350f';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`✅ Added ${item.name} to cart!`);
                    }}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
                {item.isPopular && <div style={styles.badge}>🔥 Popular</div>}
              </div>
            ))}
          </div>

          {displayItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '30px' }}>
              <span style={{ fontSize: '64px' }}>😢</span>
              <p style={{ color: '#6b7280', marginTop: '20px', fontSize: '18px' }}>No items found. Try another search!</p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.statsSection}>
        <div style={styles.statsContainer}>
          {[
            { number: '50+', label: 'Menu Items' },
            { number: '12', label: 'Categories' },
            { number: '100%', label: 'Fresh Ingredients' },
            { number: '15min', label: 'Fast Delivery' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              style={styles.statItem}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div style={styles.modal} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.closeBtn} 
              onClick={() => setSelectedItem(null)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              ✕
            </button>
            <img src={selectedItem.image} alt={selectedItem.name} style={styles.modalImage} />
            <div style={styles.modalBody}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '40px' }}>{selectedItem.icon}</span>
                  <h2 style={{ color: '#78350f', margin: 0, fontSize: '24px' }}>{selectedItem.name}</h2>
                </div>
                <span style={{ fontSize: '28px', color: '#f59e0b', fontWeight: 'bold' }}>{selectedItem.price}</span>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '25px', lineHeight: '1.6', fontSize: '15px' }}>{selectedItem.desc}</p>
              <button 
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  alert(`✅ Added ${selectedItem.name} to cart!`);
                  setSelectedItem(null);
                }}
              >
                🛒 Add to Cart - {selectedItem.price}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-60px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @media (max-width: 768px) {
            .menuGrid { grid-template-columns: 1fr !important; }
            .categoriesContainer button { padding: 8px 16px !important; font-size: 12px !important; }
            .statsContainer { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
            .heroTitle { font-size: 36px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;