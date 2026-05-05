"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  // FUNGSI SCROLL HALUS (PENGGANTI LINK)
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-10">
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* SISI KIRI: TEKS & TOMBOL */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">
            Game 2D/3D Artist
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mt-1 mb-3 tracking-tighter text-white leading-[1.1]">
            Portofolio <br />
            <span className="text-slate-400">Rafif Padhillah .W</span>
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-md">
            I am a 3D Artist with a D4 degree in Game Technology from Politeknik Negeri Media Kreatif, 
            with experience in creating 3D assets for games. I have strong technical skills and visual creativity, 
            and I am accustomed to working with game asset pipelines from modeling to final integration.
          </p>

          <div className="flex flex-wrap gap-3">
            {/* GANTI LINK JADI BUTTON */}
            <button 
              onClick={handleScroll}
              className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-slate-200 transition-all active:scale-95 shadow-lg shadow-white/5 cursor-pointer"
            >
              Explore Projects
            </button>
            
            <a 
              href="/CV-Rafif-Padhillah-Wibowo.pdf" 
              download="CV-Rafif-Padhillah-Wibowo.pdf"
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* SISI KANAN: FOTO PROFIL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-80">
            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full animate-pulse" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 hover:border-blue-500/50">
              <Image
                src="/profile.png" 
                alt="Rafif Phadillah .W"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-2 -left-2 bg-blue-600 px-3 py-1.5 rounded-lg shadow-xl hidden md:block"
            >
              <span className="text-white font-bold text-[10px]">Available for Work 🚀</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}