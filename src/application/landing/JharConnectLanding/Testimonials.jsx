import React from 'react';

const testimonials = [
  {
    name: "Amit S.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Jhar-Connect made my trip unforgettable! The AI itinerary was spot on and I discovered hidden gems I’d never have found alone."
  },
  {
    name: "Priya R.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The local experiences were authentic and heartwarming. Booking homestays and tours was seamless. Highly recommend!"
  },
  {
    name: "Rahul D.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "Jharkhand’s beauty and culture came alive thanks to Jhar-Connect. The AR previews were a game changer!"
  }
];

const Testimonials = () => (
  <section className="py-16 bg-gradient-to-br from-slate-50 via-yellow-50 to-green-50 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
    </div>
    
    <style>{`
      .testimonial-card {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .testimonial-card:hover {
        transform: translateY(-8px) scale(1.02);
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        border-color: rgba(34, 197, 94, 0.3);
      }
      
      .testimonial-card:hover .testimonial-avatar {
        transform: scale(1.1);
        border-color: rgba(34, 197, 94, 0.8);
      }
      
      .testimonial-card:hover .testimonial-name {
        color: #059669;
      }
      
      .testimonial-avatar {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .testimonial-name {
        transition: color 0.3s ease;
      }
    `}</style>
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Modern Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
        Hear From Our Happy Explorers
      </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Real stories from travelers who discovered the magic of Jharkhand
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="mb-6 p-2 rounded-full bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm border border-white/30">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar w-20 h-20 rounded-full object-cover border-4 border-green-400" />
            </div>
            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">"{t.quote}"</p>
            <span className="testimonial-name font-bold text-gray-800 text-lg">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
