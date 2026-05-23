// src/App.jsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
// import Home from './page/home';
// Import other pages as needed

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Your page content goes here */}
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;