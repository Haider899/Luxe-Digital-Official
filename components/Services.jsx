import { Video, Pen, Code, Palette, Megaphone, Mic, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export const services = [
  {
    icon: Video,
    title: 'Visual Storytelling',
    description: 'High-end cinematic video production and motion graphics that captivate and convert.',
    color: 'from-emerald-500 to-teal-600',
    size: 'lg'
  },
  {
    icon: Code,
    title: 'Full Stack Dev',
    description: 'Bespoke web applications built with Next.js 15, focus on performance and security.',
    color: 'from-blue-500 to-indigo-600',
    size: 'md'
  },
  {
    icon: Megaphone,
    title: 'Growth Marketing',
    description: 'Data-driven Meta & Google Ads strategies to scale your business exponentially.',
    color: 'from-amber-500 to-orange-600',
    size: 'md'
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Strategic UI/UX and graphic design that defines industry-leading brands.',
    color: 'from-purple-500 to-pink-600',
    size: 'md'
  },
  {
    icon: Pen,
    title: 'Premium Copy',
    description: 'Compelling narratives and high-conversion copy for the modern digital era.',
    color: 'from-rose-500 to-red-600',
    size: 'md'
  },
  {
    icon: Mic,
    title: 'Voice Artistry',
    description: 'Professional vocal performances for commercials, narration, and storytelling.',
    color: 'from-cyan-500 to-blue-600',
    size: 'md'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-emerald-600 font-black text-[10px] mb-4 uppercase tracking-[0.3em]"
            >
              Our Core Expertise
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter"
            >
              Specialised <span className="text-emerald-500">Solutions</span> <br />
              For Results.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 font-bold max-w-sm text-sm uppercase tracking-widest leading-relaxed"
          >
            Luxe Digital delivers secure, scalable, and cost-efficient ecosystems designed to dominate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <TiltCard 
              key={idx} 
              className={service.size === 'lg' ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full glass-premium p-10 rounded-[40px] border border-slate-100 shadow-xl group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[400px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 max-w-sm">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  <span className="w-8 h-[2px] bg-emerald-500"></span>
                  Explore Solution <ArrowRight className="w-4 h-4" />
                </div>

                {/* Decorative background number */}
                <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-slate-900/[0.02] pointer-events-none select-none group-hover:text-emerald-500/[0.05] transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Industry Support Section - Redesigned */}
        <div className="mt-40 pt-24 border-t border-slate-100 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-emerald-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 tracking-tighter">
                Fueling Growth Across <span className="text-emerald-500">Global Industries</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                Our ecosystem is designed to solve industry-specific challenges, delivering secure and cost-efficient results for leaders worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-crystal btn-primary !px-10 !py-5 shadow-emerald-500/20 shadow-xl">
                  Get Industry Strategy
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'E-commerce', 'Healthcare', 'Engineering', 'Accounting', 'Content Creation', 'Legal Services'
              ].map((industry, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, borderColor: '#10b981', backgroundColor: '#ecfdf5' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white border border-slate-100 rounded-3xl font-black text-xs uppercase tracking-widest text-center text-slate-700 shadow-sm transition-all cursor-default"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


