import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div>
          <div className="inline-block bg-black/60 px-3 py-1 rounded text-sm mb-6">
            HOW WE WORK
          </div>
          <h2 className="text-4xl font-light mb-12">Why Choose TRIAXON?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <div className="flex">
                <div className="section-number">01</div>
                <div>
                  <h3 className="text-2xl font-light mb-4">Intelligent, Purpose-Built Automation
                  </h3>
                  <p className="text-gray-400">
                  We design solutions tailored to your unique business challenges — not off-the-shelf templates. Every workflow, every automation is built to drive measurable results.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex">
                <div className="section-number">02</div>
                <div>
                  <h3 className="text-2xl font-light mb-4">Global Outlook, Local Adaptability
                  </h3>
                  <p className="text-gray-400">
                  Our systems are designed to meet international standards while remaining agile enough to address the nuances of local markets.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex">
                <div className="section-number">03</div>
                <div>
                  <h3 className="text-2xl font-light mb-4">Scalable Infrastructure</h3>
                  <p className="text-gray-400">
                  Our modular approach ensures your automation evolves with your business. As your operations grow, our systems scale — seamlessly.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex">
                <div className="section-number">04</div>
                <div>
                  <h3 className="text-2xl font-light mb-4">Full-Cycle Partnership
                  </h3>
                  <p className="text-gray-400">
                  From discovery and development to integration and long-term optimization, we remain a strategic partner at every step.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex">
                <div className="section-number">05</div>
                <div>
                  <h3 className="text-2xl font-light mb-4">Commitment to Excellence
                  </h3>
                  <p className="text-gray-400">
                  We value precision, performance, and professionalism. Our team is dedicated to delivering solutions that are reliable, secure, and future-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg p-6 aspect-square flex items-center justify-center">
              <img 
                src="/images/3.png" 
                alt="TRIAXON development process" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;