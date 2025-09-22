import React, { useState, useRef, useEffect } from 'react';
import { Youtube } from 'lucide-react';


const cardData = [
  {
    title: "Tajmahal",
    description: "Experience the grandeur of the Tajmahal in immersive 3D. Explore its intricate architecture and rich history.",
    unitySceneUrl: '/vr-scenes/Tajmahal/index.html',
  },
  {
    title: "Betla National Park",
    description: "Discover the wild beauty of Betla National Park. Walk through lush forests and spot diverse wildlife in VR.",
    unitySceneUrl: '/vr-scenes/zoopark/index.html',
  },
];

const WhyJharkhand = () => {
  return (
    <section id="why-jharkhand" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-yellow-50 p-4">
      {/* Basic styling for the card */}
      <style>{`
        .wj-card-container {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .wj-card-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
      `}</style>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-center">
        {cardData.map((card, idx) => (
          <div
            key={card.title}
            className="wj-card-container relative rounded-3xl shadow-lg overflow-hidden flex flex-col w-full max-w-sm bg-white"
          >
            <div className="w-full h-64 bg-gray-200">
              <iframe
                title={card.title}
                src={card.unitySceneUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
              >
              </iframe>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-green-800 mb-2">{card.title}</h3>
              <p className="text-gray-700 text-base flex-1">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJharkhand;