import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-t from-black to-cyan-950 pt-20 pb-12 border-t border-cyan-500"
    >
      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info - FIXED EMAIL */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-cyan-400 text-xl">📞</span>
                <span>+91 88103 96768</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-cyan-400 text-xl">📧</span>
                <a
                  href="mailto:baljeetsingh2k@gmail.com"
                  className="hover:text-cyan-400"
                >
                  baljeetsingh2k@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-cyan-400 text-xl">📍</span>
                New Delhi, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center md:text-left">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <a href="#home" className="hover:text-cyan-400 block py-1">
                Home
              </a>
              <a href="#services" className="hover:text-cyan-400 block py-1">
                Services
              </a>
              <a href="#about" className="hover:text-cyan-400 block py-1">
                About
              </a>
              <a href="#services" className="hover:text-cyan-400 block py-1">
                EV Charging
              </a>
            </div>
          </div>

          {/* WhatsApp & Business Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Connect Now
            </h3>
            <p className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-cyan-400 text-xl">💬</span>
              <a
                href="https://wa.me/918810396768"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-lg font-semibold inline-block"
              >
                WhatsApp
              </a>
            </p>
            <div className="bg-cyan-900/50 p-4 rounded-xl">
              <p className="text-sm text-gray-300 mb-2">🕒 Business Hours</p>
              <p className="text-xs text-cyan-300">Mon-Sat: 8AM - 8PM</p>
              <p className="text-xs text-cyan-300">24/7 Emergency Service</p>
            </div>
          </div>

          {/* Social Media */}
          {/* <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Follow Us</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#"
                className="w-12 h-12 bg-cyan-500/20 hover:bg-cyan-500 text-cyan-400 rounded-xl flex items-center justify-center text-xl hover:scale-110 transition"
                title="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white rounded-xl flex items-center justify-center text-xl hover:scale-110 transition"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center text-xl hover:scale-110 transition"
                title="Messenger"
              >
                💬
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-blue-700 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl hover:scale-110 transition"
                title="Twitter"
              >
                🐦
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Government Approved Electrical Services
            </p>
          </div> */}

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Follow Us</h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {/* Facebook */}
              <a
                href="https://facebook.com/gillpowersolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 hover:from-cyan-500 hover:to-cyan-400 border-2 border-cyan-500/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 backdrop-blur-sm"
                title="Facebook"
              >
                <FaFacebookF className="text-xl text-cyan-300 group-hover:text-white transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/gillpowersolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-400/30 hover:from-pink-500 hover:to-purple-500 border-2 border-pink-500/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25 backdrop-blur-sm"
                title="Instagram"
              >
                <FaInstagram className="text-xl text-pink-300 group-hover:text-white transition-colors" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918810396768"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/30 hover:from-green-500 hover:to-emerald-500 border-2 border-green-500/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25 backdrop-blur-sm"
                title="WhatsApp"
              >
                <FaWhatsapp className="text-xl text-green-400 group-hover:text-white transition-colors" />
              </a>

              {/* Phone */}
              <a
                href="tel:+918810396768"
                className="group relative w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/30 hover:from-blue-500 hover:to-cyan-500 border-2 border-blue-500/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm"
                title="Call Now"
              >
                <FaPhoneAlt className="text-xl text-blue-400 group-hover:text-white transition-colors" />
              </a>

              {/* Email */}
              <a
                href="mailto:baljeetsingh2k@gmail.com"
                className="group relative w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/30 hover:from-orange-500 hover:to-red-500 border-2 border-orange-500/50 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25 backdrop-blur-sm"
                title="Email Us"
              >
                <FaEnvelope className="text-xl text-orange-400 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-6 font-medium">
              ⚡ Government Approved Electrical Services
            </p>
          </div>
        </div>
      </div>

      {/* Copyright - FINAL BOTTOM */}
      <div className="border-t border-cyan-500/50 pt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 mb-4">
            © 2026{" "}
            <span className="text-cyan-400 font-semibold">
              Gill Power Solutions
            </span>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <span>🔒 SSL Secured</span>
            <span>⚡ Govt. Approved</span>
            <span>🛠️ 24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
