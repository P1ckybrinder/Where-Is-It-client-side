import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      color: 'from-cyan-600 to-blue-600',
      isDefault: true
    }
  ];

  const bannerItems = images && images.length > 0 ? images : defaultBanner;

  // Auto-rotate carousel
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [autoPlay, bannerItems.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerItems.length) % bannerItems.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full h-screen max-h-96 md:max-h-[500px] lg:max-h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      {/* Carousel Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {bannerItems[currentIndex].isDefault ? (
            // Default banner with gradient
            <div className={`w-full h-full bg-gradient-to-br ${bannerItems[currentIndex].color} flex items-center justify-center`}>
              <div className="text-center text-white px-6">
                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {bannerItems[currentIndex].title}
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-white/90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {bannerItems[currentIndex].description}
                </motion.p>
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
                  <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {bannerItems[currentIndex].title}
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-white/90"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {bannerItems[currentIndex].description}
                  </motion.p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Only show if multiple slides */}
      {bannerItems.length > 1 && (
        <>
          <motion.button
            onClick={goToPrevious}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-colors duration-200"
          >
            <FaChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={goToNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-colors duration-200"
          >
            <FaChevronRight size={24} />
          </motion.button>
        </>
      )}

      {/* Slide Indicators */}
      {bannerItems.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {bannerItems.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-200 rounded-full backdrop-blur-md ${
                index === currentIndex
                  ? 'bg-white w-10 h-3'
                  : 'bg-white/40 w-3 h-3 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerCarousel;
