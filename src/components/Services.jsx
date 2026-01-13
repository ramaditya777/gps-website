import React from "react";

const services = [
  "EV Charger Installation",
  "Earthing Work",
  "Commercial & Industrial Electrical",
  "Telecom Solutions",
  "xxx",
  "xxx",
  "xxx",
  "xxx",
  "xxx",
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-cyan-900/30 border border-cyan-500 rounded-xl p-6 text-center hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-cyan-300">{service}</h3>
            <p className="mt-2 text-sm text-gray-300">
              Professional and government-approved service.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
