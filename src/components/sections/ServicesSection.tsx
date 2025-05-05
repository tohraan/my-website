import React from 'react';
import ServiceCard from '../common/ServiceCard';
import { BarChart, Code, LayoutDashboard } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div>
          <h2 className="text-5xl font-light mb-16 text-center">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <ServiceCard 
              icon={<BarChart strokeWidth={1} size={48} />}
              category="CAPITAL PROJECT"
              title="Branding"
              description="Our branding service includes creating unique brand identities."
            />
          </div>
          
          <div>
            <ServiceCard 
              icon={<Code strokeWidth={1} size={48} />}
              category="CAPITAL PROJECT"
              title="Web Design"
              description="Our web design service includes designing user-friendly website."
            />
          </div>
          
          <div>
            <ServiceCard 
              icon={<LayoutDashboard strokeWidth={1} size={48} />}
              category="SUBSCRIPTION PROJECT"
              title="Graphic Design"
              description="Our design service includes innovative concepts and eye-catching visuals."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;