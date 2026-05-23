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
      { id: 1, name: 'Espresso', price: '₹180', desc: 'Strong and bold shot of pure coffee', icon: '☕', image: hotcoffie, category: 'coffee' },
      { id: 2, name: 'Caffè Latte', price: '₹220', desc: 'Espresso with steamed milk and light foam', icon: '☕', image: hotcoffie, category: 'coffee' },
      { id: 3, name: 'Cappuccino', price: '₹220', desc: 'Espresso with equal parts steamed milk and foam', icon: '☕', image: hotcoffie, category: 'coffee' },
    //   { id: 4, name: 'Flat White', price: '₹240', desc: 'Smooth espresso with velvety microfoam', icon: '☕', image: hotcoffie, category: 'coffee' },
    //   { id: 5, name: 'Mocha', price: '₹260', desc: 'Espresso with chocolate and steamed milk', icon: '☕', image: hotcoffie, category: 'coffee' },
    //   { id: 6, name: 'American', price: '₹190', desc: 'Espresso diluted with hot water', icon: '☕', image: hotcoffie, category: 'coffee' }
    ],
    cold: [
      { id: 7, name: 'Iced Latte', price: '₹240', desc: 'Chilled espresso with cold milk over ice', icon: '🧊', image: coldcoffie, category: 'cold' },
      { id: 8, name: 'Iced Mocha', price: '₹270', desc: 'Chocolate espresso with cold milk', icon: '🧊', image: coldcoffie, category: 'cold' },
    //   { id: 9, name: 'Cold Brew', price: '₹230', desc: 'Slow-steeped coffee served cold', icon: '🧊', image: coldcoffie, category: 'cold' },
    //   { id: 10, name: 'Frappuccino', price: '₹290', desc: 'Blended coffee with cream', icon: '🧊', image: coldcoffie, category: 'cold' },
    //   { id: 11, name: 'Iced Caramel Macchiato', price: '₹280', desc: 'Vanilla, caramel, and espresso over ice', icon: '🧊', image: coldcoffie, category: 'cold' }
    ],
    tea: [
      { id: 12, name: 'Masala Chai', price: '₹150', desc: 'Traditional spiced Indian tea', icon: '🍵', image: Tea, category: 'tea' },
      { id: 13, name: 'Green Tea', price: '₹140', desc: 'Healthy antioxidant-rich tea', icon: '🍵', image: Tea, category: 'tea' },
      { id: 14, name: 'Ginger Tea', price: '₹140', desc: 'Fresh ginger infused tea', icon: '🍵', image: Tea, category: 'tea' },
    //   { id: 15, name: 'Earl Grey', price: '₹160', desc: 'Classic black tea with bergamot', icon: '🍵', image: Tea, category: 'tea' },
      { id: 16, name: 'Lemon Tea', price: '₹130', desc: 'Refreshing citrus tea', icon: '🍵', image: Tea, category: 'tea' }
    ],
    bakery: [
      { id: 17, name: 'Butter Croissant', price: '₹120', desc: 'Flaky, buttery French pastry', icon: '🥐', image: Bakery, category: 'bakery' },
      { id: 18, name: 'Chocolate Muffin', price: '₹110', desc: 'Rich chocolate chip muffin', icon: '🥐', image: Bakery, category: 'bakery' },
    //   { id: 19, name: 'Blueberry Muffin', price: '₹110', desc: 'Fresh blueberry muffin', icon: '🥐', image: Bakery, category: 'bakery' },
      { id: 20, name: 'Chocolate Chip Cookie', price: '₹80', desc: 'Soft-baked cookie with chocolate chunks', icon: '🥐', image: Bakery, category: 'bakery' },
    //   { id: 21, name: 'Cinnamon Roll', price: '₹140', desc: 'Warm roll with cinnamon glaze', icon: '🥐', image: Bakery, category: 'bakery' }
    ],
    breakfast: [
      { id: 22, name: 'Classic Pancakes', price: '₹220', desc: 'Fluffy pancakes with maple syrup', icon: '🍳', image: Breakfast, category: 'breakfast' },
      { id: 23, name: 'Masala Omelette', price: '₹180', desc: 'Spiced egg omelette with toast', icon: '🍳', image: Breakfast, category: 'breakfast' },
    //   { id: 24, name: 'French Toast', price: '₹210', desc: 'Brioche toast with berries', icon: '🍳', image: Breakfast, category: 'breakfast' },
      { id: 25, name: 'Eggs Benedict', price: '₹320', desc: 'Poached eggs with hollandaise', icon: '🍳', image: Breakfast, category: 'breakfast' },
    //   { id: 26, name: 'Breakfast Sandwich', price: '₹200', desc: 'Egg, cheese, and sausage on croissant', icon: '🍳', image: Breakfast, category: 'breakfast' }
    ],
    lunch: [
      { id: 27, name: 'Margherita Pizza', price: '₹350', desc: 'Fresh mozzarella, basil, tomato', icon: '🍝', image: LunchDinner, category: 'lunch' },
      { id: 28, name: 'Penne Arrabiata', price: '₹320', desc: 'Spicy tomato pasta', icon: '🍝', image: LunchDinner, category: 'lunch' },
      { id: 29, name: 'Veg Burger', price: '₹280', desc: 'Plant-based patty with fries', icon: '🍝', image: LunchDinner, category: 'lunch' },
      { id: 30, name: 'Chicken Burger', price: '₹320', desc: 'Grilled chicken burger', icon: '🍝', image: LunchDinner, category: 'lunch' },
      { id: 31, name: 'Fettuccine Alfredo', price: '₹380', desc: 'Creamy garlic parmesan pasta', icon: '🍝', image: LunchDinner, category: 'lunch' }
    ],
    desserts: [
      { id: 32, name: 'Chocolate Cake', price: '₹180', desc: 'Rich flourless chocolate cake', icon: '🍰', image: Desserts, category: 'desserts' },
      { id: 33, name: 'Cheesecake', price: '₹200', desc: 'New York style cheesecake', icon: '🍰', image: Desserts, category: 'desserts' },
      { id: 34, name: 'Tiramisu', price: '₹220', desc: 'Classic Italian dessert', icon: '🍰', image: Desserts, category: 'desserts' },
      { id: 35, name: 'Ice Cream Sundae', price: '₹190', desc: 'Vanilla ice cream with toppings', icon: '🍰', image: Desserts, category: 'desserts' },
      { id: 36, name: 'Brownie', price: '₹150', desc: 'Warm chocolate brownie', icon: '🍰', image: Desserts, category: 'desserts' }
    ],
    smoothies: [
      { id: 37, name: 'Berry Blast', price: '₹230', desc: 'Mixed berry smoothie', icon: '🥤', image: Smoothies, category: 'smoothies' },
      { id: 38, name: 'Mango Tango', price: '₹220', desc: 'Fresh mango smoothie', icon: '🥤', image: Smoothies, category: 'smoothies' },
      { id: 39, name: 'Protein Power', price: '₹260', desc: 'Banana protein smoothie', icon: '🥤', image: Smoothies, category: 'smoothies' },
      { id: 40, name: 'Green Goddess', price: '₹240', desc: 'Spinach, kale, apple smoothie', icon: '🥤', image: Smoothies, category: 'smoothies' }
    ],
    signature: [
      { id: 41, name: 'Café Aura Special', price: '₹300', desc: 'Our signature caramel latte', icon: '✨', image: SignatureDrinks, category: 'signature' },
      { id: 42, name: 'Hazelnut Dream', price: '₹280', desc: 'Hazelnut flavored coffee', icon: '✨', image: SignatureDrinks, category: 'signature' },
      { id: 43, name: 'Vanilla Bliss', price: '₹270', desc: 'Vanilla bean latte', icon: '✨', image: SignatureDrinks, category: 'signature' },
      { id: 44, name: 'Irish Coffee', price: '₹320', desc: 'Coffee with Irish cream', icon: '✨', image: SignatureDrinks, category: 'signature' }
    ],
    sandwiches: [
      { id: 45, name: 'Grilled Cheese', price: '₹180', desc: 'Classic grilled cheese sandwich', icon: '🥪', image: Sandwiches, category: 'sandwiches' },
      { id: 46, name: 'Club Sandwich', price: '₹250', desc: 'Triple-decker chicken club', icon: '🥪', image: Sandwiches, category: 'sandwiches' },
      { id: 47, name: 'Veg Mayo Sandwich', price: '₹160', desc: 'Vegetable mayonnaise sandwich', icon: '🥪', image: Sandwiches, category: 'sandwiches' },
      { id: 48, name: 'Paneer Tikka Sandwich', price: '₹220', desc: 'Grilled paneer sandwich', icon: '🥪', image: Sandwiches, category: 'sandwiches' }
    ],
    salads: [
      { id: 49, name: 'Caesar Salad', price: '₹240', desc: 'Romaine lettuce with croutons', icon: '🥗', image: Salads, category: 'salads' },
      { id: 50, name: 'Greek Salad', price: '₹260', desc: 'Feta, olives, cucumber', icon: '🥗', image: Salads, category: 'salads' },
      { id: 51, name: 'Quinoa Bowl', price: '₹280', desc: 'Healthy quinoa with veggies', icon: '🥗', image: Salads, category: 'salads' },
      { id: 52, name: 'Fruit Salad', price: '₹190', desc: 'Seasonal fresh fruits', icon: '🥗', image: Salads, category: 'salads' }
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
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${homepageImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
    },
    heroTitle: {
      fontSize: '52px',
      marginBottom: '20px',
    },
    heroSubtitle: {
      fontSize: '18px',
      maxWidth: '600px',
      margin: '0 auto',
      opacity: 0.95,
    },
    searchSection: {
      padding: '30px 20px',
      background: 'white',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    },
    searchBox: {
      maxWidth: '500px',
      margin: '0 auto',
      display: 'flex',
      gap: '10px',
      background: '#fefaf5',
      padding: '5px',
      borderRadius: '60px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
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
    },
    categoriesSection: {
      padding: '20px 20px',
      background: 'white',
      position: 'sticky',
      top: '80px',
      zIndex: 100,
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      borderBottom: '1px solid #fef3c7',
    },
    categoriesContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'center',
    },
    categoryBtn: {
      padding: '10px 20px',
      background: '#fefaf5',
      border: '1px solid #fef3c7',
      borderRadius: '40px',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: '#78350f',
    },
    activeCategory: {
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      borderColor: '#f59e0b',
      transform: 'scale(1.02)',
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
      background: 'rgba(255, 255, 255, 0.92)',
    },
    menuContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    categoryHeader: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    categoryHeaderTitle: {
      fontSize: '32px',
      color: '#78350f',
      marginBottom: '10px',
    },
    categoryHeaderDesc: {
      color: '#92400e',
      fontSize: '16px',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '25px',
    },
    menuCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    menuImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    menuContent: {
      padding: '18px',
    },
    menuHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    },
    menuIcon: {
      fontSize: '24px',
    },
    menuName: {
      fontSize: '17px',
      fontWeight: 'bold',
      color: '#78350f',
      flex: 1,
      marginLeft: '8px',
    },
    menuPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#f59e0b',
    },
    menuDesc: {
      color: '#6b7280',
      fontSize: '12px',
      lineHeight: '1.4',
      marginBottom: '12px',
    },
    orderBtn: {
      width: '100%',
      padding: '8px',
      background: '#fef3c7',
      border: 'none',
      borderRadius: '12px',
      color: '#78350f',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      fontSize: '13px',
    },
    badge: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: '#f59e0b',
      color: 'white',
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '10px',
      fontWeight: 'bold',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.85)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      background: 'white',
      borderRadius: '25px',
      maxWidth: '500px',
      width: '90%',
      maxHeight: '85vh',
      overflow: 'auto',
      position: 'relative',
    },
    modalImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    modalBody: {
      padding: '25px',
    },
    closeBtn: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: 'white',
      border: 'none',
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      fontSize: '20px',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    },
    statsSection: {
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      padding: '40px 20px',
    },
    statsContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      textAlign: 'center',
    },
    statItem: {
      color: 'white',
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 'bold',
    },
    statLabel: {
      fontSize: '13px',
      opacity: 0.9,
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section with Background Image */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Our Delicious Menu</h1>
        <p style={styles.heroSubtitle}>
          Discover our carefully crafted selection of coffees, teas, and delicious food items
        </p>
      </div>

      {/* Search Section */}
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
            <button style={styles.searchBtn} onClick={() => setSearchTerm('')}>
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Sticky Categories Section */}
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
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Section with Dynamic Background */}
      <div style={styles.menuSection}>
        <div style={styles.menuOverlay}></div>
        <div style={styles.menuContainer}>
          <div style={styles.categoryHeader}>
            <h2 style={styles.categoryHeaderTitle}>
              {activeCategory === 'all' ? 'All Items' : activeCategoryData?.name}
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
                  animation: animateCards ? `fadeInUp ${0.3 + index * 0.03}s ease-out` : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                  const img = e.currentTarget.querySelector('.menu-img');
                  if (img) img.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
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
                      e.currentTarget.style.background = '#f59e0b';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fef3c7';
                      e.currentTarget.style.color = '#78350f';
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`✅ Added ${item.name} to cart!`);
                    }}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
                <div style={styles.badge}>Popular</div>
              </div>
            ))}
          </div>

          {displayItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '20px' }}>
              <span style={{ fontSize: '64px' }}>😢</span>
              <p style={{ color: '#6b7280', marginTop: '20px' }}>No items found. Try another search!</p>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Menu Items</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>12</div>
            <div style={styles.statLabel}>Categories</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>Fresh Ingredients</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>15min</div>
            <div style={styles.statLabel}>Fast Delivery</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div style={styles.modal} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.closeBtn} 
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>
            <img src={selectedItem.image} alt={selectedItem.name} style={styles.modalImage} />
            <div style={styles.modalBody}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '35px' }}>{selectedItem.icon}</span>
                  <h2 style={{ color: '#78350f', margin: 0, fontSize: '22px' }}>{selectedItem.name}</h2>
                </div>
                <span style={{ fontSize: '24px', color: '#f59e0b', fontWeight: 'bold' }}>{selectedItem.price}</span>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '25px', lineHeight: '1.6' }}>{selectedItem.desc}</p>
              <button 
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
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
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .menuGrid { grid-template-columns: 1fr !important; }
            .categoriesContainer button { padding: 8px 14px !important; font-size: 11px !important; }
            .statsContainer { grid-template-columns: repeat(2, 1fr) !important; gap: 15px !important; }
            .heroTitle { font-size: 36px !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;