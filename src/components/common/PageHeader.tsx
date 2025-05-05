import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  breadcrumb?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <section className="pt-40 pb-20">
      <div className="container-custom">
        <h1 className="text-6xl font-light mb-8">{title}</h1>
        {breadcrumb && (
          <div className="flex items-center text-gray-400">
            <Link to="/" className="text-gray-400">Home</Link>
            <span className="mx-2">/</span>
            <span>{breadcrumb}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;