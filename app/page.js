"use client"
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Education from '../components/sections/Education';
import Projects from '../components/sections/Projects';
import Certificates from '../components/sections/Certificates';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* Bungkus semua konten di dalam motion.div agar semuanya ikut teranimasi */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 3, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
        <div className="p-10">
           <Hero />
           <Education />
           <Projects />
           <Certificates /> 
           <Skills />
           <Contact />
           <Footer />
        </div>
      </motion.div>
    </main>
  );
}