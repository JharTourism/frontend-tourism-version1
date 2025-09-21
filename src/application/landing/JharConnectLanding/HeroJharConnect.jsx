import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroJharConnect = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/role-selection');
  };

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="https://res.cloudinary.com/dfkfysygf/video/upload/v1758445217/Jhar-Connect_-_Made_with_Clipchamp_online-video-cutter-upscaled_ruaf7x.mp4" type="video/mp4" />
        {/* Fallback image for browsers that don't support video */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Jharkhand Nature & Culture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </video>
      {/* Black filter overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 z-10 animate-pulse" />
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide leading-tight">
          <span className="block font-bold text-2xl md:text-3xl lg:text-4xl mb-6 tracking-wider bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent relative uppercase font-extrabold">
            JHAR-CONNECT
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full opacity-80"></span>
          </span>
          Discover the Soul of Jharkhand
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 font-semibold leading-relaxed max-w-2xl mx-auto">
          Your AI-Powered Gateway to Untouched Nature & Vibrant Culture
        </p>
        <button
          onClick={handleStartJourney}
          className="inline-block px-10 py-4 bg-gradient-to-r from-green-600 to-yellow-500 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          Start Your Journey Now
        </button>
      </div>
    </section>
  );
};

export default HeroJharConnect;
