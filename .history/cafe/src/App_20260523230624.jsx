// src/App.jsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './page/home';
import About from './page/about';
import Menu from './page/menu';
import Contact from './page/contact';
import Order from './page/order';

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    
    const handleLinkClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = link.pathname;
        window.history.pushState({}, '', path);
        setCurrentPath(path);
        window.scrollTo(0, 0);
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    switch(currentPath) {
      case '/':
      case '/home':
        return <Home />;
      case '/about':
        return <About />;
      case '/menu':
        return <Menu />;
      case '/contact':
        return <Contact />;
      case '/order':
        return <Order />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header />
      <main style={{ 
        minHeight: '100vh',
      }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;