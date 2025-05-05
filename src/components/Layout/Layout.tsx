import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Aurora from '../common/Aurora';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  // Define color stops based on theme
  const colorStops = theme === 'dark' 
    ? ["#1a1a1a", "#777777", "#e0e0e0"] 
    : ["#e0e0e0", "#add8e6", "#ffffff"];
  
  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} relative`}>
      {/* Aurora background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={colorStops}
          blend={theme === 'dark' ? 0.5 : 0.3}
          amplitude={0.8}
          speed={0.3}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar scrolled={false} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;