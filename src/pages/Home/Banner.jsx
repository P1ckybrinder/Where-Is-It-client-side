import React from 'react';
import { motion } from 'framer-motion';
import { schoolConfig } from '../../config/schoolConfig';

const Banner = () => {
  // Placeholder illustration SVG component
  const IllustrationCard = () => (
    <motion.div
      className="relative w-full max-w-sm h-60"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="glass-liquid-premium p-8 w-full h-full flex items-center justify-center rounded-3xl">
        <svg className="w-full h-full" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="150" cy="120" r="100" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          
          {/* Person sitting at desk */}
          <rect x="100" y="110" width="100" height="60" rx="8" fill="rgba(255,255,255,0.15)"/>
          <circle cx="130" cy="95" r="12" fill="rgba(255,255,255,0.8)"/>
          <rect x="115" y="110" width="30" height="50" fill="rgba(255,255,255,0.7)"/>
          <rect x="150" y="120" width="40" height="40" fill="rgba(255,255,255,0.6)" rx="4"/>
          
          {/* Network nodes */}
          <circle cx="80" cy="50" r="6" fill="rgba(16,185,129,0.8)"/>
          <circle cx="150" cy="20" r="6" fill="rgba(16,185,129,0.8)"/>
          <circle cx="220" cy="50" r="6" fill="rgba(16,185,129,0.8)"/>
          <circle cx="240" cy="120" r="6" fill="rgba(16,185,129,0.8)"/>
          
          {/* Connection lines */}
          <line x1="80" y1="50" x2="150" y2="20" stroke="rgba(110,231,183,0.5)" strokeWidth="2"/>
          <line x1="150" y1="20" x2="220" y2="50" stroke="rgba(110,231,183,0.5)" strokeWidth="2"/>
          <line x1="220" y1="50" x2="240" y2="120" stroke="rgba(110,231,183,0.5)" strokeWidth="2"/>
          <line x1="130" y1="110" x2="220" y2="50" stroke="rgba(110,231,183,0.3)" strokeWidth="1" strokeDasharray="3,3"/>
        </svg>
      </div>
    </motion.div>
  );

  return (
    <div className="container mx-auto my-8 px-4">
      <motion.div
        className="relative w-full overflow-hidden rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zetech-dark via-slate-800 to-zetech-primary rounded-3xl opacity-90"/>
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-zetech-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"/>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-zetech-primary rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}/>
        </div>

        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 glass-liquid-premium pointer-events-none rounded-3xl"/>

        {/* Content */}
        <div className="relative z-10 px-8 md:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Left Content */}
            <motion.div
              className="w-full md:w-1/2 text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glass-light leading-tight">
                Lost? Found? Let's Connect!
              </h1>
              
              <p className="text-base md:text-lg text-white/85 mb-6 leading-relaxed">
                Whether you've lost an item or found one, this is the place to reunite. Together, we can bring what's lost back home across {schoolConfig.name}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/addItems"
                  className="glass-button text-center px-8 py-3 font-semibold rounded-xl"
                  whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(16, 185, 129, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Report Item
                </motion.a>
                <motion.a
                  href="/allItems"
                  className="px-8 py-3 font-semibold rounded-xl border-2 border-white/40 text-white backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all text-center"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.6)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Browse Items
                </motion.a>
              </div>
            </motion.div>

            {/* Right Illustration with Glass Effect */}
            <div className="w-full md:w-1/2 flex justify-center">
              <IllustrationCard />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Stats Cards - Theme-Aware */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
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
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background - Light theme: dark green, Dark theme: glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-700 dark:from-slate-800/40 dark:to-slate-900/40 rounded-2xl backdrop-blur-md dark:backdrop-blur-lg border border-teal-500/30 dark:border-teal-500/20"/>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <p className="text-2xl md:text-3xl mb-2">{stat.icon}</p>
              <p className="text-white dark:text-white text-lg md:text-2xl font-bold">
                {stat.value}
              </p>
              <p className="text-white/90 dark:text-teal-100 text-xs md:text-sm mt-2 font-semibold">
                {stat.label}
              </p>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: 'radial-gradient(circle at center, rgba(16,185,129,0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
