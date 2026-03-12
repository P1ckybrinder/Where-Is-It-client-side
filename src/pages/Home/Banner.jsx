import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
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
      title: `Lost Something? Find It Here!`,
      description: `Join ${schoolConfig.name}'s community dedicated to reuniting lost belongings with their rightful owners. Your help can make a difference.`,
      icon: FaSearch,
      ctaText: 'Report Lost Item',
      ctaLink: '/addItems'
    },
    {
      title: "Helping You Recover What Matters",
      description: `If you've lost something valuable, we're here to help you find it. And if you've found it, let us connect you with the person who needs it back.`,
      icon: FaHandsHelping,
      ctaText: 'Report Found Item',
      ctaLink: '/addItems'
    },
    {
      title: "Secure & Verified Process",
      description: `Your privacy matters. Our security system ensures all claims are verified before item release, maintaining trust in our community.`,
      icon: FaShieldAlt,
      ctaText: 'Learn More',
      ctaLink: '/aboutUs'
    },
    {
      title: "Get Notified Instantly",
      description: `Enable notifications to receive real-time alerts when someone finds items matching your lost item report. Never miss a match!`,
      icon: FaBell,
      ctaText: 'Configure Alerts',
      ctaLink: '/settings/notifications'
    },
  ];

  return (
    <div className="container mx-auto my-8 glass-morphism overflow-hidden rounded-3xl">
      <Slider {...settings} className="slick-slider-custom">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div key={index} className="p-8 h-96 bg-gradient-to-br from-zetech-dark via-zetech-primary to-zetech-accent rounded-3xl relative overflow-hidden group">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-zetech-accent rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>

              <motion.div
                className="flex flex-col md:flex-row justify-between items-center h-full gap-8 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* Left Content */}
                <div className="w-full md:w-1/2 text-white">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <Icon className="text-4xl text-zetech-accent" />
                    <h2 className="text-3xl md:text-4xl font-bold">{slide.title}</h2>
                  </motion.div>

                  <motion.p 
                    className="text-base md:text-lg text-white/90 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.a
                    href={slide.ctaLink}
                    className="glass-button inline-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {slide.ctaText}
                  </motion.a>
                </div>

                {/* Right Icon */}
                <motion.div
                  className="w-full md:w-1/2 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="glass-morphism p-12 rounded-3xl hover-glow">
                    <Icon className="text-8xl text-white opacity-80 mx-auto" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
