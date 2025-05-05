import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ServicesSection from '../components/sections/ServicesSection';
import SupportSection from '../components/sections/SupportSection';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Our Services" breadcrumb="Services" />
      <ServicesSection />
      <SupportSection />
    </div>
  );
};

export default ServicesPage;