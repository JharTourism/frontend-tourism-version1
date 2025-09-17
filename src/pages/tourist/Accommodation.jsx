import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Hotel, 
  MapPin, 
  Star, 
  Search, 
  Filter,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Dumbbell,
  Waves,
  Mountain,
  Heart,
  Share2,
  Phone,
  Navigation,
  Calendar,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Accommodation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [expandedCard, setExpandedCard] = useState(null);

  const accommodationTypes = [
    { id: 'all', label: 'All Stays', icon: Home, count: 48 },
    { id: 'hotel', label: 'Hotels', icon: Hotel, count: 20 },
    { id: 'homestay', label: 'Homestays', icon: Home, count: 15 },
    { id: 'resort', label: 'Resorts', icon: Mountain, count: 8 },
    { id: 'guesthouse', label: 'Guest Houses', icon: Home, count: 5 }
  ];

  const locations = [
    'Netarhat',
    'Patratu',
    'Betla',
    'Ranchi',
    'Jamshedpur',
    'Deoghar',
    'Hazaribagh',
    'Dhanbad'
  ];

  const accommodations = [
    {
      id: 1,
      name: 'Netarhat Hill Resort',
      type: 'resort',
      location: 'Netarhat',
      rating: 4.8,
      reviews: 234,
      price: '₹4,500',
      originalPrice: '₹5,500',
      discount: '18%',
      distance: '0.5 km from Netarhat Peak',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Luxury resort with panoramic views of the Chotanagpur Plateau. Perfect for nature lovers and adventure enthusiasts.',
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Swimming Pool', 'Spa', 'Gym', 'Room Service', 'Laundry'],
      facilities: ['24/7 Front Desk', 'Concierge', 'Tour Desk', 'Airport Shuttle', 'Business Center'],
      roomTypes: ['Deluxe Room', 'Suite', 'Family Room'],
      policies: ['Check-in: 2:00 PM', 'Check-out: 11:00 AM', 'Free Cancellation', 'Pet Friendly'],
      contact: '+91 98765 43210',
      availability: 'Available',
      coordinates: { lat: 23.4737, lng: 84.2725 }
    },
    {
      id: 2,
      name: 'Patratu Lake View Homestay',
      type: 'homestay',
      location: 'Patratu',
      rating: 4.6,
      reviews: 189,
      price: '₹2,200',
      originalPrice: null,
      discount: null,
      distance: '0.2 km from Patratu Lake',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Authentic homestay experience with local family. Enjoy traditional Jharkhand cuisine and warm hospitality.',
      amenities: ['Free WiFi', 'Parking', 'Home-cooked Meals', 'Garden', 'Terrace', 'Local Tours'],
      facilities: ['Pickup Service', 'Cultural Shows', 'Cooking Classes', 'Local Guide'],
      roomTypes: ['Standard Room', 'Family Room'],
      policies: ['Check-in: 1:00 PM', 'Check-out: 10:00 AM', 'Breakfast Included'],
      contact: '+91 87654 32109',
      availability: 'Available',
      coordinates: { lat: 23.5167, lng: 85.3167 }
    },
    {
      id: 3,
      name: 'Betla Wildlife Lodge',
      type: 'hotel',
      location: 'Betla',
      rating: 4.4,
      reviews: 156,
      price: '₹3,800',
      originalPrice: '₹4,200',
      discount: '10%',
      distance: '1 km from Betla National Park',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Wildlife-themed accommodation with guided safari tours. Perfect for nature enthusiasts and wildlife photographers.',
      amenities: ['Free WiFi', 'Parking', 'Restaurant', 'Safari Tours', 'Wildlife Photography', 'Nature Walks'],
      facilities: ['Safari Booking', 'Wildlife Guide', 'Camera Rental', 'Binocular Rental'],
      roomTypes: ['Standard Room', 'Deluxe Room', 'Safari Tent'],
      policies: ['Check-in: 12:00 PM', 'Check-out: 10:00 AM', 'Safari Package Available'],
      contact: '+91 76543 21098',
      availability: 'Limited',
      coordinates: { lat: 23.9333, lng: 84.1333 }
    },
    {
      id: 4,
      name: 'Ranchi Heritage Hotel',
      type: 'hotel',
      location: 'Ranchi',
      rating: 4.7,
      reviews: 298,
      price: '₹5,200',
      originalPrice: null,
      discount: null,
      distance: 'City Center',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Luxury heritage hotel in the heart of Ranchi with modern amenities and traditional architecture.',
      amenities: ['Free WiFi', 'Valet Parking', 'Fine Dining', 'Swimming Pool', 'Spa', 'Gym', 'Business Center', 'Conference Hall'],
      facilities: ['Airport Transfer', 'City Tours', 'Concierge', 'Laundry Service', 'Currency Exchange'],
      roomTypes: ['Executive Room', 'Deluxe Suite', 'Presidential Suite'],
      policies: ['Check-in: 3:00 PM', 'Check-out: 12:00 PM', '24/7 Room Service'],
      contact: '+91 651 234 5678',
      availability: 'Available',
      coordinates: { lat: 23.3441, lng: 85.3096 }
    },
    {
      id: 5,
      name: 'Deoghar Guest House',
      type: 'guesthouse',
      location: 'Deoghar',
      rating: 4.2,
      reviews: 145,
      price: '₹1,800',
      originalPrice: null,
      discount: null,
      distance: '0.8 km from Baidyanath Temple',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Comfortable guest house near the sacred Baidyanath Temple. Clean rooms and vegetarian meals available.',
      amenities: ['Free WiFi', 'Parking', 'Vegetarian Meals', 'Temple Tours', 'Prayer Hall'],
      facilities: ['Temple Guide', 'Puja Arrangements', 'Local Transport'],
      roomTypes: ['Standard Room', 'Deluxe Room'],
      policies: ['Check-in: 11:00 AM', 'Check-out: 9:00 AM', 'Vegetarian Only'],
      contact: '+91 98765 43212',
      availability: 'Available',
      coordinates: { lat: 24.4833, lng: 86.7000 }
    }
  ];

  const toggleFavorite = (accommodationId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(accommodationId)) {
      newFavorites.delete(accommodationId);
    } else {
      newFavorites.add(accommodationId);
    }
    setFavorites(newFavorites);
  };

  const toggleExpanded = (accommodationId) => {
    setExpandedCard(expandedCard === accommodationId ? null : accommodationId);
  };

  const getFilteredAccommodations = () => {
    return accommodations.filter(acc => {
      const matchesSearch = acc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           acc.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'all' || acc.type === selectedType;
      const matchesLocation = !selectedLocation || acc.location === selectedLocation;
      return matchesSearch && matchesType && matchesLocation;
    });
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available': return 'text-green-600 bg-green-100';
      case 'Limited': return 'text-yellow-600 bg-yellow-100';
      case 'Fully Booked': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const AccommodationCard = ({ accommodation }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
            {accommodation.type}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(accommodation.availability)}`}>
            {accommodation.availability}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => toggleFavorite(accommodation.id)}
            className={`p-2 rounded-full transition-colors ${
              favorites.has(accommodation.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${favorites.has(accommodation.id) ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 bg-white/90 rounded-full text-gray-600 hover:text-blue-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold">{accommodation.rating}</span>
            <span className="text-sm opacity-90">({accommodation.reviews} reviews)</span>
          </div>
        </div>
        {accommodation.discount && (
          <div className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
            {accommodation.discount} OFF
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{accommodation.name}</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span>{accommodation.location}</span>
              <span className="text-sm">• {accommodation.distance}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{accommodation.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">{accommodation.price}</span>
            {accommodation.originalPrice && (
              <span className="text-lg text-gray-500 line-through">{accommodation.originalPrice}</span>
            )}
            <span className="text-sm text-gray-500">/ night</span>
          </div>
          <button
            onClick={() => toggleExpanded(accommodation.id)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {expandedCard === accommodation.id ? 'Show Less' : 'Show More'}
            {expandedCard === accommodation.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Navigation className="w-4 h-4" />
            View on Map
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            <Phone className="w-4 h-4" />
            Call
          </button>
        </div>

        {expandedCard === accommodation.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pt-6 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Amenities</h4>
                <div className="flex flex-wrap gap-2">
                  {accommodation.amenities.map((amenity, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full flex items-center gap-1">
                      {amenity === 'Free WiFi' && <Wifi className="w-3 h-3" />}
                      {amenity === 'Parking' && <Car className="w-3 h-3" />}
                      {amenity === 'Restaurant' && <Utensils className="w-3 h-3" />}
                      {amenity === 'Swimming Pool' && <Waves className="w-3 h-3" />}
                      {amenity === 'Gym' && <Dumbbell className="w-3 h-3" />}
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Room Types</h4>
                <div className="space-y-2">
                  {accommodation.roomTypes.map((roomType, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {roomType}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Policies</h4>
              <div className="flex flex-wrap gap-2">
                {accommodation.policies.map((policy, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    {policy}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Contact & Location</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  {accommodation.contact}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {accommodation.distance}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Accommodation 🏨</h1>
            <p className="text-xl opacity-90">Find your perfect stay in Jharkhand</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">🏨</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search hotels, resorts, homestays..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
            More Filters
          </button>
        </div>
      </motion.div>

      {/* Accommodation Types */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex flex-wrap gap-3">
          {accommodationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                selectedType === type.id
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <type.icon className="w-5 h-5" />
              <span className="font-medium">{type.label}</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                {type.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Accommodations Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {getFilteredAccommodations().map((accommodation, index) => (
          <motion.div
            key={accommodation.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <AccommodationCard accommodation={accommodation} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {getFilteredAccommodations().length === 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20 text-center"
        >
          <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No accommodations found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default Accommodation;

