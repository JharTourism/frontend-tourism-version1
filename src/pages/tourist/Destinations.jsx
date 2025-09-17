import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Star, 
  Clock, 
  Users, 
  Search, 
  Filter,
  Heart,
  Share2,
  Calendar,
  Navigation,
  Camera,
  Info,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState(new Set());
  const [expandedCard, setExpandedCard] = useState(null);

  const categories = [
    { id: 'all', label: 'All Destinations', count: 25 },
    { id: 'nature', label: 'Nature & Wildlife', count: 8 },
    { id: 'culture', label: 'Cultural Sites', count: 6 },
    { id: 'adventure', label: 'Adventure Sports', count: 5 },
    { id: 'religious', label: 'Religious Sites', count: 4 },
    { id: 'heritage', label: 'Heritage Sites', count: 2 }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Netarhat',
      title: 'Queen of Chotanagpur Plateau',
      category: 'nature',
      rating: 4.8,
      reviews: 234,
      duration: '2-3 days',
      bestTime: 'October - March',
      difficulty: 'Easy',
      price: '₹3,000 - ₹8,000',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Netarhat is a beautiful hill station in Jharkhand, known for its scenic beauty and pleasant weather. Often called the "Queen of Chotanagpur Plateau", it offers breathtaking views and a perfect escape from city life.',
      highlights: [
        'Magnificent sunset and sunrise views',
        'Dense forests and wildlife',
        'Pleasant weather throughout the year',
        'Adventure activities like trekking',
        'Local tribal culture and handicrafts'
      ],
      activities: [
        'Sunrise/Sunset viewing at Netarhat Peak',
        'Trekking through dense forests',
        'Wildlife photography',
        'Local market shopping',
        'Cultural performances'
      ],
      location: 'Netarhat, Jharkhand',
      distance: '156 km from Ranchi',
      coordinates: { lat: 23.4737, lng: 84.2725 },
      facilities: ['Parking', 'Restaurants', 'Accommodation', 'Guided Tours', 'Medical Facilities'],
      nearbyAttractions: ['Lodh Falls', 'Betla National Park', 'Patratu Lake']
    },
    {
      id: 2,
      name: 'Patratu Lake',
      title: 'Scenic Lake and Dam',
      category: 'nature',
      rating: 4.6,
      reviews: 189,
      duration: '1-2 days',
      bestTime: 'September - April',
      difficulty: 'Easy',
      price: '₹1,500 - ₹4,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Patratu Lake is a beautiful artificial lake formed by the Patratu Dam. It offers stunning views, water sports, and is surrounded by lush green hills.',
      highlights: [
        'Boat rides and water sports',
        'Scenic dam views',
        'Picnic spots by the lake',
        'Adventure activities',
        'Local cuisine and culture'
      ],
      activities: [
        'Boat riding and kayaking',
        'Fishing',
        'Photography',
        'Picnic by the lake',
        'Nature walks'
      ],
      location: 'Patratu, Jharkhand',
      distance: '40 km from Ranchi',
      coordinates: { lat: 23.5167, lng: 85.3167 },
      facilities: ['Parking', 'Boat Services', 'Restaurants', 'Accommodation', 'Restrooms'],
      nearbyAttractions: ['Netarhat', 'Ranchi', 'Hazaribagh']
    },
    {
      id: 3,
      name: 'Betla National Park',
      title: 'Wildlife Sanctuary Adventure',
      category: 'nature',
      rating: 4.9,
      reviews: 156,
      duration: '3-4 days',
      bestTime: 'November - March',
      difficulty: 'Moderate',
      price: '₹4,000 - ₹12,000',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Betla National Park is one of the most important wildlife sanctuaries in Jharkhand, home to tigers, elephants, and diverse flora and fauna.',
      highlights: [
        'Tiger and elephant spotting',
        'Diverse wildlife',
        'Ancient forts and ruins',
        'Guided safari tours',
        'Eco-tourism activities'
      ],
      activities: [
        'Wildlife safari',
        'Bird watching',
        'Trekking',
        'Photography',
        'Nature education tours'
      ],
      location: 'Betla, Jharkhand',
      distance: '140 km from Ranchi',
      coordinates: { lat: 23.9333, lng: 84.1333 },
      facilities: ['Safari Services', 'Accommodation', 'Restaurants', 'Guided Tours', 'Parking'],
      nearbyAttractions: ['Palamau Fort', 'Lodh Falls', 'Netarhat']
    },
    {
      id: 4,
      name: 'Hundru Falls',
      title: 'Majestic Waterfall in the Wild',
      category: 'nature',
      rating: 4.7,
      reviews: 298,
      duration: '1 day',
      bestTime: 'July - October',
      difficulty: 'Easy',
      price: '₹800 - ₹2,500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Hundru Falls is one of the most spectacular waterfalls in Jharkhand, cascading down from a height of 320 feet into a deep pool.',
      highlights: [
        'Spectacular 320ft waterfall',
        'Rainbow formations',
        'Adventure activities',
        'Scenic picnic spots',
        'Photography opportunities'
      ],
      activities: [
        'Waterfall viewing',
        'Rock climbing',
        'Picnic by the falls',
        'Photography',
        'Nature walks'
      ],
      location: 'Hundru, Jharkhand',
      distance: '45 km from Ranchi',
      coordinates: { lat: 23.4833, lng: 85.6167 },
      facilities: ['Parking', 'Viewing Points', 'Restaurants', 'Restrooms', 'Safety Railings'],
      nearbyAttractions: ['Jonha Falls', 'Dassam Falls', 'Ranchi']
    },
    {
      id: 5,
      name: 'Deoghar Temple',
      title: 'Sacred Temple Town',
      category: 'religious',
      rating: 4.5,
      reviews: 445,
      duration: '1-2 days',
      bestTime: 'October - March',
      difficulty: 'Easy',
      price: '₹1,000 - ₹3,000',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80'
      ],
      description: 'Deoghar is a famous religious destination known for the Baidyanath Temple, one of the 12 Jyotirlingas in India.',
      highlights: [
        'Baidyanath Jyotirlinga Temple',
        'Spiritual atmosphere',
        'Traditional architecture',
        'Religious festivals',
        'Local handicrafts and markets'
      ],
      activities: [
        'Temple visits and prayers',
        'Religious ceremonies',
        'Local market shopping',
        'Cultural experiences',
        'Photography'
      ],
      location: 'Deoghar, Jharkhand',
      distance: '280 km from Ranchi',
      coordinates: { lat: 24.4833, lng: 86.7000 },
      facilities: ['Temple Services', 'Accommodation', 'Restaurants', 'Parking', 'Medical Facilities'],
      nearbyAttractions: ['Basukinath Temple', 'Nandan Pahar', 'Trikut Hills']
    }
  ];

  const toggleFavorite = (destinationId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(destinationId)) {
      newFavorites.delete(destinationId);
    } else {
      newFavorites.add(destinationId);
    }
    setFavorites(newFavorites);
  };

  const toggleExpanded = (destinationId) => {
    setExpandedCard(expandedCard === destinationId ? null : destinationId);
  };

  const getFilteredDestinations = () => {
    return destinations.filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const DestinationCard = ({ destination }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
            {destination.category}
          </span>
          <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
            {destination.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => toggleFavorite(destination.id)}
            className={`p-2 rounded-full transition-colors ${
              favorites.has(destination.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${favorites.has(destination.id) ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 bg-white/90 rounded-full text-gray-600 hover:text-blue-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold">{destination.rating}</span>
            <span className="text-sm opacity-90">({destination.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{destination.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{destination.title}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {destination.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {destination.distance}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {destination.bestTime}
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-green-600">{destination.price}</div>
          <button
            onClick={() => toggleExpanded(destination.id)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {expandedCard === destination.id ? 'Show Less' : 'Show More'}
            {expandedCard === destination.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Navigation className="w-4 h-4" />
            View on Map
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            <Calendar className="w-4 h-4" />
            Plan Visit
          </button>
        </div>

        {expandedCard === destination.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Activities</h4>
                <ul className="space-y-2">
                  {destination.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Facilities</h4>
              <div className="flex flex-wrap gap-2">
                {destination.facilities.map((facility, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {facility}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Nearby Attractions</h4>
              <div className="flex flex-wrap gap-2">
                {destination.nearbyAttractions.map((attraction, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    {attraction}
                  </span>
                ))}
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
        className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Discover Jharkhand 🏔️</h1>
            <p className="text-xl opacity-90">Explore the hidden gems and breathtaking destinations</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">📍</span>
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
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search destinations, activities, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="font-medium">{category.label}</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Destinations Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {getFilteredDestinations().map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <DestinationCard destination={destination} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {getFilteredDestinations().length === 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20 text-center"
        >
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No destinations found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default Destinations;

