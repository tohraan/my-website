import React from 'react';

interface ShineEffectProps {
  children: React.ReactNode;
  className?: string;
}

const ShineEffect: React.FC<ShineEffectProps> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ShineEffect; 