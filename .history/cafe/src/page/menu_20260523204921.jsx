// src/page/menu.jsx
import React, { useState } from 'react';
import aboutImg from '../assets/about.png';
import homepageImg from '../assets/homepage.png';
import homepage2Img from '../assets/homepage2.png';
import coffieserveImg from '../assets/coffieserve.png';
import cafebillImg from '../assets/cafebill.png';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'coffee', name: 'Hot Coffees', icon: '☕' },
    { id: 'cold', name: 'Cold Coffees', icon: '🧊' },
    { id: 'tea', name: 'Teas & Chai', icon: '🍵' },
    { id: 'bakery', name: 'Fresh Bakery', icon: '🥐' },
    { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
    { id: 'lunch', name: 'Lunch & Dinner', icon: '🍝' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'smoothies', name: 'Smoothies', icon: '🥤' },
    { id: 'signature', name: 'Signature Drinks', icon: '✨' },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
    { id: 'salads', name: 'Salads', icon: '🥗' }
  ];

  const menuItems = {
    coffee: [
      { id: 1, name: 'Espresso', price: '₹180', desc: 'Strong and bold shot of pure coffee', icon: '☕', image: coffieserveImg },
      { id: 2, name: 'Caffè Latte', price: '₹220', desc: 'Espresso with steamed milk and light foam', icon: '☕', image: homepageImg },
      { id: 3, name: 'Cappuccino', price: '₹220', desc: 'Espresso with equal parts steamed milk and foam', icon: '☕', image: coffieserveImg },
      { id: 4, name: 'Flat White', price: '₹240', desc: 'Smooth espresso with velvety microfoam', icon: '☕', image: homepageImg },
      { id: 5, name: 'Mocha', price: '₹260', desc: 'Espresso with chocolate and steamed milk', icon: '☕', image: coffieserveImg },
      { id: 6, name: 'American', price: '₹190', desc: 'Espresso diluted with hot water', icon: '☕', image: homepage2Img }
    ],
    cold: [
      { id: 7, name: 'Iced Latte', price: '₹240', desc: 'Chilled espresso with cold milk over ice', icon: '🧊', image: coffieserveImg },
      { id: 8, name: 'Iced Mocha', price: '₹270', desc: 'Chocolate espresso with cold milk', icon: '🧊', image: homepageImg },
      { id: 9, name: 'Cold Brew', price: '₹230', desc: 'Slow-steeped coffee served cold', icon: '🧊', image: homepage2Img },
      { id: 10, name: 'Frappuccino', price: '₹290', desc: 'Blended coffee with cream', icon: '🧊', image: coffieserveImg },
      { id: 11, name: 'Iced Caramel Macchiato', price: '₹280', desc: 'Vanilla, caramel, and espresso over ice', icon: '🧊', image: homepageImg }
    ],
    tea: [
      { id: 12, name: 'Masala Chai', price: '₹150', desc: 'Traditional spiced Indian tea', icon: '🍵', image: coffieserveImg },
      { id: 13, name: 'Green Tea', price: '₹140', desc: 'Healthy antioxidant-rich tea', icon: '🍵', image: homepage2Img },
      { id: 14, name: 'Ginger Tea', price: '₹140', desc: 'Fresh ginger infused tea', icon: '🍵', image: coffieserveImg },
      { id: 15, name: 'Earl Grey', price: '₹160', desc: 'Classic black tea with bergamot', icon: '🍵', image: homepageImg },
      { id: 16, name: 'Lemon Tea', price: '₹130', desc: 'Refreshing citrus tea', icon: '🍵', image: coffieserveImg }
    ],
    bakery: [
      { id: 17, name: 'Butter Croissant', price: '₹120', desc: 'Flaky, buttery French pastry', icon: '🥐', image: aboutImg },
      { id: 18, name: 'Chocolate Muffin', price: '₹110', desc: 'Rich chocolate chip muffin', icon: '🥐', image: homepageImg },
      { id: 19, name: 'Blueberry Muffin', price: '₹110', desc: 'Fresh blueberry muffin', icon: '🥐', image: coffieserveImg },
      { id: 20, name: 'Chocolate Chip Cookie', price: '₹80', desc: 'Soft-baked cookie with chocolate chunks', icon: '🥐', image: homepage2Img },
      { id: 21, name: 'Cinnamon Roll', price: '₹140', desc: 'Warm roll with cinnamon glaze', icon: '🥐', image: aboutImg }
    ],
    breakfast: [
      { id: 22, name: 'Classic Pancakes', price: '₹220', desc: 'Fluffy pancakes with maple syrup', icon: '🍳', image: homepageImg },
      { id: 23, name: 'Masala Omelette', price: '₹180', desc: 'Spiced egg omelette with toast', icon: '🍳', image: coffieserveImg },
      { id: 24, name: 'French Toast', price: '₹210', desc: 'Brioche toast with berries', icon: '🍳', image: homepage2Img },
      { id: 25, name: 'Eggs Benedict', price: '₹320', desc: 'Poached eggs with hollandaise', icon: '🍳', image: aboutImg },
      { id: 26, name: 'Breakfast Sandwich', price: '₹200', desc: 'Egg, cheese, and sausage on croissant', icon: '🍳', image: coffieserveImg }
    ],
    lunch: [
      { id: 27, name: 'Margherita Pizza', price: '₹350', desc: 'Fresh mozzarella, basil, tomato', icon: '🍝', image: homepageImg },
      { id: 28, name: 'Penne Arrabiata', price: '₹320', desc: 'Spicy tomato pasta', icon: '🍝', image: coffieserveImg },
      { id: 29, name: 'Veg Burger', price: '₹280', desc: 'Plant-based patty with fries', icon: '🍝', image: aboutImg },
      { id: 30, name: 'Chicken Burger', price: '₹320', desc: 'Grilled chicken burger', icon: '🍝', image: homepage2Img },
      { id: 31, name: 'Fettuccine Alfredo', price: '₹380', desc: 'Creamy garlic parmesan pasta', icon: '🍝', image: coffieserveImg }
    ],
    desserts: [
      { id: 32, name: 'Chocolate Cake', price: '₹180', desc: 'Rich flourless chocolate cake', icon: '🍰', image: cafebillImg },
      { id: 33, name: 'Cheesecake', price: '₹200', desc: 'New York style cheesecake', icon: '🍰', image: homepageImg },
      { id: 34, name: 'Tiramisu', price: '₹220', desc: 'Classic Italian dessert', icon: '🍰', image: coffieserveImg },
      { id: 35, name: 'Ice Cream Sundae', price: '₹190', desc: 'Vanilla ice cream with toppings', icon: '🍰', image: aboutImg },
      { id: 36, name: 'Brownie', price: '₹150', desc: 'Warm chocolate brownie', icon: '🍰', image: homepage2Img }
    ],
    smoothies: [
      { id: 37, name: 'Berry Blast', price: '₹230', desc: 'Mixed berry smoothie', icon: '🥤', image: coffieserveImg },
      { id: 38, name: 'Mango Tango', price: '₹220', desc: 'Fresh mango smoothie', icon: '🥤', image: homepageImg },
      { id: 39, name: 'Protein Power', price: '₹260', desc: 'Banana protein smoothie', icon: '🥤', image: aboutImg },
      { id: 40, name: 'Green Goddess', price: '₹240', desc: 'Spinach, kale, apple smoothie', icon: '🥤', image: homepage2Img }
    ],
    signature: [
      { id: 41, name: 'Café Aura Special', price: '₹300', desc: 'Our signature caramel latte', icon: '✨', image: coffieserveImg },
      { id: 42, name: 'Hazelnut Dream', price: '₹280', desc: 'Hazelnut flavored coffee', icon: '✨', image: homepageImg },
      { id: 43, name: 'Vanilla Bliss', price: '₹270', desc: 'Vanilla bean latte', icon: '✨', image: aboutImg },
      { id: 44, name: 'Irish Coffee', price: '₹320', desc: 'Coffee with Irish cream', icon: '✨', image: homepage2Img }
    ],
    sandwiches: [
      { id: 45, name: 'Grilled Cheese', price: '₹180', desc: 'Classic grilled cheese sandwich', icon: '🥪', image: coffieserveImg },
      { id: 46, name: 'Club Sandwich', price: '₹250', desc: 'Triple-decker chicken club', icon: '🥪', image: homepageImg },
      { id: 47, name: 'Veg Mayo Sandwich', price: '₹160', desc: 'Vegetable mayonnaise sandwich', icon: '🥪', image: aboutImg },
      { id: 48, name: 'Paneer Tikka Sandwich', price: '₹220', desc: 'Grilled paneer sandwich', icon: '🥪', image: homepage2Img }
    ],
    salads: [
      { id: 49, name: 'Caesar Salad', price: '₹240', desc: 'Romaine lettuce with croutons', icon: '🥗', image: coffieserveImg },
      { id: 50, name: 'Greek Salad', price: '₹260', desc: 'Feta, olives, cucumber', icon: '🥗', image: homepageImg },
      { id: 51, name: 'Quinoa Bowl', price: '₹280', desc: 'Healthy quinoa with veggies', icon: '🥗', image: aboutImg },
      { id: 52, name: 'Fruit Salad', price: '₹190', desc: 'Seasonal fresh fruits', icon: '🥗', image: homepage2Img }
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
    if (activeCategory === 'all') {
      return getAllItems();
    }
    return menuItems[activeCategory] || [];
  };

  const displayItems = getDisplayItems();

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
    },
    heroTitle: {
      fontSize: '48px',
      color: '#78350f',
      marginBottom: '20px',
    },
    heroSubtitle: {
      fontSize: '18px',
      color: '#92400e',
      maxWidth: '600px',
      margin: '0 auto',
    },
    categoriesSection: {
      padding: '40px 20px',
      background: 'white',
      position: 'sticky',
      top: '80px',
      zIndex: 10,
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
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
      padding: '10px 20px',
      background: '#fef3c7',
      border: 'none',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    activeCategory: {
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
    },
    menuSection: {
      padding: '40px 20px 80px',
      background: '#fefaf5',
    },
    menuContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    categoryTitle: {
      fontSize: '28px',
      color: '#78350f',
      marginBottom: '30px',
      textAlign: 'center',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '25px',
    },
    menuCard: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    menuImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
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
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#f59e0b',
    },
    menuDesc: {
      color: '#6b7280',
      fontSize: '13px',
      lineHeight: '1.5',
      marginBottom: '10px',
    },
    menuIcon: {
      fontSize: '24px',
    },
    orderBtn: {
      marginTop: '12px',
      padding: '8px 20px',
      background: '#fef3c7',
      border: 'none',
      borderRadius: '25px',
      color: '#78350f',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: '100%',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.8)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      background: 'white',
      borderRadius: '20px',
      maxWidth: '500px',
      width: '90%',
      maxHeight: '80vh',
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
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Our Menu</h1>
        <p style={styles.heroSubtitle}>
          Discover our carefully crafted selection of coffees, teas, and delicious food items
        </p>
      </div>

      {/* Categories */}
      <div style={styles.categoriesSection}>
        <div style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              style={{
                ...styles.categoryBtn,
                ...(activeCategory === cat.id ? styles.activeCategory : {})
              }}
              onClick={() => setActiveCategory(cat.id)}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = '#fde68a';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#fef3c7';
                }
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div style={styles.menuSection}>
        <div style={styles.menuContainer}>
          <div style={styles.menuGrid}>
            {displayItems.map((item) => (
              <div 
                key={item.id} 
                style={styles.menuCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                }}
                onClick={() => setSelectedItem(item)}
              >
                <img src={item.image} alt={item.name} style={styles.menuImage} />
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
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for item details */}
      {selectedItem && (
        <div style={styles.modal} onClick={() => setSelectedItem(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setSelectedItem(null)}>✕</button>
            <img src={selectedItem.image} alt={selectedItem.name} style={styles.modalImage} />
            <div style={styles.modalBody}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <h2 style={{ color: '#78350f' }}>{selectedItem.name}</h2>
                <span style={{ fontSize: '24px', color: '#f59e0b', fontWeight: 'bold' }}>{selectedItem.price}</span>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '20px' }}>{selectedItem.desc}</p>
              <button 
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            .menuGrid {
              grid-template-columns: 1fr !important;
            }
            .categoriesContainer button {
              font-size: 12px !important;
              padding: 8px 15px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;