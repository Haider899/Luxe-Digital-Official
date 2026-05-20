import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import StatsSection from '../components/StatsSection';
import Reviews from '../components/Reviews';
import Team from '../components/Team';
import WhyUs from '../components/WhyUs';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import ContactModal from '../components/ContactModal';
import ParticleBackground from '../components/ParticleBackground';
import TeamMemberModal from '../components/TeamMemberModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const handleTeamMemberChat = () => {
    setSelectedTeamMember(null);
    openContactModal();
  };

  return (
    <>
      <Head>
        <title>Luxe Digital - Professional Creative Agency</title>
        <meta name="description" content="Luxe Digital - Your complete digital ecosystem with 6 specialized experts. Web development, design, marketing, video editing, copywriting, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Digital Agency, Web Development, Graphic Design, Video Editing, Digital Marketing" />
        <link rel="canonical" href="https://luxedigital.com" />
      </Head>

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen bg-white text-slate-900 overflow-hidden"
      >
        <ParticleBackground />
        
        {/* Contact Form Modal */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={closeContactModal} 
        />

        {/* Team Member Modal - Rendered at root for correct stacking context */}
        {selectedTeamMember && (
          <TeamMemberModal 
            member={selectedTeamMember} 
            onClose={() => setSelectedTeamMember(null)}
            onChat={handleTeamMemberChat}
          />
        )}

        {/* Navigation */}
        <Navigation onStartProject={openContactModal} />

        {/* Main Sections */}
        <div className="relative z-10 pt-[80px] sm:pt-[90px] md:pt-[100px] lg:pt-[110px]">
          <Hero onStartProject={openContactModal} />
          <WhyUs onStartProject={openContactModal} />
          <Services onStartProject={openContactModal} />
          <StatsSection />
          <Team 
            onStartProject={openContactModal} 
            onViewProfile={(member) => setSelectedTeamMember(member)}
          />
          <Reviews />
          <FAQ />
          <CTA onStartProject={openContactModal} />
        </div>

        {/* Footer */}
        <Footer />
      </motion.main>
    </>
  );
}


