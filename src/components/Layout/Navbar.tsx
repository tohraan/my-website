import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-6"
    >
      <div className="flex items-center justify-between bg-gray-600/40 backdrop-blur-md rounded-full px-10 py-4 w-auto">
        <div className="scale-110">
          <Logo />
        </div>

        {/* Center Navigation */}
        <nav className="mx-16">
          <div>
            <ul className="flex space-x-10">
              <li>
                <Link to="/" className={`text-lg text-white tracking-wide ${isActive('/') ? 'font-medium' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-lg text-white tracking-wide ${isActive('/about') ? 'font-medium' : ''}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className={`text-lg text-white tracking-wide ${isActive('/services') ? 'font-medium' : ''}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={`text-lg text-white tracking-wide ${isActive('/portfolio') ? 'font-medium' : ''}`}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/team" className={`text-lg text-white tracking-wide ${isActive('/team') ? 'font-medium' : ''}`}>
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link
            to="/contact"
            className="flex items-center text-white text-lg font-medium"
          >
            Contact <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;