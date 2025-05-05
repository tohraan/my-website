import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { ArrowRight, Facebook, Instagram } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer className="backdrop-blur-sm py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div>
              <Logo />
              <div className="mt-6 flex space-x-4">
                <a href="#" className="bg-[#1a1a1a]/70 p-2 rounded-full">
                  <Instagram size={20} className="text-black" />
                </a>
                <a href="#" className="bg-[#1a1a1a]/70 p-2 rounded-full">
                  <Facebook size={20} className="text-black" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link to="/" className="text-black font-medium">
                  Home
                </Link>
                <span className="text-black">•</span>
                <Link to="/about" className="text-black font-medium">
                  About
                </Link>
                <span className="text-black">•</span>
                <Link to="/services" className="text-black font-medium">
                  Services
                </Link>
                <span className="text-black">•</span>
                <Link to="/team" className="text-black font-medium">
                  Team
                </Link>
                <span className="text-black">•</span>
                <Link to="/contact" className="text-black font-medium">
                  Contact
                </Link>
              </div>
              <p className="mt-8 text-black text-sm">
                Our collaborative approach ensures that we understand your unique vision
                and deliver tailored solutions that drive results.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-[#1a1a1a]/70 backdrop-blur-sm p-8 rounded">
              <h3 className="text-xl mb-4 text-white">GET IN TOUCH</h3>
              <p className="text-white mb-6">
                If you would like to work with us or just want to
                get in touch, we'd love to hear from you!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-[#222]/80 border-none rounded-l-full px-6 py-3 text-white w-full focus:outline-none"
                />
                <div>
                  <button className="bg-[#333]/80 px-5 py-3 rounded-r-full flex items-center text-white">
                    Contact <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mt-16 pt-6 border-t border-gray-800/50 text-black text-sm">
            <p>© 2025 TRIAXON. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter; 