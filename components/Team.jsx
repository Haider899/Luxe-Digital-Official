import { useState } from 'react';
import { Video, Pen, Code, Palette, Megaphone, Mic } from 'lucide-react';
import TeamMemberCard from './TeamMemberCard';
import TeamMemberModal from './TeamMemberModal';

const teamMembers = [
  {
    name: 'Muqaddas Khan',
    role: 'Team Leader & Meta Ads Specialist',
    icon: Megaphone,
    serviceIndex: 2,
    portfolio: null,
    social: {},
    color: 'from-amber-600 to-orange-600',
  },
  {
    name: 'Usama Haider',
    role: 'Full Stack Developer',
    icon: Code,
    serviceIndex: 1,
    portfolio: 'https://haider899.github.io/Portfolio-/',
    social: { 
      github: 'https://github.com/haider899',
      linkedin: 'https://www.linkedin.com/in/usama-haider-1968a91a1/'
    },
    color: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Muhammad Yasir',
    role: 'Video Editor',
    icon: Video,
    serviceIndex: 0,
    portfolio: null,
    social: {},
    color: 'from-red-600 to-pink-600',
  },
  {
    name: 'Liaquat Ali',
    role: 'Copywriter',
    icon: Pen,
    serviceIndex: 4,
    portfolio: null,
    social: {},
    color: 'from-purple-600 to-violet-600',
  },
  {
    name: 'Farhan Khan',
    role: 'Graphic Designer',
    icon: Palette,
    serviceIndex: 3,
    portfolio: null,
    social: {},
    color: 'from-green-600 to-emerald-600',
  },
  {
    name: 'Haleema Sadia',
    role: 'Voice Artist & Social Media',
    icon: Mic,
    serviceIndex: 5,
    portfolio: null,
    social: {},
    color: 'from-indigo-600 to-blue-600',
  },
];


export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="team" className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 text-slate-900">
            Meet The <span className="text-emerald-500">Creators</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Talent, passion, and expertise united to deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              {...member}
              onClick={() => setSelectedMember(idx)}
              index={idx}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember !== null && (
        <TeamMemberModal
          member={teamMembers[selectedMember]}
          onClose={() => setSelectedMember(null)}
        />
      )}

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </section>
  );
}

