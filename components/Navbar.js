"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-7"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter">
          RAFIF PADHILLAH WIBOWO<span className="text-blue-600"></span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest">
          <a href="#projects" className="hover:text-blue-600 transition-colors">Work</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}