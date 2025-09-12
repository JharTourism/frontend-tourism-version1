import { useState, useEffect } from 'react';

const Mission = () => {
  const [currentCard, setCurrentCard] = useState(0);
  
  const cards = [
    {
      title: "Empowering Farmers",
      description: "Providing tools and knowledge to enhance livestock management. Our mission is to equip farmers with advanced agricultural techniques, smart livestock management strategies, and access to digital solutions that improve productivity and sustainability. By fostering education and resource availability, we empower farmers to make informed decisions, optimize their yields, and secure better livelihoods."
    },
    {
      title: "Affordable Veterinary Access",
      description: "Bridging the gap between farmers and expert vets. We strive to make veterinary services more accessible and cost-effective for rural and urban farmers alike. Through telemedicine, mobile vet clinics, and AI-driven health diagnostics, we aim to ensure timely treatment, preventive care, and overall animal well-being, leading to healthier livestock and improved agricultural output."
    },
    {
      title: "Sustainable Agriculture",
      description: "Encouraging eco-friendly and effective farming practices. Our focus is on promoting regenerative farming techniques, efficient water management, and organic farming practices to reduce environmental impact. By integrating modern technology with traditional wisdom, we help farmers adopt sustainable methods that enhance soil fertility, reduce waste, and contribute to long-term agricultural resilience."
    }
  ];
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          On a Mission
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[300px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute w-full bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/30 transition-all duration-500 ${
                  index === currentCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-600">Mission 0{index + 1}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-700 text-lg">{card.description}</p>
                </div>
                
              </div>
            ))}
          </div>
          
          <div className="relative h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
              alt="Sustainable farming"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;