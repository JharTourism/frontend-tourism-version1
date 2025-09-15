import React from 'react';

const HeroJharConnect = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Jharkhand Nature & Culture"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0"
      />
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-blue-900/40 z-10 animate-pulse" />
      <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
          Jhar-Connect: Discover the Soul of Jharkhand
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
          Your AI-Powered Gateway to Untouched Nature & Vibrant Culture.
        </p>
        <a
          href="#why-jharkhand"
          className="inline-block px-10 py-4 bg-gradient-to-r from-green-600 to-yellow-500 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Start Your Journey Now
        </a>
      </div>
    </section>
  );
};

export default HeroJharConnect;
