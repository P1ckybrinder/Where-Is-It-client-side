import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsCard = ({ item }) => {
  const { itemType, title, description, image } = item;
  const navigate = useNavigate();

  return (
    <div
      className="glass-liquid-premium rounded-2xl overflow-hidden border border-emerald-400/40 dark:border-emerald-500/20 flex flex-col p-4 hover-glow group transition-all duration-150"
    >
      {/* Image Section with Tag */}
      <figure className="rounded-xl overflow-hidden relative h-40 mb-3 shadow-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          src={image || 'https://via.placeholder.com/300'}
          alt={title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300';
          }}
        />
        {/* Item Type Tag - Green/Glass Style */}
        <div className="absolute top-2 right-2 bg-emerald-500/90 dark:bg-emerald-600/80 backdrop-blur-md text-white px-3 py-1 text-xs font-semibold shadow-lg rounded-lg border border-emerald-400/50">
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

        {/* Action Button - Green Gradient */}
        <button
          onClick={() => navigate(`/items/${item._id}`)}
          className="mt-auto w-full bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white py-2 px-3 rounded-lg hover:shadow-lg font-semibold text-sm transition-all duration-150 will-change-shadow"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ItemsCard;

