import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import TeamModal from '../components/common/TeamModal';

const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Tohraan Khan',
      role: 'Founder',
      expertise: 'AI-automation expert',
      image: '/images/tohraan.jpg',
      projects: [
        'Musea',
        'Elara',
        'Verve',
        'Zephyr'
      ],
      bio: 'Tohraan Khan is an innovative AI-automation expert, renowned for blending cutting-edge technology with creative expression. Based in LA, he crafts unique digital art experiences accessible globally.',
      social: {
        instagram: 'https://www.instagram.com/tohraan',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Ishaan Nasir',
      role: 'Co-founder',
      expertise: 'Web Design expert',
      image: '/images/ishaan.jpg',
      projects: [
        'Musea',
        'Elara',
        'Verve',
        'Zephyr'
      ],
      bio: 'Ishaan Nasir is an innovative Web Design expert, renowned for blending cutting-edge technology with creative expression. Based in LA, he crafts unique digital art experiences accessible globally.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Gnadhar Acharya',
      role: 'Co-founder',
      expertise: 'SMMA Expert',
      image: '/images/gandhar.jpg',
      projects: [
        'Musea',
        'Elara',
        'Verve',
        'Zephyr'
      ],
      bio: 'Gnadhar Acharya is an innovative SMMA Expert, renowned for blending cutting-edge technology with creative expression. Based in LA, he crafts unique digital art experiences accessible globally.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <div>
      <PageHeader title="Our Team" breadcrumb="Team" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="relative overflow-hidden bg-[#111] rounded-sm cursor-pointer"
                onClick={() => setSelectedMember(index)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-2xl font-light mb-1">{member.name}</h3>
                    <p className="text-gray-400 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-300">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember !== null && (
        <TeamModal
          isOpen={true}
          onClose={() => setSelectedMember(null)}
          member={teamMembers[selectedMember]}
        />
      )}
    </div>
  );
};

export default TeamPage;