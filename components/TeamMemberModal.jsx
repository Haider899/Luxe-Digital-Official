import { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Linkedin, Facebook } from 'lucide-react';
import { services } from './Services';

export default function TeamMemberModal({ member, onClose, onChat }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) onClose();
  }, [isOpen, onClose]);

  const serviceData = services.find(s => s.title === services[member.serviceIndex]?.title) || services[0];

  return (
    <div
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[999] flex items-center justify-center p-6 md:p-20 overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white border border-slate-100 rounded-[40px] shadow-2xl max-w-2xl w-full max-h-[75vh] md:max-h-[80vh] overflow-y-auto animate-fade-in relative shadow-emerald-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-50 p-8 flex justify-between items-start z-10">
          <div>
            <p className="text-emerald-600 font-black text-[10px] mb-2 uppercase tracking-[0.2em]">Team Member</p>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{member.name}</h2>
            <p className="text-slate-500 font-bold mt-2 uppercase text-xs tracking-widest">{member.role}</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-900 text-white hover:bg-emerald-500 transition-all z-20 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-10 space-y-10">
          {/* Service Info */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-500 flex-shrink-0">
              <serviceData.icon className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4 text-slate-900">{serviceData.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{serviceData.description}</p>
            </div>
          </div>

          {/* Details Box */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8">
            <p className="text-slate-700 leading-relaxed font-medium">
              {member.description || `Leveraging premium expertise in ${serviceData.title.toLowerCase()} to deliver measurable business growth and high-end visual experiences.`}
            </p>
          </div>

          {/* Categorized Skills Section */}
          {member.categorizedSkills ? (
            <div className="space-y-8">
              {member.categorizedSkills.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="font-bold text-emerald-600 uppercase tracking-widest text-[10px] flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-emerald-200"></span>
                    {cat.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Legacy Skills Section */
            member.skills && member.skills.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-bold text-slate-400 uppercase tracking-widest text-xs">Skills & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}

          {/* Portfolio Links */}
          {(member.portfolio || (member.social && (member.social.github || member.social.linkedin || member.social.facebook))) && (
            <div className="flex flex-wrap gap-4">
              {member.portfolio && (
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-crystal !bg-emerald-50 !text-emerald-700 !border-emerald-200"
                >
                  <ExternalLink className="w-4 h-4" /> Portfolio
                </a>
              )}
              {member.social?.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-crystal !bg-slate-50 !text-slate-600 !border-slate-200"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
              {member.social?.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-crystal !bg-blue-50 !text-blue-600 !border-blue-200"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              )}
              {member.social?.facebook && (
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-crystal !bg-blue-50 !text-blue-600 !border-blue-200"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              )}
            </div>
          )}


          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-50">
            <button 
              onClick={onChat}
              className="btn-crystal btn-primary flex-1 !py-5"
            >
              Let's Chat
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-crystal flex-1 !py-5"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

