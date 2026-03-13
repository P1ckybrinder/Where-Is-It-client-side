import React from "react";
import { FaBullseye, FaHandshake, FaHeart, FaEnvelope, FaSearch, FaShieldAlt, FaUniversity, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { schoolConfig } from "../../config/schoolConfig";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-slate-900 dark:to-gray-900">
      <Helmet>
        <title>About Us - {schoolConfig.name} Lost & Found</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zetech-primary to-teal-500 rounded-2xl mb-8 shadow-2xl"
          >
            <FaUniversity className="text-4xl text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent"
          >
            About {schoolConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Revolutionizing how campus communities reconnect with lost belongings through innovative technology and trust-based systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Student Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Secure & Verified</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"

      {/* Mission & Values Section */}
      <section className="py-20 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-10 sm:p-12">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaBullseye className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-8 text-base">
                To ensure no item stays lost on {schoolConfig.shortName} campus. We connect finders with owners through innovative technology that makes reporting and claiming items intuitive, secure, and entirely <span className="font-semibold text-blue-600 dark:text-blue-400">hassle-free</span>.
              </p>
            </div>
          </motion.div>

          {/* Promise Card */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 shadow-xl border border-teal-400/30 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-10 sm:p-12">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <FaHandshake className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Promise</h3>
              <p className="text-white/90 leading-8 text-base">
                Every claim is handled with integrity and care. We employ rigorous <span className="font-semibold text-teal-100">verification systems</span> to ensure items are returned to their rightful owners, upholding trust and transparency across our entire community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Our streamlined process reunites you with your belongings</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-teal-300 to-transparent" />

          {[
            { icon: FaSearch, number: "01", title: "Report", text: "Post detailed information with photos and exact campus location of your lost or found item" },
            { icon: FaShieldAlt, number: "02", title: "Verify", text: "Our security team reviews claims and verifies ownership through a rigorous verification process" },
            { icon: FaHeart, number: "03", title: "Reunite", text: "Collect your item securely from our Lost & Found office with proper verification" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-white font-bold shadow-lg">
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <item.icon className="text-xl text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-7">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Campus Collection Points */}
      <section className="py-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Collection Points</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Find us at these convenient campus locations</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {schoolConfig.locations.slice(0, 8).map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white">
                  <span className="text-lg">📍</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">{location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">The principles that guide our mission</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Integrity", icon: "✓", text: "Honest reporting and verified claims ensure trust", color: "from-blue-500 to-blue-600" },
            { title: "Community", icon: "👥", text: "Students helping students creates lasting impact", color: "from-teal-500 to-teal-600" },
            { title: "Security", icon: "🔒", text: "Protected data and secure systems safeguard privacy", color: "from-purple-500 to-purple-600" }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${value.color} p-8 shadow-xl text-white hover:shadow-2xl transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/90 leading-relaxed">{value.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-teal-500/10 rounded-3xl" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white dark:bg-slate-800 rounded-3xl p-12 sm:p-16 shadow-2xl border border-gray-100 dark:border-slate-700 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mb-8 shadow-lg"
          >
            <FaEnvelope className="text-3xl text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Questions or feedback? Our team is here to help support your Lost & Found experience on campus.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lost & Found Office</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{schoolConfig.contact.phone}</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-slate-600" />
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{schoolConfig.contact.email}</p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Us Now
              <FaArrowRight className="text-lg" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      </div>
    </div>
  );
};

export default AboutUs;
