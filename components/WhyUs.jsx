import { CheckCircle2, TrendingUp, Users, Zap, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Expert Led',
    desc: 'Led by industry veterans with deep expertise in their respective niches.',
    icon: Users,
  },
  {
    title: 'High Performance',
    desc: 'Optimised for speed, security, and conversion from the ground up.',
    icon: Zap,
  },
  {
    title: 'Secure by Design',
    desc: 'Advanced cybersecurity measures integrated into every digital asset.',
    icon: ShieldCheck,
  },
  {
    title: 'Global Ready',
    desc: 'Strategically designed to scale your business across international markets.',
    icon: Globe,
  },
];

export default function WhyUs({ onStartProject }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="why-us" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-emerald-600 font-black text-[10px] mb-4 uppercase tracking-[0.3em]">The Luxe Advantage</h4>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Why Leaders <br />
              <span className="text-emerald-500">Choose Luxe.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
              We don't just build websites; we engineer success. Our multidisciplinary team combines visual artistry with technical precision.
            </p>
            <div className="space-y-4">
              {['End-to-end Project Management', '24/7 Security Monitoring', 'Weekly Growth Reports'].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -5, borderColor: '#10b981' }}
                className="p-10 glass-premium border border-slate-100 rounded-[40px] hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 overflow-hidden shadow-2xl shadow-emerald-500/20"
        >
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-black text-white mb-2">Specialised Solutions Designed for Growth</h3>
              <p className="text-emerald-50 font-medium max-w-2xl">
                We focus on optimization, performance, and cost efficiency, ensuring your digital investment delivers measurable results and long-term business value.
              </p>
            </div>
            <button 
              onClick={onStartProject}
              className="btn-crystal !bg-white !text-emerald-600 !px-10 !py-4 hover:scale-105 transition-transform"
            >
              View Solutions
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        </motion.div>
      </div>
    </section>
  );
}



