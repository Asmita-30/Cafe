// src/App.jsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
// Remove the Home import for now

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        {/* Your page content will go here - you can add content directly */}
        <div style={{ 
          textAlign: 'center', 
          padding: '50px 20px',
          background: 'linear-gradient(135deg, #fef3c7 0%, #fff 100%)'
        }}>
          <h1 style={{ fontSize: '48px', color: '#78350f' }}>Welcome to Café Ura</h1>
          <p style={{ fontSize: '20px', color: '#92400e', marginTop: '20px' }}>
            Experience the perfect blend of artisanal coffee and warm hospitality
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;