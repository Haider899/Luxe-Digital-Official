import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Luxe Digital - Professional Creative Agency</title>
        <meta name="description" content="Luxe Digital - Your complete digital ecosystem with 6 specialized experts. Web development, design, marketing, video editing, copywriting, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Digital Agency, Web Development, Graphic Design, Video Editing, Digital Marketing" />
        <link rel="canonical" href="https://luxedigital.com" />
      </Head>

      <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <Hero />
        <Services />
        <Team />
        <WhyUs />
        <CTA />

        {/* Footer */}
        <Footer />

        {/* Background Gradient Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-mint-600/15 to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/15 to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-mint-600/15 to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </main>
    </>
  );
}
