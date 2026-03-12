import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Latest Items on Campus</h2>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">Check out the most recently reported lost & found items!</p>
            </div>

            {/* Loader */}
            {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-500 border-solid"></div>
                </div>
            ) : (
                <>
                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                        {items.length > 0 ? (
                            items.map((item) => <ItemsCard key={item._id} item={item} />)
                        ) : (
                            <p className="text-center text-gray-500 col-span-full text-lg font-medium">
                                No items available.
                            </p>
                        )}
                    </div>

                    {/* Footer Section */}
                    <div className="text-center">
                        <Link to="/allItems">
                            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-150 focus:outline-none font-semibold">
                                See More Items
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default LatestItems;
