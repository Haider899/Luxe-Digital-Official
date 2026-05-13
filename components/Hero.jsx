import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

export default function Hero({ onStartProject }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Decorative Orbs - Adjusted for light theme */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[120px] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] pointer-events-none opacity-40" />

      <div className="container-custom relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase">
            Available for New Projects
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] max-w-5xl mx-auto text-slate-950">
          Smarter <span className="text-emerald-500">Digital Solutions</span> For Growing Brands
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          We help modern businesses modernise, secure, and optimise their digital ecosystem using premium Web Development, Video, and Marketing strategy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onStartProject}
            className="btn-crystal btn-primary !px-12 !py-5"
          >
            View Solutions
          </button>
          <button 
            onClick={onStartProject}
            className="btn-crystal !px-12 !py-5"
          >
            Explore Our Services <ChevronRight className="w-4 h-4" />
          </button>
        </div>



        {/* Stats */}
        <div className="mt-24 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Specialists', val: '06' },
            { label: 'Projects Done', val: '150+' },
            { label: 'Global Clients', val: '40+' },
            { label: 'Success Rate', val: '99%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-slate-900 mb-1">{stat.val}</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


