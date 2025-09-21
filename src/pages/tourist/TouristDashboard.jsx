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
  Heart,
  Search,
  Filter,
  Bell,
  User,
  Menu,
  X,
  ChevronRight,
  Play,
  Bookmark,
  Share2,
  Navigation,
  Calendar,
  TrendingUp,
  Award,
  Globe,
  Zap
} from 'lucide-react';

const TouristDashboard = () => {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [activeTab, setActiveTab] = useState('explore');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  const quickActions = [
    {
      id: 'ai-planner',
      title: 'AI Trip Planner',
      description: 'Get personalized recommendations',
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500',
      action: handleAITripPlanner
    },
    {
      id: 'destinations',
      title: 'Top Destinations',
      description: 'Explore popular places',
      icon: MapPin,
      gradient: 'from-green-500 to-emerald-500',
      action: () => navigate('/tourist/destinations')
    },
    {
      id: 'accommodation',
      title: 'Find Stays',
      description: 'Hotels & homestays',
      icon: Home,
      gradient: 'from-blue-500 to-cyan-500',
      action: () => navigate('/tourist/accommodation')
    },
    {
      id: 'transport',
      title: 'Transport',
      description: 'Book your travel',
      icon: Car,
      gradient: 'from-orange-500 to-red-500',
      action: () => navigate('/tourist/transport')
    }
  ];

  const featuredDestinations = [
    {
      name: 'Netarhat',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      reviews: 1240,
      description: 'Queen of Chotanagpur Plateau',
      price: '₹2,500',
      duration: '2-3 days',
      category: 'Hill Station',
      isBookmarked: false
    },
    {
      name: 'Hundru Falls',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      rating: 4.6,
      reviews: 890,
      description: 'Majestic waterfall in the wild',
      price: '₹1,200',
      duration: '1 day',
      category: 'Waterfall',
      isBookmarked: true
    },
    {
      name: 'Betla National Park',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviews: 1560,
      description: 'Wildlife sanctuary adventure',
      price: '₹3,000',
      duration: '3-4 days',
      category: 'Wildlife',
      isBookmarked: false
    },
    {
      name: 'Deoghar',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
      rating: 4.5,
      reviews: 2100,
      description: 'Spiritual and cultural hub',
      price: '₹1,800',
      duration: '2 days',
      category: 'Spiritual',
      isBookmarked: true
    }
  ];

  const stats = [
    { label: 'Places Visited', value: '12', icon: MapPin, color: 'text-green-500' },
    { label: 'Days in Jharkhand', value: '8', icon: Calendar, color: 'text-blue-500' },
    { label: 'Photos Taken', value: '156', icon: Camera, color: 'text-purple-500' },
    { label: 'Reviews Written', value: '5', icon: Star, color: 'text-yellow-500' }
  ];

  const recentActivities = [
    { action: 'Booked accommodation at Netarhat', time: '2 hours ago', icon: Home },
    { action: 'Added Hundru Falls to wishlist', time: '1 day ago', icon: Heart },
    { action: 'Reviewed Betla National Park', time: '3 days ago', icon: Star },
    { action: 'Shared photos from Deoghar', time: '1 week ago', icon: Share2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">JharConnect</h1>
                <p className="text-xs text-gray-500">Tourist Dashboard</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations, hotels, activities..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <User className="w-6 h-6" />
              </button>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 text-gray-400 hover:text-gray-600"
              >
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Welcome back, Explorer! 👋</h2>
              <p className="text-green-100 mb-6">Ready to discover more of Jharkhand's hidden treasures?</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-2">
                  <MapPin className="w-4 h-4" />
                  <span>Currently in Ranchi</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-2">
                  <Star className="w-4 h-4" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>12 places visited</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={action.action}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group text-left"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
            {[
              { id: 'explore', label: 'Explore' },
              { id: 'bookings', label: 'My Bookings' },
              { id: 'wishlist', label: 'Wishlist' },
              { id: 'recent', label: 'Recent' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'explore' && (
          <div className="space-y-8">
            {/* Featured Destinations */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Featured Destinations</h3>
                <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                  <span>View all</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredDestinations.map((destination, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <Bookmark className={`w-4 h-4 ${destination.isBookmarked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                        </button>
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                          <Share2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{destination.rating}</span>
                        <span className="text-xs text-gray-600">({destination.reviews})</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{destination.name}</h4>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{destination.category}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{destination.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{destination.duration}</span>
                        </div>
                        <div className="font-semibold text-gray-900">{destination.price}</div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                        Explore Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Interactive Map</h3>
                <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                  <Navigation className="w-4 h-4" />
                  <span>Open in Maps</span>
                </button>
              </div>
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Map className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Interactive Map Coming Soon</p>
                  <p className="text-sm">Explore Jharkhand with our interactive tourism map</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'recent' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
        title="Ask Jharkhand AI Guide"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Jharkhand AI Guide</h3>
                    <p className="text-sm text-gray-500">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChatbot(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-green-50 rounded-xl p-4 mb-4">
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
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="bg-white h-full w-80 shadow-xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Menu</h3>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-600" />
                <span>Profile</span>
              </button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 flex items-center space-x-3">
                <Bookmark className="w-5 h-5 text-gray-600" />
                <span>Wishlist</span>
              </button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-600" />
                <span>Bookings</span>
              </button>
              <button
                onClick={() => navigate('/role-selection')}
                className="w-full text-left p-3 rounded-xl hover:bg-gray-50 flex items-center space-x-3"
              >
                <ArrowRight className="w-5 h-5 text-gray-600 rotate-180" />
                <span>Back to Roles</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TouristDashboard;