import React from 'react';
import { Link } from 'react-router-dom';
import { schoolConfig } from '../../config/schoolConfig';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-zetech-dark text-white p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo and Info Section */}
          <aside className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-zetech-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{schoolConfig.shortName}</span>
              </div>
              <div>
                <p className="text-lg font-bold">{schoolConfig.name}</p>
                <p className="text-sm text-zetech-secondary">{schoolConfig.slogan}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Official Lost & Found Portal for {schoolConfig.name}. Helping students and staff reunite with their belongings.
            </p>
          </aside>

          {/* Quick Links Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold text-zetech-secondary mb-4">Quick Links</h6>
            <div className="flex flex-col gap-2">
              <Link to="/" className="link link-hover hover:text-zetech-secondary transition">Home</Link>
              <Link to="/allItems" className="link link-hover hover:text-zetech-secondary transition">Lost & Found Items</Link>
              <Link to="/addItems" className="link link-hover hover:text-zetech-secondary transition">Report Item</Link>
              <Link to="/allRecovered" className="link link-hover hover:text-zetech-secondary transition">Recovered Items</Link>
            </div>
          </nav>

          {/* Navigation Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold text-zetech-secondary mb-4">Information</h6>
            <div className="flex flex-col gap-2">
              <Link to="/aboutUs" className="link link-hover hover:text-zetech-secondary transition">About Us</Link>
              <Link to="/contact" className="link link-hover hover:text-zetech-secondary transition">Contact</Link>
              <a href="#" className="link link-hover hover:text-zetech-secondary transition">Terms of Use</a>
              <a href="#" className="link link-hover hover:text-zetech-secondary transition">Privacy Policy</a>
            </div>
          </nav>

          {/* Contact Section */}
          <nav>
            <h6 className="footer-title text-lg font-semibold text-zetech-secondary mb-4">Contact Us</h6>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${schoolConfig.contact.email}`} className="flex items-center gap-2 hover:text-zetech-secondary transition">
                <FaEnvelope className="text-zetech-secondary" />
                {schoolConfig.contact.email}
              </a>
              <a href={`tel:${schoolConfig.contact.phone}`} className="flex items-center gap-2 hover:text-zetech-secondary transition">
                <FaPhone className="text-zetech-secondary" />
                {schoolConfig.contact.phone}
              </a>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-zetech-secondary" />
                {schoolConfig.contact.address}
              </span>
              <a href={`https://${schoolConfig.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zetech-secondary transition">
                <FaGlobe className="text-zetech-secondary" />
                {schoolConfig.contact.website}
              </a>
            </div>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {schoolConfig.name} Lost & Found. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
