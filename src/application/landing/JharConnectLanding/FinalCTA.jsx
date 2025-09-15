import React from 'react';

const FinalCTA = () => (
  <section className="py-16 bg-gradient-to-br from-green-700 to-yellow-600 text-white text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
      Ready to Experience the Real Jharkhand?
    </h2>
    <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
      <a
        href="#"
        className="px-10 py-4 bg-white text-green-800 font-bold rounded-full shadow-lg text-xl hover:bg-green-100 transition-colors"
      >
        Download the App
      </a>
      <a
        href="#why-jharkhand"
        className="px-10 py-4 bg-gradient-to-r from-green-600 to-yellow-500 text-white font-bold rounded-full shadow-lg text-xl hover:scale-105 transition-transform"
      >
        Explore Destinations
      </a>
    </div>
  </section>
);

export default FinalCTA;
