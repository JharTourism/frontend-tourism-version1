import React from 'react';
import { Youtube } from 'lucide-react';

const highlights = [
  {
    title: "Nature's Masterpiece",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    description: "Explore lush forests, majestic waterfalls, and serene landscapes like Hundru Falls and Betla National Park."
  },
  {
    title: "Vibrant Cultural Tapestry",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    description: "Experience the rhythm of tribal dances, colorful festivals, and intricate art forms unique to Jharkhand."
  },
  {
    title: "Echoes of History",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    description: "Visit ancient temples and historical sites that tell the story of Jharkhand's rich past."
  },
  {
    title: "Authentic Local Encounters",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    description: "Engage in sustainable tourism and connect with local communities for genuine experiences."
  },
  {
    title: "Charminar Splendor",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
    description: "Marvel at the architectural beauty and cultural significance of the Charminar, a symbol of heritage and history."
  }
];


const WhyJharkhand = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(-1); // -1 means not hovering any card
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showVRModal, setShowVRModal] = useState(false);
  const [vrLoading, setVrLoading] = useState(false);
  const [vrConnected, setVrConnected] = useState(false);
  const [vrOutput, setVrOutput] = useState('');
  const [vrError, setVrError] = useState('');
  const [sceneLoading, setSceneLoading] = useState(false);
  const normalSpeed = 0.4;
  // Infinite loop logic
  // Repeat highlights many times for seamless loop
  const loopCount = 10;
  const loopedHighlights = Array(loopCount).fill(highlights).flat();
  const totalCards = loopedHighlights.length;
  const singleSetWidth = 340 + 32; // card width + gap (min-w + gap-8)

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;
    let req;
    let lastTimestamp = null;
    let stopped = false;
    function animate(ts) {
      if (!lastTimestamp) lastTimestamp = ts;
      const elapsed = ts - lastTimestamp;
      lastTimestamp = ts;
      // Only auto-scroll if not hovering any card and not dragging
      if (isHovering === -1 && !isDragging && !stopped) {
        scroll.scrollLeft += normalSpeed * (elapsed / 16.67);
        // If scrolled past one set, reset to start of next set
        if (scroll.scrollLeft >= (singleSetWidth * highlights.length * (loopCount - 1))) {
          scroll.scrollLeft = 0;
        }
      }
      req = requestAnimationFrame(animate);
    }
    req = requestAnimationFrame(animate);
    return () => {
      stopped = true;
      cancelAnimationFrame(req);
    };
  }, [isHovering, isDragging]);

  // Manual scroll looping: if user scrolls to end or start, reset
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;
    function handleScroll() {
      if (scroll.scrollLeft <= 0) {
        // Jump to near end
        scroll.scrollLeft = singleSetWidth * highlights.length * (loopCount - 2);
      } else if (scroll.scrollLeft >= singleSetWidth * highlights.length * (loopCount - 1)) {
        // Jump to start
        scroll.scrollLeft = 1;
      }
    }
    scroll.addEventListener('scroll', handleScroll);
    return () => scroll.removeEventListener('scroll', handleScroll);
  }, []);

  // Drag/Swipe support
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scroll.offsetLeft);
      setScrollLeft(scroll.scrollLeft);
    };
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scroll.offsetLeft;
      const walk = (x - startX) * 1.2;
      scroll.scrollLeft = scrollLeft - walk;
    };
    const handleMouseUp = () => setIsDragging(false);
    scroll.addEventListener('mousedown', handleMouseDown);
    scroll.addEventListener('mousemove', handleMouseMove);
    scroll.addEventListener('mouseleave', handleMouseUp);
    scroll.addEventListener('mouseup', handleMouseUp);
    // Touch events
    const handleTouchStart = (e) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - scroll.offsetLeft);
      setScrollLeft(scroll.scrollLeft);
    };
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - scroll.offsetLeft;
      const walk = (x - startX) * 1.2;
      scroll.scrollLeft = scrollLeft - walk;
    };
    const handleTouchEnd = () => setIsDragging(false);
    scroll.addEventListener('touchstart', handleTouchStart);
    scroll.addEventListener('touchmove', handleTouchMove);
    scroll.addEventListener('touchend', handleTouchEnd);
    return () => {
      scroll.removeEventListener('mousedown', handleMouseDown);
      scroll.removeEventListener('mousemove', handleMouseMove);
      scroll.removeEventListener('mouseleave', handleMouseUp);
      scroll.removeEventListener('mouseup', handleMouseUp);
      scroll.removeEventListener('touchstart', handleTouchStart);
      scroll.removeEventListener('touchmove', handleTouchMove);
      scroll.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startX, scrollLeft]);

  // Real Oculus Quest/WebXR detection
  useEffect(() => {
    let session = null;
    let sceneTimeout;
    if (vrLoading && showVRModal) {
      setVrError('');
      setVrConnected(false);
      setVrOutput('');
      setSceneLoading(false);
      if (navigator.xr) {
        navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
          if (supported) {
            // Try to request session
            navigator.xr.requestSession('immersive-vr').then((sess) => {
              session = sess;
              setVrConnected(true);
              setVrLoading(false);
              setVrOutput('Oculus Quest connected! Starting immersive scene...');
              setSceneLoading(true);
              // Simulate scene loading (replace with real scene ready event)
              sceneTimeout = setTimeout(() => {
                setSceneLoading(false);
                setVrOutput('Immersive VR scene started!');
              }, 2000);
            }).catch(() => {
              setVrError('Could not start VR session. Please check your Oculus Quest and try again.');
              setVrLoading(false);
            });
          } else {
            setVrError('No VR device found. Please connect your Oculus Quest.');
            setVrLoading(false);
          }
        }).catch(() => {
          setVrError('WebXR not supported in this browser.');
          setVrLoading(false);
        });
      } else {
        setVrError('WebXR not supported in this browser.');
        setVrLoading(false);
      }
    }
    return () => {
      if (session) session.end();
      clearTimeout(sceneTimeout);
    };
  }, [vrLoading, showVRModal]);

  const handleVRClick = () => {
    setShowVRModal(true);
    setVrLoading(true);
    setVrConnected(false);
    setVrOutput('');
    setVrError('');
    setSceneLoading(false);
  };

  const handleVRQuit = () => {
    setShowVRModal(false);
    setVrLoading(false);
    setVrConnected(false);
    setVrOutput('');
    setVrError('');
    setSceneLoading(false);
  };

  return (
    <section id="why-jharkhand" className="py-16 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .modern-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .modern-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border-color: rgba(34, 197, 94, 0.3);
        }
        
        .modern-card:hover .card-image {
          transform: scale(1.05);
        }
        
        .modern-card:hover .card-title {
          color: #059669;
        }
        
        .action-buttons {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: 1rem;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .modern-card:hover .action-buttons {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        
        .action-btn {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          padding: 0.75rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .action-btn:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }
        
        .vr-btn:hover {
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 0 12px 35px rgba(34, 197, 94, 0.3);
        }
        
        .video-btn:hover {
          border-color: rgba(239, 68, 68, 0.5);
          box-shadow: 0 12px 35px rgba(239, 68, 68, 0.3);
        }
        
        .card-image {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-title {
          transition: color 0.3s ease;
        }
        
        .modern-btn {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(34, 197, 94, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .modern-btn:hover {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.2);
        }
      `}</style>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            Experience the Untamed Beauty
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 tracking-wide">
            Embrace the Rich Heritage
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover Jharkhand's wonders through vivid stories and authentic moments. 
            <span className="block mt-2 text-base">Scroll to explore the state's natural beauty and vibrant culture.</span>
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar pb-8"
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            height: '520px',
            alignItems: 'center',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
        >
          {loopedHighlights.map((item, idx) => (
            <div
              key={idx}
              className="modern-card relative rounded-3xl overflow-hidden flex flex-col min-w-[340px] max-w-sm h-[420px]"
              onMouseEnter={() => setIsHovering(idx)}
              onMouseLeave={() => setIsHovering(-1)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="card-image h-full w-full object-cover" 
                  style={{borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem'}} 
                />
                
                {/* Action Buttons Overlay */}
                <div className="action-buttons">
                  <button 
                    className="action-btn vr-btn" 
                    onClick={handleVRClick}
                    title="Experience in VR"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
                    </svg>
                  </button>
                  <button 
                    className="action-btn video-btn"
                    title="Watch Video"
                  >
                    <Youtube className="w-6 h-6 text-red-600" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="card-title text-2xl font-semibold text-gray-800 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base flex-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Modern CTA Button */}
        <div className="flex justify-center mt-16">
          <button className="modern-btn px-12 py-4 rounded-full text-green-700 font-semibold text-lg">
            Explore More Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default SketchfabStyleCard;