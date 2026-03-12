import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaBell } from 'react-icons/fa';
import { schoolConfig } from '../../config/schoolConfig';
import { GlassCard, GlassInput, GlassButton } from '../../components/glass';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Subscribed!',
                text: 'You will receive notifications about matching items.',
                position: 'top',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });

            setEmail('');
            setIsSubmitting(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeInOut', staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section
            className="container mx-auto px-4 md:px-6 py-12 md:py-16 m-4 md:m-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <GlassCard variant="elevated" className="glass-liquid-premium p-8 md:p-12">
                <div className="flex flex-col items-center">
                    {/* Icon */}
                    <motion.div
                        className="mb-6"
                        variants={itemVariants}
                    >
                        <div className="glass-button-primary p-4 rounded-full">
                            <FaBell className="text-white" size={32} />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold gradient-text-green mb-3 text-center"
                        variants={itemVariants}
                    >
                        Stay Updated on Campus Items
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-slate-600 dark:text-slate-400 font-semibold text-center mb-8 max-w-2xl text-lg"
                        variants={itemVariants}
                    >
                        Subscribe to get instant notifications when items matching your description are found at {schoolConfig.shortName}. Never miss a match!
                    </motion.p>

                    {/* Form */}
                    <motion.form
                        className="flex flex-col md:flex-row gap-4 w-full md:max-w-2xl justify-center items-center"
                        onSubmit={handleSubmit}
                        variants={itemVariants}
                    >
                        <GlassInput
                            type="email"
                            placeholder="Enter your school email"
                            value={email}
                            onChange={handleChange}
                            required
                            className="flex-1 w-full md:w-auto"
                            label={null}
                        />
                        <GlassButton
                            type="submit"
                            variant="primary"
                            size="md"
                            loading={isSubmitting}
                            disabled={isSubmitting}
                            className="w-full md:w-auto"
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </GlassButton>
                    </motion.form>

                    {/* Trust Message */}
                    <motion.p
                        className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-6 text-center"
                        variants={itemVariants}
                    >
                        We respect your privacy. Unsubscribe at any time.
                    </motion.p>
                </div>
            </GlassCard>
        </motion.section>
    );
};

export default Newsletter;
