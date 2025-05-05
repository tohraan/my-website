import React from 'react';
import PageHeader from '../components/common/PageHeader';

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Our Portfolio" breadcrumb="Portfolio" />
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl mb-8">Portfolio content will be displayed here</h2>
          <p className="text-gray-400">
            A collection of our best work will be showcased in this section
          </p>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;