import { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Team from '../components/Team';
import WhyUs from '../components/WhyUs';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Head>
        <title>Luxe Digital - Professional Creative Agency</title>
        <meta name="description" content="Luxe Digital - Your complete digital ecosystem with 6 specialized experts. Web development, design, marketing, video editing, copywriting, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Digital Agency, Web Development, Graphic Design, Video Editing, Digital Marketing" />
        <link rel="canonical" href="https://luxedigital.com" />
      </Head>

      <main className="relative min-h-screen bg-white text-slate-900 overflow-hidden">
        {/* Contact Form Modal */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={closeContactModal} 
        />

        {/* Navigation */}
        <Navigation onStartProject={openContactModal} />

        {/* Main Sections */}
        <div className="pt-[110px]">
          <Hero onStartProject={openContactModal} />
          <WhyUs onStartProject={openContactModal} />
          <Services />
          <Team onStartProject={openContactModal} />
          <Reviews />
          <FAQ />
          <CTA onStartProject={openContactModal} />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}


