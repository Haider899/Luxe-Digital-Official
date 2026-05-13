import { Video, Pen, Code, Palette, Megaphone, Mic, ArrowRight } from 'lucide-react';

export const services = [
  {
    icon: Video,
    title: 'Video Solutions',
    expert: 'Muhammad Yasir',
    description: 'Cinematic video editing and high-end motion graphics designed to capture attention and elevate your brand storytelling.',
    link: '#contact'
  },
  {
    icon: Code,
    title: 'Full Stack Dev',
    expert: 'Usama Haider',
    description: 'Secure, scalable, and modern web applications built with the latest technologies to streamline your digital operations.',
    link: '#contact'
  },
  {
    icon: Megaphone,
    title: 'Meta Advertising',
    expert: 'Muqaddas Khan',
    description: 'Data-driven social media campaigns and performance marketing strategies that deliver measurable ROI and growth.',
    link: '#contact'
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    expert: 'Farhan Khan',
    description: 'Strategic visual branding and UI/UX design that creates a distinctive and premium presence in your industry.',
    link: '#contact'
  },
  {
    icon: Pen,
    title: 'Content Strategy',
    expert: 'Liaquat Ali',
    description: 'Psychology-driven copywriting and narrative strategies that convert audiences into loyal brand advocates.',
    link: '#contact'
  },
  {
    icon: Mic,
    title: 'Voice & Audio',
    expert: 'Haleema Sadia',
    description: 'Professional vocal performances and community-focused social media management for authentic communication.',
    link: '#contact'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-slate-900">
            Specialised <span className="text-emerald-500">Solutions</span> Designed for Results
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Luxe Digital supports organisations across multiple industries by delivering secure, scalable, and cost-efficient digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-white border border-slate-100 rounded-[40px] hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                <service.icon className="w-8 h-8" />
              </div>
              
              <div className="relative z-10">
                <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Expert: {service.expert}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-xs">
                  <span className="w-8 h-[2px] bg-emerald-500"></span>
                  Explore Solution
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Support Section */}
        <div className="mt-32 pt-24 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900">Supporting Businesses Across <span className="text-emerald-500">Multiple Industries</span></h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We support organisations across multiple industries by delivering secure, scalable, and cost-efficient digital solutions designed to meet industry-specific needs.
              </p>
              <button className="btn-crystal btn-primary !px-10 !py-4">
                Explore Industry Solutions
              </button>

            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'E-commerce', 'Healthcare', 'Engineering', 'Accountants', 'Content Creators', 'Legal Services'
              ].map((industry, i) => (
                <div key={i} className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-xl font-bold text-center text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-all cursor-default">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


