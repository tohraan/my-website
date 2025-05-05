import React from 'react';
import PageHeader from '../components/common/PageHeader';
import AboutSection from '../components/sections/AboutSection';
import StatsSection from '../components/sections/StatsSection';
import ProcessSection from '../components/sections/ProcessSection';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="About Us" breadcrumb="About Us" />
      <AboutSection />
      <StatsSection />
      <ProcessSection />
    </div>
  );
};

export default AboutPage;