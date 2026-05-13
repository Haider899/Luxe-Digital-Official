import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users, Award, TrendingUp } from 'lucide-react';

export default function WhyUs({ onStartProject }) {
  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      desc: 'Our specialists deliver expert web, design, and marketing solutions, helping businesses build scalable digital environments.',
    },
    {
      icon: Shield,
      title: 'Secure Solutions',
      desc: 'We take a security-first approach, ensuring your digital assets are protected with robust development standards and best practices.',
    },
    {
      icon: TrendingUp,
      title: 'Real Business Value',
      desc: 'Our team focuses on optimization and performance, ensuring your digital investment delivers measurable results.',
    },
  ];

  return (
    <section id="why-us" className="relative py-24 px-6 bg-slate-50">
      <div className="container-custom">
        {/* Top Section - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-950">
              Proven Digital Expertise <br />
              <span className="text-emerald-500">Across The Globe</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Luxe Digital delivers expert creative and technical services, including full-stack development, brand identity, and performance marketing. As your strategic partner, we support brands with tailored solutions designed to align with business goals and drive secure, scalable growth.
            </p>
            <button 
              onClick={onStartProject}
              className="btn-crystal !px-8 !py-4"
            >
              Explore Our Services
            </button>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            {benefits.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 p-8 rounded-2xl bg-white border border-slate-100 hover:border-emerald-500/20 transition-all group shadow-sm"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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



