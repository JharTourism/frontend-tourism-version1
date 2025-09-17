import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Map as MapIcon, 
  MapPin, 
  Navigation, 
  Search, 
  Filter,
  Route,
  Clock,
  Star,
  Info,
  Layers,
  Compass,
  ZoomIn,
  ZoomOut,
  Locate,
  Settings,
  Layers3,
  Mountain,
  Waves,
  Camera,
  Coffee,
  Home,
  Car,
  Train,
  Plane,
  Heart,
  Share2
} from 'lucide-react';

const Map = () => {
  const [selectedLayer, setSelectedLayer] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [mapView, setMapView] = useState('satellite');

  const mapLayers = [
    { id: 'all', label: 'All Points', icon: Layers, color: 'blue' },
    { id: 'attractions', label: 'Tourist Attractions', icon: Mountain, color: 'green' },
    { id: 'hotels', label: 'Hotels & Stays', icon: Home, color: 'purple' },
    { id: 'restaurants', label: 'Restaurants', icon: Coffee, color: 'orange' },
    { id: 'transport', label: 'Transport Hubs', icon: Car, color: 'red' },
    { id: 'photospots', label: 'Photo Spots', icon: Camera, color: 'pink' }
  ];

  const locations = [
    'Ranchi',
    'Netarhat',
    'Patratu',
    'Betla',
    'Deoghar',
    'Jamshedpur',
    'Dhanbad',
    'Hazaribagh'
  ];

  const mapPoints = [
    {
      id: 1,
      name: 'Netarhat Peak',
      type: 'attractions',
      category: 'Hill Station',
      rating: 4.8,
      reviews: 234,
      description: 'Queen of Chotanagpur Plateau with breathtaking views',
      coordinates: { lat: 23.4737, lng: 84.2725 },
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
      facilities: ['Viewing Point', 'Parking', 'Restaurant', 'Photo Spot'],
      distance: '156 km from Ranchi',
      bestTime: 'October - March',
      tags: ['Nature', 'Sunrise', 'Adventure', 'Photography']
    },
    {
      id: 2,
      name: 'Patratu Lake',
      type: 'attractions',
      category: 'Lake & Dam',
      rating: 4.6,
      reviews: 189,
      description: 'Beautiful artificial lake with scenic surroundings',
      coordinates: { lat: 23.5167, lng: 85.3167 },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      facilities: ['Boat Rides', 'Parking', 'Picnic Spots', 'Restaurant'],
      distance: '40 km from Ranchi',
      bestTime: 'September - April',
      tags: ['Water Sports', 'Nature', 'Picnic', 'Boating']
    },
    {
      id: 3,
      name: 'Betla National Park',
      type: 'attractions',
      category: 'Wildlife Sanctuary',
      rating: 4.9,
      reviews: 156,
      description: 'Home to tigers, elephants, and diverse wildlife',
      coordinates: { lat: 23.9333, lng: 84.1333 },
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80',
      facilities: ['Safari Tours', 'Accommodation', 'Restaurant', 'Wildlife Viewing'],
      distance: '140 km from Ranchi',
      bestTime: 'November - March',
      tags: ['Wildlife', 'Safari', 'Nature', 'Photography']
    },
    {
      id: 4,
      name: 'Netarhat Hill Resort',
      type: 'hotels',
      category: 'Resort',
      rating: 4.8,
      reviews: 234,
      description: 'Luxury resort with panoramic views',
      coordinates: { lat: 23.4740, lng: 84.2730 },
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
      facilities: ['WiFi', 'Parking', 'Restaurant', 'Swimming Pool', 'Spa'],
      distance: '0.5 km from Netarhat Peak',
      bestTime: 'Year Round',
      tags: ['Luxury', 'Resort', 'Spa', 'Fine Dining']
    },
    {
      id: 5,
      name: 'Ranchi Heritage Hotel',
      type: 'hotels',
      category: 'Hotel',
      rating: 4.7,
      reviews: 298,
      description: 'Luxury heritage hotel in city center',
      coordinates: { lat: 23.3441, lng: 85.3096 },
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80',
      facilities: ['WiFi', 'Valet Parking', 'Fine Dining', 'Business Center'],
      distance: 'City Center',
      bestTime: 'Year Round',
      tags: ['Heritage', 'Business', 'Luxury', 'City Center']
    },
    {
      id: 6,
      name: 'Tribal Cuisine Restaurant',
      type: 'restaurants',
      category: 'Local Cuisine',
      rating: 4.5,
      reviews: 145,
      description: 'Authentic tribal food and traditional Jharkhand cuisine',
      coordinates: { lat: 23.3445, lng: 85.3100 },
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80',
      facilities: ['Traditional Food', 'Vegetarian Options', 'Parking', 'WiFi'],
      distance: 'City Center',
      bestTime: 'Lunch & Dinner',
      tags: ['Traditional', 'Local Food', 'Cultural', 'Authentic']
    },
    {
      id: 7,
      name: 'Ranchi Railway Station',
      type: 'transport',
      category: 'Railway Station',
      rating: 4.2,
      reviews: 89,
      description: 'Main railway station connecting Jharkhand to other states',
      coordinates: { lat: 23.3500, lng: 85.3200 },
      image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=400&q=80',
      facilities: ['Ticket Counter', 'Waiting Room', 'Food Court', 'Parking'],
      distance: 'City Center',
      bestTime: '24/7',
      tags: ['Transport', 'Railway', 'Connections', 'Public']
    },
    {
      id: 8,
      name: 'Hundru Falls Viewpoint',
      type: 'photospots',
      category: 'Photo Spot',
      rating: 4.7,
      reviews: 298,
      description: 'Best viewpoint for capturing Hundru Falls',
      coordinates: { lat: 23.4833, lng: 85.6167 },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
      facilities: ['Viewing Platform', 'Safety Railings', 'Parking', 'Guide Services'],
      distance: '45 km from Ranchi',
      bestTime: 'July - October',
      tags: ['Photography', 'Waterfall', 'Nature', 'Scenic']
    }
  ];

  const toggleFavorite = (pointId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(pointId)) {
      newFavorites.delete(pointId);
    } else {
      newFavorites.add(pointId);
    }
    setFavorites(newFavorites);
  };

  const getFilteredPoints = () => {
    return mapPoints.filter(point => {
      const matchesLayer = selectedLayer === 'all' || point.type === selectedLayer;
      const matchesLocation = !selectedLocation || point.name.toLowerCase().includes(selectedLocation.toLowerCase());
      return matchesLayer && matchesLocation;
    });
  };

  const MapPointCard = ({ point }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={point.image}
            alt={point.name}
            className="w-20 h-20 rounded-xl object-cover"
          />
          <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center ${
            point.type === 'attractions' ? 'bg-green-500' :
            point.type === 'hotels' ? 'bg-purple-500' :
            point.type === 'restaurants' ? 'bg-orange-500' :
            point.type === 'transport' ? 'bg-red-500' :
            'bg-pink-500'
          }`}>
            <MapPin className="w-3 h-3 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{point.name}</h3>
              <p className="text-sm text-gray-600">{point.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{point.rating}</span>
              </div>
              <button
                onClick={() => toggleFavorite(point.id)}
                className={`p-1 rounded-full transition-colors ${
                  favorites.has(point.id) 
                    ? 'text-red-500' 
                    : 'text-gray-400 hover:text-red-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${favorites.has(point.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{point.description}</p>
          
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {point.distance}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {point.bestTime}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {point.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {tag}
              </span>
            ))}
            {point.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{point.tags.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
              <Navigation className="w-3 h-3" />
              Navigate
            </button>
            <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors">
              <Info className="w-3 h-3" />
              Details
            </button>
            <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
              <Share2 className="w-3 h-3" />
              Share
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Interactive Map 🗺️</h1>
            <p className="text-xl opacity-90">Explore Jharkhand with our interactive map</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">🗺️</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Map Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="relative h-96 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-xl overflow-hidden">
          {/* Placeholder Map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapIcon className="w-24 h-24 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500 mb-4">Real-time location tracking and route planning coming soon!</p>
              <div className="flex items-center justify-center gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Enable Location
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="p-2 bg-white/90 rounded-lg shadow-lg hover:bg-white transition-colors">
              <ZoomIn className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white/90 rounded-lg shadow-lg hover:bg-white transition-colors">
              <ZoomOut className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white/90 rounded-lg shadow-lg hover:bg-white transition-colors">
              <Locate className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white/90 rounded-lg shadow-lg hover:bg-white transition-colors">
              <Compass className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          
          {/* Map View Toggle */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button 
              onClick={() => setMapView('satellite')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                mapView === 'satellite' ? 'bg-blue-500 text-white' : 'bg-white/90 text-gray-600'
              }`}
            >
              Satellite
            </button>
            <button 
              onClick={() => setMapView('street')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                mapView === 'street' ? 'bg-blue-500 text-white' : 'bg-white/90 text-gray-600'
              }`}
            >
              Street
            </button>
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search locations or attractions..."
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </motion.div>

      {/* Map Layers */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">Map Layers</h2>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live Updates
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {mapLayers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(layer.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                selectedLayer === layer.id
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <layer.icon className="w-5 h-5" />
              <span className="font-medium">{layer.label}</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                {mapPoints.filter(p => layer.id === 'all' || p.type === layer.id).length}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Points List */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">Points of Interest</h2>
          <div className="text-sm text-gray-600">
            {getFilteredPoints().length} locations found
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {getFilteredPoints().map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <MapPointCard point={point} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Empty State */}
      {getFilteredPoints().length === 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20 text-center"
        >
          <MapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No locations found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default Map;
