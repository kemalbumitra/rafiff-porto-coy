"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Import router
import Image from 'next/image';

const projectsData = [
  {
    title: "Pusaka",
    slug: "2d-pusaka",
    tag: "2D Platformer, Casual & Edukasi",
    desc: "Games 2D Platformer for Education.",
    image: "/images/pusaka-preview.png"
  },
  {
    title: "Sold Out",
    slug: "sold-out",
    tag: "3D Games",
    desc: "3D games.",
    image: "/images/sold-out-preview.png"
  },
  
  {
    title: "3D Assets Collection",
    slug: "3d-portfolio",
    tag: "3D Modeling",
    desc: "High-quality 3D assets for various game projects.",
    image: "/images/blender-preview.jpg"
  },
  {
    title: "2D Assets Collection",
    slug: "2d-portfolio",
    tag: "2D Art",
    desc: "A collection of 2D artwork for various creative projects.",
    image: "/images/2d-preview.png"
  }
];

export default function Projects() {
  const router = useRouter(); // Inisialisasi router

  const handleNavigation = (e, slug) => {
    // 1. Matikan semua fungsi bawaan biar gak muncul #projects di URL
    e.preventDefault();
    e.stopPropagation();
    
    // 2. Paksa pindah halaman secara total
    // Ini akan membersihkan URL dan pasti bisa diklik berkali-kali
    window.location.href = `/professional/${slug}`;
  };

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6 scroll-mt-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-white flex items-center gap-4"
      >
        Selected Projects
        <div className="h-[1px] w-20 bg-blue-500/50"></div>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            {/* Pakai button sebagai trigger navigasi agar event klik lebih responsif */}
            <button 
            type="button" // Pastikan tipenya button, bukan submit
              onClick={(e) => handleNavigation(e, project.slug)}
                className="group block text-left w-full cursor-pointer relative z-10 outline-none"
>
              <motion.div
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }} // Feedback visual saat diklik
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 mb-6 transition-all group-hover:border-blue-500/50 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ imageRendering: project.tag.includes('Pixel') ? 'pixelated' : 'auto' }}
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <span className="inline-block text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] bg-blue-500/5 px-2 py-1 rounded border border-blue-500/10">
                    {project.tag}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {project.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}