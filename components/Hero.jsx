import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Play, Palette, Code } from 'lucide-react';

const headlines = [
  { main: "Smarter", accent: "Digital Solutions", end: "For Growing Brands" },
  { main: "Elevate", accent: "Your Vision", end: "With Premium Design" },
  { main: "Scale", accent: "Your Business", end: "With Expert Strategy" },
  { main: "Secure", accent: "Your Future", end: "With Modern Tech" }
];

export default function Hero({ onStartProject }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-20 overflow-hidden bg-white">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[100%] sm:w-[70%] h-[70%] bg-emerald-100/40 rounded-full blur-[80px] sm:blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[100%] sm:w-[70%] h-[70%] bg-blue-50/40 rounded-full blur-[80px] sm:blur-[120px]" 
        />
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center px-4 sm:px-6 md:px-8 lg:px-0 w-full">
        <div className="text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase">
              Global Excellence in Digital
            </span>
          </motion.div>

          <div className="flex items-center mb-8 sm:mb-10">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={index}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight md:leading-[1] text-slate-950"
              >
                {headlines[index].main} <br />
                <span className="text-emerald-500">{headlines[index].accent}</span> <br />
                {headlines[index].end}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xl mb-8 sm:mb-12 leading-relaxed relative z-20"
          >
            Luxe Digital elevates modern brands through high-end web development, cinematic video, and data-driven marketing ecosystems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-4 sm:gap-6 w-full xs:w-auto"
          >
            <button 
              onClick={onStartProject}
              className="btn-crystal btn-primary !px-8 sm:!px-12 !py-4 sm:!py-5 hover:scale-105 transition-transform whitespace-nowrap"
            >
              Start Project <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#services"
              className="btn-crystal !px-8 sm:!px-12 !py-4 sm:!py-5 hover:scale-105 transition-transform text-center"
            >
              Our Solutions
            </a>
          </motion.div>
        </div>

        {/* 3D Floating Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-20 animate-float">
            <div className="glass-premium p-6 sm:p-8 md:p-10 rounded-[30px] md:rounded-[50px] border border-white/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg shadow-emerald-500/30">
                  <Play className="w-8 sm:w-10 h-8 sm:h-10 fill-current" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 mb-2">150+</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 sm:mb-8">Projects Delivered</div>
                
                <div className="flex -space-x-4 mb-6 sm:mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-slate-200 border-4 border-white overflow-hidden shadow-sm">
                      <div className="w-full h-full bg-emerald-100" />
                    </div>
                  ))}
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    +40
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/50 flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping flex-shrink-0" />
                  <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Active Growth Monitoring</span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-emerald-500"
            >
              <Palette className="w-10 h-10" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-5 -left-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-500"
            >
              <Code className="w-8 h-8" />
            </motion.div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}


