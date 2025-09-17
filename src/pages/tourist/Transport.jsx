import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bus, 
  Train, 
  Car, 
  Plane, 
  MapPin, 
  Clock, 
  Users, 
  Search, 
  Filter,
  Navigation,
  Phone,
  Calendar,
  Star,
  Route,
  Wifi,
  Coffee,
  Utensils,
  ArrowRight,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Transport = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRoute, setSelectedRoute] = useState('');

  const transportTypes = [
    { id: 'all', label: 'All Transport', icon: Route, count: 45 },
    { id: 'bus', label: 'Bus Services', icon: Bus, count: 20 },
    { id: 'train', label: 'Train Routes', icon: Train, count: 15 },
    { id: 'taxi', label: 'Taxi & Cab', icon: Car, count: 8 },
    { id: 'flight', label: 'Flights', icon: Plane, count: 2 }
  ];

  const popularRoutes = [
    'Ranchi to Netarhat',
    'Ranchi to Patratu',
    'Ranchi to Betla',
    'Ranchi to Deoghar',
    'Jamshedpur to Ranchi',
    'Dhanbad to Ranchi'
  ];

  const busServices = [
    {
      id: 1,
      name: 'Jharkhand State Road Transport',
      type: 'bus',
      route: 'Ranchi → Netarhat',
      departure: '06:00 AM',
      arrival: '11:30 AM',
      duration: '5h 30m',
      price: '₹450',
      seats: 42,
      available: 15,
      rating: 4.2,
      facilities: ['AC', 'Wifi', 'Water Bottle', 'Blanket'],
      operator: 'JSRTC',
      contact: '+91 651 234 5678',
      status: 'On Time'
    },
    {
      id: 2,
      name: 'Royal Travels',
      type: 'bus',
      route: 'Ranchi → Patratu',
      departure: '07:30 AM',
      arrival: '09:15 AM',
      duration: '1h 45m',
      price: '₹180',
      seats: 35,
      available: 8,
      rating: 4.5,
      facilities: ['AC', 'Wifi', 'Snacks'],
      operator: 'Royal Travels',
      contact: '+91 98765 43210',
      status: 'Delayed (15 min)'
    },
    {
      id: 3,
      name: 'Green Valley Express',
      type: 'bus',
      route: 'Ranchi → Betla National Park',
      departure: '08:00 AM',
      arrival: '12:30 PM',
      duration: '4h 30m',
      price: '₹380',
      seats: 40,
      available: 22,
      rating: 4.3,
      facilities: ['AC', 'Water Bottle', 'Blanket'],
      operator: 'Green Valley',
      contact: '+91 87654 32109',
      status: 'On Time'
    }
  ];

  const trainServices = [
    {
      id: 4,
      name: 'Ranchi Express',
      type: 'train',
      route: 'Ranchi → Dhanbad',
      departure: '06:45 AM',
      arrival: '11:20 AM',
      duration: '4h 35m',
      price: '₹285',
      seats: 72,
      available: 35,
      rating: 4.1,
      facilities: ['AC Chair Car', 'Pantry', 'Wifi'],
      operator: 'Indian Railways',
      contact: '139',
      status: 'On Time',
      trainNumber: '18625'
    },
    {
      id: 5,
      name: 'Jharkhand Sampark Kranti',
      type: 'train',
      route: 'Ranchi → New Delhi',
      departure: '10:30 PM',
      arrival: 'Next Day 05:45 AM',
      duration: '7h 15m',
      price: '₹1,250',
      seats: 48,
      available: 12,
      rating: 4.4,
      facilities: ['AC 2 Tier', 'Pantry', 'Wifi', 'Bedding'],
      operator: 'Indian Railways',
      contact: '139',
      status: 'On Time',
      trainNumber: '12823'
    }
  ];

  const taxiServices = [
    {
      id: 6,
      name: 'Jharkhand Taxi Services',
      type: 'taxi',
      route: 'Ranchi → Netarhat',
      departure: 'Any Time',
      arrival: '4h 30m',
      duration: '4h 30m',
      price: '₹2,500',
      seats: 4,
      available: 8,
      rating: 4.6,
      facilities: ['AC', 'Driver', 'Fuel Included'],
      operator: 'JTS',
      contact: '+91 98765 43211',
      status: 'Available'
    },
    {
      id: 7,
      name: 'City Cab Services',
      type: 'taxi',
      route: 'Airport → Ranchi City',
      departure: 'Any Time',
      arrival: '45 min',
      duration: '45 min',
      price: '₹800',
      seats: 4,
      available: 15,
      rating: 4.3,
      facilities: ['AC', 'Driver', 'Luggage Space'],
      operator: 'City Cab',
      contact: '+91 87654 32112',
      status: 'Available'
    }
  ];

  const flightServices = [
    {
      id: 8,
      name: 'IndiGo',
      type: 'flight',
      route: 'Ranchi → Delhi',
      departure: '07:15 AM',
      arrival: '09:30 AM',
      duration: '2h 15m',
      price: '₹4,500',
      seats: 180,
      available: 45,
      rating: 4.5,
      facilities: ['In-flight Meals', 'Entertainment', 'WiFi'],
      operator: 'IndiGo',
      contact: '+91 124 661 3838',
      status: 'On Time',
      flightNumber: '6E-2341'
    }
  ];

  const allServices = [...busServices, ...trainServices, ...taxiServices, ...flightServices];

  const getFilteredServices = () => {
    return allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.route.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'all' || service.type === selectedType;
      const matchesRoute = !selectedRoute || service.route.includes(selectedRoute);
      return matchesSearch && matchesType && matchesRoute;
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Time': return 'text-green-600 bg-green-100';
      case 'Delayed (15 min)': return 'text-yellow-600 bg-yellow-100';
      case 'Available': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const TransportCard = ({ service }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            service.type === 'bus' ? 'bg-blue-500' :
            service.type === 'train' ? 'bg-green-500' :
            service.type === 'taxi' ? 'bg-purple-500' :
            'bg-orange-500'
          }`}>
            {service.type === 'bus' && <Bus className="w-6 h-6 text-white" />}
            {service.type === 'train' && <Train className="w-6 h-6 text-white" />}
            {service.type === 'taxi' && <Car className="w-6 h-6 text-white" />}
            {service.type === 'flight' && <Plane className="w-6 h-6 text-white" />}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{service.name}</h3>
            <p className="text-gray-600 text-sm">{service.route}</p>
            {service.trainNumber && (
              <p className="text-xs text-gray-500">Train: {service.trainNumber}</p>
            )}
            {service.flightNumber && (
              <p className="text-xs text-gray-500">Flight: {service.flightNumber}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{service.rating}</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
            {service.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <div className="text-sm text-gray-500 mb-1">Departure</div>
          <div className="font-semibold text-gray-800">{service.departure}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500 mb-1">Arrival</div>
          <div className="font-semibold text-gray-800">{service.arrival}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500 mb-1">Duration</div>
          <div className="font-semibold text-gray-800">{service.duration}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500 mb-1">Price</div>
          <div className="font-bold text-green-600">{service.price}</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {service.available}/{service.seats} seats
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            {service.contact}
          </div>
        </div>
        <div className="text-sm text-gray-500">{service.operator}</div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {service.facilities.map((facility, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
            {facility === 'AC' && <CheckCircle className="w-3 h-3" />}
            {facility === 'Wifi' && <Wifi className="w-3 h-3" />}
            {facility === 'Water Bottle' && <Coffee className="w-3 h-3" />}
            {facility === 'Snacks' && <Utensils className="w-3 h-3" />}
            {facility}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Calendar className="w-4 h-4" />
          Book Now
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          <Navigation className="w-4 h-4" />
          Track
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          <Phone className="w-4 h-4" />
          Call
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Transport & Travel 🚌</h1>
            <p className="text-xl opacity-90">Find the best way to explore Jharkhand</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">🚖</span>
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
              placeholder="Search routes or operators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Route</option>
            {popularRoutes.map((route, index) => (
              <option key={index} value={route}>{route}</option>
            ))}
          </select>
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
            More Filters
          </button>
        </div>
      </motion.div>

      {/* Transport Types */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex flex-wrap gap-3">
          {transportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                selectedType === type.id
                  ? 'bg-blue-500 text-white shadow-lg'
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

      {/* Real-time Updates */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">Real-time Updates</h2>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live Updates
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-600">On Time</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <div className="text-sm text-gray-600">Delayed</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">8</div>
            <div className="text-sm text-gray-600">Available</div>
          </div>
        </div>
      </motion.div>

      {/* Transport Services */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        {getFilteredServices().map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <TransportCard service={service} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {getFilteredServices().length === 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 shadow-lg border border-white/20 text-center"
        >
          <Route className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No transport options found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </motion.div>
      )}
    </div>
  );
};

export default Transport;

