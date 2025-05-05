import React from 'react';
import ContactCard from '../common/ContactCard';
import { MessageCircle, Phone, Puzzle as PuzzlePiece } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-12">
          <div className="md:w-1/2">
            <div>
              <div className="inline-block bg-black/60 px-3 py-1 rounded text-sm mb-3">
                CUSTOMER SUPPORT
              </div>
              <h2 className="text-4xl font-light mb-6">
                Round-the-clock<br />
                customer support<br />
                availability
              </h2>
              <p className="text-gray-400">
                Our round-the-clock customer support availability ensures
                that assistance is always just a call or click away.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <ContactCard 
                icon={<MessageCircle strokeWidth={1} />}
                title="Live Chat"
                description="24/7 Through Our AI Agent"
                actionText="Chat Now"
                link="#"
              />
            </div>
            
            <div>
              <ContactCard 
                icon={<Phone strokeWidth={1} />}
                title="Message Us"
                description="9:00AM To 5:00PM Through Call Center"
                actionText="Chat Now"
                link="#"
              />
            </div>
            
            <div>
              <ContactCard 
                icon={<PuzzlePiece strokeWidth={1} />}
                title="Sales Team"
                description="(+91) 600-204-2132 (+91) 601-107-7124"
                actionText="Call Now"
                link="tel:+916002042132"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;