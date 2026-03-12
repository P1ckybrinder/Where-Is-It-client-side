import React from 'react';
import { motion } from 'framer-motion';
import { schoolConfig } from '../../config/schoolConfig';
import { GlassButton, GlassCard } from '../../components/glass';

const Banner = () => {
  // Premium Illustration Card with Enhanced Glass Effect
  const IllustrationCard = () => (
    <motion.div
      className="relative w-full max-w-sm h-60"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <div className="glass-liquid-premium p-8 w-full h-full flex items-center justify-center rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl">
        <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle with glow */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="150" cy="120" r="100" fill="rgba(255,255,255,0.15)" stroke="rgba(110,231,183,0.4)" strokeWidth="2" filter="url(#glow)"/>
          
          {/* Person sitting at desk */}
          <rect x="100" y="110" width="100" height="60" rx="8" fill="rgba(255,255,255,0.2)"/>
          <circle cx="130" cy="95" r="12" fill="rgba(255,255,255,0.9)"/>
          <rect x="115" y="110" width="30" height="50" fill="rgba(255,255,255,0.8)"/>
          <rect x="150" y="120" width="40" height="40" fill="rgba(110,231,183,0.7)" rx="4"/>
          
          {/* Network nodes - animated effect */}
          <circle cx="80" cy="50" r="6" fill="rgba(16,185,129,0.9)" filter="url(#glow)"/>
          <circle cx="150" cy="20" r="6" fill="rgba(16,185,129,0.9)" filter="url(#glow)"/>
          <circle cx="220" cy="50" r="6" fill="rgba(16,185,129,0.9)" filter="url(#glow)"/>
          <circle cx="240" cy="120" r="6" fill="rgba(16,185,129,0.9)" filter="url(#glow)"/>
          
          {/* Connection lines with glow */}
          <line x1="80" y1="50" x2="150" y2="20" stroke="rgba(110,231,183,0.6)" strokeWidth="2.5" filter="url(#glow)"/>
          <line x1="150" y1="20" x2="220" y2="50" stroke="rgba(110,231,183,0.6)" strokeWidth="2.5" filter="url(#glow)"/>
          <line x1="220" y1="50" x2="240" y2="120" stroke="rgba(110,231,183,0.6)" strokeWidth="2.5" filter="url(#glow)"/>
          <line x1="130" y1="110" x2="220" y2="50" stroke="rgba(110,231,183,0.4)" strokeWidth="1.5" strokeDasharray="3,3" filter="url(#glow)"/>
        </svg>
      </div>
    </motion.div>
  );

  return (
    <div className="container mx-auto my-8 px-4">
      <motion.div
        className="relative w-full overflow-hidden rounded-3xl shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Premium Gradient Background - Multi-layered */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-zetech-dark to-zetech-primary rounded-3xl opacity-95"/>
        
        {/* Animated Background Blobs with Glow */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-zetech-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"/>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-zetech-primary rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"/>
        </div>

        {/* Ultra-Premium Glass Effect Overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 pointer-events-none rounded-3xl border border-white/20"/>
        
        {/* Inner Border Glow */}
        <div className="absolute inset-1 rounded-3xl border border-gradient-to-r from-zetech-accent/40 via-white/10 to-zetech-secondary/30 pointer-events-none"/>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            
            {/* Left Content with Enhanced Animations */}
            <motion.div
              className="w-full md:w-1/2 text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-glass-light leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Lost? Found? Let's Connect!
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Whether you've lost an item or found one, this is the place to reunite. Together, we can bring what's lost back home across {schoolConfig.name}.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <GlassButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = '/addItems'}
                  className="px-8 md:px-10 text-center font-semibold"
                >
                  Report Item
                </GlassButton>
                <motion.a
                  href="/allItems"
                  className="glass-button-secondary px-8 md:px-10 py-3 md:py-4 font-semibold rounded-lg text-center text-white border border-white/40 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all text-base md:text-lg"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.15)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Browse Items
                </motion.a>
              </motion.div>

              {/* Trust/Info Badge */}
              <motion.div
                className="mt-8 glass-badge gap-2 w-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-green-600 dark:text-green-400">✓</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Trusted by 500+ students</span>
              </motion.div>
            </motion.div>

            {/* Right Illustration with Glass Effect */}
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <IllustrationCard />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Stats Cards with Enhanced Glass */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {[
          { label: 'Items Reunited', value: '1,200+', icon: '📦' },
          { label: 'Active Users', value: '500+', icon: '👥' },
          { label: 'Success Rate', value: '85%', icon: '✨' },
          { label: 'Campus Locations', value: '20+', icon: '📍' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="glass-liquid-premium p-4 md:p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <div className="text-3xl md:text-4xl mb-2">{stat.icon}</div>
            <p className="text-white text-lg md:text-2xl font-bold text-glass-light">
              {stat.value}
            </p>
            <p className="text-white/70 text-xs md:text-sm mt-2 font-semibold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
