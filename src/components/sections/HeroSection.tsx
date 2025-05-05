import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-40 pb-20 flex flex-col items-center justify-center min-h-screen">
      {/* Main heading */}
      <div className="container-custom text-center">
        <div>
          <h1 className="text-6xl md:text-3xl lg:text-8xl font-light tracking-tight mb-8">
            Automate<br />
            Accelerate <br />
            Dominate <br />
          </h1>
        </div>
        
        <div>
          <p className="text-base text-gray-400 max-w-3xl mx-auto mb-16">
          Automate Accelerate Dominate
          </p>
        </div>
        
        {/* AI Agent button */}
        <div>
          <div className="flex items-center justify-center mt-24">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden">
                  <img src="/images/ishaan.jpg" alt="Ishaan Nasir" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-white rounded-full overflow-hidden">
                  <img src="/images/tohraan.jpg" alt="Tohraan Khan" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="ml-8 text-left">
                <h3 className="text-base font-semibold uppercase mb-1">ASK ANY</h3>
                <p className="text-sm text-gray-400">QUESTIONS TO</p>
                <p className="text-sm text-gray-400">OUR AI AGENT</p>
              </div>
              
              <div className="ml-2">
                <button className="p-2 rounded-full bg-gray-800">
                  <PlusCircle size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;