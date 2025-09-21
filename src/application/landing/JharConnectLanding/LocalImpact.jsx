import React from 'react';

const LocalImpact = () => (
  <section className="py-16 bg-gradient-to-br from-slate-50 via-green-50 to-yellow-50 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 right-10 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
    </div>
    
    <style>{`
      .impact-card {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .impact-card:hover {
        transform: translateY(-4px);
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        border-color: rgba(34, 197, 94, 0.3);
      }
      
      .impact-image {
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .impact-card:hover .impact-image {
        transform: scale(1.05);
      }
      
      .impact-stat {
        background: rgba(34, 197, 94, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(34, 197, 94, 0.2);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .impact-stat:hover {
        background: rgba(34, 197, 94, 0.2);
        border-color: rgba(34, 197, 94, 0.4);
        transform: scale(1.05);
      }
    `}</style>
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="impact-card rounded-3xl p-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
            Sustainable Tourism
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 tracking-wide">
            Empowering Jharkhand
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
            Jhar-Connect directly benefits local artisans, guides, and homestay owners by connecting them with travelers and ensuring fair trade. Every journey you take helps uplift communities, preserve traditions, and foster sustainable growth.
          </p>
          <div className="flex items-center gap-4">
            <div className="impact-stat px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-green-700">+32%</span>
            </div>
            <span className="text-gray-600 font-medium">increase in local income (2025)</span>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="impact-card rounded-3xl p-6 flex flex-col items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
              alt="Local artisan in Jharkhand"
              className="impact-image w-full max-w-sm object-cover"
            />
          </div>
          <span className="text-sm text-gray-500 mt-4 font-medium">A local artisan sharing her craft with visitors</span>
        </div>
      </div>
    </div>
  </section>
);

export default LocalImpact;
