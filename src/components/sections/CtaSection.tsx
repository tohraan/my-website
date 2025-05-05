import React from 'react';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const CtaSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Ticker at the top */}
      <div className="marquee-bottom w-full overflow-hidden py-2">
        <div className="marquee-content-outline">
          Innovation / Branding / Designs / SEO / Marketing / Web Design / Development / SEO / Innovation / Branding / 
        </div>
        <div className="marquee-content-outline" aria-hidden="true">
          Innovation / Branding / Designs / SEO / Marketing / Web Design / Development / SEO / Innovation / Branding / 
        </div>
      </div>
      
      <div className="container-custom text-center py-24">
        <div>
          <h2 className="text-7xl md:text-8xl font-light mb-6 tracking-tight">
            LET'S WORK<br />
            TOGETHER
          </h2>
        </div>
        
        <div>
          <div>
            <div className="inline-block bg-white rounded-full p-4 mt-8">
              <ArrowRight size={28} className="text-black" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 container-custom gap-8 pb-20">
        <div>
          <div className="bg-[#111]/80 backdrop-blur-sm p-8 md:p-12 rounded">
            <Logo />
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="bg-[#1a1a1a]/80 p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#1a1a1a]/80 p-2 rounded-full">
                <Facebook size={20} />
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link to="/" className="">
                Home
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/about" className="">
                About
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/services" className="">
                Services
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/team" className="">
                Team
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/contact" className="">
                Contact
              </Link>
            </div>
            
            <p className="mt-8 text-gray-400">
              Our collaborative approach ensures that we understand your unique vision
              and deliver tailored solutions that drive results.
            </p>
          </div>
        </div>
        
        <div>
          <div className="bg-[#111]/80 backdrop-blur-sm p-8 md:p-12 rounded">
            <h3 className="text-xl mb-6">GET IN TOUCH</h3>
            <p className="text-gray-400 mb-8">
              If you would like to work with us or just want to
              get in touch, we'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Email"
                className="contact-input flex-grow"
              />
              <div>
                <button className="btn btn-primary whitespace-nowrap">
                  Contact <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;