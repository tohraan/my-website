import React from 'react';
import { ArrowUpRight, Instagram, Twitter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Decoration from './Decoration';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    role: string;
    expertise: string;
    image: string;
    bio?: string;
    projects?: string[];
    social?: {
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, member }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-[#111111] w-full max-w-6xl rounded-sm overflow-hidden relative p-3"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with navigation */}
        <div className="flex justify-between items-center p-6 bg-[#0F0F0F] rounded-sm">
          <h2 className="text-xl italic font-light text-white">{member.name}</h2>
          <div className="flex gap-8">
            <Link to="/about" className="text-sm text-white">ABOUT</Link>
            <Link to="/projects" className="text-sm text-white">WORK</Link>
            <Link to="/contact" className="text-sm text-white">CONTACT</Link>
          </div>
          <button 
            onClick={onClose}
            className="text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-3">
          {/* Left Column - Title and Bio */}
          <div className="md:col-span-5 bg-[#1a1a1a] rounded-sm p-8 text-white relative">
            <div className="absolute top-10 right-10 w-40 h-40 text-[#808080] opacity-20 pointer-events-none">
              <Decoration />
            </div>
            
            <h1 className="text-4xl font-light leading-tight">
              Artist Redefining<br />
              Architecture <span className="italic">with</span><br />
              AI-Driven Design
            </h1>
            
            <div className="mt-8">
              <p className="text-gray-400 text-sm">
                {member.name} is an innovative {member.expertise.toLowerCase()}, renowned for blending 
                cutting-edge technology with creative expression. Based in LA, they craft unique digital 
                art experiences accessible globally.
              </p>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="md:col-span-4">
            <div className="aspect-[3/4] overflow-hidden bg-[#0F0F0F] rounded-sm">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Projects */}
          <div className="md:col-span-3 bg-[#1a1a1a] rounded-sm p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl">Projects</h3>
              <ArrowUpRight size={18} />
            </div>
            
            <div className="space-y-4">
              {member.projects?.map((project, index) => (
                <div 
                  key={index} 
                  className="border-b border-[#2a2a2a] py-3 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">
                      {project}
                    </span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="md:col-span-5 bg-[#1a1a1a] rounded-sm p-6 text-white h-24 flex items-center">
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#">INSTAGRAM</a>
              <a href="#">TWITTER</a>
              <a href="#">LINKEDIN</a>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-[#1a1a1a] rounded-sm p-6 text-white h-24">
            <p className="text-sm text-gray-400 mb-2">Have some questions?</p>
            <div className="cursor-pointer">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-light">Contact <span className="italic">me</span></h3>
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-[#1a1a1a] rounded-sm p-6 h-24 flex items-center justify-center">
            <button 
              onClick={onClose}
              className="px-5 py-2 bg-[#2a2a2a] rounded-full text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;