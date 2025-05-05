import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-white">
      <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
        <img 
          src="/images/triaxon_logo.jpeg" 
          alt="Triaxon Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xl font-medium tracking-wider uppercase">TRIAXON</span>
    </Link>
  );
};

export default Logo;