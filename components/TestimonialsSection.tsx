'use client';

import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

// Define the type for a single testimonial object
interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { name: 'Sarah Chen', role: 'CISO, TechCorp Industries', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', content: 'White Shinobi uncovered critical vulnerabilities that our internal team missed. Their thoroughness and expertise are unmatched.', rating: 5 },
  { name: 'Michael Rodriguez', role: 'Security Director, FinanceSecure', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', content: 'Outstanding penetration testing services. They provided actionable insights that significantly improved our security posture.', rating: 5 },
  { name: 'Jennifer Park', role: 'IT Manager, HealthTech Solutions', avatar: 'https://randomuser.me/api/portraits/women/50.jpg', content: 'Professional, discreet, and incredibly knowledgeable. White Shinobi helped us achieve compliance and peace of mind.', rating: 5 },
  { name: 'David Thompson', role: 'CTO, StartupForge', avatar: 'https://randomuser.me/api/portraits/men/36.jpg', content: 'Their social engineering tests revealed gaps we never considered. The team is professional and their reports are comprehensive.', rating: 5 },
  { name: 'Lisa Wang', role: 'Security Analyst, CloudFirst', avatar: 'https://randomuser.me/api/portraits/women/60.jpg', content: 'Exceptional cloud security assessment. They identified misconfigurations that could have led to major breaches.', rating: 5 },
  { name: 'Robert Johnson', role: 'VP Security, RetailChain', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', content: 'White Shinobi\'s mobile app testing was thorough and revealed vulnerabilities we didn\'t know existed.', rating: 5 },
];


export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // We create a seamless loop by duplicating the testimonials
  const extendedTestimonials = [...testimonials, ...testimonials];

  // Define the props for TestimonialCard and apply the Testimonial type
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="flex-shrink-0 w-96 mx-4 bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
      <Quote className="w-10 h-10 text-blue-500/30 mb-4" />
      <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-slate-600"
        />
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-sm text-slate-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-slate-900 bg-[url('/patterns/grid.svg')] bg-center overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Security Leaders</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Join hundreds of organizations that trust White Shinobi to protect their digital assets.
          </p>
        </div>
        
        <div 
          className="relative space-y-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fading Edges */}
          {/* <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div> */}

          {/* First Marquee Row */}
          <div className="flex animate-scroll-slow" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-slow {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          display: flex;
          width: max-content;
          animation: scroll-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
