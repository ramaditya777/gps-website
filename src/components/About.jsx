import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-black via-cyan-950/20 to-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            About <span className="text-white">Gill Power Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                Government Approved Electrical Experts
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Gill Power Solutions delivers comprehensive electrical services
                across New Delhi and surrounding areas. With government
                certification and years of experience, we specialize in safe,
                reliable solutions for residential, commercial, and industrial
                clients.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-black/50 rounded-xl border border-cyan-500/30">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400 mt-1">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-6 bg-black/50 rounded-xl border border-cyan-500/30">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400 mt-1">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center p-6 bg-black/50 rounded-xl border border-cyan-500/30">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400 mt-1">
                  Emergency Service
                </div>
              </div>
              <div className="text-center p-6 bg-black/50 rounded-xl border border-cyan-500/30">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-400 mt-1">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-900/30 to-transparent p-8 rounded-2xl border border-cyan-500/50 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                ⚡ <span>Core Specializations</span>
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  🔌 EV Charging Station Installation
                </li>
                <li className="flex items-center gap-2">
                  🌍 Professional Earthing Solutions
                </li>
                <li className="flex items-center gap-2">
                  🏭 Industrial Electrical Systems
                </li>
                <li className="flex items-center gap-2">
                  📡 Telecom Infrastructure
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="bg-green-600/80 backdrop-blur-sm border border-green-500/50 p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-bold text-white mb-2">
                Ready for Power?
              </h4>
              <p className="text-green-100 mb-4">
                Get your free consultation today
              </p>
              <a
                href="#home"
                className="inline-block bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Quote Now
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-cyan-500/30">
          <div className="text-center p-6">
            <div className="text-2xl mb-2">🏛️</div>
            <p className="font-semibold text-cyan-400">Govt. Approved</p>
          </div>
          <div className="text-center p-6">
            <div className="text-2xl mb-2">🔒</div>
            <p className="font-semibold text-cyan-400">Safety Certified</p>
          </div>
          <div className="text-center p-6">
            <div className="text-2xl mb-2">⚡</div>
            <p className="font-semibold text-cyan-400">24/7 Emergency</p>
          </div>
          <div className="text-center p-6">
            <div className="text-2xl mb-2">⭐</div>
            <p className="font-semibold text-cyan-400">5-Star Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
