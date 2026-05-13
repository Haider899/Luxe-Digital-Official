import { ArrowRight } from 'lucide-react';

export default function TeamMemberCard({
  name,
  role,
  icon: Icon,
  color,
  onClick,
  index,
}) {
  return (
    <div
      onClick={onClick}
      className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 bg-emerald-50 border border-slate-100 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-500/20"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="text-emerald-500 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-16 h-16" />
      </div>
      <div>
        <h3 className="text-2xl font-black mb-1 text-slate-900 group-hover:text-emerald-600 transition-colors">{name}</h3>
        <p className="text-slate-500 text-sm mb-4 font-medium">{role}</p>
        <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
          View Profile <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Decorative Gradient Shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-emerald-400 to-teal-500" />
    </div>
  );
}

