import React from 'react';
import { Youtube } from 'lucide-react';

// Card data remains the same
const cardData = {
  title: "Nature's Masterpiece",
  description: "Explore lush forests, majestic waterfalls, and serene landscapes like Hundru Falls and Betla National Park."
};

// The path to your Unity build
const unitySceneUrl = '/vr-scenes/v4/index.html';

const SketchfabStyleCard = () => {
  // We no longer need state for hovering, modals, or VR status.
  // The React component is now much simpler.

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
      
      <div
        className="wj-card-container relative rounded-3xl shadow-lg overflow-hidden flex flex-col w-full max-w-sm bg-white"
      >
        {/* The <iframe> replaces the <img> tag. This is the core change. */}
        <div className="w-full h-64 bg-gray-200">
          <iframe
            title={cardData.title}
            src={unitySceneUrl}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            // This 'allow' attribute is the key to making VR work seamlessly
            allow="autoplay; fullscreen; xr-spatial-tracking"
          >
          </iframe>
        </div>
            
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-green-800 mb-2">{cardData.title}</h3>
          <p className="text-gray-700 text-base flex-1">{cardData.description}</p>
        </div>
      </div>
    </section>
  );
};

export default SketchfabStyleCard;