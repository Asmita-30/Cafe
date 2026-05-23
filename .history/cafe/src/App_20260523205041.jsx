// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './page/home';
import About from './page/about';
import Menu from './page/menu';
import Contact from './page/contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check initial URL
    const path = window.location.pathname;
    if (path === '/about') setCurrentPage('about');
    else if (path === '/menu') setCurrentPage('menu');
    else if (path === '/contact') setCurrentPage('contact');
    else setCurrentPage('home');

    // Handle navigation
    const handleNavigation = () => {
      const newPath = window.location.pathname;
      if (newPath === '/about') setCurrentPage('about');
      else if (newPath === '/menu') setCurrentPage('menu');
      else if (newPath === '/contact') setCurrentPage('contact');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'menu':
        return <Menu />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;