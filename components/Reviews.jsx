import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Rabia Khan',
    location: 'Lahore, Pakistan',
    project: 'Logo Design & Branding',
    text: 'The logo design for my boutique was beyond expectations. Pure luxury and sophistication. Highly recommended!',
    rating: 5,
    avatar: 'RK'
  },
  {
    name: 'Zeeshan Ahmed',
    location: 'Karachi, Pakistan',
    project: 'Meta Ads & Growth Strategy',
    text: 'Our Meta Ads performance tripled within the first month. Incredible strategy and communication from the team.',
    rating: 5,
    avatar: 'ZA'
  },
  {
    name: 'Ayesha Malik',
    location: 'Islamabad, Pakistan',
    project: 'Full Stack Web Development',
    text: 'Professional web development that actually converts. The team understood our vision perfectly from day one.',
    rating: 5,
    avatar: 'AM'
  },
  {
    name: 'Bilal Sheikh',
    location: 'Faisalabad, Pakistan',
    project: 'Cinematic Video Editing',
    text: 'Exceptional video editing. Our brand story now feels world-class and resonates with our global audience.',
    rating: 5,
    avatar: 'BS'
  },
  {
    name: 'Saira Pervez',
    location: 'Multan, Pakistan',
    project: 'Content & Social Strategy',
    text: 'Their content strategy transformed our social presence. Engagement is at an all-time high!',
    rating: 5,
    avatar: 'SP'
  }
];

export default function Reviews() {
  // Double the reviews for infinite scroll effect
  const extendedReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-slate-900">
            Client <span className="text-emerald-500">Feedback</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Hear from our prestigious local and international clients about their experience with Luxe Digital.
          </p>
        </div>
      </div>

      {/* Motion Slider Container */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex gap-8 whitespace-nowrap px-4"
          animate={{
            x: [0, -2000] // Adjust based on content width
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {extendedReviews.map((review, idx) => (
            <div 
              key={idx}
              className="inline-block w-[400px] bg-white border border-slate-100 p-8 rounded-[40px] shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all duration-500 group relative"
            >
              <div className="absolute top-8 right-8 text-emerald-100 group-hover:text-emerald-500 transition-colors">
                <Quote className="w-10 h-10 rotate-180" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 font-medium leading-relaxed mb-8 whitespace-normal italic">
                "{review.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-black shadow-lg shadow-emerald-500/20">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">{review.name}</h4>
                  <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{review.project}</div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container-custom mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white" />
            ))}
          </div>
          <span className="text-xs font-black text-slate-600 uppercase tracking-widest">
            Joined by 150+ successful brands
          </span>
        </div>
      </div>
    </section>
  );
}
