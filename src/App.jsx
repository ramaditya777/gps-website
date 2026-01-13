import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./assets/logo.png"; // Keep import for webpack

export default function App() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

// import React from "react";
// import x from "./assets/logo.png";
// export default function App() {
//   return (
//     <div className="bg-black text-white font-sans scroll-smooth">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-cyan-500 z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//           <div className="flex items-center gap-2">
//             <img src={x} alt="GPS" className="h-10 rounded-3xl" />
//             <span className="text-cyan-400 font-bold">
//               Gill Power Solutions
//             </span>
//           </div>
//           <div className="space-x-6 hidden md:flex">
//             <a href="#home" className="hover:text-cyan-400">
//               Home
//             </a>
//             <a href="#services" className="hover:text-cyan-400">
//               Services
//             </a>
//             <a href="#about" className="hover:text-cyan-400">
//               About
//             </a>
//             <a href="#contact" className="hover:text-cyan-400">
//               Contact
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-cyan-900 pt-20"
//       >
//         <div className="text-center max-w-3xl px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">
//             GILL POWER SOLUTIONS
//           </h1>
//           <p className="mt-4 text-lg md:text-xl">
//             Expert Electrical Solutions for Your Home and Business
//           </p>
//           <p className="mt-2 text-cyan-300">
//             EV Charging • Earthing • Industrial Electrical • Telecom
//           </p>
//           <a
//             href="#contact"
//             className="inline-block mt-6 bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400"
//           >
//             Contact Us
//           </a>
//         </div>
//       </section>

//       {/* Services */}
//       <section id="services" className="py-20 bg-black">
//         <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
//           {[
//             "EV Charger Installation",
//             "Earthing Work",
//             "Commercial & Industrial Electrical",
//             "Telecom Solutions",
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="bg-cyan-900/30 border border-cyan-500 rounded-xl p-6 text-center hover:scale-105 transition"
//             >
//               <h3 className="text-xl font-semibold text-cyan-300">{service}</h3>
//               <p className="mt-2 text-sm text-gray-300">
//                 Professional and government-approved service.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About */}
//       <section
//         id="about"
//         className="py-20 bg-gradient-to-r from-black to-cyan-950"
//       >
//         <div className="max-w-5xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Us</h2>
//           <p className="text-gray-300">
//             Gill Power Solutions is a government-approved electrical service
//             provider specializing in EV charging installations, industrial
//             electrical work, earthing solutions, and telecom services. We focus
//             on safety, quality, and reliable support for homes and businesses.
//           </p>
//           <div className="mt-6 inline-block bg-green-600 px-6 py-2 rounded-full font-semibold">
//             Govt. Approved
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 bg-black">
//         <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">
//           Contact Us
//         </h2>
//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4">
//           <div>
//             <p className="mb-4">📞 8810396768</p>
//             <p className="mb-4">📧 baljeetsingh2k@gmail.com</p>
//             <p className="mb-4">📍 Serving Residential & Commercial Clients</p>
//           </div>
//           <form className="bg-cyan-900/30 p-6 rounded-xl border border-cyan-500">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full mb-4 p-3 bg-black border border-cyan-500 rounded"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full mb-4 p-3 bg-black border border-cyan-500 rounded"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="w-full mb-4 p-3 bg-black border border-cyan-500 rounded h-28"
//             ></textarea>
//             <button className="w-full bg-cyan-500 text-black py-3 rounded font-semibold hover:bg-cyan-400">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 border-t border-cyan-500">
//         <p className="text-sm text-gray-400">
//           © 2026 Gill Power Solutions. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }
