// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center"> 
          <img src="/logo.png" alt="Logo" className="w-16 h-16 mr-2" /> 
          <div className="text-2xl font-bold">
            Arsh Tiwari
          </div>
        </div>
        {/* Navigation */}
        <nav className="space-x-10 font-bold">
          {['Home', 'About', 'Skills', 'Education', 'Work', 'Experience', 'Contact'].map(section => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500 hover:underline capitalize"
            >
              {section}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
