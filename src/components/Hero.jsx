import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-cyan-900 pt-20"
    >
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">
          GILL POWER SOLUTIONS
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Expert Electrical Solutions for Your Home and Business
        </p>
        <p className="mt-2 text-cyan-300">
          EV Charging • Earthing • Industrial Electrical • Telecom
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
