const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Vision
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
              alt="Veterinarian with livestock"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          
          <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 pb-20 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/30">
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-gray-600">Vision 01</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Empowering farmers with technology-driven veterinary care for a sustainable future. Our vision is to bridge the gap between modern veterinary science and traditional farming practices, ensuring the health and productivity of livestock across the globe.
              </p>
            </div>
            {/* User Profile Section */}
            <div className="flex items-center gap-3 mt-6">
              <img 
                src="https://res.cloudinary.com/doyh3fqr5/image/upload/v1742147367/921055e1-930a-422f-95cb-b029b32539a9.png" 
                alt="Dr. Ramesh Kumar" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900">Dr. Ramesh Kumar</h3>
                <p className="text-emerald-600 text-sm">Chief Veterinary Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
