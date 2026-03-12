import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { schoolConfig } from '../../config/schoolConfig';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            icon: 'success',
            title: 'Thank You for Subscribing!',
            text: 'You will receive updates about lost & found items.',
            position: 'top',
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
        setEmail('');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeInOut' }
        }
    };

    const inputVariants = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="bg-zetech-light p-12 m-12 rounded-2xl">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6 text-zetech-primary"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    Stay Updated on Campus Items
                </motion.h2>
                <motion.p
                    className="text-gray-600 font-semibold mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    Subscribe to get notified when items matching your description are found at {schoolConfig.shortName}.
                </motion.p>
                <form
                    className="flex flex-col md:flex-row justify-center items-center gap-4"
                    onSubmit={handleSubmit}
                >
                    <motion.input
                        type="email"
                        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zetech-primary"
                        placeholder="Enter your school email"
                        value={email}
                        onChange={handleChange}
                        required
                        variants={inputVariants}
                        initial="hidden"
                        animate="show"
                    />
                    <motion.button
                        type="submit"
                        className="bg-zetech-primary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-zetech-accent transition duration-300"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="show"
                    >
                        Subscribe
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
