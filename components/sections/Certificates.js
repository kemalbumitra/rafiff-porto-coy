"use client"
import { useState, useEffect } from 'react'; // Tambah useEffect
import { motion, AnimatePresence } from 'framer-motion'; // Tambah AnimatePresence di sini!
import Image from 'next/image';

const certificates = [
  {
    title: "MSIB Batch 5 Game Development",
    issuer: "Infinite Learning",
    year: "2024",
    image: "/certificates/infinite.png" 
  },
  {
    title: "BNSP Graphic Design",
    issuer: "BNSP",
    year: "2025",
    image: "/certificates/bnsp.png"
  },
  {
    title: "MSIB Batch 7 Game Development",
    issuer: "Agate",
    year: "2024",
    image: "/certificates/agate.png"
  },
  {
    title: "HIMA Game Technology",
    issuer: "MPM Polimedia",
    year: "2024",
    image: "/certificates/ormawa.png"
  }
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  // 1. Fitur Scroll Lock: Mencegah background scroll saat lightbox buka
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImg]);

  // 2. Fitur Keyboard ESC: Tutup lightbox dengan tombol Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImg(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="certificates" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10 text-white">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white/5 border border-white/10 p-4 rounded-2xl cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImg(cert.image)}
          >
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-xl bg-slate-900">
              <Image 
                src={cert.image} 
                alt={cert.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <h3 className="text-white font-bold">{cert.title}</h3>
            <p className="text-blue-400 text-sm">{cert.issuer}</p>
            <p className="text-slate-500 text-xs mt-1">{cert.year}</p>
          </motion.div>
        ))}
      </div>

      {/* OVERLAY LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()} // Supaya klik di gambar gak nutup lightbox
            >
              <Image
                src={selectedImg}
                alt="Enlarged Certificate"
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
            
            <button 
              className="absolute top-10 right-10 text-white text-4xl hover:text-blue-400 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}