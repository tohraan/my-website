import React from 'react';

interface DecorationProps {
  className?: string;
}

const Decoration: React.FC<DecorationProps> = ({ className = "" }) => {
  return (
    <svg 
      className={`${className}`} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M50,90 C30,90 15,75 15,50 C15,25 30,10 50,10 C70,10 85,25 85,50 C85,75 70,90 50,90 Z M50,85 C65,85 80,70 80,50 C80,30 65,15 50,15 C35,15 20,30 20,50 C20,70 35,85 50,85 Z M50,80 C60,80 70,65 70,50 C70,35 60,20 50,20 C40,20 30,35 30,50 C30,65 40,80 50,80 Z M50,75 C55,75 60,60 60,50 C60,40 55,25 50,25 C45,25 40,40 40,50 C40,60 45,75 50,75 Z M50,70 C54,70 55,55 55,50 C55,45 54,30 50,30 C46,30 45,45 45,50 C45,55 46,70 50,70 Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        opacity="0.6"
      />
    </svg>
  );
};

export default Decoration; 