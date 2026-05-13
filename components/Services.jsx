import { Video, Pen, Code, Palette, Megaphone, Mic, ArrowRight } from 'lucide-react';

export const services = [
  {
    icon: Video,
    title: 'Video Solutions',
    description: 'Protect your brand with robust high-end video editing and cinematic motion graphics that defend against mediocrity.',
    link: '#contact'
  },
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Unlock the full potential of your brand with custom web applications designed to streamline operations and scale.',
    link: '#contact'
  },
  {
    icon: Megaphone,
    title: 'Marketing Strategy',
    description: 'Boost efficiency and growth with data-driven meta campaigns and organic strategies that empower your brand.',
    link: '#contact'
  },
  {
    icon: Palette,
    title: 'Visual Identity',
    description: 'Create a distinctive brand presence with premium UI/UX and graphic designs tailored to your unique business goals.',
    link: '#contact'
  },
  {
    icon: Pen,
    title: 'Content Excellence',
    description: 'Psychology-driven copywriting that simplifies complex messages and unlocks greater audience engagement.',
    link: '#contact'
  },
  {
    icon: Mic,
    title: 'Voice & Audio',
    description: 'Professional voice-over services that add authenticity and personality to your modern business communication.',
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
              className="group p-10 card-mint rounded-2xl flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-500 mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform"
              >
                View More <ArrowRight className="w-4 h-4" />
              </a>
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


