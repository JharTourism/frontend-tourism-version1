import React, { useRef, useEffect, useState } from 'react';
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

    // Check for WebXR support and Quest connection
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
        if (supported) {
          setVrConnected(true);
          setVrLoading(false);
          setVrOutput('Oculus Quest/WebXR device detected! Launching VR scene...');
          // Open Unity WebGL scene in new tab
          setTimeout(() => {
            window.open('/vr-scenes/v3/index.html', '_blank');
            setShowVRModal(false);
          }, 1200);
        } else {
          setVrError('No VR device found. Please connect your Oculus Quest or use a WebXR-compatible browser.');
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
    <section id="why-jharkhand" className="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .wj-card-hover {
          filter: brightness(0.7);
          transition: filter 0.3s;
        }
        .wj-bubble {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: 1.5rem;
        }
        .wj-bubble-icon {
          background: rgba(255,255,255,0.7);
          border-radius: 9999px;
          padding: 0.7rem;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .wj-bubble-icon:hover {
          background: rgba(255,255,255,0.95);
        }
      `}</style>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-4">
          Experience the Untamed Beauty, Embrace the Rich Heritage
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
          Discover Jharkhand's wonders through vivid stories and authentic moments. Scroll to explore the state's natural beauty and vibrant culture.
        </p>
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar pb-4"
          style={{
            cursor: isDragging ? 'grabbing' : 'grab',
            height: '500px',
            alignItems: 'center',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
        >
          {loopedHighlights.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl shadow-lg overflow-hidden flex flex-col min-w-[320px] max-w-xs h-[380px] transition-transform duration-200 ${isHovering === idx ? 'wj-card-hover scale-105' : 'bg-white'}`}
              onMouseEnter={() => setIsHovering(idx)}
              onMouseLeave={() => setIsHovering(-1)}
              style={{ transition: 'filter 0.3s, transform 0.2s' }}
            >
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" style={{borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem'}} />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-base flex-1">{item.description}</p>
              </div>
              {isHovering === idx && (
                <div className="wj-bubble">
                  <span className="wj-bubble-icon" onClick={handleVRClick} style={{cursor:'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rectangle-goggles-icon text-green-700 opacity-80"><path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>
                  </span>
                  <span className="wj-bubble-icon"><Youtube className="w-7 h-7 text-red-600 opacity-80" /></span>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* See more plans button */}
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-3 rounded-full border-2 border-green-700 text-green-800 font-bold text-lg bg-white transition-all duration-300 relative overflow-hidden group"
            style={{ minWidth: '200px' }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">See more plans</span>
            <span className="absolute inset-0 z-0 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-yellow-400 group-hover:opacity-100 opacity-0 transition-all duration-300 rounded-full" />
          </button>
        </div>
        {/* VR Modal */}
        {showVRModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl p-8 min-w-[340px] min-h-[220px] relative flex flex-col items-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Connect to Oculus Quest</h3>
              {vrError && (
                <div className="text-red-600 text-center mb-4 font-semibold">{vrError}</div>
              )}
              {!vrError && !vrConnected && vrLoading && (
                <>
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                      <span className="animate-spin inline-block w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full"></span>
                    </div>
                    <p className="text-gray-700 text-lg">Searching for Oculus Quest...</p>
                  </div>
                </>
              )}
              {!vrError && vrConnected && (
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rectangle-goggles-icon text-green-700"><path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>
                  </div>
                  <p className="text-green-700 text-lg font-semibold mb-2">{vrOutput}</p>
                  {sceneLoading ? (
                    <div className="w-full h-32 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-500 mt-2">
                      <span className="animate-pulse text-green-700 font-bold">Loading immersive scene...</span>
                    </div>
                  ) : (
                    <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 mt-2">
                      <span>Immersive VR content would display here.</span>
                    </div>
                  )}
                </div>
              )}
              <button onClick={handleVRQuit} className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-red-100 text-red-700 font-bold hover:bg-red-200 transition-all">Quit</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyJharkhand;
