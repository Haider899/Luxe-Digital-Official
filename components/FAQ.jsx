import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services does Luxe Digital provide?",
    answer: "Luxe Digital is a full-service creative agency offering six core specializations: Video Editing, Full Stack Development, Graphic Design, Digital Marketing, Copywriting, and Voice & Branding. We provide a complete digital ecosystem for your brand."
  },
  {
    question: "How do you handle project management?",
    answer: "We use a unified approach where our six specialists work in sync. You'll have a dedicated point of contact who ensures all aspects of your project—from design to development and marketing—are perfectly aligned."
  },
  {
    question: "Can I hire for a single service or do I need the whole team?",
    answer: "You can certainly hire us for individual services! Whether you only need high-end video editing or a complete website overhaul, we tailor our involvement to your specific needs."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround times vary by project scope. However, because our team is internal and highly collaborative, we typically deliver faster than traditional agencies that rely on external contractors."
  },
  {
    question: "How do we get started?",
    answer: "Simply click the 'Let's Create' button or contact us via email. We'll schedule a discovery call to understand your goals and provide a customized proposal for your project."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we believe in long-term partnerships. We offer various maintenance and growth packages for web development, marketing campaigns, and content creation to ensure your brand continues to excel."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-slate-900">
            Frequently Asked <span className="text-emerald-500">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about working with Luxe Digital
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-[40px] overflow-hidden transition-all duration-300 border ${
                openIndex === index 
                  ? 'border-emerald-500 bg-emerald-500 shadow-xl shadow-emerald-500/20' 
                  : 'border-slate-100 bg-white hover:border-emerald-200 hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full p-8 text-left flex justify-between items-center outline-none transition-colors ${
                  openIndex === index ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span className="text-lg font-black uppercase tracking-widest leading-tight">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-white text-emerald-600 rotate-180' : 'bg-slate-50 text-slate-400'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`p-8 pt-0 leading-relaxed font-medium ${
                  openIndex === index ? 'text-emerald-50' : 'text-slate-600'
                }`}>
                  <div className="w-full h-px bg-white/20 mb-6" />
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


