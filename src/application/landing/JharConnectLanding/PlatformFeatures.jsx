import React from 'react';
import { Map, ShoppingCart, MonitorSmartphone, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Map className="w-10 h-10 text-green-700" />, 
    title: "AI Itinerary Planner",
    description: "Personalized Itineraries, Tailored to You."
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-yellow-700" />, 
    title: "Local Marketplace",
    description: "Support Local Artisans & Homestays."
  },
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-blue-700" />, 
    title: "AR/VR Previews",
    description: "Preview Your Journey in Immersive Detail."
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-emerald-700" />, 
    title: "Real-time Assistance",
    description: "24/7 Multilingual Support."
  }
];

const PlatformFeatures = () => (
  <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
    </div>
    
    <style>{`
      .feature-card {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .feature-card:hover {
        transform: translateY(-8px) scale(1.02);
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        border-color: rgba(34, 197, 94, 0.3);
      }
      
      .feature-card:hover .feature-icon {
        transform: scale(1.1) rotate(5deg);
      }
      
      .feature-card:hover .feature-title {
        color: #059669;
      }
      
      .feature-icon {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .feature-title {
        transition: color 0.3s ease;
      }
    `}</style>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Modern Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
          Your Perfect Jharkhand Adventure
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 tracking-wide">
          Simplified
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Discover how our innovative platform makes your Jharkhand journey seamless and unforgettable
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm border border-white/30">
              <div className="feature-icon">{feature.icon}</div>
            </div>
            <h3 className="feature-title text-xl font-bold text-gray-800 mb-3 leading-tight">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
