import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from 'lottie-react';

// Import your Lottie JSON animations
import animation1 from '../../assets/slide2.json';
import animation2 from '../../assets/slide4.json';
import animation3 from '../../assets/slide3.json';
import animation4 from '../../assets/slide1.json';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-out',
  };

  const slides = [
    {
      title: "Lost Something? Find It Here!",
      description: "Join a community dedicated to reuniting lost belongings with their rightful owners. Your help can make a difference.",
      animation: animation1,
    },
    {
      title: "Helping You Recover What Matters",
      description: "If you've lost something valuable, we're here to help you find it. And if you've found it, let us connect you with the person who needs it back.",
      animation: animation2,
    },
    {
      title: "Lost? Found? Let's Connect!",
      description: "Whether you've lost an item or found one, this is the place to reunite. Together, we can bring what's lost back home.",
      animation: animation3,
    },
    {
      title: "Reunite What's Lost",
      description: "Help others reconnect with what they've lost. A community of finders and seekers, here to make a difference.",
      animation: animation4,
    },
  ];

  return (
    <div className="container mx-auto my-8 glass-liquid-premium rounded-lg shadow-lg overflow-hidden">
      <Slider {...settings} className="slick-slider-custom">
        {slides.map((slide, index) => (
          <div key={index} className="p-6 h-[500px] bg-gradient-to-r from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-900/30 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center h-full gap-6">
              <div className="w-full md:w-1/2 text-left p-4">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                  {slide.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
                  {slide.description}
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="glass-card-elevated rounded-full p-4">
                  <Lottie className="w-[60%] mx-auto" animationData={slide.animation} loop={true} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
