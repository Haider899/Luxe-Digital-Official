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

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'SOLUTIONS', href: '#services' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'TEAM', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200 py-2">
        <div className="container-custom flex justify-between items-center text-[10px] font-black tracking-[0.15em] text-slate-500 uppercase">
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
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3 border-b border-slate-100' : 'bg-white/50 py-6'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-full h-full transform group-hover:rotate-[360deg] transition-transform duration-1000">
                  <rect width="40" height="40" rx="12" className="fill-emerald-500" />
                  <path d="M12 10V30H28" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M22 10C28 10 32 14 32 20C32 26 28 30 22 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-60" />
                </svg>
                <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-950 leading-none">
                  LUXE<span className="text-emerald-500">DIGITAL</span>
                </span>
                <span className="text-[9px] text-slate-400 font-bold tracking-[0.3em] uppercase mt-1">
                  Creative Agency
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-black tracking-[0.2em] text-slate-600 hover:text-emerald-600 transition-all relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                </a>
              ))}
              <button 
                onClick={onStartProject}
                className="btn-crystal btn-primary !px-8 !py-3"
              >
                Let's Chat
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-emerald-600 !bg-transparent !border-none !shadow-none"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 top-0 bg-white transition-transform duration-500 z-[-1] flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-black tracking-tighter text-slate-900 hover:text-emerald-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              onStartProject();
            }}
            className="btn-crystal btn-primary !px-12 !py-4"
          >
            GET STARTED
          </button>
        </div>
      </nav>
    </header>
  );
}



