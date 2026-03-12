import React from 'react';
import { motion } from 'framer-motion';
import BannerCarousel from '../../components/BannerCarousel';

const Banner = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Stats Cards - Cyan Color System with Theme Support */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {[
          { label: 'Items Reunited', value: '1,200+', icon: '📦' },
          { label: 'Active Users', value: '500+', icon: '👥' },
          { label: 'Success Rate', value: '85%', icon: '✨' },
          { label: 'Campus Locations', value: '20+', icon: '📍' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="relative p-4 md:p-6 rounded-2xl text-center overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
          >
            {/* Light Theme: Cyan/Blue Background, Dark Theme: Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-slate-800/40 dark:to-slate-900/40 rounded-2xl backdrop-blur-md dark:backdrop-blur-lg border border-cyan-400/40 dark:border-cyan-500/20"/>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <p className="text-2xl md:text-3xl mb-2">{stat.icon}</p>
              <p className="text-white dark:text-white text-lg md:text-2xl font-bold">
                {stat.value}
              </p>
              <p className="text-white/90 dark:text-cyan-100 text-xs md:text-sm mt-2 font-semibold">
                {stat.label}
              </p>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{
              background: 'radial-gradient(circle at center, rgba(6,182,212,0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;

