import React from "react";
import { FaBullseye, FaHandshake, FaEnvelope, FaSearch, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { schoolConfig } from "../../config/schoolConfig";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - {schoolConfig.name} Lost & Found</title>
      </Helmet>

      {/* Hero Section - Clean & Minimal */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About {schoolConfig.name} Lost & Found
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A student-powered platform connecting lost items with their owners through simple, secure, and honest reporting.
          </p>
        </div>
      </section>

      {/* Mission & Promise - Side by Side */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gray-100 rounded-lg">
                <FaBullseye className="text-xl text-zetech-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To ensure no item stays lost on {schoolConfig.shortName} campus. We connect finders with owners through a streamlined digital system that makes reporting and claiming items <span className="text-zetech-primary font-semibold">quick, secure, and hassle-free</span>.
            </p>
          </div>

          {/* Promise Card */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-zetech-primary rounded-lg">
                <FaHandshake className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Promise</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Every claim is handled with care using our <span className="text-zetech-primary font-semibold">verification system</span> to ensure items are returned to their rightful owners, maintaining trust and integrity across campus.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Simple Flow */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaSearch, number: "01", title: "Report", text: "Post details with photos and campus location of lost or found items" },
              { icon: FaShieldAlt, number: "02", title: "Verify", text: "Our team reviews claims and verifies ownership before release" },
              { icon: FaHandshake, number: "03", title: "Reunite", text: "Collect your item from the office with verification" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <span className="text-sm font-bold text-gray-400">{item.number}</span>
                </div>
                <div className="p-3 bg-white rounded-lg inline-block mb-4">
                  <item.icon className="text-2xl text-zetech-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Locations - Compact Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Collection Points</h2>
        <p className="text-gray-600 mb-8">Found items can be dropped off or collected at:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {schoolConfig.locations.slice(0, 8).map((location, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium text-gray-700">{location}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values - Minimal Display */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", text: "Honest reporting and verified claims only" },
              { title: "Community", text: "Students helping students across campus" },
              { title: "Security", text: "Protected data and secure verification process" }
            ].map((value, index) => (
              <div key={index} className="border-l-2 border-zetech-primary pl-6">
                <h3 className="text-xl font-bold mb-2 text-zetech-primary">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Clean Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center">
          <div className="mb-6">
            <FaEnvelope className="text-4xl text-zetech-primary mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-2">Lost & Found Office: <span className="font-semibold">{schoolConfig.contact.phone}</span></p>
          <p className="text-gray-600 mb-8">Email: <span className="font-semibold">{schoolConfig.contact.email}</span></p>
          <Link to="/contact" className="inline-block bg-zetech-primary text-white px-8 py-3 rounded-lg hover:bg-zetech-secondary transition-colors font-semibold">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
