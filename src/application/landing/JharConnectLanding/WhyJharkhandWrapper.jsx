import React, { useRef, useState, useEffect } from 'react';
import { Youtube } from 'lucide-react';

// Card data remains the same
const cardData = {
  title: "Nature's Masterpiece",
  description: "Explore lush forests, majestic waterfalls, and serene landscapes like Hundru Falls and Betla National Park."
};

// The path to your Unity build
const unitySceneUrl = '/vr-scenes/v4/index.html';

const SketchfabStyleCard = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="why-jharkhand" className="py-16 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .modern-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .modern-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border-color: rgba(34, 197, 94, 0.3);
        }
        
        .modern-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .modern-card:hover .card-title {
          color: #059669;
        }
        
        .card-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-title {
          transition: color 0.3s ease;
        }
        
        .vr-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .vr-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            Why Choose Jharkhand?
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 tracking-wide">
            {cardData.title}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover Jharkhand's wonders through vivid stories and authentic moments. 
            <span className="block mt-2 text-base">Scroll to explore the state's natural beauty and vibrant culture.</span>
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar pb-8"
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            height: '520px',
            alignItems: 'center',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card 1: Nature & Wildlife */}
          <div className="modern-card rounded-3xl p-8 flex-shrink-0 w-80 h-96 flex flex-col justify-between">
            <div className="text-center">
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 inline-block">
                <div className="card-icon">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-2xl font-bold text-gray-800 mb-4 leading-tight">
                Pristine Nature
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {cardData.description}
              </p>
            </div>
            <button className="vr-button text-white font-bold py-3 px-6 rounded-full w-full">
              Explore in VR
            </button>
          </div>

          {/* Card 2: Cultural Heritage */}
          <div className="modern-card rounded-3xl p-8 flex-shrink-0 w-80 h-96 flex flex-col justify-between">
            <div className="text-center">
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 inline-block">
                <div className="card-icon">
                  <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-2xl font-bold text-gray-800 mb-4 leading-tight">
                Rich Culture
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Experience vibrant tribal traditions, folk dances, and ancient art forms that have been preserved for generations.
              </p>
            </div>
            <button className="vr-button text-white font-bold py-3 px-6 rounded-full w-full">
              Experience Culture
            </button>
          </div>

          {/* Card 3: Adventure Sports */}
          <div className="modern-card rounded-3xl p-8 flex-shrink-0 w-80 h-96 flex flex-col justify-between">
            <div className="text-center">
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 inline-block">
                <div className="card-icon">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-2xl font-bold text-gray-800 mb-4 leading-tight">
                Adventure Awaits
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                From trekking through dense forests to water sports at scenic lakes, Jharkhand offers thrilling adventures.
              </p>
            </div>
            <button className="vr-button text-white font-bold py-3 px-6 rounded-full w-full">
              Start Adventure
            </button>
          </div>

          {/* Card 4: Local Experiences */}
          <div className="modern-card rounded-3xl p-8 flex-shrink-0 w-80 h-96 flex flex-col justify-between">
            <div className="text-center">
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 inline-block">
                <div className="card-icon">
                  <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-2xl font-bold text-gray-800 mb-4 leading-tight">
                Local Experiences
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Stay with local families, learn traditional crafts, and taste authentic tribal cuisine for an immersive experience.
              </p>
            </div>
            <button className="vr-button text-white font-bold py-3 px-6 rounded-full w-full">
              Connect Locally
            </button>
          </div>

          {/* Card 5: Spiritual Journey */}
          <div className="modern-card rounded-3xl p-8 flex-shrink-0 w-80 h-96 flex flex-col justify-between">
            <div className="text-center">
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 inline-block">
                <div className="card-icon">
                  <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="card-title text-2xl font-bold text-gray-800 mb-4 leading-tight">
                Spiritual Retreat
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Find peace in ancient temples, meditation centers, and serene ashrams that offer spiritual rejuvenation.
              </p>
            </div>
            <button className="vr-button text-white font-bold py-3 px-6 rounded-full w-full">
              Find Peace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SketchfabStyleCard;
