import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div>
              <h2 className="text-4xl font-light mb-8">We transform your vision into reality</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  TRIAXON, which was founded in 2023 on the idea that every brand has a unique story
                  to tell, TRIAXON specializes in crafting impactful designs and strategies that resonate.
                </p>
                <p>
                  Our mission is simple, we empower businesses to share their unique stories through
                  impactful designs and tailored marketing strategies. We approach every project with
                  a deep understanding of your goals, ensuring personalized, effective solutions.
                </p>
                <p>
                  Whether you're a startup or an established brand, TRIAXON delivers results-driven
                  designs that resonate with your audience.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img 
                  src="/images/1.png" 
                  alt="TRIAXON project" 
                  className="rounded object-cover h-full"
                />
              </div>
              <div>
                <img 
                  src="/images/2.png" 
                  alt="TRIAXON design" 
                  className="rounded object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mt-12">
            <p className="text-gray-300">
              We're a creative team of innovative designers, developers, and strategists.
              Since our inception in November 2023, we've been on a mission to empower
              businesses with branding solutions that builds trust, drive customers, and
              deliver measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;