import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { GlassCard } from '../../components/glass';

const Reviews = () => {
    const [reviews] = useState([
        {
            "_id": "1",
            "name": "John Doe",
            "rating": 5,
            "comment": "This platform helped me recover my lost bag in no time! Excellent service and a very user-friendly interface. Highly recommended!"
        },
        {
            "_id": "2",
            "name": "Jane Smith",
            "rating": 4,
            "comment": "The service is good, but I think it would be even better if there were more categories for different items. Overall, I'm satisfied."
        },
        {
            "_id": "3",
            "name": "Fahim Khan",
            "rating": 5,
            "comment": "Amazing! I found my missing phone using this platform, and it was a super easy process. Thank you!"
        },
        {
            "_id": "4",
            "name": "Ayesha Siddiqui",
            "rating": 3,
            "comment": "It works well for lost items, but I had difficulty reaching out to support. Some improvement in customer service would make this perfect."
        },
        {
            "_id": "5",
            "name": "Ali Rahman",
            "rating": 4,
            "comment": "Very reliable website. I was able to post my lost item and get quick responses from people who found similar items."
        },
        {
            "_id": "6",
            "name": "Sara Ali",
            "rating": 5,
            "comment": "A fantastic experience! Found my lost wallet in less than 24 hours. The interface is clean, and the process is so simple."
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(1);

    const totalReviews = reviews.length;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setCardsPerSlide(3);
            } else if (window.innerWidth >= 768) {
                setCardsPerSlide(2);
            } else {
                setCardsPerSlide(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Star Rating Component
    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <FaStar
                    key={i}
                    size={18}
                    className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
                />
            ))}
        </div>
    );

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - cardsPerSlide));
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            Math.min(prev + cardsPerSlide, Math.max(0, totalReviews - cardsPerSlide))
        );
    };

    const visibleReviews = reviews.slice(currentIndex, currentIndex + cardsPerSlide);

    return (
        <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-slate-900 dark:to-slate-800/50 py-16 px-4 rounded-3xl">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text-green mb-3">Student Testimonials</h2>
                    <p className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
                        See what students say about our Lost & Found service!
                    </p>
                </div>

                {/* Reviews Carousel */}
                <div className="relative mb-8">
                    {/* Navigation Buttons */}
                    {totalReviews > cardsPerSlide && (
                        <>
                            <button
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-150"
                            >
                                <FaChevronLeft size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex + cardsPerSlide >= totalReviews}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-150"
                            >
                                <FaChevronRight size={20} />
                            </button>
                        </>
                    )}

                    {/* Review Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
                        {visibleReviews.map((review) => (
                            <div
                                key={review._id}
                                className="glass-card-premium p-6 rounded-2xl transition-all duration-150 hover-glow"
                            >
                                {/* Header with Name */}
                                <div className="mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                                        {review.name}
                                    </h3>
                                    <StarRating rating={review.rating} />
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mb-8">
                    {[...Array(Math.ceil(totalReviews / cardsPerSlide))].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx * cardsPerSlide)}
                            className={`w-2 h-2 rounded-full transition-all ${Math.floor(currentIndex / cardsPerSlide) === idx
                                    ? 'bg-emerald-500 w-8'
                                    : 'bg-slate-300 dark:bg-slate-600'
                                }`}
                        />
                    ))}
                </div>

                {/* Footer Section */}
                <div className="text-center">
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        Have a story to share? Your feedback helps us improve!
                    </p>
                    <Link to="/contact">
                        <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-150">
                            Share Your Story
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
