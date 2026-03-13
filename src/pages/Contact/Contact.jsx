import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import { Helmet } from 'react-helmet-async';
import animationData from '../../assets/contact.json';
import { schoolConfig } from '../../config/schoolConfig';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'All fields are required!',
                position: 'top',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'The Lost & Found office will respond shortly.',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="min-h-screen bg-zetech-light py-16 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Contact Us - {schoolConfig.name} Lost & Found</title>
            </Helmet>
            
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <div className="flex justify-center mb-6">
                        <Lottie options={lottieOptions} height={120} width={120} />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-zetech-dark mb-4 leading-tight">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Have questions or need assistance with a lost item? We're here to help. Reach out to our Lost & Found office and we'll get back to you promptly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Card - Location */}
                    <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="flex items-center justify-center w-14 h-14 bg-zetech-primary/10 rounded-xl mb-6 group-hover:bg-zetech-primary/15 transition-colors">
                            <FaMapMarkerAlt className="text-zetech-primary text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-zetech-dark mb-3">Office Location</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-1">
                            Administration Building
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {schoolConfig.contact.address}
                        </p>
                    </div>

                    {/* Contact Info Card - Hours */}
                    <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="flex items-center justify-center w-14 h-14 bg-zetech-secondary/10 rounded-xl mb-6 group-hover:bg-zetech-secondary/15 transition-colors">
                            <FaClock className="text-zetech-secondary text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-zetech-dark mb-3">Office Hours</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">
                            <span className="font-semibold text-gray-800">Mon - Fri</span>
                            <br />
                            8:00 AM – 5:00 PM
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <span className="font-semibold text-gray-800">Saturday</span>
                            <br />
                            9:00 AM – 1:00 PM
                        </p>
                    </div>

                    {/* Contact Info Card - Phone & Email */}
                    <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="flex items-center justify-center w-14 h-14 bg-zetech-accent/10 rounded-xl mb-6 group-hover:bg-zetech-accent/15 transition-colors">
                            <FaPhone className="text-zetech-accent text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-zetech-dark mb-3">Contact Info</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            <span className="font-semibold text-gray-800">Phone</span>
                            <br />
                            {schoolConfig.contact.phone}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <span className="font-semibold text-gray-800">Email</span>
                            <br />
                            {schoolConfig.contact.email}
                        </p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-zetech-dark mb-2">Send us a Message</h2>
                        <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none"
                                    placeholder="Tell us about your inquiry..."
                                    rows="5"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-zetech-primary hover:bg-zetech-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
