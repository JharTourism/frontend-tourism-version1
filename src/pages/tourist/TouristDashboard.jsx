import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Car, 
  Home, 
  ShoppingBag, 
  Map, 
  MessageCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Camera,
  Heart
} from 'lucide-react';

const TouristDashboard = () => {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleAITripPlanner = () => {
    navigate('/tourist/itinerary');
  };

  const handleChatbotSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      alert(`AI Guide: "Thanks for your message: ${chatMessage}. Our AI assistant is coming soon!"`);
      setChatMessage('');
    }
  };

  const exploreCards = [
    {
      id: 'destinations',
      title: 'Destinations',
      icon: MapPin,
      description: 'Discover Jharkhand\'s hidden gems',
      gradient: 'from-green-500 to-emerald-600',
      items: ['Netarhat', 'Patratu', 'Betla National Park', 'Hundru Falls', 'Deoghar']
    },
    {
      id: 'transport',
      title: 'Transport',
      icon: Car,
      description: 'Real-time travel information',
      gradient: 'from-blue-500 to-cyan-600',
      items: ['Bus Routes', 'Train Schedules', 'Local Transport', 'Car Rentals']
    },
    {
      id: 'accommodation',
      title: 'Homestays & Hotels',
      icon: Home,
      description: 'Authentic local stays',
      gradient: 'from-purple-500 to-violet-600',
      items: ['Heritage Hotels', 'Eco Resorts', 'Local Homestays', 'Budget Stays']
    },
    {
      id: 'shopping',
      title: 'Handicrafts & Local Market',
      icon: ShoppingBag,
      description: 'Traditional crafts and souvenirs',
      gradient: 'from-orange-500 to-red-600',
      items: ['Tribal Art', 'Traditional Textiles', 'Local Markets', 'Handicrafts']
    }
  ];

  const featuredDestinations = [
    {
      name: 'Netarhat',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      description: 'Queen of Chotanagpur Plateau'
    },
    {
      name: 'Hundru Falls',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      rating: 4.6,
      description: 'Majestic waterfall in the wild'
    },
    {
      name: 'Betla National Park',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
      description: 'Wildlife sanctuary adventure'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Welcome Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80')`
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-blue-900/80 to-purple-900/80"></div>
        
        {/* Navigation */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => navigate('/role-selection')}
            className="bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Roles
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Welcome back, Tourist! 👋
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Ready to explore the untamed beauty of Jharkhand?
            </p>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Jharkhand, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* AI-powered Itinerary Planner */}
        <section className="mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AI</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                AI-Powered Itinerary Planner
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get personalized travel recommendations based on your interests, budget, and preferences. 
                Our AI will create the perfect itinerary for your Jharkhand adventure.
              </p>
              <button
                onClick={handleAITripPlanner}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Plan My Trip with AI
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDestinations.map((destination, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Jharkhand Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Explore Jharkhand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div key={card.id} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <div className="space-y-2">
                    {card.items.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                    {card.items.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{card.items.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Map className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Interactive Map
              </h2>
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <Map className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-semibold">Interactive Map Coming Soon</p>
                  <p className="text-sm">Explore Jharkhand with our interactive tourism map</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Chatbot Widget */}
      <button
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
        title="Ask Jharkhand AI Guide"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Jharkhand AI Guide</h3>
                <button
                  onClick={() => setShowChatbot(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-green-800">
                  👋 Hi! I'm your AI guide for Jharkhand tourism. Ask me anything about destinations, travel tips, or local culture!
                </p>
              </div>
              <form onSubmit={handleChatbotSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask about Jharkhand..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jharkhand Tourism</h3>
              <p className="text-gray-400">
                Discover the untamed beauty and rich heritage of Jharkhand with our digital tourism platform.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jharkhand Tourism. All rights reserved. Built for SIH 2024.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TouristDashboard;