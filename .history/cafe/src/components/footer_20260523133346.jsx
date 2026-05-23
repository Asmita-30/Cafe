// src/components/footer.jsx
import React from 'react';
import logo from '../assets/cafelogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    QuickLinks: ['Home', 'Menu', 'About', 'Contact'],
    Services: ['Dine In', 'Takeaway', 'Delivery', 'Catering'],
    Contact: [
      { icon: '📍', text: '123 Coffee Street, NYC' },
      { icon: '📞', text: '+1 234 567 890' },
      { icon: '✉️', text: 'hello@cafeura.com' },
      { icon: '⏰', text: 'Mon-Sun: 8AM - 10PM' },
    ],
  };

  const socialIcons = [
    { name: 'Instagram', icon: '📸', link: '#' },
    { name: 'Facebook', icon: '👍', link: '#' },
    { name: 'Twitter', icon: '🐦', link: '#' },
    { name: 'Pinterest', icon: '📌', link: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20 overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-8 md:h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#fef3c7"
            opacity="0.1"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Cafe Logo"
                className="h-12 w-auto md:h-14 object-contain filter brightness-0 invert"
              />
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Café Ura
                </h2>
                <p className="text-xs text-amber-400/80 tracking-wider">SIP • RELAX • REPEAT</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the perfect blend of artisanal coffee and warm hospitality. 
              Every cup tells a story of passion and perfection.
            </p>
            {/* Newsletter */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-amber-400 mb-2">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                />
                <button className="px-3 py-2 bg-amber-500 hover:bg-amber-600 rounded-lg transition-all duration-300 hover:scale-105">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-amber-400 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {footerLinks.QuickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-amber-400 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {footerLinks.Services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold text-amber-400 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.Contact.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            {/* Social Icons */}
            <div className="flex gap-3 pt-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-amber-500 hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} Café Ura. All rights reserved. Crafted with ☕ & ❤️</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;