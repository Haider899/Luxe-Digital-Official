import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

export default function Hero({ onStartProject }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Decorative Orbs - Animated */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase">
            Available for New Projects
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] max-w-5xl mx-auto text-slate-950"
        >
          Smarter <span className="text-emerald-500">Digital Solutions</span> For Growing Brands
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We help modern businesses modernise, secure, and optimise their digital ecosystem using premium Web Development, Video, and Marketing strategy.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={onStartProject}
            className="btn-crystal btn-primary !px-12 !py-5 hover:scale-105 transition-transform"
          >
            View Solutions
          </button>
          <a 
            href="#services"
            className="btn-crystal !px-12 !py-5 hover:scale-105 transition-transform"
          >
            Explore Our Services <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Specialists', val: '06' },
            { label: 'Projects Done', val: '150+' },
            { label: 'Global Clients', val: '40+' },
            { label: 'Success Rate', val: '99%' },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <motion.div 
                whileHover={{ scale: 1.2, color: '#10b981' }}
                className="text-3xl font-black text-slate-900 mb-1 transition-colors"
              >
                {stat.val}
              </motion.div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


