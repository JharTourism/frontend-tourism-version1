import  { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const Feedback = () => {
  const scrollRef = useRef(null);

  const feedbacks = [
    {
      name: "Sahithi",
      role: "Dairy Farmer",
      message: "The best farm management tool I've used!",
      rating: 5,
      image: "https://res.cloudinary.com/dzymyjltu/image/upload/v1738604827/WhatsApp_Image_2025-02-03_at_23.16.45_88a860de_pgp8in.jpg"
    },
    {
      name: "Prajwal",
      role: "Livestock Manager",
      message: "Easy to use and highly effective for livestock tracking.",
      rating: 5,
      image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1742992957/download_pvjuow.jpg"
    },
    {
      name: "Ravi Kumar",
      role: "Veterinarian",
      message: "Helped me streamline veterinary consultations.",
      rating: 5,
      image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1742992974/download_qrtf03.jpg"
    },
    {
      name: "Amulya Sree",
      role: "Farm Owner",
      message: "A must-have for every modern farmer!",
      rating: 5,
      image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1742993071/download_uyrpqd.jpg"
    }
  ];

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const animate = () => {
      if (scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth) {
        scroll.scrollLeft = 0;
      } else {
        scroll.scrollLeft += 1;
      }
    };

    const animation = setInterval(animate, 50);
    return () => clearInterval(animation);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What Our Users Say
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6 pb-8"
        >
          {[...feedbacks, ...feedbacks].map((feedback, index) => (
            <div
              key={index}
              className="relative flex-none w-96 bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/30 flex flex-col justify-between"
            >
              {/* Feedback Header */}
              <div className="absolute top-4 left-4 ">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Feedback 0{(index % 4) + 1}</span>
                </div>
              </div>

              {/* Feedback Message */}
              <div>
                <p className="text-gray-700 mb-6 mt-5">{feedback.message}</p>
              </div>

              {/* Push stars, line, and user info to bottom */}
              <div className="mt-auto">
                {/* Star Ratings */}
                <div className="flex gap-1 mb-4">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Separator Line */}
                <hr className="border-gray-300 mb-4" />

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{feedback.name}</h3>
                    <p className="text-emerald-600 text-sm">{feedback.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feedback;