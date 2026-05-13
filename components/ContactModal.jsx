import { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden animate-fade-in border border-slate-100">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-emerald-500 transition-all z-30 shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center py-20">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Thank You!</h2>
            <p className="text-slate-500 font-medium">Your message has been received. Our team will contact you shortly to discuss your project.</p>
          </div>
        ) : (
          <div className="p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">Start Your <span className="text-emerald-500">Project</span></h2>
              <p className="text-slate-500 font-medium italic">Fill in the details below and let's create something extraordinary.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-2 ml-4">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Muqaddas Khan"
                    className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 font-semibold placeholder:text-slate-300 transition-all outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-2 ml-4">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="muqaddas@example.com"
                    className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 font-semibold placeholder:text-slate-300 transition-all outline-none"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-2 ml-4">Select Service</label>
                  <select 
                    required
                    className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 font-semibold transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>Choose a solution...</option>
                    <option value="web">Web Development</option>
                    <option value="social">Social Media / Meta Ads</option>
                    <option value="graphics">Graphic Design / Branding</option>
                    <option value="video">Video Solutions</option>
                    <option value="content">Content Strategy</option>
                    <option value="voice">Voice & Audio</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-2 ml-4">Project Brief</label>
                  <textarea 
                    rows="3"
                    placeholder="Tell us a bit about your vision..."
                    className="w-full px-8 py-4 rounded-[30px] bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900 font-semibold placeholder:text-slate-300 transition-all outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full btn-crystal btn-primary !py-5 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending Message...' : (
                  <>
                    Send Request <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
