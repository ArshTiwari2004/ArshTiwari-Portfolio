import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-12 md:w-14 md:h-14 hover:scale-105 transition-transform duration-300"
          />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            // { name: 'Achievements', path: '/achievements' },
            { name: 'Education', path: '/education' },
            { name: 'Experience', path: '/experience' },
           // { name: 'Hacks', path: '/hack' },
          //  { name: 'Blogs', path: '/blog' },
            { name: 'Contact', path: '/contact' },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-300 text-sm tracking-wide"
            >
              {name}
            </Link>
          ))}

          {/* Special Resume Button */}
          <Link
            to="/resume"
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg 
                       hover:bg-blue-700 transform hover:scale-105 
                       transition-all duration-300 shadow-md 
                       hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.3)]
                       text-sm tracking-wide"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile Menu Button - You'll need to implement the mobile menu functionality */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
