import React from 'react';
import CountUp from '../common/CountUp';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F0F0F]">
      <div className="container-custom">
        <div>
          <div className="inline-block bg-black/60 px-3 py-1 rounded text-sm mb-6">
            FACTS
          </div>
          <h2 className="text-4xl font-light mb-12">Key highlights of TRIAXON</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-12">
          <div>
            <div className="border-r border-gray-800 pr-6">
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="ml-2 text-sm text-gray-400">Clients</span>
              </div>
              <div className="stat-number">
                <CountUp
                  from={0}
                  to={93}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-5xl font-bold"
                />
                <sup className="text-xl">+</sup>
              </div>
              <p className="stat-description">
                We are trusted by 67+ clients across various industries.
              </p>
            </div>
          </div>
          
          <div>
            <div className="md:border-r md:border-gray-800 pr-6">
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C14.5013 22 16.5 17.5228 16.5 12C16.5 6.47715 14.5013 2 12 2C9.49872 2 7.5 6.47715 7.5 12C7.5 17.5228 9.49872 22 12 22Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H22" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="ml-2 text-sm text-gray-400">Cities</span>
              </div>
              <div className="stat-number">
                <CountUp
                  from={0}
                  to={10}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-5xl font-bold"
                />
                <sup className="text-xl">+</sup>
              </div>
              <p className="stat-description">
                We have served our creative solutions across 10+ vibrant cities.
              </p>
            </div>
          </div>
          
          <div>
            <div>
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="ml-2 text-sm text-gray-400">Projects</span>
              </div>
              <div className="stat-number">
                <CountUp
                  from={0}
                  to={235}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-5xl font-bold"
                />
                <sup className="text-xl">+</sup>
              </div>
              <p className="stat-description">
                We are proud to delivered 235+ impactful and custom projects.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid place-items-center">
          <div className="max-w-4xl w-full">
            <img 
              src="/images/4.png" 
              alt="TRIAXON analytics dashboard" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;