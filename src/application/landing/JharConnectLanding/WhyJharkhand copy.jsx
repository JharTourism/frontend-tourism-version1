import React, { useState, useRef, useEffect } from 'react';
import { Youtube } from 'lucide-react';

// Using just one data object for the single card
const cardData = {
  title: "Nature's Masterpiece",
  image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  description: "Explore lush forests, majestic waterfalls, and serene landscapes like Hundru Falls and Betla National Park."
};

// Define constants for status messages
const VR_STATUS = {
  IDLE: 'IDLE',
  DETECTING: 'DETECTING',
  UNSUPPORTED: 'UNSUPPORTED',
  READY: 'READY',
  STARTING: 'STARTING',
  ERROR: 'ERROR',
};

const unitySceneUrl = '/vr-scenes/v4/index.html'; // Path to your Unity build's HTML file

const SimplifiedJharkhandCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showVRModal, setShowVRModal] = useState(false);
  const [vrStatus, setVrStatus] = useState(VR_STATUS.IDLE);
  const [vrMessage, setVrMessage] = useState('');
  const iframeRef = useRef(null);

  // This effect handles the entire VR launch process after the modal is opened
  useEffect(() => {
    // Only run when the status is set to DETECTING
    if (vrStatus !== VR_STATUS.DETECTING) return;

    const detectAndLaunch = async () => {
      if (!navigator.xr) {
        setVrMessage('WebXR is not supported by your browser.');
        setVrStatus(VR_STATUS.UNSUPPORTED);
        return;
      }

      const supported = await navigator.xr.isSessionSupported('immersive-vr');
      if (supported) {
        setVrMessage('Headset detected! Preparing scene...');
        setVrStatus(VR_STATUS.STARTING);

        // Create and load the iframe
        const iframe = document.createElement('iframe');
        iframe.src = unitySceneUrl;
        iframe.style.position = 'absolute';
        iframe.style.left = '-9999px'; // Hide it off-screen
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframeRef.current = iframe;

        iframe.onload = () => {
          // The Unity build has a button to enter VR, often with an ID or class.
          // Let's assume the button has an ID '#entervr-button' from the WebXR template.
          // You may need to inspect your Unity build's index.html to find the correct selector.
          const enterVrButton = iframe.contentWindow.document.body.querySelector('button');
          
          if (enterVrButton) {
            enterVrButton.click(); // This triggers the requestSession in the iframe
            // The browser will handle the transition to VR. We can close our modal.
            setTimeout(() => setShowVRModal(false), 500);
          } else {
            setVrMessage('Could not find the VR launch button in the scene.');
            setVrStatus(VR_STATUS.ERROR);
          }
        };
        
        iframe.onerror = () => {
            setVrMessage('Failed to load the VR scene. Check the path and server setup.');
            setVrStatus(VR_STATUS.ERROR);
        }

        document.body.appendChild(iframe);

      } else {
        setVrMessage('No VR headset found. Please connect your device.');
        setVrStatus(VR_STATUS.UNSUPPORTED);
      }
    };

    detectAndLaunch();

    // Cleanup function to remove the iframe if the modal is closed prematurely
    return () => {
      if (iframeRef.current) {
        iframeRef.current.remove();
        iframeRef.current = null;
      }
    };
  }, [vrStatus]);

  const handleVRClick = () => {
    setShowVRModal(true);
    setVrMessage('Searching for your VR headset...');
    setVrStatus(VR_STATUS.DETECTING);
  };

  const handleModalClose = () => {
    setShowVRModal(false);
    setVrStatus(VR_STATUS.IDLE);
    setVrMessage('');
  };

  const renderModalContent = () => {
    switch (vrStatus) {
      case VR_STATUS.DETECTING:
      case VR_STATUS.STARTING:
        return (
          <>
            <div className="animate-spin w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full mb-4"></div>
            <p className="text-gray-700 text-lg">{vrMessage}</p>
          </>
        );
      case VR_STATUS.UNSUPPORTED:
      case VR_STATUS.ERROR:
        return (
          <>
            <p className="text-red-600 text-center font-semibold mb-4">{vrMessage}</p>
            <button onClick={handleModalClose} className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-bold hover:bg-gray-300">Close</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="why-jharkhand" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-yellow-50 p-4">
      {/* (Styles from the previous response remain the same) */}
      <style>{`
        /* ... styles from previous answer ... */
      `}</style>
      
      <div
        className="wj-card relative rounded-3xl shadow-2xl overflow-hidden flex flex-col w-full max-w-xs h-[420px] bg-white transition-all duration-300"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={`transition-filter duration-300 ${isHovering ? 'filter brightness-75' : ''}`}>
            <img src={cardData.image} alt={cardData.title} className="h-52 w-full object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-green-800 mb-2">{cardData.title}</h3>
              <p className="text-gray-700 text-base flex-1">{cardData.description}</p>
            </div>
        </div>

        <div className={`wj-bubble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <span className="wj-bubble-icon" onClick={handleVRClick} title="View in VR">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700 opacity-90"><path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>
          </span>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="wj-bubble-icon" title="Watch on YouTube">
            <Youtube className="w-8 h-8 text-red-600 opacity-90" />
          </a>
        </div>
      </div>

      {/* VR Launch Modal */}
      {showVRModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 min-w-[340px] min-h-[220px] relative flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Entering Immersive Mode</h3>
              {renderModalContent()}
              {vrStatus !== VR_STATUS.UNSUPPORTED && vrStatus !== VR_STATUS.ERROR && (
                <button onClick={handleModalClose} className="absolute top-2 right-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">Cancel</button>
              )}
            </div>
          </div>
        )}
    </section>
  );
};

export default SimplifiedJharkhandCard;