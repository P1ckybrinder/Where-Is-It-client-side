import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaShieldAlt, FaUserCheck, FaBell } from 'react-icons/fa';

const Askqu = () => {
    const [activeCategory, setActiveCategory] = useState('general');
    const [expandedItem, setExpandedItem] = useState(0);

    const categories = [
        { id: 'general', label: 'Getting Started', icon: FaShieldAlt },
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

    return (
        <div className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Header with Logo */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src="/zetech-logo.svg" alt="Zetech" className="h-10 w-10 object-contain" />
                        <h1 className="text-3xl md:text-4xl font-bold text-zetech-dark">FAQs</h1>
                    </div>
                    <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about reporting and claiming items
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-2 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setExpandedItem(0);
                                }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                                    activeCategory === category.id
                                        ? 'bg-zetech-primary text-white shadow-sm'
                                        : 'bg-gray-100 text-zetech-primary hover:bg-gray-200'
                                }`}
                            >
                                <Icon className="text-base" />
                                <span className="hidden sm:inline">{category.label}</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-2">
                    {faqs[activeCategory].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="group"
                        >
                            <button
                                onClick={() => setExpandedItem(expandedItem === index ? -1 : index)}
                                className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-zetech-primary"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-base font-semibold text-zetech-dark group-hover:text-zetech-primary transition-colors">
                                        {item.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: expandedItem === index ? 180 : 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="flex-shrink-0"
                                    >
                                        <FaChevronDown className="text-zetech-primary text-base" />
                                    </motion.div>
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: expandedItem === index ? 'auto' : 0,
                                    opacity: expandedItem === index ? 1 : 0
                                }}
                                transition={{ duration: 0.15 }}
                                className="overflow-hidden"
                            >
                                <div className="px-4 py-3 bg-zetech-light text-sm text-gray-700 border-l-4 border-zetech-secondary rounded-b-lg">
                                    {item.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div 
                    className="mt-10 p-6 bg-zetech-primary rounded-lg text-white text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.25 }}
                >
                    <h3 className="text-lg font-bold mb-2">Didn't find your answer?</h3>
                    <p className="mb-3 text-sm text-blue-100">Contact our support team</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="/contact" className="px-5 py-2 bg-white text-zetech-primary rounded-lg font-semibold text-sm hover:bg-zetech-light transition-colors">
                            Contact Support
                        </a>
                        <a href="mailto:support@zetech.ac.ke" className="px-5 py-2 border border-white text-white rounded-lg font-semibold text-sm hover:bg-zetech-accent transition-colors">
                            Email Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Askqu;
