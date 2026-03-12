import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

const ItemsCard = ({ item }) => {
  const { itemType, title, description, image, verificationStatus } = item;
  const navigate = useNavigate();
  
  const isVerified = verificationStatus === 'verified';

  return (
    <div className="rounded-lg shadow-lg bg-white overflow-hidden border flex flex-col p-2 mb-2">
      {/* Image Section with Tag */}
      <figure className="rounded-t-lg overflow-hidden relative h-40">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={image || 'https://via.placeholder.com/300'} // Fallback image
          alt={title}
          onError={(e) => { 
            e.target.src = 'https://via.placeholder.com/300'; // Fallback on error
          }}
        />
        {/* Item Type Tag */}
        <div className={`absolute top-1 right-1 px-3 py-1 text-xs font-medium shadow-md text-white ${
          itemType === 'Lost' ? 'bg-red-500' : itemType === 'Found' ? 'bg-green-600' : 'bg-zetech-primary'
        }`}>
          {itemType}
        </div>
        {/* Verification Badge */}
        <div className={`absolute top-1 left-1 px-2 py-1 text-xs font-medium shadow-md rounded flex items-center gap-1 ${
          isVerified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {isVerified ? <FaCheckCircle /> : <FaClock />}
          {isVerified ? 'Verified' : 'Pending'}
        </div>
      </figure>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mt-1">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-1 mb-2">{description.slice(0, 60)}...</p>

        {/* Action Button */}
        <button
          onClick={() => navigate(`/items/${item._id}`)}
          className="mt-auto w-28 mx-auto bg-zetech-primary text-white py-2 px-2 rounded-lg hover:bg-zetech-accent transition duration-300 text-xs"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ItemsCard;
