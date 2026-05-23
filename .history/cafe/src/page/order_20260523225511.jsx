// src/page/order.jsx
import React, { useState, useEffect } from 'react';
import homepageImg from '../assets/homepage.png';
import hotcoffie from '../assets/menu/hotcoffie.png';
import Espresso from '../assets/menucard/Espresso cofee.png';
import CaffeLatte from '../assets/menucard/Caffè Latte.png';
import Cappuccino from '../assets/menucard/cappuccino.png';
import ChocolateCake from '../assets/menucard/Chocolate Cake.png';
import VegBurger from '../assets/menucard/Veg Burger.png';
import MasalaChai from '../assets/menucard/Masala Chai.png';

const Order = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash'
  });

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cafeAuraCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cafeAuraCart', JSON.stringify(cart));
  }, [cart]);

  const menuItems = [
    { id: 1, name: 'Espresso', price: 180, icon: '☕', image: Espresso, category: 'Coffee', isPopular: true },
    { id: 2, name: 'Caffè Latte', price: 220, icon: '☕', image: CaffeLatte, category: 'Coffee', isPopular: true },
    { id: 3, name: 'Cappuccino', price: 220, icon: '☕', image: Cappuccino, category: 'Coffee', isPopular: true },
    { id: 4, name: 'Masala Chai', price: 150, icon: '🍵', image: MasalaChai, category: 'Tea', isPopular: true },
    { id: 5, name: 'Chocolate Cake', price: 180, icon: '🍰', image: ChocolateCake, category: 'Desserts', isPopular: true },
    { id: 6, name: 'Veg Burger', price: 280, icon: '🍔', image: VegBurger, category: 'Lunch', isPopular: true },
    { id: 7, name: 'Cold Coffee', price: 240, icon: '🧊', image: hotcoffie, category: 'Cold', isPopular: false },
    { id: 8, name: 'Butter Croissant', price: 120, icon: '🥐', image: homepageImg, category: 'Bakery', isPopular: true },
    { id: 9, name: 'Chocolate Muffin', price: 110, icon: '🧁', image: homepageImg, category: 'Bakery', isPopular: false },
    { id: 10, name: 'Green Tea', price: 140, icon: '🍵', image: homepageImg, category: 'Tea', isPopular: false }
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handlePlaceOrder = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill all required fields!');
      return;
    }
    setOrderPlaced(true);
    setCart([]);
    localStorage.removeItem('cafeAuraCart');
    setTimeout(() => {
      setOrderPlaced(false);
      setShowCheckout(false);
      setCustomerInfo({ name: '', phone: '', address: '', paymentMethod: 'cash' });
    }, 3000);
  };

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
      fontSize: '52px',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    heroSubtitle: {
      fontSize: '18px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: '30px',
      padding: '40px 20px',
      background: '#fefaf5',
    },
    menuSection: {
      background: 'white',
      borderRadius: '20px',
      padding: '25px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    },
    sectionTitle: {
      fontSize: '24px',
      color: '#78350f',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '2px solid #fef3c7',
    },
    menuGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
    },
    menuCard: {
      background: '#fefaf5',
      borderRadius: '15px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    menuImage: {
      width: '100%',
      height: '160px',
      objectFit: 'contain',
      background: '#fff',
    },
    menuCardContent: {
      padding: '15px',
    },
    menuCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    },
    menuCardName: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#78350f',
    },
    menuCardPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#f59e0b',
    },
    menuCardDesc: {
      fontSize: '12px',
      color: '#6b7280',
      marginBottom: '12px',
    },
    addBtn: {
      width: '100%',
      padding: '8px',
      background: '#fef3c7',
      border: 'none',
      borderRadius: '10px',
      color: '#78350f',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    cartSection: {
      background: 'white',
      borderRadius: '20px',
      padding: '25px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: '100px',
      height: 'fit-content',
    },
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 0',
      borderBottom: '1px solid #fef3c7',
    },
    cartItemImage: {
      width: '50px',
      height: '50px',
      objectFit: 'contain',
      background: '#fefaf5',
      borderRadius: '8px',
    },
    cartItemInfo: {
      flex: 1,
    },
    cartItemName: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#78350f',
    },
    cartItemPrice: {
      fontSize: '12px',
      color: '#f59e0b',
    },
    cartQuantity: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    qtyBtn: {
      width: '28px',
      height: '28px',
      background: '#fef3c7',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    removeBtn: {
      background: 'none',
      border: 'none',
      fontSize: '18px',
      cursor: 'pointer',
      color: '#ef4444',
    },
    totalSection: {
      marginTop: '20px',
      paddingTop: '15px',
      borderTop: '2px solid #fef3c7',
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      fontSize: '16px',
    },
    grandTotal: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#f59e0b',
    },
    checkoutBtn: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '20px',
      transition: 'transform 0.3s ease',
    },
    emptyCart: {
      textAlign: 'center',
      padding: '40px',
      color: '#9ca3af',
    },
    checkoutModal: {
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
      padding: '30px',
      maxHeight: '80vh',
      overflow: 'auto',
    },
    modalTitle: {
      fontSize: '24px',
      color: '#78350f',
      marginBottom: '20px',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#374151',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '14px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '14px',
      minHeight: '80px',
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '14px',
    },
    orderBtn: {
      width: '100%',
      padding: '12px',
      background: 'linear-gradient(135deg, #10b981, #059669)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '10px',
    },
    closeModalBtn: {
      width: '100%',
      padding: '10px',
      background: '#f3f4f6',
      border: 'none',
      borderRadius: '10px',
      marginTop: '10px',
      cursor: 'pointer',
    },
    successMsg: {
      textAlign: 'center',
      padding: '40px',
      background: 'white',
      borderRadius: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>🛒 Place Your Order 🛒</h1>
        <p style={styles.heroSubtitle}>
          Choose your favorite items and get them delivered to your doorstep
        </p>
      </div>

      <div style={styles.mainContent}>
        {/* Menu Section */}
        <div style={styles.menuSection}>
          <h2 style={styles.sectionTitle}>📋 Our Menu</h2>
          <div style={styles.menuGrid}>
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                style={styles.menuCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img src={item.image} alt={item.name} style={styles.menuImage} />
                <div style={styles.menuCardContent}>
                  <div style={styles.menuCardHeader}>
                    <span style={styles.menuCardName}>{item.icon} {item.name}</span>
                    <span style={styles.menuCardPrice}>₹{item.price}</span>
                  </div>
                  <div style={styles.menuCardDesc}>{item.category}</div>
                  <button 
                    style={styles.addBtn}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f59e0b';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fef3c7';
                      e.currentTarget.style.color = '#78350f';
                    }}
                    onClick={() => addToCart(item)}
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div style={styles.cartSection}>
          <h2 style={styles.sectionTitle}>🛍️ Your Cart</h2>
          {cart.length === 0 ? (
            <div style={styles.emptyCart}>
              <span style={{ fontSize: '48px' }}>🛒</span>
              <p>Your cart is empty</p>
              <p style={{ fontSize: '12px', marginTop: '10px' }}>Add some delicious items!</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.cartItemImage} />
                  <div style={styles.cartItemInfo}>
                    <div style={styles.cartItemName}>{item.icon} {item.name}</div>
                    <div style={styles.cartItemPrice}>₹{item.price}</div>
                  </div>
                  <div style={styles.cartQuantity}>
                    <button 
                      style={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <span style={{ minWidth: '25px', textAlign: 'center' }}>{item.quantity}</span>
                    <button 
                      style={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  <button 
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                  >🗑️</button>
                </div>
              ))}
              
              <div style={styles.totalSection}>
                <div style={styles.totalRow}>
                  <span>Subtotal:</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
                <div style={styles.totalRow}>
                  <span>Delivery Fee:</span>
                  <span>₹50</span>
                </div>
                <div style={{ ...styles.totalRow, ...styles.grandTotal }}>
                  <span>Total:</span>
                  <span>₹{getTotalPrice() + 50}</span>
                </div>
              </div>
              
              <button 
                style={styles.checkoutBtn}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => setShowCheckout(true)}
              >
                Proceed to Checkout →
              </button>
            </>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && !orderPlaced && (
        <div style={styles.checkoutModal} onClick={() => setShowCheckout(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>📝 Complete Your Order</h2>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name *</label>
              <input
                type="text"
                style={styles.input}
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                placeholder="Enter your name"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                style={styles.input}
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Delivery Address *</label>
              <textarea
                style={styles.textarea}
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                placeholder="Enter your delivery address"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Payment Method</label>
              <select
                style={styles.select}
                value={customerInfo.paymentMethod}
                onChange={(e) => setCustomerInfo({...customerInfo, paymentMethod: e.target.value})}
              >
                <option value="cash">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI Payment</option>
              </select>
            </div>
            
            <div style={{ ...styles.totalRow, marginBottom: '15px' }}>
              <span>Total Amount:</span>
              <span style={{ fontSize: '20px', color: '#f59e0b', fontWeight: 'bold' }}>₹{getTotalPrice() + 50}</span>
            </div>
            
            <button 
              style={styles.orderBtn}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onClick={handlePlaceOrder}
            >
              Place Order ✓
            </button>
            
            <button 
              style={styles.closeModalBtn}
              onClick={() => setShowCheckout(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Order Success Message */}
      {orderPlaced && (
        <div style={styles.checkoutModal}>
          <div style={styles.successMsg}>
            <span style={{ fontSize: '64px' }}>🎉</span>
            <h2 style={{ color: '#10b981', marginTop: '15px' }}>Order Placed Successfully!</h2>
            <p style={{ color: '#6b7280', marginTop: '10px' }}>Your order has been received.</p>
            <p style={{ color: '#6b7280' }}>We'll deliver it within 30-45 minutes.</p>
            <button 
              style={{ ...styles.orderBtn, marginTop: '20px', background: '#f59e0b' }}
              onClick={() => setOrderPlaced(false)}
            >
              Continue Shopping →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;