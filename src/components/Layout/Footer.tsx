import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { ArrowRight, Facebook, Instagram } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="backdrop-blur-sm py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div>
              <Logo />
              <div className="mt-6 flex space-x-4">
                <a href="#" className="bg-accent-bg p-2 rounded-full">
                  <Instagram size={20} className="text-primary-text" />
                </a>
                <a href="#" className="bg-accent-bg p-2 rounded-full">
                  <Facebook size={20} className="text-primary-text" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link to="/" className="text-primary-text font-medium">
                  Home
                </Link>
                <span className="text-primary-text">•</span>
                <Link to="/about" className="text-primary-text font-medium">
                  About
                </Link>
                <span className="text-primary-text">•</span>
                <Link to="/services" className="text-primary-text font-medium">
                  Services
                </Link>
                <span className="text-primary-text">•</span>
                <Link to="/team" className="text-primary-text font-medium">
                  Team
                </Link>
                <span className="text-primary-text">•</span>
                <Link to="/contact" className="text-primary-text font-medium">
                  Contact
                </Link>
              </div>
              <p className="mt-8 text-secondary-text text-sm">
                Our collaborative approach ensures that we understand your unique vision
                and deliver tailored solutions that drive results.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-accent-bg backdrop-blur-sm p-8 rounded">
              <h3 className="text-xl mb-4 text-primary-text">GET IN TOUCH</h3>
              <p className="text-primary-text mb-6">
                If you would like to work with us or just want to
                get in touch, we'd love to hear from you!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="contact-input rounded-r-none"
                />
                <div>
                  <button className="rounded-l-none contact-input flex items-center text-primary-text">
                    Contact <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mt-16 pt-6 border-t border-border-color/50 text-secondary-text text-sm">
            <p>© 2025 TRIAXON. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;