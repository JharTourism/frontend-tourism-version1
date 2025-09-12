import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dzymyjltu/video/upload/v1740002012/Meet_the_MetaHumans__Free_Sample_Now_Available___Unreal_Engine_2160p_trvf8h.webm" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
        <div className="h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-6">
              FARMVET CONNECT
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Connecting farmers with veterinary expertise through innovative technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;