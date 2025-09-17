import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Star,
  Camera,
  Utensils,
  Mountain,
  TreePine,
  Waves,
  Loader2,
  AlertCircle
} from 'lucide-react';

const ItineraryPage = () => {
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch itinerary from AI API
  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('http://localhost:5000/api/itinerary', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: "Jharkhand",
            days: 3,
            interests: ["nature", "culture"]
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setItinerary(data);
      } catch (err) {
        console.error('Error fetching itinerary:', err);
        setError(err.message);
        // Fallback to static data if API fails
        setItinerary(getStaticItinerary());
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, []);

  // Static fallback data
  const getStaticItinerary = () => [
    {
      day: 1,
      title: "Arrival & Netarhat Exploration",
      theme: "Nature & Scenic Views",
      icon: Mountain,
      color: "from-green-500 to-emerald-500",
      activities: [
        {
          time: "09:00 AM",
          title: "Arrive at Ranchi Airport",
          description: "Welcome to Jharkhand! Transfer to your hotel and check-in.",
          icon: MapPin,
          duration: "2 hours"
        },
        {
          time: "12:00 PM",
          title: "Journey to Netarhat",
          description: "Scenic drive through the hills to reach Netarhat Hill Station.",
          icon: Mountain,
          duration: "4 hours"
        },
        {
          time: "05:00 PM",
          title: "Sunset Point Visit",
          description: "Experience breathtaking sunset views from Netarhat's famous viewpoint.",
          icon: Camera,
          duration: "2 hours"
        },
        {
          time: "08:00 PM",
          title: "Local Cuisine Dinner",
          description: "Taste authentic Jharkhand dishes at a local restaurant.",
          icon: Utensils,
          duration: "1.5 hours"
        }
      ]
    },
    {
      day: 2,
      title: "Wildlife Adventure at Betla National Park",
      theme: "Wildlife & Adventure",
      icon: TreePine,
      color: "from-blue-500 to-cyan-500",
      activities: [
        {
          time: "06:00 AM",
          title: "Early Morning Safari",
          description: "Spot tigers, elephants, and other wildlife in their natural habitat.",
          icon: TreePine,
          duration: "3 hours"
        },
        {
          time: "10:00 AM",
          title: "Nature Trail Walk",
          description: "Guided walk through the forest to learn about local flora and fauna.",
          icon: Camera,
          duration: "2 hours"
        },
        {
          time: "01:00 PM",
          title: "Lunch at Forest Lodge",
          description: "Enjoy a meal surrounded by nature at the park's forest lodge.",
          icon: Utensils,
          duration: "1 hour"
        },
        {
          time: "03:00 PM",
          title: "Evening Safari",
          description: "Second safari to increase chances of wildlife sightings.",
          icon: TreePine,
          duration: "3 hours"
        }
      ]
    },
    {
      day: 3,
      title: "Waterfalls & Cultural Experience",
      theme: "Culture & Natural Wonders",
      icon: Waves,
      color: "from-purple-500 to-violet-500",
      activities: [
        {
          time: "08:00 AM",
          title: "Hundru Falls Visit",
          description: "Witness the majestic Hundru Falls, one of India's highest waterfalls.",
          icon: Waves,
          duration: "3 hours"
        },
        {
          time: "12:00 PM",
          title: "Local Market Exploration",
          description: "Shop for traditional handicrafts and local souvenirs.",
          icon: MapPin,
          duration: "1.5 hours"
        },
        {
          time: "02:00 PM",
          title: "Cultural Village Tour",
          description: "Visit a tribal village to experience local culture and traditions.",
          icon: Camera,
          duration: "2 hours"
        },
        {
          time: "05:00 PM",
          title: "Departure Preparation",
          description: "Return to Ranchi and prepare for departure with fond memories.",
          icon: MapPin,
          duration: "3 hours"
        }
      ]
    }
  ];

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/80 backdrop-blur-lg flex items-center justify-center shadow-xl">
            <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Generating Your AI Itinerary</h2>
          <p className="text-gray-600 mb-6">Our AI is crafting the perfect 3-day adventure for you...</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error && !itinerary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Unable to Generate Itinerary</h2>
          <p className="text-gray-600 mb-6">
            We encountered an issue connecting to our AI service. Please try again later.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/tourist-dashboard')}
              className="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Use API data or fallback to static data
  const itineraryData = itinerary || getStaticItinerary();

  const ActivityCard = ({ activity }) => {
    const IconComponent = activity.icon;
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {activity.time}
              </span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {activity.duration}
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">{activity.title}</h4>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        </div>
      </div>
    );
  };

  const DayCard = ({ dayData }) => {
    const IconComponent = dayData.icon;
    return (
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300">
        {/* Day Header */}
        <div className="text-center mb-6">
          <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${dayData.color} flex items-center justify-center shadow-lg`}>
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Day {dayData.day}</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">{dayData.title}</h3>
          <span className={`inline-block px-4 py-2 bg-gradient-to-r ${dayData.color} text-white rounded-full text-sm font-medium`}>
            {dayData.theme}
          </span>
        </div>

        {/* Activities */}
        <div className="space-y-4">
          {dayData.activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-green-900/80"></div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate('/tourist-dashboard')}
            className="bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center">
            <span className="text-white text-3xl font-bold">AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your AI-Generated Itinerary
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Personalized 3-day adventure through the beautiful landscapes of Jharkhand
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>3 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Multiple Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>AI Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* API Status Indicator */}
      {error && (
        <div className="container mx-auto px-4 pt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-yellow-800 font-medium">Using offline itinerary</p>
                <p className="text-yellow-700 text-sm">AI service temporarily unavailable</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Itinerary Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {itineraryData.map((dayData, index) => (
            <DayCard key={index} dayData={dayData} />
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trip Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Duration</h3>
                <p className="text-gray-600">3 Days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Destinations</h3>
                <p className="text-gray-600">4+ Locations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Activities</h3>
                <p className="text-gray-600">12+ Experiences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Rating</h3>
                <p className="text-gray-600">4.9/5</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Book This Itinerary
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Customize Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;