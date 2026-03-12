import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + cardsPerSlide) % totalReviews);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - cardsPerSlide + totalReviews) % totalReviews);
    };

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <FaStar
                    key={i}
                    className={i < rating ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'}
                    size={16}
                />
            ))}
        </div>
    );

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 mb-12">
            {/* Header Section */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold gradient-text-green mb-3">Student Testimonials</h2>
                <p className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
                    See what students say about our Lost & Found service!
                </p>
            </motion.div>

            {/* Slider Container */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}
                >
                    {reviews.map((review, idx) => (
                        <div
                            key={review._id}
                            className={`flex-shrink-0 w-full px-3 md:px-4 ${
                                cardsPerSlide === 3 ? 'md:w-1/3' : cardsPerSlide === 2 ? 'md:w-1/2' : 'w-full'
                            }`}
                        >
                            <GlassCard
                                variant="elevated"
                                delay={idx * 0.1}
                                className="h-full"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Header with Name */}
                                    <div className="mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                                            {review.name}
                                        </h3>
                                        <StarRating rating={review.rating} />
                                    </div>

                                    {/* Comment */}
                                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed flex-grow mb-4">
                                        "{review.comment}"
                                    </p>

                                    {/* Rating Badge */}
                                    <motion.div
                                        className="glass-badge w-fit"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {review.rating} out of 5 stars
                                    </motion.div>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <motion.button
                    onClick={goToPreviousSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 glass-button-primary p-3 z-10 hidden md:flex items-center justify-center"
                >
                    <FaChevronLeft size={20} />
                </motion.button>
                <motion.button
                    onClick={goToNextSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 glass-button-primary p-3 z-10 hidden md:flex items-center justify-center"
                >
                    <FaChevronRight size={20} />
                </motion.button>
            </div>

            {/* Dots Indicator for Mobile */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
                {[...Array(Math.ceil(totalReviews / cardsPerSlide))].map((_, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => setCurrentIndex(idx * cardsPerSlide)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            Math.floor(currentIndex / cardsPerSlide) === idx
                                ? 'bg-cyan-500 w-8'
                                : 'bg-slate-300 dark:bg-slate-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                    />
                ))}
            </div>

            {/* Footer Section */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.3 }}
            >
                <Link to="/addReview">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-button-primary px-8 py-3 text-white font-semibold rounded-lg"
                    >
                        Share Your Experience
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Reviews;

