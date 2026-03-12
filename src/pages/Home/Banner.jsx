import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { schoolConfig } from '../../config/schoolConfig';
import { FaSearch, FaShieldAlt, FaBell, FaHandsHelping } from 'react-icons/fa';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
  };

  const slides = [
    {
      icon: FaSearch,
      title: `Lost Something at ${schoolConfig.shortName}?`,
      description: `Report it here and our community will help you find it. With our verification system, we reunite lost items with their rightful owners quickly and securely.`,
      buttonText: "Report Lost Item",
      buttonLink: "/addItems"
    },
    {
      icon: FaHandsHelping,
      title: "Found an Item on Campus?",
      description: `Help return it to someone who needs it. Upload clear photos and details, and our system will match it with lost item reports to reunite belongings with their owners.`,
      buttonText: "Report Found Item",
      buttonLink: "/addItems"
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Verified Process",
      description: `Your privacy matters. Our security office verifies all claims before item release, ensuring lost belongings get back to the real owners through a trusted, verified process.`,
      buttonText: "Learn More",
      buttonLink: "/aboutUs"
    },
    {
      icon: FaBell,
      title: "Get Notified Instantly",
      description: `Enable notifications to receive alerts when someone finds items matching your lost item report. Never miss a match with our real-time notification system.`,
      buttonText: "Configure Notifications",
      buttonLink: "/settings/notifications"
    },
  ];

  return (
    <div className="container mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <Slider {...settings} className="slick-slider-custom">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div key={index} className="p-8 h-96 bg-gradient-to-r from-zetech-dark to-zetech-primary rounded-lg shadow-lg flex items-center">
              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                {/* Left Content */}
                <div className="w-full md:w-1/2 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-4xl text-zetech-secondary" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {slide.title}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-blue-100 mb-6 leading-relaxed">
                    {slide.description}
                  </p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block px-6 py-3 bg-zetech-secondary text-zetech-dark font-semibold rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    {slide.buttonText}
                  </a>
                </div>

                {/* Right Icon */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="bg-white bg-opacity-10 rounded-full p-8 backdrop-blur-sm">
                    <Icon className="text-8xl text-zetech-secondary opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
