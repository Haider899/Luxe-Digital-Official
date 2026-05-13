import { useState } from 'react';
import { Video, Pen, Code, Palette, Megaphone, Mic, Shield } from 'lucide-react';
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
    description: 'Leading our digital ecosystem with strategic vision and performance-driven marketing campaigns that scale businesses globally.',
    categorizedSkills: [
      {
        category: 'Leadership & Strategy',
        skills: [
          'Project Management',
          'Business Strategy',
          'Team Coordination',
          'Client Relations',
          'Operations'
        ]
      },
      {
        category: 'Meta Ads & Marketing',
        skills: [
          'Meta Ads (FB/IG)',
          'Campaign Optimization',
          'Audience Targeting',
          'A/B Testing',
          'Performance Analytics'
        ]
      }
    ],
    color: 'from-amber-600 to-orange-600',
  },
  {
    name: 'Usama Haider',
    role: 'Cybersecurity & Full Stack Developer',
    icon: Shield,
    serviceIndex: 1,
    portfolio: 'https://haider899.github.io/Portfolio-/',
    social: { 
      github: 'https://github.com/haider899',
      linkedin: 'https://www.linkedin.com/in/usama-haider-1968a91a1/'
    },
    description: 'A modern security profile with hands-on expertise in cybersecurity, tooling, automation, and programming.',
    categorizedSkills: [
      {
        category: 'Cyber Security',
        skills: [
          'Web Application Penetration Testing',
          'Bug Bounty Hunting',
          'Exploit Research',
          'Social Engineering',
          'OSINT Investigations'
        ]
      },
      {
        category: 'Development & Automation',
        skills: [
          'Next.js 15',
          'TypeScript',
          'React',
          'Python',
          'PowerShell',
          'Bash Scripting',
          'Web Scraping',
          'Liquid (Shopify)',
          'Tailwind CSS'
        ]
      }
    ],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Muhammad Yasir',
    role: 'Lead Video Editor & Motion Artist',
    icon: Video,
    serviceIndex: 0,
    portfolio: null,
    social: {
      facebook: 'https://www.facebook.com/share/1D7bFaZKz5/'
    },
    description: 'Specializing in high-impact visual storytelling through cinematic editing and advanced motion graphics that captivate audiences.',
    categorizedSkills: [
      {
        category: 'Video Production',
        skills: [
          'YouTube Video Editing',
          'Short Form Content',
          'Documentary Style',
          'Cinematic Storytelling'
        ]
      },
      {
        category: 'Post-Production',
        skills: [
          'Motion Graphics',
          'Adobe Premiere Pro',
          'Adobe After Effects',
          'Color Grading',
          'Sound Design'
        ]
      }
    ],
    color: 'from-red-600 to-pink-600',
  },
  {
    name: 'Liaquat Ali',
    role: 'Copywriter & Content Strategist',
    icon: Pen,
    serviceIndex: 4,
    portfolio: null,
    social: {
      facebook: 'https://www.facebook.com/share/1BTe4YQEqE/'
    },
    description: 'Crafting compelling narratives and high-conversion copy that turns readers into loyal customers through strategic storytelling.',
    categorizedSkills: [
      {
        category: 'Strategic Copywriting',
        skills: [
          'Conversion Copywriting',
          'Brand Voice Development',
          'Content Strategy',
          'Direct Response',
          'Storytelling'
        ]
      },
      {
        category: 'Digital Content',
        skills: [
          'SEO Copywriting',
          'Email Marketing',
          'Ad Copy (Meta/Google)',
          'Video Scriptwriting',
          'Ghostwriting'
        ]
      }
    ],
    color: 'from-purple-600 to-violet-600',
  },
  {
    name: 'Farhan Khan',
    role: 'Lead Graphic Designer',
    icon: Palette,
    serviceIndex: 3,
    portfolio: null,
    social: {},
    description: 'Transforming complex ideas into stunning visual stories through high-end graphic design and strategic brand identity development.',
    categorizedSkills: [
      {
        category: 'Brand Identity',
        skills: [
          'Logo Design',
          'Visual Branding',
          'Typography',
          'Color Strategy',
          'Brand Style Guides'
        ]
      },
      {
        category: 'Digital Design',
        skills: [
          'Social Media Graphics',
          'UI Design',
          'Print & Layout',
          'Image Retouching',
          'Vector Illustration'
        ]
      }
    ],
    color: 'from-green-600 to-emerald-600',
  },
  {
    name: 'Haleema Sadia',
    role: 'Voice Artist & Social Media Manager',
    icon: Mic,
    serviceIndex: 5,
    portfolio: null,
    social: {},
    description: 'Bringing brands to life through versatile vocal performances and data-driven social media strategies that foster community engagement.',
    categorizedSkills: [
      {
        category: 'Voice Artistry',
        skills: [
          'Commercial Voice Over',
          'Narration & Storytelling',
          'Character Voicing',
          'Dubbing & ADR',
          'Audio Editing'
        ]
      },
      {
        category: 'Social Media',
        skills: [
          'Social Media Strategy',
          'Content Scheduling',
          'Community Engagement',
          'Analytics & Insights',
          'Trend Analysis'
        ]
      }
    ],
    color: 'from-indigo-600 to-blue-600',
  },
];


export default function Team({ onStartProject }) {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleChat = () => {
    setSelectedMember(null); // Close team modal
    onStartProject(); // Open contact modal
  };

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
          onChat={handleChat}
        />
      )}

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </section>
  );
}

