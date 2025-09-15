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
  <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
        Hear From Our Happy Explorers
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-green-400 mb-4" />
            <p className="text-lg text-gray-700 italic mb-4">“{t.quote}”</p>
            <span className="font-bold text-green-800">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
