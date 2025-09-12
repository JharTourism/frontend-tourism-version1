import { Stethoscope, Video, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
      title: "Health Monitoring",
      description: "Track livestock health records and receive automated alerts."
    },
    {
      icon: <Video className="w-8 h-8 text-emerald-600" />,
      title: "Video Consultancy",
      description: "Connect with veterinary experts through real-time video calls."
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      title: "Appointment Scheduling",
      description: "Book check-ups and vaccinations for your livestock effortlessly."
    }
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What We Do
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/30 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Task 0{index + 1}</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;