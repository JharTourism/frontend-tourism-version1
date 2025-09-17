import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Car, 
  Home, 
  ShoppingBag, 
  Map as MapIcon, 
  MessageCircle, 
  ArrowRight,
  Star,
  ChevronDown,
  Menu,
  X,
  Search,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Plane,
  Hotel,
  ShoppingCart,
  Bot,
  LayoutDashboard,
  CalendarDays,
  Bell,
  Sun,
  Moon
} from 'lucide-react';

const TouristDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const sliderRef = useRef(null);

  // Sample destinations data
  const destinations = [
    { id: 1, name: 'Netarhat', rating: 4.7, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80', description: 'Queen of Chotanagpur Plateau' },
    { id: 2, name: 'Patratu', rating: 4.5, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80', description: 'Scenic lake and dam' },
    { id: 3, name: 'Betla National Park', rating: 4.8, image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80', description: 'Wildlife sanctuary adventure' },
    { id: 4, name: 'Hundru Falls', rating: 4.6, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80', description: 'Majestic waterfall in the wild' },
    { id: 5, name: 'Deoghar', rating: 4.4, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80', description: 'Sacred temple town' }
  ];

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

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, emoji: '🏠' },
    { id: 'destinations', label: 'Destinations', icon: MapPin, emoji: '📍' },
    { id: 'itinerary', label: 'Itinerary Planner', icon: CalendarDays, emoji: '🧳' },
    { id: 'transport', label: 'Transport', icon: Car, emoji: '🚖' },
    { id: 'accommodation', label: 'Accommodation', icon: Hotel, emoji: '🏨' },
    { id: 'shopping', label: 'Shopping', icon: ShoppingCart, emoji: '🛍️' },
    { id: 'map', label: 'Map', icon: MapIcon, emoji: '🗺️' },
    { id: 'ai-chat', label: 'AI Chatbot', icon: Bot, emoji: '🤖' }
  ];

  const handleAITripPlanner = () => {
    navigate('/tourist/itinerary');
  };

  const handleChatbotSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      // Add message to chat
      setChatMessage('');
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      navigate('/role-selection');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50`}>
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className={`fixed left-0 top-0 h-full bg-white/90 backdrop-blur-lg shadow-xl border-r border-gray-200 z-50 transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900/90 border-gray-700' : ''
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div>
                  <h1 className="font-bold text-gray-800 text-lg">JharConnect</h1>
                  <p className="text-sm text-gray-500">Tourist Portal</p>
                </div>
              </motion.div>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (item.id === 'itinerary') {
                    handleAITripPlanner();
                  } else if (item.id === 'ai-chat') {
                    setShowChatbot(true);
                  }
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  item.id === 'dashboard' 
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                } ${isDarkMode ? 'hover:bg-gray-800' : ''}`}
              >
                <span className="text-xl">{item.emoji}</span>
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className={`w-full flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 ${isDarkMode ? 'hover:bg-red-900/20' : ''}`}
            >
              <span className="text-xl">🚪</span>
              {isSidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-medium"
                >
                  Logout
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-80' : 'ml-20'}`}>
        {/* Top Navbar */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm"
        >
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations, activities..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-800">Tourist User</p>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content Area */}
        <main className="p-6 space-y-8">
          {/* Welcome Hero Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
                  <p className="text-xl opacity-90 mb-4">Ready to explore Jharkhand's amazing destinations?</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>Currently in Ranchi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-300" />
                      <span>Premium Tourist</span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-6xl">🏔️</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Itinerary Planner Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Itinerary Planner</h2>
                  <p className="text-gray-600">Get personalized itineraries powered by artificial intelligence</p>
                </div>
              </div>
              <button
                onClick={handleAITripPlanner}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Plan My Trip with AI
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Featured Destinations Carousel */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Featured Destinations</h2>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {destinations.map((destination) => (
                  <div key={destination.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      <div className="relative h-64 rounded-xl overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-2xl font-bold">{destination.name}</h3>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{destination.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{destination.name}</h3>
                        <p className="text-gray-600 mb-6">{destination.description}</p>
                        <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                          Explore Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Explore Jharkhand Grid */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Jharkhand</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exploreCards.map((card) => (
                <motion.div
                  key={card.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.items.slice(0, 3).map((item, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {item}
                      </span>
                    ))}
                    {card.items.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{card.items.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Map Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Interactive Map</h2>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                Coming Soon
              </span>
            </div>
            <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                <p className="text-gray-500">Real-time location tracking and route planning coming soon!</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      {/* AI Chatbot Drawer */}
      <AnimatePresence>
        {showChatbot && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowChatbot(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-96 bg-white/95 backdrop-blur-lg shadow-2xl border-l border-gray-200 z-50"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Bot className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Jharkhand AI Guide</h3>
                        <p className="text-sm opacity-90">Your travel companion</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowChatbot(false)}
                      className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-xl p-3 max-w-xs">
                      <p className="text-sm">Hello! I'm your AI travel guide. How can I help you plan your Jharkhand adventure?</p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t border-gray-200">
                  <form onSubmit={handleChatbotSubmit} className="flex gap-3">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Ask me anything about Jharkhand..."
                      className="flex-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TouristDashboard;