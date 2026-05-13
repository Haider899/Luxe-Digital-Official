export default function CTA({ onStartProject }) {
  return (
    <section id="contact" className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-emerald-50 rounded-[40px] blur-3xl opacity-50" />
          
          <div className="relative border border-slate-100 bg-white shadow-2xl shadow-emerald-500/5 rounded-[40px] p-12 md:p-20 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 leading-tight">
              Ready to <span className="text-emerald-500">Elevate?</span>
            </h2>
            <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Let's create something extraordinary that transforms your vision into a premium digital reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={onStartProject}
                className="btn-crystal btn-primary !px-12 !py-5"
              >
                Start Your Project
              </button>
              <button 
                onClick={onStartProject}
                className="btn-crystal !px-12 !py-5"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
}

