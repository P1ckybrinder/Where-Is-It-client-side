import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ItemsCard from './ItemsCard';

const LatestItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://b10a11-server-side-noorjahan220.vercel.app/items')
            .then((res) => res.json())
            .then((data) => {
                const sortedItems = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                const latestItems = sortedItems.slice(0, 6);
                setItems(latestItems);
            })
            .catch((error) => console.error('Error fetching items:', error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Header Section */}
            <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold gradient-text-green mb-2">Latest Items on Campus</h2>
                <p className="text-slate-600 dark:text-slate-400 font-semibold text-lg">Check out the most recently reported lost & found items!</p>
            </motion.div>

            {/* Loader */}
            {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-cyan-500 border-solid dark:border-cyan-400"></div>
                </div>
            ) : (
                <>
                    {/* Items Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, staggerChildren: 0.05 }}
                    >
                        {items.length > 0 ? (
                            items.map((item) => <ItemsCard key={item._id} item={item} />)
                        ) : (
                            <p className="text-center text-slate-500 col-span-full text-lg font-medium">
                                No items reported yet.
                            </p>
                        )}
                    </motion.div>

                    {/* Footer Section */}
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                    >
                        <Link to="/allItems">
                            <motion.button 
                                className="bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                See All Items
                            </motion.button>
                        </Link>
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default LatestItems;
