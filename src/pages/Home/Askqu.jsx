import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle, FaShieldAlt, FaUserCheck, FaBell, FaClock } from 'react-icons/fa';

const Askqu = () => {
    const [activeCategory, setActiveCategory] = useState('general');
    const [expandedItem, setExpandedItem] = useState(0);

    const categories = [
        { id: 'general', label: 'Getting Started', icon: FaQuestionCircle },
        { id: 'security', label: 'Security & Privacy', icon: FaShieldAlt },
        { id: 'claims', label: 'Claiming Items', icon: FaUserCheck },
        { id: 'notifications', label: 'Notifications', icon: FaBell }
    ];

    const faqs = {
        general: [
            {
                question: 'How do I report a lost item?',
                answer: 'Sign in to your account, click "Report Item," select "Lost," and fill out the form with detailed descriptions, photos, location, and date. The security office will verify your report within 24 hours.'
            },
            {
                question: 'What should I do if I find an item?',
                answer: 'Click "Report Item," select "Found," provide clear photos and location details, and submit. The system will automatically match it with lost item reports and notify potential owners.'
            },
            {
                question: 'Is there a fee to use the platform?',
                answer: 'No, our platform is completely free for all Zetech students and staff. We aim to reunite everyone with their belongings at no cost.'
            },
            {
                question: 'How long are items kept in the system?',
                answer: 'Lost and found items remain in the system for 30 days. After that, they are archived. You can contact the Lost & Found office to retrieve older items.'
            }
        ],
        security: [
            {
                question: 'How does the platform ensure privacy?',
                answer: 'We only share essential contact information between finders and owners. All personal data is encrypted and never sold to third parties. The security office verifies all claims before item release.'
            },
            {
                question: 'What happens with my personal information?',
                answer: 'Your data is stored securely on encrypted servers accessible only to authorized staff. You can delete your account anytime, which removes all associated data.'
            },
            {
                question: 'Can anyone see my contact details?',
                answer: 'No. Contact details are only shared when both parties agree to connect through our platform. The system never displays your information publicly.'
            }
        ],
        claims: [
            {
                question: 'What documents do I need to claim a lost item?',
                answer: 'Bring a valid ID, proof of purchase if available, and be prepared to answer security questions about the item. The verification process usually takes 5-10 minutes.'
            },
            {
                question: 'How do I claim a found item?',
                answer: 'When you find a matching item, click "Claim Item," answer verification questions, and provide proof of ownership. The security office will review and approve your claim.'
            },
            {
                question: 'What if someone else claims my item first?',
                answer: 'Our verification system prioritizes the true owner. If conflicting claims exist, the security office will verify ownership through questions only the real owner can answer correctly.'
            }
        ],
        notifications: [
            {
                question: 'Will I get notified when someone finds my item?',
                answer: 'Yes! If notification preferences are enabled, you\'ll receive an email or SMS when a matching item is found. Go to Settings > Notifications to customize your preferences.'
            },
            {
                question: 'How can I manage my notification settings?',
                answer: 'Visit Settings > Notification Settings to choose which notifications you want: item matches, status updates, new found items in your category, and claim confirmations.'
            },
            {
                question: 'Can I set custom notification keywords?',
                answer: 'Yes! In your notification settings, you can specify item categories, locations, or keywords to only receive alerts about items matching your criteria.'
            },
            {
                question: 'When are notifications sent?',
                answer: 'Notifications are sent immediately when a match is found. You can choose to receive them via email, SMS, or in-app notifications (based on your subscription).'
            }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-zetech-light to-white py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaQuestionCircle className="text-4xl text-zetech-primary" />
                        <h1 className="text-4xl md:text-5xl font-bold text-zetech-dark">Frequently Asked Questions</h1>
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about reporting, claiming, and managing lost and found items on campus
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-3 mb-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <motion.button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setExpandedItem(0);
                                }}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? 'bg-zetech-primary text-white shadow-lg scale-105'
                                        : 'bg-white text-zetech-primary border-2 border-zetech-primary hover:shadow-lg'
                                }`}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="text-lg" />
                                <span className="hidden sm:inline">{category.label}</span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* FAQ Items */}
                <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {faqs[activeCategory].map((item, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            variants={itemVariants}
                            layout
                        >
                            <motion.button
                                onClick={() => setExpandedItem(expandedItem === index ? -1 : index)}
                                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-zetech-primary hover:border-zetech-secondary"
                                whileHover={{ x: 5 }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-zetech-dark group-hover:text-zetech-primary transition-colors">
                                            {item.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedItem === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 mt-1"
                                    >
                                        <FaChevronDown className="text-zetech-primary text-xl" />
                                    </motion.div>
                                </div>
                            </motion.button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: expandedItem === index ? 'auto' : 0,
                                    opacity: expandedItem === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-4 bg-zetech-light border-l-4 border-zetech-secondary rounded-b-lg">
                                    <p className="text-gray-700 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact CTA */}
                <motion.div 
                    className="mt-12 p-8 bg-gradient-to-r from-zetech-primary to-zetech-accent rounded-lg text-white text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-2">Didn't find your answer?</h3>
                    <p className="mb-4 text-blue-100">Our support team is ready to help you 24/7</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="px-6 py-3 bg-white text-zetech-primary rounded-lg font-semibold hover:bg-zetech-light transition-colors">
                            Contact Support
                        </a>
                        <a href="mailto:support@zetech.ac.ke" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zetech-primary transition-colors">
                            Email Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Askqu;
