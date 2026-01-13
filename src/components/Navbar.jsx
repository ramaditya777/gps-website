import React from "react";
import x from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-cyan-500 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={x} alt="GPS" className="h-10 rounded-3xl" />
          <span className="text-cyan-400 font-bold">Gill Power Solutions</span>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>
          <a href="#services" className="hover:text-cyan-400">
            Services
          </a>
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
