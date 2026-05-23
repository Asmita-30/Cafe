// src/page/menu.jsx
import React, { useState, useEffect } from 'react';
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
    { id: 'all', name: 'All', icon: '🍽️', image: hotcoffie },
    { id: 'coffee', name: 'Hot Coffees', icon: '☕', image: hotcoffie },
    { id: 'cold', name: 'Cold Coffees', icon: '🧊', image: coldcoffie },
    { id: 'tea', name: 'Teas & Chai', icon: '🍵', image: Tea },
    { id: 'bakery', name: 'Fresh Bakery', icon: '🥐', image: Bakery },
    { id: 'breakfast', name: 'Breakfast', icon: '🍳', image: Breakfast },
    { id: 'lunch', name: 'Lunch & Dinner', icon: '🍝', image: LunchDinner },
    { id: 'desserts', name: 'Desserts', icon: '🍰', image: Desserts },
    { id: 'smoothies', name: 'Smoothies', icon: '🥤', image: Smoothies },
    { id: 'signature', name: 'Signature Drinks', icon: '✨', image: SignatureDrinks },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪', image: Sandwiches },
    { id: 'salads', name: 'Salads', icon: '🥗', image: Salads }
  ];

  const menuItems = {
    coffee: [
      { id: 1, name: 'Espresso', price: '₹180', desc: 'Strong and bold shot of pure coffee', icon: '☕', image: hotcoffie, category: 'coffee' },
      { id: 2, name: 'Caffè Latte', price: '₹220', desc: 'Espresso with steamed milk and light foam', icon: '☕', image: hotcoffie, category: 'coffee' },
      { id: 3, name: 'Cappuccino', price: '₹220', desc: 'Espresso with equal parts steamed milk and foam', icon: '☕', image: hotcoffie, category: 'coffee' },
      { id: 4, name: 'Flat White', price: '₹240', desc: 'Smooth espresso with velvety microfoam', icon: '☕', image: hotcoffie, category: 'coffee' },
      { id: 5, name: 'Mocha', price: '₹260', desc: 'Espresso with chocolate and steamed milk', icon: '☕', image: hotcoffie, category: 'coffee' },
      { id: 6, name: 'American', price: '₹190', desc: 'Espresso diluted with hot water', icon: '☕', image: hotcoffie, category: 'coffee' }
    ],
    cold: [
      { id: 7, name: 'Iced Latte', price: '₹240', desc: 'Chilled espresso with cold milk over ice', icon: '🧊', image: coldcoffie, category: 'cold' },
      { id: 8, name: 'Iced Mocha', price: '₹270', desc: 'Chocolate espresso with cold milk', icon: '🧊', image: coldcoffie, category: 'cold' },
      { id: 9, name: 'Cold Brew', price: '₹230', desc: 'Slow-steeped coffee served cold', icon: '🧊', image: coldcoffie, category: 'cold' },
      { id: 10, name: 'Frappuccino', price: '₹290', desc: 'Blended coffee with cream', icon: '🧊', image: coldcoffie, category: 'cold' },
      { id: 11, name: 'Iced Caramel Macchiato', price: '₹280', desc: 'Vanilla, caramel, and espresso over ice', icon: '🧊', image: coldcoffie, category: 'cold' }
    ],
    tea: [
      { id: 12, name: 'Masala Chai', price: '₹150', desc: 'Traditional spiced Indian tea', icon: '🍵', image: Tea, category: 'tea' },
      { id: 13, name: 'Green Tea', price: '₹140', desc: 'Healthy antioxidant-rich tea', icon: '🍵', image: Tea, category: 'tea' },
      { id: 14, name: 'Ginger Tea', price: '₹140', desc: 'Fresh ginger infused tea', icon: '🍵', image: Tea, category: 'tea' },
      { id: 15, name: 'Earl Grey', price: '₹160', desc: 'Classic black tea with bergamot', icon: '🍵', image: Tea, category: 'tea' },
      { id: 16, name: 'Lemon Tea', price: '₹130', desc: 'Refreshing citrus tea', icon: '🍵', image: Tea, category: 'tea' }
    ],
    bakery: [
      { id: 17, name: 'Butter Croissant', price: '₹120', desc: 'Flaky, buttery French pastry', icon: '🥐', image: Bakery, category: 'bakery' },
      { id: 18, name: 'Chocolate Muffin', price: '₹110', desc: 'Rich chocolate chip muffin', icon: '🥐', image: Bakery, category: 'bakery' },
      { id: 19, name: 'Blueberry Muffin', price: '₹110', desc: 'Fresh blueberry muffin', icon: '🥐', image: Bakery, category: 'bakery' },
      { id: 20, name: 'Chocolate Chip Cookie', price: '₹80', desc: 'Soft-baked cookie with chocolate chunks', icon: '🥐', image: Bakery, category: 'bakery' },
      { id: 21, name: 'Cinnamon Roll', price: '₹140', desc: 'Warm roll with cinnamon glaze', icon: '🥐', image: Bakery, category: 'bakery' }
    ],
    breakfast: [
      { id: 22, name: 'Classic Pancakes', price: '₹220', desc: 'Fluffy pancakes with maple syrup', icon: '🍳', image: Breakfast, category: 'breakfast' },
      { id: 23, name: 'Masala Omelette', price: '₹180', desc: 'Spiced egg omelette with toast', icon: '🍳', image: Breakfast, category: 'breakfast' },
      { id: 24, name: 'French Toast', price: '₹210', desc: 'Brioche toast with berries', icon: '🍳', image: Breakfast, category: 'breakfast' },
      { id: 25, name: 'Eggs Benedict', price: '₹320', desc: 'Poached eggs with hollandaise', icon: '🍳', image: Breakfast, category: 'breakfast' },
      { id: 26, name: 'Breakfast Sandwich', price: '₹200', desc: 'Egg, cheese, and sausage on croissant', icon: '🍳', image: Breakfast, category: 'breakfast' }
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

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      paddingTop: '80px',
    },
    heroSection: {
      background: 'linear-gradient(135deg, #fef3c7, #fff)',
      padding: '60px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    heroTitle: {
      fontSize: '52px',
      color: '#78350f',
      marginBottom: '20px',
      animation: 'slideInDown 0.8s ease-out',
    },
    heroSubtitle: {
      fontSize: '18px',
      color: '#92400e',
      maxWidth: '600px',
      margin: '0 auto',
      animation: 'fadeInUp 0.8s ease-out',
    },
    searchSection: {
      padding: '30px 20px',
      background: 'white',
      textAlign: 'center',
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
      padding: '30px 20px',
      background: '#fefaf5',
      position: 'sticky',
      top: '80px',
      zIndex: 10,
      boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
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
      background: 'white',
      border: '2px solid #fef3c7',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
      boxShadow: '0 5px 15px rgba(245,158,11,0.3)',
    },
    menuSection: {
      padding: '60px 20px',
      background: 'white',
    },
    menuContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    categoryHeader: {
      textAlign: 'center',
      marginBottom: '50px',
      animation: 'fadeInUp 0.6s ease-out',
    },
    categoryHeaderImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      border: '3px solid #f59e0b',
    },
    categoryHeaderTitle: {
      fontSize: '36px',
      color: '#78350f',
      marginBottom: '10px',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '30px',
    },
    menuCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
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
    menuName: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#78350f',
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
      borderRadius: '12px',
      color: '#78350f',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    badge: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: '#f59e0b',
      color: 'white',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '12px',
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
      animation: 'fadeIn 0.3s ease-out',
    },
    modalContent: {
      background: 'white',
      borderRadius: '25px',
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
      boxShadow: '0 2px 10px rgba(0,0,0,0.2),
      transition: 'transform 0.3s ease',
    },
    statsSection: {
      background: 'linear-gradient(135deg, #78350f, #b45309)',
      padding: '50px 20px',
      marginTop: '60px',
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
      {/* Hero Section */}
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

      {/* Categories Section */}
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
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#f59e0b';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#fef3c7';
                }
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Section */}
      <div style={styles.menuSection}>
        <div style={styles.menuContainer}>
          {activeCategoryData && (
            <div style={styles.categoryHeader}>
              <img 
                src={activeCategoryData.image} 
                alt={activeCategoryData.name}
                style={styles.categoryHeaderImage}
              />
              <h2 style={styles.categoryHeaderTitle}>
                {activeCategory === 'all' ? 'All Items' : activeCategoryData.name}
              </h2>
            </div>
          )}

          <div style={styles.menuGrid}>
            {displayItems.map((item, index) => (
              <div 
                key={item.id} 
                style={{
                  ...styles.menuCard,
                  animation: animateCards ? `fadeInUp ${0.3 + index * 0.05}s ease-out` : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  const img = e.currentTarget.querySelector('.menu-img');
                  if (img) img.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
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
                    <span style={{ fontSize: '28px' }}>{item.icon}</span>
                    <span style={styles.menuName}>{item.name}</span>
                    <span style={styles.menuPrice}>{item.price}</span>
                  </div>
                  <div style={styles.menuDesc}>{item.desc}</div>
                  <button 
                    style={styles.orderBtn}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f59e0b';
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
                      alert(`Added ${item.name} to cart!`);
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
            <div style={{ textAlign: 'center', padding: '60px' }}>
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
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              ✕
            </button>
            <img src={selectedItem.image} alt={selectedItem.name} style={styles.modalImage} />
            <div style={styles.modalBody}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '40px' }}>{selectedItem.icon}</span>
                  <h2 style={{ color: '#78350f', margin: 0 }}>{selectedItem.name}</h2>
                </div>
                <span style={{ fontSize: '28px', color: '#f59e0b', fontWeight: 'bold' }}>{selectedItem.price}</span>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '25px', lineHeight: '1.6' }}>{selectedItem.desc}</p>
              <button 
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  alert(`Added ${selectedItem.name} to cart!`);
                  setSelectedItem(null);
                }}
              >
                🛒 Add to Cart - {selectedItem.price}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
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
          
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @media (max-width: 768px) {
            .menuGrid {
              grid-template-columns: 1fr !important;
            }
            .categoriesContainer button {
              font-size: 12px !important;
              padding: 8px 16px !important;
            }
            .statsContainer {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;