import { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, selectedService = null }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedServiceValue, setSelectedServiceValue] = useState('');

  // Service mapping for dropdown values
  const serviceMapping = {
    'Visual Storytelling': 'video',
    'Full Stack Dev': 'web',
    'Growth Marketing': 'social',
    'Brand Identity': 'graphics',
    'Premium Copy': 'content',
    'Voice Artistry': 'voice'
  };

  useEffect(() => {
    if (selectedService && selectedService.title) {
      setSelectedServiceValue(serviceMapping[selectedService.title] || '');
    }
  }, [selectedService]);

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
    <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-3 md:p-4 pt-20 md:pt-0 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-xl rounded-[30px] md:rounded-[40px] shadow-2xl animate-fade-in border border-slate-100 md:my-auto max-h-[calc(100vh-160px)] md:max-h-[calc(100vh-32px)] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="sticky top-0 right-0 absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-emerald-500 transition-all z-30 shadow-lg flex-shrink-0"
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
          <div className="p-6 md:p-8 md:p-12">
            <div className="mb-8 md:mb-10">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">
                Start Your <span className="text-emerald-500">Project</span>
              </h2>
              <p className="text-slate-500 font-medium italic">
                Fill in the details below and let's create something extraordinary.
              </p>
              
              {/* Service Details Display */}
              {selectedService && selectedService.title && (
                <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 mb-2">Selected Service</p>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{selectedService.title}</h3>
                  <p className="text-sm text-slate-700 font-medium">{selectedService.details}</p>
                </div>
              )}
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
                    value={selectedServiceValue}
                    onChange={(e) => setSelectedServiceValue(e.target.value)}
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
