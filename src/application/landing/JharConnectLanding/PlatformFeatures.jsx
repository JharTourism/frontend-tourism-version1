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
  <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
        Your Perfect Jharkhand Adventure, Simplified.
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
