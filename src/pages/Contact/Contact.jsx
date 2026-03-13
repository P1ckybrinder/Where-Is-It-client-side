import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import { Helmet } from 'react-helmet-async';
import animationData from '../../assets/contact.json';
import { schoolConfig } from '../../config/schoolConfig';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

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
        <div className="min-h-screen flex items-center justify-center bg-zetech-light">
            <Helmet>
                <title>Contact Us - {schoolConfig.name} Lost & Found</title>
            </Helmet>
            <div className="container px-6 py-12">
                {/* Contact Section */}
                <div className="flex items-center justify-center mb-8">
                    <div className="mr-6">
                        <Lottie options={lottieOptions} height={150} width={150} />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-zetech-primary mb-4">Contact Lost & Found Office</h2>
                        <p className="text-sm font-semibold text-gray-600">Have questions? Need help with a claim? Reach out to us!</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-zetech-primary">
                            <div className="flex items-center gap-3 mb-2">
                                <FaMapMarkerAlt className="text-zetech-primary text-xl" />
                                <h3 className="font-bold text-gray-800">Office Location</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Administration Building, Ground Floor</p>
                            <p className="text-gray-600 text-sm">{schoolConfig.contact.address}</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-zetech-secondary">
                            <div className="flex items-center gap-3 mb-2">
                                <FaClock className="text-zetech-secondary text-xl" />
                                <h3 className="font-bold text-gray-800">Office Hours</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                            <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-zetech-accent">
                            <div className="flex items-center gap-3 mb-2">
                                <FaPhone className="text-zetech-accent text-xl" />
                                <h3 className="font-bold text-gray-800">Phone & Email</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{schoolConfig.contact.phone}</p>
                            <p className="text-gray-600 text-sm">{schoolConfig.contact.email}</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                        <h3 className="text-xl font-bold text-zetech-primary mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:border-zetech-primary"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:border-zetech-primary"
                                    placeholder="your.email@zetech.ac.ke"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zetech-primary focus:border-zetech-primary"
                                    placeholder="Describe your inquiry..."
                                    rows="4"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-zetech-primary text-white py-2 px-4 rounded-lg hover:bg-zetech-accent transition duration-300"
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
