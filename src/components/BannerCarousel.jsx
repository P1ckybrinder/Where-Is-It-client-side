import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BannerCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Default fallback banner if no images provided
  const defaultBanner = [
    {
      id: 1,
      title: "Lost? Found? Let's Connect!",
      description: "Whether you've lost an item or found one, this is the place to reunite.",
      color: 'from-emerald-600 to-green-600',
      isDefault: true
    }
  ];

  const bannerItems = images && images.length > 0 ? images : defaultBanner;

  // Auto-rotate carousel
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, bannerItems.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerItems.length) % bannerItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen max-h-96 md:max-h-[500px] lg:max-h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      {/* Carousel Slides */}
      <div className="absolute inset-0 transition-opacity duration-300">
        {bannerItems[currentIndex].isDefault ? (
          // Default banner with gradient
          <div className={`w-full h-full bg-gradient-to-br ${bannerItems[currentIndex].color} flex items-center justify-center`}>
            <div className="text-center text-white px-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                {bannerItems[currentIndex].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                {bannerItems[currentIndex].description}
              </p>
            </div>
          </div>
        ) : (
          // Image banner
          <div className="relative w-full h-full">
            <img
              src={bannerItems[currentIndex].image}
              alt={bannerItems[currentIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {bannerItems[currentIndex].title}
                </h2>
                <p className="text-lg md:text-xl text-white/90">
                  {bannerItems[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {bannerItems.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-colors duration-150"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-colors duration-150"
          >
            <FaChevronRight size={24} />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {bannerItems.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {bannerItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-150 rounded-full backdrop-blur-md ${
                index === currentIndex
                  ? 'bg-white w-10 h-3'
                  : 'bg-white/40 w-3 h-3 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
