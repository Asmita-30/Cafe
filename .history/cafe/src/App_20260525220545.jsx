// src/App.jsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './page/home';
import About from './page/about';
import Menu from './page/menu';
import Contact from './page/contact';
import Order from './page/order';

// Import Service Pages
import Birthday from './services/birthday';
import Anniversary from './services/anniversary';
import FamilyGathering from './services/family-gathering';
import PrivateParty from './services/private-party';
import GroupBooking from './services/group-booking';
import LiveMusic from './services/live-music';
import DJArrangements from './services/dj';
import FamilyDining from './services/family-dining';
import CoffeeSpecials from './services/coffee-specials';

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
      // Main Pages
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
      
      // Service Pages - Family Celebrations
      case '/services/birthday':
        return <Birthday />;
      case '/services/anniversary':
        return <Anniversary />;
      case '/services/family-gathering':
        return <FamilyGathering />;
      
      // Service Pages - Party Events
      case '/services/private-party':
        return <PrivateParty />;
      case '/services/group-booking':
        return <GroupBooking />;
      
      // Service Pages - DJ & Club
      case '/services/live-music':
        return <LiveMusic />;
      case '/services/dj':
        return <DJArrangements />;
      
      // Service Pages - Dining
      case '/services/family-dining':
        return <FamilyDining />;
      case '/services/coffee-specials':
        return <CoffeeSpecials />;
      
      // Default
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header />
      <main style={{ 
        minHeight: '100vh',
        paddingTop: '80px',
      }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;