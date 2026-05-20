import { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Instagram, Github, Phone, MapPin, Facebook, Twitter, Music } from 'lucide-react';
import PolicyModal from './PolicyModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activePolicy, setActivePolicy] = useState(null);

  const socials = [
    { Icon: Facebook, href: 'https://www.facebook.com/share/1J1Yix7evh/' },
    { Icon: Instagram, href: 'https://www.instagram.com/muqaddas2670?igsh=MWtnMWxmbTB2ZXNp' },
    { 
      Icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
        </svg>
      ), 
      href: 'https://www.tiktok.com/@muqaddas.khan388?_r=1&_t=ZN-96GobN1vFoM' 
    },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/luxe-digital/' },
  ];

  const openPolicy = (type) => (e) => {
    e.preventDefault();
    setActivePolicy(type);
  };


  return (
    <footer className="bg-white pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-slate-100">
      <PolicyModal 
        isOpen={!!activePolicy} 
        type={activePolicy} 
        onClose={() => setActivePolicy(null)} 
      />

      <div className="container-custom px-4 sm:px-6 md:px-8 lg:px-0 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6 group">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-white text-xs sm:text-sm flex-shrink-0">
                LD
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
                Luxe Digital
              </span>
            </Link>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
              Luxe Digital helps SMEs and enterprises modernise, secure, and optimise their digital footprint using premium Web, Video, and Marketing strategy.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socials.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all shadow-sm flex-shrink-0">
                  <social.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-slate-900 font-black text-xs sm:text-sm uppercase tracking-widest mb-4 md:mb-8">Solutions</h4>
            <ul className="space-y-2 md:space-y-3">
              {['Video Solutions', 'Full Stack Dev', 'Meta Advertising', 'Brand Identity', 'UI/UX Design', 'Content Strategy'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-slate-500 hover:text-emerald-600 text-xs sm:text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-slate-900 font-black text-xs sm:text-sm uppercase tracking-widest mb-4 md:mb-8">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              {['About Us', 'Our Process', 'Case Studies', 'Expert Team', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a 
                    href={link === 'Contact Us' ? '#contact' : '#'} 
                    className="text-slate-500 hover:text-emerald-600 text-xs sm:text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-slate-900 font-black text-xs sm:text-sm uppercase tracking-widest mb-4 md:mb-8">Let's Chat</h4>
            <div className="space-y-3 md:space-y-4">
              <a href="tel:+923236804540" className="flex items-center gap-3 text-slate-500 hover:text-emerald-600 transition-colors">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">Call Us</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">+92 323 6804540</div>
                </div>
              </a>
              <a href="mailto:muqaddaskhan229@gmail.com" className="flex items-center gap-3 text-slate-500 hover:text-emerald-600 transition-colors">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">Email Us</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">muqaddaskhan229@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-slate-100 flex flex-col gap-4 md:gap-6 md:flex-row md:justify-between md:items-center">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest text-center md:text-left">
            © {currentYear} Luxe Digital. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-6 lg:gap-8 text-xs text-slate-400 font-bold uppercase tracking-widest justify-center md:justify-end">
            <button onClick={openPolicy('Terms')} className="hover:text-emerald-600 transition-colors whitespace-nowrap">Terms</button>
            <button onClick={openPolicy('Privacy')} className="hover:text-emerald-600 transition-colors whitespace-nowrap">Privacy</button>
            <button onClick={openPolicy('Cookie Policy')} className="hover:text-emerald-600 transition-colors whitespace-nowrap">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}



