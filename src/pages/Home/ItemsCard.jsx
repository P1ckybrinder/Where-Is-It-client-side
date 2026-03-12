import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ItemsCard = ({ item }) => {
  const { itemType, title, description, image } = item;
  const navigate = useNavigate();

  return (
    <motion.div 
      className="glass-liquid-premium rounded-2xl overflow-hidden border border-cyan-400/40 dark:border-cyan-500/20 flex flex-col p-4 hover-glow group"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Image Section with Tag */}
      <figure className="rounded-xl overflow-hidden relative h-40 mb-3 shadow-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={image || 'https://via.placeholder.com/300'}
          alt={title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300';
          }}
        />
        {/* Item Type Tag - Cyan/Glass Style */}
        <div className="absolute top-2 right-2 bg-cyan-500/90 dark:bg-cyan-600/80 backdrop-blur-md text-white px-3 py-1 text-xs font-semibold shadow-lg rounded-lg border border-cyan-400/50">
          {itemType}
        </div>
      </figure>

      {/* Card Content */}
      <div className="flex flex-col flex-grow">
        {/* Title */}
        <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 flex-grow">
          {description.slice(0, 60)}...
        </p>

        {/* Action Button - Cyan Gradient */}
        <motion.button
          onClick={() => navigate(`/items/${item._id}`)}
          className="mt-auto w-full bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 text-white py-2 px-3 rounded-lg hover:shadow-lg font-semibold text-sm transition-all duration-200"
          whileHover={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ItemsCard;
