import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

export default function TeamMemberCard({ name, role, icon: Icon, onClick, index }) {
  return (
    <TiltCard>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={onClick}
        className="group relative bg-white border border-slate-100 rounded-[40px] p-8 cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Icon */}
        <div className="relative z-10 mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
          <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 group-hover:bg-emerald-500 group-hover:text-white group-hover:rotate-6 shadow-sm group-hover:shadow-xl group-hover:shadow-emerald-500/20">
            <Icon className="w-10 h-10" />
          </div>
          
          {/* Status Indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full" />
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors tracking-tight">
            {name}
          </h3>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 group-hover:text-slate-600">
            {role}
          </p>
          
          <button className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-emerald-600 transition-all">
            View Profile <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/[0.03] rounded-br-[100px] -translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
      </motion.div>
    </TiltCard>
  );
}
