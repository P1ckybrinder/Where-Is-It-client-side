import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { schoolConfig } from '../../config/schoolConfig';
import { GlassSearchBar, GlassCard, GlassButton } from '../../components/glass';
import ItemsCard from '../Home/ItemsCard';

const AllItems = () => {
    const items = useLoaderData();
    const [searchValue, setSearchValue] = useState('');
    const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    
    const categories = [...new Set(items.map(item => item.category))];
    const suggestions = [...new Set(items.map(item => item.title))].slice(0, 8);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchValue(searchValue);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchValue]);

    const filteredItems = items.filter(
        (item) =>
            (selectedCategory ? item.category === selectedCategory : true) &&
            (
                item.title?.toLowerCase().includes(debouncedSearchValue.toLowerCase()) || 
                item.location?.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
                item.category?.toLowerCase().includes(debouncedSearchValue.toLowerCase())
            )
    );

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <Helmet>
                <title>Lost & Found Items - {schoolConfig.name}</title>
            </Helmet>
            
            {/* Header Section */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold gradient-text-green mb-3">
                    Discover Items
                </h1>
                <p className="text-slate-600 dark:text-slate-400 font-semibold text-lg">
                    Find what you're looking for or list lost and found items easily!
                </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
                className="mb-8 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div className="w-full max-w-2xl">
                    <GlassSearchBar
                        placeholder="Search by title, location, or category..."
                        value={searchValue}
                        onSearch={setSearchValue}
                        suggestions={suggestions}
                        onSuggestionClick={(suggestion) => setSearchValue(suggestion)}
                    />
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Section - Categories */}
                <motion.div
                    className="lg:w-1/4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <GlassCard variant="elevated" className="p-6 sticky top-24">
                        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                            Categories
                        </h3>
                        <div className="space-y-2">
                            <motion.button
                                onClick={() => setSelectedCategory('')}
                                whileHover={{ x: 4 }}
                                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                                    !selectedCategory
                                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 text-white'
                                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                            >
                                All Categories
                            </motion.button>

                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    whileHover={{ x: 4 }}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                                        selectedCategory === category
                                            ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 text-white'
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                    }`}
                                >
                                    {category}
                                    <span className="text-xs ml-2 opacity-70">
                                        ({items.filter(i => i.category === category).length})
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Main Content Section */}
                <motion.div
                    className="lg:w-3/4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {loading ? (
                        <div className="flex justify-center items-center h-96">
                            <div className="glass-card-default p-8 rounded-2xl">
                                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-center text-slate-600 dark:text-slate-400 font-semibold">
                                    Loading items...
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item, idx) => (
                                    <ItemsCard 
                                        key={item._id} 
                                        item={item}
                                        delay={idx * 0.05}
                                    />
                                ))
                            ) : (
                                <motion.div
                                    className="col-span-full text-center py-16"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="glass-card-default p-12 rounded-2xl inline-block">
                                        <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                            No items found
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Try adjusting your search or category filters
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Footer Section */}
            <motion.div
                className="text-center mt-16 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <Link to="/addItems">
                    <GlassButton
                        variant="primary"
                        size="lg"
                    >
                        Post Your Item
                    </GlassButton>
                </Link>
            </motion.div>
        </div>
    );
};

export default AllItems;
