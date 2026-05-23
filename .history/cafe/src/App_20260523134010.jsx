// src/App.jsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ 
        paddingTop: '80px', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fef3c7 0%, #fff 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 20px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '48px', 
            color: '#78350f',
            marginBottom: '20px',
            animation: 'fadeInUp 0.6s ease-out'
          }}>
            Welcome to Café Ura
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#92400e',
            marginBottom: '40px',
            animation: 'fadeInUp 0.6s ease-out 0.1s both'
          }}>
            Experience the perfect blend of artisanal coffee and warm hospitality
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ color: '#78350f', marginBottom: '10px' }}>☕ Premium Coffee</h3>
              <p style={{ color: '#666' }}>Handcrafted with love using the finest beans</p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ color: '#78350f', marginBottom: '10px' }}>🍰 Delicious Pastries</h3>
              <p style={{ color: '#666' }}>Freshly baked goods to complement your coffee</p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ color: '#78350f', marginBottom: '10px' }}>🏠 Cozy Ambiance</h3>
              <p style={{ color: '#666' }}>Perfect spot for work or relaxation</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
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
        `}
      </style>
    </div>
  );
}

export default App;