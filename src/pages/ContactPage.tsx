import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Navbar from '../components/Layout/Navbar';
import ContactFooter from '../components/common/ContactFooter';
import Iridescence from '../components/common/Iridescence';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      {/* Iridescence background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Iridescence
          color={[0.8, 0.8, 0.8]}
          mouseReact={false}
          amplitude={0.08}
          speed={0.4}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar scrolled={false} />
        <main className="flex-grow">
          <PageHeader title="Contact Us" breadcrumb="Contact" />
          
          <section className="py-20">
            <div className="container-custom">
              <div className="flex justify-center">
                <div className="bg-[#111]/80 backdrop-blur-md p-8 rounded max-w-xl w-full">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          className="contact-input"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          className="contact-input"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="contact-input"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">Your Message</label>
                      <textarea
                        id="message"
                        rows={6}
                        className="bg-[#1a1a1a] border-none rounded px-6 py-3 text-white w-full focus:outline-none focus:ring-1 focus:ring-white/50"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <ContactFooter />
      </div>
    </div>
  );
};

export default ContactPage;