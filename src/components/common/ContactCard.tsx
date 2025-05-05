import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, 
  title, 
  description, 
  actionText, 
  link 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to center when not hovering
    if (cardRef.current) {
      cardRef.current.style.setProperty('--mouse-x', '50%');
      cardRef.current.style.setProperty('--mouse-y', '50%');
    }
  };
  
  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !isHovered) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      // Check if mouse is not too far from the card
      const distanceX = Math.max(0, 
        Math.max(rect.left - e.clientX, e.clientX - rect.right));
      const distanceY = Math.max(0, 
        Math.max(rect.top - e.clientY, e.clientY - rect.bottom));
      
      // Only update if mouse is within reasonable distance
      if (distanceX < 100 && distanceY < 100) {
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        cardRef.current.style.setProperty('--mouse-x', `${x}%`);
        cardRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };
    
    if (isHovered) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
    };
  }, [isHovered]);
  
  return (
    <div className="h-full">
      <div 
        ref={cardRef}
        className="card-spotlight flex flex-col h-full" 
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mb-6 text-3xl">{icon}</div>
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-secondary-text mb-6">{description}</p>
        <div className="mt-auto">
          <a 
            href={link} 
            className="details-link"
          >
            {actionText} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;