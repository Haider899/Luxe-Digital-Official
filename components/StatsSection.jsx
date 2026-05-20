import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Zap, Globe, Sparkles } from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: Award,
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    color: 'from-emerald-500 to-teal-600',
    gradient: 'from-emerald-100 to-teal-100'
  },
  {
    icon: Users,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'from-blue-500 to-indigo-600',
    gradient: 'from-blue-100 to-indigo-100'
  },
  {
    icon: TrendingUp,
    value: 350,
    suffix: '%',
    label: 'Avg. Growth Rate',
    color: 'from-amber-500 to-orange-600',
    gradient: 'from-amber-100 to-orange-100'
  },
  {
    icon: Zap,
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    color: 'from-purple-500 to-pink-600',
    gradient: 'from-purple-100 to-pink-100'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries Served',
    color: 'from-cyan-500 to-blue-600',
    gradient: 'from-cyan-100 to-blue-100'
  },
  {
    icon: Sparkles,
    value: 6,
    suffix: '',
    label: 'Expert Specialists',
    color: 'from-rose-500 to-red-600',
    gradient: 'from-rose-100 to-red-100'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, type: 'spring', bounce: 0.4 }
  }
};

export default function StatsSection() {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h4 className="text-emerald-600 font-black text-[10px] mb-4 uppercase tracking-[0.3em]">
            Our Impact
          </h4>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] mb-6 tracking-tighter">
            Driving Results <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Globally</span>
          </h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            Proven track record of transforming brands and driving measurable success across industries worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(16, 185, 129, 0.15)'
                }}
                className={`relative p-10 rounded-[40px] bg-gradient-to-br ${stat.gradient} border border-white/60 glass-premium overflow-hidden group cursor-default transition-all duration-500 h-full`}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${stat.color}`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  {/* Counter */}
                  <div className="mb-2">
                    <div className="text-5xl font-black text-slate-900 group-hover:text-white transition-colors duration-500 leading-none">
                      <AnimatedCounter 
                        end={stat.value} 
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-slate-700 group-hover:text-white/90 font-bold text-sm uppercase tracking-widest transition-colors duration-500">
                    {stat.label}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-white via-transparent to-transparent" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-[40px] overflow-hidden group"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Content */}
          <div className="relative z-10 p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">
                  Ready to Scale Your <span className="text-emerald-100">Success?</span>
                </h3>
                <p className="text-emerald-50 font-medium text-lg leading-relaxed mb-8">
                  Join 150+ brands that trust Luxe Digital to amplify their vision and dominate their market. Let's build something extraordinary together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-emerald-100">
                    <div className="w-2 h-2 rounded-full bg-emerald-100" />
                    <span className="font-bold text-sm uppercase tracking-wider">Free Strategy Session</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <div className="w-2 h-2 rounded-full bg-emerald-100" />
                    <span className="font-bold text-sm uppercase tracking-wider">Zero Commitment</span>
                  </div>
                </div>
              </div>

              {/* Stats Display */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-3 gap-6"
              >
                {[
                  { num: '150+', text: 'Happy Clients' },
                  { num: '98%', text: 'Success Rate' },
                  { num: '24/7', text: 'Support' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-black text-white mb-2">{stat.num}</div>
                    <p className="text-emerald-100 font-bold text-xs uppercase tracking-widest">{stat.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-[40px] border-2 border-transparent bg-clip-padding" 
               style={{
                 backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0))',
                 backgroundOrigin: 'border-box',
                 backgroundClip: 'padding-box, border-box',
                 opacity: 0
               }}
          />
        </motion.div>
      </div>
    </section>
  );
}
