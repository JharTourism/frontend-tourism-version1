import React from 'react';

const FinalCTA = () => (
  <section className="py-16 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
    </div>
    
    <style>{`
      .cta-card {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .cta-card:hover {
        transform: translateY(-4px);
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        border-color: rgba(34, 197, 94, 0.3);
      }
      
      .cta-btn-primary {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(34, 197, 94, 0.3);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .cta-btn-primary:hover {
        background: rgba(34, 197, 94, 0.1);
        border-color: rgba(34, 197, 94, 0.6);
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(34, 197, 94, 0.2);
      }
      
      .cta-btn-secondary {
        background: rgba(34, 197, 94, 0.2);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(34, 197, 94, 0.3);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .cta-btn-secondary:hover {
        background: rgba(34, 197, 94, 0.3);
        border-color: rgba(34, 197, 94, 0.6);
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
      }
    `}</style>
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="cta-card rounded-3xl p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
          Ready to Experience the Real Jharkhand?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          Join thousands of travelers who have discovered the magic of Jharkhand through our platform
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="#"
            className="cta-btn-primary px-10 py-4 text-green-800 font-semibold rounded-full text-xl hover:scale-105 transition-transform"
          >
            Download the App
          </a>
          <a
            href="#why-jharkhand"
            className="cta-btn-secondary px-10 py-4 text-green-800 font-semibold rounded-full text-xl hover:scale-105 transition-transform"
          >
            Explore Destinations
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
