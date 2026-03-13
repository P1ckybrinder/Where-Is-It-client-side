import React from "react";
import { FaBullseye, FaHandshake, FaHeart, FaEnvelope, FaSearch, FaShieldAlt, FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";
import { schoolConfig } from "../../config/schoolConfig";
import { Helmet } from "react-helmet-async";
import { GlassCard } from "../../components/glass/GlassCard";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
      <Helmet>
        <title>About Us - {schoolConfig.name} Lost & Found</title>
      </Helmet>
      
      {/* Hero Section */}
      <section className="text-center mb-20">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-zetech-primary to-zetech-secondary rounded-full flex items-center justify-center shadow-lg">
            <FaUniversity className="text-3xl text-white" />
          </div>
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-zetech-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About {schoolConfig.name} Lost & Found
        </motion.h1>
        <motion.p 
          className="text-base font-medium text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The official lost and found portal for {schoolConfig.name}, helping our campus community 
          reconnect with their belongings through 
          <span className="font-semibold text-zetech-primary"> student collaboration</span> and 
          <span className="font-semibold text-zetech-primary"> efficient systems</span>.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-20">
        <GlassCard variant="elevated" className="p-8" delay={0.1}>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-zetech-primary/20 flex items-center justify-center mr-3">
              <FaBullseye className="text-lg text-zetech-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-7">
            To ensure no item stays lost on {schoolConfig.shortName} campus. We connect finders with owners 
            through a streamlined digital system that makes reporting and claiming items 
            <span className="text-zetech-primary font-semibold"> quick, secure, and hassle-free</span>.
          </p>
        </GlassCard>

        <GlassCard variant="elevated" className="p-8 bg-gradient-to-br from-zetech-primary/20 to-zetech-secondary/20 border-zetech-primary/30" delay={0.2}>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-zetech-primary/30 flex items-center justify-center mr-3">
              <FaHandshake className="text-lg text-zetech-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Promise</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-7">
            Every claim is handled with care. We use a 
            <span className="font-semibold text-zetech-primary"> verification system</span> to ensure items 
            are returned to their rightful owners, maintaining trust and integrity across campus.
          </p>
        </GlassCard>
      </section>

      {/* How It Works */}
      <GlassCard variant="elevated" className="p-10 mb-20" delay={0.3}>
        <h2 className="text-2xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          <FaSearch className="inline-block mr-3 text-zetech-primary" />
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: FaSearch, title: "Report", text: "Post details with photos and the campus location where you lost/found the item"},
            {icon: FaShieldAlt, title: "Verify", text: "Security officers review claims and verify ownership before release"},
            {icon: FaHeart, title: "Reunite", text: "Collect your item from the Lost & Found office with verification"}
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-zetech-primary/10 dark:hover:bg-zetech-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zetech-primary/20 to-zetech-secondary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-2xl text-zetech-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-6">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Campus Locations */}
      <section className="mb-20">
        <GlassCard variant="elevated" className="p-10" delay={0.4}>
          <h2 className="text-2xl font-bold mb-8 text-zetech-primary dark:text-zetech-secondary">Campus Collection Points</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-base">Found items can be dropped off or collected at these locations:</p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {schoolConfig.locations.slice(0, 8).map((location, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-white/40 dark:bg-slate-800/40 rounded-lg backdrop-blur-md border border-white/20 dark:border-white/10 text-center hover:bg-zetech-primary/10 dark:hover:bg-zetech-primary/20 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{location}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <GlassCard variant="elevated" className="p-10 bg-gradient-to-br from-zetech-primary/15 to-zetech-secondary/15 border-zetech-primary/30" delay={0.5}>
          <h2 className="text-2xl font-bold mb-10 text-gray-800 dark:text-white">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {title: "Integrity", text: "Honest reporting and verified claims only"},
              {title: "Community", text: "Students helping students across campus"},
              {title: "Security", text: "Protected data and secure verification process"}
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="p-6 bg-white/50 dark:bg-slate-800/40 rounded-xl backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-zetech-primary/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-bold mb-2 text-zetech-primary dark:text-zetech-secondary">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-6">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Contact Section */}
      <GlassCard variant="elevated" className="p-10" delay={0.6}>
        <div className="text-center">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-zetech-primary/20 to-zetech-secondary/20 flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaEnvelope className="text-3xl text-zetech-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Need Help?</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-2">Lost & Found Office: <span className="font-semibold text-zetech-primary">{schoolConfig.contact.phone}</span></p>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-8">Email: <span className="font-semibold text-zetech-primary">{schoolConfig.contact.email}</span></p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="inline-block bg-gradient-to-r from-zetech-primary to-zetech-secondary text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </GlassCard>
    </div>
  );
};

export default AboutUs;
