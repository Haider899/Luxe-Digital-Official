import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const policyContent = {
  Privacy: {
    title: 'Privacy Policy',
    content: `
      At Luxe Digital, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
      
      1. Information Collection: We collect information you provide directly to us through contact forms, such as your name, email address, and project details.
      
      2. Use of Information: We use this information solely to communicate with you about our services and projects. We do not sell or share your data with third parties for marketing purposes.
      
      3. Data Security: We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
      
      4. Your Rights: You have the right to request access to, correction of, or deletion of your personal information at any time.
    `
  },
  Terms: {
    title: 'Terms of Service',
    content: `
      By using Luxe Digital's services, you agree to the following terms and conditions:
      
      1. Service Agreement: All projects are subject to a separate service agreement outlining scope, timelines, and deliverables.
      
      2. Intellectual Property: Unless otherwise agreed, all intellectual property created during a project belongs to the client upon full payment.
      
      3. Limitation of Liability: Luxe Digital is not liable for indirect or consequential damages arising from the use of our services.
      
      4. Governing Law: These terms are governed by the laws of Pakistan.
    `
  },
  'Cookie Policy': {
    title: 'Cookie Policy',
    content: `
      Luxe Digital uses cookies to enhance your browsing experience.
      
      1. What are Cookies: Cookies are small text files stored on your device that help websites remember your preferences.
      
      2. Use of Cookies: We use essential cookies for site functionality and analytical cookies to understand how visitors interact with our website.
      
      3. Managing Cookies: You can disable cookies through your browser settings, though some features of our site may not function correctly.
    `
  }
};

export default function PolicyModal({ type, isOpen, onClose }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setModalOpen(false);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const activePolicy = policyContent[type] || policyContent['Privacy'];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-fade-in border border-slate-100 max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">{activePolicy.title}</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:text-emerald-500 hover:bg-emerald-50 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-10 overflow-y-auto">
          <div className="prose prose-slate max-w-none">
            {activePolicy.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-slate-600 leading-relaxed font-medium mb-6">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-50 flex justify-end bg-slate-50/50">
          <button 
            onClick={onClose}
            className="btn-crystal !px-8"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
