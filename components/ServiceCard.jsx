import { useState } from 'react';

export default function ServiceCard({
  icon: Icon,
  title,
  name,
  experience,
  description,
  tools,
  details,
  index,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-mint-500/10 rounded-2xl p-8 overflow-hidden hover:border-mint-500/40 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint-600/0 to-purple-600/0 group-hover:from-mint-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 p-3 bg-gradient-to-br from-mint-500/20 to-purple-500/20 rounded-xl w-fit group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-mint-400" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-mint-400 font-semibold text-sm mb-2">{name}</p>
        <p className="text-gray-400 text-sm">{description}</p>
        
        {isHovered && (
          <div className="mt-4 pt-4 border-t border-mint-500/20">
            <p className="text-gray-300 text-sm mb-2">{details}</p>
            <p className="text-xs text-gray-500">{tools}</p>
          </div>
        )}
      </div>
    </div>
  );
}
