export default function CTA({ onStartProject }) {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-0 bg-white overflow-hidden">
      <div className="container-custom w-full">
        <div className="max-w-4xl mx-auto relative">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-emerald-50 rounded-[30px] md:rounded-[40px] blur-3xl opacity-50" />
          
          <div className="relative border border-slate-100 bg-white shadow-2xl shadow-emerald-500/5 rounded-[30px] md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-20 text-center">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 tracking-tighter text-slate-900 leading-tight">
              Ready to <span className="text-emerald-500">Elevate?</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-2 sm:px-0">
              Let's create something extraordinary that transforms your vision into a premium digital reality.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch xs:items-center">
              <button 
                onClick={onStartProject}
                className="btn-crystal btn-primary !px-6 sm:!px-8 md:!px-12 !py-3 sm:!py-4 md:!py-5 w-full xs:w-auto"
              >
                Start Your Project
              </button>
              <button 
                onClick={onStartProject}
                className="btn-crystal !px-6 sm:!px-8 md:!px-12 !py-3 sm:!py-4 md:!py-5 w-full xs:w-auto"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-emerald-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
}

