import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, Phone, Globe } from 'lucide-react';

export default function Navigation({ onStartProject }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'SOLUTIONS', href: '#services' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'TEAM', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200 py-2">
        <div className="container-custom flex justify-between items-center text-[10px] font-black tracking-[0.15em] text-slate-500 uppercase px-4 md:px-0 flex-wrap gap-4">
          <div className="flex items-center gap-8">
            <a href="tel:+923236804540" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Phone className="w-3 h-3 text-emerald-500" />
              <span>+92 323 6804540</span>
            </a>
            <a href="mailto:muqaddaskhan229@gmail.com" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Mail className="w-3 h-3 text-emerald-500" />
              <span>muqaddaskhan229@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <Globe className="w-3 h-3 text-emerald-500" />
              Global Digital Excellence
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3 border-b border-slate-100' : 'bg-white/50 py-3 md:py-6'}`}>
        <div className="container-custom px-4 md:px-8 lg:px-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-4 group flex-shrink-0">
              <div className="relative w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 40 40" className="w-full h-full transform group-hover:rotate-[360deg] transition-transform duration-1000">
                  <rect width="40" height="40" rx="12" className="fill-emerald-500" />
                  <path d="M12 10V30H28" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M22 10C28 10 32 14 32 20C32 26 28 30 22 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-60" />
                </svg>
                <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-lg sm:text-2xl font-black tracking-tighter text-slate-950 leading-none">
                  LUXE<span className="text-emerald-500">DIGITAL</span>
                </span>
                <span className="text-[7px] sm:text-[9px] text-slate-400 font-bold tracking-[0.3em] uppercase mt-1">
                  Creative Agency
                </span>
              </div>
            </Link>

            {/* Desktop Menu - Hide on tablet and mobile */}
            <div className="hidden xl:flex items-center gap-8 lg:gap-10">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] lg:text-[11px] font-black tracking-[0.2em] text-slate-600 hover:text-emerald-600 transition-all relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                </a>
              ))}
              <button 
                onClick={onStartProject}
                className="btn-crystal btn-primary !px-8 !py-3 flex-shrink-0"
              >
                Let's Chat
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-emerald-600 !bg-transparent !border-none !shadow-none z-40 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 sm:w-7 h-6 sm:h-7" /> : <Menu className="w-6 sm:w-7 h-6 sm:h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Panel Menu */}
      {isMenuOpen && (
        <div 
          className="xl:hidden fixed inset-0 top-0 bg-black/40 z-30 transition-opacity duration-300"
          onClick={closeMenu}
          aria-label="Menu backdrop"
        />
      )}

      <div className={`xl:hidden fixed top-0 right-0 h-screen w-72 sm:w-80 bg-white shadow-2xl transition-transform duration-300 z-40 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4 border-b border-slate-100">
          <button
            onClick={closeMenu}
            className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <nav className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-lg font-black tracking-tight text-slate-900 hover:text-emerald-600 transition-colors py-2 border-b border-slate-100 pb-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA Button in Footer */}
        <div className="p-6 border-t border-slate-100">
          <button 
            onClick={() => {
              closeMenu();
              onStartProject();
            }}
            className="btn-crystal btn-primary w-full !px-6 !py-4"
          >
            Get Started
          </button>
          
          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-4 text-sm">
            <a href="tel:+923236804540" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
              <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>+92 323 6804540</span>
            </a>
            <a href="mailto:muqaddaskhan229@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors break-all">
              <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>muqaddaskhan229@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}



